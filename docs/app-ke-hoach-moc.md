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
| M2 · Cầu nối từng bài (xong) | Bài báo vị trí nhãn trên màn hình cho app vẽ nhãn kính. Ẩn bảng riêng của bài trong chế độ app, hoặc chuyển bảng sang app | Mọi bài báo bước đúng trong app, kiểm bằng mắt từng nhóm bài | Claude |
| M3 · Gói ngoại tuyến (xong) | Tải trọn một bài (trang và tài nguyên) bằng một nút. Đo dung lượng thật từng gói để điền thay ô trống | Bật chế độ máy bay, mở lại được mọi bài đã tải | Claude, kiểm trên máy thật: người dùng |
| M4 · Android (dựng xong, chờ máy thật) | Capacitor 8, dựng APK trong GitHub Actions | Cài và chạy trên ít nhất 2 máy Android thật | Claude dựng, người dùng cài thử |
| M5 · iPhone và iPad (móng xong, chờ tài khoản Apple) | Capacitor iOS, dựng trên máy chạy macOS (runner GitHub hoặc máy Mac) | Chạy qua TestFlight trên iPhone và iPad thật | Cần tài khoản Apple Developer của người dùng |
| M6 · Lớp học (dựng xong, chờ dạy thử) | Chế độ chiếu cảnh tối và cảnh sáng, điều khiển từ điện thoại giáo viên (dùng lại kết nối PeerJS đã có) | Dạy thử một tiết thật | Claude, người dùng dạy thử |
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

## M2 đã làm (cầu nối từng bài)

Quyết định: nhãn chỉ vào bộ phận do chính bài vẽ (ghim, chú thích trên cảnh đã có ở mọi bài và bám đúng góc nhìn), app không vẽ lại. App lo chữ của bước, câu hỏi, thanh bước và nút bảng; bài lo cảnh, nhãn và điều khiển riêng.

### Giao thức vỏ app (cho người viết bài)

| Hướng | Thông điệp | Ý nghĩa |
|---|---|---|
| bài → app | `{t:'state', lesson:{title, steps:[{t, note, ask:{q, o, a, e}}], next}, i, panels:[{label, open}]}` | trạng thái bài, gửi mỗi khi đổi bước hay đổi bảng |
| bài → app | `{t:'nav', href}` | liên kết trong bài sang trang khác của site, app mở trong app |
| app → bài | `{t:'go', i}`, `{t:'next'}`, `{t:'prev'}` | chuyển bước |
| app → bài | `{t:'pnl', n}` | bật, tắt bảng thứ n của bài |
| app → bài | `{t:'vung', v:{t, r, b, l}}` | phần màn hình lớp kính của app đang chiếm (px) |

Trong bài, chế độ app có sẵn (shell/bg-shell.js 2.4.1):
- `html.bgs-app-html` từ khung hình đầu, `body.bgs-app` sau khi gắn vỏ; `BGShell.app`, `BGShell.vung`, sự kiện `bgs-vung`.
- Biến CSS `--app-t`, `--app-r`, `--app-b`, `--app-l`; `--bg-bar` thành khoảng dưới tên bài của app, nên bài đã đặt bảng theo thanh đầu bài của vỏ tự nằm dưới tên bài của app.
- `data-app="an"`: phần tử trùng với chữ app hiện (tên bài, lời của bước) bị ẩn.
- `data-app-bang="Tên"`: nhóm điều khiển của bài thành bảng của app, mở bằng nút kính dưới tên bài.
- Bảng của bài đóng mặc định trong app; bài tự gọi `BGShell.panel` không mở bảng. Khi một bảng mở, app ẩn lớp chữ của mình để bảng không bị che.

### Theo nhóm bài

