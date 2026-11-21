# Một hệ, ba cỡ màn hình

Cập nhật 21/11/2026. Milestone giao diện sau đợt vệ sinh (`docs/ve-sinh-giao-dien.md`). Mục tiêu: các lớp dùng chung chỉ dùng một thang đo, và bố cục thật được đo trong trình duyệt ở năm bề rộng mỗi lần đẩy mã.

Trang mẫu: `design/mau/` (sinh bằng `tools/build_mau.py`).

## 1. Thang đo, một nguồn

Ghi trong `design/tokens.json`, các khoá `size`, `radius`, `break`.

| Thang | Giá trị | Ghi chú |
|---|---|---|
| Cỡ chữ (px) | 12, 13, 14, 15, 17, 20, 24, 30, 34, 40, 48 | Bảy bậc chữ (12 tới 24) và bốn bậc tiêu đề. Cỡ trên 48 chỉ dùng cho tiêu đề hiển thị co giãn. |
| Bo góc (px) | 4, 8, 10, 14, 999 | 999 là tròn hẳn. Hình tròn dùng 50 %. |
| Điểm gãy (px) | 640, 900, 1100 | Điện thoại, tablet dọc, tablet ngang và laptop nhỏ, máy bàn. |
| Vùng chạm | 44 px | Trên màn chạm (`pointer: coarse`). |

Quyết định đi kèm:

- **Không chữ nào dưới 12 px.** Nhãn mono trước đây 10 tới 11,5 px nay là 12 px; giãn chữ giảm từ 0,14 em xuống 0,06 em nên bề rộng nhãn gần như cũ.
- **Chữ phụ đạt AA.** Token `mut` đổi từ `#76767A` (4,36:1 trên nền thẻ) sang `#6E6E72` (4,90:1 trên nền thẻ, 5,08:1 trên trắng). Các màu xám nhạt viết cứng dùng cho chữ cũng về màu này.
- **Bước chưa tới không còn mờ.** Danh sách bước của bài kit và bài có khung trước đây dùng xám 1,6:1 tới 2,0:1 cho bước chưa giảng; nay dùng chữ phụ đạt AA, bước đang giảng phân biệt bằng chữ chính và số màu nhấn.

Lớp dùng chung gồm 20 tệp nguồn, liệt kê ở `LOP_CHUNG` trong `tools/ve_sinh_ui.py`. Đợt này đưa 192 con số trong 16 tệp về thang.

Ngoài phạm vi thang đo:

- bảng của bài kit (`kit/ui.js`, `kit/live.js`): vẽ theo đơn vị thiết kế 1600 × 900 rồi co theo cảnh;
- các bài riêng: Tế Bào, Ty Thể, Cổ Loa, Neuron, Riemann;
- CSS mô phỏng gốc của 54 bài thư viện.

## 2. Hai lớp kiểm

### Kiểm nguồn: `tools/ve_sinh_ui.py`, luật K11 tới K13

Chạy trong `build_all`. Báo lỗi khi một tệp của lớp dùng chung có cỡ chữ, bo góc hay điểm gãy ngoài thang. Phần trong `@media print` được bỏ qua, vì bản in theo trang A4.

Khi đổi thang: sửa token rồi chạy `python3 tools/ve_sinh_ui.py --dua-ve-thang` để đưa mọi số về bậc gần nhất (đứng giữa hai bậc thì lấy bậc lớn).

### Kiểm trong trình duyệt: `tests/kiem_bo_cuc.py`, luật R1 tới R6

Chạy trong CI sau bước mở thử trang. Đo ở 320, 390, 768, 1024 và 1440 px; bốn bề rộng đầu giả lập màn chạm.

| Mã | Luật |
|---|---|
| R1 | Trang không cuộn ngang được |
| R2 | Trên màn chạm, nút, chip, tab và liên kết dạng khối cao và rộng từ 44 px. Liên kết dạng chữ nằm trong dòng văn bản được miễn. |
| R3 | Chữ không nhỏ hơn 12 px sau khi tính cả phép co |
| R4 | Chữ không bị khung cắt mà thiếu dấu ba chấm thật |
| R5 | Các phần tử bấm được không đè lên nhau |
| R6 | Tương phản chữ đạt AA trên nền đặc xác định được |

Mỗi lần chạy, công cụ tự thử trước trên một trang mẫu phạm đúng sáu luật; luật nào không cắn thì dừng.

Trang đo: 11 trang tĩnh (trang chủ, bốn trang mục, gói dạy, giáo án, thư viện, kiểm máy, trang mẫu) và ba bài đại diện (bài kit, bài có khung, Riemann). Bài 3D chỉ đo phần giao diện DOM.

## 3. Số đo

| Luật | Trước | Sau |
|---|---|---|
| R1 tràn ngang | 4 | 0 |
| R2 vùng chạm | 538 | 0 |
| R3 chữ dưới 12 px | 193 | 0 |
| R4 chữ bị cắt | chưa đo được lúc đầu; 5 sau khi sửa phép đo | 0 |
| R5 đè nhau | 0 | 0 |
| R6 tương phản | 436 | 0 |

"Trước" là số đo ngay sau khi đưa cỡ chữ về thang và trước các sửa khác, trên 13 trang × 5 bề rộng. Bản xuất tel1459 đo riêng ba trang (mục lục, giáo án, một bài): từ 1 201 lỗi về 0.

Những chỗ sửa đáng kể:

- trang giáo án của tel1459 tràn ngang tới 855 px trên điện thoại 390 px (cột nội dung không co được);
- trang mục robotics, gói dạy, giáo án và Riemann tràn ngang ở 320 px;
- nhãn của dải chỉ số bị cắt cứng trên điện thoại ("Thí nghiệm theo b"); nay xuống dòng;
- nút nhỏ, chip, tab, nút chuyển bước của bài: 32 tới 40 px, nay 44 px trên màn chạm;
- thẻ của bài kit: hệ số co giữ trong khoảng 0,96 tới 1,25; thẻ quá rộng so với màn hình thì cuộn ngang thay vì thu chữ.

## 4. Còn lại

- **R3k, chỉ báo cáo:** chữ trong bảng của bài kit còn dưới 12 px ở một số chỗ, nhiều nhất trên điện thoại 320 px (ghi chú 9,5 đơn vị thiết kế viết ngay trong từng bài). Phép đo đếm được 76 tới 104 phần tử trên một bài ở năm bề rộng. Muốn hết phải sửa từng bài trong 15 bài kit.
- **Các bài riêng** (Tế Bào, Ty Thể, Cổ Loa, Neuron) chưa vào danh sách đo.
- **Máy thật:** mọi số trên đây đo bằng trình duyệt giả lập. Cổng cuối của milestone là xem trên một điện thoại, một tablet, một laptop.
- Phần rà bằng mắt (thứ bậc thị giác, trang trí vô nghĩa) mới làm trên ảnh chụp của bảy trang, chưa làm đủ mọi trang.
- Token chuyển động (thời lượng, đường cong) đã có trong `tokens.json` nhưng chưa có luật kiểm.
