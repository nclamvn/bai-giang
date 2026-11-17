// Kiểm bộ máy học phần Thiết kế và hiệu năng mạng (tools/robotics/kit/mang/):
//  1) mô phỏng sự kiện rời rạc khớp lý thuyết hàng đợi (M/M/1, M/D/1, M/M/1/K);
//  2) các bài tập có đáp số của giáo trình ra đúng số. Chạy: node tests/mang_check.mjs
import * as F from '../tools/robotics/kit/mang/cong-thuc.js';
import {chayHangDoi, lap, chayNhieuLop, chayMMc, chayKhaDung, chayDCF} from '../tools/robotics/kit/mang/mo-phong.js';

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
{ const C = 100e6, L = 8000, mu = C / L;
  for (const [rho, K] of [[0.8, 8], [1.3, 20]]) {
    const s = chayHangDoi({C, Lbit: L, rho, buffer: K, n: 300000, seed: 13}), lt = F.mm1k(rho * mu, mu, K);
    kiem(`M/M/1/K ρ = ${String(rho).replace('.', ',')}, K = ${K}: thời gian trong hệ và mất gói`, gan(s.W, lt.W, 0.03) && gan(s.mat, lt.P, 0.06), `W mô phỏng ${f(s.W * 1e3)} ms, lý thuyết ${f(lt.W * 1e3)} ms; mất ${f(s.mat)} / ${f(lt.P)}`);
  } }
{ const s = chayHangDoi({C, Lbit: L, rho: 0.7, n: 100000, seed: 4});
  kiem('mức sử dụng đo trong mô phỏng ≈ ρ đặt', gan(s.muc, 0.7, 0.02), `${f(s.muc, 3)}`); }
{ const r = chayNhieuLop({C: 10e6, lop: [{ten: 'thoại', lam: 300, Lbit: 1600}, {ten: 'nền', lam: 1100, Lbit: 8000}], lap: 'uutien', T: 30, seed: 2});
  kiem('ưu tiên tuyệt đối: thoại chờ ít hơn nền', r[0].W < r[1].W, `thoại ${f(r[0].W * 1e3, 3)} ms, nền ${f(r[1].W * 1e3, 3)} ms`); }
{ const a = chayHangDoi({C, Lbit: L, rho: 0.6, seed: 21}), b = chayHangDoi({C, Lbit: L, rho: 0.6, seed: 21});
  kiem('tất định: cùng hạt giống cho cùng kết quả', a.W === b.W); }

for (const [c, rho] of [[2, 0.6], [4, 0.8]]) { const tS = 5e-3, lam = rho * c / tS, m = lap(4, (sd) => chayMMc({lam, tS, c, n: 120000, seed: sd}).W), tb = m.reduce((a, b) => a + b) / m.length, lt = F.mmc(lam, 1 / tS, c).W;
  kiem(`M/M/c c = ${c}, ρ = ${rho}: trễ trong hệ khớp Erlang C`, gan(tb, lt, 0.04), `mô phỏng ${f(tb * 1e3)} ms, Erlang C ${f(lt * 1e3)} ms`); }
kiem('Erlang C với c = 1 trùng M/M/1', gan(F.mmc(120, 200, 1).W, F.mm1(120, 200).W, 1e-12));

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
// Monte Carlo độ sẵn sàng khớp 1.19 (nối tiếp) và 4.14 (song song): so phần KHÔNG sẵn sàng, sai lệch tương đối dưới 10 %
{ const tp = {rt: {mtbf: 20000, mttr: 4}, a: {mtbf: 2000, mttr: 20}, b: {mtbf: 2000, mttr: 20}, ong: {mtbf: 8766, mttr: 12}};
  const Aa = F.sanSang(2000, 20), Art = F.sanSang(20000, 4), Aong = F.sanSang(8766, 12);
  const s1 = chayKhaDung({tp, chung: ['rt', 'ong'], duong: [['a'], ['b']], nam: 3000, seed: 3}), l1 = Art * Aong * F.sanSangSongSong([Aa, Aa]);
  kiem('Monte Carlo: hai đường chung một ống, nối tiếp router', gan(1 - s1.A, 1 - l1, 0.1), `ngừng mô phỏng ${f(s1.phutNam)} phút/năm, lý thuyết ${f((1 - l1) * 525960)}`);
  const s2 = chayKhaDung({tp: {...tp, ong2: tp.ong}, chung: ['rt'], duong: [['a', 'ong'], ['b', 'ong2']], nam: 10000, seed: 4}), Ap = Aa * Aong, l2 = Art * F.sanSangSongSong([Ap, Ap]);
  kiem('Monte Carlo: hai đường tách ống (4.14)', gan(1 - s2.A, 1 - l2, 0.1), `ngừng mô phỏng ${f(s2.phutNam)} phút/năm, lý thuyết ${f((1 - l2) * 525960)}`); }