- Bộ kit (31 bài, tools/robotics/kit): không dựng trang tài liệu trong app; cảnh tràn khung; thẻ lời giảng điện thoại chỉ giữ hàng nút (Tự chạy, góc máy, hành động) đặt dưới tên bài; thanh tốc độ, bảng xem bộ phận nằm trong vùng trống; tâm cảnh dời và lùi máy theo vùng trống (`framing.ix`, `iy`, `k`). Bảng số mở bằng nút của app.
- 54 bài thư viện (shell/adapter-thu-vien.js): ẩn thanh bước dưới, tab bảng và đầu trang của bài; khung phương trình dưới tên bài, trái cột chữ; khung trống của cảnh tính cả lớp kính của app. Bước này, Điều khiển mở bằng nút của app.
- Neuron: tên bài, nhãn cảnh, lời bước, hai bảng phụ ẩn; số đo điện thế màng nằm dưới tên bài trên tablet.
- Cổ Loa: cảnh tràn khung; Điều khiển (cột trái) và Thông tin mở bằng nút; dòng thời gian nổi trên lớp chữ ở tablet, hiện cùng bảng Điều khiển ở điện thoại.
- Tế Bào: cảnh tràn khung, nội dung trang ngoài cảnh ẩn; thanh điều khiển thành bảng "Điều khiển"; bảng Thông tin nổi bên phải khi mở.
- Ty Thể: cảnh tràn khung; thanh điều khiển thành bảng "Điều khiển"; ô giải thích, thước, ghi chú trong vùng trống.
- Cơ thể người: thẻ bước ẩn; thanh công cụ dưới đáy thành bảng "Công cụ"; trên tablet trang thu bề rộng để các nút neo mép phải nằm trái cột chữ.
- App: câu hỏi có phương án bấm chọn được, báo đúng sai và hiện lời giải của bài.

### Cổng

- `tests/kiem_app.py`: mở từng bài qua app ở 390 × 844 và 1180 × 820, đo A1 (bài báo trạng thái), A2 (chữ của bài lặp lời bước của app), A3 (phần tử có chữ hoặc bấm được của bài nằm dưới lớp kính của app). Chạy trước khi đẩy thay đổi ở vỏ bài, bộ kit, khuôn thư viện hay vỏ app.
- Kết quả trên máy dựng (23/11/2026): 90/90 bài đạt cả A1, A2, A3 ở điện thoại 390 × 844. Tablet 1180 × 820 vẽ bằng phần mềm chậm (vài phút mỗi bài) nên đo mẫu: 5 bài riêng, 6 bài kit, 3 bài thư viện, tất cả đạt. Cổng bố cục đạt với ba trang app.
- Chưa kiểm trên điện thoại, tablet thật.

## M3 đã làm (gói ngoại tuyến)

