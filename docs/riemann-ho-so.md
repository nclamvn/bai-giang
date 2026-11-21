# Hồ sơ trang Giả thuyết Riemann (toan/riemann)

Cập nhật 21/11/2026. Trang: `toan/riemann/`. Nguồn: `tools/riemann/` (`main.js`, `trang.html`, `du-lieu.json`, `zeta.json`, `tinh_zeta.py`, `build.mjs`).

## 1. Dữ liệu đã cào và lọc

Sổ `tools/riemann/du-lieu.json` có 35 mốc, 45 liên hệ giữa các mốc, 12 mốc của nhánh AI, 20 bước của "41 ngày", 8 dòng kiểm Lean và 25 nguồn. Mỗi mốc mang một trạng thái:

| Trạng thái | Nghĩa |
|---|---|
| `dinh-ly` | Đã chứng minh, được công nhận |
| `gia-thuyet` | Phỏng đoán |
| `tinh-toan` | Kiểm bằng máy tính |
| `y-tuong` | Chương trình, ý tưởng |
| `tuyen-bo` | Tuyên bố chưa qua kiểm độc lập |
| `hinh-thuc` | Đã qua máy kiểm (Lean), chưa có bản người đọc được |

### Sự kiện 20/11/2026 (đã đối chiếu nhiều nguồn)

- **Ai, cái gì.** Levent Alpöge, nhà toán học ở Anthropic, đăng ghi chú bốn trang (`alpo.ge/remark.pdf`) nói ông cùng Claude tìm ra chứng minh giả thuyết Riemann và bản tổng quát cho hàm L Dirichlet. Ghi chú không nêu tên phiên bản Claude.
- **Hình thức.** Chỉ công bố kho Lean, số đo của Fello AI:
  - 14 phần, 239 MB;
  - 175 187 tệp, 17 374 215 dòng;
  - Lean 4.33.1, Mathlib 4.33.1.

  Tác giả nói bản viết bằng lời dài hơn 250 nghìn trang (ông ghi con số này nửa đùa) nên không đăng.
- **Đường chứng minh theo ghi chú.**
  - đi xuống từ phương pháp Stepanov trên trường hàm;
  - tổng von Mangoldt có trọng số;
  - dấu lấy từ công thức tường minh Guinand–Weil;
  - chuỗi nâng theta lặp giữa các nhóm unita xác định hoàn toàn, độ dài m ≈ √X (Claude đề xuất);
  - các công thức khối Chowla–Selberg, Weyl, Siegel; bất đẳng thức độ dốc Bost; công thức vết tương đối;
  - một dạng yếu của giả thuyết Vandiver.

  Tác giả nói ông chưa nắm phần dạng tự đẳng cấu hạng cao.
- **41 ngày.** Dòng thời gian 20 bước từ 6/10 tới 16/11/2026 do Claude lắp lại; tám bước ghi ngày 15/11.
- **Kiểm độc lập** (Andrew Sutherland, MIT, cập nhật 20/11 22:05 UTC):
  - biên dịch 0 lỗi;
  - năm định lí chỉ dùng `propext`, `Classical.choice`, `Quot.sound`;
  - leanchecker 175 187/175 187;
  - nanoda, con-leche, lean4lean đều chấp nhận;
  - phát biểu chính là `RiemannHypothesis` của Mathlib;
  - một số phép kiểm còn chạy lúc đó.
- **Phản ứng** (AP, AFP):
  - Martin Bridson (Clay): có ý nghĩa lịch sử, đường tới hiểu thật sự còn dài; bài toán vẫn ghi là chưa giải.
  - Alex Kontorovich: Lean nghiêm hơn người bình duyệt nhiều.
  - Brian Conrey: không ngờ tới, chứng minh có vẻ rất phức tạp, mong có đường đơn giản hơn.
- **Bản thứ hai.** Vài giờ sau, Ravi Vakil công bố bản thảo của Alessandro Masullo (Stanford): GRH, thuần người, mười hai năm, Brian Conrad đã đọc nhiều tháng; chưa viết trong Lean.
- **Bối cảnh.**
  - Anthropic lên sàn 19/11; tác giả bác cách hiểu rằng thời điểm có chủ ý.
  - Luật Clay: công bố có bình duyệt, chờ ít nhất hai năm, được chấp nhận rộng rãi.
