# Mười hai kĩ thuật chuyển động: áp dụng vào Sáng Ăn Khoai

Nguồn: bài của Promix (@Promixyz) trên X, <https://x.com/Promixyz/status/2124100468548796805>, đọc ngày 21/11/2026. Sổ dữ liệu: `tools/chuyen-dong.json` (nguồn duy nhất). Bảng và các thẻ trong tài liệu này do `tools/chuyen_dong.py` dựng lại từ sổ; đừng sửa tay hai khối đó.

## 1. Bài nói gì

Tác giả muốn một lộ trình hoạt hình Blender rõ như loạt Zero to Hero của Andrej Karpathy. Bài xếp 12 "nghiên cứu chuyển động", mỗi nghiên cứu gắn một kho GitHub, theo công thức: **một kĩ thuật, một công cụ, một dự án đáng làm xong**. Video kèm theo là một áp phích 12 ô, mỗi ô một cơ cấu.

Ba câu đáng giữ nguyên ý:

- Video chỉ minh hoạ kĩ thuật. Các kho là công cụ hỗ trợ, không phải tệp dự án trong video.
- Xem README từng kho để biết bản Blender tương thích.
- Chọn một cơ cấu, tự dựng bản của mình, và làm cho mỗi chuyển động có một lí do.

## 2. Đánh giá thẳng

Bài là một danh sách tuyển chọn, không phải một phương pháp hoàn chỉnh. Giá trị của nó với dự án nằm ở ba chỗ, xếp theo độ hữu ích:

1. **Bản đồ 12 kĩ thuật.** Đây là một bảng kiểm gọn cho mọi bài có chuyển động: bài này dùng kĩ thuật nào, đã có phép kiểm tương ứng chưa.
2. **Bốn ý viết lại được ngay bằng three.js, không cần Blender:** gấp và mở mặt (số 10), thân tiến theo chân chống (số 6), kiểm và sửa mối nối vòng lặp (số 12), đổi nhịp theo mốc (số 3).
3. **Ba lưu ý cho đường Blender → GLB → web:** chỉ xuất khung DEF (số 11), giữ shape key khi áp modifier (số 7), nướng mô phỏng thành khoá trước khi xuất (số 4, 5, 8).

Phần còn lại ít dùng được trực tiếp. Dự án dựng bài bằng mã three.js; Blender chỉ đứng ở thượng nguồn của các bài có tệp GLB (hiện có một bài: `vat-li-10/may-di-bo`). Chất lượng 12 kho không đều:

- hai kho có vẻ không chạy trên Blender hiện nay (số 12: mã viết cho 2.78; số 8: `bl_info` ghi 2.78 dù kho vẫn được cập nhật);
- hai kho không có giấy phép (số 1 và số 12);
- một kho có giấy phép ghi lệch giữa hai tệp (số 6);
- một kho là sản phẩm bán, mã nguồn mở nhưng phải tự biên dịch (số 5).

## 3. Sổ 12 kĩ thuật