kiem('BT 2.8: MTBF 2 000 h, MTTR 2 h → A ≈ 0,999', Math.abs(F.sanSang(2000, 2) - 0.999) < 0.0005, f(F.sanSang(2000, 2), 5));

kiem('4.4: −1 dBm, 8 km × 0,5 dB/km, 4 đầu nối × 0,75, 4 mối hàn × 0,3, M = 3 dB → −12,2 dBm', Math.abs(F.congSuatThu({Ptx: -1, alpha: 0.5, L: 8, nc: 4, Lc: 0.75, ns: 4, Ls: 0.3, M: 3}) + 12.2) < 1e-9);
kiem('Câu 3 chương 4: 48 × 1 Gb/s trên 4 × 10 Gb/s → Ω = 1,2', Math.abs(F.oversub([48e9], [40e9]) - 1.2) < 1e-9);

// DCF một trạm: không va chạm, thông lượng = dữ liệu / (DIFS + CWmin/2 slot + T_data + SIFS + T_ack), so công thức kín
{ const C = 600e6, r1 = chayDCF({N: 1, Cphy: C, nTx: 40000, seed: 2}), SIFS = 16e-6, DIFS = 34e-6, slot = 9e-6;
  const lt = (1500 * 8) / (DIFS + 7.5 * slot + r1.tData + SIFS + r1.tAck);
  kiem('802.11 DCF một trạm khớp công thức kín, không va chạm', gan(r1.thongLuong, lt, 0.01) && r1.pVaCham === 0, `${f(r1.thongLuong / 1e6)} so với ${f(lt / 1e6)} Mbit/s`);
  const r20 = chayDCF({N: 20, Cphy: C, nTx: 40000, seed: 2});
  kiem('802.11 DCF 20 trạm: có va chạm, thông lượng thấp hơn một trạm', r20.pVaCham > 0.1 && r20.thongLuong < r1.thongLuong, `va chạm ${f(r20.pVaCham * 100, 3)} %`); }

// Giáo án tiết 2 (tools/giao-an-mang/tk-goi-tin.json): số của ví dụ giải mẫu tính lại bằng cùng công thức
{ const ch = [[1e9, 60, 0.1, 5e-6], [10e9, 2e3, 0.3, 20e-6], [100e6, 300e3, 0.6, 20e-6]]; let tong = 0;
  for (const [C, d, r, pr] of ch) { const mu = C / 8000; tong += F.dTruyen(12000, C) + F.dLanTruyen(d) + F.mm1(r * mu, mu).Wq + pr; }
  kiem('Tiết 2, ví dụ 2: độ trễ một chiều ba chặng ≈ 1,81 ms', Math.abs(tong - 1.8097e-3) < 1e-6, `${f(tong * 1e3)} ms`);
  const mu = 12500; kiem('Tiết 2, ví dụ 4: W_q 80 µs ở ρ 0,5 và 720 µs ở ρ 0,9', Math.abs(F.mm1(0.5 * mu, mu).Wq - 80e-6) < 1e-9 && Math.abs(F.mm1(0.9 * mu, mu).Wq - 720e-6) < 1e-9);
  kiem('Tiết 2, bài 6: 4 + 150 + 20 + 10 = 184 ms', F.tDapUng({mang: 4e-3, mayChu: 0.15, csdl: 0.02, mayKhach: 0.01}) === 0.184); }

