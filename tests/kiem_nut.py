#!/usr/bin/env python3
"""Rà mọi nút, liên kết của vỏ app (app/): bấm như người dùng trên điện thoại có cảm ứng, kiểm từng nút có tác dụng đúng.

  python3 tests/kiem_nut.py 8777                 cỡ điện thoại 390x844 (mặc định)
  python3 tests/kiem_nut.py 8777 --co 1180x820   cỡ máy tính bảng

Ra đời sau lỗi thấy trên máy thật (28/11/2026): đang ở Thư viện, bấm tab Thư viện không có tác dụng gì.

  N1  tab Thư viện bấm lại khi đang ở Thư viện: cuộn tới danh sách bài; bấm lần nữa: về đầu trang
  N2  tab Đã tải mở màn Đã tải, viên kính chỉ mục trượt theo tab; bấm lại khi đã cuộn: về đầu trang; tab Thư viện quay lại
  N3  tab Học tiếp mở bài đang học dở
  N4  ảnh lớn đầu Thư viện mở đúng bài của nó
  N5  từng nút lọc môn: số thẻ hiện bằng số bài của môn trong danh mục; Tất cả hiện đủ
  N6  ô tìm: tìm "neuron" ra bài Neuron; chuỗi không khớp hiện "Không có bài nào khớp"; xoá chữ hiện đủ
  N7  bấm thẻ bài mở đúng bài
  N8  sân khấu: Bắt đầu, Bước tiếp, Bước trước, nút trên thanh bước, câu hỏi báo đúng sai, Ẩn chữ, Đọc thêm (nếu có),
      bảng của bài (nếu có), Xong bài ở bước cuối về Thư viện, nút Đóng về Thư viện, nút Lớp học vào và thoát chế độ lớp
  N9  Đã tải: ba nút Chất lượng hình đổi lựa chọn; liên kết Giới thiệu, Chính sách riêng tư mở trang và có đường Về app
  N10 mọi nút, liên kết đang hiện của app có tên đọc được (chữ hoặc aria-label) và vùng bấm không nhỏ hơn 44 px
Thoát mã 1 nếu một bước hỏng.
"""
import json, sys, urllib.request
from playwright.sync_api import sync_playwright

PORT = sys.argv[1] if len(sys.argv) > 1 and sys.argv[1].isdigit() else '8777'
ROOT = f'http://127.0.0.1:{PORT}'
R = f'{ROOT}/app/index.html'
arg = lambda k, d=None: sys.argv[sys.argv.index(k) + 1] if k in sys.argv else d
W, H = map(int, arg('--co', '390x844').split('x'))
loi = []


def kiem(ten, dk, chi_tiet=''):
    print(('đạt ' if dk else 'LỖI ') + ten + (f' · {chi_tiet}' if chi_tiet and not dk else ''), flush=True)
    if not dk: loi.append(ten)


def thu(ten, f):
    try: f()
    except Exception as e: kiem(ten, False, 'lỗi bộ kiểm: ' + str(e)[:200])


# nút đang hiện trong vỏ app (không tính khung bài), thiếu tên hoặc nhỏ hơn 44 px
DO_NUT = """() => { const out = [];
  for (const e of document.querySelectorAll('button, a[href], input, [role=button]')) {
    if (e.closest('iframe')) continue;
    const r = e.getBoundingClientRect(), cs = getComputedStyle(e);
    if (!r.width || !r.height || cs.visibility === 'hidden' || e.closest('[hidden]')) continue;
    if (r.bottom < 0 || r.top > innerHeight || r.right < 0 || r.left > innerWidth) continue;
    if (e.classList.contains('bg-skip')) continue;
    const ten = (e.getAttribute('aria-label') || e.textContent || e.getAttribute('placeholder') || '').trim();
    const id = e.id || e.className || e.tagName;
    if (!ten) out.push('không tên: ' + id);
    // liên kết nằm giữa câu chữ được miễn (WCAG 2.5.8); thanh bước thu thành thanh tiến độ khi nhiều bước
    if (e.tagName === 'INPUT') continue;
    if (Math.min(r.width, r.height) < 43.5 && !e.closest('p:not(.phap-ly)')) out.push(`nhỏ ${Math.round(r.width)}×${Math.round(r.height)}: ${ten.slice(0, 30) || id}`);
  } return out; }"""