- `tools/goi_bai.py`: gói của từng bài tính lúc dựng, không gõ tay. Dò đệ quy từ trang bài qua HTML (src, href, importmap), JS (import, import(), new URL, chuỗi đường dẫn tới tài nguyên), CSS (url); bài dạng thư mục thêm mọi tệp của thư mục (trừ thư mục bài lồng bên trong); phần chung là phông và lõi app. Liên kết sang trang khác (bài sau, mục lục) không tính vào gói.
- `app/goi.json` (sinh bởi `tools/build_app.py`, bước ngay trước bộ nhớ đệm trong `build_all.py`): danh sách tệp và số byte thật trên đĩa.
- Dung lượng thật (23/11/2026). Phần chung tải một lần cho mọi bài: 2,76 MB (phông, lõi app, ảnh bìa 90 bài). Phần riêng từng bài: 54 bài thư viện 1,0 đến 1,2 MB; 31 bài kit 0,8 đến 11,4 MB (Cá thở bằng mang 11,4, Máy đi bộ 7,2); Neuron 1,2; Cổ Loa 1,3; Ty Thể 1,7; Tế Bào 7,4; Cơ thể người 90,0 MB (2.800 tệp mô hình giải phẫu).
- `sw.js` (`tools/sw.py`): nhận danh sách tệp: `{t:'goi', files}` trả số tệp còn thiếu và tên tệp; `{t:'luu', files}` tải nốt, báo tiến độ, chỉ lưu tệp đúng mã băm; `{t:'xoa', files}` xoá khỏi máy. Cách cũ theo thư mục bài vẫn giữ cho trình đơn của vỏ bài.
- App: nút tải ở góc trên sân khấu (mũi tên, phần trăm khi đang tải, dấu tích khi xong), gói trên 30 MB phải bấm hai lần; xin trình duyệt giữ bền bộ nhớ (`navigator.storage.persist`). Màn Đã tải: bài đã tải trọn (dung lượng, nút xoá; xoá chỉ bỏ tệp không bài đã tải nào khác cần), bài mới mở một phần (nút Tải trọn), dung lượng app đang dùng, trình duyệt có giữ bền hay không, bài nào bị trình duyệt dọn bớt tệp thì báo thiếu. Thẻ thư viện gắn nhãn ĐÃ TẢI.
- `tests/kiem_ngoai_tuyen.py`: tải bài khi có mạng, cắt mạng cả trình duyệt, mở lại app, mở bài, đi hết các bước; đạt khi bài báo trạng thái và không có yêu cầu nào tới site bị hỏng.
- Kết quả trên máy dựng: đạt ở 9 bài (Neuron, Gói tin qua ba chặng, Sứa robot, Enzyme, Cổ Loa, Ty Thể, Cá thở bằng mang, Tế Bào, Cơ thể người). Lần đầu Cơ thể người lộ ra ảnh bìa bài khác hỏng ở Thư viện khi mất mạng; đã đưa ảnh bìa vào phần chung. CI chạy thêm Neuron và Enzyme mỗi lần đẩy.
- Chưa kiểm trên điện thoại, tablet thật (bật chế độ máy bay thật).

## M4 đã làm (app Android)

- `native/`: dự án Capacitor 8.6.2 (`@capacitor/app` 8.1.2 cho nút Back). Gói `io.github.nclamvn.sangankhoai` (tạm, chốt khi phát hành), Android 7.0 trở lên (minSdk 24, compileSdk 36). Nền tối `#0E0C1A`, biểu tượng và màn khởi động tối, tràn viền; SystemBars của Capacitor đưa vùng an toàn vào CSS.
- `tools/build_native.py` dựng `native/www` (không nằm trong git) từ `app/goi.json`: phần chung và gói của 89 bài, 319 tệp, 80,2 MB. Cơ thể người (90 MB) không đóng vào app, mở từ site khi có mạng, Thư viện gắn nhãn CẦN MẠNG (`app/ban-dia.json`). Trang HTML bỏ khối đăng ký sw.js vì mọi tệp đã nằm sẵn trên máy.
- `app/app.js` khi chạy trong app: nạp `capacitor.js`; nút Back của máy đóng bài, về Thư viện, ở Thư viện thì thu app xuống; giữ màn hình sáng khi đang học (plugin `ManHinh` viết riêng, `ManHinhPlugin.java`); màn Đã tải liệt kê bài có sẵn và bài cần mạng. Bài mở từ site nhận nguồn khung chứa qua tham số `o` (vỏ bài chỉ chấp nhận `https://localhost`, `capacitor://localhost`).
- Kích thước APK: 42,9 MB (42.957.336 byte, ngày 23/11/2026), trong khoảng ước lượng 40 đến 60 MB của kế hoạch.
- `.github/workflows/android.yml`: mỗi lần đẩy thay đổi ở app, vỏ bài hay `native/` lên main thì dựng APK, cài lên máy ảo Android 14 (Pixel 6), chạy `tests/kiem_android.py`, rồi đăng APK lên bản phát hành thử `android-thu`. Bản thử ký bằng khoá debug công khai trong kho, không dùng để phát hành.
- `tests/kiem_android.py`: D1 Thư viện hiện, D2 bấm ảnh lớn mở bài và lớp chữ của app hiện bước, D3 nút Back về Thư viện, D4 bật chế độ máy bay, tắt hẳn app, mở lại, bài vẫn mở, D5 không văng app. Ảnh chụp, logcat và lời của trang (`logcat-app.txt`) nằm trong gói tải về của mỗi lần chạy.
- Kết quả trên máy ảo (WebView 113, Android 14): đạt cả năm bước.
- Lỗi tìm ra nhờ máy ảo, đã sửa:
  - Gọi tràn viền trước khi BridgeActivity đổi theme để lại thanh tiêu đề mang ảnh khởi động bị kéo dẹt.
  - Máy chủ nội bộ của Capacitor trả trang gốc cho địa chỉ thư mục (`/ten-bai/`), nên bài không nạp; app nay mở thẳng `index.html`.
  - Trên WebView 113, nhãn của thanh bước tràn chồng lên nhau; nút bước nay tự cắt phần tràn.