// Tiết 1 (kit/mang/dich-vu.js, giáo án tk-dich-vu.json): số của ví dụ giải mẫu và đáp án
{ const {danhGia, mucTieu, PHUONG_AN} = await import('../tools/robotics/kit/mang/dich-vu.js');
  const tk = danhGia(PHUONG_AN[0].x), cb = danhGia(PHUONG_AN[1].x), mb = danhGia(PHUONG_AN[2].x);
  kiem('Tiết 1, ví dụ 1: ρ = 1,4, mất ≈ 28,9 %, goodput lớp học ≈ 213 Mbit/s', Math.abs(tk.rho - 1.4) < 1e-9 && Math.abs(tk.kq.lh.v.P - 0.289) < 0.001 && Math.abs(tk.kq.lh.v.G - 213) < 1, `${f(tk.kq.lh.v.P * 100, 3)} %, ${f(tk.kq.lh.v.G, 3)} Mbit/s`);
  const ut = danhGia({C: 500, qos: true, kep: false, dem: false});
  kiem('Tiết 1, ví dụ 2: ưu tiên → lớp học đủ 300, sao lưu còn 200 Mbit/s', ut.kq.lh.ok.G && ut.kq.lh.ok.P && Math.abs(ut.kq.sl.v.G - 200) < 1e-6 && !ut.kq.sl.dat);
  kiem('Tiết 1, ví dụ 3: một đường 0,99895 không đạt, hai đường 0,99995 đạt', Math.abs(tk.A - 0.99895) < 1e-5 && !tk.kq.lh.ok.A && Math.abs(cb.A - 0.99995) < 2e-6 && cb.kq.lh.ok.A, `${f(tk.A, 6)}, ${f(cb.A, 6)}`);
  const J = [tk, cb, mb].map((e) => mucTieu(e).J), J3 = [tk, cb, mb].map((e) => mucTieu(e, [1, 1, 3, 1]).J);
  kiem('Tiết 1, ví dụ 4: J ≈ 27,7; −1,79; −0,34 và với α3 = 3 ≈ 29,7; 2,51; 6,86', [27.7, -1.79, -0.34].every((v, i) => Math.abs(J[i] - v) < 0.01) && [29.7, 2.51, 6.86].every((v, i) => Math.abs(J3[i] - v) < 0.01), J.map((x) => f(x, 3)).join(' · '));
  kiem('Tiết 1: Cân bằng và Mua băng thông đạt cả bốn dịch vụ, Tiết kiệm thì không', cb.datHet && mb.datHet && !tk.datHet);
  const a1 = F.sanSang(1000, 4), a2 = F.sanSangSongSong([a1, a1]);
  kiem('Tiết 1, bài 5: 0,99602 (≈ 2 095 phút/năm) và 0,999984 (≈ 8 phút/năm)', Math.abs(a1 - 0.99602) < 1e-5 && Math.abs(F.phutNgungNam(a1) - 2095) < 2 && Math.abs(a2 - 0.999984) < 1e-6 && Math.abs(F.phutNgungNam(a2) - 8.35) < 0.2, `${f(F.phutNgungNam(a1))}, ${f(F.phutNgungNam(a2), 3)} phút`);
  const r4 = 790 / 500; kiem('Tiết 1, bài 4: ρ = 1,58, mất ≈ 36,7 %, goodput ≈ 247 Mbit/s', Math.abs(1 - 1 / r4 - 0.367) < 0.001 && Math.abs(390 / r4 - 247) < 0.5); }

// Tiết 3 (giáo án tk-hang-doi.json): số của ví dụ giải mẫu và đáp án
{ const J = (d) => d.slice(1).reduce((s, x, i) => s + Math.abs(x - d[i]), 0) / (d.length - 1);
  kiem('Tiết 3, ví dụ 1 và bài 2: P_loss 3·10⁻³ và 7·10⁻⁴', Math.abs(F.tiLeMat(20000, 19940) - 3e-3) < 1e-12 && Math.abs(F.tiLeMat(50000, 49965) - 7e-4) < 1e-12);
  kiem('Tiết 3, ví dụ 2 và bài 3: J = 4,8; 1,6; 5,5 ms', Math.abs(J([20, 23, 21, 30, 22, 24]) - 4.8) < 1e-9 && Math.abs(J([20, 23, 21, 22, 22, 24]) - 1.6) < 1e-9 && Math.abs(J([15, 18, 16, 25, 17]) - 5.5) < 1e-9 && Math.abs(J([10, 14, 11, 15]) - 11 / 3) < 1e-9);
  kiem('Tiết 3, ví dụ 3 và bài 4: lỗi gói 1,19 %; 0,051 %; 11,3 %; 1,199·10⁻³', Math.abs(F.pLoiGoi(1e-6, 12000) - 0.0119) < 1e-4 && Math.abs(F.pLoiGoi(1e-6, 512) - 5.12e-4) < 2e-6 && Math.abs(F.pLoiGoi(1e-5, 12000) - 0.113) < 5e-4 && Math.abs(F.pLoiGoi(1e-7, 12000) - 1.199e-3) < 1e-6);
  kiem('Tiết 3, ví dụ 4 và bài 5: G ≈ 89,4; 34,9; 53,7 Mbit/s', Math.abs(950 * 0.96 * 0.98 / 10 - 89.4) < 0.05 && Math.abs(950 * 0.375 * 0.98 / 10 - 34.9) < 0.05 && Math.abs(60 * 472 / 512 * 0.97 - 53.7) < 0.05);
  const mu = 12500, q = (r, K) => F.mm1k(r * mu, mu, K);
  kiem('Tiết 3, ví dụ 5: M/M/1/K ở ρ 0,85 và 1,3, K 16 và 64', Math.abs(q(0.85, 16).P - 0.0119) < 1e-4 && Math.abs(q(0.85, 16).W - 0.43e-3) < 0.01e-3 && Math.abs(q(0.85, 64).P - 4.6e-6) < 0.1e-6 && Math.abs(q(0.85, 64).W - 0.53e-3) < 0.01e-3
    && Math.abs(q(1.3, 16).P - 0.233) < 1e-3 && Math.abs(q(1.3, 16).W - 1.03e-3) < 0.01e-3 && Math.abs(q(1.3, 64).P - 0.231) < 1e-3 && Math.abs(q(1.3, 64).W - 4.85e-3) < 0.01e-3); }