- **Các mốc AI trước đó trong năm 2026.**
  - Tháng 8: Claude nâng tỉ lệ không điểm trên đường từ 41,6 % lên 67,2 % (có Lean).
  - Tháng 9–10: OpenAI tuyên bố tựa giả thuyết Riemann, dải 1/8–7/8 rồi 1/12–11/12.
  - Tháng 9: OpenAI tuyên bố về Navier–Stokes.

### Phần lịch sử

Các mốc từ Euclid tới Platt–Trudgian 2021 lấy theo Conrey (Notices AMS 2003), mô tả chính thức của Bombieri (Clay) và bảng trong Wikipedia (đọc 21/11/2026), gồm:

- tỉ lệ không điểm trên đường: Hardy, Selberg, Levinson 1/3, Conrey 2/5, PRZZ 5/12;
- bảng kiểm số: Gram 15, Turing 1 104, Brent 81 triệu, Gourdon 10¹³, Platt–Trudgian tới độ cao 3·10¹²;
- mặt trận hình học: Artin, Hasse, Weil, Stepanov, Deligne;
- mặt trận vật lí: Hilbert–Pólya, Montgomery–Dyson, Odlyzko.

### Số tính thật

`tinh_zeta.py` (mpmath) ghi 200 không điểm đầu và lưới log₁₀|ζ(σ + it)| 49 × 641 trên −1 ≤ σ ≤ 2, 0 ≤ t ≤ 80. Công thức tường minh ψ(x) trong trang tính trực tiếp từ các không điểm này.

## 2. Kịch bản bảy cảnh

| # | Cảnh | Hình | Ý |
|---|---|---|---|
| 0 | Mở đầu | Dãy số tự nhiên, số nguyên tố sáng lên | Sự lộn xộn có mức độ không? |
| 1 | Âm nhạc | Bậc thang ψ(x) và đường cong từ N cặp không điểm (thanh trượt 0–200) | Mỗi không điểm là một sóng; giả thuyết nói mọi sóng cùng biên độ √x |
| 2 | Địa hình | Mặt \|ζ(s)\| tính thật, cực s = 1, các giếng không điểm thẳng hàng | Phát biểu giả thuyết |
| 3 | Công phá | Con đường thời gian năm làn, 35 cột mốc nối bằng cung ý tưởng, cổng tròn lấp theo tỉ lệ không điểm đã chứng minh | Mạng lưới người và ý; hai đồng hồ: tỉ lệ trên đường, số không điểm đã kiểm |
| 4 | Hai nhánh | Hai dải sáng trên trục thời gian giãn từ 2010 | Nhánh người lên từng bậc, nhánh AI dựng đứng, gặp nhau 20/11/2026 |
| 5 | 41 ngày | Cầu thang xoắn 20 bậc; vòng xoắn 144 chấm của con đường 12 năm thuần người; bảng Lean | Hình thức hoá thay bài báo |
| 6 | Sau cổng | Đi qua vòng tròn, dãy không điểm chạy vào xa | Máy kiểm xong, người chưa hiểu xong |

Phần kết chia ba cột: đã chắc; đã qua máy, chờ người; còn mở. Kèm toàn bộ nguồn.

## 3. Kiến trúc

- Một canvas three.js r186 cố định (EffectComposer, UnrealBloom, ACES). Bảy nhóm cảnh, cảnh hiện theo vị trí cuộn. Mỗi cảnh nhận tiến độ u ∈ [0, 1] của đoạn cuộn và tự đặt máy quay. Giữa hai cảnh mờ qua đen.
- Lời dẫn là HTML thật (đọc được khi không có WebGL). Nhãn 3D là HTML chiếu theo điểm.
- Tương tác: thanh trượt số không điểm; bấm cột mốc để ghim thẻ; mục lục cảnh bên phải.
- `node tools/riemann/build.mjs` gói `main.js` và hai tệp JSON thành `toan/riemann/app.js`. Bước `riemann` trong `tools/build_all.py`; trang có trong `tests/smoke.py`.

## 4. Giới hạn cần nhớ

- Trang phản ánh tình hình tới 21/11/2026 và sẽ lỗi thời khi việc kiểm chứng tiến thêm. Khi đó sửa `du-lieu.json` (mục `kiem`, mốc `rh26`, `masullo`) và ba cột phần kết.
- Thang 0–10 ở cảnh hai nhánh là định tính, do trang đặt; trang ghi rõ điều này.
- Ba bài của Scientific American (20–21/11) không tải được để đọc trực tiếp; nội dung của chúng chỉ được dùng qua trích dẫn lại ở nguồn khác.
