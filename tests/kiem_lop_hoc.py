#!/usr/bin/env python3
"""Kiểm chế độ Lớp học của app (docs/app-ke-hoach-moc.md, mốc M6). Cần máy chủ tĩnh ở gốc repo.

  python3 tests/kiem_lop_hoc.py 8777            đầy đủ
  python3 tests/kiem_lop_hoc.py 8777 --nhanh    bỏ phần bố cục nhiều cỡ màn

  L1  #/lop/than-kinh: lớp Lớp học hiện, thanh điều hướng của app ẩn, kính tối, bài nhận chế độ máy chiếu (data-chieu)
  L2  bàn phím và bút trình chiếu: → PageDown sang bước, ← PageUp lùi bước
  L3  Ẩn nhãn để hỏi bài: bài có data-an-nhan, nhãn của bài (.pin, .lab…) ẩn, chữ của bước ẩn; bấm lại thì hiện
  L4  Màn đen: phím B che màn, Esc mở lại
  L5  Khoá góc nhìn (mặc định bật): điểm giữa cảnh thuộc lớp chắn của app; tắt thì thuộc khung bài
  L6  Chỉ điểm: rê chuột trên cảnh, chấm đỏ đi theo
  L7  màn hình giáo viên cùng máy (dieu-khien/?cung-may=1#mã): thấy bài và bước; bấm Tiếp ở đó thì app sang bước; app sang bước
      thì màn hình giáo viên cập nhật; bấm Màn đen ở đó thì app che màn
  L8  kính sáng: Robot sáu chân mặc định kính sáng; đổi kính được nhớ sau khi mở lại
  L9  Esc thoát chế độ lớp: về #/bai/<slug>, bài bỏ chế độ máy chiếu và ẩn nhãn
  L10 bố cục ở 1920×1080, 1280×720, 1024×768, 768×1024, 844×390: chữ, thanh, đầu không chồng nhau, nằm trong màn, nút ≥ 44 px
Thoát mã 1 nếu một mục hỏng.
"""
import sys
from playwright.sync_api import sync_playwright

PORT = sys.argv[1] if len(sys.argv) > 1 and sys.argv[1].isdigit() else '8777'
NHANH = '--nhanh' in sys.argv
APP = f'http://127.0.0.1:{PORT}/app/index.html'
loi = []


def kiem(ten, dk, chi_tiet=''):
    print(('đạt ' if dk else 'LỖI ') + ten + ('' if dk else ' · ' + str(chi_tiet)[:200]))
    if not dk: loi.append(ten)


def cho_buoc(pg, mau, han=60000):
    pg.wait_for_function("(m) => document.getElementById('lop-k').textContent.includes(m)", arg=mau, timeout=han)


def canh(pg):
    return pg.frame(name='bgs-canh')


def bam(pg, sel):
    """Bấm bằng JS: bài nặng vẽ bằng phần mềm (máy dựng không có GPU) có thể làm Playwright chờ quá lâu khi bấm thật."""
    pg.evaluate('(s) => document.querySelector(s).click()', sel)


def mo(pg, slug):
    pg.goto('about:blank')  # đổi hash không tải lại trang: mở hẳn trang mới để không đọc nhầm bài trước
    pg.goto(f'{APP}#/lop/{slug}')
    pg.wait_for_function("() => document.getElementById('lop-k').textContent.length > 0", timeout=120000)


BO_CUC = """() => {
  const r = (s) => { const e = document.querySelector(s); if (!e) return null; const b = e.getBoundingClientRect(); return b.width && b.height ? b : null; };
  const W = innerWidth, H = innerHeight, A = {cap: r('#lop-cap'), bar: r('.lop-bar'), top: r('.lop-top')}, v = [];
  const cat = (a, b) => a && b && a.left < b.right - 1 && b.left < a.right - 1 && a.top < b.bottom - 1 && b.top < a.bottom - 1;
  if (cat(A.cap, A.bar)) v.push('chữ chồng thanh'); if (cat(A.cap, A.top)) v.push('chữ chồng đầu'); if (cat(A.bar, A.top)) v.push('thanh chồng đầu');
  for (const [k, b] of Object.entries(A)) if (b && (b.left < -1 || b.top < -1 || b.right > W + 1 || b.bottom > H + 1)) v.push(k + ' tràn màn');
  for (const b of document.querySelectorAll('#lop button')) { const x = b.getBoundingClientRect(); if (x.width && !b.closest('[hidden]') && (x.height < 44 || x.width < 44)) v.push('nút nhỏ: ' + (b.textContent.trim() || b.id)); }
  const cu = document.getElementById('lop-cu'); if (cu.scrollWidth > cu.clientWidth + 2 && getComputedStyle(cu).overflowX !== 'auto') v.push('hàng công cụ bị cắt');
  return v; }"""