- Đo cảnh 3D từng bài trong app (`tests/kiem_android_canh.py`, nối WebView qua cổng gỡ lỗi của bản debug bằng CDP thô `tests/cdp_android.py`; bản phát hành tắt cổng này). Máy ảo: WebView 113, GPU "Android Emulator OpenGL ES Translator (SwiftShader)", khối uniform tối đa 16 KB, có đủ phần mở rộng float, khung RGBA16F dùng được. Kết quả 24/11/2026:
  - Bộ kit (WebGLRenderer cổ điển: Sứa robot, Robot sáu chân, Gói tin qua ba chặng) và bài thư viện (Enzyme) hiện cảnh đầy đủ, không lỗi.
  - Hai lỗi thật tìm ra, đã sửa cho mọi máy:
    - 54 bài thư viện ném lỗi `addColorStop` (449 lần ở Enzyme) vì canvas của WebView cũ không hiểu `color-mix()`. Vỏ bài 2.4.1 đổi sang `rgba()` theo màu CSS tính sẵn, chỉ bật khi canvas không hiểu. Sau sửa: 0 lỗi.
    - three 0.180 đưa ma trận InstancedMesh (tới 1.000 bản) vào một khối uniform; khối 16.640 byte vượt mức tối thiểu 16.384 byte của OpenGL ES 3, shader không liên kết được (Neuron, Tế Bào, Cổ Loa). `shell/three-webgpu.js` (import map của `tools/sri.py` trỏ `three/webgpu` vào đây) vá lúc chạy: quá 256 bản thì đi đường thuộc tính đỉnh. Tệp three.js giữ nguyên từng byte. Đo trên máy dựng: khối lớn nhất Neuron 1.920 byte, Tế Bào 15.360, Ty Thể 9.600, Cổ Loa 448. Trên máy ảo hết lỗi shader.
  - Còn mở: bốn bài dùng WebGPURenderer (Neuron, Tế Bào, Ty Thể, Cổ Loa) chạy nhánh WebGL2, không còn lỗi GL nào, logic chạy (nhãn được chiếu, bộ đếm chạy), nền được xoá đúng màu, nhưng không hình khối nào hiện, kể cả sau 60 giây. Cả bốn bài cùng một kiểu, nên là chỗ không tương thích giữa nhánh WebGL2 của WebGPURenderer với bộ dịch OpenGL ES của máy ảo và WebView 113, không riêng bài nào. Chưa biết máy thật có gặp không: máy thật có GPU thật và WebView được cập nhật qua Play Store. Đây là câu hỏi số một cho lần cài thử trên máy thật.
  - Nhịp khung hình trên máy ảo (vẽ bằng phần mềm) không đại diện cho máy thật: 1 khung/giây bài WebGPURenderer, 3 đến 4 khung/giây bộ kit.
