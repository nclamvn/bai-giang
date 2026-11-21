#!/usr/bin/env python3
"""build_mau.py · trang mẫu thành phần (design/mau/): thang đo và mọi thành phần dùng chung trên một trang, để so khi thêm bài mới.

Thang chữ, màu, bo góc, khoảng cách và điểm gãy đọc thẳng từ design/tokens.json, nên trang luôn khớp token.
Thành phần dùng đúng lớp của design/house.css, không có CSS riêng cho từng thành phần: trang này sai thì house.css sai.
  python3 tools/build_mau.py
"""
import html, json, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'tools'))
import liquid_glass as LG  # noqa: E402

T = json.loads((ROOT / 'design/tokens.json').read_text(encoding='utf-8'))
E = html.escape
VAI = {'2xs': 'nhãn mono, đơn vị', 'xs': 'chú thích, chân trang', 'ui': 'nút, chip, điều khiển', 'sm': 'thân bài nhỏ, thẻ', 'md': 'thân bài, lời dẫn', 'lg': 'tiêu đề thẻ, mục nhỏ',
       'xl': 'tiêu đề mục', '2xl': 'tiêu đề lớn', '3xl': 'tiêu đề trang', '4xl': 'hiển thị', '5xl': 'hiển thị lớn'}
MAU_CHU = {'ink': 'chữ chính', 'ink2': 'chữ thân', 'ink3': 'chữ phụ đậm', 'mut': 'chữ phụ, nhãn', 'sig': 'màu nhấn duy nhất', 'ok': 'đạt', 'warn': 'cảnh báo', 'bad': 'lỗi', 'focus': 'vòng focus'}
MAU_NEN = {'page': 'nền trang', 'card': 'nền thẻ', 'line': 'đường kẻ', 'amber': 'vạch đánh dấu (không dùng cho chữ trên nền sáng)'}


def luma(h):
    h = h.lstrip('#'); r, g, b = (int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))
    f = lambda v: v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)


def ti(a, b):
    x, y = luma(a), luma(b)
    return (max(x, y) + 0.05) / (min(x, y) + 0.05)


def vn(x):
    return f'{x:.2f}'.replace('.', ',')