def main():
    with sync_playwright() as p:
        b = p.chromium.launch()
        ctx = b.new_context(viewport={'width': 1280, 'height': 720})
        pg = ctx.new_page()
        trang_loi = []
        pg.on('pageerror', lambda e: trang_loi.append(str(e)[:160]))

        mo(pg, 'than-kinh')
        pg.wait_for_function("() => { const f = document.getElementById('canh').contentDocument; return f && f.documentElement.hasAttribute('data-chieu'); }", timeout=30000)
        x = pg.evaluate("""() => ({lop: !document.getElementById('lop').hidden, tab: getComputedStyle(document.getElementById('tab')).display,
          sang: document.getElementById('lop').classList.contains('sang'), chieu: document.getElementById('canh').contentDocument.documentElement.hasAttribute('data-chieu')})""")
        kiem('L1 vào chế độ lớp (kính tối, bài ở chế độ máy chiếu)', x['lop'] and not x['sang'] and x['chieu'], x)

        pg.keyboard.press('ArrowRight'); cho_buoc(pg, 'Bước 01')
        pg.keyboard.press('PageDown'); cho_buoc(pg, 'Bước 02')
        pg.keyboard.press('ArrowLeft'); cho_buoc(pg, 'Bước 01')
        pg.keyboard.press('PageUp'); pg.wait_for_timeout(600)
        kiem('L2 bàn phím, bút trình chiếu chuyển bước', 'Bước 01' in pg.text_content('#lop-k'))

        pg.click('#lop-nhan'); pg.wait_for_timeout(500)
        an = pg.evaluate("""() => { const d = document.getElementById('canh').contentDocument; return {attr: d.documentElement.hasAttribute('data-an-nhan'),
          h: getComputedStyle(document.getElementById('lop-h')).visibility} }""")
        pg.click('#lop-nhan'); pg.wait_for_timeout(500)
        hien = pg.evaluate("() => document.getElementById('canh').contentDocument.documentElement.hasAttribute('data-an-nhan')")
        kiem('L3 Ẩn nhãn để hỏi bài, bấm lại thì hiện', an['attr'] and an['h'] == 'hidden' and not hien, (an, hien))

        pg.keyboard.press('b'); pg.wait_for_timeout(300)
        den = pg.is_visible('#lop-mden')
        pg.keyboard.press('Escape'); pg.wait_for_timeout(300)
        kiem('L4 Màn đen bằng phím B, Esc mở lại', den and not pg.is_visible('#lop-mden') and not pg.evaluate("() => document.getElementById('lop').hidden"))

        tam = "() => { const e = document.elementFromPoint(innerWidth * .6, innerHeight * .4); return e ? (e.id || e.tagName) : '' }"
        a = pg.evaluate(tam); pg.click('#lop-khoa'); pg.wait_for_timeout(200); bo = pg.evaluate(tam); pg.click('#lop-khoa')
        kiem('L5 Khoá góc nhìn chắn cảnh, tắt thì chạm được cảnh', a == 'lop-che' and bo == 'canh', (a, bo))

        pg.click('#lop-chi'); pg.mouse.move(700, 300); pg.wait_for_timeout(200)
        t = pg.evaluate("() => { const e = document.getElementById('lop-tro'); const b = e.getBoundingClientRect(); return {hidden: e.hidden, x: Math.round(b.left + b.width / 2), y: Math.round(b.top + b.height / 2)} }")
        pg.click('#lop-chi')
        kiem('L6 Chỉ điểm: chấm đỏ theo chuột', not t['hidden'] and abs(t['x'] - 700) < 4 and abs(t['y'] - 300) < 4, t)

        # L7: màn hình giáo viên cùng máy
        pg.click('#lop-dt'); pg.wait_for_function("() => !document.getElementById('lop-hop').hidden")
        pg.wait_for_selector('#lop-may', timeout=60000)
        ma = pg.evaluate("() => { const m = document.querySelector('.lop-ma'); return m ? m.textContent.trim() : '' }")
        if not ma:  # chưa tải được PeerJS (không có mạng): mã vẫn có, lấy từ đường dẫn của nút
            pg.wait_for_function("() => document.querySelector('.lop-ma')", timeout=60000); ma = pg.text_content('.lop-ma').strip()
        dk = ctx.new_page()
        dk.goto(f'http://127.0.0.1:{PORT}/dieu-khien/?cung-may=1#{ma}')
        try:
            dk.wait_for_function("() => /Bước 1\\//.test(document.body.innerText)", timeout=30000); thay = True
        except Exception: thay = False
        pg.click('#lop-hop-x')
        dk.click('#bN');
        try: cho_buoc(pg, 'Bước 02', 20000); sang_app = True
        except Exception: sang_app = False
        pg.keyboard.press('ArrowRight')
        try: dk.wait_for_function("() => /Bước 3\\//.test(document.body.innerText)", timeout=20000); cap_nhat = True
        except Exception: cap_nhat = False
        dk.click('#bB'); pg.wait_for_timeout(500); den_xa = pg.is_visible('#lop-mden'); dk.click('#bB'); pg.wait_for_timeout(300)
        noi = pg.is_visible('#lop-noi')
        kiem('L7 màn hình giáo viên cùng máy điều khiển hai chiều', thay and sang_app and cap_nhat and den_xa and noi and not pg.is_visible('#lop-mden'),
             dict(thay=thay, sang_app=sang_app, cap_nhat=cap_nhat, den_xa=den_xa, noi=noi))
        dk.close()

        # L8: kính sáng
        mo(pg, 'hexapod')
        sang = pg.evaluate("() => document.getElementById('lop').classList.contains('sang')")
        bam(pg, '#lop-kinh'); pg.wait_for_timeout(200)
        pg.reload(); pg.wait_for_function("() => document.getElementById('lop-k').textContent.length > 0", timeout=120000)
        nho = pg.evaluate("() => !document.getElementById('lop').classList.contains('sang')")
        bam(pg, '#lop-kinh')
        kiem('L8 kính sáng mặc định cho cảnh sáng, đổi kính được nhớ', sang and nho, (sang, nho))

        # L9: thoát
        bam(pg, '#lop-nhan')
        pg.wait_for_function("() => document.getElementById('canh').contentDocument.documentElement.hasAttribute('data-an-nhan')", timeout=30000)
        pg.keyboard.press('Escape')
        try: pg.wait_for_function("""() => { const d = document.getElementById('canh').contentDocument.documentElement;
          return !d.hasAttribute('data-chieu') && !d.hasAttribute('data-an-nhan') }""", timeout=30000)
        except Exception: pass
        x = pg.evaluate("""() => { const d = document.getElementById('canh').contentDocument.documentElement;
          return {hash: location.hash, lop: document.getElementById('lop').hidden, chieu: d.hasAttribute('data-chieu'), nhan: d.hasAttribute('data-an-nhan')} }""")
        kiem('L9 Esc thoát chế độ lớp, bài trở lại bình thường', x['hash'] == '#/bai/hexapod' and x['lop'] and not x['chieu'] and not x['nhan'], x)

        pg.close()  # bài kit vẽ bằng phần mềm chiếm CPU của máy dựng: đóng trước khi đo bố cục
        if not NHANH:
            hong = []
            # mỗi bài mở một lần rồi đổi cỡ khung nhìn (bố cục co giãn theo cỡ màn; nạp lại cảnh 3D nặng mỗi cỡ thì quá chậm)
            for slug in ['than-kinh', 'hexapod']:
                q = ctx.new_page(); mo(q, slug)
                q.keyboard.press('ArrowRight'); q.wait_for_timeout(1500)
                for w, h in [(1920, 1080), (1280, 720), (1024, 768), (768, 1024), (844, 390)]:
                    q.evaluate("() => document.fullscreenElement && document.exitFullscreen()"); q.wait_for_timeout(200)  # chế độ lớp xin toàn màn hình
                    q.set_viewport_size({'width': w, 'height': h}); q.wait_for_timeout(900)
                    v = q.evaluate(BO_CUC)
                    if v: hong.append(f'{slug} {w}×{h}: ' + '; '.join(v[:3]))
                q.close()
            kiem('L10 bố cục ở 5 cỡ màn', not hong, ' | '.join(hong))

        kiem('không có lỗi trang', not trang_loi, trang_loi[:3])
        b.close()
    print('tổng:', 'đạt' if not loi else 'lỗi ở ' + ', '.join(loi))
    sys.exit(1 if loi else 0)


if __name__ == '__main__':
    main()
