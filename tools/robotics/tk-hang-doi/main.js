// Thiết kế và hiệu năng mạng · bài 1.2 · Khi hàng đợi đầy.
// Theo giáo trình TEL1459 (Hoàng Trọng Minh, PTIT 2026), mục 1.6.2–1.6.4: biến thiên trễ (1.13, 1.14), tỉ lệ mất gói (1.15),
// xác suất lỗi gói theo BER (1.16), thông lượng (1.17) và goodput (1.18); câu hỏi 5 cuối chương 1.
// Cổng ra của router có bộ đệm K gói. Cảnh chạy một hàng đợi M/M/1/K thật, chậm lại để mắt theo được; bảng số chạy cùng mô
// hình ở tốc độ thật (100 Mbit/s, hàng chục nghìn gói) bằng kit/mang/mo-phong.js và đặt cạnh lời giải M/M/1/K.
import * as THREE from 'three';
import {createStage, MAT} from '../kit/stage.js';
import * as SH from '../kit/shapes.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {tag, picker, vn} from '../kit/soi.js';
import * as F from '../kit/mang/cong-thuc.js';
import {chayHangDoi, rng, expo} from '../kit/mang/mo-phong.js';
import {boCanh, P, MAU, LOGC, unlog, NHO} from '../kit/mang/canh.js';

const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 16, grid: 1, fade: 60, fov: 26, near: 0.2, far: 260});
const ui = createUI(app);
const root = new THREE.Group(); st.scene.add(root);
const B = boCanh(root), {mk, M} = B;

// ---------------- cảnh: ba nguồn → router biên có bộ đệm → đường WAN → máy nhận có bảng trễ từng gói
const NGUON = [{ten: 'thoại', mau: MAU.thoai, z: -2.6}, {ten: 'video', mau: MAU.video, z: 0}, {ten: 'dữ liệu nền', mau: MAU.nen, z: 2.6}];
const san = mk(SH.rbox(5.2, 0.12, 8.4, 0.05), M.floor); san.position.set(-7.6, 0.06, 0); tag('nguon', san);
// nguồn thoại: điện thoại để bàn; nguồn video: camera trên cột; nguồn nền: tủ máy chủ
{ const g = new THREE.Group(); g.position.set(-8.0, 0, NGUON[0].z); root.add(g); tag('nguon', g);
  mk(SH.rbox(1.3, 0.05, 0.7, 0.02), M.desk, g).position.y = 0.76; for (const lx of [-0.58, 0.58]) mk(SH.rbox(0.04, 0.72, 0.5, 0.01), M.panel, g).position.set(lx, 0.4, 0);
  mk(SH.rbox(0.34, 0.08, 0.26, 0.03), MAT.plastic('#2b4f7a'), g).position.set(-0.2, 0.83, 0); B.mayTinh(g, 0.3, 0.79, -0.05); }
{ const g = new THREE.Group(); g.position.set(-8.0, 0, NGUON[1].z); root.add(g); tag('nguon', g);
  mk(new THREE.CylinderGeometry(0.05, 0.07, 2.4, 12), M.panel, g).position.y = 1.2;
  const cam = mk(SH.rbox(0.5, 0.22, 0.24, 0.05), MAT.shell('#f1efe9'), g); cam.position.set(0.18, 2.35, 0); cam.rotation.z = -0.25;
  mk(new THREE.CylinderGeometry(0.07, 0.07, 0.05, 16), M.pc, g).position.set(0.44, 2.29, 0); }
B.tu(-8.0, NGUON[2].z, 2.0, 'nguon');
// router biên: tủ đứng, ống bộ đệm nằm ngang phía trên, thùng gói bị bỏ dưới đầu vào ống
const RT = P(0, 0, 0);
const rt = B.tu(RT.x, RT.z, 2.2, 'rt');
const XA = -3.0, XB = 0.15, YT = 2.75, ZT = 0.0; // trục ống: XA đầu vào (đuôi hàng), XB miệng ra (đầu hàng)
const ong = mk(new THREE.CylinderGeometry(0.3, 0.3, XB - XA + 0.3, 24, 1, true), new THREE.MeshPhysicalMaterial({color: '#dfe9f1', roughness: 0.1, transparent: true, opacity: 0.35, depthWrite: false})); ong.rotation.z = Math.PI / 2; ong.position.set((XA + XB) / 2, YT, ZT); ong.castShadow = false; tag('bodem', ong);
for (const x of [XA - 0.15, XB + 0.15]) { const r = mk(new THREE.TorusGeometry(0.3, 0.03, 8, 24), M.panel); r.rotation.y = Math.PI / 2; r.position.set(x, YT, ZT); tag('bodem', r); }
const mang = mk(SH.rbox(XB - XA + 0.3, 0.05, 0.5, 0.02), MAT.anod('#6e747b')); mang.position.set((XA + XB) / 2, YT - 0.33, ZT); tag('bodem', mang);
const giaDo = mk(SH.rbox(0.06, YT - 2.2, 0.06, 0.01), M.panel); giaDo.position.set(XB, 2.2 + (YT - 2.2) / 2, ZT);
const THUNG = P(-3.4, 0, 1.3);
{ const g = new THREE.Group(); g.position.copy(THUNG); root.add(g); tag('thung', g);
  const w = 1.1, d = 0.8, h = 0.5, t = 0.05, mat = MAT.plastic('#c9483c');
  mk(SH.rbox(w, t, d, 0.01), mat, g).position.y = t / 2;
  for (const [sx, sz, ww, dd] of [[0, -d / 2, w, t], [0, d / 2, w, t], [-w / 2, 0, t, d], [w / 2, 0, t, d]]) mk(SH.rbox(ww, h, dd, 0.01), mat, g).position.set(sx, h / 2, sz); }
