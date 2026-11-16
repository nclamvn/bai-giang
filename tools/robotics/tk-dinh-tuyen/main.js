// Thiết kế và hiệu năng mạng · bài 3.3 · Định tuyến, ECMP và hội tụ.
// Theo giáo trình TEL1459 (Hoàng Trọng Minh, PTIT 2026), mục 3.4.2: chi phí đường đi C(P) = Σ c_e (3.16), đường được chọn là đường
// chi phí nhỏ nhất (3.17), ECMP chia tải b/K trên K đường bằng chi phí (3.18), thời gian khôi phục T_rec = T_detect + T_prop + T_calc
// + T_install (3.19); câu 6, câu 7 cuối chương 3. Đường ngắn nhất tính bằng Dijkstra ngay trong trang, ECMP chia đều ở từng nút
// (mô hình chất lỏng của 3.18) và chia theo băm từng luồng (mô hình rời rạc) để thấy chỗ 3.18 chỉ là xấp xỉ.
import * as THREE from 'three';
import {MAT, createStage} from '../kit/stage.js';
import * as SH from '../kit/shapes.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {tag, picker, vn} from '../kit/soi.js';
import * as F from '../kit/mang/cong-thuc.js';
import {boCanh, P, MAU, NHO, LOGC, unlog} from '../kit/mang/canh.js';

const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 16, grid: 1, fade: 60, fov: 26, near: 0.2, far: 260});
const ui = createUI(app);
const root = new THREE.Group(); st.scene.add(root);
const B = boCanh(root), {mk} = B;

// ---------------- đồ thị: 2 truy nhập · 2 phân phối · 2 lõi · trung tâm dữ liệu
const NODE = [
  {ten: 'S1', p: P(-7, 0, 2.4), vai: 'truy nhập'}, {ten: 'S2', p: P(-7, 0, -2.4), vai: 'truy nhập'},
  {ten: 'R1', p: P(-2.4, 0, 2.4), vai: 'phân phối'}, {ten: 'R2', p: P(-2.4, 0, -2.4), vai: 'phân phối'},
  {ten: 'C1', p: P(2.4, 0, 2.4), vai: 'lõi'}, {ten: 'C2', p: P(2.4, 0, -2.4), vai: 'lõi'},
  {ten: 'DC', p: P(7, 0, 0), vai: 'trung tâm dữ liệu'},
];
const ID = Object.fromEntries(NODE.map((n, i) => [n.ten, i]));
const EDGE = [['S1', 'R1'], ['S1', 'R2'], ['S2', 'R1'], ['S2', 'R2'], ['R1', 'R2'], ['R1', 'C1'], ['R1', 'C2'], ['R2', 'C1'], ['R2', 'C2'], ['C1', 'C2'], ['C1', 'DC'], ['C2', 'DC']].map(([a, b]) => ({a: ID[a], b: ID[b], ten: `${a}–${b}`, cap: 10e9}));
const EID = Object.fromEntries(EDGE.map((e, i) => [e.ten, i]));
const DST = ID.DC;
// router: hình trụ tối có vạch sáng; DC là tủ máy
NODE.forEach((n, i) => {
  if (i === DST) { const g = new THREE.Group(); g.position.copy(n.p); root.add(g); for (const dz of [-0.5, 0.5]) B.tu(0, dz, 1.8, 'n' + i, g); n.y = 1.0; return; }
  const g = new THREE.Group(); g.position.copy(n.p); root.add(g); tag('n' + i, g);
  mk(new THREE.CylinderGeometry(0.55, 0.55, 0.42, 32), MAT.dark(), g).position.y = 0.45;
  const v = mk(new THREE.TorusGeometry(0.55, 0.025, 8, 40), new THREE.MeshBasicMaterial({color: i < 2 ? MAU.thoai : i < 4 ? MAU.ok : MAU.tx}), g); v.rotation.x = Math.PI / 2; v.position.y = 0.67;
  n.y = 0.45;
});
const capMesh = EDGE.map((e, k) => { const A = NODE[e.a].p.clone().setY(NODE[e.a].y), Bp = NODE[e.b].p.clone().setY(NODE[e.b].y), mid = A.clone().lerp(Bp, 0.5); mid.y += 0.35 + (k === EID['R1–R2'] || k === EID['C1–C2'] ? 0 : 0.15);
  const c = B.cap([A, mid, Bp], new THREE.MeshStandardMaterial({color: '#e8c547', roughness: 0.5}), 0.06, 'e' + k); return c; });
