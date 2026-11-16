// Bộ máy "mạng sống": mô phỏng sự kiện rời rạc cho học phần Thiết kế và hiệu năng mạng.
// Đúng cách nhìn ở mục 5.1.2 của giáo trình: gói tin là thực thể, số gói trong hàng đợi là biến trạng thái, gói đến, xong
// phục vụ, mất gói là sự kiện. Chạy trong trình duyệt và trong Node (tests/mang_check.mjs), không phụ thuộc three.js.
// Tất định: cùng hạt giống (seed) cho cùng kết quả, nên con số trên màn hình kiểm lại được.

// PRNG mulberry32
export function rng(seed = 1) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
export const expo = (r, mean) => -Math.log(1 - r()) * mean;

// hàng đợi ưu tiên nhị phân theo thời gian sự kiện
class Heap {
  constructor() { this.a = []; }
  get size() { return this.a.length; }
  push(e) { const a = this.a; a.push(e); let i = a.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (a[p].t <= e.t) break; a[i] = a[p]; i = p; } a[i] = e; }
  pop() { const a = this.a, top = a[0], last = a.pop(); if (a.length) { let i = 0; const n = a.length; for (;;) { let c = 2 * i + 1; if (c >= n) break; if (c + 1 < n && a[c + 1].t < a[c].t) c++; if (a[c].t >= last.t) break; a[i] = a[c]; i = c; } a[i] = last; } return top; }
}

export class DES {
  constructor() { this.now = 0; this.q = new Heap(); this.seq = 0; }
  at(t, fn) { this.q.push({t, fn, s: this.seq++}); }
  after(dt, fn) { this.at(this.now + dt, fn); }
  run(until = Infinity, maxEv = 5e6) { let n = 0; while (this.q.size && n++ < maxEv) { const e = this.q.pop(); if (e.t > until) { this.q.push(e); break; } this.now = e.t; e.fn(); } return this; }
}

// Một liên kết ra của bộ chuyển mạch/router: một máy phục vụ (truyền với tốc độ C bit/s), bộ đệm giới hạn theo số gói,
// các lớp ưu tiên (0 = cao nhất). lap = 'fifo' | 'uutien' (ưu tiên tuyệt đối, không chiếm quyền gói đang truyền).
export class LienKet {
  constructor(des, {C, prop = 0, buffer = Infinity, lop = 1, lap = 'fifo', tenLop = null}) {
    Object.assign(this, {des, C, prop, buffer, lap});
    this.hang = Array.from({length: lop}, () => []);
    this.ban = false; this.bitDaTruyen = 0; this.thoiGianBan = 0; this.mat = new Array(lop).fill(0); this.den = new Array(lop).fill(0);
    this.tenLop = tenLop; this.khiXong = null;
  }
  get dangCho() { return this.hang.reduce((s, h) => s + h.length, 0); }
  nhan(goi) {
    const c = goi.lop || 0; this.den[c]++;
    if (this.dangCho + (this.ban ? 1 : 0) >= this.buffer) { this.mat[c]++; goi.mat = true; return false; }
    goi.tVao = this.des.now; this.hang[c].push(goi);
    if (!this.ban) this.batDau();
    return true;
  }
  batDau() {
    const h = this.hang.find((x) => x.length); if (!h) { this.ban = false; return; }
    const goi = h.shift(); this.ban = true;
    const tx = goi.bit / this.C; goi.cho = this.des.now - goi.tVao; goi.tx = tx;
    this.thoiGianBan += tx; this.bitDaTruyen += goi.bit;
    this.des.after(tx, () => { const g = goi; this.des.after(this.prop, () => this.khiXong?.(g)); this.batDau(); });
  }
}

// Nguồn Poisson: tốc độ lam gói/s, cỡ gói lấy từ hàm coGoi(r) (bit)
export function nguonPoisson(des, r, {lam, coGoi, lop = 0, den, toi = Infinity, nhan = ''}) {
  let id = 0;
  const phat = () => { if (des.now > toi) return; den({id: id++, bit: coGoi(r), lop, tPhat: des.now, nhan}); des.after(expo(r, 1 / lam), phat); };
  des.after(expo(r, 1 / lam), phat);
}

