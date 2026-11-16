// Mô hình của tiết 1 (mục 1.1–1.5): bốn dịch vụ của một mạng trường, vector yêu cầu (1.6), quyết định thiết kế (1.1), đánh đổi (1.2)
// và điều kiện nghiệm thu (1.8). Không phụ thuộc three.js: lesson tk-dich-vu dùng để vẽ, tests/mang_check.mjs dùng để kiểm.
//
// Nút thắt chung là đường WAN ra nhà cung cấp đám mây. Lớp học trực tuyến và sao lưu đi qua WAN; camera và học liệu chỉ đi trong
// trường (lõi 10 Gbit/s). Hàng đợi WAN: M/M/1 khi không phân lớp; khi bật QoS, lớp học được ưu tiên không chiếm quyền (Cobham,
// xem Kleinrock 1976, Queueing Systems vol. 2, mục 3.6). Mất gói: M/M/1/K với K = 200 gói; quá tải thì phần vượt công suất bị bỏ.
import * as F from './cong-thuc.js';

// Ngưỡng trễ và mất gói theo lớp QoS của ITU-T Y.1541: lớp 0 (thời gian thực, tương tác) 100 ms, biến thiên 50 ms, mất 10⁻³;
// lớp 3 (giao dịch) 400 ms; lớp 4 (truyền khối, video một chiều) 1 s; lớp 5 không quy định. Băng thông, độ sẵn sàng, thời gian phục
// hồi là giả định của bài cho một trường đại học.
export const DV = [
  {k: 'lh', ten: 'Lớp học trực tuyến', mau: '#3B6EA8', qua: 'wan', b: 300, y1541: 0, r: {Bmin: 300, Bmax: 450, Dmax: 0.100, Jmax: 0.050, Pmax: 1e-3, Amin: 0.9995, Trec: 60}},
  {k: 'cam', ten: 'Camera giám sát', mau: '#E3562A', qua: 'loi', b: 160, y1541: 4, r: {Bmin: 160, Bmax: 200, Dmax: 1.0, Jmax: null, Pmax: 1e-3, Amin: 0.999, Trec: 300}},
  {k: 'hl', ten: 'Học liệu (LMS)', mau: '#2F8F5B', qua: 'loi', b: 200, y1541: 3, r: {Bmin: 200, Bmax: 400, Dmax: 0.400, Jmax: null, Pmax: 1e-3, Amin: 0.999, Trec: 300}},
  {k: 'sl', ten: 'Sao lưu ra đám mây', mau: '#8A8F98', qua: 'wan', b: 400, y1541: 5, r: {Bmin: 400, Bmax: 1000, Dmax: null, Jmax: null, Pmax: 1e-2, Amin: 0.99, Trec: 3600}},
];
export const K = 200, LBIT = 10000;           // bộ đệm cổng WAN 200 gói; gói trung bình 1 250 byte
const D0 = {wan: 0.0035, loi: 0.0005}; // trễ cố định một chiều (lan truyền, truyền, xử lý) ngoài hàng đợi WAN, giây (giả định)
export const A_WAN = F.sanSang(2000, 2), A_LOI = 0.99995; // một đường WAN như bài tập 8 chương 2; phần trong trường (giả định)
// chi phí vận hành tương đối mỗi tháng (giả định của bài): WAN 500 Mbit/s = 1
const GIA = {500: 1.0, 1000: 1.8};

