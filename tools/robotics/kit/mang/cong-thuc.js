// Học phần Thiết kế và hiệu năng mạng: MỘT nguồn công thức cho mọi bài.
// Mỗi hàm ghi số hiệu phương trình trong giáo trình (eq) để đối chiếu; công thức sách viết lặp nhiều lần với ký hiệu khác
// nhau (ví dụ độ sẵn sàng ở 1.19, 2.18, 4.13) chỉ có một hàm ở đây. Đơn vị SI: bit, giây, mét, oát; hàm đổi đơn vị ở cuối tệp.
// Bộ ký hiệu thống nhất (KH) dùng chung cho chữ trên màn hình; cột "sách" ghi các ký hiệu sách đã dùng cho cùng đại lượng.

export const KH = {
  pmax: {kh: 'P_max', ten: 'tỉ lệ mất gói tối đa', sach: 'P_s^max (1.6, 6.6), L_s^max (2.1, 2.5), p_s^max (5.22)'},
  rho: {kh: 'ρ', ten: 'mức sử dụng liên kết', sach: 'ρ_e (1.7, 4.10), ρ_l (5.17); sách còn dùng ρ cho hệ số tăng trưởng (2.9) và điểm rủi ro (6.17)'},
  eta: {kh: 'η', ten: 'hệ số khai thác mục tiêu', sach: 'η (1.9), ρ_max (3.10, 4.17), u_max (2.9)'},
  A: {kh: 'A', ten: 'độ sẵn sàng', sach: 'A (1.19, 2.18, 4.13), A∥ (4.14)'},
  E: {kh: 'E_ks', ten: 'hiệu quả biện pháp kiểm soát (0…1)', sach: 'E_k (2.20); (6.17) dùng E_i cho mức phơi lộ, nghĩa ngược'},
};

// ---------------- Chương 1 · độ trễ
// trễ truyền (tuần tự hoá) một gói L bit trên liên kết C bit/s: 1.11 = 4.12 = 5.14
export const dTruyen = (Lbit, Cbps) => Lbit / Cbps;
dTruyen.eq = ['1.11', '4.12', '5.14'];
// trễ lan truyền: 1.25, 5.26. Tốc độ lan truyền trong cáp đồng, sợi quang ≈ 2·10⁸ m/s (Kurose & Ross 2021, mục 1.4,
// có trong tài liệu tham khảo của sách); trong không khí, chân không c ≈ 3·10⁸ m/s
export const V_CAP = 2e8, C_SANG = 299792458;
export const dLanTruyen = (d_m, v = V_CAP) => d_m / v;
dLanTruyen.eq = ['1.25', '5.26'];
// trễ đầu cuối qua H chặng: 1.10 = 2.10 = 4.11 = 5.6. chang = [{prop, tx, queue, proc}]
export function dDauCuoi(chang) {
  const s = {prop: 0, tx: 0, queue: 0, proc: 0};
  for (const h of chang) for (const k in s) s[k] += h[k] || 0;
  return {...s, tong: s.prop + s.tx + s.queue + s.proc};
}
dDauCuoi.eq = ['1.10', '2.10', '4.11', '5.6'];
// thời gian đáp ứng ứng dụng: 1.12
export const tDapUng = ({mang, mayChu = 0, csdl = 0, mayKhach = 0}) => mang + mayChu + csdl + mayKhach;
tDapUng.eq = ['1.12'];

// ---------------- Chương 1 · mức sử dụng và dư địa
// ρ_e = Σ b_f / C_e : 1.7, 4.10, 5.17
export const mucSuDung = (taiBps, Cbps) => taiBps / Cbps;
mucSuDung.eq = ['1.7', '4.10', '5.17'];
// Σ b_f ≤ η·C_e : 1.9 = 3.10 = 4.17. Trả về dư địa (bit/s, âm là vượt)
export const duDia = (taiBps, Cbps, eta) => eta * Cbps - taiBps;
duDia.eq = ['1.9', '3.10', '4.17'];

// ---------------- Chương 1 · biến thiên trễ, mất gói, thông lượng
// jitter trung bình 1.14 (và 5.7 cho từng cặp)
export function jitterTB(D) { if (D.length < 2) return 0; let s = 0; for (let i = 1; i < D.length; i++) s += Math.abs(D[i] - D[i - 1]); return s / (D.length - 1); }
jitterTB.eq = ['1.13', '1.14', '5.7'];
export const tiLeMat = (Ntx, Nrx) => 1 - Nrx / Ntx;
tiLeMat.eq = ['1.15', '5.9'];
// xác suất lỗi gói từ BER: 1.16 (bản chính xác, không dùng xấp xỉ L·Pb)
export const pLoiGoi = (Pb, Lbit) => 1 - Math.pow(1 - Pb, Lbit);
pLoiGoi.eq = ['1.16'];
export const thongLuong = (bit, dt) => bit / dt;
thongLuong.eq = ['1.17', '1.18', '5.8'];
// goodput hữu dụng 4.2
export const goodput = (Cbps, etaOh, ploss) => Cbps * (1 - etaOh) * (1 - ploss);
goodput.eq = ['4.2'];

