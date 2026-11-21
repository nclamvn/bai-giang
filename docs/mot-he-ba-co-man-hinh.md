# Một hệ, ba cỡ màn hình

Cập nhật 22/11/2026. Milestone giao diện sau đợt vệ sinh (`docs/ve-sinh-giao-dien.md`). Mục tiêu: các lớp dùng chung chỉ dùng một thang đo, và bố cục thật được đo trong trình duyệt ở năm bề rộng mỗi lần đẩy mã.

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

### Kiểm nguồn: `tools/ve_sinh_ui.py`, luật K11 tới K14

Chạy trong `build_all`. Báo lỗi khi một tệp của lớp dùng chung có cỡ chữ, bo góc hay điểm gãy ngoài thang. Phần trong `@media print` được bỏ qua, vì bản in theo trang A4. K14 chặn chuyển tiếp dùng `ease-in` hoặc dài quá 600 ms.

Khi đổi thang: sửa token rồi chạy `python3 tools/ve_sinh_ui.py --dua-ve-thang` để đưa mọi số về bậc gần nhất (đứng giữa hai bậc thì lấy bậc lớn).

### Kiểm trong trình duyệt: `tests/kiem_bo_cuc.py`, luật R1 tới R7

Chạy trong CI sau bước mở thử trang. Đo ở 320, 390, 768, 1024 và 1440 px; bốn bề rộng đầu giả lập màn chạm.

| Mã | Luật |
|---|---|
| R1 | Trang không cuộn ngang được |
| R2 | Trên màn chạm, nút, chip, tab và liên kết dạng khối cao và rộng từ 44 px. Liên kết dạng chữ nằm trong dòng văn bản được miễn. |
| R3 | Chữ không nhỏ hơn 12 px sau khi tính cả phép co |
| R4 | Chữ không bị khung cắt mà thiếu dấu ba chấm thật |
| R5 | Các phần tử bấm được không đè lên nhau |
| R6 | Tương phản chữ đạt AA trên nền đặc xác định được |
| R7 | Trong thẻ của bài kit, núm thanh trượt nằm trên thanh và trong thẻ |

Hai luật chỉ báo cáo, không chặn: R3k (chữ dưới 12 px trong bảng bài kit) và R2k (nút dưới 44 px trong bảng bài kit: nút trên cảnh ở chế độ lên lớp và nút làm nhãn hàng trong thẻ). Lí do ở mục 5.

Mỗi lần chạy, công cụ tự thử trước trên một trang mẫu phạm đúng bảy luật; luật nào không cắn thì dừng.

Trang đo, 23 trang:

- 12 trang tĩnh: trang chủ, bốn trang mục, gói dạy, giáo án, thư viện, kiểm máy, trang mẫu, điều khiển từ xa;
- bốn bài đại diện ở chế độ đọc: hai bài kit (một bài nhiều thanh trượt, một bài có nút trong thẻ), bài có khung, Riemann;
- bảy giao diện bên trong bài, mở thẳng không qua khung (`?doc=0`): Tế Bào, Ty Thể, Cổ Loa, Neuron, một bài thư viện, một bài kit ở chế độ lên lớp, Cơ thể người. Nhóm này đo ở 390, 768 và 1440 px để CI không dài thêm quá; `--du` đo đủ năm bề rộng.

Bài 3D chỉ đo phần giao diện DOM. Phần tử chỉ dành cho trình đọc màn hình, chỉ số trên và dưới (`sup`, `sub`), ghim trên bản đồ được miễn ở luật tương ứng.

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
- thẻ của bài kit: hệ số co giữ trong khoảng 0,9 tới 1,25; thẻ quá rộng so với màn hình thì cuộn ngang thay vì thu chữ.

## 4. Đợt hoàn thiện 22/11/2026

Sau khi cổng đo chạy ổn, rà tiếp phần cổng chưa nhìn tới.

