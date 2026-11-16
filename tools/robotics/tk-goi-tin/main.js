// Thiết kế và hiệu năng mạng · bài 1.1 · Gói tin qua ba chặng.
// Theo giáo trình TEL1459 (Hoàng Trọng Minh, PTIT 2026), mục 1.5–1.6: độ trễ đầu cuối (1.10), trễ truyền (1.11), thời gian đáp
// ứng (1.12), mức sử dụng và dư địa (1.7, 1.9). Mọi con số trên màn hình tính từ kit/mang/cong-thuc.js; trễ hàng đợi lấy từ
// mô phỏng sự kiện rời rạc kit/mang/mo-phong.js, đặt cạnh lời giải M/M/1 để người học thấy mô phỏng khớp lý thuyết.
import * as THREE from 'three';
import {createStage, MAT} from '../kit/stage.js';
import * as SH from '../kit/shapes.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {tag, picker, vn} from '../kit/soi.js';
import * as F from '../kit/mang/cong-thuc.js';
import {chayHangDoi} from '../kit/mang/mo-phong.js';

const PI = Math.PI;
const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 22, grid: 1, fade: 70, fov: 26, near: 0.2, far: 300});
const ui = createUI(app);
const root = new THREE.Group(); st.scene.add(root);
const mk = (geo, mat, parent = root) => { const m = new THREE.Mesh(geo, mat); m.castShadow = m.receiveShadow = true; parent.add(m); return m; };
const COL = {prop: '#3B6EA8', tx: '#E3562A', queue: '#B3261E', proc: '#8A8F98'};
const TEN = {prop: 'lan truyền', tx: 'truyền', queue: 'hàng đợi', proc: 'xử lý'};

// ---------------- vật liệu
const M = {floor: MAT.satin('#d9d4c8'), wall: MAT.shell('#f1efe9'), wall2: MAT.shell('#e6e2d8'), glass: MAT.glass('#a9c3d3'), rack: MAT.dark(), panel: MAT.anod('#9aa0a6'), desk: MAT.satin('#c9b79c'),
  pc: MAT.dark(), screen: new THREE.MeshBasicMaterial({color: '#cfe3f2'}), cu: MAT.plastic('#8f969e'), fiber: MAT.plastic('#e8c547'), wan: MAT.plastic('#3b6ea8'),
  led: new THREE.MeshBasicMaterial({color: '#2fbf71'}), probe: new THREE.MeshStandardMaterial({color: COL.tx, emissive: COL.tx, emissiveIntensity: 0.55, roughness: 0.4}),
  bg: new THREE.MeshStandardMaterial({color: '#b9bec6', roughness: 0.6}), qpk: new THREE.MeshStandardMaterial({color: COL.queue, roughness: 0.5}), tube: new THREE.MeshPhysicalMaterial({color: '#ffffff', roughness: 0.1, transparent: true, opacity: 0.22, depthWrite: false})};

// ---------------- cảnh: lớp học → tủ truy nhập → phòng máy (router biên) → đường WAN → trung tâm dữ liệu
function nha(x, z, w, d, h, part, mat = M.wall) {
  // nhà cắt mặt trước: sàn, tường sau, hai tường bên thấp dần về phía trước, không mái, để thấy thiết bị bên trong
  const g = new THREE.Group(); g.position.set(x, 0, z); root.add(g); const t = 0.18;
  mk(SH.rbox(w, 0.16, d, 0.05), M.floor, g).position.y = 0.08;
  mk(SH.rbox(w, h, t, 0.05), mat, g).position.set(0, h / 2, -d / 2 + t / 2);
  for (const sx of [-1, 1]) { const s2 = new THREE.Shape([new THREE.Vector2(-d / 2, 0), new THREE.Vector2(d / 2, 0), new THREE.Vector2(d / 2, h * 0.35), new THREE.Vector2(-d / 2, h)]); const m = mk(new THREE.ExtrudeGeometry(s2, {depth: t, bevelEnabled: false}), mat, g); m.rotation.y = -PI / 2; m.position.set(sx * (w / 2) + (sx > 0 ? 0 : t), 0, 0); }
  const kinh = mk(new THREE.PlaneGeometry(w * 0.7, h * 0.32), M.glass, g); kinh.position.set(0, h * 0.62, -d / 2 + t + 0.01);
  tag(part, g); return g;
}
function tu(x, z, h = 2.0, part) {
  const g = new THREE.Group(); g.position.set(x, 0, z); root.add(g);
  mk(SH.rbox(0.8, h, 0.9, 0.05), M.rack, g).position.y = h / 2;
  for (let i = 0; i < 5; i++) { const p = mk(SH.rbox(0.66, 0.09, 0.04, 0.01), M.panel, g); p.position.set(0, 0.4 + i * 0.3, 0.46); const l = mk(new THREE.SphereGeometry(0.018, 8, 6), M.led, g); l.position.set(0.26, 0.4 + i * 0.3, 0.49); }
  tag(part, g); return g;
}
const lop = nha(-11, 0, 6, 5, 3.2, 'lop');
// lớp học: ba dãy bàn, mỗi bàn một máy; máy ở bàn đầu bên trái là máy học viên của bài
const pc = new THREE.Group();
for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
  const bx = -1.8 + c * 1.8, bz = -1.2 + r * 1.2;
  mk(SH.rbox(1.4, 0.05, 0.6, 0.02), M.desk, lop).position.set(bx, 0.76, bz);
  for (const lx of [-0.62, 0.62]) mk(SH.rbox(0.04, 0.72, 0.5, 0.01), M.panel, lop).position.set(bx + lx, 0.4, bz);
  const g = r === 2 && c === 0 ? pc : new THREE.Group(); lop.add(g); g.position.set(bx, 0.79, bz - 0.1);
  mk(SH.rbox(0.56, 0.34, 0.03, 0.01), M.pc, g).position.set(0, 0.28, 0); mk(new THREE.PlaneGeometry(0.5, 0.28), M.screen, g).position.set(0, 0.28, 0.017); mk(SH.rbox(0.05, 0.12, 0.05, 0.01), M.pc, g).position.y = 0.06;
}
tag('pc', pc);
const sw = tu(-6.6, 1.2, 1.6, 'sw');
const phongMay = nha(-1.2, -0.5, 4.5, 4, 3.0, 'phongmay', M.wall2);
const rt = tu(0.6, 1.4, 2.0, 'rt');
const dc = nha(12, -1, 6.5, 5.5, 4.2, 'dc', M.wall2);
const sv = tu(14.2, 2.0, 2.2, 'sv');
for (let k = 0; k < 5; k++) for (const zz of [-1.4, 0.4]) if (!(k === 0 && zz === 0.4)) tu(10.2 + k * 0.95, zz + 1.6, 2.2, 'sv');
mk(SH.rbox(1.2, 1.8, 0.8, 0.06), MAT.shell('#dfe3e6'), dc).position.set(-2.4, 1.0, -2.0); // tủ làm mát