// cáp vào từ ba nguồn tới đuôi ống; cáp WAN từ router tới máy nhận
const cv = NGUON.map((n, i) => B.cap([P(-7.6, i === 1 ? 2.2 : 1.0, n.z + 0.3), P(-6.8, 0.2, n.z + 0.5), P(-5.2, 0.15, n.z * 0.5 + 0.6), P(-4.2, 1.4, 0.3), P(XA - 0.4, YT, ZT)], i === 1 ? M.fiber : M.cu, 0.045, 'vao'));
const WAN = B.cap([P(0.42, 1.7, 0.3), P(1.4, 1.3, 1.1), P(3.6, 1.8, 1.5), P(5.6, 1.5, 1.3), P(7.2, 1.3, 0.6)], M.wan, 0.07, 'wan');
const pGay = WAN.curve.getPoint(0.5); B.dauGay(pGay);
// máy nhận + bảng trễ từng gói (mỗi chấm một gói, cao theo trễ)
B.tu(7.6, 0.2, 2.0, 'nhan');
const BANG = P(8.4, 0, -1.9);
const bang = mk(SH.rbox(3.6, 2.4, 0.08, 0.03), MAT.shell('#fbfaf7')); bang.position.set(BANG.x, 2.0, BANG.z); bang.rotation.y = -0.35; tag('bang', bang);
for (const sx of [-1.6, 1.6]) { const c = mk(SH.rbox(0.06, 0.9, 0.06, 0.01), M.panel); c.position.set(BANG.x + sx * Math.cos(0.35), 0.45, BANG.z + sx * Math.sin(0.35)); }
const N_CHAM = 48;
const cham = new THREE.InstancedMesh(new THREE.SphereGeometry(0.045, 10, 8), new THREE.MeshStandardMaterial({color: '#ffffff', roughness: 0.4}), N_CHAM); cham.count = 0; root.add(cham); tag('bang', cham);
const vach = mk(SH.rbox(3.3, 0.012, 0.012, 0.004), MAT.plastic('#c2c5ca')); // đường trễ trung bình trên bảng
vach.rotation.y = -0.35;

// gói: một bể dùng lại
const N_GOI = 150;
const GOI = Array.from({length: N_GOI}, () => { const m = mk(SH.rbox(0.24, 0.14, 0.18, 0.03), new THREE.MeshStandardMaterial({color: '#888', roughness: 0.5})); m.visible = false; return {m, st: 'tu-do'}; });
tag('goi', ...GOI.map((g) => g.m));

// ---------------- mô hình
// Cổng ra WAN 100 Mbit/s (giả định), gói cỡ phân bố mũ trung bình L (giả định M/M/1/K), tiêu đề IPv4 + TCP 40 byte (RFC 791, RFC 9293).
const CW = 100e6, H_HDR = 40;
const S = {rho: 0.85, K: 16, L: 1000, ber: 1e-7, kq: null, dirty: true, t: 0,
  v: {q: [], bay: [], roi: [], thung: [], ntx: 0, nrx: 0, nmat: 0, tre: [], hist: [], next: 0, busyTo: 0, r: rng(5)}};
const MUV = 2.4; // gói/giây ở tốc độ 1×: đủ chậm để mắt theo từng gói
function tinh() {
  const Lb = F.byte(S.L), mu = CW / Lb, lam = S.rho * mu;
  const s = chayHangDoi({C: CW, Lbit: Lb, rho: S.rho, buffer: S.K, n: 30000, warm: 2000, seed: 17});
  const lt = F.mm1k(lam, mu, S.K);
  const pp = F.pLoiGoi(S.ber, Lb), T = lam * (1 - s.mat) * Lb, G = lam * (1 - s.mat) * (1 - pp) * F.byte(S.L - H_HDR);
  // đánh đổi bộ đệm: mất gói và thời gian trong hệ theo K ở tải hiện tại (lý thuyết M/M/1/K)
  const Ks = Array.from({length: 63}, (_, i) => i + 2), dd = Ks.map((K) => F.mm1k(lam, mu, K));
  S.kq = {s, lt, mu, lam, pp, T, G, Ks, dd, Wmax: Math.max(...dd.map((d) => d.W))};
}