- **Núm thanh trượt lệch trong chế độ đọc (lỗi thật).** Ở chế độ đọc, bảng của bài kit thành thẻ, nhưng núm vẫn đặt theo toạ độ của cảnh 1600 × 900. Thẻ nào vốn nằm ở cột phải thì núm trôi khỏi thẻ, người đọc chỉ thấy thanh. `kit/doc.js` nay trừ gốc của thẻ khi đặt núm; R7 giữ lỗi này không quay lại. Thử trên 6 bài: 0 núm lệch, bấm ở 30 % thanh thì núm tới 0,30 tới 0,31.
- **Núm chạm số bên phải.** Thanh ngắn lại 10 đơn vị để núm ở cuối thanh không đè lên giá trị.
- **Biểu đồ đè tiêu đề và chú thích** ở ba bài (gói tin, hàng đợi, WiFi): dời biểu đồ và nhãn trục. Bài VLSM: dòng tổng kết xuống dòng thay vì tràn, dải địa chỉ của từng toà tách thành hai nhãn.
- **Giao diện bên trong bài riêng** vào danh sách đo (mục 2). Tế Bào và Cổ Loa thêm vùng chạm 44 px cho nút nhỏ; Neuron cho hàng nút xuống dòng ở màn hẹp (nút "Thử phá" bị cắt ở 320 px).
- **Tablet dọc.** Lưới bài của trang robotics và danh sách gói dạy giữ hai cột tới 640 px (trước đó về một cột từ 900 px, để trống nửa màn hình). Đầu trang giáo án: logo không còn bị ép và cắt, tên học phần rút bằng dấu ba chấm, nút không xuống dòng. Dải thông tin của giáo án: ô cuối giãn hết hàng thay vì đứng lẻ.
- **Nút của bảng ở lại trong thẻ.** Trước đây ở chế độ đọc mọi nút bị gom lên một hàng công cụ phía trên: thẻ còn lại một khoảng trống, có thẻ rỗng hẳn (chỉ còn tên bảng), và hàng công cụ có bài tới 36 nút không rõ thuộc nhóm nào, có nút trùng tên. Nay nút nằm trong bảng nào ở cảnh thì ở lại thẻ của bảng đó:
  - cụm nút đứng riêng một dải thành hàng chip cỡ thật (32 px, 44 px trên màn chạm); phần bên dưới dời theo chiều cao mới và dời lại mỗi khi bề rộng thẻ đổi;
  - cụm nút chung hàng với chữ số (nút làm nhãn hàng, như bảng "Sáu hệ thống" của sứa và robot bốn chân) giữ đúng toạ độ ở cảnh;
  - nút góc nhìn và nút không thuộc bảng nào vẫn ở hàng công cụ.
- **Nút của bài kit dùng được bằng bàn phím:** `role="button"`, `tabindex`, Enter hoặc phím cách để bấm, vòng focus, `aria-pressed` cho nút bật tắt.
- **Dải rộng của cảnh** (dải giai đoạn dựng ở Hải đăng, Chùa gỗ) chiếm cả hàng, đứng đầu lưới thẻ; trước đó nằm trong một thẻ hẹp, chỉ thấy 4 trên 8 giai đoạn.
- **Bài Cá thở bằng mang:** khung che và chữ trắng trên bể vốn thuộc cảnh bị gom thành một thẻ trắng cao khoảng 600 px. Khung che bỏ ở chế độ đọc (`data-doc="bo"`), chữ ở lại trên cảnh (`data-r="ov"`).
- **Chữ thường kiểu câu cho nhãn** (`sc()` trong `kit/ui.js`): thêm 47 từ viết tắt được giữ nguyên (SNMP, VLSM, MTBF, OSPF, VXLAN…), đơn vị viết đúng dạng chuẩn (Hz, kPa, dBm, Mbit/s, Gbit/s, gNB, IPsec) và một chữ M, S, H đứng sau con số là đơn vị (1,75 m; 1 s). Trước đó hiện "Snmp 5 phút", "WAN 500 mbit/s", "Người 1,75 M".
- **Sửa riêng từng bài** sau khi xem ảnh lưới thẻ của cả 31 bài ở 1440 px: động cơ 4 kì và cá mập mako (thanh trượt sát đầu bảng), 5G (dòng phụ bị cắt, nhãn trục đè chú thích), máy ảnh (hình nón góc nhìn tràn lên tên bảng, nhãn "cảm biến" bị cắt), sứa (nhãn tám đồng hồ dính nhau), cá piranha (hai nhãn đè nhau), robot sáu chân (đầu cột lệch cột).
- **Tế Bào không còn nháy thanh đầu cũ.** Bài này gắn vỏ ở cuối mã của bài, nên từ lúc trang hiện tới lúc vỏ gắn xong người xem thấy thanh đầu cũ, rồi bố cục nhảy khi vỏ thay vào. Lần chạy CI đầu của đợt này bắt được đúng trạng thái đó (máy chậm, vỏ chưa gắn sau 2,6 giây). Nay tệp vỏ đặt lớp `bgs-pre` lên `<html>` ngay khi chạy; bài dùng lớp đó để giữ cùng bố cục với lúc vỏ đã gắn. Đo: lề trên và vị trí cảnh trước và sau khi gắn vỏ bằng nhau (56 và 64 px ở 390 px). Quá 8 giây mà vỏ chưa gắn thì thanh dự phòng hiện lại; thanh đó cũng được sửa vùng chạm và chữ chạy.
- **Phép đo chờ bài tải xong.** Với bài 3D, công cụ chờ màn tải gỡ đi và vỏ gắn xong rồi mới đo, tối đa 45 giây. Trước đó đo sau một quãng chờ cố định, nên máy nhanh và máy chậm đo hai trạng thái khác nhau.
- **Đã thử và bỏ:** nâng riêng chữ nhỏ trong thẻ lên 11,5 đơn vị. Bảng của bài kit đặt chữ theo toạ độ tuyệt đối, nên chữ to lên thì đè biểu đồ và bị cắt ở mép thẻ. Chỉ giữ phép co đều cả thẻ; trên điện thoại lề trang hẹp lại để thẻ co lên khoảng 1,16.

