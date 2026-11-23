# App Sáng Ăn Khoai: kế hoạch build theo mốc lớn

Tài liệu này chốt hướng thiết kế và chia việc build app cho điện thoại và tablet thành các mốc. Mỗi mốc có cổng nghiệm thu: chưa qua cổng thì chưa sang mốc sau.

- Kế hoạch chọn công cụ và deep dive UI/UX: tài liệu "Kế hoạch app Sáng Ăn Khoai cho điện thoại và tablet" (Claude Docs).
- Concept hình đã chốt: bảng "Concept UI app Sáng Ăn Khoai" (9 màn).

## Hướng thiết kế đã chốt: sân khấu

1. Trong bài học, cảnh 3D tràn sát mép ở mọi kích thước. Không có thanh tab, thanh dọc hay khung viền.
2. Giao diện là lớp kính mỏng nổi trên cảnh, gồm: nút đóng, tên bài, chữ của bước, nhãn chỉ vào bộ phận, thanh bước kiểu dòng thời gian.
3. Thư viện kiểu rạp phim: ảnh lớn của bài đang học dở, thẻ bài bằng ảnh cảnh thật.
4. Nền tối mặc định cho app. Chế độ Lớp học có hai bản, cảnh tối và cảnh sáng.
5. Chữ, số và nguồn lấy từ bài thật, không bịa. Chỗ chưa có số liệu để ô trống có nhãn.

## Nền kỹ thuật có sẵn trong repo

- Mọi bài (bài riêng, 31 bài kit, 54 bài thư viện) đều gắn vỏ `shell/bg-shell.js`.
- Vỏ có giao thức khung: khi bài chạy trong `iframe name="bgs-canh"`, vỏ gửi trạng thái (tên bài, các bước, bước hiện tại) cho trang ngoài bằng `postMessage`. Trang ngoài gửi lại lệnh `{t:'go'|'next'|'prev'|'start'|'stop'}`. Trang dọc `shell/khung.js` đã dùng giao thức này.
- Nguồn danh mục duy nhất: `thu-vien/catalog.vi.json` và `tools/chuoi_bai.py`, kèm ảnh bìa `thu-vien/covers/`.
- Bộ nhớ đệm theo mã băm `sw.js` (sinh bởi `tools/sw.py`) đã cho học ngoại tuyến những bài đã mở.

App vì thế là một vỏ ngoài mới theo hướng sân khấu, dùng lại giao thức khung, không viết lại bài.

## Các mốc

| Mốc | Nội dung | Cổng nghiệm thu | Ai làm |
|---|---|---|---|
| M0 · Chốt concept | Hướng sân khấu, 9 màn concept | Người dùng chốt | Xong |
| M1 · Vỏ app web (xong) | `app/`: Thư viện, Bài học sân khấu, Đã tải. Chế độ `?app=1` trong vỏ bài ẩn thanh của vỏ. Danh mục sinh từ nguồn duy nhất. Cài được như PWA | `build_all --check` sạch, cổng bố cục ở 6 bề rộng, mở thử được bài riêng, bài kit và bài thư viện trong app, CI xanh | Claude |
| M2 · Cầu nối từng bài | Bài báo vị trí nhãn trên màn hình cho app vẽ nhãn kính. Ẩn bảng riêng của bài trong chế độ app, hoặc chuyển bảng sang app | Mọi bài báo bước đúng trong app, kiểm bằng mắt từng nhóm bài | Claude |
| M3 · Gói ngoại tuyến | Tải trọn một bài (trang và tài nguyên) bằng một nút. Đo dung lượng thật từng gói để điền thay ô trống | Bật chế độ máy bay, mở lại được mọi bài đã tải | Claude, kiểm trên máy thật: người dùng |
| M4 · Android | Capacitor 8, dựng APK trong GitHub Actions | Cài và chạy trên ít nhất 2 máy Android thật | Claude dựng, người dùng cài thử |
| M5 · iPhone và iPad | Capacitor iOS, dựng trên máy chạy macOS (runner GitHub hoặc máy Mac) | Chạy qua TestFlight trên iPhone và iPad thật | Cần tài khoản Apple Developer của người dùng |
| M6 · Lớp học | Chế độ chiếu cảnh tối và cảnh sáng, điều khiển từ điện thoại giáo viên (dùng lại kết nối PeerJS đã có) | Dạy thử một tiết thật | Claude, người dùng dạy thử |
| M7 · Phát hành | Trang cửa hàng, chính sách riêng tư, giảm rủi ro guideline 4.2 | Được duyệt trên Google Play và App Store | Người dùng nộp, Claude soạn hồ sơ |