<!--SO:bang:start-->
| # | Kĩ thuật | Công cụ trong bài | Giấy phép | Blender | Commit đã đọc | Ưu tiên | Trạng thái |
|---|---|---|---|---|---|---|---|
| 1 | Động học ngược (Inverse Kinematics) | [FK IK Converter](https://github.com/AlexRynas/FK_IK_Converter) | không ghi | 2.8+ (README: thử tới 4.0+) | `a8b0de4234` (2025-09-04) | vừa | dự án đã có cách tương đương |
| 2 | Dẫn động và cơ cấu liên kết (Drivers & Linkages) | [EasyDriver](https://github.com/NeoEmberArt/EasyDriver) | MIT | 3.0+ (bl_info) | `7656a0932e` (2026-07-20) | vừa | dự án đã có cách tương đương |
| 3 | Nhịp và khoảng cách (Timing & Spacing) | [AnimationRetimer](https://github.com/evilmushroom/AnimationRetimer) | GPL-3.0 | 3.6+ (bl_info) | `22a182931c` (2025-10-04) | cao | chưa thử |
| 4 | Động lực học vải (Cloth Dynamics) | [ClothDrop Reborn](https://github.com/hartface/ClothDrop-Reborn) | GPL-3.0-or-later | 4.2+ (manifest) | `35fd25020c` (2026-07-13) | thấp | chưa thử |
| 5 | Mô phỏng chất lỏng (Fluid Simulation) | [FLIP Fluids](https://github.com/rlguy/Blender-FLIP-Fluids) | GPL-3.0 (add-on), MIT (bộ máy), Standard Royalty Free (một phần nội dung) | 4.5 tới 5.3 (README) | chỉ đọc README | thấp | chưa thử |
| 6 | Chu kì bước đi (Walk Cycles) | [AutoWalker](https://github.com/metedmts/AutoWalker) | MIT | 3.6+ (bl_info và manifest) | `f4d94b6881` (2025-06-10) | cao | chưa thử |
| 7 | Khoá hình (morph) (Shape Keys) | [ShKeeper](https://github.com/AgitoReiKen/ShKeeper) | GPL-3.0 | 4.1+ (bl_info) | `4657846809` (2024-08-18) | vừa | chưa thử |
| 8 | Vật rắn (Rigid Bodies) | [Bullet Constraints Builder](https://github.com/KaiKostack/bullet-constraints-builder) | GPL-2.0 | bl_info ghi 2.78; kho còn được cập nhật (commit 21/11/2026) nhưng bản Blender thật sự chạy được chưa kiểm | `c691545bb9` (2026-11-21) | thấp | chưa thử |
| 9 | Hình học thủ tục (Geometry Nodes) | [Johnny Matthews node assets](https://github.com/johnnygizmo/node_assets) | CC0-1.0 | README: làm trên bản dựng hằng ngày thời 2022; chưa kiểm với bản hiện nay | `229661d29e` (2022-11-22) | thấp | dự án đã có cách tương đương |
| 10 | Gấp và mở mặt (Deformation) | [Origamify](https://github.com/aconz2/blender-addon-origamify) | Unlicense | 2.80+ (bl_info) | `664767145c` (2021-04-18) | cao | chưa thử |
| 11 | Ràng buộc và khung xuất (Constraints) | [Auto Copy Transforms DEF](https://github.com/PieroFra/auto-copy-transforms-def) | GPL-3.0-or-later | 4.2+ (manifest), bản 1.3.2 | `052d0bf4a3` (2026-11-16) | vừa | chưa thử |
| 12 | Chuyển động lặp (Looping Motion) | [Smooth Animation Loops](https://github.com/RootKiller/blender-smooth-anim-loops-addon) | không ghi | bl_info ghi 2.78; mã dùng API trước 2.80 (scene.objects.active) nên nhiều khả năng không chạy trên Blender hiện nay (suy từ mã, chưa chạy thử) | `e8c84ac42f` (2018-09-29) | cao | chưa thử |
<!--SO:bang:end-->

Các cột giấy phép, Blender và commit lấy từ chính kho (tệp giấy phép, `bl_info`, `blender_manifest.toml`, README) ở commit đã ghi. Chưa add-on nào được cài hay chạy thử; ô nào là suy luận thì ghi rõ trong ô.

## 4. Công thức dùng lại: một kĩ thuật, một công cụ, một bài

Khi mở một bài mới có chuyển động, đi theo sáu bước:

1. **Chọn một cơ cấu và một lí do.** Viết một câu: "vật này chuyển động như vậy vì định luật nào". Không có câu đó thì chuyển động chỉ là trang trí.
2. **Tra sổ.** Tìm kĩ thuật khớp trong 12 mục; đọc ý chính, cách làm trên web và phép kiểm của mục đó.
3. **Chọn đường dựng.**
   - Đường A, mã thuần: chuyển động tính ngay trong trang từ một tham số (thanh trượt hoặc thời gian). Ưu tiên đường này: người học kéo được, số liệu đọc được, tệp nhẹ.
   - Đường B, nướng từ Blender: chỉ dùng khi hình hoặc chuyển động quá phức tạp để viết tay (khung nhiều xương, vải, vỡ vụn). Theo bảng kiểm ở mục 5.
4. **Viết phép kiểm trước khi trau chuốt.** Mỗi kĩ thuật có một phép kiểm bằng máy ghi trong sổ; đưa nó vào `window.<BÀI>` hoặc `kiem.json` để smoke test và CI đọc được.
5. **Dựng bài quanh một tham số.** Một bậc tự do chính, các bộ phận khác suy ra từ nó (kĩ thuật số 2).
6. **Ghi lại.** Đổi trạng thái trong sổ: `python3 tools/chuyen_dong.py --tt <id> da-dung`, thêm đường dẫn bài vào trường `bai`.

## 5. Bảng kiểm cho đường Blender → GLB → web

Dùng cùng `tools/kiem_glb.py` và quy trình trong `docs/anymachine-ap-dung.md`.

- **Khung xương:** chỉ xuất xương biến dạng (DEF). Khung điều khiển và ràng buộc ở lại trong tệp .blend; nướng ràng buộc thành khoá trước khi xuất.
- **Shape key:** áp modifier trước, nhưng phải giữ shape key. Driver của shape key nướng thành khoá, vì glTF không mang driver.
- **Mô phỏng (vải, vật rắn):** nướng thành khoá hoặc hình tĩnh. Không đưa chuỗi lưới theo khung hình lên web.
- **Hình học thủ tục:** hiện thực hoá instance và áp modifier, hoặc tốt hơn là viết lại hàm sinh bằng three.js.
- **Vòng lặp:** kiểm mối nối (vị trí và vận tốc đầu cuối) trước khi xuất.
- **Nén:** `gltf-transform optimize` với các cờ đã ghi trong `stilt.kiem.json` (không gộp, không đơn giản hoá, để tên bộ phận còn nguyên).
- **Ghi sổ kiểm:** `python3 tools/kiem_glb.py --ghi <tệp.glb>`, rồi bổ sung tên xương, tên bộ phận, morph target mà bài cần.

Điều cần xác nhận lại khi làm thật: lựa chọn "Apply Modifiers" của bộ xuất glTF trong Blender và việc nó bỏ qua lưới có shape key. Đây là điều nhớ từ tài liệu Blender, chưa mở lại trong lần đọc này.

## 6. Luật dùng mã nguồn ngoài

- Kho của dự án theo MIT. **Không chép mã GPL** vào kho (số 3, 4, 7, 8, 11 và phần add-on của số 5). Dùng các add-on đó như công cụ trong Blender thì được; ý tưởng thì viết lại bằng mã của mình.
- **Kho không có giấy phép** (số 1, số 12): không chép mã, chỉ học ý.
- Số 6 ghi MIT ở tệp LICENSE nhưng GPL trong manifest: coi như GPL cho tới khi tác giả nói rõ.
- Kho theo MIT, CC0 hay Unlicense (số 2, 9, 10): dùng được; nếu chép thì giữ ghi công theo lệ của dự án (`tools/robotics/LICENSE-*`).
- Trước khi cài một add-on lên máy làm việc: đọc mã ở đúng commit ghi trong sổ, vì add-on chạy với toàn quyền của Blender.

## 7. Việc có thể làm ngay, theo thứ tự đề nghị

| # | Việc | Kĩ thuật | Vì sao đáng làm | Cỡ việc |
|---|---|---|---|---|
| 1 | Bài Toán "Hình khai triển": gấp và mở lập phương, lăng trụ, chóp, khối đa diện đều bằng một thanh trượt | 10 | Bài mới hoàn toàn, mã thuần, khớp chương trình hình học không gian, có phép kiểm rõ (không đè, diện tích không đổi) | một bài kit |
| 2 | `may-di-bo`: thân tiến theo chân đang chống thay cho vận tốc đều; thêm đồ thị v(t) | 6 | Giảm độ trượt chân 9 cm mà bài đang phải báo; thêm một ý vật lí (vận tốc không đều trong một chu kì) | sửa một bài |
| 3 | Phép kiểm mối nối vòng lặp cho các bài có chu kì lấy từ GLB | 12 | Rẻ, bắt được lỗi giật ở cuối chu kì trước khi người xem thấy | một hàm trong kit và một dòng trong smoke test |
| 4 | Hàm `retime` trong kit: làm chậm đúng đoạn cần giảng | 3 | Dùng lại được ở mọi bài có beat giảng một khoảnh khắc ngắn | một hàm nhỏ |

Chưa việc nào trong bảng được làm; tài liệu này chỉ lưu phương pháp và sổ.

## 8. Thẻ từng kĩ thuật

<!--SO:the:start-->
### 1. Động học ngược (Inverse Kinematics)

- **Công cụ:** [FK IK Converter](https://github.com/AlexRynas/FK_IK_Converter). Dựng điều khiển IK và cực cho khung người, chuyển FK sang IK và ngược lại mà giữ nguyên tư thế.
- **Giấy phép:** không ghi. Không có tệp giấy phép. README chỉ ghi: dùng cho học tập và sản xuất, ghi công tác giả khi phát hành lại.
- **Ý chính:** Cho vị trí đầu mút, tính ngược ra các góc khớp. Chuyển qua lại giữa FK và IK phải giữ nguyên tư thế, nếu không khung giật ở khung hình chuyển.
- **Trên web của dự án:** Kit robotics đã giải IK bằng mã (tay máy, chân sáu chân). Bài mới: IK giải tích hai khâu (định lí cosin) cho tay và chân; nhiều khâu thì CCD. Không cần Blender.
- **Bài ứng viên:** robotics/ur5e (đã có); robotics/hexapod (đã có); vat-li-10/nhen-thuy-luc (đã có).
- **Phép kiểm bằng máy:** Sai số đầu mút nhỏ hơn ngưỡng; mọi góc khớp trong giới hạn; chuyển FK và IK tại cùng một tư thế thì lệch dưới 1 mm.
- **Ưu tiên:** vừa. **Trạng thái:** dự án đã có cách tương đương.

### 2. Dẫn động và cơ cấu liên kết (Drivers & Linkages)

- **Công cụ:** [EasyDriver](https://github.com/NeoEmberArt/EasyDriver). Ghi hai tư thế đầu và cuối, tự nhận trục đổi nhiều nhất rồi tạo driver nối một phép biến đổi với tư thế, giá trị, shape key.
- **Giấy phép:** MIT. Tệp LICENSE.
- **Ý chính:** Một tham số điều khiển nhiều bộ phận qua một hàm ánh xạ (từ khoảng nguồn sang khoảng đích). Cả cỗ máy chỉ còn một bậc tự do để người học kéo.
- **Trên web của dự án:** Đúng mô hình thanh trượt của kit: ui.slider đổi một tham số, hàm draw() suy ra mọi tư thế. Cơ cấu tay quay con trượt, bốn khâu bản lề giải bằng hình học, không nội suy khung hình.
- **Bài ứng viên:** cong-nghe/dong-co-4-ki (đã có: góc trục khuỷu dẫn pit tông, xu páp); vat-li-11/dong-ho-co (đã có); bài mới: cơ cấu bốn khâu, cần gạt nước.
- **Phép kiểm bằng máy:** Chiều dài mỗi thanh không đổi trên cả vòng quay (sai số ràng buộc khép kín); không bộ phận nào xuyên nhau.
- **Ưu tiên:** vừa. **Trạng thái:** dự án đã có cách tương đương.

### 3. Nhịp và khoảng cách (Timing & Spacing)

- **Công cụ:** [AnimationRetimer](https://github.com/evilmushroom/AnimationRetimer). Đặt mốc trên dòng thời gian, kéo mốc để giãn hay nén từng đoạn; chỉ áp cho hoạt hình khoá, không áp cho mô phỏng đã nướng.
- **Giấy phép:** GPL-3.0. Tệp LICENSE.
- **Ý chính:** Tách hình khỏi nhịp: giữ nguyên các tư thế, chỉ đổi ánh xạ thời gian theo từng đoạn giữa các mốc. Ánh xạ là hàm tuyến tính từng khúc, đơn điệu tăng.
- **Trên web của dự án:** Một hàm retime(t, mốc gốc, mốc mới) đặt trước AnimationMixer.setTime hay trước draw(). Dùng để làm chậm đúng đoạn cần giảng (va chạm, đổi pha) mà không sửa tệp GLB.
- **Bài ứng viên:** vat-li-10/may-di-bo (làm chậm pha đổi chân); thu-vien/impulse-step (làm chậm lúc va chạm); mọi bài có beat giảng một khoảnh khắc ngắn.
- **Phép kiểm bằng máy:** Ánh xạ đơn điệu tăng; đầu và cuối đoạn không đổi; không hai mốc trùng nhau.
- **Ưu tiên:** cao. **Trạng thái:** chưa thử.

### 4. Động lực học vải (Cloth Dynamics)

- **Công cụ:** [ClothDrop Reborn](https://github.com/hartface/ClothDrop-Reborn). Vẽ hoặc chọn một tấm phẳng, thả cho rủ lên vật bên dưới, tự dựng mô phỏng và nướng.
- **Giấy phép:** GPL-3.0-or-later. Tệp LICENSE và blender_manifest.toml.
- **Ý chính:** Lưới chất điểm nối bằng lò xo, chịu trọng lực và va chạm. Kết quả rủ là trạng thái cân bằng, có thể nướng thành hình tĩnh.
- **Trên web của dự án:** Hai đường. A: mô phỏng nhỏ ngay trong trang (Verlet hay PBD, vài trăm điểm) khi bài dạy chính định luật Hooke. B: nướng trong Blender rồi xuất hình tĩnh hoặc morph target khi vải chỉ là đạo cụ.
- **Bài ứng viên:** bài mới Vật lí 10: lực đàn hồi, lưới lò xo; đạo cụ: màn, cờ, bạt trong các cảnh.
- **Phép kiểm bằng máy:** Đường A: năng lượng không tăng khi không có lực ngoài, bước thời gian ổn định. Đường B: số đỉnh và cỡ tệp trong ngưỡng của kiem_glb.py.
- **Ưu tiên:** thấp. **Trạng thái:** chưa thử.

### 5. Mô phỏng chất lỏng (Fluid Simulation)

- **Công cụ:** [FLIP Fluids](https://github.com/rlguy/Blender-FLIP-Fluids). Hệ mô phỏng chất lỏng FLIP đầy đủ, phải tự biên dịch nếu không mua.
- **Giấy phép:** GPL-3.0 (add-on), MIT (bộ máy), Standard Royalty Free (một phần nội dung). README và ba tệp giấy phép. Mã nguồn có trên GitHub, bản dựng sẵn được bán ở chợ add-on; có bản demo miễn phí. Bài gốc cũng nhắc xem hướng dẫn dựng và giấy phép trước khi cài.
- **Ý chính:** Hạt mang vận tốc, lưới giải áp suất. Kết quả là một chuỗi lưới theo khung hình, rất nặng.
- **Trên web của dự án:** Không đưa chuỗi lưới chất lỏng lên web (mỗi khung một lưới). Bài về chất lỏng dùng hạt và shader tính ngay trong trang, hoặc công thức giải tích (Bernoulli, Torricelli). Chỉ dùng FLIP khi cần một ảnh hay đoạn phim tĩnh.
- **Bài ứng viên:** thu-vien/river-step, water-cycle-step (đã có, không cần FLIP); bài mới: bình thông nhau, vòi phun Torricelli.
- **Phép kiểm bằng máy:** Bảo toàn thể tích trong mô phỏng hạt; tầm phun khớp công thức.
- **Ưu tiên:** thấp. **Trạng thái:** chưa thử.

### 6. Chu kì bước đi (Walk Cycles)

- **Công cụ:** [AutoWalker](https://github.com/metedmts/AutoWalker). Từ chu kì đi tại chỗ, lấy vị trí xương bàn chân so với xương gốc theo từng khung, suy ra quãng tiến của thân rồi ghi khoá cho thân hoặc một vật đích.
- **Giấy phép:** MIT. Tệp LICENSE và README ghi MIT, nhưng blender_manifest.toml ghi SPDX:GPL-3.0-or-later. Hai chỗ lệch nhau; nếu dùng mã thì hỏi tác giả, còn viết lại từ ý thì không vướng.
- **Ý chính:** Chân chống đứng yên trên đất, nên độ lùi của bàn chân chống so với thân ở mỗi khung chính là độ tiến của thân ở khung đó. Vận tốc thân vì thế không đều trong một chu kì.
- **Trên web của dự án:** Bài may-di-bo đang cho thân tiến đều với V = bước/(1 − tỉ lệ vung) và đo được chân trượt khoảng 9 cm. Áp ý này: tính x_thân(t) từ chân đang chống ở từng khung (trộn mượt lúc đổi chân), chân trượt về gần 0 và có thêm đồ thị v(t) để dạy.
- **Bài ứng viên:** vat-li-10/may-di-bo (cải tiến trực tiếp); robotics/quadruped, hexapod, nhen (cùng phép đo trượt chân).
- **Phép kiểm bằng máy:** Phép đo trượt chân sẵn có (window.MAY.SLIP): trượt lớn nhất giảm rõ so với 9 cm; quãng tiến một chu kì vẫn bằng 9,09 m.
- **Ưu tiên:** cao. **Trạng thái:** chưa thử.

### 7. Khoá hình (morph) (Shape Keys)

- **Công cụ:** [ShKeeper](https://github.com/AgitoReiKen/ShKeeper). Áp mọi modifier mà giữ shape key, nướng hoạt hình shape key thành khoá, bật tắt driver của shape key.
- **Giấy phép:** GPL-3.0. Tệp LICENSE.
- **Ý chính:** Một lưới, nhiều hình đích cùng số đỉnh; hình hiện tại là tổ hợp tuyến tính. Modifier chưa áp thì hình xuất ra khác hình trong Blender, mà áp modifier thường làm mất shape key.
- **Trên web của dự án:** glTF mang shape key dưới dạng morph target, three.js đọc sẵn (morphTargetInfluences). Trước khi xuất phải áp modifier mà giữ shape key, và nướng driver thành khoá vì glTF không mang driver.
- **Bài ứng viên:** co-the-nguoi (tim co bóp, cơ co); te-bao (màng biến dạng, thực bào); thu-vien/plasmolysis-step.
- **Phép kiểm bằng máy:** Thêm vào kiem.json: tên và số morph target mỗi lưới; sau khi nén bằng gltf-transform số này không đổi.
- **Ưu tiên:** vừa. **Trạng thái:** chưa thử.

### 8. Vật rắn (Rigid Bodies)

- **Công cụ:** [Bullet Constraints Builder](https://github.com/KaiKostack/bullet-constraints-builder). Công cụ nghiên cứu (dự án Inachus của EU): nối các cấu kiện bằng ràng buộc có ngưỡng gãy tính từ vật liệu, để mô phỏng công trình sập.
- **Giấy phép:** GPL-2.0. Tệp LICENSE.
- **Ý chính:** Vật rắn nối nhau bằng ràng buộc có ngưỡng chịu lực; vượt ngưỡng thì liên kết gãy. Mô phỏng xong thì nướng thành khoá vị trí và góc quay.
- **Trên web của dự án:** Cảnh ít vật: tính ngay trong trang bằng công thức (va chạm, bảo toàn động lượng). Cảnh nhiều vật: nướng trong Blender thành khoá rồi xuất GLB, trang chỉ phát lại. Công cụ này quá nặng cho bài phổ thông; chỉ đáng xem nếu làm bài về kết cấu chịu động đất.
- **Bài ứng viên:** thu-vien/impulse-step (đã có); bài mới: con lắc Newton, máy bi lăn.
- **Phép kiểm bằng máy:** Động lượng và năng lượng trước và sau va chạm khớp trong sai số; bản nướng không có vật xuyên nhau.
- **Ưu tiên:** thấp. **Trạng thái:** chưa thử.

### 9. Hình học thủ tục (Geometry Nodes)

- **Công cụ:** [Johnny Matthews node assets](https://github.com/johnnygizmo/node_assets). 22 tệp .blend chứa nhóm node để mở ra xem và sửa: mảng 3D, mảng tròn, lưới lục giác, dây xích, dây ba tao, đường dây võng, ván lát, gạch.
- **Giấy phép:** CC0-1.0. Tệp LICENSE.
- **Ý chính:** Hình sinh ra từ quy tắc và tham số, không nặn tay. Đổi tham số là đổi cả hình.
- **Trên web của dự án:** Dự án đã theo lối mô hình là mã, nên hình thủ tục viết thẳng bằng three.js (InstancedMesh, hàm sinh). Kho này dùng như sổ mẫu ý tưởng (xích, dây võng, lát gạch). Nếu vẫn dựng trong Blender thì phải hiện thực hoá instance và áp modifier trước khi xuất.
- **Bài ứng viên:** băng chuyền, dây xích, dây cáp trong các bài robotics và cơ khí; bài mới Toán: lát mặt phẳng, dây võng (catenary).
- **Phép kiểm bằng máy:** Số instance và số tam giác trong ngưỡng hiệu năng của bài.
- **Ưu tiên:** thấp. **Trạng thái:** dự án đã có cách tương đương.

### 10. Gấp và mở mặt (Deformation)

- **Công cụ:** [Origamify](https://github.com/aconz2/blender-addon-origamify). Biến một lưới thành cây cha con, mỗi mặt một vật, trục X cục bộ nằm trên cạnh chung với mặt cha; có lệnh mở phẳng, gấp lại, ghi khoá. Tác giả ghi rõ hình khai triển không bảo đảm không tự đè.
- **Giấy phép:** Unlicense. Tệp UNLICENSE (thuộc công cộng).
- **Ý chính:** Chọn một mặt gốc, dựng cây khung trên đồ thị kề của các mặt. Mỗi mặt là một nút quay quanh cạnh chung với mặt cha. Mở phẳng là đặt góc quay sao cho mặt đồng phẳng với mặt cha; gấp lại là trả về góc nhị diện gốc.
- **Trên web của dự án:** Viết lại được trọn vẹn bằng three.js, không cần Blender: mỗi mặt là một Group có trục quay đặt trên cạnh chung, một thanh trượt chạy từ gấp tới mở. Đây là ý dùng được ngay nhất cho một bài mới.
- **Bài ứng viên:** bài mới Toán: hình khai triển của lập phương, lăng trụ, chóp, khối đa diện đều; diện tích xung quanh; bài mới Sinh: cuộn gấp phiến beta (minh hoạ).
- **Phép kiểm bằng máy:** Mở phẳng: mọi mặt đồng phẳng và không mặt nào đè lên mặt khác. Gấp lại: mọi đỉnh trùng vị trí gốc trong sai số. Tổng diện tích không đổi.
- **Ưu tiên:** cao. **Trạng thái:** chưa thử.

### 11. Ràng buộc và khung xuất (Constraints)

- **Công cụ:** [Auto Copy Transforms DEF](https://github.com/PieroFra/auto-copy-transforms-def). Tự tạo ràng buộc Copy Transforms từ xương nguồn (MCH_) sang xương đích (DEF_, ORG_) theo quy tắc tên; có xem trước, có sổ JSON ghi các ràng buộc đã sinh, dọn không đụng ràng buộc làm tay; có kiểm thử CI.
- **Giấy phép:** GPL-3.0-or-later. Tệp LICENSE và manifest.
- **Ý chính:** Tách hai khung: khung điều khiển (phức tạp, chỉ sống trong Blender) và khung biến dạng DEF (phẳng, sạch). Xương DEF chép chuyển động từ xương điều khiển; chỉ khung DEF được nướng và xuất.
- **Trên web của dự án:** Áp cho mọi mô hình có xương sắp đưa lên web: chỉ xuất xương DEF, nướng ràng buộc thành khoá. Tệp nhẹ hơn và không phụ thuộc ràng buộc mà glTF không mang. Lối ghi sổ JSON và không đụng phần làm tay trùng với cách làm SOT của dự án.
- **Bài ứng viên:** mọi bài có GLB mang xương (hiện có may-di-bo: 104 xương); bài về bánh răng, truyền động: ràng buộc viết bằng mã (tỉ số truyền).
- **Phép kiểm bằng máy:** Thêm vào kiem.json: danh sách xương được phép (tiền tố DEF hoặc tên bài cần); không còn xương điều khiển trong tệp xuất.
- **Ưu tiên:** vừa. **Trạng thái:** chưa thử.

### 12. Chuyển động lặp (Looping Motion)

- **Công cụ:** [Smooth Animation Loops](https://github.com/RootKiller/blender-smooth-anim-loops-addon). Trong trình sửa đường cong: kéo khoá cuối về bằng khoá đầu, các khoá lân cận dịch theo trọng số giảm dần.
- **Giấy phép:** không ghi. Không có tệp giấy phép, không dòng nào về giấy phép: không chép mã.
- **Ý chính:** Vòng lặp mượt cần hai điều ở mối nối: giá trị cuối bằng giá trị đầu, và độ dốc cuối bằng độ dốc đầu. Cách sửa: lấy độ lệch đầu cuối rồi phân bổ ngược về trước với trọng số giảm dần.
- **Trên web của dự án:** Viết thành một phép kiểm cho mọi chuyển động lặp (đi, quay, đập, dao động): đo độ lệch vị trí và vận tốc ở mối nối. Lệch thì sửa bằng cách phân bổ độ lệch trên một cửa sổ cuối chu kì, làm ngay lúc nạp hoặc trong bước dựng.
- **Bài ứng viên:** vat-li-10/may-di-bo (chu kì đi 132 khung); vat-li-11/dong-ho-co, cong-nghe/dong-co-4-ki (chu kì viết bằng hàm tuần hoàn: mối nối đúng sẵn); các bài cá bơi, sứa.
- **Phép kiểm bằng máy:** Tại mối nối: lệch vị trí dưới ngưỡng (ví dụ 1 mm hoặc 0,1°), lệch vận tốc dưới ngưỡng.
- **Ưu tiên:** cao. **Trạng thái:** chưa thử.
<!--SO:the:end-->

## 9. Giới hạn của lần đọc này

- Video trong bài chỉ được xem qua ảnh đại diện (áp phích 12 ô), chưa xem từng khung.
- Chưa cài, chưa chạy add-on nào. Cột Blender là điều kho tự khai, không phải kết quả thử.
- Kho FLIP Fluids chỉ đọc README và ba tệp giấy phép.
- Số sao, số người dùng của các kho không được ghi vì không đọc được qua API trong phiên này.
