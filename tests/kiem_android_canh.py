#!/usr/bin/env python3
"""Đo cảnh 3D của từng bài bên trong app Android (docs/app-ke-hoach-moc.md, mốc M4). Chạy sau tests/kiem_android.py.

  python3 tests/kiem_android_canh.py [slug,slug,...]

Nối vào WebView của app qua cổng gỡ lỗi (chỉ bản debug mở cổng này; bản phát hành tắt) bằng tests/cdp_android.py,
mở từng bài bằng địa chỉ #/bai/<slug>, rồi ghi cho mỗi bài:
  - bài có báo trạng thái cho app không (lớp chữ của app hiện)
  - bộ dựng hình WebGL (renderer), giới hạn khối uniform của máy (MAX_UNIFORM_BLOCK_SIZE, UNIFORM_BUFFER_OFFSET_ALIGNMENT)
  - số lỗi GL / lỗi trang trong console khi bài chạy
  - tỉ lệ điểm ảnh không tối ở vùng giữa ảnh chụp màn hình (cảnh có vẽ ra không)
Kết quả: kiem-android/canh/ket-qua.json và ảnh từng bài. Bước này để đo, không làm hỏng CI vì cảnh đen: máy ảo vẽ bằng GPU phần mềm.
Thoát mã 1 chỉ khi không nối được vào WebView hay bài không báo trạng thái.
"""
import json, os, re, subprocess, sys, time
from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from cdp_android import Trang  # noqa: E402

PKG = 'io.github.nclamvn.sangankhoai'
OUT = 'kiem-android/canh'
MAU = ['than-kinh', 'te-bao', 'ty-the', 'co-loa', 'enzyme-step', 'jellyfish', 'hexapod', 'tk-goi-tin']
PORT = 9333

DO_GL = """(() => {
  const doc = document.getElementById('canh').contentDocument, r = {canvas: 0};
  if (!doc) return {loi_do: 'không đọc được khung bài'};
  // chỉ hỏi canvas lớn nhất (cảnh chính): getContext trên canvas chưa dùng sẽ tạo ngữ cảnh mới
  const cs = [...doc.querySelectorAll('canvas')]; r.canvas = cs.length;
  const c = cs.sort((a, b) => b.width * b.height - a.width * a.height)[0];
  const g = c && (c.getContext('webgl2') || c.getContext('webgl'));
  if (g) {
    const dbg = g.getExtension('WEBGL_debug_renderer_info');
    const W2 = doc.defaultView.WebGL2RenderingContext;  // lớp của chính khung bài (instanceof khác realm luôn sai)
    r.kieu = (W2 && g instanceof W2) ? 'webgl2' : 'webgl';
    r.renderer = dbg ? g.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : g.getParameter(g.RENDERER);
    if (r.kieu === 'webgl2') {
      r.maxUniformBlock = g.getParameter(g.MAX_UNIFORM_BLOCK_SIZE);
      r.uboAlign = g.getParameter(g.UNIFORM_BUFFER_OFFSET_ALIGNMENT);
      r.maxUboBindings = g.getParameter(g.MAX_UNIFORM_BUFFER_BINDINGS);
    }
  } else if (c) r.kieu = '2d hoặc webgpu';
  r.webgpu = !!doc.defaultView.navigator.gpu;
  return r;
})()"""


def adb(*a, timeout=60):
    try: return subprocess.run(['adb', *a], capture_output=True, text=True, errors='replace', timeout=timeout).stdout
    except subprocess.TimeoutExpired: return ''


def mo_app():
    if not adb('shell', 'pidof', PKG).strip():
        adb('shell', 'monkey', '-p', PKG, '-c', 'android.intent.category.LAUNCHER', '1'); time.sleep(15)


def sang(png):
    """Tỉ lệ điểm ảnh không tối ở vùng giữa (bỏ thanh trên, lớp chữ dưới của app)."""
    im = Image.open(png).convert('L'); w, h = im.size
    vung = im.crop((0, int(h * .12), w, int(h * .62))).resize((216, 240))
    px = list(vung.getdata())
    return round(sum(1 for v in px if v > 40) / len(px), 3)


def main():
    ds = sys.argv[1].split(',') if len(sys.argv) > 1 else MAU
    os.makedirs(OUT, exist_ok=True)
    mo_app()
    t = Trang(PORT)
    kq, hong = [], []
    t.cho("location.hash.startsWith('#/thu-vien') && !!document.querySelector('#grid li')", 120)
    for slug in ds:
        t.js("location.hash = '#/thu-vien'"); t.nghe(2)
        t.su_kien.clear()
        t.js(f"location.hash = '#/bai/{slug}'")
        dong = {'slug': slug}
        dong['trang_thai'] = t.cho("(() => { const c = document.getElementById('cap'); return !!c && !c.hidden && c.innerText.trim().length > 0 })()", 180)
        if not dong['trang_thai']: hong.append(slug)
        t.nghe(12)  # cho cảnh chạy vài giây
        try: dong.update(t.js(DO_GL) or {})
        except RuntimeError as e: dong['loi_do'] = str(e)[:200]
        png = f'{OUT}/{slug}.png'
        with open(png, 'wb') as f: f.write(subprocess.run(['adb', 'exec-out', 'screencap', '-p'], capture_output=True, timeout=60).stdout)
        dong['sang'] = sang(png)
        loi = [x for muc, x in t.su_kien if muc in ('error', 'warning')]
        gl = [x for x in loi if 'GL ERROR' in x or 'WebGL' in x]
        dong['loi_gl'] = len(gl); dong['loi_khac'] = len(loi) - len(gl)
        dong['mau_loi'] = sorted({re.sub(r'0x[0-9a-f]+', '0x', x)[:200] for x in loi})[:6]
        kq.append(dong)
        print(f"{slug:14} trạng thái {'có' if dong['trang_thai'] else 'KHÔNG'} · {dong.get('kieu', '?')} · {dong.get('canvas', '?')} canvas · sáng {dong['sang']:.3f} · lỗi GL {dong['loi_gl']} · lỗi khác {dong['loi_khac']}")
        for x in dong['mau_loi'][:3]: print('     ', x[:160])
    t.dong()
    k = next((x for x in kq if x.get('renderer')), None)
    if k:
        print('GPU:', k['renderer'], '· MAX_UNIFORM_BLOCK_SIZE', k.get('maxUniformBlock'), '· UBO align', k.get('uboAlign'), '· WebGPU', k.get('webgpu'))
    with open(f'{OUT}/ket-qua.json', 'w') as f: json.dump(kq, f, ensure_ascii=False, indent=1)
    if hong: print('LỖI  bài không báo trạng thái:', ', '.join(hong))
    sys.exit(1 if hong else 0)


if __name__ == '__main__':
    main()