// tuyến cáp: ba chặng
const P = (x, y, z) => new THREE.Vector3(x, y, z);
const tuyen = [
  {ten: 'Chặng 1 · cáp đồng trong nhà', curve: new THREE.CatmullRomCurve3([P(-12.8, 1.0, 1.5), P(-12.8, 0.2, 2.2), P(-8.6, 0.1, 2.4), P(-6.6, 0.2, 1.75), P(-6.6, 0.9, 1.68)]), mat: M.cu, r: 0.05, part: 'c1'},
  {ten: 'Chặng 2 · cáp quang giữa hai tòa', curve: new THREE.CatmullRomCurve3([P(-6.6, 1.3, 1.68), P(-6.0, 0.15, 2.4), P(-3, 0.12, 2.8), P(0, 0.15, 2.4), P(0.6, 1.0, 1.88)]), mat: M.fiber, r: 0.045, part: 'c2'},
  {ten: 'Chặng 3 · đường WAN tới trung tâm dữ liệu', curve: new THREE.CatmullRomCurve3([P(0.6, 1.6, 1.88), P(2.2, 2.2, 2.6), P(5.6, 3.2, 3.2), P(8.6, 2.2, 3.0), P(10.2, 1.7, 2.5)]), mat: M.wan, r: 0.07, part: 'c3'},
];
for (const t of tuyen) tag(t.part, mk(new THREE.TubeGeometry(t.curve, 120, t.r, 10), t.mat));
// dấu "không theo tỉ lệ" giữa đường WAN
const gay = new THREE.Group(); root.add(gay);
const pB = tuyen[2].curve.getPoint(0.5); gay.position.copy(pB);
for (const dx of [-0.18, 0.18]) { const m = mk(new THREE.BoxGeometry(0.04, 0.7, 0.7), new THREE.MeshBasicMaterial({color: '#ffffff'}), gay); m.position.x = dx; m.rotation.z = 0.5; }

// cột hàng đợi ở đầu ra mỗi chặng (máy học viên, tủ truy nhập, router biên)
const cotQ = [P(-13.6, 0.8, 1.3), P(-6.6, 1.6, 1.2), P(0.6, 2.0, 1.4)].map((p, i) => {
  const g = new THREE.Group(); g.position.copy(p); g.position.y += 0.15; root.add(g);
  const ong = mk(new THREE.CylinderGeometry(0.2, 0.2, 2.4, 20, 1, true), M.tube, g); ong.position.y = 1.2; ong.castShadow = false;
  const pk = Array.from({length: 16}, (_, k) => { const m = mk(SH.rbox(0.28, 0.12, 0.2, 0.02), M.qpk, g); m.position.y = 0.09 + k * 0.145; m.visible = false; return m; });
  tag(`q${i}`, g); return {g, pk};
});
// gói thăm dò và gói nền trên đường WAN
const probe = mk(SH.rbox(0.42, 0.22, 0.3, 0.04), M.probe); probe.visible = false; tag('probe', probe);
const nen = Array.from({length: 28}, () => { const m = mk(SH.rbox(0.26, 0.14, 0.2, 0.03), M.bg); m.visible = false; return m; });

