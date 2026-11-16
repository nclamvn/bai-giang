// Kiểm bộ máy học phần Thiết kế và hiệu năng mạng (tools/robotics/kit/mang/):
//  1) mô phỏng sự kiện rời rạc khớp lý thuyết hàng đợi (M/M/1, M/D/1, M/M/1/K);
//  2) các bài tập có đáp số của giáo trình ra đúng số. Chạy: node tests/mang_check.mjs
import * as F from '../tools/robotics/kit/mang/cong-thuc.js';
import {chayHangDoi, lap, chayNhieuLop} from '../tools/robotics/kit/mang/mo-phong.js';

let loi = 0, dem = 0;
const kiem = (ten, ok, chiTiet = '') => { dem++; if (!ok) loi++; console.log(`${ok ? 'ĐẠT' : 'LỖI'}  ${ten}${chiTiet ? '  · ' + chiTiet : ''}`); };
const gan = (a, b, tuongDoi) => Math.abs(a - b) <= tuongDoi * Math.abs(b);
const f = (x, d = 4) => (+x).toPrecision(d);

// 1) mô phỏng so với lý thuyết. C = 100 Mbit/s, gói trung bình 1000 byte → μ = 12 500 gói/s
const C = 100e6, L = 8000;
for (const [rho, tol] of [[0.5, 0.04], [0.8, 0.05], [0.9, 0.08]]) {
  const m = lap(5, (s) => chayHangDoi({C, Lbit: L, rho, n: 120000, seed: s}).W), tb = m.reduce((a, b) => a + b) / m.length, lt = F.mm1(rho * C / L, C / L).W;
  kiem(`M/M/1 ρ = ${rho}: trễ trong hệ`, gan(tb, lt, tol), `mô phỏng ${f(tb * 1e3)} ms, lý thuyết ${f(lt * 1e3)} ms`);
}
{ const rho = 0.8, s = chayHangDoi({C, Lbit: L, rho, n: 150000, coGoi: 'co-dinh', seed: 3}), lt = F.md1(rho * C / L, C / L);
  kiem('M/D/1 ρ = 0,8: chờ trong hàng', gan(s.Wq, lt.Wq, 0.05), `mô phỏng ${f(s.Wq * 1e3)} ms, lý thuyết ${f(lt.Wq * 1e3)} ms`); }
{ const rho = 0.9, K = 10, s = chayHangDoi({C, Lbit: L, rho, buffer: K, n: 300000, seed: 9}), lt = F.mm1kMat(rho, K);
  kiem('M/M/1/K ρ = 0,9, K = 10: tỉ lệ mất gói', gan(s.mat, lt, 0.08), `mô phỏng ${f(s.mat)}, lý thuyết ${f(lt)}`); }
{ const s = chayHangDoi({C, Lbit: L, rho: 0.7, n: 100000, seed: 4});
  kiem('mức sử dụng đo trong mô phỏng ≈ ρ đặt', gan(s.muc, 0.7, 0.02), `${f(s.muc, 3)}`); }
{ const r = chayNhieuLop({C: 10e6, lop: [{ten: 'thoại', lam: 300, Lbit: 1600}, {ten: 'nền', lam: 1100, Lbit: 8000}], lap: 'uutien', T: 30, seed: 2});
  kiem('ưu tiên tuyệt đối: thoại chờ ít hơn nền', r[0].W < r[1].W, `thoại ${f(r[0].W * 1e3, 3)} ms, nền ${f(r[1].W * 1e3, 3)} ms`); }
{ const a = chayHangDoi({C, Lbit: L, rho: 0.6, seed: 21}), b = chayHangDoi({C, Lbit: L, rho: 0.6, seed: 21});
  kiem('tất định: cùng hạt giống cho cùng kết quả', a.W === b.W); }

// 2) bài tập của giáo trình
kiem('BT 1.4: 80 + 300 + 420 Mbit/s trên 1 Gbit/s → ρ = 0,8, dư địa với η = 0,8 bằng 0', gan(F.mucSuDung(800e6, 1e9), 0.8, 1e-12) && Math.abs(F.duDia(800e6, 1e9, 0.8)) < 1, `${F.mucSuDung(800e6, 1e9)}`);
kiem('Ví dụ tr.43: 2 000 × 0,35 × 1,5 Mbit/s = 1 050 Mbit/s', gan(F.taiDichVu([{N: 2000, kappa: 0.35, b: 1.5e6}]), 1.05e9, 1e-12));
kiem('BT 2.5: 1 500 × 0,4 × 2 Mbit/s = 1 200 Mbit/s', gan(F.taiDichVu([{N: 1500, kappa: 0.4, b: 2e6}]), 1.2e9, 1e-12));
kiem('BT 2.8: MTBF 2 000 h, MTTR 2 h → A ≈ 0,999', gan(F.sanSang(2000, 2), 0.999000999, 1e-9), `${f(F.sanSang(2000, 2), 7)}`);
kiem('BT 3.3: 80 thiết bị → /25, 126 địa chỉ dùng được', F.tienToIPv4(80).p === 25 && F.tienToIPv4(80).host === 126);
kiem('BT 4.3: 48 × 1 Gb/s, 4 × 10 Gb/s → Ω = 1,2', gan(F.oversub(Array(48).fill(1e9), Array(4).fill(10e9)), 1.2, 1e-12));
{ const p = F.poe(Array(24).fill(25), 740, 0.8); kiem('BT 4.5: 24 × 25 W = 600 W > 0,8 × 740 = 592 W → không đạt', p.tong === 600 && Math.abs(p.gioiHan - 592) < 1e-9 && !p.dat); }
kiem('BT 5.2: 1 500 byte trên 100 Mb/s → 0,12 ms', gan(F.dTruyen(F.byte(1500), 100e6), 1.2e-4, 1e-12));
kiem('Bảng t: t(0,975; 9) = 2,262', F.tStudent975(9) === 2.262);
kiem('Xác suất lỗi gói 1.16: Pb = 1e-6, L = 12 000 bit → ≈ 1,19 %', gan(F.pLoiGoi(1e-6, 12000), 0.011928, 1e-3), `${f(F.pLoiGoi(1e-6, 12000))}`);
kiem('Song song 4.14: hai phần tử 0,99 → 0,9999', gan(F.sanSangSongSong([0.99, 0.99]), 0.9999, 1e-12));
console.log(`\n${dem - loi}/${dem} đạt`);
process.exit(loi ? 1 : 0);