// x = {C: dung lượng WAN Mbit/s, qos: bool, kep: hai đường WAN tách ngả, dem: sao lưu ban đêm, tang: hệ số tải lớp học (nhiễu w_k)}
export function danhGia(x) {
  const b = Object.fromEntries(DV.map((d) => [d.k, d.b]));
  b.lh *= x.tang ?? 1;
  const blh = b.lh, bsl = x.dem ? 0 : b.sl, C = x.C, mu = (C * 1e6) / LBIT;
  const tai = blh + bsl, rho = tai / C, r1 = blh / C;
  let W1, W2, P1, P2;
  if (!x.qos) {
    // một hàng chung: mọi gói chịu cùng trễ và cùng tỉ lệ mất
    const P = rho >= 1 ? 1 - (1 - F.mm1kMat(Math.min(rho, 0.999999), K)) / rho : F.mm1kMat(rho, K);
    const W = rho >= 1 ? K / mu : F.mm1(rho * mu, mu).Wq;
    [W1, W2, P1, P2] = [W, W, P, P];
  } else {
    // ưu tiên không chiếm quyền: R = ρ/μ (phục vụ mũ); W1 = R/(1 − ρ1); W2 = R/((1 − ρ1)(1 − ρ))
    const R = Math.min(rho, 1) / mu;
    W1 = R / (1 - Math.min(r1, 0.999));
    P1 = F.mm1kMat(Math.min(r1, 0.999999), K);
    if (rho < 1) { W2 = R / ((1 - r1) * (1 - rho)); P2 = F.mm1kMat(rho, K); }
    else { W2 = K / mu; const conLai = Math.max(0, C - blh); P2 = bsl > 0 ? 1 - conLai / bsl : 0; }
  }
  const A = x.kep ? F.sanSangSongSong([A_WAN, A_WAN]) * A_LOI : A_WAN * A_LOI;
  const kq = {};
  for (const d of DV) {
    const wan = d.qua === 'wan', lh = d.k === 'lh', sl = d.k === 'sl';
    const W = wan ? (lh ? W1 : W2) : 0, P = wan ? (lh ? P1 : P2) : 0; // trong trường lõi 10 Gbit/s gần như rỗng: mất gói coi là 0 (giả định)
    const chay = sl && x.dem ? 'đêm' : 'ngày';
    const G = (lh ? blh : sl ? b.sl : d.b) * (1 - P); // goodput trong khung giờ chạy của dịch vụ (sao lưu ban đêm thì WAN trống)
    const Gdem = sl && x.dem ? Math.min(b.sl, C) : G;
    const v = {D: (wan ? D0.wan : D0.loi) + W + LBIT / (C * 1e6), J: W, P: sl && x.dem ? F.mm1kMat(Math.min(b.sl / C, 0.999), K) : P, G: sl && x.dem ? Gdem : G, A: wan ? A : A_LOI, chay};
    const r = d.r, ok = {D: r.Dmax == null || v.D <= r.Dmax, J: r.Jmax == null || v.J <= r.Jmax, P: v.P <= r.Pmax, G: v.G >= r.Bmin * (lh ? x.tang ?? 1 : 1) * (1 - r.Pmax) - 1e-9, A: v.A >= r.Amin};
    kq[d.k] = {v, ok, dat: Object.values(ok).every(Boolean)};
  }
  const cop = GIA[C] * (x.kep ? 2 : 1) + (x.qos ? 0.1 : 0) + (x.dem ? 0.05 : 0);
  return {kq, rho, tai, cop, A, datHet: DV.every((d) => kq[d.k].dat)};
}

// (1.2): J(x) = α1·D + α2·P_loss + α3·C_op − α4·A, đưa về cùng thang: D theo 10 ms, P theo %, C theo đơn vị giá, A theo số "số chín"
export function mucTieu(e, a = [1, 1, 1, 1]) {
  const lh = e.kq.lh.v, D = lh.D / 0.01, P = Math.max(e.kq.lh.v.P, e.kq.sl.v.P) * 100, A = -Math.log10(1 - e.A);
  return {D, P, C: e.cop, A, J: a[0] * D + a[1] * P + a[2] * e.cop - a[3] * A};
}
export const PHUONG_AN = [
  {ten: 'Tiết kiệm', x: {C: 500, qos: false, kep: false, dem: false}},
  {ten: 'Cân bằng', x: {C: 500, qos: true, kep: true, dem: true}},
  {ten: 'Mua băng thông', x: {C: 1000, qos: false, kep: true, dem: false}},
];