// ---------------- độ sẵn sàng, phục hồi
export const sanSang = (mtbf, mttr) => mtbf / (mtbf + mttr);
sanSang.eq = ['1.19', '2.18', '4.13'];
export const sanSangSongSong = (As) => 1 - As.reduce((p, a) => p * (1 - a), 1);
sanSangSongSong.eq = ['4.14'];
export const doTinCay = (lambda, t) => Math.exp(-lambda * t);
doTinCay.eq = ['2.17'];
// phút ngừng mỗi năm của độ sẵn sàng A
export const phutNgungNam = (A) => (1 - A) * 365.25 * 24 * 60;

// ---------------- Chương 2 · tải
// N_act = Σ κ N ; Λ = Σ κ N b : 2.3, 2.4. nhom = [{N, kappa, b}]
export const phienDongThoi = (nhom) => nhom.reduce((s, g) => s + g.kappa * g.N, 0);
phienDongThoi.eq = ['2.3'];
export const taiDichVu = (nhom) => nhom.reduce((s, g) => s + g.kappa * g.N * g.b, 0);
taiDichVu.eq = ['2.4'];

// ---------------- Chương 3 · địa chỉ
// 3.4, 3.5, 3.7, 3.8: tiền tố IPv4 dài nhất (subnet nhỏ nhất) vẫn đủ α·H host; hiệu suất dùng địa chỉ
export const soDiaChi = (p) => 2 ** (32 - p), soHost = (p) => 2 ** (32 - p) - 2;
export function tienToIPv4(H, alpha = 1) { for (let p = 30; p >= 1; p--) if (soHost(p) >= alpha * H) return {p, host: soHost(p), hieuSuat: H / soHost(p)}; return null; }
tienToIPv4.eq = ['3.4', '3.5', '3.7', '3.8'];

// ---------------- Chương 4 · thiết kế vật lý
// số cổng tối thiểu 4.7
export const soCong = ({Nu, NAP = 0, Ncam = 0, Nspare = 0, rhoUse = 1}) => Math.ceil((Nu + NAP + Ncam + Nspare) / rhoUse);
soCong.eq = ['4.7'];
// tỉ lệ oversubscription 4.8: tổng tốc độ cổng truy nhập / tổng tốc độ uplink
export const oversub = (congBps, uplinkBps) => congBps.reduce((a, b) => a + b, 0) / uplinkBps.reduce((a, b) => a + b, 0);
oversub.eq = ['4.8'];
// PoE 4.5: đạt khi Σ P_i ≤ ρ_safe · P_budget
export const poe = (Pi, Pbudget, rhoSafe) => { const tong = Pi.reduce((a, b) => a + b, 0), gioiHan = rhoSafe * Pbudget; return {tong, gioiHan, dat: tong <= gioiHan}; };
poe.eq = ['4.5'];
// ngân sách công suất quang 4.4 (dBm, dB/km, km, dB)
export const congSuatThu = ({Ptx, alpha, L, nc, Lc, ns, Ls, M}) => Ptx - (alpha * L + nc * Lc + ns * Ls + M);
congSuatThu.eq = ['4.4'];
// công suất rack 4.15, thời gian lưu điện 4.16 (E_UPS tính bằng Wh → giờ)
export const congSuatRack = (Pdev, Ppoe, Pmargin) => Pdev.reduce((a, b) => a + b, 0) + Ppoe + Pmargin;
congSuatRack.eq = ['4.15'];
export const thoiGianUPS = (Ewh, etaUps, Prack) => (Ewh * etaUps) / Prack;
thoiGianUPS.eq = ['4.16'];
// chiều dài tuyến cáp 4.3
export const capHopLe = (l, lmax) => l <= lmax;
capHopLe.eq = ['4.3'];
// Giới hạn cáp ngang (permanent link) 90 m, cả kênh 100 m kể cả dây nhảy (ANSI/TIA-568.1)
export const CAP_NGANG_MAX = 90, KENH_MAX = 100;