// cảnh chậm: hàng đợi M/M/1/K chạy ở thời gian thật của cảnh (μ = MUV gói/s)
const T_VAO = 0.9, T_RA = 1.8, T_ROI = 0.9;
const lay = () => GOI.find((g) => g.st === 'tu-do');
function vStep(dt) {
  const V = S.v, lamV = S.rho * MUV;
  S.t += dt; const t = S.t;
  // nguồn sinh gói (Poisson), mỗi gói chạy dọc cáp vào trong T_VAO giây
  while (V.next <= t) { const g = lay(); if (g) { const n = Math.floor(V.r() * 3); Object.assign(g, {st: 'vao', t0: V.next, n, svc: expo(V.r, 1 / MUV)}); g.m.material.color.set(NGUON[n].mau); g.m.visible = true; g.m.scale.set(1, 1, 1); } V.next += expo(V.r, 1 / lamV); }
  for (const g of GOI) {
    if (g.st === 'vao' && t - g.t0 >= T_VAO) {
      V.ntx++;
      if (V.q.length >= S.K) { V.nmat++; Object.assign(g, {st: 'roi', t0: t, from: P(XA - 0.3, YT, ZT)}); g.m.material.color.set(MAU.bad); }
      else { g.st = 'q'; g.tDen = t; V.q.push(g); if (V.q.length === 1) V.busyTo = t + g.svc; }
    } else if (g.st === 'ra' && t - g.t0 >= T_RA) { g.st = 'tu-do'; g.m.visible = false; V.nrx++; V.tre.push(t - g.tDen); if (V.tre.length > N_CHAM) V.tre.shift(); }
    else if (g.st === 'roi' && t - g.t0 >= T_ROI) { g.st = 'thung'; V.thung.push(g); if (V.thung.length > 18) { const o = V.thung.shift(); o.st = 'tu-do'; o.m.visible = false; } }
  }
  // phục vụ: gói đầu hàng rời ống khi hết thời gian phát
  while (V.q.length && V.busyTo <= t) { const g = V.q.shift(); Object.assign(g, {st: 'ra', t0: V.busyTo}); if (V.q.length) V.busyTo = V.busyTo + V.q[0].svc; }
  if (!V.q.length) V.busyTo = t;
  V.hist.push(V.q.length); if (V.hist.length > 300) V.hist.shift();
}
function vReset() { const V = S.v; for (const g of GOI) { g.st = 'tu-do'; g.m.visible = false; } Object.assign(V, {q: [], thung: [], ntx: 0, nrx: 0, nmat: 0, tre: [], hist: [], next: S.t + 0.3, busyTo: S.t}); for (let i = 0; i < 250; i++) vStep(0.1); }

