# Phát hành Sáng Ăn Khoai lên Google Play và App Store (mốc M7)

Tài liệu này gom mọi thứ cần để nộp app: việc người dùng phải tự làm, chữ của trang cửa hàng, câu trả lời cho các bảng hỏi (an toàn dữ liệu, phân loại tuổi), ghi chú cho người duyệt, và các bước dựng bản phát hành. Số liệu và quy định tra ngày 24/11/2026; quy định cửa hàng hay đổi, kiểm lại lúc nộp.

## 1. Việc người dùng phải quyết và tự làm

Claude không tạo tài khoản, không nhập thông tin thanh toán, không nộp app thay người dùng.

1. **Tài khoản nhà phát triển.**
   - Google Play Console: phí đăng ký một lần (25 USD theo các nguồn tổng hợp; kiểm trên trang đăng ký).
   - Apple Developer Program: phí năm (99 USD theo các nguồn tổng hợp; kiểm trên trang đăng ký). Cần cho TestFlight, App Store và cài lên iPhone, iPad thật.
   - Quyết ai đứng tên: cá nhân hay tổ chức (trường, công ty). Tên này hiện trên cửa hàng.
2. **Tài khoản cá nhân mới của Google Play** (tạo sau 13/11/2023) phải chạy thử kín với ít nhất 12 người thử, liên tục 14 ngày, rồi mới được xin phát hành chính thức. Nên chuẩn bị 12 giáo viên, học sinh có điện thoại Android từ sớm. Tài khoản tổ chức: trang hướng dẫn không nói tới.
3. **Tên gói** hiện là `io.github.nclamvn.sangankhoai` (tạm). Sau khi nộp bản đầu tiên thì không đổi được. Chốt trước khi nộp.
4. **Khoá tải lên Android** (một lần, giữ bí mật, mất là phiền):
   ```
   keytool -genkeypair -v -keystore upload-keystore.jks -alias sangankhoai -keyalg RSA -keysize 4096 -validity 10000
   base64 -w0 upload-keystore.jks    # dán kết quả vào secret ANDROID_UPLOAD_KEYSTORE_B64
   ```
   Thêm 4 secret trong GitHub (Settings > Secrets and variables > Actions): `ANDROID_UPLOAD_KEYSTORE_B64`, `ANDROID_UPLOAD_KEYSTORE_PASSWORD`, `ANDROID_UPLOAD_KEY_ALIAS`, `ANDROID_UPLOAD_KEY_PASSWORD`. Bật Play App Signing trong Play Console (Google giữ khoá ký app; khoá tải lên mất thì xin đặt lại được). Không đưa tệp `.jks` vào kho (`.gitignore` đã chặn).
5. **Email liên hệ** bắt buộc trên cả hai cửa hàng (hiện công khai). Chọn một hộp thư cho app.
6. **Giữ miễn phí, không quảng cáo, không bán trong app.** 54 bài thư viện mang giấy phép CC BY-NC 4.0 và một phần mô hình giải phẫu chỉ được dùng phi thương mại (`README.md` mục Giấy phép). Trên cửa hàng chọn: miễn phí, không quảng cáo, không mua trong app.

## 2. Trang cửa hàng (tiếng Việt)

| Trường | Giới hạn | Nội dung |
|---|---|---|
| Tên app | 30 ký tự (cả hai) | Sáng Ăn Khoai |
| Phụ đề (App Store) | 30 ký tự | Bài học 3D tiếng Việt |
| Mô tả ngắn (Google Play) | 80 ký tự | Bài học 3D tiếng Việt: học từng bước, học khi mất mạng, chiếu cho cả lớp. |
| Chữ quảng bá (App Store) | 170 ký tự | 90 bài học 3D tiếng Việt, học được khi mất mạng. Chế độ Lớp học chiếu cho cả lớp, điều khiển bằng bút trình chiếu hoặc điện thoại. |
| Từ khoá (App Store) | 100 ký tự | bài giảng 3D,sinh học,vật lí,hoá học,lịch sử,robotics,giáo viên,ngoại tuyến,máy chiếu |
| Danh mục | | Giáo dục (Education) |
| Giá | | Miễn phí; không quảng cáo; không mua trong app |
| Chính sách riêng tư | | https://nclamvn.github.io/bai-giang/chinh-sach-rieng-tu/ |
| Hỗ trợ | | https://github.com/nclamvn/bai-giang/issues |
| Trang giới thiệu | | https://nclamvn.github.io/bai-giang/gioi-thieu/ |

**Mô tả đầy đủ** (dưới 4.000 ký tự, dùng cho cả hai cửa hàng):