const goi = EDGE.map(() => B.beGoi(8, MAU.prop, [0.18, 0.1, 0.14]));
const dut = mk(new THREE.TorusGeometry(0.2, 0.04, 8, 20), new THREE.MeshBasicMaterial({color: MAU.bad})); dut.visible = false;

// ---------------- mô hình
// Hai luồng tổng: S1 → DC và S2 → DC, mỗi luồng 6 Gbit/s gồm n luồng con bằng nhau. Liên kết 10 Gbit/s. Giả định của bài: lan truyền
// thông tin trạng thái 5 ms mỗi chặng, tính SPF 50 ms, cài FIB 10 µs mỗi tiền tố. BFD 3 × 50 ms (RFC 5880); OSPF dead 40 s (RFC 2328).
const S = {cost: Array(EDGE.length).fill(10), ecmp: true, n: 8, b: 6e9, cat: -1, su: null, phat: 'bfd', pref: 2000, t: 0, kq: null, dirty: true};
function dijkstra(cost, alive) {
  const N = NODE.length, d = Array(N).fill(Infinity), done = Array(N).fill(false); d[DST] = 0;
  for (let it = 0; it < N; it++) { let u = -1; for (let i = 0; i < N; i++) if (!done[i] && (u < 0 || d[i] < d[u])) u = i; if (u < 0 || d[u] === Infinity) break; done[u] = true;
    EDGE.forEach((e, k) => { if (!alive[k]) return; const v = e.a === u ? e.b : e.b === u ? e.a : -1; if (v >= 0 && d[u] + cost[k] < d[v]) d[v] = d[u] + cost[k]; }); }
  // bước kế tiếp cùng chi phí tại mỗi nút
  const nh = NODE.map((_, u) => EDGE.map((e, k) => ({k, v: e.a === u ? e.b : e.b === u ? e.a : -1})).filter(({k, v}) => v >= 0 && alive[k] && Math.abs(cost[k] + d[v] - d[u]) < 1e-9));
  return {d, nh};
}
function duongDi(src, R) { // liệt kê mọi đường chi phí nhỏ nhất từ src tới DC
  const out = [], walk = (u, path) => { if (u === DST) { out.push(path); return; } for (const {k, v} of R.nh[u]) walk(v, [...path, {k, v}]); };
  walk(src, []); return out;
}
const bam = (f, u, K) => ((Math.imul(f + 1, 2654435761) ^ Math.imul(u + 7, 40503)) >>> 0) % K;
function taiLK(R, cachChia) {
  const L = Array(EDGE.length).fill(0);
  for (const src of [ID.S1, ID.S2]) {
    if (cachChia === 'long') { // chia đều ở mỗi nút (3.18)
      const amt = Array(NODE.length).fill(0); amt[src] = S.b;
      const order = NODE.map((_, i) => i).filter((i) => Number.isFinite(R.d[i])).sort((a, b) => R.d[b] - R.d[a]);
      for (const u of order) { if (u === DST || !amt[u]) continue; let hops = R.nh[u]; if (!S.ecmp) hops = hops.slice(0, 1); hops.forEach(({k, v}) => { L[k] += amt[u] / hops.length; amt[v] += amt[u] / hops.length; }); }
    } else { // mỗi luồng con chọn bước kế tiếp bằng băm
      for (let f = 0; f < S.n; f++) { let u = src, guard = 0; while (u !== DST && guard++ < 10) { let hops = R.nh[u]; if (!hops.length) break; if (!S.ecmp) hops = hops.slice(0, 1); const {k, v} = hops[bam(f + src * 1000, u, hops.length)]; L[k] += S.b / S.n; u = v; } }
    }
  }
  return L;
}
function tinh() {
  const alive = EDGE.map((_, k) => k !== S.cat), R = dijkstra(S.cost, alive);
  const long = taiLK(R, 'long'), bamL = taiLK(R, 'bam');
  const p1 = duongDi(ID.S1, R), p2 = duongDi(ID.S2, R);
  // ba lựa chọn bước đầu từ S1 theo băm: tải trên hai liên kết ra khỏi S1
  const tDet = S.phat === 'bfd' ? 0.15 : 40, tProp = 0.005 * 3, tCalc = 0.05, tInst = S.pref * 10e-6;
  S.kq = {R, long, bam: bamL, p1, p2, rec: {detect: tDet, prop: tProp, calc: tCalc, install: tInst}, alive};
}

