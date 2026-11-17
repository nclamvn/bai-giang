# Ngôn ngữ giao diện "trang tài liệu sống" (theo video tham chiếu, 11/2026)

Áp cho cả hai site, tách rời nhau: Sáng Ăn Khoai (bai-giang) và site học phần TEL1459 của PGS.TS Hoàng Trọng Minh. Chuẩn tham chiếu là máy tính bảng dọc; desktop và điện thoại co giãn từ đó.

## 1. Mổ xẻ video: bố cục một trang, từ trên xuống

1. **Dải nhận diện** (mono, chữ hoa, giãn chữ ~0.16em, xám #8A8A8E). Trái: mã + nhóm (hai dòng). Phải: mô tả thiết bị + "live 3D · nhịp" (hai dòng, căn phải).
2. **Đầu trang hai cột ~1 : 1.**
   - Trái: tên lớn (sans, đậm vừa 500, giãn âm -0.05em, cao dòng 0.95–1.0). Dưới tên là chú giải vật liệu: chấm màu 7 px + nhãn mono chữ hoa.
   - Phải: câu hỏi H2 (500, -0.025em), sau đó một đoạn mở đầu 4–6 dòng, xám đậm #4A4A4F. Mọi con số trong đoạn là số thật.
3. **Sân khấu 3D tràn ngang** (bleed hết bề rộng, không khung). Mép trên và mép dưới mờ dần vào nền trắng. Nhãn bộ phận là thẻ trắng nhỏ, có số tròn đỏ #CC2A53 và chữ mono chữ hoa.
4. **Dải chỉ số 6 ô**, có hairline trên/dưới và vách đứng.
   - Mỗi ô: số lớn sans 500 với đơn vị nhỏ xám, rồi nhãn mono có chấm.
   - Ô đang chú ý có chấm đỏ; các ô khác chấm xám.
   - Dưới mỗi ô là gạch hổ phách #D9A065 dài ~22 px.
5. **Hai thẻ số liệu** (nền #FBFBF8, hairline #ECECEA, bo 14 px).
   - Đầu thẻ: tên mono chữ hoa, bên phải là nút phân đoạn hoặc ghi chú mono.
   - Thân thẻ: sơ đồ nét mảnh, đồng hồ.
   - Chân thẻ: một câu chú thích màu.
6. **Danh sách bước đánh số, 4 cột**, chạy dọc theo cột (01, 02 ở cột 1).
   - Số mono nhỏ; bước đang giảng có số đỏ, tiêu đề đen, mô tả xám đậm.
   - Bước khác nhạt (#B9B9BD/#CDCDD0). Bước sáng theo lời giảng.
7. **Dải chân mono**. Trái: tên dạng giải phẫu + chuỗi quy trình. Phải: thông số của bước đang chạy (chữ đen).

Không có thanh ứng dụng, không đổ bóng, không kính mờ. Màu chỉ dành cho dữ liệu và trạng thái.

## 2. Token

| Vai | Giá trị |
|---|---|
| Mực chính | #141416 |
| Mực phụ | #4A4A4F |
| Chữ mờ | #8A8A8E |
| Hairline | #ECECEA |
| Nền thẻ | #FBFBF8 |
| Tín hiệu (bước đang chạy, số thứ tự, hoàn chỉnh) | #CC2A53 |
| Hổ phách (gạch chỉ số, chấm danh sách, bản sơ bộ) | #D9A065 |
| Chữ | Be Vietnam Pro 400/500 (tiêu đề 500, không dùng 700) |
| Mono | JetBrains Mono 400, nhãn 10.5–11 px chữ hoa giãn 0.14–0.16em |
| Bo góc | thẻ 14 px, nút 8 px |
| Lề hai bên | clamp(16px, 5vw, 56px); khung đọc tối đa 1180 px; sân khấu tối đa 1600 px |

## 3. Co giãn

- **Máy tính bảng dọc (chuẩn, ~1080 px).**
  - Đầu trang 2 cột; sân khấu 16:9 tràn ngang; chỉ số 4 ô.
  - Thẻ 2 cột; bước 3 cột (2 cột dưới 900 px).
- **Desktop (≥ 1100 px).** Như máy tính bảng, thẻ 3 cột, bước 4 cột.
- **Điện thoại (< 700 px).**
  - Đầu trang 1 cột.
  - Sân khấu cao hơn (khung 5:4, cắt hai mép trống của cảnh 16:9). Nhãn bộ phận tự lật để nằm trong phần cảnh còn thấy, ẩn khi quá nhỏ.
  - **Lời giảng chuyển xuống ngay dưới sân khấu** để vừa xem vừa đọc.
  - Chỉ số 2 × 2; thẻ và bước 1 cột.

## 4. Hiện thực

### Bài 3D bộ kit (robotics, mạng, vật lí, cá…)

- `tools/robotics/kit/doc.js` dựng lại bài thành trang tài liệu dọc. Đây là mặc định; `?doc=0` trả về bố cục sân khấu cũ.
  - Đầu bảng 1600 × 900 trở thành dải nhận diện, H1 và chú giải. Khung lời giảng trở thành cột phải của đầu trang.
  - Mỗi bảng `.cp` trở thành một thẻ, phần trong co theo bề rộng thẻ. Thẻ tự nới khi `draw()` điền chữ dài ra.
  - Nút trở thành nhóm góc nhìn phân đoạn và hàng chip.
  - Phần tử neo phải giữ neo phải.
- `kit/ui.js` gắn vai (`data-r`) cho đầu bảng, lời giảng và lớp phủ, và lưu `ui.meta`. Kiểu chữ dùng `:is(#app,.dk-card)` để bảng trong thẻ giữ đúng phông.
- `kit/stage.js` có `framing {k, off}`. Ở bố cục tài liệu, máy quay kéo gần (k 0,76) và bỏ phần lớn độ lệch né bảng.
- `kit/live.js`, trong bố cục tài liệu:
  - con lăn chuột cuộn trang (Ctrl/⌘ hoặc toàn màn hình mới thu phóng);
  - chạm dọc trên cảnh cuộn trang, kéo ngang thì xoay cảnh;
  - thanh trượt kéo được ngay trong thẻ.

### Bài 3D không dùng bộ kit (tế bào, ty thể, thần kinh, cơ thể người, Cổ Loa, 54 bài thí nghiệm)
- `shell/khung.js`, gắn bởi `tools/inject_shell.py` ngay sau `<meta charset>`. Ở cửa sổ chính, đoạn mã đầu trang nạp `khung.js` rồi dừng phần còn lại của trang (thẻ `<plaintext>`), nên mã nặng của bài không chạy hai lần.
- Trang dọc gồm:
  - dải nhận diện, tên bài, chú giải (môn, chủ đề, gói dạy);
  - lời giảng của bước (phút và việc của giáo viên khi bài có gói dạy);
  - khung cảnh tràn ngang chứa chính bài (`<iframe name="bgs-canh">`, cùng địa chỉ);
  - dải chỉ số, danh sách bước sáng theo bài, thẻ bài tiếp theo và gói dạy, dải chân.
- Vỏ trong khung báo trạng thái bằng `postMessage`; trang ngoài gửi `{t:'go'|'start'|'stop'}`. Liên kết của bài mở ở trang ngoài (`<base target="_top">`).
- Trang ngoài cho `window.BGShell` và `window.BG_SEQ` trỏ vào bài trong khung (kiểm thử, công cụ).
- Lối thoát và ngoại lệ:
  - `?doc=0` chạy bài toàn màn hình như cũ;
  - bản offline một tệp và bản đăng nơi khác không có khung;
  - bài bộ kit dựng với `--no-khung`.

### Site TEL1459

- `tools/xuat_tel1459.py`: mục lục và giáo án dùng cùng token và cấu trúc.
  - Đầu trang: dải nhận diện, H1, chú giải trạng thái.
  - Ảnh cảnh tiết 1 tràn ngang, có thẻ số đỏ.
  - Dải chỉ số; thẻ tiến độ và thẻ cách dùng; danh sách ghi chú đánh số.
  - Dải chân mono.

## 5. Lộ trình

1. **Giai đoạn 1.** Bài 3D bộ kit (30 bài) và toàn bộ site TEL1459.
2. **Giai đoạn 2.** Token chung (nền trắng, sans thay serif ở mọi trang), trang chủ, thư viện, mục lục Robotics và Thiết kế mạng (dải nhận diện, đầu trang hai cột, dải cảnh, dải chỉ số), giáo viên, chủ đề, giáo án.
3. **Giai đoạn 3.** 59 bài không dùng bộ kit chạy trong khung tài liệu dọc (`shell/khung.js`).
