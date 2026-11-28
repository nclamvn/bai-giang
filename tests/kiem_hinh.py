#!/usr/bin/env python3
"""Kiểm mục Chất lượng hình của app (màn Đã tải) và cách vỏ bài làm theo (shell/bg-shell.js, ?hinh=).

  python3 tests/kiem_hinh.py 8777

  H1  màn Đã tải có ba lựa chọn, mặc định Tự động
  H2  Tự động trên điện thoại (mật độ màn 3): bài vẽ ở mật độ 1,5, không bật chế độ nhẹ
  H3  Tiết kiệm pin: app mở bài với ?hinh=tiet-kiem, mật độ 1, chế độ nhẹ bật
  H4  vỏ bài bọc requestAnimationFrame còn tối đa 30 khung mỗi giây, hai vòng vẽ cùng nhịp, huỷ được
  H5  Tự động, bài báo chạy chậm ở 2 bài khác nhau: app báo người học, bài sau mở với ?hinh=yeu (mật độ 1, chế độ nhẹ)
  H6  Đẹp nhất: không giới hạn mật độ (bài tự chặn ở 2 hoặc 1,75)
Thoát mã 1 nếu một bước hỏng.
"""
import sys
from playwright.sync_api import sync_playwright

PORT = sys.argv[1] if len(sys.argv) > 1 else '8777'
R = f'http://127.0.0.1:{PORT}/app/index.html'
loi = []


def kiem(ten, dk, chi_tiet=''):
    print(('đạt ' if dk else 'LỖI ') + ten + (f' · {chi_tiet}' if chi_tiet else '')); dk or loi.append(ten)


def main():
    with sync_playwright() as p:
        b = p.chromium.launch()
        c = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=3, has_touch=True, is_mobile=True)
        pg = c.new_page()

        def mo(slug):
            pg.goto('about:blank'); pg.goto(R + '#/bai/' + slug)
            pg.wait_for_function("() => /bước/i.test(document.getElementById('cap-k').textContent)", timeout=120000)
            return pg.frame(name='bgs-canh').evaluate("() => ({dpr: devicePixelRatio, lite: !!document.documentElement.dataset.bgLite, q: location.search})")

        def chon(h):
            pg.goto('about:blank'); pg.goto(R + '#/da-tai'); pg.wait_for_selector('#hinh button'); pg.click(f'#hinh [data-hinh="{h}"]')

        pg.goto(R + '#/da-tai'); pg.wait_for_selector('#hinh button')
        nut = pg.eval_on_selector_all('#hinh button', 'e => e.map(x => x.dataset.hinh + ":" + x.getAttribute("aria-pressed"))')
        kiem('H1 ba lựa chọn, mặc định Tự động', nut == ['tu-dong:true', 'tiet-kiem:false', 'dep:false'], str(nut))
        r = mo('enzyme-step')
        kiem('H2 Tự động: mật độ 1,5 trên điện thoại', r['dpr'] == 1.5 and not r['lite'] and 'hinh=' not in r['q'], str(r))
        chon('tiet-kiem'); r = mo('enzyme-step')
        kiem('H3 Tiết kiệm pin: mật độ 1, chế độ nhẹ', r['dpr'] == 1 and r['lite'] and 'hinh=tiet-kiem' in r['q'], str(r))
        nhip = pg.frame(name='bgs-canh').evaluate("""() => new Promise((ok) => { let a = 0, g = 0, x = 0; const t0 = performance.now();
          cancelAnimationFrame(requestAnimationFrame(() => { x++; }));
          const f = () => { a++; if (performance.now() - t0 < 2000) requestAnimationFrame(f); else ok({a, g, x}); };
          const h = () => { g++; if (performance.now() - t0 < 2000) requestAnimationFrame(h); };
          requestAnimationFrame(f); requestAnimationFrame(h); })""")
        kiem('H4 tối đa 30 khung mỗi giây, cùng nhịp, huỷ được', nhip['a'] <= 64 and abs(nhip['a'] - nhip['g']) <= 1 and nhip['x'] == 0, str(nhip))
        chon('tu-dong')
        for k, s in enumerate(('enzyme-step', 'than-kinh'), 1):
            mo(s); pg.frame(name='bgs-canh').evaluate("() => parent.postMessage({t: 'hinh', yeu: true, why: 'thử'}, location.origin)")
            # máy CI chậm: chờ app ghi nhận xong rồi mới mở bài khác
            try: pg.wait_for_function(f"() => JSON.parse(localStorage.getItem('sak-hinh-cham') || '[]').length >= {k}", timeout=20000)
            except Exception: pass
        tin = pg.text_content('#st-msg') or ''
        r = mo('enzyme-step')
        kiem('H5 chậm ở 2 bài: báo người học, bài sau vẽ hình nhẹ', 'chạy chậm' in tin and r['dpr'] == 1 and r['lite'] and 'hinh=yeu' in r['q'], str(r))
        chon('dep'); r = mo('enzyme-step')
        kiem('H6 Đẹp nhất: không giới hạn mật độ', r['dpr'] == 3 and 'hinh=dep' in r['q'], str(r))
        b.close()
    print('tổng:', 'đạt' if not loi else 'lỗi ở ' + ', '.join(loi))
    sys.exit(1 if loi else 0)


if __name__ == '__main__':
    main()
