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

# 22 tiết, mỗi tiết 45 phút, phủ trọn 6 chương của giáo trình theo số trang (chương 1: 5 tiết; 2, 3: 4; 4, 5, 6: 3).
# (số tiết, tên bài, mục giáo trình, trang, phương trình, bài tập cuối chương, nội dung, thư mục bài, ảnh bìa)
CHUONG = [
    ('1', 'Tổng quan về thiết kế và hiệu năng mạng', [
        (1, 'Thiết kế mạng bắt đầu từ dịch vụ', '1.1–1.5', '1–13', '1.1–1.6, 1.8', 'C1.1, C1.2, C1.7', 'Chu trình thiết kế và kiểm chứng; dịch vụ, QoS, SLA, metric; mạng như một hệ thống; vector yêu cầu và điều kiện nghiệm thu', None, None),
        (2, 'Gói tin qua ba chặng', '1.5.2, 1.6.1', '13–14', '1.7, 1.9–1.12', 'C1.3, C1.4', 'Mức sử dụng và dư địa; độ trễ đầu cuối bốn thành phần; trễ hàng đợi từ mô phỏng so với M/M/1; thời gian đáp ứng', 'goi-tin/', 'tk-goi-tin'),
        (3, 'Khi hàng đợi đầy', '1.6.2–1.6.4', '14–16', '1.13–1.18', 'C1.5', 'Bộ đệm K gói: mất gói, biến thiên trễ, lỗi bit, thông lượng và goodput; bộ đệm lớn có tốt hơn?', 'hang-doi/', 'tk-hang-doi'),
        (4, 'Độ sẵn sàng, RTO và RPO', '1.6.5', '16–18', '1.19, 2.17–2.19, 4.14', 'C2.8', 'MTBF, MTTR; hai đường lên chung một ống hay tách hai ngả; đồng hồ phục hồi bốn pha; công thức so với Monte Carlo', 'san-sang/', 'tk-san-sang'),
        (5, 'Vòng vận hành có kiểm chứng', '1.7–1.10', '18–30', '1.20–1.28', 'C1.6, C1.8–C1.13', 'Ba hướng đánh giá; telemetry và sai lệch Δk; nền tảng 5G-Advanced và 6G; ràng buộc mới; độ phủ quan sát Γ', 'van-hanh/', 'tk-van-hanh')]),
    ('2', 'Phân tích yêu cầu thiết kế mạng', [
        (6, 'Từ "mạng phải nhanh" đến vector yêu cầu', '2.1, 2.2.2–2.2.3', '38–46', '2.1, 2.2, 2.5, 2.6', 'C2.1–C2.4', 'Yêu cầu chức năng và phi chức năng; yêu cầu tốt; vector yêu cầu và điểm ưu tiên; QoE, QoS, SLA, SLO, KPI; lớp dịch vụ', None, None),
        (7, 'Đếm tải thật', '2.2.1, 2.2.4, 2.3', '43–51', '2.3, 2.4, 2.7–2.11', 'C2.5–C2.7', 'Hệ số đồng thời, tải dịch vụ, phân vị 95; ma trận lưu lượng; tốc độ hữu dụng; dung lượng liên kết', 'dem-tai/', 'tk-tai'),
        (8, 'Yêu cầu mới của 5G-Advanced và 6G', '2.4', '51–56', '2.12–2.16', 'C2.13–C2.15', 'QoS flow; slice theo tài nguyên; vị trí xử lý MEC; O-RAN, SDN, NFV; AI; NTN, UAV; ISAC', None, None),
        (9, 'Rủi ro, đặc tả và truy vết', '2.5–2.6', '56–63', '2.17–2.20', 'C2.9–C2.12', 'RMA và miền lỗi; rủi ro an toàn thông tin; đặc trưng hoá lưu lượng; ma trận truy vết; mẫu đặc tả', None, None)]),
    ('3', 'Thiết kế mạng logic', [
        (10, 'Kiến trúc thành phần mạng', '3.1–3.2', '69–79', '3.1–3.13', 'C3.1, C3.2, C3.9, C3.10', 'Nguyên tắc thiết kế logic; chức năng, khả năng, cơ chế; thành phần địa chỉ, quản lý, hiệu năng, bảo mật; tối ưu kiến trúc', None, None),
        (11, 'Mô hình kiến trúc và chia địa chỉ VLSM', '3.3, 3.4.1', '79–85', '3.4–3.8, 3.14, 3.15', 'C3.3–C3.5', 'Mô hình topo, luồng, chức năng; tiền tố theo tăng trưởng, căn biên, gộp tuyến', 'vlsm/', 'tk-vlsm'),
        (12, 'Định tuyến, ECMP và hội tụ', '3.4.2', '85–88', '3.16–3.19', 'C3.6, C3.7', 'Chi phí đường đi, Dijkstra; ECMP chia đều hay băm; đổi metric; hội tụ bốn pha', 'dinh-tuyen/', 'tk-dinh-tuyen'),
        (13, 'Underlay, overlay và thiết kế logic 5G', '3.4.3, 3.5, 3.6', '88–94', '3.20–3.25', 'C3.8, C3.11, C3.12', 'Leaf-spine và VXLAN/EVPN; tenant; 5GS, slicing, MEC, O-RAN trong thiết kế logic; ma trận truy vết', 'overlay/', 'tk-overlay')]),
    ('4', 'Thiết kế mạng vật lý', [
        (14, 'Tòa nhà 8 tầng: tủ mạng, cáp và PoE', '4.1, 4.2.1–4.2.2, 4.2.5, 4.3, 4.4.4', '99–113', '4.1, 4.3, 4.5, 4.7–4.9, 4.15, 4.16', 'C4.1–C4.3, C4.5–C4.7, C4.12', 'Khảo sát; IDF mỗi tầng hay kéo về MDF; giới hạn 90 m; số cổng, Ω; PoE, UPS; sơ đồ và hồ sơ', 'toa-nha/', 'tk-toa-nha'),
        (15, 'Môi trường truyền dẫn và ngân sách quang', '4.2.3, 4.4.1–4.4.3', '104–112', '4.2, 4.4, 4.10–4.14', 'C4.4', 'Cáp đồng, quang đa mode, đơn mode; công suất thu; dung lượng, trễ tuần tự, dự phòng', 'quang/', 'tk-quang'),
        (16, 'Wi-Fi, 5G và nghiệm thu vật lý', '4.2.4, 4.4.5–4.6', '105–117', '4.6, 4.17–4.19', 'C4.8–C4.11', 'Tốc độ PHY và thông lượng thật; QoS tại biên; hạ tầng 5G, fronthaul; nghiệm thu', 'wifi/', 'tk-wifi')]),
    ('5', 'Kiểm thử và đánh giá hiệu năng mạng', [
        (17, 'Phòng đo', '5.1, 5.3, 5.5', '121–140', '5.1–5.11, 5.18–5.23, 5.30', 'C5.1, C5.3, C5.5, C5.6', 'Mô hình hoá; trạng thái và sự kiện; thống kê kết quả đo; kiểm thử chuẩn; kế hoạch thử; đọc kết quả theo chuỗi nguyên nhân', 'phong-do/', 'tk-phong-do'),
        (18, 'Tối ưu mạng: hàng đợi và QoS', '5.2', '126–130', '5.12–5.17', 'C5.2, C5.4', 'Tối ưu theo nút nghẽn; multicast; trễ tuần tự hoá; DiffServ, DSCP, ECN; ưu tiên có giới hạn', 'qos/', 'tk-qos'),
        (19, 'Kiểm thử 5G-Advanced và tối ưu vòng kín', '5.4', '134–138', '5.24–5.29', 'C5.7–C5.12', 'Kiểm thử slice và SLA; MEC, O-RAN; NTN, UAV, ISAC; telemetry, assurance, vòng kín', None, None)]),
    ('6', 'Các mô hình thiết kế và vận hành mạng 5G', [
        (20, 'Gói tin 5G đầu-cuối và vị trí UPF', '6.1, 6.3.3', '146–152', '6.1–6.3, 6.8, 6.9', 'C6.1, C6.4', 'Khối kiến trúc 5GS; mặt phẳng điều khiển và người dùng; UPF ở biên, vùng hay trung tâm; ngân sách trễ', '5g-dau-cuoi/', 'tk-5g'),
        (21, 'NSA, SA và hạ tầng vô tuyến', '6.2, 6.3.1–6.3.2, 6.4.1–6.4.2', '148–154', '6.4–6.7, 6.10–6.12', 'C6.2, C6.3, C6.5', 'NSA và nút thắt neo LTE; SA và lõi SBA; PDU session, QoS flow, 5QI; vùng phủ, dung lượng, fronthaul, đồng bộ', None, None),
        (22, 'Slicing, bảo mật, vận hành và hướng 6G', '6.4.3–6.6', '154–159', '6.13–6.18', 'C6.6–C6.10', 'MEC, NFV, cloud-native, O-RAN; network slicing; bảo mật; điều phối tự động; kiểm chứng 5G; IMT-2030', None, None)]),
]
TIET = [b for _, _, ds in CHUONG for b in ds]
MAU = [b for b in TIET if b[7]]
GA = {p.stem for p in (ROOT / 'tools/giao-an-mang').glob('*.json')} if (ROOT / 'tools/giao-an-mang').exists() else set()
KIEM = ['Mô phỏng khớp M/M/1 ở ρ 0,5, 0,8, 0,9 (sai lệch dưới 1 %), M/D/1, M/M/1/K (cả khi quá tải ρ = 1,3) và M/M/c (Erlang C)',
        'Monte Carlo độ sẵn sàng khớp công thức nối tiếp 1.19 và song song 4.14',
        'Bài tập có đáp số của giáo trình tính lại bằng máy mỗi lần dựng: ví dụ tr.43 (1 050 Mbit/s), BT 1.4, 2.5, 2.8, 3.3, 4.3, 4.5, 5.2',
        'Mỗi số ngoài giáo trình có nguồn hoặc ghi rõ là giả định ngay cạnh con số']