// ---------------- mô hình: ba chặng
// Chặng 1, 2 cố định; chặng 3 (WAN) và cỡ gói chỉnh được. Thời gian xử lý mỗi nút và tải chặng 1, 2 là giả định của bài.
const S = {L: 1500, C3: 100e6, d3: 300e3, rho3: 0.6, tSv: 0.03, eta: 0.8, nen: 420, t: 0, phase: 0, trip: [], auto: true, kq: null, tDirty: true, curve: null, cKey: ''};
const CHANG = () => [
  {ten: 'Máy học viên → tủ truy nhập', vat: 'cáp đồng', C: 1e9, d: 60, v: F.V_CAP, rho: 0.1, proc: 5e-6},
  {ten: 'Tủ truy nhập → router biên', vat: 'cáp quang', C: 10e9, d: 2e3, v: F.V_CAP, rho: 0.3, proc: 20e-6},
  {ten: 'Router biên → máy chủ học liệu', vat: 'đường WAN', C: S.C3, d: S.d3, v: F.V_CAP, rho: S.rho3, proc: 20e-6},
];
const L_NEN = F.byte(1000); // gói nền trung bình 1 000 byte, cỡ phân bố mũ (giả định M/M/1)
function tinh() {
  const ch = CHANG(), Lb = F.byte(S.L);
  const hop = ch.map((h, i) => {
    const s = h.rho > 0.001 ? chayHangDoi({C: h.C, Lbit: L_NEN, rho: h.rho, n: 16000, warm: 1500, seed: 31 + i}) : {Wq: 0, p95: 0, lam: 0};
    const lt = F.mm1(h.rho * h.C / L_NEN, h.C / L_NEN);
    return {...h, prop: F.dLanTruyen(h.d, h.v), tx: F.dTruyen(Lb, h.C), queue: s.Wq, queueLT: lt.Wq, p95: s.p95, proc: h.proc, Lq: s.lam * s.Wq};
  });
  const tong = F.dDauCuoi(hop);
  S.kq = {hop, tong, rtt: 2 * tong.tong, resp: F.tDapUng({mang: 2 * tong.tong, mayChu: S.tSv})};
  // đường trễ hàng đợi theo ρ của chặng WAN: lý thuyết liền, mô phỏng chấm
  const key = `${S.C3}`;
  if (key !== S.cKey) {
    S.cKey = key; const mu = S.C3 / L_NEN;
    S.curve = {lt: Array.from({length: 60}, (_, i) => { const r = 0.02 + (i / 59) * 0.93; return F.mm1(r * mu, mu).Wq; }), sim: [0.2, 0.4, 0.6, 0.8, 0.9].map((r, i) => [r, chayHangDoi({C: S.C3, Lbit: L_NEN, rho: r, n: 16000, warm: 1500, seed: 71 + i}).Wq])};
  }
  // kịch bản phát lại chậm của gói thăm dò: mỗi chặng bốn pha; thời lượng phát theo tỉ lệ đóng góp (tối thiểu 0,3 s)
  const tot = tong.tong; S.trip = [];
  hop.forEach((h, i) => { for (const k of ['queue', 'tx', 'prop', 'proc']) S.trip.push({hop: i, k, dt: 0.3 + 5 * (h[k] / tot)}); });
  S.tripT = S.trip.reduce((a, b) => a + b.dt, 0) + 1.2;
}

