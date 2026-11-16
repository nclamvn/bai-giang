#!/usr/bin/env python3
"""Trang mục lục học phần Thiết kế và hiệu năng mạng (đại học), theo giáo trình TEL1459 của PTIT.

  python3 tools/build_thiet_ke_mang.py   → thiet-ke-mang/index.html

Một nguồn cho danh mục 22 bài: BAI bên dưới. Bài đã dựng có 'href'; bài chưa dựng chỉ có tên, cảnh và số kiểm (không có
nhãn "sắp có" lặp lại). Dựng theo đề nghị của tác giả.
"""
import html
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import liquid_glass as LG
from robotics.build_hub import CSS

ROOT = pathlib.Path(__file__).resolve().parent.parent
E = lambda s: html.escape(str(s), quote=True)

CHUONG = [
    ('1', 'Tổng quan về thiết kế và hiệu năng mạng', [
        ('1.1', 'Gói tin qua ba chặng', 'Độ trễ đầu cuối tách bốn phần; trễ hàng đợi từ mô phỏng, đối chiếu M/M/1', 'goi-tin/', 'tk-goi-tin'),
        ('1.2', 'Khi hàng đợi đầy', 'Bộ đệm K gói ở cổng router: mất gói, jitter, lỗi bit, thông lượng và goodput; bộ đệm lớn có tốt hơn?', 'hang-doi/', 'tk-hang-doi'),
        ('1.3', 'Độ sẵn sàng, RTO và RPO', 'Hai đường lên chung một ống hay tách hai ngả; đồng hồ phục hồi bốn pha; công thức so với Monte Carlo 400 năm', 'san-sang/', 'tk-san-sang'),
        ('1.4', 'Vòng vận hành có kiểm chứng', 'SNMP 5 phút hay telemetry 1 giây: bắt được bao nhiêu đợt bùng nổ; sai lệch Δk, độ phủ quan sát Γ', 'van-hanh/', 'tk-van-hanh')]),
    ('2', 'Phân tích yêu cầu thiết kế mạng', [
        ('2.1', 'Từ "mạng phải nhanh" đến vector yêu cầu', 'Sáu nhóm ứng dụng, thẻ ngưỡng, đạt hay không', None, None),
        ('2.2', 'Đếm tải thật', 'Hệ số đồng thời, ma trận lưu lượng, dung lượng liên kết', None, None),
        ('2.3', 'Rủi ro và truy vết', 'Ma trận truy vết yêu cầu × quyết định × kiểm thử', None, None)]),
    ('3', 'Thiết kế mạng logic', [
        ('3.1', 'Ba lớp và vùng logic', 'Lớp logic nổi trên lớp vật lý, ma trận chính sách', None, None),
        ('3.2', 'Chia địa chỉ VLSM', 'Không gian địa chỉ cắt đôi dần, gộp tuyến', None, None),
        ('3.3', 'Định tuyến, ECMP và hội tụ', 'Đổi metric, luồng đổi đường; cắt liên kết, đồng hồ hội tụ', None, None),
        ('3.4', 'Underlay và overlay', 'Leaf-spine, đường hầm VXLAN mang các tenant', None, None)]),
    ('4', 'Thiết kế mạng vật lý', [
        ('4.1', 'Tòa nhà 8 tầng: tủ mạng, cáp và PoE', 'IDF mỗi tầng hay kéo về MDF, giới hạn 90 m, cổng, Ω, PoE, UPS', 'toa-nha/', 'tk-toa-nha'),
        ('4.2', 'Ngân sách công suất quang', 'Ánh sáng mờ dần qua đầu nối, mối hàn', None, None),
        ('4.3', 'Wi-Fi: tốc độ PHY và thông lượng thật', 'Thời gian phát chia dữ liệu, điều khiển, tranh chấp', None, None)]),
    ('5', 'Kiểm thử và đánh giá hiệu năng mạng', [
        ('5.1', 'Phòng đo', 'Chạy n lần, khoảng tin cậy 95 %, kết luận theo chuỗi nguyên nhân', None, None),
        ('5.2', 'Ba hàng đợi QoS', 'Ưu tiên tuyệt đối làm đói hàng nền, ToS sang DSCP/ECN', None, None)]),
    ('6', 'Các mô hình thiết kế và vận hành mạng 5G', [
        ('6.1', 'Gói tin 5G đầu-cuối và vị trí UPF', 'UPF ở biên, vùng hay trung tâm; ngân sách 20 ms; máy chủ biên quá tải', '5g-dau-cuoi/', 'tk-5g'),
        ('6.2', 'NSA và SA', 'Nút thắt ở LTE neo, truyền dẫn hay EPC; lõi SBA', None, None),
        ('6.3', 'Tách RAN và vô tuyến', 'RU, DU, CU; ngân sách đường truyền; dung lượng cell', None, None),
        ('6.4', 'Network slicing', 'Ba lát trên một hạ tầng, ảnh hưởng chéo', None, None),
        ('6.5', 'Bảo mật và vận hành vòng kín', 'Bề mặt tấn công sáu miền, thời gian vòng điều khiển', None, None),
        ('6.6', 'Vệ tinh, UAV và ISAC', 'Trễ lan truyền theo quỹ đạo, đánh đổi truyền thông và cảm nhận', None, None)]),
]
MAU = [b for _, _, ds in CHUONG for b in ds if b[3]]
KIEM = ['Mô phỏng khớp M/M/1 ở ρ 0,5, 0,8, 0,9 (sai lệch dưới 1 %), M/D/1, M/M/1/K (cả khi quá tải ρ = 1,3) và M/M/c (Erlang C)',
        'Monte Carlo độ sẵn sàng khớp công thức nối tiếp 1.19 và song song 4.14',
        'Bài tập có đáp số của giáo trình tính lại bằng máy mỗi lần dựng: ví dụ tr.43 (1 050 Mbit/s), BT 1.4, 2.5, 2.8, 3.3, 4.3, 4.5, 5.2',
        'Mỗi số ngoài giáo trình có nguồn hoặc ghi rõ là giả định ngay cạnh con số']