> Sáng Ăn Khoai là bộ bài học 3D tương tác tiếng Việt cho học sinh và giáo viên. Mỗi bài là một cảnh 3D tràn màn hình, học theo từng bước, có câu hỏi ngay trong bài.
>
> 90 bài thuộc Sinh học, Vật lí, Hoá học, Địa lí, Lịch sử, Công nghệ, Robotics và Thiết kế mạng. Ví dụ: neuron và xung thần kinh, hành trình vào tế bào, ty thể và ATP synthase, thành Cổ Loa, động cơ xăng bốn kì, robot sáu chân, gói tin qua ba chặng, cùng 54 thí nghiệm của thư viện Lí, Hoá, Sinh, Địa.
>
> Học được khi mất mạng: 89 bài nằm sẵn trong app, mở ngay không cần tải.
>
> Chế độ Lớp học cho giáo viên: chiếu cảnh 3D lên máy chiếu hay TV với chữ lớn đọc được từ cuối lớp; chuyển bước bằng bàn phím, bút trình chiếu hoặc điện thoại (quét mã QR); khoá góc nhìn, ẩn nhãn để hỏi bài, chỉ điểm, màn đen.
>
> Không tài khoản, không quảng cáo, không thu thập dữ liệu cá nhân. Mã nguồn mở. Miễn phí cho trường học, phi thương mại.

**Ghi chú phát hành bản 1.0.0:** Bản đầu tiên: 90 bài học 3D, học khi mất mạng, chế độ Lớp học.

**Ảnh:** dựng bằng `python3 tools/build_native.py && python3 tools/anh_cua_hang.py`, nằm ở `design/cua-hang/`:

| Cửa hàng | Bộ | Kích thước | Màn |
|---|---|---|---|
| App Store | iPhone màn vừa có Dynamic Island (bắt buộc) | 1179 × 2556 | Thư viện, Neuron, Robot sáu chân, Đã tải |
| App Store | iPhone màn lớn | 1320 × 2868 | như trên |
| App Store | iPad 13 inch (bắt buộc khi chạy trên iPad) | 2064 × 2752 | Thư viện, Neuron, Lớp học kính tối, Lớp học kính sáng |
| Google Play | điện thoại | 1080 × 1920 | Thư viện, Neuron, Robot sáu chân, Đã tải |
| Google Play | máy tính bảng 7 và 10 inch (tối thiểu 4 ảnh) | 1920 × 1080 | như iPad |
| Google Play | ảnh nổi bật | 1024 × 500 | `play/anh-noi-bat.jpg` |
| Google Play | biểu tượng | 512 × 512 | `play/bieu-tuong-512.png` |

Ảnh chụp từ chính thư mục web của app (`native/www`) trên trình duyệt của máy dựng, giả lập môi trường app; không vẽ thêm chữ quảng cáo. Cảnh 3D vẽ bằng GPU phần mềm của máy dựng.

## 3. Bảng hỏi an toàn dữ liệu và quyền riêng tư

Căn cứ: `chinh-sach-rieng-tu/` (sinh bởi `tools/build_phap_ly.py`), quyền Android chỉ `INTERNET`, không SDK quảng cáo hay đo đếm, không tài khoản.

**Google Play, mục An toàn dữ liệu (Data safety):**
- App có thu thập hay chia sẻ dữ liệu người dùng không: **Không**.
- Lưu ý để người dùng tự cân nhắc khi trả lời: chỉ khi giáo viên bấm "Điều khiển từ điện thoại", app nối với máy chủ công cộng của PeerJS (môi giới `0.peerjs.com`, chuyển tiếp TURN) và STUN của Google; các máy này thấy địa chỉ IP, app không nhận và không lưu gì. Bài Cơ thể người mở từ GitHub Pages. Hai việc này giống trình duyệt tải trang, không phải nhà phát triển thu thập. Nếu Play Console hỏi riêng về thư viện bên thứ ba, ghi PeerJS (kết nối WebRTC giữa hai máy, không định danh người dùng).
- Mã hoá khi truyền: có (HTTPS; WebRTC mã hoá DTLS).
- Yêu cầu xoá dữ liệu: không áp dụng (không có tài khoản, không lưu trên máy chủ).

**Google Play, Đối tượng mục tiêu (Target audience):** đề xuất **13 tuổi trở lên** (13–15, 16–17, 18+): bài theo chương trình từ Khoa học tự nhiên 8 tới đại học. Chọn dưới 13 tuổi thì phải theo Chính sách gia đình của Google Play (các SDK và kết nối ngoài phải được duyệt), cần xem lại riêng phần PeerJS.

**App Store, Quyền riêng tư của app (App Privacy):** **Không thu thập dữ liệu** (Data Not Collected). Không dùng theo dõi (App Tracking Transparency không áp dụng).

**Phân loại tuổi:**
- Google Play (bảng hỏi IARC): danh mục Giáo dục; không bạo lực, không nội dung tình dục, không ngôn từ thô tục, không cờ bạc, không mua bán, không chia sẻ vị trí, người dùng không trò chuyện với nhau. Bài Cơ thể người có mô hình giải phẫu cho mục đích học tập (không phải nội dung khêu gợi); bài Hoá học nói về hoá chất trong thí nghiệm. Trả lời trung thực theo câu hỏi.
- App Store: các mục đều "Không" (None) → 4+. Nếu Apple hỏi "Thông tin y khoa, điều trị": bài giải phẫu là kiến thức học đường, không phải hướng dẫn điều trị.