def build(root='../'):
    cards = ''.join(f'''<article class="card">
  <a class="img" href="{b[7]}" tabindex="-1" aria-hidden="true"><img src="{root}thu-vien/covers/{b[8]}.webp" alt="" loading="lazy"></a>
  <div class="body"><h2 class="bg-h3"><small>Tiết {b[0]} · mục {b[2]}</small>{E(b[1])}</h2><p>{E(b[6])}</p><div class="nut"><a class="bg-btn sm" href="{b[7]}">Vào bài</a>{f'<a class="bg-btn sm ghost" href="{b[7]}giao-an/">Giáo án</a>' if b[8] in GA else ''}</div></div>
</article>''' for b in MAU)
    rows = []
    for so, ten, ds in CHUONG:
        rows.append(f'<tr class="ch"><td colspan="4">Chương {so} · {E(ten)}</td></tr>')
        for b in ds:
            t = f'<a href="{b[7]}">{E(b[1])}</a>' if b[7] else E(b[1])
            ga = f' · <a href="{b[7]}giao-an/">giáo án</a>' if b[8] in GA else ''
            rows.append(f'<tr><td class="mono">{b[0]}</td><td>{t}{ga}</td><td class="mu">mục {b[2]}<br>tr. {b[3]}</td><td class="mut">{E(b[6])}<br><span class="pt">PT {b[4]} · bài tập {b[5]}</span></td></tr>')
    kiem = ''.join(f'<li>{E(x)}</li>' for x in KIEM)
    return f'''<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Thiết kế và hiệu năng mạng</title>
<meta name="description" content="Học phần Thiết kế và hiệu năng mạng (đại học) thành 22 tiết bài giảng 3D có giáo án 45 phút: độ trễ, hàng đợi, yêu cầu, thiết kế logic, thiết kế vật lý, kiểm thử và mạng 5G.">
{LG.font_link(root)}
<style>{CSS}body{{font-family:var(--bg-font)}}
.top{{display:block;padding-top:48px;padding-bottom:8px;border:0;background:none}} .top h1{{margin:8px 0 12px}} .top .bg-lead{{margin:0}}
.card .body{{gap:12px}} .card .body>.bg-btn{{margin-top:auto;align-self:flex-start}}
h3.sec{{font:400 clamp(26px,3.2vw,40px)/1.12 var(--bg-serif);letter-spacing:-.02em;margin:96px 0 28px}} h3.sec:before{{display:none}}
table.ds{{width:100%;border-collapse:collapse}} .ds td{{padding:12px 12px 12px 0;border-top:1px solid var(--line);vertical-align:top}}
.ds tr.ch td{{font:400 21px/1.3 var(--bg-serif);padding-top:32px;border-top:0}} .ds .mono{{width:52px;color:var(--mute)}} .ds .mut{{color:var(--mute)}}
.ds a{{font-weight:600}} .ds .mu{{width:120px;color:var(--mute);font-size:14px}} .ds .pt{{font-size:12.5px;font-family:var(--bg-mono,monospace)}} .card .nut{{display:flex;gap:8px;margin-top:auto}} @media (max-width:640px){{.ds .mut,.ds .mu{{display:none}}}}
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
      <p>22 tiết, mỗi tiết 45 phút, phủ trọn sáu chương của giáo trình. Mỗi tiết có một bài 3D để chiếu trên lớp và một giáo án: mục tiêu, diễn tiến theo phút, ví dụ giải mẫu, phiếu bài tập, đáp án và câu hỏi kiểm tra nhanh, bám đúng mục, trang và số hiệu công thức của sách.</p>
    </div>
    <div class="how"><b>Kiểm chứng</b><ol>{kiem}</ol></div>
  </section>
  <div class="grid">{cards}</div>
  <h3 class="sec">22 tiết theo sáu chương</h3>
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
    print(out.relative_to(ROOT), len(MAU), 'tiết có bài 3D ·', len(GA), 'giáo án ·', len(TIET), 'tiết')
