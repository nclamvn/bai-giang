# Vệ sinh giao diện: mười luật kiểm bằng máy

Cập nhật 21/11/2026. Công cụ: `tools/ve_sinh_ui.py` (bước `ve-sinh-ui` trong `tools/build_all.py`, nên CI chạy mỗi lần đẩy mã).

## 1. Nguồn

Bài tổng hợp của Dionis trên X (<https://x.com/Dionisselamii/status/2123871446913229285>, đọc 21/11/2026) liệt kê năm "skill" chống giao diện kiểu AI. Dự án lấy luật từ hai nguồn, đều theo MIT:

| Nguồn | Kho, commit đã đọc | Lấy gì |
|---|---|---|
| Web Interface Guidelines (Vercel) | `vercel-labs/web-interface-guidelines` `434b7f9136` | Các luật về focus, ảnh, chuyển động, chạm, chế độ tối, mẫu xấu cần gắn cờ |
| Design Engineering (Emil Kowalski) | `emilkowalski/skill` `64eb3deb9a` | Khung quyết định cho chuyển động, phản hồi khi nhấn, hover chỉ trên thiết bị có con trỏ |

Ba nguồn còn lại không dùng:

- Taste Skill (`Leonxlnx/taste-skill` `f6b76575f9`, MIT) là bộ sinh trang giới thiệu doanh nghiệp. Nhiều luật trái với trang bài học (cấm chú thích dưới hình, cấm chuyển động theo cuộn). Ý đáng mượn về sau: kiểm vùng chạm 44 px, phần tử đè nhau, tràn ở 320 px.
- Anti UI Slop (`uizze/uizze` `fc401e9e65`): phần miễn phí là quy trình chung dự án đã làm; phần chính là thư viện tham chiếu trả tiền.
- ThinkUI: không đọc được trang, không tìm ra kho.

Không chép mã hay văn bản từ các kho này. Luật được viết lại thành phép kiểm của dự án.

## 2. Mười luật

| Mã | Luật | Vì sao |
|---|---|---|
| K1 | Không dùng `transition: all` | Thuộc tính ngoài ý muốn cũng chuyển động, dễ giật |
| K2 | Mọi luật `:hover` nằm trong `@media (hover:hover)` | Trên máy chạm, hover dính lại sau khi chạm |
| K3 | Có `outline: none` thì phải có vòng focus thay thế | Người dùng bàn phím phải thấy mình đang ở đâu |
| K4 | Mọi `<img>` có `alt`, `width`, `height` | Giữ chỗ trước khi ảnh về, không giật bố cục |
| K5 | Không chặn phóng to | Người mắt kém cần phóng to |
| K6 | `<html>` có `lang` | Trình đọc màn hình chọn đúng giọng |
| K7 | Có `theme-color` | Thanh trình duyệt trên điện thoại cùng màu trang |
| K8 | Có liên kết "Bỏ qua tới nội dung" | Bàn phím không phải đi qua cả thanh điều hướng |
| K9 | Trang nền tối khai `color-scheme` | Thanh cuộn và ô nhập gốc theo nền tối |
| K10 | Không gắn `onclick` lên `<div>`, `<span>` | Nút phải là `<button>`, liên kết phải là `<a>` |

Luật áp cho mọi trang HTML đang phát hành và các tệp CSS, JS của dự án (không tính `tools/`, `tests/`, `offline/`, thư viện ngoài).

## 3. Công cụ làm gì

`python3 tools/ve_sinh_ui.py` chạy ba việc theo thứ tự:

1. **Tự thử.** Một trang mẫu đạt cả mười luật, rồi mười bản mỗi bản phạm đúng một luật. Luật nào không cắn thì công cụ dừng.
2. **Sửa** ba thứ sửa được bằng máy trên trang đã dựng:
   - thêm `width`, `height` cho `<img>` theo kích thước thật của tệp (đọc thẳng đầu tệp WebP, PNG, JPEG, GIF, SVG, không cần thư viện ngoài);
   - thêm `theme-color` cho trang nạp `house.css` mà còn thiếu;
   - thêm liên kết bỏ qua cho trang nạp `house.css` mà không có vỏ bài; đích là `<main>` hoặc khối `.wrap` đầu tiên.
3. **Kiểm** mười luật; còn lỗi thì thoát mã 1 và in từng lỗi.

`--kiem` chỉ kiểm, không ghi tệp.

Các phần không sửa bằng công cụ này mà sửa ở nguồn:

- `tools/design.py` (sinh `design/house.css`): `:where(img){height:auto}` để ảnh có `width`, `height` vẫn giữ tỉ lệ theo CSS; nút lún nhẹ khi nhấn (`scale:.97`); kiểu của liên kết bỏ qua.
- `shell/bg-shell.js`: cùng ba luật trên cho trang kit (không nạp `house.css`); vỏ tự thêm liên kết bỏ qua, đích tìm lúc bấm.
- `shell/khung.js`: liên kết bỏ qua, `<main id="noi-dung">`, `theme-color`.
- `tools/house_thu_vien.py`: `transition:all` của bảng nhắc trong 54 bài thư viện đổi thành `opacity`, `transform`.
- `tools/riemann/trang.html`: `color-scheme:dark`, phản hồi khi nhấn, liên kết bỏ qua.
- Mọi luật `:hover` trong 21 tệp nguồn được bọc vào `@media (hover:hover)`.

## 4. Miễn trừ

Ghi trong `MIEN` của công cụ, mỗi mục có lí do:

| Phạm vi | Luật | Lí do |
|---|---|---|
| `thu-vien/` | K2 | CSS mô phỏng của Tongjiang Lab, khoảng 600 luật `:hover`; dự án không sửa mã mô phỏng gốc |
| `co-the-nguoi/dental/` | K2, K7, K8 | Trang của dự án gốc dental, giữ nguyên |
| `co-the-nguoi/app/` | K2 | Ứng dụng atlas dựng bằng bộ công cụ riêng |
| `te-bao/ar.html` | K8 | Mô hình là phần tử đầu tiên của trang, không có thanh điều hướng đứng trước |
| `than-kinh/` | K9 | Cảnh nền tối nhưng mọi bảng điều khiển nền sáng |

Thêm miễn trừ thì phải ghi lí do vào cùng chỗ.

## 5. Chưa làm

- Các luật của Emil về thời lượng (dưới 300 ms), đường cong `ease-out` và thoát nhanh hơn vào chưa thành phép kiểm; mới rà bằng mắt, chưa thấy `ease-in` trong các lớp dùng chung.
- Chưa kiểm vùng chạm 44 px, phần tử đè nhau, tràn ở 320 px (cần trình duyệt, nên thuộc về `tests/smoke.py`).
- `overscroll-behavior` cho các bảng nổi chưa xét.
- Phép kiểm K2 dò theo mẫu chữ và ngoặc nhọn, không phải bộ phân tích CSS đầy đủ.