// ---------------- bảng
ui.header({code: 'T2', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · TIẾT 2 · MỤC 1.5.2, 1.6.1 · ĐỘ TRỄ ĐẦU CUỐI', title: 'Gói tin qua ba chặng', sub: 'LAN TRUYỀN · TRUYỀN · HÀNG ĐỢI · XỬ LÝ', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['3', 'CHẶNG'], ['1.10', 'PHƯƠNG TRÌNH'], ['M/M/1', 'ĐỐI CHIẾU MÔ PHỎNG']]});
ui.panel(28, 112, 300, 232, 'ĐƯỜNG ĐI · BA CHẶNG', '01');
const hopRows = [0, 1, 2].map((i) => { const y = 146 + i * 62; ui.rule(42, y + 52, 272); return {ten: ui.text(42, y, '', 'v', 'font-size:11.5px;font-weight:600;width:272px;white-space:nowrap'), sub: ui.text(42, y + 18, '', 'v', 'font-size:10.5px;color:#626773;width:272px;white-space:nowrap'), tai: ui.bar(42, y + 34, 272, 'TẢI NỀN', {lw: 60, vw: 62})}; });
ui.panel(28, 356, 300, 196, 'THAM SỐ', '02');
const slL = ui.slider('L', 42, 392, 272, 'CỠ GÓI', {lw: 92, vw: 74});
const slC = ui.slider('C3', 42, 424, 272, 'TỐC ĐỘ WAN', {lw: 92, vw: 74});
const slD = ui.slider('d3', 42, 456, 272, 'ĐỘ DÀI WAN', {lw: 92, vw: 74});
const slR = ui.slider('rho3', 42, 488, 272, 'TẢI NỀN WAN', {lw: 92, vw: 74});
ui.text(42, 516, 'Chặng 1, 2 giữ cố định. Thời gian xử lý mỗi nút là giả định.', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:9.5px;width:272px');
ui.panel(28, 564, 300, 202, 'THỜI GIAN ĐÁP ỨNG · 1.12', '03');
const slSv = ui.slider('tSv', 42, 600, 272, 'MÁY CHỦ XỬ LÝ', {lw: 92, vw: 74});
const respBars = ['MẠNG ĐI VỀ', 'MÁY CHỦ'].map((n, i) => ui.bar(42, 628 + i * 20, 272, n, {lw: 76, vw: 70}));
ui.text(42, 672, 'THỜI GIAN ĐÁP ỨNG'); const respBig = ui.text(42, 686, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const respTxt = ui.text(42, 722, '', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:9.5px;white-space:normal;width:272px;line-height:1.45');

ui.panel(1272, 112, 300, 300, 'NGÂN SÁCH TRỄ · 1.10', '04');
const budSvg = ui.svg(1286, 146, 272, 150);
ui.text(1286, 306, 'TRỄ ĐẦU CUỐI MỘT CHIỀU'); const totBig = ui.text(1286, 320, '', 'mo', 'position:absolute;font-size:28px;font-weight:700');
const totTxt = ui.text(1286, 360, '', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:9.5px;white-space:normal;width:272px;line-height:1.45');
ui.panel(1272, 424, 300, 178, 'HÀNG ĐỢI WAN · MÔ PHỎNG VÀ M/M/1', '05');
const qChart = ui.chart(1286, 460, 272, 92, {min: 0, max: 1, colors: [C.ink], zero: false});
const qTxt = ui.text(1286, 560, '', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:9.5px;white-space:normal;width:272px;line-height:1.45');
ui.panel(1272, 614, 300, 152, 'DƯ ĐỊA LIÊN KẾT · 1.7, 1.9', '06');
const slN = ui.slider('nen', 1286, 650, 272, 'DỮ LIỆU NỀN', {lw: 92, vw: 74});
const slE = ui.slider('eta', 1286, 676, 272, 'η MỤC TIÊU', {lw: 92, vw: 74});
const dSvg = ui.svg(1286, 696, 272, 30);
const dTxt = ui.text(1286, 732, '', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:9.5px;white-space:normal;width:272px;line-height:1.45');
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_lop', 'LỚP HỌC'], ['v_wan', 'ĐƯỜNG WAN'], ['v_dc', 'TRUNG TÂM DỮ LIỆU'], ['go', 'GỬI GÓI TIN'], ['bt14', 'BT 1.4']], 360, 120, 860);
ui.text(362, 664, 'PHA');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts([{key: 'lop', title: 'LỚP HỌC', sub: 'MÁY HỌC VIÊN'}, {key: 'sw', title: 'TỦ TRUY NHẬP', sub: 'SWITCH 1 GBIT/S'}, {key: 'rt', title: 'ROUTER BIÊN', sub: 'PHÒNG MÁY'}, {key: 'wan', title: 'WAN', sub: ''}, {key: 'dc', title: 'TRUNG TÂM DỮ LIỆU', sub: 'MÁY CHỦ HỌC LIỆU'}]);
const wanSub = ui.root.querySelectorAll('.call')[3]?.querySelector('span');

// ---------------- mô phỏng
const LOGC = (x, a, b) => Math.log(x / a) / Math.log(b / a);   // thang log cho thanh trượt
const unlog = (t, a, b) => a * Math.pow(b / a, t);
const sim = {
  S,
  reset() { Object.assign(S, {L: 1500, C3: 100e6, d3: 300e3, rho3: 0.6, tSv: 0.03, eta: 0.8, nen: 420, auto: true, t: 0}); S.tDirty = true; },
  busy: () => false,
  isOn: () => false,
  act(k) {
    if (k === 'go') { S.t = 0; S.auto = true; return; }
    if (k === 'bt14') { S.nen = 420; S.eta = 0.8; return; }
  },
  slide(k, t) {
    if (k === 'L') S.L = Math.round(64 + t * (1500 - 64));
    if (k === 'C3') S.C3 = unlog(t, 10e6, 1e9);
    if (k === 'd3') S.d3 = unlog(t, 1e3, 1000e3);
    if (k === 'rho3') S.rho3 = Math.min(0.95, t * 0.95);
    if (k === 'tSv') S.tSv = t * 0.2;
    if (k === 'nen') S.nen = Math.round(t * 600);
    if (k === 'eta') S.eta = 0.5 + t * 0.45;
    if (k !== 'nen' && k !== 'eta' && k !== 'tSv') S.tDirty = true; else if (k === 'tSv') S.kq.resp = F.tDapUng({mang: S.kq.rtt, mayChu: S.tSv});
  },
  keyDown() { return false; },
  step(dt) {
    if (S.tDirty) { tinh(); S.tDirty = false; }
    S.t += dt; if (S.t > S.tripT) S.t = 0;
  },
  shadowAt() { return new THREE.Vector3(0, 10, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq; if (!kq) return;
    // gói thăm dò: tìm pha hiện tại
    let t = S.t, ph = null, u = 0;
    for (const p of S.trip) { if (t < p.dt) { ph = p; u = t / p.dt; break; } t -= p.dt; }
    probe.visible = !!ph;
    if (ph) {
      const cv = tuyen[ph.hop].curve, q = cotQ[ph.hop].g.position;
      if (ph.k === 'queue') { probe.position.set(q.x, q.y + 0.25 + (1 - u) * 1.6, q.z + 0.35); probe.scale.set(1, 1, 1); }
      else if (ph.k === 'tx') { const a = cv.getPoint(0.02); probe.position.lerpVectors(q.clone().add(P(0, 0.25, 0.35)), a, u); probe.scale.set(1 + u * 1.5, 1, 1); }
      else if (ph.k === 'prop') { probe.position.copy(cv.getPoint(0.02 + 0.96 * u)); probe.position.y += 0.18; probe.scale.set(2.5 - 1.5 * u, 1, 1); }
      else { probe.position.copy(cv.getPoint(1)); probe.position.y += 0.3 + 0.08 * Math.sin(u * PI * 6); probe.scale.set(1, 1, 1); }
      M.probe.color.set(COL[ph.k]); M.probe.emissive.set(COL[ph.k]);
    }
    // cột hàng đợi: số gói chờ trung bình (Little: L_q = λ·W_q) từ mô phỏng
    kq.hop.forEach((h, i) => { const n = Math.min(16, Math.round(h.Lq)); cotQ[i].pk.forEach((m, k) => { m.visible = k < n; }); });
    // gói nền trên đường WAN: số gói nhìn thấy theo tải
    const nVis = Math.round(S.rho3 * nen.length);
    nen.forEach((m, k) => { m.visible = k < nVis; if (!m.visible) return; const s = ((k / nen.length) + S.t * 0.08) % 1; m.position.copy(tuyen[2].curve.getPoint(s)); m.position.y += 0.15; });
    // bảng 01
    kq.hop.forEach((h, i) => { hopRows[i].ten.textContent = `${i + 1} · ${h.ten}`; hopRows[i].sub.textContent = `${h.vat} · ${F.fmtBps(h.C, 0)} · ${h.d >= 1000 ? vn(h.d / 1000, 0) + ' km' : vn(h.d, 0) + ' m'}`; hopRows[i].tai.set(h.rho, `ρ = ${vn(h.rho, 2)}`, h.rho > 0.8 ? '#B3261E' : C.or); });
    slL.set((S.L - 64) / (1500 - 64), `${vn(S.L, 0)} byte`); slC.set(LOGC(S.C3, 10e6, 1e9), F.fmtBps(S.C3, 0)); slD.set(LOGC(S.d3, 1e3, 1000e3), `${vn(S.d3 / 1000, 0)} km`); slR.set(S.rho3 / 0.95, `ρ = ${vn(S.rho3, 2)}`);
    // bảng 03
    slSv.set(S.tSv / 0.2, F.fmtThoiGian(S.tSv, 0)); const R = kq.resp;
    respBars[0].set(kq.rtt / R, F.fmtThoiGian(kq.rtt, 1), COL.prop); respBars[1].set(S.tSv / R, F.fmtThoiGian(S.tSv, 1), '#626773');
    respBig.textContent = F.fmtThoiGian(R, 1);
    respTxt.innerHTML = `T<sub>đáp ứng</sub> = trễ mạng đi và về + xử lý máy chủ (1.12; giả định hai chiều như nhau). ${S.tSv > kq.rtt ? '<b>Máy chủ chiếm phần lớn</b>: nâng băng thông WAN gần như không đổi được thời gian người dùng chờ.' : '<b>Mạng chiếm phần lớn</b>: giảm độ dài đường đi hoặc tải hàng đợi mới có tác dụng.'}`;
    // bảng 04: thanh xếp chồng từng chặng
    const tot = kq.tong.tong; let g = ''; const W = 272;
    kq.hop.forEach((h, i) => {
      const y = i * 34; g += `<text x="0" y="${y + 10}" font-family="Be Vietnam Pro" font-size="10" font-weight="600" fill="${C.ink}">Chặng ${i + 1}</text><text x="${W}" y="${y + 10}" text-anchor="end" font-family="JetBrains Mono" font-size="10" fill="${C.ink}">${F.fmtThoiGian(h.prop + h.tx + h.queue + h.proc)}</text>`;
      let x = 0; for (const k of ['prop', 'tx', 'queue', 'proc']) { const w = (h[k] / tot) * W; if (w > 0.2) g += `<rect x="${x}" y="${y + 15}" width="${w}" height="9" fill="${COL[k]}"/>`; x += w; }
      g += `<rect x="0" y="${y + 15}" width="${W}" height="9" fill="none" stroke="${C.line}"/>`;
    });
    ['prop', 'tx', 'queue', 'proc'].forEach((k, j) => { const x = j * 68; g += `<rect x="${x}" y="110" width="9" height="9" fill="${COL[k]}"/><text x="${x + 13}" y="118" font-family="Be Vietnam Pro" font-size="9.5" fill="${C.ink}">${TEN[k]}</text><text x="${x + 13}" y="132" font-family="JetBrains Mono" font-size="9.5" fill="#626773">${F.fmtThoiGian(kq.tong[k], 2)}</text>`; });
    budSvg.innerHTML = g;
    totBig.textContent = F.fmtThoiGian(tot, 2);
    const big = ['prop', 'tx', 'queue', 'proc'].sort((a, b) => kq.tong[b] - kq.tong[a])[0];
    totTxt.innerHTML = `Phần lớn nhất: <b>${TEN[big]}</b> (${vn((kq.tong[big] / tot) * 100, 0)} %). Gói ${vn(S.L, 0)} byte trên WAN ${F.fmtBps(S.C3, 0)}: truyền L/C = ${F.fmtThoiGian(kq.hop[2].tx)} (1.11); ${vn(S.d3 / 1000, 0)} km ở 2·10⁸ m/s: lan truyền ${F.fmtThoiGian(kq.hop[2].prop)}.`;
    // bảng 05
    const cv = S.curve, ymax = Math.max(cv.lt[Math.round((S.rho3 / 0.95) * 59)] * 1.6, cv.lt[50]) || 1e-3;
    qChart.lim.max = ymax;
    qChart.set([cv.lt], {cursor: (S.rho3 - 0.02) / 0.93, extra: (Y, w) => cv.sim.map(([r, v]) => `<circle cx="${((r - 0.02) / 0.93) * w}" cy="${Math.max(0, Y(Math.min(v, ymax)))}" r="3" fill="${COL.queue}"/>`).join('') + `<text x="${w}" y="-4" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#626773">${F.fmtThoiGian(ymax, 1)}</text><text x="0" y="104" font-family="JetBrains Mono" font-size="9" fill="#626773">ρ 0</text><text x="${w}" y="104" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#626773">0,95</text>`});
    const h3 = kq.hop[2];
    qTxt.innerHTML = `Chấm: mô phỏng ${F.fmtThoiGian(h3.queue)} · đường: lý thuyết M/M/1 ${F.fmtThoiGian(h3.queueLT)} ở ρ = ${vn(S.rho3, 2)}. Trễ hàng đợi tăng vọt khi ρ tiến tới 1 (1.7).`;
    // bảng 06: BT 1.4, liên kết 1 Gbit/s mang thoại 80, video 300, nền chỉnh được
    slN.set(S.nen / 600, `${vn(S.nen, 0)} Mbit/s`); slE.set((S.eta - 0.5) / 0.45, vn(S.eta, 2));
    const parts = [[80, '#3B6EA8', 'thoại'], [300, '#E3562A', 'video'], [S.nen, '#8A8F98', 'nền']], sum = 80 + 300 + S.nen, rho = F.mucSuDung(sum * 1e6, 1e9), du = F.duDia(sum * 1e6, 1e9, S.eta) / 1e6;
    let dg = '', x = 0; for (const [v, c] of parts) { const w = Math.min(272 - x, (v / 1000) * 272); dg += `<rect x="${x}" y="4" width="${Math.max(0, w)}" height="14" fill="${c}"/>`; x += w; }
    dg += `<rect x="0" y="4" width="272" height="14" fill="none" stroke="${C.line}"/><line x1="${S.eta * 272}" x2="${S.eta * 272}" y1="0" y2="22" stroke="${C.ink}" stroke-width="1.5"/><text x="${S.eta * 272}" y="30" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="${C.ink}">η</text>`;
    dSvg.innerHTML = dg;
    dTxt.innerHTML = `80 + 300 + ${vn(S.nen, 0)} = ${vn(sum, 0)} Mbit/s trên 1 Gbit/s: <b>ρ = ${vn(rho, 2)}</b>. Dư địa tới η·C: <b>${du >= 0 ? vn(du, 0) + ' Mbit/s' : 'vượt ' + vn(-du, 0) + ' Mbit/s'}</b>${Math.abs(du) < 0.5 ? ' (BT 1.4: vừa chạm ngưỡng, không còn chỗ cho lưu lượng bùng nổ)' : ''}.`;
    // chế độ
    modeEl.textContent = ph ? `${TEN[ph.k][0].toUpperCase()}${TEN[ph.k].slice(1)}` : 'Đã tới máy chủ';
    modeSub.textContent = ph ? `chặng ${ph.hop + 1} · ${F.fmtThoiGian(kq.hop[ph.hop][ph.k])} · phát lại chậm, thời lượng từng pha theo tỉ lệ đóng góp` : `trễ đầu cuối ${F.fmtThoiGian(tot)} · bấm Gửi gói tin để xem lại`;
    alert.set(S.rho3 >= 0.9 ? 'TẢI WAN GẦN 1 · HÀNG ĐỢI DÀI' : '');
    if (wanSub) wanSub.textContent = `${vn(S.d3 / 1000, 0)} KM · KHÔNG THEO TỈ LỆ`;
    const W3 = (v) => st.project(v.x, v.y, v.z);
    ui.drawCallouts([
      {key: 'lop', p: W3(P(-11, 3.3, 0)), dx: -60, dy: -50}, {key: 'sw', p: W3(P(-6.6, 1.7, 1.2)), dx: -40, dy: -70}, {key: 'rt', p: W3(P(0.6, 2.1, 1.4)), dx: 30, dy: -80},
      {key: 'wan', p: W3(pB.clone().add(P(0, 0.4, 0))), dx: 20, dy: -60}, {key: 'dc', p: W3(P(12, 4.3, -1)), dx: 40, dy: -40},
    ], 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình Thiết kế và hiệu năng mạng (TEL1459, PTIT 2026), mục 1.5–1.6. Tốc độ lan truyền 2·10⁸ m/s: Kurose & Ross, Computer Networking (2021), mục 1.4. Tải chặng 1, 2 và thời gian xử lý mỗi nút là giả định của bài; cỡ gói nền phân bố mũ, trung bình 1 000 byte (giả định M/M/1).';
function cardOf(part) {
  const kq = S.kq, base = {src: SRC};
  const card = (i, k, t, b) => ({...base, k, t, b, rows: [['Lan truyền', () => F.fmtThoiGian(S.kq.hop[i].prop)], ['Truyền', () => F.fmtThoiGian(S.kq.hop[i].tx)], ['Hàng đợi (mô phỏng)', () => F.fmtThoiGian(S.kq.hop[i].queue)], ['Xử lý', () => F.fmtThoiGian(S.kq.hop[i].proc)]]});
  if (!kq) return null;
  if (part === 'c1' || part === 'q0' || part === 'pc' || part === 'lop') return card(0, 'Chặng 1', 'Cáp đồng trong nhà, 1 Gbit/s', 'Đoạn ngắn và nhanh: lan truyền 60 m chỉ 0,3 µs; một gói 1 500 byte cần 12 µs để đẩy hết lên dây.');
  if (part === 'c2' || part === 'q1' || part === 'sw') return card(1, 'Chặng 2', 'Cáp quang 10 Gbit/s giữa hai tòa', 'Tốc độ cao nên trễ truyền rất nhỏ; 2 km sợi quang thêm 10 µs lan truyền.');
  if (part === 'c3' || part === 'q2' || part === 'rt' || part === 'probe') return card(2, 'Chặng 3', 'Đường WAN tới trung tâm dữ liệu', 'Chặng chậm nhất và dài nhất. Kéo tải nền lên gần 1 để thấy hàng đợi trở thành phần lớn nhất, dù tốc độ danh định không đổi.');
  if (part === 'dc' || part === 'sv') return {...base, k: 'Đích', t: 'Máy chủ học liệu', b: 'Thời gian người dùng chờ gồm cả trễ mạng đi về và thời gian máy chủ xử lý (1.12). Khi máy chủ chậm, nâng băng thông không giúp được bao nhiêu.', rows: [['Thời gian đáp ứng', () => F.fmtThoiGian(S.kq.resp, 1)]]};
  if (part === 'phongmay') return {...base, k: 'Phòng máy', t: 'Router biên', b: 'Nơi mạng trường nối ra đường WAN. Hàng đợi ở cổng ra WAN là nơi trễ tăng nhanh nhất khi tải cao.', rows: []};
  return null;
}

// ---------------- góc nhìn
// điện thoại dọc: nhìn dọc theo chuỗi thiết bị để cả chuỗi lọt khung hẹp
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 2.5, ty: 1.0, tz: 0.8, az: -64 + 3 * Math.sin(t * 0.05), el: 34, d: 44, sx: 0, sy: -10} : {tx: 1.5, ty: 1.0, tz: 0.8, az: -10 + 4 * Math.sin(t * 0.05), el: 32, d: 56, sx: 0, sy: -10}),
  lop: () => ({tx: -9.5, ty: 1.2, tz: 1.2, az: -28, el: 18, d: 20, sx: 0, sy: -30}),
  wan: () => ({tx: 5, ty: 2.2, tz: 2.6, az: 8, el: 14, d: 26, sx: 0, sy: -30}),
  dc: () => ({tx: 11.5, ty: 1.8, tz: 0.8, az: 24, el: 16, d: 20, sx: 0, sy: -30}),
};

// ---------------- bài giảng · tiết 2 (45 phút), theo mục 1.5.2 và 1.6.1 của giáo trình; giáo án: tools/giao-an-mang/tk-goi-tin.json
// Tên bước (t) phải khớp từng bước của giáo án; tests/smoke.py kiểm.
const CAP = [
  {k: 'Tiết 2 · mục 1.6.1', t: 'Một gói tin đi từ lớp học tới máy chủ học liệu', b: 'Độ trễ là thời gian từ khi gói bắt đầu rời nguồn tới khi được nhận ở đích, đo trong điều kiện xác định (RFC 7679 cho độ trễ một chiều). Gói của bài đi ba chặng: máy học viên tới tủ truy nhập, tủ truy nhập tới router biên, router biên qua đường WAN tới trung tâm dữ liệu. Tiết này tách độ trễ thành bốn phần để biết thiết kế nên can thiệp ở đâu.', e: 'câu hỏi của tiết: độ trễ đến từ đâu và giảm bằng cách nào'},
  {k: 'Phương trình 1.10', t: 'Độ trễ đầu cuối là tổng bốn thành phần', b: 'Trên mỗi liên kết e của đường đi P, gói mất bốn khoảng thời gian: lan truyền tín hiệu, truyền gói lên dây, chờ trong hàng đợi và xử lý tại nút. Độ trễ đầu cuối là tổng của chúng trên mọi chặng. Gói trong cảnh đổi màu theo pha: đỏ thẫm là chờ, cam là truyền, xanh là lan truyền, xám là xử lý; thời lượng mỗi pha theo tỉ lệ đóng góp thật.', e: 'D_e2e = Σ_(e∈P) (d_prop + d_tx + d_queue + d_proc)   (1.10)'},
  {k: 'Trễ truyền · 1.11', t: 'Gói lớn trên liên kết chậm', b: 'Đẩy hết L bit của một gói lên liên kết C bit/s mất L/C giây. Gói 1 500 byte trên WAN 100 Mbit/s mất 0,12 ms; trên cáp quang 10 Gbit/s chỉ 1,2 µs. Hạ tốc độ WAN xuống 10 Mbit/s: thành phần cam lớn gấp mười. Với liên kết chậm, một gói lớn có thể làm gói thoại phía sau phải chờ đáng kể.', e: 'd_tx = L / C   (1.11)',
    ask: {q: 'Tăng tốc độ cổng WAN lên 10 lần thì thành phần nào giảm đúng 10 lần?', o: ['Trễ lan truyền', 'Trễ truyền L/C', 'Trễ xử lý'], a: 1, e: 'L/C tỉ lệ nghịch với C. Trễ lan truyền chỉ phụ thuộc khoảng cách và môi trường truyền.'}},
  {k: 'Trễ lan truyền', t: 'Khoảng cách thì không mua được', b: 'Tín hiệu trong cáp đồng hay sợi quang đi khoảng 2·10⁸ m/s, chừng hai phần ba tốc độ ánh sáng trong chân không. 60 m cáp trong phòng chỉ 0,3 µs, 2 km cáp quang 10 µs, còn 300 km đường WAN 1,5 ms dù cổng nhanh đến đâu. Kéo độ dài WAN lên 1 000 km: thành phần xanh lớn dần, tốc độ cổng không giúp được.', e: 'd_prop = d / v,  v ≈ 2·10⁸ m/s'},
  {k: 'Trễ xử lý', t: 'Mỗi nút cần thời gian đọc và chuyển gói', b: 'Tại mỗi switch, router, nút phải đọc tiêu đề, tra bảng chuyển tiếp, áp chính sách rồi mới đưa gói sang cổng ra. Chuyển tiếp bằng phần cứng thường chỉ vài micro giây; xử lý bằng phần mềm, mã hoá hay kiểm tra sâu có thể lâu hơn nhiều. Bài giả định 5 µs ở tủ truy nhập và 20 µs ở mỗi router.', e: 'd_proc phụ thuộc thiết bị và chính sách bật trên nó'},
  {k: 'Mức sử dụng · 1.7', t: 'Mức sử dụng của một liên kết', b: 'Một liên kết thường mang nhiều luồng cùng lúc. Mức sử dụng ρ là tổng tốc độ các luồng đi qua liên kết chia cho dung lượng của nó. Trên đường WAN của bài, gói của ta đi chung với lưu lượng nền; thanh trượt Tải nền WAN đặt ρ của chặng 3.', e: 'ρ_e = Σ_(f: e∈P_f) b_f / C_e   (1.7)'},
  {k: 'Trễ hàng đợi', t: 'Khi tải tiến gần 1', b: 'Khi cổng ra đang bận, gói mới phải xếp hàng. ρ càng gần 1, hàng càng dài và trễ chờ tăng rất nhanh, dù tốc độ danh định không đổi. Kéo tải nền WAN lên 0,9: cột hàng đợi ở router biên cao lên, thành phần đỏ thẫm lấn các phần khác. Với mô hình M/M/1, trễ chờ tỉ lệ với ρ/(1 − ρ).', e: 'M/M/1: W_q = ρ / (μ − λ),  λ = ρ·μ',
    ask: {q: 'Tốc độ danh định của WAN giữ nguyên, tải nền tăng từ 0,5 lên 0,9. Trễ chờ theo M/M/1 thay đổi thế nào?', o: ['Không đổi vì cổng vẫn 100 Mbit/s', 'Tăng khoảng 9 lần', 'Tăng khoảng 1,8 lần'], a: 1, e: 'ρ/(1 − ρ) đi từ 1 lên 9. Mô phỏng ở bảng 05 cho cùng kết quả.'}},
  {k: 'Mô phỏng và lý thuyết', t: 'Số trên màn hình không gõ sẵn', b: 'Trễ hàng đợi trong bài được tính bằng mô phỏng sự kiện rời rạc: hàng chục nghìn gói đến ngẫu nhiên, xếp hàng, được phục vụ. Chấm đỏ là kết quả mô phỏng, đường liền là lời giải M/M/1. Hai cái khớp nhau: đó là cách kiểm một mô hình trước khi dùng nó để kết luận, như mục 5.1.3 sẽ trình bày.', e: 'bảng 05 · chấm = mô phỏng, đường = M/M/1'},
  {k: 'Câu 3 · chương 1', t: 'Thành phần nào giảm khi tăng tốc độ cổng?', b: 'Với một luồng qua ba liên kết, độ trễ đầu cuối là tổng mười hai số hạng. Tăng tốc độ cổng làm giảm trễ truyền, và gián tiếp giảm trễ chờ vì ρ nhỏ lại. Trễ lan truyền chỉ phụ thuộc chiều dài và môi trường; trễ xử lý phụ thuộc thiết bị. Ở cấu hình mặc định, 300 km đường WAN là phần lớn nhất.', e: 'D = Σ_(e=1..3) (d_prop,e + d_tx,e + d_queue,e + d_proc,e)',
    ask: {q: 'Đường WAN 300 km, 100 Mbit/s, tải 0,6. Thành phần nào lớn nhất trong độ trễ một chiều?', o: ['Trễ truyền của gói 1 500 byte', 'Trễ lan truyền trên 300 km', 'Trễ xử lý ở router'], a: 1, e: '1,5 ms lan truyền so với 0,12 ms truyền, khoảng 0,12 ms chờ và vài chục µs xử lý.'}},
  {k: 'Bài tập 4 · chương 1 · 1.9', t: 'Đủ băng thông chưa chắc đã đủ', b: 'Liên kết 1 Gbit/s mang thoại 80, video 300 và dữ liệu nền 420 Mbit/s: ρ = 0,8. Với hệ số khai thác mục tiêu η = 0,8, dư địa bằng 0: lưu lượng vẫn qua được nhưng không còn chỗ cho dao động tải, overhead, tái định tuyến hay bùng nổ. Quy hoạch dung lượng giữ tổng tải dưới η·C chứ không dưới C.', e: 'Σ_(f: e∈P_f) b_f ≤ η·C_e,  0 < η < 1   (1.9)'},
  {k: 'Thời gian đáp ứng · 1.12', t: 'Không phải chậm nào cũng do mạng', b: 'Người dùng cảm nhận thời gian đáp ứng: trễ mạng đi và về, cộng thời gian máy chủ, cơ sở dữ liệu và thiết bị đầu cuối xử lý. Đặt máy chủ xử lý 150 ms rồi nâng WAN lên 1 Gbit/s: thời gian đáp ứng gần như không đổi. Tăng băng thông chỉ có ích khi mạng là thành phần lớn nhất.', e: 'T_resp = D_net + T_server + T_db + T_client   (1.12)'},
  {k: 'Đo độ trễ', t: 'Một chiều hay khứ hồi, đo ở đâu', b: 'Độ trễ một chiều theo RFC 7679 cần đồng hồ hai đầu đồng bộ; lệnh ping chỉ cho thời gian khứ hồi. Một con số độ trễ chỉ dùng được khi kèm điều kiện đo: điểm đo, kích thước gói, mức tải, thời gian đo, số lần lặp. Thiếu các điều kiện đó, hai kết quả không so sánh được với nhau.', e: 'kết quả = con số + điều kiện đo (bảng 1.3)'},
  {k: 'Tổng kết', t: 'Thiết kế can thiệp vào đâu', b: 'Tăng tốc độ cổng giảm trễ truyền và gián tiếp giảm trễ chờ. Quy hoạch đường đi, đặt máy chủ gần người dùng giảm trễ lan truyền. Chính sách hàng đợi và giữ ρ dưới η tác động trực tiếp đến trễ chờ. Thiết bị chuyển tiếp bằng phần cứng giữ trễ xử lý nhỏ. Tiết sau: khi hàng đợi đầy, gói không chỉ chờ mà còn bị mất.', e: 'mỗi thành phần một đòn bẩy thiết kế'},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'});
at(10, {cap: 1}); at(10.2, {click: 'go'}); at(13, {click: 'v_lop'});
at(21, {cap: 2}); at(21.5, {click: 'v_wan'}); at(23, {slide: 'C3', to: 0, dur: 2}); at(29, {slide: 'C3', to: LOGC(100e6, 10e6, 1e9), dur: 1.2});
at(32, {cap: 3}); at(33, {slide: 'd3', to: 1, dur: 2}); at(39, {slide: 'd3', to: LOGC(300e3, 1e3, 1000e3), dur: 1.2});
at(42, {cap: 4}); at(42.5, {click: 'v_dc'});
at(51, {cap: 5}); at(51.5, {click: 'v_hero'}); at(52, {slide: 'rho3', to: 0.3 / 0.95, dur: 1.5});
at(60, {cap: 6}); at(61, {slide: 'rho3', to: 0.9 / 0.95, dur: 2.5}); at(68, {slide: 'rho3', to: 0.6 / 0.95, dur: 1.5});
at(71, {cap: 7});
at(80, {cap: 8}); at(81, {click: 'go'});
at(90, {cap: 9}); at(91, {click: 'bt14'}); at(92, {slide: 'nen', to: 520 / 600, dur: 1.5}); at(96, {slide: 'nen', to: 420 / 600, dur: 1});
at(100, {cap: 10}); at(101, {slide: 'tSv', to: 0.75, dur: 1.5}); at(104, {slide: 'C3', to: 1, dur: 1.5}); at(109, {slide: 'C3', to: LOGC(100e6, 10e6, 1e9), dur: 1}); at(110, {slide: 'tSv', to: 0.15, dur: 1});
at(113, {cap: 11}); at(113.5, {click: 'v_lop'});
at(122, {cap: 12}); at(122.5, {click: 'v_hero'});
ev.sort((a, b) => a.at - b.at);

sim.reset(); tinh(); S.tDirty = false;
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 132}, firstView: 'hero', extra: [{key: 'go', label: 'Gửi gói tin'}],
  keys: {1: 'v_hero', 2: 'v_lop', 3: 'v_wan', 4: 'v_dc', g: 'go'}});
