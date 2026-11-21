#!/usr/bin/env python3
"""Giáo án 45 phút cho học phần Thiết kế và hiệu năng mạng (đại học, giáo trình TEL1459 của PGS.TS Hoàng Trọng Minh).

Nguồn:  tools/giao-an-mang/<id>.json, id là khoá bài trong tools/chuoi_bai.py (vd. tk-goi-tin)
Đầu ra: thiet-ke-mang/<bai>/giao-an/index.html (trang in được: giáo án theo phút, ví dụ giải mẫu, phiếu bài tập A4, đáp án,
        kiểm tra nhanh). Cùng nguồn này đi vào màn hình giảng viên lúc lên lớp: tools/chuoi_bai.py nhúng phút dự kiến và việc
        của giảng viên, sinh viên từng bước (BG_SEQ.plan); tests/smoke.py kiểm tên bước khớp với bài 3D.

Các trường giai, goi_y, a, gv, sv, noi_dung là HTML tin cậy (do nhóm soạn, được dùng <sub>, <sup>, <b>, <i>). Trường khác được thoát.
Chạy:  python3 tools/build_giao_an_mang.py
"""
import html
import json
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from build_goi_day import CSS as CSS_GOI, ICON, LOGO as LOGO_GOI, mins

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / 'tools/giao-an-mang'
E = lambda s: html.escape(str(s), quote=True)
ACC = '#CC2A53'
VERSION = 'Bản 1 · 16/11/2026'
UP = '../../../'  # thiet-ke-mang/<bai>/giao-an/ → gốc site
CSS = CSS_GOI.replace('../../', UP) + r"""
.vd{border-top:1px solid var(--line,#ECECEA);padding:16px 0}.vd:first-child{border-top:0;padding-top:0}
.vd h4{margin:0 0 6px;font-size:17px}.vd .de{margin:0 0 10px}.vd .giai{background:#FBFBF8;border-radius:10px;padding:12px 14px;font-size:15px;line-height:1.6}
.qz{border-top:1px solid var(--line,#ECECEA);padding:12px 0}.qz:first-child{border-top:0}.qz p{margin:0 0 6px;font-weight:600}
.qz ol{margin:0 0 6px 18px;padding:0}.qz details{font-size:15px;color:#4A4A4F}.qz summary{cursor:pointer;color:var(--acc)}
.meta{display:flex;flex-wrap:wrap;gap:10px;margin:14px 0 0}.meta div{flex:1 1 160px;min-width:0;background:#FBFBF8;border-radius:10px;padding:10px 12px;font-size:14px}
.meta b{display:block;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#6E6E72;margin-bottom:2px}
.tt li{margin:4px 0}
.paper .bt{margin:0 0 3.2mm}.paper .bt .qq{display:flex;gap:2mm}.paper .bt .src{color:#6E6E72;font-size:8.5pt}
"""
LOGO = LOGO_GOI.replace('../../', UP)


def load():
    out = {}
    for f in sorted(SRC.glob('*.json')):
        g = json.loads(f.read_text(encoding='utf-8'))
        check(g, f.name)
        out[g['id']] = g
    return out


def check(g, name):
    """Phút liền mạch 0 → 45, hoạt động trỏ đúng bước, mỗi bước có việc của giảng viên và sinh viên, mọi bài tập có đáp án."""
    b = g['buoc']
    assert b[0]['tu'] == 0 and b[-1]['den'] == 45, f'{name}: các bước phải phủ phút 0 → 45'
    assert all(b[i]['den'] == b[i + 1]['tu'] for i in range(len(b) - 1)), f'{name}: phút các bước không liền mạch'
    assert all(x['gv'].strip() and x['sv'].strip() for x in b), f'{name}: bước thiếu việc của giảng viên hoặc sinh viên'
    h = g['hoat_dong']
    assert h[0]['tu'] == 0 and h[-1]['den'] == 45 and all(h[i]['den'] == h[i + 1]['tu'] for i in range(len(h) - 1)), f'{name}: hoạt động không liền mạch'
    assert all(1 <= i <= len(b) for x in h for i in x['buoc']), f'{name}: hoạt động trỏ tới bước không có'
    so = {x['so'] for x in g['bai_tap']}
    assert so == {x['so'] for x in g['dap_an']}, f'{name}: bài tập và đáp án không khớp số'
    assert all(0 <= q['a'] < len(q['o']) for q in g['kiem_tra']), f'{name}: đáp án kiểm tra nhanh nằm ngoài lựa chọn'


