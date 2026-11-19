# AnyMachine áp dụng vào Sáng Ăn Khoai

Nguồn: [apekshik/anymachine](https://github.com/apekshik/anymachine). Tác giả Apekshik Panigrahi, giấy phép MIT, đọc ngày 19/11/2026. Giấy phép gốc được giữ ở `tools/robotics/LICENSE-anymachine` và `vat-li-10/may-di-bo/may/LICENSE-anymachine.txt`.

## AnyMachine là gì

AnyMachine là một chuỗi thí nghiệm: tác tử (Claude Fable 5.2 trong Claude Code) dựng máy biết cử động trong Blender, hoàn toàn bằng mã Python. Cách làm là đi từ tranh tham chiếu tới mô hình. Kho có sáu lần chạy:

| Lần chạy | Nội dung |
|---|---|
| Stilt | Máy đi bộ cao 30 m: 160 bộ phận, 104 xương, 14 xi lanh thuỷ lực, ba chuyển động. `stilt.glb` có trong kho. |
| Laptop | Một bản lề |
| Quadruped | Bốn chân |
| Spider | Tám chân |
| Backpacks | Ba lô |
| Hardsurface | Trực thăng, xuồng cứu sinh, thiết bị giàn khoan |

Chỉ Stilt có tệp GLB trong kho. Các lần chạy khác chỉ có GIF, ảnh tĩnh và báo cáo kiểm.

### Quy trình (PIPELINE.md, phần 1)

Đi theo mười bước:

1. tranh ý tưởng;
2. bản xoay quanh;
3. từng hình chiếu;
4. ảnh cận từng cơ cấu;
5. bảng bộ phận, viết trước khi dựng;
6. kịch bản dựng;
7. ảnh đối chiếu với tham chiếu;
8. tham chiếu chuyển động;
9. hoạt hình kèm kiểm va chạm;
10. xuất rồi nạp lại để kiểm.

Ba ý chính:
- **Tham chiếu trước, hình học sau.** Không dựng gì chỉ từ một bức toàn thân.
- **Mô hình là mã.** Sửa thiết kế là sửa kịch bản, rồi dựng lại cả máy.
- **Mọi kết quả được máy kiểm trước khi người xem.** Các phép kiểm gồm:
  - quét mọi tham số tìm tam giác xuyên nhau;
  - đo chân trượt trên đất;
  - kiểm cần pít tông không tuột khỏi ống qua mọi chuyển động;
  - nạp lại GLB rồi đếm xương, lưới, chuyển động.

## Đã tích hợp

1. **Bài mới "Máy đi bộ 30 m"** (`vat-li-10/may-di-bo/`, nguồn ở `tools/robotics/may-di-bo/main.js`). Bài dùng bộ kit và bố cục trang dọc.
   - **Mô hình:** `stilt.glb` của AnyMachine. Tệp được nén bằng gltf-transform (meshopt cho hình học, WebP 2048 cho hình), từ 35,8 MB xuống 6,6 MB, vẫn giữ tên 160 bộ phận.
   - **Số đo:** mọi số hình học đọc từ khung xương lúc bài chạy.
   - **Nội dung theo Vật lí 10:**
     - dáng đi bốn nhịp;
     - tốc độ v = s/t: 9,09 m trong 5,5 s, tức 1,65 m/s;
     - tính tương đối: bản hoạt hình đi tại chỗ, đổi qua lại giữa hệ thân và hệ đất;
     - trọng tâm và mặt chân đế; vì sao thân lắc;
     - lúc chỉ còn hai chân thì đi là "ngã có kiểm soát";
     - mô men ở khớp gối M = F·d, lực xi lanh F = p·A.
   - **Giả định của bài**, ghi rõ trong bảng và thẻ soi: khối lượng 120 tấn, áp suất dầu 25 MPa, cách chia khối lượng để tính trọng tâm.
2. **Phép kiểm của AnyMachine chạy lại trong trình duyệt** (bảng 06 của bài):
   - Chiều dài bốn xi lanh mỗi khung hình phải nằm trong cửa sổ [max(Lc, Lr); Lc + Lr].
   - Đo trượt chân trong hệ đất. Kết quả đo được là khoảng 9 cm mỗi pha chống, cỡ 1,5 % quãng 6,0 m chân lùi so với thân. Bài ghi đúng con số này, không làm tròn thành 0.
3. **`tools/kiem_glb.py`**, tức bước 10 "export and verify", chạy trong CI.
   - Công cụ đọc phần JSON của mọi tệp `.glb` có bản ghi `<tên>.kiem.json` đặt cạnh, rồi so: số nút, lưới, da, xương; tên bộ phận và tên xương bài cần; tên và độ dài chuyển động; phần mở rộng bắt buộc; cỡ tệp tối đa.
   - Nén lại sai tham số (chẳng hạn gộp mất bộ phận) thì CI báo đỏ.
4. **Tham số 0–1 có `seek`:** thanh "Thời điểm" dừng hình và đặt chuyển động ở một thời điểm bất kì. Đây là cách AnyMachine điều khiển mô hình trong mọi engine.

## Chưa tích hợp, và vì sao

- **Phần dựng bằng Blender và tạo tranh tham chiếu bằng mô hình ảnh trên fal** (cần `FAL_KEY`, có tính phí). Phần này nằm ngoài stack của site: site dựng cảnh bằng three.js theo thủ tục, chạy trực tiếp. Khi cần một máy phức tạp mới, có thể theo đúng quy trình này ở phía dựng mô hình, rồi đưa GLB vào bài như Stilt.
- **Quadruped, Spider, Laptop, Backpacks:** GLB không có trong kho.
- **Hardsurface** (trực thăng, xuồng cứu sinh): đồ vật tĩnh cho game, chưa gắn với bài học nào.

## Thêm một máy tiếp theo (danh mục)

1. Có GLB (MIT, CC0 hoặc tự dựng). Ghi nguồn và giấy phép.
2. Nén cho web, giữ tên bộ phận:
   ```
   npx gltf-transform optimize in.glb out.glb --compress meshopt --texture-compress webp --texture-size 2048 --simplify false --join false --instance false --flatten false --palette false
   ```
3. Đặt tệp ở `<lớp>/<bài>/<thư mục tệp kèm>/`. Khai `assets` trong `meta.json`, chạy `python3 tools/kiem_glb.py --ghi <tệp>.glb`, rồi rút `need_bones` và `need_meshes` về đúng những gì bài dùng.
4. Đọc số đo từ khung xương lúc chạy, không gõ tay. Thông số của tác giả (dáng đi, hành trình xi lanh) chép kèm nguồn. Mọi giả định ghi trong bảng.
5. Đưa phép kiểm của tác giả vào bài khi có ý nghĩa vật lí, và báo đúng con số đo được.