def build(root='../'):
    cards = ''.join(f'''<article class="card">
  <a class="img" href="{b[3]}" tabindex="-1" aria-hidden="true"><img src="{root}thu-vien/covers/{b[4]}.webp" alt="" loading="lazy"></a>
  <div class="body"><h2 class="bg-h3"><small>Bài {b[0]}</small>{E(b[1])}</h2><p>{E(b[2])}</p><a class="bg-btn sm" href="{b[3]}">Vào bài</a></div>
</article>''' for b in MAU)
    rows = []
    for so, ten, ds in CHUONG:
        rows.append(f'<tr class="ch"><td colspan="3">Chương {so} · {E(ten)}</td></tr>')
        for b in ds:
            t = f'<a href="{b[3]}">{E(b[1])}</a>' if b[3] else E(b[1])
            rows.append(f'<tr><td class="mono">{b[0]}</td><td>{t}</td><td class="mut">{E(b[2])}</td></tr>')
    kiem = ''.join(f'<li>{E(x)}</li>' for x in KIEM)
    return f'''<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Thiết kế và hiệu năng mạng</title>
<meta name="description" content="Học phần Thiết kế và hiệu năng mạng (đại học) thành 22 bài mô phỏng 3D: độ trễ, hàng đợi, yêu cầu, thiết kế logic, thiết kế vật lý, kiểm thử và mạng 5G.">
{LG.font_link(root)}
<style>{CSS}body{{font-family:var(--bg-font)}}
.top{{display:block;padding-top:48px;padding-bottom:8px;border:0;background:none}} .top h1{{margin:8px 0 12px}} .top .bg-lead{{margin:0}}
.card .body{{gap:12px}} .card .body>.bg-btn{{margin-top:auto;align-self:flex-start}}
h3.sec{{font:400 clamp(26px,3.2vw,40px)/1.12 var(--bg-serif);letter-spacing:-.02em;margin:96px 0 28px}} h3.sec:before{{display:none}}
table.ds{{width:100%;border-collapse:collapse}} .ds td{{padding:12px 12px 12px 0;border-top:1px solid var(--line);vertical-align:top}}
.ds tr.ch td{{font:400 21px/1.3 var(--bg-serif);padding-top:32px;border-top:0}} .ds .mono{{width:52px;color:var(--mute)}} .ds .mut{{color:var(--mute)}}
.ds a{{font-weight:600}} @media (max-width:640px){{.ds .mut{{display:none}}}}
.nguon{{color:var(--mute);font-size:14px;max-width:760px}}
</style>
</head>
<body class="bg-hub">
{LG.site_bar(root, [('Đại học', None), ('Thiết kế và hiệu năng mạng', None)])}
<header class="top bg-frame">
  <span class="bg-eyebrow">Đại học · Điện tử viễn thông</span><h1>Thiết kế và hiệu năng mạng</h1>
  <p class="bg-lead">Từ yêu cầu dịch vụ tới thiết kế logic, vật lý, kiểm thử và mạng 5G, mỗi khái niệm một cảnh mạng chạy thật.</p>
</header>
<div class="wrap">
  <section class="intro">
    <div>
      <p>Mỗi con số trên màn hình được tính từ công thức của giáo trình; trễ hàng đợi lấy từ mô phỏng sự kiện rời rạc chạy ngay trong trình duyệt và đặt cạnh lời giải lý thuyết để người học thấy mô hình khớp.</p>
      <p>Các bài đã dựng có ảnh bìa bên dưới; bảng sau đó là toàn bộ 22 bài theo sáu chương, bài nào có liên kết là đã vào học được.</p>
    </div>
    <div class="how"><b>Kiểm chứng</b><ol>{kiem}</ol></div>
  </section>
  <div class="grid">{cards}</div>
  <h3 class="sec">22 bài theo sáu chương</h3>
  <table class="ds">{''.join(rows)}</table>
  <h3 class="sec">Nguồn</h3>
  <p class="nguon">Nội dung theo giáo trình Thiết kế và hiệu năng mạng (học phần TEL1459), PGS.TS Hoàng Trọng Minh, Học viện Công nghệ Bưu chính Viễn thông, 2026. Dựng bài giảng theo đề nghị của tác giả. Hình và lời giảng trong bài là của Sáng Ăn Khoai, không chép hình hay văn bản của giáo trình; công thức giữ đúng số hiệu trong sách để người học tra lại.</p>
</div>
</body>
</html>
'''


if __name__ == '__main__':
    out = ROOT / 'thiet-ke-mang/index.html'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(build(), encoding='utf-8')
    print(out.relative_to(ROOT), len(MAU), 'bài đã dựng ·', sum(len(d) for _, _, d in CHUONG), 'bài')