## 4. Quy tắc duyệt cần lưu ý

- **Apple 4.2 (chức năng tối thiểu, không phải trang web bọc lại).** Điểm khác một trang web:
  - 89 bài (80 MB) nằm sẵn trong app, mở không cần mạng;
  - giữ màn hình sáng khi học (plugin native ManHinh);
  - nút Back của Android;
  - liên kết `sangankhoai://` mở thẳng bài hay chế độ Lớp học;
  - chế độ Lớp học điều khiển bằng bút trình chiếu, điện thoại;
  - bố cục riêng cho iPad.
  Nên nhắc các điểm này trong ghi chú cho người duyệt.
- **Apple 2.5.2 (app tự chứa, không tải mã thay đổi tính năng).** Bài Cơ thể người (90 MB) mở từ site trong khung web, như trình duyệt mở trang, không thay mã của app. Nếu người duyệt hỏi, lựa chọn dự phòng là đóng bài này vào bản iOS (app nặng thêm khoảng 90 MB).
- **Google Play, nội dung bản quyền:** app dùng nội dung bên thứ ba có giấy phép mở (ghi ở `gioi-thieu/`). Khi Play hỏi về quyền nội dung, trả lời có quyền dùng và dẫn trang này.

**Ghi chú cho người duyệt Apple (tiếng Anh):**

> Sáng Ăn Khoai is a free, non-commercial collection of 90 interactive 3D science lessons in Vietnamese for students and teachers. No account or login is needed. 89 lessons are bundled in the app and work offline. To try: open any lesson from the Library, tap "Bắt đầu" (Start) and use "Bước tiếp" (Next step). Classroom mode: inside a lesson, tap the projector icon at the top; it shows large captions for a projector and can be controlled with a keyboard, a presentation clicker, or a phone (the phone part needs internet). The "Cơ thể người" (Human body) lesson is loaded from our website because of its size. The app collects no personal data; privacy policy: https://nclamvn.github.io/bai-giang/chinh-sach-rieng-tu/

## 5. Dựng bản phát hành

**Android** (`.github/workflows/phat-hanh.yml`):
- Đẩy tag `v1.0.0` (hoặc bấm chạy tay trên GitHub). Workflow dựng AAB và APK bản phát hành, số bản theo tag, mã bản tăng theo số lần chạy.
- Có khoá trong secrets thì ký; chưa có thì dựng bản chưa ký và ghi rõ ở tóm tắt.
- Workflow tạo bản nháp phát hành trên GitHub kèm hai tệp. Tải tệp `.aab` lên Play Console, vào kênh thử kín trước.
- Workflow Android hằng ngày (`android.yml`) dựng thêm AAB chưa ký để biết cấu hình phát hành vẫn dựng được. Lần đầu (24/11/2026): AAB 38,7 MB (Google Play cho tối đa 200 MB cho gói nén tải về; kiểm lại giới hạn lúc nộp).

**iOS** (khi có tài khoản Apple Developer):
1. Trong App Store Connect, tạo app với bundle ID `io.github.nclamvn.sangankhoai` (hoặc tên đã chốt).
2. Trên máy Mac có Xcode: `cd native && npm ci && python3 ../tools/build_native.py && npx cap sync ios`, mở `native/ios/App/App.xcodeproj`, chọn đội phát triển (Signing & Capabilities), đặt Version 1.0.0, chọn Product > Archive, rồi Distribute App lên App Store Connect.
3. Thử qua TestFlight trên iPhone và iPad thật (cổng của M5), rồi nộp duyệt kèm ảnh, chữ và ghi chú ở trên.
4. Tự động hoá sau (tuỳ chọn): khoá API của App Store Connect và chứng chỉ phân phối đưa vào GitHub secrets, thêm job iOS vào `phat-hanh.yml`.

## 6. Danh sách kiểm trước khi nộp

- [ ] Đã chốt tên gói, người đứng tên tài khoản, email liên hệ.
- [ ] Cài thử APK trên ít nhất 2 máy Android thật (cổng M4), ghi kết quả vào `docs/app-ke-hoach-moc.md`.
- [ ] Thử TestFlight trên iPhone và iPad thật (cổng M5).
- [ ] Dạy thử một tiết bằng chế độ Lớp học (cổng M6).
- [ ] Khoá tải lên Android nằm trong GitHub secrets; Play App Signing đã bật.
- [ ] 12 người thử kín 14 ngày (tài khoản cá nhân mới của Google Play).
- [ ] Ảnh ở `design/cua-hang/` dựng lại từ bản sẽ nộp.
- [ ] Trang chính sách riêng tư đúng với bản sẽ nộp (thêm thư viện hay kết nối mới thì sửa `tools/build_phap_ly.py`).

Nguồn quy định:
- Ảnh App Store: developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications.
- Ảnh và biểu tượng Google Play: support.google.com/googleplay/android-developer/answer/9866151.
- Thử kín 12 người, 14 ngày: support.google.com/googleplay/android-developer/answer/14151465.
- Tạo bản phát hành bằng token của workflow: changelog GitHub ngày 02/11/2023.