def phieu(g):
    bt = ''.join(f'<div class="part bt"><div class="qq"><b>{E(x["so"])}.</b><span>{x["de"]}{f" <span class=src>({E(x["nguon"])})</span>" if x.get("nguon") else ""}</span></div>'
                 + '<div class="ln"></div>' * x.get('dong', 3) + '</div>' for x in g['bai_tap'])
    return f'''<div class="paper" lang="vi">
  <header><div><div class="lg2"><img src="{UP}design/logo/mark-96.webp" alt="">Sáng Ăn Khoai · Thiết kế và hiệu năng mạng · Tiết {g["tiet"]} · Phiếu bài tập</div><h4>{E(g["ten_tiet"])}</h4></div>
    <div class="who"><span>Họ tên</span><i></i><span>Mã sinh viên</span><i></i></div></header>
  {bt}
  <footer><span>Giáo trình TEL1459, mục {E(g["muc"])}, tr. {E(g["trang"])}</span><span>nclamvn.github.io/bai-giang</span></footer>
</div>'''


def page(g):
    nb = len(g['buoc'])
    tl = ''.join(f'<a href="#hd-{k}" style="flex:{h["den"] - h["tu"]};background:color-mix(in srgb,{ACC} {14 + k * 7}%,#fff)"><b>{E(h["ten"])}</b><span>{mins(h["tu"], h["den"])}</span></a>' for k, h in enumerate(g['hoat_dong']))
    acts = []
    for k, h in enumerate(g['hoat_dong']):
        rows = []
        for i in h['buoc']:
            if any(i in hh['buoc'] for hh in g['hoat_dong'][:k]): continue
            x = g['buoc'][i - 1]
            rows.append(f'<div class="row"><div class="m">{mins(x["tu"], x["den"])}<span>{x["den"] - x["tu"]} phút</span></div>'
                        f'<div class="t"><small>Bước {i}/{nb}</small>{E(x["t"])}</div>'
                        f'<div class="gv"><span class="k">Giảng viên</span>{x["gv"]}</div><div class="hs"><span class="k">Sinh viên</span>{x["sv"]}</div></div>')
        body = '<div class="thead"><span>Phút</span><span>Trên màn chiếu</span><span>Giảng viên</span><span>Sinh viên</span></div>' + ''.join(rows) if rows else ''
        acts.append(f'<div class="act card" id="hd-{k}"><header><h3>{k + 1}. {E(h["ten"])}</h3><span class="min">{mins(h["tu"], h["den"])}</span><p>{E(h["muc"])}</p></header>{body}<div class="prod"><b>Kết quả:</b> {E(h["san_pham"])}</div></div>')
    vd = ''.join(f'<div class="vd"><h4>Ví dụ {k + 1}. {E(x["ten"])}</h4><p class="de">{x["de"]}</p><div class="giai">{x["giai"]}</div></div>' for k, x in enumerate(g['vi_du']))
    da = ''.join(f'<dt>{E(x["so"])}</dt><dd>{x["giai"]}</dd>' for x in g['dap_an'])
    qz = ''.join(f'<div class="qz"><p>{k + 1}. {E(q["q"])}</p><ol type="A">{"".join(f"<li>{E(o)}</li>" for o in q["o"])}</ol><details><summary>Đáp án</summary><b>{"ABCDEF"[q["a"]]}.</b> {q["giai"]}</details></div>' for k, q in enumerate(g['kiem_tra']))
    meta = ''.join(f'<div><b>{a}</b>{E(b)}</div>' for a, b in [('Chương', g['chuong']), ('Mục giáo trình', g['muc']), ('Trang', g['trang']), ('Phương trình', g['pt']), ('Bài tập cuối chương', g['bt_sach'])])
    title = f'{g["ten_tiet"]} · Giáo án tiết {g["tiet"]} · Thiết kế và hiệu năng mạng'
    return f'''<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{E(title)}</title>
<meta name="description" content="{E(f'Giáo án 45 phút, tiết {g["tiet"]} học phần Thiết kế và hiệu năng mạng: {g["ten_tiet"]}. Mục tiêu, diễn tiến theo phút, ví dụ giải mẫu, phiếu bài tập, đáp án và kiểm tra nhanh, theo giáo trình TEL1459 mục {g["muc"]}.')}">
<link rel="icon" type="image/png" sizes="32x32" href="{UP}design/logo/favicon-32.png"><link rel="apple-touch-icon" href="{UP}design/logo/apple-touch-icon.png">
<link rel="stylesheet" href="{UP}design/house.css">
<style>:root{{--acc:{ACC}}}{CSS}</style>
</head>
<body>
<div class="bar">
  <a class="home" href="{UP}">{LOGO}<span>Sáng Ăn Khoai</span></a><span class="sep"></span><a class="crumb" href="{UP}thiet-ke-mang/">Thiết kế và hiệu năng mạng</a>
  <span class="sp"></span>
  <button class="btn opt" type="button" data-print="gv">{ICON['print']}In giáo án</button>
  <button class="btn" type="button" data-print="phieu">{ICON['print']}In phiếu</button>
  <a class="btn pri" href="../">{ICON['play']}Mở bài 3D</a>
</div>
<main class="wrap">
  <div class="hero">
    <div>
      <div class="eye">Tiết {g['tiet']} / 22 · 45 phút · Giáo án</div>
      <h1>{E(g['ten_tiet'])}</h1>
      <p class="lead">{E(g['dan'])} Dùng cùng bài 3D <a href="../">{E(g['ten_bai'])}</a>: bấm <b>Lên lớp</b> trên thanh đầu bài để màn hình giảng viên hiện phút dự kiến và việc của từng bước.</p>
      <div class="meta">{meta}</div>
    </div>
    <div class="cover"><img src="{UP}thu-vien/covers/{E(g['id'])}.webp" alt="Cảnh 3D của bài {E(g['ten_bai'])}"><a class="btn pri" href="../">{ICON['play']}Mở bài 3D</a></div>
  </div>
  <nav class="tabs" aria-label="Các phần của giáo án"><a href="#muc-tieu">Mục tiêu</a><a href="#dien-tien">Diễn tiến 45 phút</a><a href="#vi-du">Ví dụ giải mẫu</a><a href="#phieu">Phiếu bài tập</a><a href="#dap-an">Đáp án</a><a href="#kiem-tra">Kiểm tra nhanh</a><a href="#tom-tat">Tóm tắt và nguồn</a></nav>

  <section id="muc-tieu" aria-labelledby="h-mt">
    <h2 id="h-mt">Mục tiêu và chuẩn bị</h2>
    <div class="g2">
      <div class="card"><h3>Sau tiết học, sinh viên có thể</h3><ul class="tick">{''.join(f'<li>{E(x)}</li>' for x in g['muc_tieu'])}</ul>
        <h3 style="margin-top:18px">Kiến thức cần có</h3><ul class="tick">{''.join(f'<li>{E(x)}</li>' for x in g['can_co'])}</ul></div>
      <div class="card"><h3>Chuẩn bị</h3><ul class="tick">{''.join(f'<li>{E(x)}</li>' for x in g['chuan_bi']['gv'])}{''.join(f'<li>Sinh viên: {E(x)}</li>' for x in g['chuan_bi']['sv'])}</ul></div>
    </div>
  </section>

  <section id="dien-tien" aria-labelledby="h-dt">
    <h2 id="h-dt">Diễn tiến 45 phút</h2>
    <p class="sub">Mỗi dòng là một bước trên màn chiếu, cùng tên và thứ tự với bài 3D. Phút là gợi ý; giảng viên chủ động co giãn.</p>
    <div class="tl" role="list" aria-label="Phân bổ thời gian">{tl}</div>
    {''.join(acts)}
  </section>

  <section id="vi-du" aria-labelledby="h-vd">
    <h2 id="h-vd">Ví dụ giải mẫu</h2>
    <p class="sub">Giảng viên giải trên bảng trong tiết; số liệu đã kiểm bằng máy cùng công thức của bài 3D.</p>
    <div class="card">{vd}</div>
  </section>

  <section id="phieu" aria-labelledby="h-ph">
    <h2 id="h-ph">Phiếu bài tập</h2>
    <p class="sub">Một trang A4. Làm trên lớp phần đầu, phần còn lại về nhà. <button class="btn noprint" type="button" data-print="phieu" style="margin-left:6px;vertical-align:middle">{ICON['print']}In phiếu</button></p>
    <div class="sheet-wrap"><div class="sheet-zoom">{phieu(g)}</div></div>
  </section>

  <section id="dap-an" aria-labelledby="h-da">
    <h2 id="h-da">Đáp án và gợi ý chấm</h2>
    <div class="card"><dl class="ans">{da}</dl></div>
  </section>

  <section id="kiem-tra" aria-labelledby="h-kt">
    <h2 id="h-kt">Kiểm tra nhanh cuối tiết</h2>
    <p class="sub">{len(g['kiem_tra'])} câu, khoảng 3 phút. Chiếu lên hoặc đọc to; mở đáp án sau khi lớp trả lời.</p>
    <div class="card">{qz}</div>
  </section>

  <section id="tom-tat" aria-labelledby="h-tt">
    <h2 id="h-tt">Tóm tắt và nguồn</h2>
    <div class="g2">
      <div class="card"><h3>Ghi nhớ</h3><ul class="tt">{''.join(f'<li>{x}</li>' for x in g['tom_tat'])}</ul></div>
      <div class="card"><h3>Nguồn</h3><ul class="src">{''.join(f'<li>{E(x)}</li>' for x in g['nguon'])}</ul><p class="mini" style="margin-top:12px">Nội dung viết mới theo giáo trình TEL1459 của PGS.TS Hoàng Trọng Minh (PTIT, 2026); không chép văn bản hay hình của sách, công thức giữ đúng số hiệu để sinh viên tra lại.</p></div>
    </div>
  </section>
  <div class="foot"><span>{VERSION}</span><span class="noprint">© 2026 Sáng Ăn Khoai · phi thương mại</span></div>
</main>
<script>
(function(){{
  var z=document.querySelector('.sheet-zoom'),w=document.querySelector('.sheet-wrap');
  function fit(){{var mm=210*96/25.4;z.style.setProperty('--z',Math.min(1,(w.clientWidth)/mm).toFixed(3))}}
  fit();addEventListener('resize',fit);
  document.querySelectorAll('[data-print]').forEach(function(b){{b.addEventListener('click',function(){{
    document.body.classList.toggle('in-phieu',b.dataset.print==='phieu');window.print();}})}});
  addEventListener('afterprint',function(){{document.body.classList.remove('in-phieu')}});
}})();
</script>
</body>
</html>
'''


def main():
    gs = load()
    for g in gs.values():
        out = ROOT / g['bai'] / 'giao-an/index.html'
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(page(g), encoding='utf-8')
    print(f'giáo án học phần mạng: {len(gs)} tiết')


if __name__ == '__main__':
    main()