// ---------------- bảng
ui.header({code: '3.3', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · MỤC 3.4.2 · ĐỊNH TUYẾN', title: 'Định tuyến, ECMP và hội tụ', sub: 'CHI PHÍ · ĐƯỜNG NGẮN NHẤT · CHIA TẢI · KHÔI PHỤC', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['7', 'NÚT'], ['3.16–3.19', 'PHƯƠNG TRÌNH'], ['DIJKSTRA', 'TÍNH TRONG TRANG']]});
ui.panel(28, 112, 300, 196, 'CHI PHÍ LIÊN KẾT · 3.16', '01');
const slA = ui.slider('cA', 42, 148, 272, 'CHI PHÍ R1–C1', {lw: 96, vw: 70});
const slB = ui.slider('cB', 42, 176, 272, 'CHI PHÍ S1–R2', {lw: 96, vw: 70});
const t01 = ui.text(42, 204, '', 'sm', NHO);
ui.panel(28, 320, 300, 210, 'ĐƯỜNG ĐƯỢC CHỌN S1 → DC · 3.17', '02');
const pSvg = ui.svg(42, 354, 272, 104);
const t02 = ui.text(42, 466, '', 'sm', NHO);
ui.panel(28, 542, 300, 224, 'ECMP: CHIA ĐỀU HAY BĂM · 3.18', '03');
const slN = ui.slider('n', 42, 578, 272, 'SỐ LUỒNG CON', {lw: 96, vw: 70});
const eBars = ['S1–R1 · 3.18', 'S1–R1 · BĂM', 'S1–R2 · 3.18', 'S1–R2 · BĂM'].map((n, i) => ui.bar(42, 606 + i * 20, 272, n, {lw: 96, vw: 76}));
const t03 = ui.text(42, 690, '', 'sm', NHO);
ui.panel(1272, 112, 300, 250, 'TẢI LIÊN KẾT', '04');
const lSvg = ui.svg(1286, 146, 272, 150);
const t04 = ui.text(1286, 304, '', 'sm', NHO);
ui.panel(1272, 374, 300, 236, 'HỘI TỤ · 3.19', '05');
const slP = ui.slider('pref', 1286, 410, 272, 'SỐ TIỀN TỐ', {lw: 96, vw: 70});
const recRows = [['detect', 'PHÁT HIỆN'], ['prop', 'LAN TRUYỀN'], ['calc', 'TÍNH SPF'], ['install', 'CÀI FIB']].map(([k, n], i) => ({k, b: ui.bar(1286, 438 + i * 20, 272, n, {lw: 86, vw: 76})}));
const t05 = ui.text(1286, 522, '', 'sm', NHO);
ui.panel(1272, 622, 300, 144, 'MẤT DỮ LIỆU KHI HỘI TỤ', '06');
ui.text(1286, 656, 'BỊ RƠI TRONG LÚC CHUYỂN'); const lBig = ui.text(1286, 670, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t06 = ui.text(1286, 706, '', 'sm', NHO);
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_tren', 'NHÌN TỪ TRÊN'], ['ecmp', 'ECMP'], ['cat', 'CẮT C1–DC'], ['noi', 'NỐI LẠI'], ['bfd', 'BFD'], ['hello', 'OSPF HELLO'], ['voi', 'HAI LUỒNG VOI']], 360, 120, 860);
ui.text(362, 664, 'ĐỊNH TUYẾN');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts(NODE.map((n, i) => ({key: 'n' + i, title: n.ten, sub: n.vai.toUpperCase()})));

// ---------------- mô phỏng
const T_SU = 7, PHA = ['detect', 'prop', 'calc', 'install'];
const sim = {
  S,
  reset() { Object.assign(S, {cost: Array(EDGE.length).fill(10), ecmp: true, n: 8, cat: -1, su: null, phat: 'bfd', pref: 2000}); S.dirty = true; },
  busy: () => !!S.su && S.t - S.su.t0 < T_SU,
  isOn: (k) => (k === 'ecmp' ? S.ecmp : k === 'bfd' || k === 'hello' ? S.phat === k : k === 'cat' ? S.cat >= 0 : false),
  act(k) {
    if (k === 'ecmp') S.ecmp = !S.ecmp;
    if (k === 'cat' && S.cat < 0) { S.su = {t0: S.t, kTruoc: S.kq.long[EID['C1–DC']]}; S.cat = EID['C1–DC']; }
    if (k === 'noi') { S.cat = -1; S.su = null; }
    if (k === 'bfd' || k === 'hello') S.phat = k;
    if (k === 'voi') S.n = 2;
    S.dirty = true;
  },
  slide(k, t) {
    if (k === 'cA') S.cost[EID['R1–C1']] = Math.round(1 + t * 49);
    if (k === 'cB') S.cost[EID['S1–R2']] = Math.round(1 + t * 49);
    if (k === 'n') S.n = Math.round(unlog(t, 1, 256));
    if (k === 'pref') S.pref = Math.round(unlog(t, 10, 100000));
    S.dirty = true;
  },
  keyDown() { return false; },
  step(dt) { if (S.dirty) { tinh(); S.dirty = false; } S.t += dt; },
  shadowAt() { return new THREE.Vector3(0, 10, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq; if (!kq) return;
    const su = S.su, u = su ? Math.min(1, (S.t - su.t0) / T_SU) : 1, dangHoiTu = su && u < 1;
    // trong lúc hội tụ, router chưa biết liên kết đã đứt: luồng vẫn được băm vào C1–DC và rơi tại chỗ đứt
    const L = dangHoiTu ? taiLK(dijkstra(S.cost, EDGE.map(() => true)), 'bam') : kq.bam;
    EDGE.forEach((e, k) => {
      const ro = L[k] / e.cap, chet = k === S.cat, A = e.a, Bn = e.b, xuoi = kq.R.d[A] > kq.R.d[Bn] || (dangHoiTu && kq.R.d[A] >= kq.R.d[Bn]);
      capMesh[k].mesh.material.color.set(chet ? '#d27a70' : ro > 1 ? MAU.bad : ro > 0.8 ? MAU.warn : ro > 0 ? '#3b6ea8' : '#d6d2c8');
      const nv = Math.round(Math.min(8, ro * 8));
      goi[k].forEach((m, j) => { m.visible = j < nv && (!chet || dangHoiTu); if (!m.visible) return; let s = ((j / 8) + S.t * 0.25) % 1; if (chet) s = Math.min(s, 0.5); m.position.copy(capMesh[k].curve.getPoint(xuoi ? s : 1 - s)); m.position.y += 0.1; m.material.color.set(chet ? MAU.bad : MAU.prop); });
    });
    dut.visible = S.cat >= 0; if (S.cat >= 0) { dut.position.copy(capMesh[S.cat].curve.getPoint(0.5)); dut.lookAt(capMesh[S.cat].curve.getPoint(0.55)); }
    // bảng 01
    slA.set((S.cost[EID['R1–C1']] - 1) / 49, vn(S.cost[EID['R1–C1']], 0)); slB.set((S.cost[EID['S1–R2']] - 1) / 49, vn(S.cost[EID['S1–R2']], 0));
    t01.innerHTML = `C(P) = Σ c<sub>e</sub>. Mọi liên kết mặc định chi phí 10. Đổi metric là đổi hàm mục tiêu của giao thức định tuyến: một con số nhỏ có thể làm nhiều luồng đổi đường cùng lúc.`;
    // bảng 02
    { let g = ''; const ps = kq.p1.slice(0, 5); ps.forEach((p, i) => { const y = 14 + i * 19, ten = ['S1', ...p.map((h) => NODE[h.v].ten)].join(' → '), c = p.reduce((a, h) => a + S.cost[h.k], 0); g += `<text x="0" y="${y}" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">${ten}</text><text x="272" y="${y}" text-anchor="end" font-family="JetBrains Mono" font-size="10.5" font-weight="700" fill="${MAU.prop}">${c}</text>`; });
      if (kq.p1.length > 5) g += `<text x="0" y="${14 + 5 * 19}" font-family="JetBrains Mono" font-size="9.5" fill="#626773">… và ${kq.p1.length - 5} đường nữa</text>`; pSvg.innerHTML = g; }
    t02.innerHTML = `${kq.p1.length} đường cùng chi phí nhỏ nhất ${kq.R.d[ID.S1]}. ${S.ecmp ? `ECMP dùng cả ${kq.p1.length}.` : 'Tắt ECMP: chỉ một đường được dùng, các đường còn lại ngồi không.'}`;
    // bảng 03
    slN.set(LOGC(S.n, 1, 256), vn(S.n, 0));
    const k1 = EID['S1–R1'], k2 = EID['S1–R2'], mx = Math.max(kq.long[k1], kq.long[k2], kq.bam[k1], kq.bam[k2], 1) * 1.1;
    [[kq.long[k1], C.ink], [kq.bam[k1], MAU.prop], [kq.long[k2], C.ink], [kq.bam[k2], MAU.prop]].forEach(([v, c], i) => eBars[i].set(v / mx, F.fmtBps(v, 1), c));
    const lech = Math.abs(kq.bam[k1] - kq.bam[k2]) / S.b;
    t03.innerHTML = `b̂ = b/K chỉ đúng khi có rất nhiều luồng nhỏ. Băm theo từng luồng: ${S.n} luồng con, mỗi luồng ${F.fmtBps(S.b / S.n, 1)}${lech > 0.2 ? `, hai đường lệch nhau ${vn(lech * 100, 0)} %` : ', hai đường gần đều'}. Một luồng không bao giờ bị tách đôi.`;
    // bảng 04: liên kết tải cao nhất
    { const rows = EDGE.map((e, k) => ({e, k, ro: L[k] / e.cap})).sort((a, b) => b.ro - a.ro).slice(0, 6); let g = '';
      rows.forEach((r, i) => { const y = 4 + i * 24, w = Math.min(1.2, r.ro) / 1.2 * 170; g += `<text x="0" y="${y + 11}" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">${r.e.ten}</text><rect x="62" y="${y}" width="170" height="14" fill="${C.chart}" stroke="${C.line}"/><rect x="62" y="${y}" width="${w}" height="14" fill="${r.k === S.cat ? MAU.bad : r.ro > 1 ? MAU.bad : r.ro > 0.8 ? MAU.warn : MAU.prop}"/><line x1="${62 + 170 / 1.2}" x2="${62 + 170 / 1.2}" y1="${y - 2}" y2="${y + 16}" stroke="${C.ink}"/><text x="272" y="${y + 11}" text-anchor="end" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">${vn(r.ro * 100, 0)} %</text>`; });
      lSvg.innerHTML = g; }
    const qua = EDGE.filter((e, k) => L[k] > e.cap);
    t04.innerHTML = `Vạch đen là 100 % của 10 Gbit/s. ${qua.length ? `<b>Quá tải ${qua.map((e) => e.ten).join(', ')}</b>: dồn quá nhiều luồng vào một chỗ.` : 'Không liên kết nào quá tải.'} Hai luồng tổng 6 Gbit/s từ S1 và S2 về DC.`;
    // bảng 05
    slP.set(LOGC(S.pref, 10, 100000), vn(S.pref, 0));
    const r = kq.rec, tot = r.detect + r.prop + r.calc + r.install;
    recRows.forEach(({k, b}) => b.set(r[k] / tot, F.fmtThoiGian(r[k], 1), k === 'detect' ? MAU.thoai : k === 'install' ? MAU.ok : MAU.warn));
    t05.innerHTML = `T<sub>rec</sub> = ${F.fmtThoiGian(tot, 2)}. ${r.detect / tot > 0.5 ? 'Phát hiện chiếm phần lớn: đây là thành phần câu 7 hỏi, tối ưu bằng phát hiện lỗi nhanh (BFD).' : 'Phát hiện đã nhanh; phần còn lại nằm ở tính SPF và cài FIB, tăng theo cỡ bảng tuyến.'} Lan truyền 5 ms/chặng, SPF 50 ms, 10 µs/tiền tố là giả định.`;
    // bảng 06
    const roi = (su ? su.kTruoc : kq.long[EID['C1–DC']]) * tot;
    lBig.textContent = roi / 8e9 >= 1 ? `${vn(roi / 8e9, 1)} GB` : `${vn(roi / 8e6, roi / 8e6 < 10 ? 1 : 0)} MB`;
    t06.innerHTML = `Lưu lượng đang băm vào C1–DC × T<sub>rec</sub>. Với OSPF hello 40 s là ${vn((kq.long[EID['C1–DC']] || S.b) * 40 / 8e9, 0)} GB rơi mất trước khi mạng kịp biết.`;
    // chế độ
    modeEl.textContent = dangHoiTu ? `Đang hội tụ` : S.cat >= 0 ? 'Đã đi đường khác' : `${kq.p1.length} đường bằng nhau`; modeEl.style.color = dangHoiTu ? MAU.bad : C.ink;
    const pha = dangHoiTu ? (() => { const w = PHA.map((k) => Math.max(0.08, r[k] / tot)), s = w.reduce((a, b) => a + b, 0); let a = 0; for (let i = 0; i < 4; i++) { a += w[i] / s; if (u < a) return i; } return 3; })() : -1;
    modeSub.textContent = dangHoiTu ? `pha ${pha + 1}/4 · ${['phát hiện lỗi', 'lan truyền trạng thái liên kết', 'tính lại đường', 'cài tuyến vào FIB'][pha]} · phát lại nén` : `${S.ecmp ? 'ECMP bật' : 'ECMP tắt'} · ${S.n} luồng con mỗi nguồn · băm theo luồng`;
    alert.set(dangHoiTu ? 'LIÊN KẾT ĐỨT · GÓI ĐANG RƠI' : qua.length ? 'LIÊN KẾT QUÁ TẢI' : '');
    const W3 = (v) => st.project(v.x, v.y, v.z);
    ui.drawCallouts(NODE.map((n, i) => ({key: 'n' + i, p: W3(n.p.clone().setY(i === DST ? 2.0 : 0.8)), dx: n.p.x < 0 ? -30 : 30, dy: n.p.z > 0 ? 40 : -40})), 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình Thiết kế và hiệu năng mạng (TEL1459, PTIT 2026), mục 3.4.2: (3.16)–(3.19); câu 6, câu 7 chương 3. BFD: RFC 5880; OSPF RouterDeadInterval 40 s: RFC 2328. Tải 6 Gbit/s mỗi nguồn, liên kết 10 Gbit/s, thời gian lan truyền, tính SPF, cài FIB là giả định của bài; hàm băm luồng là minh hoạ.';
function cardOf(part) {
  const kq = S.kq; if (!kq) return null;
  const base = {src: SRC};
  if (part.startsWith('e')) { const k = +part.slice(1), e = EDGE[k]; return {...base, k: 'Liên kết', t: e.ten, b: 'Màu theo mức sử dụng: xanh dưới 80 %, vàng trên 80 %, đỏ quá tải. Kéo chi phí để xem luồng dời đi đâu.', rows: [['Chi phí', () => `${S.cost[k]}`], ['Tải (băm)', () => F.fmtBps(S.kq.bam[k], 1)], ['Tải (chia đều)', () => F.fmtBps(S.kq.long[k], 1)]]}; }
  if (part.startsWith('n')) { const i = +part.slice(1), n = NODE[i]; return {...base, k: n.vai, t: n.ten, b: 'Mỗi router tự tính đường ngắn nhất tới DC và chọn bước kế tiếp; có nhiều bước cùng chi phí thì chia luồng.', rows: [['Chi phí tới DC', () => `${S.kq.R.d[i]}`], ['Số bước kế tiếp', () => `${S.kq.R.nh[i].length}`]]}; }
  return null;
}

// ---------------- góc nhìn
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 0, ty: 0.6, tz: 0, az: -40 + 3 * Math.sin(t * 0.05), el: 48, d: 32, sx: 0, sy: -10} : {tx: -0.3, ty: 0.6, tz: 0.4, az: -14 + 3 * Math.sin(t * 0.05), el: 40, d: 34, sx: 0, sy: -10}),
  tren: () => ({tx: 0.4, ty: 0, tz: 0, az: 0, el: 84, d: 30, sx: 0, sy: -30}),
};

// ---------------- bài giảng
const CAP = [
  {k: 'Mục 3.4.2 · bài toán', t: 'Hai cụm truy nhập, một trung tâm dữ liệu', b: 'Mạng có hai lớp phân phối và hai lõi, nối chéo đủ để mỗi cặp nút có nhiều đường. Mỗi router tự tính đường ngắn nhất tới trung tâm dữ liệu theo tổng chi phí liên kết. Bài này xem ba thứ: đường nào được chọn, tải chia ra sao, và mất bao lâu để đổi đường khi có liên kết đứt.', e: 'C(P) = Σ c_e   (3.16)'},
  {k: 'ECMP · 3.18', t: 'Bốn đường bằng nhau', b: 'Mọi liên kết chi phí 10: từ S1 có bốn đường cùng chi phí 30 tới DC. ECMP dùng cả bốn, mỗi đường gánh khoảng một phần tư. Tắt ECMP: chỉ một đường làm việc, ba đường kia ngồi không dù đã trả tiền mua.', e: 'b̂_k ≈ b / K'},
  {k: 'Băm theo luồng', t: 'Hai luồng voi, hai đường lệch', b: 'Router không chia từng gói mà chia từng luồng, để gói của một luồng không đến sai thứ tự. Nhiều luồng nhỏ thì gần đều như 3.18. Bấm Hai luồng voi: mỗi nguồn chỉ còn hai luồng 3 Gbit/s, và hàm băm có thể dồn cả hai vào cùng một đường.', e: '3.18 chỉ là xấp xỉ khi số luồng lớn',
    ask: {q: 'Vì sao ECMP chia theo luồng thay vì theo từng gói?', o: ['Vì chia theo gói tốn CPU hơn', 'Để gói của cùng một luồng không đến sai thứ tự', 'Vì chuẩn cấm chia theo gói'], a: 1, e: 'Các đường có thể trễ khác nhau; chia từng gói làm gói đến sai thứ tự, TCP hiểu nhầm là mất gói.'}},
  {k: 'Đổi metric · 3.17', t: 'Một con số, nhiều luồng dời chỗ', b: 'Kéo chi phí R1–C1 lên 30: các đường qua R1–C1 không còn ngắn nhất, luồng dồn sang R1–C2 và R2–C1. Đổi chi phí S1–R2 xuống 1: mọi luồng của S1 dồn vào một nhánh. Đó là lý do giáo trình dặn mọi thay đổi metric phải được kiểm thử.', e: 'P* = arg min C(P)'},
  {k: 'Hội tụ · 3.19', t: 'Cắt C1–DC', b: 'Liên kết đứt nhưng router chưa biết: gói vẫn được băm vào C1–DC và rơi tại chỗ đứt (đỏ). Mạng phải phát hiện lỗi, lan truyền tin, tính lại đường, cài vào FIB rồi mới dời luồng sang C2–DC.', e: 'T_rec = T_detect + T_prop + T_calc + T_install'},
  {k: 'Câu 7 · chương 3', t: 'Phát hiện lỗi là phần dài nhất', b: 'Với OSPF hello, router chờ 40 giây không nghe thấy hàng xóm mới kết luận: hàng chục gigabyte rơi mất. BFD phát hiện trong 150 ms, cả quá trình hội tụ còn dưới nửa giây. Bảng tuyến càng lớn thì phần cài FIB càng dài.', e: 'T_detect: 40 s (hello) so với 0,15 s (BFD)',
    ask: {q: 'Thành phần nào trong (3.19) giảm mạnh nhất khi bật BFD?', o: ['T_calc', 'T_detect', 'T_install'], a: 1, e: 'BFD chỉ làm nhanh khâu phát hiện, nhưng đó thường là khâu dài nhất khi dựa vào hello của giao thức định tuyến.'}},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'});
at(10, {cap: 1}); at(14, {click: 'ecmp'}); at(18, {click: 'ecmp'});
at(21, {cap: 2}); at(23, {click: 'voi'}); at(29, {slide: 'n', to: LOGC(64, 1, 256), dur: 1.5});
at(33, {cap: 3}); at(34, {click: 'v_tren'}); at(35, {slide: 'cA', to: 29 / 49, dur: 1.5}); at(40, {slide: 'cA', to: 9 / 49, dur: 1}); at(42, {slide: 'cB', to: 0, dur: 1.5}); at(46, {slide: 'cB', to: 9 / 49, dur: 1});
at(48, {cap: 4}); at(48.5, {click: 'v_hero'}); at(50, {click: 'cat'});
at(60, {cap: 5}); at(60.5, {click: 'noi'}); at(61, {click: 'hello'}); at(62, {click: 'cat'}); at(70, {click: 'noi'}); at(70.5, {click: 'bfd'});
ev.sort((a, b) => a.at - b.at);

sim.reset(); tinh(); S.dirty = false;
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 76}, firstView: 'hero', extra: [{key: 'cat', label: 'Cắt C1–DC'}],
  keys: {1: 'v_hero', 2: 'v_tren', c: 'cat'}});