- Cổng của M4 chưa qua: cần người dùng cài APK lên ít nhất 2 máy Android thật. Cần ghi: tên máy, phiên bản Android, cảnh 3D có hiện không (Neuron, Tế Bào, một bài kit), độ mượt, chế độ máy bay.

## M5 đã làm (móng iPhone và iPad, chưa có tài khoản Apple)

- `native/ios/`: dự án Capacitor iOS 8.6.2, gói Swift (SPM, không CocoaPods), cùng gói `io.github.nclamvn.sangankhoai` và cùng thư mục web `native/www` với Android (89 bài nằm sẵn trong app, Cơ thể người mở từ site). iOS 15 trở lên, iPhone và iPad, xoay mọi hướng; iPad dùng chế độ trang di động (`preferredContentMode: mobile`) để bố cục app đúng như máy tính bảng.
- Biểu tượng 1024 px và màn khởi động tối dựng từ `design/logo/mark.png` (nền `#0E0C1A`); thanh trạng thái chữ sáng; yêu cầu máy arm64.
- Giữ màn hình sáng khi học: plugin `ManHinh` viết bằng Swift (`AppDelegate.swift`, `UIApplication.isIdleTimerDisabled`), cùng tên với plugin Android nên `app/app.js` không đổi. Màn chính dùng lớp `MainViewController` để đăng ký plugin.
- `.github/workflows/ios.yml` (máy macOS của GitHub): dựng bản cho máy ảo, không ký; chạy `tests/kiem_ios.py` trên máy ảo iPhone và iPad mới nhất: I1 Thư viện hiện (đọc chữ trên ảnh chụp bằng Vision của macOS, `tests/ocr_ios.swift`), I2 bấm ảnh lớn mở bài (khi cài được idb), I3 app còn chạy, không có báo cáo văng app. Ảnh chụp và gói app máy ảo nằm trong gói tải về của mỗi lần chạy.
- Cần tài khoản Apple Developer cho phần còn lại: ký, TestFlight, cài lên iPhone và iPad thật (cổng của M5). Cần người dùng quyết ai đứng tên tài khoản.

## M6 đã làm (Lớp học)