// ---------------- Chương 5 · thống kê đo
export function thongKe(x) {
  const n = x.length, tb = x.reduce((a, b) => a + b, 0) / n;
  const s2 = n > 1 ? x.reduce((a, b) => a + (b - tb) ** 2, 0) / (n - 1) : 0;
  return {n, tb, s2, s: Math.sqrt(s2), ci95: n > 1 ? tStudent975(n - 1) * Math.sqrt(s2 / n) : Infinity};
}
thongKe.eq = ['5.10', '5.11'];
// t_{0,975; ν}: bảng chuẩn (ν = 1…30), sau đó tiệm cận 1,96 theo xấp xỉ Cornish–Fisher bậc hai
const T975 = [12.706, 4.303, 3.182, 2.776, 2.571, 2.447, 2.365, 2.306, 2.262, 2.228, 2.201, 2.179, 2.160, 2.145, 2.131, 2.120, 2.110, 2.101, 2.093, 2.086, 2.080, 2.074, 2.069, 2.064, 2.060, 2.056, 2.052, 2.048, 2.045, 2.042];
export function tStudent975(nu) { if (nu < 1) return Infinity; if (nu <= 30) return T975[nu - 1]; const z = 1.959964; return z + (z ** 3 + z) / (4 * nu) + (5 * z ** 5 + 16 * z ** 3 + 3 * z) / (96 * nu * nu); }
// điều kiện đạt 1.8 = 2.5 = 5.18 = 6.18: nho = [[giá trị, ngưỡng trên]], lon = [[giá trị, ngưỡng dưới]]
export const dat = (nho = [], lon = []) => nho.every(([y, t]) => y <= t) && lon.every(([z, t]) => z >= t);
dat.eq = ['1.8', '2.5', '5.18', '5.22', '6.18'];
export const thayDoi = (truoc, sau) => (sau - truoc) / truoc;
thayDoi.eq = ['5.30'];

// ---------------- Chương 6 · 5G
// trễ dịch vụ theo vị trí UPF 6.8 (và 5.24 khi tách xử lý ứng dụng): đoạn = {ran, tn, upf, dn, app}
export const dDichVu5G = ({ran, tn, upf, dn, app = 0, ve = 0}) => ran + tn + upf + dn + app + ve;
dDichVu5G.eq = ['6.8', '5.24', '1.23', '3.23', '4.18'];
// nút thắt NSA 6.4
export const tocDoNSA = (R) => Math.min(...R);
tocDoNSA.eq = ['6.4'];
// link budget 6.10 (dB), dung lượng cell 6.11
export const linkBudget = ({Ptx, Gtx, Grx, Lpath, Lmisc}) => Ptx + Gtx + Grx - Lpath - Lmisc;
linkBudget.eq = ['6.10'];
export const dungLuongCell = (B, etaEff, Nlayer) => B * etaEff * Nlayer;
dungLuongCell.eq = ['6.11'];
// suy hao không gian tự do (Friis), dB: d mét, f Hz. Chỉ dùng minh hoạ xu hướng; bài 6.3 dùng mô hình 3GPP khi dựng
export const fspl = (d, f) => 20 * Math.log10(d) + 20 * Math.log10(f) - 147.55;

// ---------------- lý thuyết hàng đợi (Jain 1991, chương 31; có trong tài liệu tham khảo của sách) dùng để KIỂM bộ mô phỏng
// M/M/1: λ gói/s, μ gói/s. Thời gian trong hệ W = 1/(μ − λ); chờ trong hàng Wq = ρ/(μ − λ)
export const mm1 = (lam, mu) => { const r = lam / mu; return r >= 1 ? {rho: r, W: Infinity, Wq: Infinity, L: Infinity} : {rho: r, W: 1 / (mu - lam), Wq: r / (mu - lam), L: r / (1 - r)}; };
// M/M/1/K: xác suất chặn (mất gói) khi hệ đã có K gói (kể cả gói đang phục vụ)
export const mm1kMat = (rho, K) => (Math.abs(rho - 1) < 1e-12 ? 1 / (K + 1) : ((1 - rho) * rho ** K) / (1 - rho ** (K + 1)));
// M/D/1 (cỡ gói cố định): Wq = ρ / (2μ(1 − ρ))
export const md1 = (lam, mu) => { const r = lam / mu; return r >= 1 ? {rho: r, W: Infinity, Wq: Infinity} : {rho: r, Wq: r / (2 * mu * (1 - r)), W: 1 / mu + r / (2 * mu * (1 - r))}; };

// ---------------- đổi đơn vị, định dạng
export const byte = (B) => 8 * B, Mbps = (x) => x * 1e6, Gbps = (x) => x * 1e9, km = (x) => x * 1e3, ms = (s) => s * 1e3, us = (s) => s * 1e6;
export function fmtThoiGian(s, d = 2) {
  if (!Number.isFinite(s)) return '∞';
  const v = Math.abs(s), [x, u] = v >= 1 ? [s, 's'] : v >= 1e-3 ? [s * 1e3, 'ms'] : v >= 1e-6 ? [s * 1e6, 'µs'] : [s * 1e9, 'ns'];
  return `${x.toFixed(Math.abs(x) >= 100 ? 0 : Math.abs(x) >= 10 ? Math.max(0, d - 1) : d).replace('.', ',')} ${u}`;
}
export function fmtBps(b, d = 1) { const v = Math.abs(b), [x, u] = v >= 1e9 ? [b / 1e9, 'Gbit/s'] : v >= 1e6 ? [b / 1e6, 'Mbit/s'] : v >= 1e3 ? [b / 1e3, 'kbit/s'] : [b, 'bit/s']; return `${x.toFixed(d).replace('.', ',')} ${u}`; }