// ---------------- bảng
ui.header({code: '1.2', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · MỤC 1.6.2–1.6.4 · HÀNG ĐỢI HỮU HẠN', title: 'Khi hàng đợi đầy', sub: 'MẤT GÓI · JITTER · THÔNG LƯỢNG · GOODPUT', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['K', 'GÓI BỘ ĐỆM'], ['1.13–1.18', 'PHƯƠNG TRÌNH'], ['M/M/1/K', 'ĐỐI CHIẾU MÔ PHỎNG']]});
ui.panel(28, 112, 300, 210, 'CỔNG RA WAN · 100 MBIT/S', '01');
const slR = ui.slider('rho', 42, 148, 272, 'TẢI ĐƯA VÀO', {lw: 92, vw: 74});
const slK = ui.slider('K', 42, 180, 272, 'BỘ ĐỆM K', {lw: 92, vw: 74});
const slL = ui.slider('L', 42, 212, 272, 'CỠ GÓI TB', {lw: 92, vw: 74});
const t01 = ui.text(42, 240, '', 'sm', NHO);
ui.panel(28, 334, 300, 196, 'HÀNG ĐỢI TRONG CẢNH', '02');
const qChart = ui.chart(42, 370, 272, 80, {min: 0, max: 16, colors: [MAU.queue], zero: false});
const t02 = ui.text(42, 458, '', 'sm', NHO);
ui.panel(28, 542, 300, 224, 'MẤT GÓI · 1.15', '03');
const lossBars = ['MÔ PHỎNG', 'M/M/1/K'].map((n, i) => ui.bar(42, 578 + i * 20, 272, n, {lw: 76, vw: 70}));
ui.text(42, 626, 'TRONG CẢNH (ĐẾM GÓI)'); const lossBig = ui.text(42, 640, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t03 = ui.text(42, 676, '', 'sm', NHO);

ui.panel(1272, 112, 300, 236, 'BIẾN THIÊN TRỄ · 1.13, 1.14', '04');
const jSvg = ui.svg(1286, 146, 272, 86);
ui.text(1286, 242, 'JITTER TRUNG BÌNH J'); const jBig = ui.text(1286, 256, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t04 = ui.text(1286, 292, '', 'sm', NHO);
ui.panel(1272, 360, 300, 230, 'THÔNG LƯỢNG VÀ GOODPUT · 1.16–1.18', '05');
const slB = ui.slider('ber', 1286, 396, 272, 'BER', {lw: 92, vw: 74});
const tgBars = ['THÔNG LƯỢNG T', 'GOODPUT G'].map((n, i) => ui.bar(1286, 424 + i * 20, 272, n, {lw: 92, vw: 70}));
const t05 = ui.text(1286, 470, '', 'sm', NHO);
ui.panel(1272, 602, 300, 164, 'BỘ ĐỆM LỚN HƠN CÓ TỐT HƠN?', '06');
const kChart = ui.chart(1286, 636, 272, 64, {min: 0, max: 1, colors: [MAU.bad, MAU.prop], zero: false});
const t06 = ui.text(1286, 712, '', 'sm', NHO);
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_rt', 'BỘ ĐỆM'], ['v_bang', 'BẢNG TRỄ'], ['qua_tai', 'QUÁ TẢI'], ['dem_lon', 'BỘ ĐỆM LỚN'], ['xoa', 'ĐẾM LẠI']], 360, 120, 860);
ui.text(362, 664, 'TRẠNG THÁI');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts([{key: 'nguon', title: 'BA NGUỒN', sub: 'THOẠI · VIDEO · NỀN'}, {key: 'bodem', title: 'BỘ ĐỆM CỔNG RA', sub: ''}, {key: 'thung', title: 'GÓI BỊ BỎ', sub: 'TRÀN BỘ ĐỆM'}, {key: 'wan', title: 'WAN', sub: '100 MBIT/S'}, {key: 'bang', title: 'TRỄ TỪNG GÓI', sub: 'TẠI MÁY NHẬN'}]);
const boSub = ui.root.querySelectorAll('.call')[1]?.querySelector('span');

// ---------------- mô phỏng
// 3·10⁻⁸ thay cho 3e-8
const fmtE = (x) => { const [m, e] = x.toExponential(0).split('e'); return `${m === '1' ? '' : m + '·'}10${[...e].map((c) => (c === '-' ? '⁻' : '⁰¹²³⁴⁵⁶⁷⁸⁹'[c])).join('')}`; };
const RHO = [0.3, 1.5], KK = [2, 64], LL = [64, 1500];
const sim = {
  S,
  reset() { Object.assign(S, {rho: 0.85, K: 16, L: 1000, ber: 1e-7}); S.dirty = true; vReset(); },
  busy: () => false,
  isOn: () => false,
  act(k) {
    if (k === 'qua_tai') { S.rho = 1.3; S.dirty = true; }
    if (k === 'dem_lon') { S.K = 64; S.dirty = true; }
    if (k === 'xoa') Object.assign(S.v, {ntx: 0, nrx: 0, nmat: 0});
  },
  slide(k, t) {
    if (k === 'rho') S.rho = RHO[0] + t * (RHO[1] - RHO[0]);
    if (k === 'K') S.K = Math.round(KK[0] + t * (KK[1] - KK[0]));
    if (k === 'L') S.L = Math.round(LL[0] + t * (LL[1] - LL[0]));
    if (k === 'ber') S.ber = unlog(t, 1e-10, 1e-4);
    S.dirty = true;
  },
  keyDown() { return false; },
  step(dt) { if (S.dirty) { tinh(); S.dirty = false; } vStep(Math.min(dt, 0.5)); },
  shadowAt() { return new THREE.Vector3(0, 10, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq, V = S.v; if (!kq) return;
    const t = S.t, sp = (XB - XA) / S.K, sx = Math.min(1, (sp * 0.85) / 0.24);
    // gói trong cảnh
    for (const g of GOI) {
      const m = g.m; if (!m.visible) continue;
      if (g.st === 'vao') { m.position.copy(cv[g.n].curve.getPoint(Math.min(1, (t - g.t0) / T_VAO))); m.position.y += 0.12; m.scale.set(1, 1, 1); }
      else if (g.st === 'q') { const i = V.q.indexOf(g), tx = XB - (i + 0.5) * sp; m.scale.set(sx, 1, 1); m.position.lerp(P(tx, YT, ZT), 0.25); m.material.color.set(i === 0 ? MAU.tx : NGUON[g.n].mau); }
      else if (g.st === 'ra') { const u = Math.min(1, (t - g.t0) / T_RA); m.position.copy(WAN.curve.getPoint(u)); m.position.y += 0.14; m.scale.set(1, 1, 1); m.material.color.set(NGUON[g.n].mau); }
      else if (g.st === 'roi') { const u = Math.min(1, (t - g.t0) / T_ROI), j = GOI.indexOf(g); const to = THUNG.clone().add(P(((j * 37) % 7 - 3) * 0.1, 0.12, ((j * 53) % 5 - 2) * 0.1)); m.position.set(g.from.x + (to.x - g.from.x) * u, g.from.y + (to.y - g.from.y) * u * u + 0.5 * Math.sin(u * Math.PI) * (1 - u), g.from.z + (to.z - g.from.z) * u); m.rotation.z = u * 2.4; }
      else if (g.st === 'thung') { const k = V.thung.indexOf(g); m.position.set(THUNG.x - 0.4 + (k % 6) * 0.16, 0.12 + Math.floor(k / 6) * 0.14, THUNG.z - 0.15 + ((k * 7) % 3) * 0.15); m.rotation.z = 0.3 * ((k % 3) - 1); }
    }
    // bảng trễ: chấm theo thứ tự đến, cao theo trễ (chuẩn hoá theo trễ lớn nhất đang hiển thị)
    const tre = V.tre, tmax = Math.max(1e-6, ...tre), tb = tre.length ? tre.reduce((a, b) => a + b, 0) / tre.length : 0, d = new THREE.Object3D(), col = new THREE.Color();
    cham.count = tre.length;
    tre.forEach((v, i) => { const u = -1.55 + (i / (N_CHAM - 1)) * 3.1, y = 1.0 + (v / tmax) * 1.9; d.position.set(BANG.x + u * Math.cos(0.35), y, BANG.z + u * Math.sin(0.35) + 0.06); d.updateMatrix(); cham.setMatrixAt(i, d.matrix); cham.setColorAt(i, col.set(v > 1.5 * tb ? MAU.bad : MAU.prop)); });
    cham.instanceMatrix.needsUpdate = true; if (cham.instanceColor) cham.instanceColor.needsUpdate = true;
    const yv = 1.0 + (tb / tmax) * 1.9; vach.position.set(BANG.x, yv, BANG.z + 0.07); vach.visible = tre.length > 2;
    // đèn router đỏ khi bộ đệm đầy
    for (const l of rt.userData.leds) l.material = V.q.length >= S.K ? M.ledDo : M.led;
    // bảng 01
    slR.set((S.rho - RHO[0]) / (RHO[1] - RHO[0]), `ρ = ${vn(S.rho, 2)}`); slK.set((S.K - KK[0]) / (KK[1] - KK[0]), `${S.K} gói`); slL.set((S.L - LL[0]) / (LL[1] - LL[0]), `${vn(S.L, 0)} byte`);
    t01.innerHTML = `Tải đưa vào ρ = λ/μ có thể vượt 1: nguồn không biết cổng đang đầy. Bộ đệm K gói gồm cả gói đang phát. Gói ${vn(S.L, 0)} byte trên 100 Mbit/s: μ = ${vn(kq.mu, 0)} gói/s.`;
    // bảng 02
    qChart.lim.max = Math.max(4, S.K); qChart.set([V.hist], {extra: (Y, w) => `<line x1="0" x2="${w}" y1="${Y(S.K)}" y2="${Y(S.K)}" stroke="${MAU.bad}" stroke-dasharray="3 3"/><text x="${w}" y="${Y(S.K) - 3}" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="${MAU.bad}">K = ${S.K}</text>`});
    t02.innerHTML = `Số gói trong ống theo thời gian (cảnh chạy chậm, μ = ${vn(MUV, 1)} gói/s ở 1×). ${S.rho > 1 ? 'Tải vượt 1: hàng chạm vạch K và ở lì đó, gói đến sau bị bỏ.' : 'Hàng dao động ngẫu nhiên; mỗi lần chạm vạch K là có gói bị bỏ.'}`;
    // bảng 03
    const pm = kq.s.mat, pt = kq.lt.P, pv = V.ntx ? F.tiLeMat(V.ntx, V.ntx - V.nmat) : 0, pmx = Math.max(0.05, pm, pt) * 1.15;
    lossBars[0].set(pm / pmx, `${vn(pm * 100, 2)} %`, MAU.bad); lossBars[1].set(pt / pmx, `${vn(pt * 100, 2)} %`, C.ink);
    lossBig.textContent = `${vn(pv * 100, 1)} %`;
    t03.innerHTML = `P<sub>mất</sub> = 1 − N<sub>rx</sub>/N<sub>tx</sub>: trong cảnh ${V.ntx} gói đến cổng, ${V.nmat} gói bị bỏ. Hai thanh trên: ${kq.s.n.toLocaleString('vi-VN')} gói ở tốc độ thật, mô phỏng so với lời giải M/M/1/K. ${S.rho > 1 ? `Khi ρ > 1, mất gói tiến tới 1 − 1/ρ = ${vn((1 - 1 / S.rho) * 100, 1)} %: phần vượt công suất phải rơi đi đâu đó.` : ''}`;
    // bảng 04: dải trễ của 60 gói liên tiếp từ mô phỏng thật, đường ngang là trễ trung bình
    const mau = kq.s.mau.slice(0, 60), mx = Math.max(...mau), W = 272; let g = `<rect x="0" y="0" width="${W}" height="80" fill="${C.chart}" stroke="${C.line}"/>`;
    mau.forEach((v, i) => { const x = 4 + (i / 59) * (W - 8), y = 76 - (v / mx) * 70; if (i) { const v0 = mau[i - 1], y0 = 76 - (v0 / mx) * 70; g += `<line x1="${x - (W - 8) / 59}" y1="${y0}" x2="${x}" y2="${y}" stroke="${C.line}" stroke-width=".8"/>`; } g += `<circle cx="${x}" cy="${y}" r="2.2" fill="${MAU.prop}"/>`; });
    const yW = 76 - (kq.s.W / mx) * 70; g += `<line x1="0" x2="${W}" y1="${yW}" y2="${yW}" stroke="${C.ink}" stroke-dasharray="3 3"/><text x="${W - 2}" y="${yW - 3}" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="${C.ink}">TB ${F.fmtThoiGian(kq.s.W, 2)}</text>`;
    jSvg.innerHTML = g;
    jBig.textContent = F.fmtThoiGian(kq.s.jitter, 2);
    t04.innerHTML = `J = trung bình |D<sub>i</sub> − D<sub>i−1</sub>| trên ${kq.s.n.toLocaleString('vi-VN')} gói liên tiếp (1.14). Trễ trung bình ${F.fmtThoiGian(kq.s.W, 2)} (M/M/1/K: ${F.fmtThoiGian(kq.lt.W, 2)}). Jitter tăng theo tải dù trễ trung bình còn trong ngưỡng: thoại và video hội nghị nhạy với cái này.`;
    // bảng 05
    slB.set(LOGC(S.ber, 1e-10, 1e-4), fmtE(S.ber));
    tgBars[0].set(kq.T / CW, F.fmtBps(kq.T, 1), MAU.prop); tgBars[1].set(kq.G / CW, F.fmtBps(kq.G, 1), MAU.ok);
    t05.innerHTML = `Gói ${vn(F.byte(S.L), 0)} bit, BER ${fmtE(S.ber)}: P<sub>gói lỗi</sub> = 1 − (1 − P<sub>b</sub>)<sup>L</sup> = ${vn(kq.pp * 100, kq.pp < 0.01 ? 3 : 1)} % (1.16). G trừ mất gói, gói lỗi và ${H_HDR} byte tiêu đề IPv4 + TCP mỗi gói (1.18). Liên kết bận không có nghĩa ứng dụng nhận đủ (câu hỏi 5).`;
    // bảng 06
    const iK = S.K - 2; kChart.set([kq.dd.map((x) => x.P / Math.max(1e-9, kq.dd[0].P)), kq.dd.map((x) => x.W / kq.Wmax)], {cursor: iK / 62, extra: (Y, w) => `<text x="0" y="-4" font-family="JetBrains Mono" font-size="9" fill="${MAU.bad}">mất gói</text><text x="${w}" y="-4" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="${MAU.prop}">thời gian trong hệ</text><text x="0" y="76" font-family="JetBrains Mono" font-size="9" fill="#626773">K 2</text><text x="${w}" y="76" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#626773">64</text>`});
    t06.innerHTML = `Ở K = ${S.K}: mất ${vn(kq.dd[iK].P * 100, 2)} %, trễ ${F.fmtThoiGian(kq.dd[iK].W, 2)}. ${S.rho > 1 ? 'Quá tải thì bộ đệm lớn chỉ làm gói chờ lâu hơn mà vẫn mất gần như cũ.' : 'Bộ đệm lớn giảm mất gói nhưng gói được nhận chờ lâu hơn.'}`;
    // chế độ
    const day = V.q.length >= S.K;
    modeEl.textContent = day ? 'Bộ đệm đầy' : V.q.length ? `${V.q.length} gói chờ` : 'Cổng rảnh';
    modeSub.textContent = `ρ = ${vn(S.rho, 2)} · K = ${S.K} · trong cảnh: ${V.nrx} gói tới đích, ${V.nmat} gói bị bỏ`;
    alert.set(S.rho > 1 ? 'TẢI VƯỢT CÔNG SUẤT CỔNG' : day ? 'BỘ ĐỆM ĐẦY · GÓI MỚI BỊ BỎ' : '');
    if (boSub) boSub.textContent = `K = ${S.K} GÓI`;
    const W3 = (v) => st.project(v.x, v.y, v.z);
    ui.drawCallouts([
      {key: 'nguon', p: W3(P(-8.0, 2.6, -1.2)), dx: -50, dy: -50}, {key: 'bodem', p: W3(P((XA + XB) / 2, YT + 0.3, ZT)), dx: -20, dy: -70}, {key: 'thung', p: W3(P(THUNG.x, 0.5, THUNG.z)), dx: -60, dy: 50},
      {key: 'wan', p: W3(pGay.clone().add(P(0, 0.4, 0))), dx: 20, dy: -60}, {key: 'bang', p: W3(P(BANG.x, 3.3, BANG.z)), dx: 30, dy: -40},
    ], 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình Thiết kế và hiệu năng mạng (TEL1459, PTIT 2026), mục 1.6.2–1.6.4. Lời giải M/M/1/K: Jain, The Art of Computer Systems Performance Analysis (1991), chương 31. Tiêu đề tối thiểu IPv4 20 byte (RFC 791) và TCP 20 byte (RFC 9293). Tốc độ cổng 100 Mbit/s, cỡ gói phân bố mũ là giả định của bài.';
function cardOf(part) {
  const kq = S.kq; if (!kq) return null;
  const base = {src: SRC};
  if (part === 'bodem' || part === 'rt' || part === 'goi') return {...base, k: 'Bộ đệm cổng ra', t: `K = ${S.K} gói, kể cả gói đang phát`, b: 'Gói đến khi cổng bận thì xếp hàng; khi đã đủ K gói, gói mới bị bỏ (tail drop). Gói đầu hàng tô cam là gói đang được đẩy lên dây.', rows: [['Mất gói (mô phỏng)', () => `${vn(S.kq.s.mat * 100, 2)} %`], ['Mất gói (M/M/1/K)', () => `${vn(S.kq.lt.P * 100, 2)} %`], ['Trễ trong hệ', () => F.fmtThoiGian(S.kq.s.W, 2)]]};
  if (part === 'thung') return {...base, k: 'Gói bị bỏ', t: 'Tràn bộ đệm', b: 'Mất gói do tràn hàng đợi là một trong các nguyên nhân giáo trình liệt kê dưới (1.15), cùng với lỗi đường truyền, policing, định tuyến không ổn định và lỗi thiết bị.', rows: [['Trong cảnh', () => `${S.v.nmat} / ${S.v.ntx} gói`]]};
  if (part === 'bang') return {...base, k: 'Máy nhận', t: 'Trễ của từng gói', b: 'Mỗi chấm là một gói, cao theo thời gian từ lúc vào hàng tới lúc tới đích. Vạch ngang là trễ trung bình; chấm đỏ là gói trễ hơn 1,5 lần trung bình. Dao động của các chấm chính là jitter.', rows: [['Jitter J', () => F.fmtThoiGian(S.kq.s.jitter, 2)]]};
  if (part === 'wan') return {...base, k: 'Đường WAN', t: '100 Mbit/s', b: 'Thông lượng đo được là bit nhận chia thời gian (1.17); goodput chỉ đếm phần dữ liệu ứng dụng (1.18).', rows: [['Thông lượng', () => F.fmtBps(S.kq.T, 1)], ['Goodput', () => F.fmtBps(S.kq.G, 1)]]};
  if (part === 'nguon' || part === 'vao') return {...base, k: 'Ba nguồn', t: 'Thoại, video, dữ liệu nền', b: 'Ba nguồn dùng chung một cổng ra theo kiểu vào trước ra trước. Bài 5.2 tách chúng thành ba hàng ưu tiên.', rows: [['Tải đưa vào', () => `ρ = ${vn(S.rho, 2)}`]]};
  return null;
}

// ---------------- góc nhìn
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 0.5, ty: 1.4, tz: 0, az: -60 + 3 * Math.sin(t * 0.05), el: 28, d: 30, sx: 0, sy: -10} : {tx: 0.6, ty: 1.6, tz: -0.3, az: -12 + 4 * Math.sin(t * 0.05), el: 22, d: 34, sx: 0, sy: -10}),
  rt: () => ({tx: -1.6, ty: 1.9, tz: 0.4, az: -16, el: 14, d: 13, sx: 0, sy: -30}),
  bang: () => ({tx: 8.0, ty: 1.9, tz: -1.2, az: -20, el: 8, d: 13, sx: 0, sy: -30}),
};

// ---------------- bài giảng
const CAP = [
  {k: 'Mục 1.6 · bài toán', t: 'Một cổng ra, ba nguồn, một bộ đệm có hạn', b: 'Thoại, video và dữ liệu nền cùng đổ vào cổng WAN của router. Khi cổng bận, gói xếp hàng trong bộ đệm. Bộ đệm có K chỗ: đầy rồi thì gói mới bị bỏ. Bài này xem bốn thứ cùng đổi theo tải: mất gói, jitter, thông lượng và goodput.', e: 'hàng đợi M/M/1/K'},
  {k: 'Tràn bộ đệm', t: 'Gói đỏ rơi vào thùng', b: 'Theo dõi ống phía trên router: gói cam ở đầu ống đang được phát lên dây. Mỗi khi ống đủ K gói, gói vừa tới bị bỏ và rơi vào thùng đỏ. Ở tải 0,85 việc này thỉnh thoảng mới xảy ra.', e: 'P_mất = 1 − N_rx / N_tx   (1.15)'},
  {k: 'Quá tải', t: 'Nguồn không biết cổng đang đầy', b: 'Đẩy tải đưa vào lên 1,3. Hàng chạm vạch K và nằm lì ở đó; cứ ba gói đến thì gần một gói rơi. Phần vượt công suất cổng không thể đi đâu khác: mất gói tiến tới 1 − 1/ρ.', e: 'ρ > 1  →  P_mất → 1 − 1/ρ',
    ask: {q: 'Tải đưa vào gấp 1,25 lần công suất cổng, bộ đệm rất lớn. Lâu dài, khoảng bao nhiêu phần trăm gói bị bỏ?', o: ['Gần 0 % vì bộ đệm lớn', 'Khoảng 20 %', 'Khoảng 25 %'], a: 1, e: '1 − 1/1,25 = 0,2. Bộ đệm chỉ hoãn việc bỏ gói chứ không xoá được phần vượt công suất.'}},
  {k: 'Biến thiên trễ · 1.13, 1.14', t: 'Các chấm trên bảng nhảy lên xuống', b: 'Mỗi chấm ở máy nhận là trễ của một gói. Cùng một đường, cùng một cổng, nhưng gói gặp hàng dài thì trễ, gặp hàng ngắn thì nhanh. Độ dao động đó là jitter, và nó lớn dần theo tải dù trễ trung bình chưa vượt ngưỡng.', e: 'J = 1/(N−1) · Σ |D_i − D_(i−1)|'},
  {k: 'Lỗi bit · 1.16', t: 'Gói dài thì dễ hỏng hơn', b: 'Với BER P_b, gói L bit lỗi với xác suất 1 − (1 − P_b)^L, xấp xỉ L·P_b khi nhỏ. Đẩy BER lên 10⁻⁵: gói 1 500 byte hỏng khoảng 11 %, thanh goodput tụt xuống trong khi thông lượng gần như không đổi.', e: 'P_gói = 1 − (1 − P_b)^L ≈ L·P_b'},
  {k: 'Câu hỏi 5 · thông lượng và goodput', t: 'Liên kết bận chưa chắc ứng dụng nhận đủ', b: 'Thông lượng đếm mọi bit qua điểm đo. Goodput chỉ đếm dữ liệu ứng dụng: trừ tiêu đề, gói lỗi phải truyền lại, gói mất. Gói nhỏ 64 byte mất hơn nửa cho 40 byte tiêu đề, nên cùng một thông lượng, goodput thấp hơn nhiều.', e: 'T = B_rx / Δt   ·   G = B_app / Δt',
    ask: {q: 'Hạ cỡ gói từ 1 500 xuống 64 byte, giữ nguyên tải. Goodput thay đổi thế nào?', o: ['Tăng vì gói nhỏ ít lỗi', 'Giảm mạnh vì tiêu đề chiếm phần lớn mỗi gói', 'Không đổi'], a: 1, e: '64 byte có 40 byte tiêu đề: chỉ 24 byte, tức 37,5 %, là dữ liệu ứng dụng.'}},
  {k: 'Đánh đổi bộ đệm', t: 'Bộ đệm lớn không chữa được quá tải', b: 'Bấm Bộ đệm lớn: K = 64. Ở tải dưới 1, mất gói giảm hẳn nhưng gói được nhận phải chờ lâu hơn. Ở tải trên 1, bộ đệm lớn chỉ thêm trễ mà mất gói gần như cũ. Thiết kế đúng là giữ ρ dưới ngưỡng, không phải mua bộ đệm to.', e: 'bảng 06 · mất gói và thời gian trong hệ theo K'},
  {k: 'Kiểm mô hình', t: 'Ba con số, ba cách tính', b: 'Mất gói hiện ba lần: đếm gói trong cảnh chậm, mô phỏng 30 000 gói ở tốc độ thật, và lời giải M/M/1/K. Ba con số gần nhau thì mới tin mô hình. Lệch nhau là dấu hiệu phải xem lại giả định, như mục 5.1.3 dặn.', e: 'cảnh ≈ mô phỏng ≈ M/M/1/K'},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'});
at(10, {cap: 1}); at(10.5, {click: 'v_rt'}); at(13, {slide: 'K', to: (8 - 2) / 62, dur: 1.5});
at(24, {cap: 2}); at(24.5, {click: 'xoa'}); at(25, {slide: 'rho', to: (1.3 - 0.3) / 1.2, dur: 2});
at(38, {cap: 3}); at(38.5, {click: 'v_bang'}); at(39, {slide: 'rho', to: (0.85 - 0.3) / 1.2, dur: 1.5}); at(40, {slide: 'K', to: (16 - 2) / 62, dur: 1});
at(50, {cap: 4}); at(50.5, {click: 'v_hero'}); at(51, {slide: 'L', to: 1, dur: 1.2}); at(53, {slide: 'ber', to: LOGC(1e-5, 1e-10, 1e-4), dur: 2}); at(59, {slide: 'ber', to: LOGC(1e-7, 1e-10, 1e-4), dur: 1});
at(62, {cap: 5}); at(63, {slide: 'L', to: 0, dur: 2}); at(70, {slide: 'L', to: (1000 - 64) / 1436, dur: 1.2});
at(74, {cap: 6}); at(74.5, {click: 'dem_lon'}); at(80, {slide: 'rho', to: (1.3 - 0.3) / 1.2, dur: 1.5}); at(85, {slide: 'rho', to: (0.85 - 0.3) / 1.2, dur: 1}); at(86, {slide: 'K', to: (16 - 2) / 62, dur: 1});
at(88, {cap: 7}); at(88.5, {click: 'xoa'});
ev.sort((a, b) => a.at - b.at);

sim.reset(); tinh(); S.dirty = false;
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 100}, firstView: 'hero', extra: [{key: 'qua_tai', label: 'Quá tải'}],
  keys: {1: 'v_hero', 2: 'v_rt', 3: 'v_bang', q: 'qua_tai'}});