## Giới hạn cần nói rõ

- Máy dựng của Claude không có máy Android, iPhone, iPad thật. Mọi cổng "trên máy thật" do người dùng kiểm.
- Dựng iOS cần macOS. Ký và đưa lên TestFlight cần tài khoản Apple Developer.
- Cảnh 3D nặng (Tế Bào) có thể cần chế độ nhẹ trên điện thoại yếu. Việc này được đo ở M4 và M5.

## M1 đã làm (vỏ app web)

- `app/index.html`, `app/app.css`, `app/app.js`: ba màn Thư viện, Bài học (sân khấu), Đã tải; điều hướng bằng địa chỉ `#/thu-vien`, `#/bai/<slug>`, `#/da-tai`, `#/hoc-tiep`.
- `app/danh-muc.json` sinh bởi `tools/build_app.py` từ `tools/chuoi_bai.py` (90 bài, 8 môn), nối vào `tools/build_all.py`. Thiếu bài hoặc ảnh bìa thì dựng báo lỗi.
- Vỏ bài `shell/bg-shell.js` 2.3.0: chế độ `?app=1` trong khung `bgs-canh` ẩn thanh, thanh dưới, gợi ý, bài sau của vỏ; đóng mọi bảng của bài; liên kết sang trang khác của site gửi `{t:'nav'}` cho app; phần tử bài mang `data-app="an"` bị ẩn; `layout.apply` nhận thêm `app`.
- Bài neuron làm mẫu: tên bài, nhãn cảnh, khung lời bước và ba bảng số bên phải mang `data-app="an"`.
- App nhớ bài và bước đang học trên máy (localStorage, chỉ trên máy này), mở lại đúng bước. Đã tải đọc bộ nhớ đệm `bg-noi-dung` và đo dung lượng thật bằng `navigator.storage.estimate()`.
- Cài như PWA: `app/manifest.webmanifest`, biểu tượng 192, 512 và maskable.
- Cổng: `kiem_bo_cuc.py` thêm ba trang app, đạt ở 6 bề rộng; `ve_sinh_ui.py` đạt.
- Kiểm bằng mắt trên máy dựng: neuron ở điện thoại dọc, ngang, tablet; Cổ Loa và một bài thư viện báo bước đúng trong app.

## Việc chuyển sang M2

- Gắn `data-app="an"` hoặc `layout.apply({app})` cho từng nhóm bài để bỏ chữ trùng: Cổ Loa (bố cục trang có cột trái và dòng thời gian), Tế Bào, Ty Thể, Cơ thể người, 31 bài kit, 54 bài thư viện.
- Đưa số đo quan trọng của bài (ví dụ điện thế màng của neuron) lên lớp kính của app thay vì ẩn.
- Nhãn chỉ vào bộ phận: bài báo toạ độ màn hình của các điểm, app vẽ nhãn kính.
- Bài nặng chụp bằng trình duyệt không có card đồ hoạ bị quá thời gian (sứa robot): kiểm lại trên máy thật.

## Nhật ký

- M0 xong: chốt hướng sân khấu.
- M1 xong phần dựng và cổng trên máy dựng. Chưa kiểm trên điện thoại, tablet thật.
