#!/usr/bin/env python3
"""Ảnh cho hồ sơ cửa hàng (docs/phat-hanh.md, mốc M7), chụp từ chính app: thư mục native/www (tools/build_native.py), phục vụ như
máy chủ nội bộ của Capacitor, giả lập môi trường native để màn Đã tải hiện đúng như trong app. Không vẽ thêm chữ quảng cáo lên ảnh.

  python3 tools/build_native.py && python3 tools/anh_cua_hang.py        (cần Playwright; máy không có GPU vẽ cảnh 3D chậm, vài chục phút)
  python3 tools/anh_cua_hang.py --bo play                                 chỉ các bộ có tên chứa "play"; ảnh đã có thì giữ, thêm --lai để chụp lại

Kích thước theo quy định tra ngày 24/11/2026:
  App Store  iPhone màn vừa có Dynamic Island 1179×2556 (bắt buộc), iPhone màn lớn 1320×2868, iPad 13 inch 2064×2752 (bắt buộc khi chạy trên iPad)
  Google Play  điện thoại 1080×1920 (9:16), máy tính bảng 1920×1080 (16:9, tối thiểu 4 ảnh), ảnh nổi bật 1024×500, biểu tượng 512×512
Đầu ra: design/cua-hang/<bộ>/<số>-<màn>.jpg, design/cua-hang/play/anh-noi-bat.jpg, design/cua-hang/play/bieu-tuong-512.png
"""
import http.server, os, pathlib, sys, threading
from playwright.sync_api import sync_playwright
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
WWW = ROOT / 'native/www'
OUT = ROOT / 'design/cua-hang'
PORT = 8791
# bộ: (thư mục, CSS rộng, CSS cao, tỉ lệ điểm ảnh, các màn)
DT = ['thu-vien', 'bai-than-kinh', 'bai-hexapod', 'da-tai']
MTB = ['thu-vien', 'bai-than-kinh', 'lop-than-kinh', 'lop-hexapod']
BO = [('app-store/iphone-1179x2556', 393, 852, 3, DT), ('app-store/iphone-1320x2868', 440, 956, 3, DT),
      ('app-store/ipad-2064x2752', 1032, 1376, 2, MTB), ('play/dien-thoai-1080x1920', 360, 640, 3, DT),
      ('play/may-tinh-bang-1920x1080', 1280, 720, 1.5, MTB)]
GIA_NATIVE = "window.Capacitor={isNativePlatform:()=>true,registerPlugin:()=>({addListener(){return Promise.resolve()},giuSang:async()=>{},getLaunchUrl:async()=>undefined,minimizeApp:async()=>{},exitApp(){}})};"


class May(http.server.SimpleHTTPRequestHandler):
    """Luật trả tệp của máy chủ nội bộ Capacitor: đoạn cuối không có dấu chấm thì trả trang gốc."""
    def log_message(self, *a): pass
    def translate_path(self, path):
        p = path.split('?')[0].split('#')[0]
        last = p.rstrip('/').split('/')[-1] if p != '/' else ''
        if p == '/' or p.endswith('/') or '.' not in last: p = '/index.html'
        f = super().translate_path(p)
        # ảnh nổi bật dùng logo gốc (design/logo/mark.png) không có trong app: lấy từ repo
        return f if os.path.exists(f) else str(ROOT) + p


def phuc_vu():
    h = lambda *a, **k: May(*a, directory=str(WWW), **k)
    s = http.server.ThreadingHTTPServer(('127.0.0.1', PORT), h)
    threading.Thread(target=s.serve_forever, daemon=True).start()
    return s


def chup_man(pg, man, out):
    base = f'http://127.0.0.1:{PORT}/app/index.html'
    pg.goto('about:blank')
    if man == 'thu-vien' or man == 'da-tai':
        pg.goto(base + '#/' + man); pg.wait_for_selector('#grid li', state='attached', timeout=60000); pg.wait_for_timeout(2500)
    else:
        kieu, slug = man.split('-', 1)
        pg.goto(base + f'#/{"lop" if kieu == "lop" else "bai"}/{slug}')
        sel = '#lop-k' if kieu == 'lop' else '#cap-k'
        # chờ bài báo trạng thái thật (có số bước), không phải chữ "Đang mở bài…" của chế độ lớp
        pg.wait_for_function(f"() => /bước/i.test(document.querySelector('{sel}').textContent)", timeout=180000)
        pg.evaluate("() => document.fullscreenElement && document.exitFullscreen()")
        pg.keyboard.press('ArrowRight'); pg.wait_for_timeout(1500); pg.keyboard.press('ArrowRight')
        pg.wait_for_timeout(14000)   # cảnh 3D chạy đủ để vào khung bước (máy không có GPU vẽ chậm)
    pg.screenshot(path=str(out.with_suffix('.png')), timeout=240000)
    Image.open(out.with_suffix('.png')).convert('RGB').save(out, quality=90, optimize=True); out.with_suffix('.png').unlink()