// Một hàng đợi đơn có thống kê: phục vụ cho kiểm M/M/1, M/D/1, M/M/1/K và cho các bài cần trễ hàng đợi theo tải.
// coGoi: 'mu' (cỡ gói mũ, trung bình Lbit) | 'co-dinh' | hàm. Trả về trễ trong hệ, chờ, mất gói, mức sử dụng, phân vị.
export function chayHangDoi({C, Lbit, rho, buffer = Infinity, n = 40000, warm = 2000, seed = 7, coGoi = 'mu'}) {
  const des = new DES(), r = rng(seed), mu = C / Lbit, lam = rho * mu;
  const lk = new LienKet(des, {C, buffer});
  const kich = coGoi === 'mu' ? (rr) => expo(rr, Lbit) : coGoi === 'co-dinh' ? () => Lbit : coGoi;
  const W = [], Wq = []; let gui = 0, matSauWarm = 0, k = 0;
  lk.khiXong = (g) => { if (g.id >= warm) { W.push(des.now - g.tPhat); Wq.push(g.cho); } };
  let id = 0;
  const phat = () => { if (id >= n + warm) return; const g = {id: id++, bit: kich(r), tPhat: des.now}; if (g.id >= warm) gui++; if (!lk.nhan(g) && g.id >= warm) matSauWarm++; des.after(expo(r, 1 / lam), phat); };
  des.after(expo(r, 1 / lam), phat);
  des.run();
  const sap = [...W].sort((a, b) => a - b), tb = (x) => x.reduce((a, b) => a + b, 0) / Math.max(1, x.length), pv = (p) => sap[Math.min(sap.length - 1, Math.floor(p * sap.length))] ?? 0;
  void k;
  return {mu, lam, W: tb(W), Wq: tb(Wq), p50: pv(0.5), p95: pv(0.95), p99: pv(0.99), mat: matSauWarm / Math.max(1, gui), muc: lk.thoiGianBan / des.now, mau: W, n: W.length, jitter: jitter(W)};
}
function jitter(D) { let s = 0; for (let i = 1; i < D.length; i++) s += Math.abs(D[i] - D[i - 1]); return D.length > 1 ? s / (D.length - 1) : 0; }

// Chạy lặp nhiều lần với hạt giống khác nhau, trả về mẫu của một đại lượng: dùng cho khoảng tin cậy 5.11
export function lap(nLan, f, seed0 = 11) { const out = []; for (let i = 0; i < nLan; i++) out.push(f(seed0 + 7919 * i)); return out; }

// Hàng đợi nhiều lớp ưu tiên trên một liên kết (bài QoS): lop = [{ten, lam, Lbit}], lap 'fifo' | 'uutien'
export function chayNhieuLop({C, lop, lap: kieu = 'uutien', buffer = Infinity, T = 20, warm = 2, seed = 5}) {
  const des = new DES(), r = rng(seed), lk = new LienKet(des, {C, buffer, lop: kieu === 'fifo' ? 1 : lop.length, lap: kieu});
  const W = lop.map(() => []), gui = lop.map(() => 0), matL = lop.map(() => 0);
  lk.khiXong = (g) => { if (g.tPhat > warm) W[g.c].push(des.now - g.tPhat); };
  lop.forEach((L, c) => nguonPoisson(des, r, {lam: L.lam, coGoi: (rr) => expo(rr, L.Lbit), lop: kieu === 'fifo' ? 0 : c, toi: T, den: (g) => { g.c = c; if (g.tPhat > warm) gui[c]++; if (!lk.nhan(g) && g.tPhat > warm) matL[c]++; }}));
  des.run(T + 5);
  const tb = (x) => x.reduce((a, b) => a + b, 0) / Math.max(1, x.length);
  return lop.map((L, c) => ({ten: L.ten, W: tb(W[c]), n: W[c].length, mat: matL[c] / Math.max(1, gui[c]), thongLuong: (W[c].length * L.Lbit) / (T - warm)}));
}