Số đo sau đợt này, 23 trang: R1 tới R7 đều 0; R3k 264, R2k 24 (chỉ báo cáo). Bảy giao diện bên trong bài đo thêm một lần đủ năm bề rộng: đạt. Phép dò chữ đè và chữ tràn trên thẻ của cả 31 bài kit ở 1440 px (bước 1 và bước 3): 0 chữ tràn; 4 chỗ báo đè ở hai bài là hai khung chữ chồng mép, chữ không chạm nhau (đã xem ảnh). Số trang A4 của năm bản in không đổi (6, 6, 6, 9, 11).

## 5. Còn lại

- **R3k, chỉ báo cáo:** chữ trong bảng của bài kit còn dưới 12 px ở một số chỗ (ghi chú 9,5 đơn vị thiết kế viết ngay trong từng bài). Trên hai bài đại diện, phép đo đếm được 107 và 156 phần tử cộng cả năm bề rộng; bài thứ nhất: 53 ở 320 px, 9 ở 390 px, 25 ở 768 px, 10 ở 1024 px và 10 ở 1440 px. Muốn hết phải sửa bố cục bảng của từng bài trong 31 bài kit; nâng cỡ chữ hàng loạt đã thử và làm vỡ bảng (mục 4).
- **R2k, chỉ báo cáo:** nút làm nhãn hàng trong thẻ cao khoảng 29 px trên điện thoại (6 nút ở bài sứa), vùng bấm nới thêm 5 px mỗi phía. Đạt mức 24 px của WCAG 2.2 AA, chưa đạt 44 px của dự án, vì hàng cách nhau 36 đơn vị thiết kế. Nút trên cảnh ở chế độ lên lớp cũng thuộc nhóm này: chế độ đó dành cho màn chiếu và máy bàn.
- **Các bài riêng** đã vào danh sách đo, nhưng mới đo trạng thái lúc mở bài; các bảng chỉ hiện sau khi bấm (bảng thông tin bào quan, bảng thí nghiệm) chưa đo.
- **Máy thật:** mọi số trên đây đo bằng trình duyệt giả lập. Cổng cuối của milestone là xem trên một điện thoại, một tablet, một laptop.
- Phần rà bằng mắt (thứ bậc thị giác, trang trí vô nghĩa) mới làm trên ảnh chụp của bảy trang, chưa làm đủ mọi trang.
- K14 mới chặn `ease-in` và chuyển tiếp quá 600 ms; chưa buộc mọi chuyển tiếp dùng token thời lượng và đường cong trong `tokens.json`.