// Tiết 4 (giáo án tk-san-sang.json): số của ví dụ giải mẫu và đáp án
{ const A = F.sanSang, PN = F.phutNgungNam, R = (mtbf, t) => F.doTinCay(1 / mtbf, t);
  kiem('Tiết 4, ví dụ 1: A = 0,999, ngừng ≈ 8,76 h/năm', Math.abs(A(2000, 2) - 0.999) < 1e-5 && Math.abs((1 - A(2000, 2)) * 8766 - 8.76) < 0.01);
  kiem('Tiết 4, ví dụ 2 và bài 3: R = 0,694; 0,0125; 0,930; 0,416', Math.abs(R(2000, 730) - 0.694) < 1e-3 && Math.abs(R(2000, 8766) - 0.0125) < 1e-4 && Math.abs(R(1e4, 730) - 0.930) < 1e-3 && Math.abs(R(1e4, 8766) - 0.416) < 1e-3);
  const Ar = A(1e5, 4), Al = A(2000, 2), Ao = A(8766, 12), ch = Ar * Ao * F.sanSangSongSong([Al, Al]), ta = Ar * F.sanSangSongSong([Al * Ao, Al * Ao]);
  kiem('Tiết 4, ví dụ 3: chung ống 0,99859 (≈ 741 phút), tách ngả 0,99995 (≈ 24 phút), một đường ≈ 1 264 phút', Math.abs(ch - 0.99859) < 1e-5 && Math.abs(PN(ch) - 741) < 1 && Math.abs(ta - 0.99995) < 1e-5 && Math.abs(PN(ta) - 24) < 0.5 && Math.abs(PN(Ar * Al * Ao) - 1264) < 1);
  kiem('Tiết 4, ví dụ 4 và bài 5: 12,75 h; 11,15 s; 51 s; 341 s; 301 s; 131 s', Math.abs(0.15 + 1800 + 12 * 3600 + 900 - 12.75 * 3600) < 1 && Math.abs(0.15 + 1 + 10 - 11.15) < 1e-9 && 40 + 1 + 10 === 51 && 40 + 180 + 1 + 120 === 341 && Math.abs(0.15 + 180 + 1 + 120 - 301.15) < 1e-9 && Math.abs(0.15 + 10 + 1 + 120 - 131.15) < 1e-9);
  kiem('Tiết 4, bài 2 và bài 4: 84 → 21 phút; 0,999999 → 0,9995', Math.abs(PN(A(50000, 8)) - 84) < 0.5 && Math.abs(PN(A(50000, 2)) - 21) < 0.5 && Math.abs(F.sanSangSongSong([0.99, 0.99, 0.99]) - 0.999999) < 1e-12 && Math.abs(0.9995 * F.sanSangSongSong([0.99, 0.99, 0.99]) - 0.9995) < 1e-6); }

// Tiết 5 (giáo án tk-van-hanh.json): số của ví dụ giải mẫu
{ const c = 3e8;
  kiem('Tiết 5, ví dụ 1: trung bình 5 phút ≈ 0,49 < 0,8; thu thập 2,7 kbit/s và 800 kbit/s', Math.abs((24 * 0.97 + 276 * 0.45) / 300 - 0.49) < 0.005 && Math.abs(50 * 2000 * 8 / 300 - 2667) < 1 && 50 * 2000 * 8 / 1 === 800000);
  kiem('Tiết 5, ví dụ 3: MEC 60, 44, 69 ms', 5 + 20 + 15 + 20 === 60 && 5 + 2 + 35 + 2 === 44 && 5 + 2 + 60 + 2 === 69);
  kiem('Tiết 5, ví dụ 4: 10 µs; 3,3 ms; 119 ms', Math.abs(3e3 / c - 10e-6) < 1e-12 && Math.abs(1e6 / c - 3.33e-3) < 1e-5 && Math.abs(35786e3 / c - 0.119) < 0.0005 && Math.abs(6e5 / c - 2e-3) < 1e-9);
  kiem('Tiết 5, ví dụ 5: 5 và 4 Mbit/J; 17,5 và 26,3 MWh/năm', 1e10 / 2000 === 5e6 && 1.2e10 / 3000 === 4e6 && Math.abs(2 * 8766 / 1000 - 17.5) < 0.05 && Math.abs(3 * 8766 / 1000 - 26.3) < 0.05); }

console.log(`\n${dem - loi}/${dem} đạt`);
process.exit(loi ? 1 : 0);