ANH_NOI_BAT = """<!doctype html><html lang="vi"><head><meta charset="utf-8"><style>@font-face{font-family:V;src:url(../design/fonts/be-vietnam-pro-latin-600-normal.woff2)}
@font-face{font-family:V;src:url(../design/fonts/be-vietnam-pro-vietnamese-600-normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9}
html,body{margin:0;width:1024px;height:500px;overflow:hidden;background:#0E0C1A;font-family:V,sans-serif;color:#fff}
.anh{position:absolute;right:0;top:0;width:640px;height:500px;object-fit:cover;-webkit-mask-image:linear-gradient(to right,transparent,#000 40%)}
.chu{position:absolute;left:64px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;gap:14px;width:520px}
.lg{display:flex;align-items:center;gap:14px;font-size:22px}.lg img{width:56px;height:56px}
h1{margin:0;font-size:58px;line-height:1.04;letter-spacing:-.03em;font-weight:600}p{margin:0;font-size:22px;color:rgba(255,255,255,.8)}</style></head>
<body><img class="anh" src="../thu-vien/covers/than-kinh.webp" alt=""><div class="chu"><div class="lg"><img src="../design/logo/mark.png" alt="">Sáng Ăn Khoai</div>
<h1>Bài học 3D<br>tiếng Việt</h1><p>Học từng bước, học khi mất mạng,<br>chiếu cho cả lớp.</p></div></body></html>"""


def main():
    if not (WWW / 'app/index.html').is_file(): sys.exit('anh_cua_hang: chưa có native/www, chạy: python3 tools/build_native.py')
    if not (WWW / 'thu-vien/covers/than-kinh.webp').is_file(): sys.exit('anh_cua_hang: native/www thiếu ảnh bìa')
    s = phuc_vu()
    try:
        with sync_playwright() as p:
            b = p.chromium.launch()
            loc = sys.argv[sys.argv.index('--bo') + 1] if '--bo' in sys.argv else ''
            for thu_muc, w, h, dpr, mans in BO:
                if loc not in thu_muc: continue
                d = OUT / thu_muc; d.mkdir(parents=True, exist_ok=True)
                for k, man in enumerate(mans, 1):
                    f = d / f'{k}-{man}.jpg'
                    if f.exists() and '--lai' not in sys.argv: continue
                    # một trình duyệt mới cho mỗi ảnh: dùng chung lâu thì trình duyệt cạn bộ nhớ đồ hoạ phần mềm, không chụp được nữa
                    for lan in range(2):
                        bb = p.chromium.launch()
                        ctx = bb.new_context(viewport={'width': w, 'height': h}, device_scale_factor=dpr, has_touch=w < 900)
                        ctx.add_init_script(GIA_NATIVE)
                        try: chup_man(ctx.new_page(), man, f); break
                        except Exception as e:
                            if lan: raise
                            print('  chụp lại', f.name, str(e)[:80])
                        finally: bb.close()
                    im = Image.open(f); assert im.size == (round(w * dpr), round(h * dpr)), (f, im.size)
                    print(f'{f.relative_to(ROOT)} {im.size[0]}×{im.size[1]}')
            # ảnh nổi bật của Google Play: trang HTML tạm trong native/www (phông và ảnh bìa có sẵn ở đó)
            (WWW / 'app/_noi-bat.html').write_text(ANH_NOI_BAT, encoding='utf-8')
            pg = b.new_page(viewport={'width': 1024, 'height': 500}); pg.goto(f'http://127.0.0.1:{PORT}/app/_noi-bat.html'); pg.wait_for_timeout(1500)
            (OUT / 'play').mkdir(parents=True, exist_ok=True)
            pg.screenshot(path=str(OUT / 'play/anh-noi-bat.png')); (WWW / 'app/_noi-bat.html').unlink()
            Image.open(OUT / 'play/anh-noi-bat.png').convert('RGB').save(OUT / 'play/anh-noi-bat.jpg', quality=92); (OUT / 'play/anh-noi-bat.png').unlink()
            b.close()
    finally:
        s.shutdown()
    # biểu tượng 512 cho Google Play: cùng hình với biểu tượng app (nền tối, mặt Sáng Ăn Khoai)
    m = Image.open(ROOT / 'design/logo/mark.png').convert('RGBA'); m = m.crop(m.getbbox())
    c = Image.new('RGBA', (512, 512), (14, 12, 26, 255)); k = 512 * .62 / max(m.size)
    mm = m.resize((int(m.size[0] * k), int(m.size[1] * k)), Image.LANCZOS); c.alpha_composite(mm, ((512 - mm.size[0]) // 2, (512 - mm.size[1]) // 2))
    c.save(OUT / 'play/bieu-tuong-512.png', optimize=True)
    print('design/cua-hang/play/anh-noi-bat.jpg 1024×500, design/cua-hang/play/bieu-tuong-512.png 512×512')


if __name__ == '__main__':
    os.chdir(ROOT); main()
