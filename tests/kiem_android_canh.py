#!/usr/bin/env python3
"""Đo cảnh 3D của từng bài bên trong app Android (docs/app-ke-hoach-moc.md, mốc M4). Chạy sau tests/kiem_android.py.

  python3 tests/kiem_android_canh.py [slug,slug,...]

Nối vào WebView của app qua cổng gỡ lỗi (chỉ bản debug mở cổng này; bản phát hành tắt) bằng Playwright connect_over_cdp,
mở từng bài bằng địa chỉ #/bai/<slug>, rồi ghi cho mỗi bài:
  - bài có báo trạng thái cho app không (lớp chữ của app hiện)
  - bộ dựng hình WebGL (renderer), giới hạn khối uniform của máy (MAX_UNIFORM_BLOCK_SIZE, UNIFORM_BUFFER_OFFSET_ALIGNMENT)
  - số lỗi GL / lỗi trang trong console khi bài chạy
  - tỉ lệ điểm ảnh không tối ở vùng giữa ảnh chụp màn hình (cảnh có vẽ ra không)
Kết quả: kiem-android/canh/ket-qua.json và ảnh từng bài. Bước này để đo, không làm hỏng CI vì cảnh đen: máy ảo vẽ bằng GPU phần mềm.
Thoát mã 1 chỉ khi không nối được vào WebView hay bài không báo trạng thái.
"""
import json, os, re, subprocess, sys, time
from playwright.sync_api import sync_playwright
from PIL import Image

PKG = 'io.github.nclamvn.sangankhoai'
OUT = 'kiem-android/canh'
MAU = ['than-kinh', 'te-bao', 'ty-the', 'co-loa', 'enzyme-step', 'jellyfish', 'hexapod', 'tk-goi-tin']
PORT = 9333

DO_GL = """() => {
  const r = {canvas: 0};
  for (const c of document.querySelectorAll('canvas')) {
    r.canvas++;
    const g = c.getContext('webgl2') || c.getContext('webgl');
    if (!g || r.renderer) continue;
    const d = g.getExtension('WEBGL_debug_renderer_info');
    r.kieu = (typeof WebGL2RenderingContext !== 'undefined' && g instanceof WebGL2RenderingContext) ? 'webgl2' : 'webgl';
    r.renderer = d ? g.getParameter(d.UNMASKED_RENDERER_WEBGL) : g.getParameter(g.RENDERER);
    if (r.kieu === 'webgl2') {
      r.maxUniformBlock = g.getParameter(g.MAX_UNIFORM_BLOCK_SIZE);
      r.uboAlign = g.getParameter(g.UNIFORM_BUFFER_OFFSET_ALIGNMENT);
      r.maxUboBindings = g.getParameter(g.MAX_UNIFORM_BUFFER_BINDINGS);
    }
  }
  r.webgpu = !!navigator.gpu;
  return r;
}"""


def adb(*a, timeout=60):
    try: return subprocess.run(['adb', *a], capture_output=True, text=True, errors='replace', timeout=timeout).stdout
    except subprocess.TimeoutExpired: return ''


def noi_cong():
    """Mở app nếu chưa chạy, tìm ổ gỡ lỗi webview_devtools_remote_<pid>, chuyển về cổng PORT của máy dựng."""
    if not adb('shell', 'pidof', PKG).strip():
        adb('shell', 'monkey', '-p', PKG, '-c', 'android.intent.category.LAUNCHER', '1'); time.sleep(15)
    pid = adb('shell', 'pidof', PKG).strip().split()[0]
    t0 = time.time()
    while time.time() - t0 < 60:
        if f'webview_devtools_remote_{pid}' in adb('shell', 'cat', '/proc/net/unix'): break
        time.sleep(3)
    else: raise RuntimeError('WebView không mở cổng gỡ lỗi (bản phát hành? hay app chưa nạp trang)')
    adb('forward', f'tcp:{PORT}', f'localabstract:webview_devtools_remote_{pid}')


def sang(png):
    """Tỉ lệ điểm ảnh không tối ở vùng giữa (bỏ thanh trên, lớp chữ dưới của app)."""
    im = Image.open(png).convert('L'); w, h = im.size
    vung = im.crop((0, int(h * .12), w, int(h * .62))).resize((216, 240))
    px = list(vung.getdata())
    return round(sum(1 for v in px if v > 40) / len(px), 3)


def main():
    ds = sys.argv[1].split(',') if len(sys.argv) > 1 else MAU
    os.makedirs(OUT, exist_ok=True)
    noi_cong()
    kq, hong = [], []
    with sync_playwright() as p:
        b = p.chromium.connect_over_cdp(f'http://127.0.0.1:{PORT}')
        pg = next(x for c in b.contexts for x in c.pages if '/app/' in x.url)
        loi = []
        pg.on('console', lambda m: loi.append(m.text) if m.type in ('error', 'warning') else None)
        pg.on('pageerror', lambda e: loi.append('pageerror: ' + str(e)))
        for slug in ds:
            loi.clear()
            pg.evaluate("() => { location.hash = '#/thu-vien' }"); time.sleep(2)
            pg.evaluate(f"() => {{ location.hash = '#/bai/{slug}' }}")
            dong = {'slug': slug}
            try:
                pg.wait_for_function("() => { const c = document.getElementById('cap'); return c && !c.hidden && c.innerText.trim().length > 0 }", timeout=180000)
                dong['trang_thai'] = True
            except Exception:
                dong['trang_thai'] = False; hong.append(slug)
            time.sleep(12)  # cho cảnh chạy vài giây
            fr = pg.frame(name='bgs-canh')
            try: dong.update(fr.evaluate(DO_GL) if fr else {})
            except Exception as e: dong['loi_do'] = str(e)[:200]
            png = f'{OUT}/{slug}.png'
            with open(png, 'wb') as f: f.write(subprocess.run(['adb', 'exec-out', 'screencap', '-p'], capture_output=True, timeout=60).stdout)
            dong['sang'] = sang(png)
            gl = [x for x in loi if 'GL ERROR' in x or 'WebGL:' in x]
            dong['loi_gl'] = len(gl); dong['loi_khac'] = len(loi) - len(gl)
            dong['mau_loi'] = sorted({re.sub(r'0x[0-9a-f]+', '0x', x)[:200] for x in loi})[:5]
            kq.append(dong)
            print(f"{slug:14} trạng thái {'có' if dong['trang_thai'] else 'KHÔNG'} · {dong.get('kieu', '?')} · sáng {dong['sang']:.3f} · lỗi GL {dong['loi_gl']} · lỗi khác {dong['loi_khac']}")
        b.close()
    if kq and kq[0].get('renderer'):
        k = kq[0]; print('GPU:', k['renderer'], '· MAX_UNIFORM_BLOCK_SIZE', k.get('maxUniformBlock'), '· UBO align', k.get('uboAlign'), '· WebGPU', k.get('webgpu'))
    with open(f'{OUT}/ket-qua.json', 'w') as f: json.dump(kq, f, ensure_ascii=False, indent=1)
    if hong: print('LỖI  bài không báo trạng thái:', ', '.join(hong))
    sys.exit(1 if hong else 0)


if __name__ == '__main__':
    main()