- Vào từ nút màn chiếu trên thanh đầu sân khấu, hoặc địa chỉ `#/lop/<slug>`. Theo concept LopHoc (kính tối) và LopHocSang (kính sáng): cảnh tràn màn; chữ của bước cỡ lớn (tên bước tới 60 px ở màn 1180 px, co theo màn); thanh kính của giáo viên: bước trước, Bước tiếp (ở bước cuối thành Bài tiếp, mở bài sau vẫn ở chế độ lớp), tiến độ, Khoá góc nhìn, Ẩn nhãn để hỏi bài, Chỉ điểm, bảng của bài, Màn đen.
- Kính tối cho cảnh nền tối (Neuron, Cá thở bằng mang, Tế Bào: chọn theo độ sáng ảnh bìa đo ngày 24/11/2026 và nền cảnh), kính sáng cho các bài khác; giáo viên đổi bằng nút Kính, app nhớ theo từng bài trên máy.
- Bài nhận chế độ máy chiếu của vỏ bài (chữ đậm, cỡ lớn 1,25 lần, bỏ kính mờ; không ghi nhớ ra ngoài chế độ lớp). Vỏ bài 2.5.0 nhận thêm lệnh `{t:'chieu', v}` và `{t:'nhan', an}`.
- Ẩn nhãn để hỏi bài: vỏ bài gắn `data-an-nhan`, ẩn nhãn chỉ vào bộ phận của các nhóm bài (`.pin`, `.callout` ở Tế Bào, Ty Thể, Cổ Loa; `.lab` ở bài thư viện; `.call` ở bộ kit; bài khác tự khai `data-nhan`), app ẩn tên và lời của bước. Nhãn vẽ thẳng vào cảnh 3D (không phải phần tử trang) không ẩn được theo cách này.
- Khoá góc nhìn (mặc định bật): lớp chắn trong suốt của app che cảnh, bấm nhầm không xoay cảnh. Chỉ điểm: chấm đỏ đi theo chuột hoặc ngón tay. Hai công cụ ở mức app nên dùng được cho mọi bài.
- Điều khiển: bàn phím và bút trình chiếu (→, PageDown, dấu cách: bước sau; ←, PageUp: bước trước; B hoặc dấu chấm: màn đen; Esc: thoát); điện thoại quét mã QR mở trang `dieu-khien/` của site, nối thẳng hai máy bằng PeerJS (WebRTC, cần mạng; điện thoại thứ hai phải được giáo viên cho phép trên màn chiếu); màn hình giáo viên ở cửa sổ thứ hai trên cùng máy (`dieu-khien/?cung-may=1`, BroadcastChannel, không cần mạng; ẩn trong app điện thoại). App là trạm chuyển tiếp: lệnh từ điện thoại vào bài như lệnh của app, trạng thái của bài ra điện thoại kèm trạng thái màn đen. Ở bước cuối, lệnh từ điện thoại không tự đổi bài.
- Màn hình giữ sáng (Wake Lock trên trình duyệt, plugin ManHinh trong app), toàn màn hình khi vào chế độ lớp trên trình duyệt.
- `tests/kiem_lop_hoc.py` (L1 đến L10): vào chế độ lớp, phím chuyển bước, ẩn nhãn, màn đen, khoá góc nhìn, chỉ điểm, màn hình giáo viên cùng máy điều khiển hai chiều, kính sáng và nhớ kính, thoát, bố cục ở 5 cỡ màn. Kết quả trên máy dựng (24/11/2026): đạt cả L1 đến L10 (bố cục ở 1920 × 1080, 1280 × 720, 1024 × 768, 768 × 1024, 844 × 390, với Neuron kính tối và Robot sáu chân kính sáng). CI chạy L1 đến L9 mỗi lần đẩy.
- Giới hạn đã biết: điện thoại xoay ngang (cao 390 px) chiếu cho cả lớp thì vùng trống quá hẹp, hàng nút riêng của bài (ví dụ Tạm dừng, Thử phá ở Neuron) có thể đè lên tên bước. Máy chiếu, TV và máy tính bảng không gặp.
- Chưa kiểm: điện thoại thật nối qua PeerJS (máy dựng không ra được máy chủ của PeerJS), máy chiếu thật, bút trình chiếu thật. Cổng của M6: dạy thử một tiết thật.

## Nhật ký

- M0 xong: chốt hướng sân khấu.
- M1 xong phần dựng và cổng trên máy dựng. Chưa kiểm trên điện thoại, tablet thật.
- M2 xong phần dựng và cổng trên máy dựng: mọi bài chạy gọn trong app, không lặp chữ, không bị lớp kính che.
- M3 xong phần dựng và cổng trên máy dựng: tải trọn từng bài bằng một nút, mở lại được khi mất mạng.
- M4 xong phần dựng: APK 42,9 MB dựng và chạy thử trên máy ảo trong CI, bản thử ở github.com/nclamvn/bai-giang/releases/tag/android-thu. Chờ cài thử trên 2 máy thật.
- M4: đo cảnh 3D từng bài trên máy ảo, sửa hai lỗi gặp trên mọi máy cũ (canvas color-mix ở 54 bài thư viện; khối uniform quá 16 KB ở bài WebGPURenderer). Bốn bài WebGPURenderer còn trống cảnh trên máy ảo, chờ máy thật.
- M5 xong phần móng: dự án iOS, dựng và chạy thử trên máy ảo iPhone, iPad trong CI. Chờ tài khoản Apple Developer.
- M6 xong phần dựng: chế độ Lớp học trong app, điều khiển bằng phím, bút trình chiếu, điện thoại, màn hình giáo viên cùng máy. Chờ dạy thử một tiết.