// Hàng đợi c máy, phục vụ theo thứ tự đến (FCFS), đến Poisson, thời gian phục vụ mũ trung bình tS: mỗi yêu cầu vào máy rảnh sớm
// nhất. Dùng cho máy chủ ứng dụng ở site biên/vùng/trung tâm (bài 6.1); kiểm với Erlang C trong tests/mang_check.mjs.
export function chayMMc({lam, tS, c, n = 20000, warm = 2000, seed = 3}) {
  const r = rng(seed), ranh = new Array(c).fill(0), W = [];
  let t = 0;
  for (let i = 0; i < n + warm; i++) {
    t += expo(r, 1 / lam);
    let j = 0; for (let k = 1; k < c; k++) if (ranh[k] < ranh[j]) j = k;
    const batDau = Math.max(t, ranh[j]), xong = batDau + expo(r, tS); ranh[j] = xong;
    if (i >= warm) W.push(xong - t);
  }
  const sap = [...W].sort((a, b) => a - b);
  return {W: W.reduce((a, b) => a + b, 0) / W.length, p95: sap[Math.floor(0.95 * sap.length)], rho: (lam * tS) / c, n: W.length};
}

// Độ sẵn sàng bằng Monte Carlo: mỗi thành phần luân phiên chạy/hỏng, thời gian chạy mũ trung bình MTBF, thời gian sửa mũ trung bình
// MTTR (giờ). Dịch vụ chạy khi mọi thành phần nối tiếp chung (chung) chạy VÀ ít nhất một đường (duong: mảng các dãy thành phần
// nối tiếp) chạy. Đường đang dùng là đường chạy có chỉ số nhỏ nhất; khi nó hỏng mà còn đường khác, dịch vụ ngừng tChuyen giờ
// (phát hiện + chuyển mạch, công thức 2.19). Kiểm với 1.19 và 4.14 trong tests/mang_check.mjs.
export function chayKhaDung({tp, chung = [], duong = [], nam = 200, seed = 21, tChuyen = 0}) {
  const r = rng(seed), H = nam * 8766, ev = [];
  for (const [ten, {mtbf, mttr}] of Object.entries(tp)) {
    let t = expo(r, mtbf); while (t < H) { const s = expo(r, mttr); ev.push([t, ten, 0], [t + s, ten, 1]); t += s + expo(r, mtbf); }
  }
  ev.sort((a, b) => a[0] - b[0]);
  const up = Object.fromEntries(Object.keys(tp).map((k) => [k, 1]));
  const dUp = () => duong.map((d) => d.every((k) => up[k]));
  const svc = () => chung.every((k) => up[k]) && (duong.length === 0 || dUp().some(Boolean));
  let tTruoc = 0, chay = true, ngung = 0, suCo = 0, chuyen = 0, dang = 0;
  const theo = {chung: 0, 'cả hai đường': 0, 'chuyển mạch': 0};
  for (const [t, ten, v] of ev) {
    if (!chay) { ngung += t - tTruoc; theo[chung.some((k) => !up[k]) ? 'chung' : 'cả hai đường'] += t - tTruoc; }
    up[ten] = v; tTruoc = t;
    const s = svc(), du = dUp();
    if (chay && !s) suCo++;
    if (s && duong.length) { const moi = du.findIndex(Boolean); if (moi !== dang && !du[dang] && chay) { chuyen++; ngung += tChuyen; theo['chuyển mạch'] += tChuyen; } dang = moi; }
    chay = s;
  }
  if (!chay) { ngung += H - tTruoc; theo[chung.some((k) => !up[k]) ? 'chung' : 'cả hai đường'] += H - tTruoc; }
  const k = 60 / nam; // giờ trong cả đợt → phút mỗi năm
  return {A: 1 - ngung / H, phutNam: ngung * k, suCoNam: suCo / nam, chuyenNam: chuyen / nam, theo: Object.fromEntries(Object.entries(theo).map(([a, b]) => [a, b * k]))};
}