def main():
    cat = json.load(urllib.request.urlopen(f'{ROOT}/app/danh-muc.json'))
    with sync_playwright() as p:
        b = p.chromium.launch()
        c = b.new_context(viewport={'width': W, 'height': H}, has_touch=True, is_mobile=W < 700)
        pg = c.new_page()
        loi_trang = []
        # chuyển trang bằng view transition bị huỷ khi bộ kiểm nhảy trang liên tục (about:blank): lỗi của trình duyệt, không của app
        pg.on('pageerror', lambda e: None if 'Transition was aborted' in str(e) else loi_trang.append(str(e)[:160]))
        nhom = lambda: pg.evaluate("() => [...document.querySelectorAll('.view')].find((s) => !s.hidden)?.id || ''")
        san_khau = lambda: pg.evaluate("() => !document.getElementById('stage').hidden")
        cho_buoc = lambda: pg.wait_for_function("() => /bước/i.test(document.getElementById('cap-k').textContent)", timeout=120000)

        def ve_thu_vien():
            pg.goto('about:blank'); pg.goto(R + '#/thu-vien'); pg.wait_for_selector('#grid li', state='attached'); pg.wait_for_timeout(600)

        # N1
        def n1():
            ve_thu_vien(); pg.tap('#tab a[data-v="thu-vien"]'); pg.wait_for_timeout(1200)
            y1 = pg.evaluate('scrollY'); top = pg.evaluate("() => document.querySelector('.lib-in').getBoundingClientRect().top")
            pg.tap('#tab a[data-v="thu-vien"]'); pg.wait_for_timeout(1200); y2 = pg.evaluate('scrollY')
            kiem('N1 tab Thư viện bấm lại: cuộn tới danh sách, bấm nữa về đầu', y1 > 100 and 0 <= top < 160 and y2 == 0, f'y1={y1} top={top} y2={y2}')
        thu('N1', n1)

        # N2
        def n2():
            ve_thu_vien(); pg.tap('#tab a[data-v="da-tai"]'); pg.wait_for_timeout(800)
            v = nhom(); pill = pg.evaluate("() => { const p = document.getElementById('tab-pill').getBoundingClientRect(), a = document.querySelector('#tab a[data-v=da-tai]').getBoundingClientRect(); return Math.abs(p.left - a.left) < 3 && Math.abs(p.width - a.width) < 3 }")
            pg.evaluate('scrollTo(0, 400)'); pg.tap('#tab a[data-v="da-tai"]'); pg.wait_for_timeout(1200); y = pg.evaluate('scrollY')
            pg.tap('#tab a[data-v="thu-vien"]'); pg.wait_for_timeout(600)
            kiem('N2 tab Đã tải mở màn, viên kính theo tab, bấm lại về đầu, tab Thư viện quay lại', v == 'v-da-tai' and pill and y == 0 and nhom() == 'v-thu-vien', f'v={v} pill={pill} y={y} sau={nhom()}')
        thu('N2', n2)

        # N3
        def n3():
            pg.evaluate("localStorage.setItem('sak-app-gan-day', JSON.stringify({slug: 'hexapod', i: 2, n: 8}))")
            ve_thu_vien(); pg.tap('#tab a[data-v="hoc-tiep"]'); pg.wait_for_timeout(800)
            kiem('N3 tab Học tiếp mở bài đang học dở', 'bai/hexapod' in pg.url and san_khau(), pg.url)
        thu('N3', n3)

        # N4
        def n4():
            ve_thu_vien(); href = pg.get_attribute('#hero', 'href'); pg.tap('#hero'); pg.wait_for_timeout(800)
            kiem('N4 ảnh lớn mở đúng bài', href.startswith('#/bai/') and pg.url.endswith(href) and san_khau(), f'{href} {pg.url}')
        thu('N4', n4)

        # N5
        def n5():
            ve_thu_vien(); sai = []
            for m in [{'s': '', 'ten': 'Tất cả'}] + cat['mon']:
                pg.click(f'#chips .chip[data-s="{m["s"]}"]'); pg.wait_for_timeout(120)
                n = pg.evaluate("() => [...document.getElementById('grid').children].filter((li) => !li.hidden).length")
                mong = len([x for x in cat['bai'] if not m['s'] or x['s'] == m['s']])
                ep = pg.get_attribute(f'#chips .chip[data-s="{m["s"]}"]', 'aria-pressed')
                if n != mong or ep != 'true': sai.append(f'{m["ten"]}: {n}/{mong} pressed={ep}')
            kiem(f'N5 {len(cat["mon"]) + 1} nút lọc môn hiện đúng số bài', not sai, '; '.join(sai))
        thu('N5', n5)

        # N6
        def n6():
            ve_thu_vien(); pg.fill('#q', 'neuron'); pg.wait_for_timeout(150)
            hien = pg.evaluate("() => [...document.getElementById('grid').children].filter((li) => !li.hidden).map((li) => li.querySelector('a').getAttribute('href'))")
            pg.fill('#q', 'zzqxw'); pg.wait_for_timeout(150); rong = pg.is_visible('#lib-empty')
            pg.fill('#q', ''); pg.wait_for_timeout(150)
            du = pg.evaluate("() => [...document.getElementById('grid').children].filter((li) => !li.hidden).length")
            kiem('N6 ô tìm: ra bài, báo không khớp, xoá thì hiện đủ', '#/bai/than-kinh' in hien and rong and du == len(cat['bai']), f'{hien[:3]} rong={rong} du={du}')
        thu('N6', n6)

        # N7
        def n7():
            ve_thu_vien(); a = pg.query_selector('#grid li:nth-child(3) a'); href = a.get_attribute('href'); a.scroll_into_view_if_needed(); a.tap(); pg.wait_for_timeout(800)
            kiem('N7 thẻ bài mở đúng bài', pg.url.endswith(href) and san_khau(), f'{href} {pg.url}')
        thu('N7', n7)

        # N8 sân khấu với một bài kit (có câu hỏi và bảng)
        def n8():
            pg.goto('about:blank'); pg.evaluate("() => 0"); pg.goto(R + '#/bai/hexapod'); cho_buoc(); pg.wait_for_timeout(1500)
            k = lambda: pg.text_content('#cap-k')
            sai = []
            if 'Bắt đầu' in pg.text_content('#sau'):
                pg.tap('#sau'); pg.wait_for_function("() => /Bước 0?1 \\//.test(document.getElementById('cap-k').textContent)", timeout=30000)
            k0 = k(); pg.tap('#sau'); pg.wait_for_function('(t) => document.getElementById("cap-k").textContent !== t', arg=k0, timeout=30000)
            k1 = k(); pg.tap('#truoc'); pg.wait_for_function('(t) => document.getElementById("cap-k").textContent !== t', arg=k1, timeout=30000)
            if k() != k0: sai.append(f'Bước trước: {k()} khác {k0}')
            nb = pg.query_selector_all('#steps button[data-i]')
            if nb:
                nb[min(4, len(nb) - 1)].tap(); pg.wait_for_timeout(1500)
                if f'{min(4, len(nb) - 1) + 1:02d} /' not in k() and f'{min(4, len(nb) - 1) + 1} /' not in k(): sai.append('thanh bước: ' + k())
            # câu hỏi: đi tới bước có câu hỏi
            for _ in range(len(nb) or 12):
                if pg.is_visible('#cap-ask button'): break
                t = k(); pg.tap('#sau'); pg.wait_for_function('(t) => document.getElementById("cap-k").textContent !== t', arg=t, timeout=30000); pg.wait_for_timeout(400)
                if 'Xong' in pg.text_content('#sau'): break
            if pg.is_visible('#cap-ask button'):
                pg.tap('#cap-ask button'); pg.wait_for_timeout(300)
                if not pg.query_selector('#cap-ask .opt.dung, #cap-ask .opt.sai'): sai.append('câu hỏi không báo đúng sai')
            pg.tap('#an'); pg.wait_for_timeout(200)
            if not (pg.evaluate("document.getElementById('stage').classList.contains('sach')") and pg.get_attribute('#an', 'aria-pressed') == 'true' and not pg.is_visible('#cap')): sai.append('Ẩn chữ không ẩn')
            pg.tap('#an'); pg.wait_for_timeout(200)
            if not pg.is_visible('#cap'): sai.append('bấm lại Ẩn chữ không hiện lại')
            if pg.is_visible('#cap-more'):
                pg.tap('#cap-more'); pg.wait_for_timeout(150)
                if pg.get_attribute('#cap-more', 'aria-expanded') != 'true': sai.append('Đọc thêm')
                pg.tap('#cap-more')
            pn = pg.query_selector_all('#pnl button')
            if pn:
                pn[0].tap(); pg.wait_for_timeout(700)
                if pg.get_attribute('#pnl button', 'aria-pressed') != 'true': sai.append('bảng của bài không mở')
                pg.query_selector('#pnl button').tap(); pg.wait_for_timeout(700)
            # bước cuối: Xong bài về Thư viện
            for _ in range(30):
                if 'Xong' in pg.text_content('#sau'): break
                t = k(); pg.tap('#sau'); pg.wait_for_function('(t) => document.getElementById("cap-k").textContent !== t', arg=t, timeout=30000)
            pg.tap('#sau'); pg.wait_for_timeout(600)
            if san_khau() or nhom() != 'v-thu-vien': sai.append('Xong bài không về Thư viện')
            pg.goto(R + '#/bai/hexapod'); cho_buoc(); pg.tap('#dong'); pg.wait_for_timeout(500)
            if san_khau(): sai.append('Đóng không về Thư viện')
            pg.goto(R + '#/bai/than-kinh'); cho_buoc(); pg.tap('#lop-vao'); pg.wait_for_timeout(1200)
            vao = pg.is_visible('#lop')
            pg.evaluate("() => document.fullscreenElement && document.exitFullscreen()"); pg.wait_for_timeout(300)
            pg.click('#lop-thoat'); pg.wait_for_timeout(600)
            if not vao or pg.is_visible('#lop'): sai.append(f'Lớp học vào={vao} thoát={not pg.is_visible("#lop")}')
            kiem('N8 nút của sân khấu bài học', not sai, '; '.join(sai))
        thu('N8', n8)

        # N9
        def n9():
            pg.goto('about:blank'); pg.goto(R + '#/da-tai'); pg.wait_for_selector('#hinh button'); sai = []
            for h in ('tiet-kiem', 'dep', 'tu-dong'):
                pg.tap(f'#hinh [data-hinh="{h}"]'); pg.wait_for_timeout(100)
                if pg.get_attribute(f'#hinh [data-hinh="{h}"]', 'aria-pressed') != 'true' or pg.evaluate('document.documentElement.dataset.hinh') != h: sai.append('chất lượng ' + h)
            for t in ('Giới thiệu', 'Chính sách'):
                pg.goto(R + '#/da-tai'); pg.wait_for_selector('.phap-ly a')
                pg.click(f'.phap-ly a:has-text("{t}")'); pg.wait_for_load_state()
                ve = pg.query_selector('a:has-text("Về app")')
                if not ve: sai.append(t + ': không có Về app'); continue
                ve.click(); pg.wait_for_selector('#v-da-tai:not([hidden])', timeout=15000)
            kiem('N9 Đã tải: Chất lượng hình, Giới thiệu, Chính sách, Về app', not sai, '; '.join(sai))
        thu('N9', n9)

        # N10
        def n10():
            sai = []
            for dc, ten in ((R + '#/thu-vien', 'Thư viện'), (R + '#/da-tai', 'Đã tải'), (R + '#/bai/hexapod', 'Bài')):
                pg.goto('about:blank'); pg.goto(dc); pg.wait_for_timeout(1500)
                if 'bai/' in dc: cho_buoc(); pg.wait_for_timeout(800)
                sai += [f'{ten}: {x}' for x in pg.evaluate(DO_NUT)]
            kiem('N10 nút có tên, vùng bấm ≥ 44 px', not sai, '; '.join(sorted(set(sai))[:10]))
        thu('N10', n10)

        kiem('lỗi trang trong lúc rà', not loi_trang, '; '.join(sorted(set(loi_trang))[:4]))
        b.close()
    print('tổng:', 'đạt' if not loi else 'lỗi ở ' + ', '.join(loi))
    sys.exit(1 if loi else 0)


if __name__ == '__main__':
    main()