def main():
    C, S, R = T['color'], T['size'], T['radius']
    chu = ''.join(f'<tr><td class="bg-mono">{k}</td><td class="bg-mono">{v} px</td><td style="font-size:{v}px;line-height:1.25;font-weight:{500 if v >= 20 else 400}">Giảng theo từng bước, mỗi con số có nguồn</td>'
                  f'<td class="vai">{VAI.get(k, "")}</td></tr>' for k, v in S.items())
    mau = ''.join(f'<div class="sw"><i style="background:{C[k]}"></i><b>{k}</b><span class="bg-mono">{C[k]}</span><span class="vai">{v}</span>'
                  f'<span class="bg-mono">{vn(ti(C[k], C["page"]))}:1 trên trắng · {vn(ti(C[k], C["card"]))}:1 trên thẻ</span></div>' for k, v in MAU_CHU.items())
    nen = ''.join(f'<div class="sw"><i style="background:{C[k]}"></i><b>{k}</b><span class="bg-mono">{C[k]}</span><span class="vai">{v}</span></div>' for k, v in MAU_NEN.items())
    bo = ''.join(f'<div class="rd"><i style="border-radius:{min(v, 40)}px"></i><b>{k}</b><span class="bg-mono">{v} px</span></div>' for k, v in R.items())
    kc = ''.join(f'<div class="sp"><i style="width:{v}px"></i><span class="bg-mono">{v}</span></div>' for v in T['space'])
    gay = T['break']
    body = f'''<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#FFFFFF"><meta name="robots" content="noindex">
<title>Trang mẫu thành phần · Sáng Ăn Khoai</title>
<meta name="description" content="Thang chữ, màu, bo góc, điểm gãy và mọi thành phần dùng chung của Sáng Ăn Khoai trên một trang.">
{LG.font_link('../../')}
<style>
.wrap{{max-width:1160px;margin:0 auto;padding:0 clamp(16px,4vw,40px)}}
.muc{{padding:clamp(40px,6vw,72px) 0 0}}.muc>h2{{margin:0 0 6px;font:500 24px/1.2 var(--bg-font);letter-spacing:-.02em}}.muc>p{{margin:0 0 24px;color:var(--bg-ink2);max-width:70ch}}
table.tc{{width:100%;border-collapse:collapse}}table.tc td{{padding:12px 16px 12px 0;border-top:1px solid var(--bg-line);vertical-align:baseline}}table.tc td:nth-child(-n+2){{white-space:nowrap;width:1%}}
.vai{{color:var(--bg-mut);font-size:13px}}
.sws{{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px}}.sw{{display:grid;gap:4px;padding:14px;border:1px solid var(--bg-line);border-radius:14px;background:var(--bg-card)}}
.sw i{{height:44px;border-radius:8px;box-shadow:inset 0 0 0 1px var(--bg-hair)}}.sw b{{font-weight:500}}
.rds,.sps{{display:flex;flex-wrap:wrap;gap:24px;align-items:flex-end}}.rd,.sp{{display:grid;gap:6px;justify-items:start}}.rd i{{width:88px;height:56px;background:var(--bg-card);border:1px solid var(--bg-ink3)}}
.sp i{{height:12px;background:var(--bg-ink);border-radius:4px}}
.o{{display:flex;flex-wrap:wrap;gap:12px;align-items:center;padding:20px;border:1px dashed var(--bg-hair2);border-radius:14px}}.o+.o{{margin-top:12px}}.o>.bg-mono{{flex-basis:100%}}
@media (max-width:640px){{table.tc td.vai{{display:none}}table.tc td:nth-child(-n+2){{white-space:normal}}table.tc td{{padding-right:10px}}}}
</style></head>
<body class="bg-hub">
{LG.site_bar('../../', (('Trang mẫu thành phần', None),))}
<main class="wrap">
<div class="bg-meta"><div class="bg-mono">Hệ thiết kế<br>Một nguồn: design/tokens.json</div><div class="bg-mono r">Sinh bằng tools/build_mau.py<br>Kiểm bằng tools/ve_sinh_ui.py và tests/kiem_bo_cuc.py</div></div>
<section class="bg-head"><div><h1 class="bg-display">Trang mẫu thành phần</h1>
  <nav class="bg-legend" aria-label="Mục"><a href="#chu" style="--c:var(--bg-sig)">Thang chữ</a><a href="#mau">Màu</a><a href="#bo">Bo góc</a><a href="#gay">Điểm gãy</a><a href="#tp">Thành phần</a></nav></div>
  <div class="bg-say"><h2>Một hệ, ba cỡ màn hình</h2><p>Trang này bày đúng những gì các trang khác được phép dùng. Thêm bài mới thì so với đây; cần một cỡ chữ hay một thành phần chưa có thì thêm vào token và trang này trước.</p>
  <div class="cta"><a class="bg-btn" href="#tp">Xem thành phần</a><a class="bg-btn ghost" href="../../">Về trang chính</a></div></div></section>

<section class="muc" id="chu"><h2>Thang chữ</h2><p>Mười một bậc. Cỡ lớn hơn bậc cuối chỉ dùng cho tiêu đề hiển thị co giãn theo màn hình. Không chữ nào dưới 12 px. Nhãn mono viết hoa, giãn chữ 0,06 em.</p>
<table class="tc">{chu}</table></section>

<section class="muc" id="mau"><h2>Màu</h2><p>Chữ trên nền trắng và nền thẻ phải đạt tương phản 4,5:1 (3:1 với chữ lớn). Một màu nhấn duy nhất; màu môn học chỉ dùng cho chấm đánh dấu.</p>
<div class="sws">{mau}{nen}</div></section>

<section class="muc" id="bo"><h2>Bo góc và khoảng cách</h2><p>Bốn mức bo góc và một mức tròn hẳn. Khoảng cách theo thang 4 px.</p>
<div class="rds">{bo}</div><div class="sps" style="margin-top:28px">{kc}</div></section>

<section class="muc" id="gay"><h2>Điểm gãy</h2><p>Ba điểm gãy cho mọi lớp dùng chung. Trên màn chạm (pointer: coarse), nút, chip, tab và liên kết dạng khối có vùng chạm từ 44 px.</p>
<table class="tc"><tr><td class="bg-mono">điện thoại</td><td class="bg-mono">tới {gay["phone"]} px</td><td>Một cột. Thanh đầu trang rút gọn.</td></tr>
<tr><td class="bg-mono">tablet dọc</td><td class="bg-mono">tới {gay["tablet"]} px</td><td>Một cột nội dung, lưới thẻ hai cột.</td></tr>
<tr><td class="bg-mono">tablet ngang, laptop nhỏ</td><td class="bg-mono">tới {gay["desk"]} px</td><td>Hai cột.</td></tr>
<tr><td class="bg-mono">máy bàn</td><td class="bg-mono">trên {gay["desk"]} px</td><td>Bố cục đầy đủ.</td></tr></table></section>

<section class="muc" id="tp"><h2>Thành phần</h2><p>Mỗi thành phần một kiểu. Trạng thái hover chỉ có trên thiết bị có con trỏ; nút lún nhẹ khi nhấn; focus bằng bàn phím có vòng 2 px.</p>
<div class="o"><span class="bg-mono">Nút</span><a class="bg-btn" href="#tp">Nút chính</a><a class="bg-btn ghost" href="#tp">Nút phụ</a><a class="bg-btn sm" href="#tp">Nút nhỏ</a><a class="bg-btn sm ghost" href="#tp">Nút nhỏ phụ</a><button class="bg-btn" disabled>Đang khoá</button></div>
<div class="o"><span class="bg-mono">Liên kết chữ và nhãn</span><a class="bg-tl" href="#tp">Liên kết trong câu</a><span class="bg-mono">Nhãn mono · 12 px</span></div>
<div class="o"><span class="bg-mono">Chú giải</span><nav class="bg-legend" aria-label="Ví dụ chú giải" style="margin-top:0"><a href="#tp" style="--c:var(--bg-s-sinh)">Sinh học</a><a href="#tp" style="--c:var(--bg-s-ly)">Vật lí</a><a href="#tp" style="--c:var(--bg-s-hoa)">Hoá học</a><span style="--c:var(--bg-s-su)">Mục không bấm được</span></nav></div>
</section>
</main>
<a class="bg-band" href="#tp" aria-label="Ví dụ dải cảnh"><img src="../../thu-vien/covers/dong-co.webp" alt="Ví dụ dải cảnh: động cơ xăng 4 kì" loading="lazy"><span class="bg-tag"><i>1</i>Thẻ tên trên dải cảnh</span></a>
<div class="wrap">
<div class="bg-stats" style="--n:4"><a href="#tp"><b>18<small>bài</small></b><span>Dải chỉ số</span></a><a href="#tp"><b>54<small>bài</small></b><span>Nhãn dài thì xuống dòng, không cắt</span></a><div><b>4</b><span>Ô không bấm được</span></div><div><b>45<small>phút</small></b><span>Số đứng thẳng cột</span></div></div>
<section class="muc"><h2>Thẻ và danh sách đánh số</h2><p>Thẻ dùng nền thẻ, viền một nét, bo góc 14 px.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px">
<a class="bg-card" href="#tp"><header><span>Bài tiếp theo</span><span>→</span></header><b>Tên bài</b><p>Một dòng mô tả ngắn, không quá hai dòng.</p></a>
<div class="bg-card"><header><span>Thẻ tĩnh</span><span>01</span></header><b>Tiêu đề thẻ</b><p>Thẻ không bấm được thì không đổi viền khi rê chuột.</p></div></div>
<ol class="bg-steps" style="margin-top:32px"><li><b>Bước một</b><p>Mỗi bước một ý, số thứ tự bằng nhãn mono.</p></li><li><b>Bước hai</b><p>Bước đang giảng dùng chữ chính, các bước khác dùng chữ phụ đạt AA.</p></li><li><b>Bước ba</b><p>Không có bước nào mờ tới mức không đọc được.</p></li></ol></section>
<footer class="bg-foot"><span>Sáng Ăn Khoai · trang mẫu thành phần</span><span><a href="../../">Trang chính</a></span></footer>
</div>
</body></html>
'''
    out = ROOT / 'design/mau/index.html'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(body, encoding='utf-8')
    print(f'đã dựng design/mau/index.html ({len(S)} bậc chữ, {len(MAU_CHU) + len(MAU_NEN)} màu)')


if __name__ == '__main__':
    main()
