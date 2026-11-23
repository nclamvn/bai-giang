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

Trong bài, chế độ app có sẵn (shell/bg-shell.js 2.4.0):
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
- Dung lượng thật một gói (gồm phần chung 0,57 MB): 54 bài thư viện 1,6 đến 1,9 MB; 31 bài kit 1,4 đến 12,1 MB (Cá thở bằng mang 12,1, Máy đi bộ 7,8); Neuron 1,8; Cổ Loa 2,0; Ty Thể 2,3; Tế Bào 7,9; Cơ thể người 90,6 MB (2.800 tệp mô hình giải phẫu).
- `sw.js` (`tools/sw.py`): nhận danh sách tệp: `{t:'goi', files}` trả số tệp còn thiếu và tên tệp; `{t:'luu', files}` tải nốt, báo tiến độ, chỉ lưu tệp đúng mã băm; `{t:'xoa', files}` xoá khỏi máy. Cách cũ theo thư mục bài vẫn giữ cho trình đơn của vỏ bài.
- App: nút tải ở góc trên sân khấu (mũi tên, phần trăm khi đang tải, dấu tích khi xong), gói trên 30 MB phải bấm hai lần; xin trình duyệt giữ bền bộ nhớ (`navigator.storage.persist`). Màn Đã tải: bài đã tải trọn (dung lượng, nút xoá; xoá chỉ bỏ tệp không bài đã tải nào khác cần), bài mới mở một phần (nút Tải trọn), dung lượng app đang dùng, trình duyệt có giữ bền hay không, bài nào bị trình duyệt dọn bớt tệp thì báo thiếu. Thẻ thư viện gắn nhãn ĐÃ TẢI.
- `tests/kiem_ngoai_tuyen.py`: tải bài khi có mạng, cắt mạng cả trình duyệt, mở lại app, mở bài, đi hết các bước; đạt khi bài báo trạng thái và không có yêu cầu nào tới site bị hỏng.

## Nhật ký

- M0 xong: chốt hướng sân khấu.
- M1 xong phần dựng và cổng trên máy dựng. Chưa kiểm trên điện thoại, tablet thật.
- M2 xong phần dựng và cổng trên máy dựng: mọi bài chạy gọn trong app, không lặp chữ, không bị lớp kính che.
