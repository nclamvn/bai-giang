// Thiết kế và hiệu năng mạng · bài 6.1 · Gói tin 5G đầu-cuối và vị trí UPF.
// Theo giáo trình TEL1459, chương 6: chuỗi thiết kế đầu-cuối (6.1, Hình 6.1), năm miền (6.2), trễ dịch vụ theo vị trí UPF (6.8),
// bài toán đặt UPF/MEC có ràng buộc tải (6.9), thời gian đáp ứng MEC tách đoạn (5.24); BT 6.4 (ngân sách 20 ms), BT 6.5.
// Trễ truy nhập vô tuyến lấy bằng yêu cầu tối thiểu của IMT-2020 về trễ mặt phẳng người dùng (4 ms eMBB, 1 ms URLLC; ITU-R
// M.2410). Khoảng cách các site, số chặng truyền dẫn, thời gian xử lý UPF, năng lực máy chủ là giả định của bài, ghi trên màn.
import * as THREE from 'three';
import {createStage, MAT} from '../kit/stage.js';
import * as SH from '../kit/shapes.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {tag, picker, vn} from '../kit/soi.js';
import * as F from '../kit/mang/cong-thuc.js';
import {chayMMc} from '../kit/mang/mo-phong.js';

const PI = Math.PI;
const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 30, grid: 1, fade: 110, fov: 26, near: 0.3, far: 500});
const ui = createUI(app);
const root = new THREE.Group(); st.scene.add(root);
const mk = (geo, mat, parent = root) => { const m = new THREE.Mesh(geo, mat); m.castShadow = m.receiveShadow = true; parent.add(m); return m; };
const P = (x, y, z) => new THREE.Vector3(x, y, z);
const COL = {ran: '#3B6EA8', tn: '#E3562A', upf: '#8A8F98', dn: '#C08A1E', app: '#B3261E'};
const TEN = {ran: 'vô tuyến', tn: 'truyền dẫn', upf: 'UPF', dn: 'UPF → ứng dụng', app: 'máy chủ ứng dụng'};
const OK = '#1F7A4D', BAD = '#B3261E';

const M = {wall: MAT.shell('#f1efe9'), wall2: MAT.shell('#e6e2d8'), floor: MAT.satin('#d9d4c8'), steel: MAT.steel(), ant: MAT.shell('#f4f4f2'), rack: MAT.dark(), fiber: MAT.plastic('#e8c547'),
  robot: MAT.shell('#f0f0ee'), robot2: MAT.plastic('#3b3e44'), led: new THREE.MeshBasicMaterial({color: '#2fbf71'}), upf: new THREE.MeshStandardMaterial({color: '#E3562A', emissive: '#E3562A', emissiveIntensity: 0.35, roughness: 0.4}),
  pk: new THREE.MeshStandardMaterial({color: '#3B6EA8', emissive: '#3B6EA8', emissiveIntensity: 0.6}), cp: new THREE.LineDashedMaterial({color: '#8A8F98', dashSize: 0.4, gapSize: 0.3})};

// ---------------- cảnh
function site(x, z, w, d, h, part, n) {
  const g = new THREE.Group(); g.position.set(x, 0, z); root.add(g); const t = 0.16;
  mk(SH.rbox(w, 0.16, d, 0.05), M.floor, g).position.y = 0.08;
  mk(SH.rbox(w, h, t, 0.05), M.wall2, g).position.set(0, h / 2, -d / 2);
  for (const sx of [-1, 1]) mk(SH.rbox(t, h * 0.5, d, 0.05), M.wall, g).position.set(sx * w / 2, h * 0.25, 0);
  const racks = [];
  for (let i = 0; i < n; i++) { const r = new THREE.Group(); g.add(r); r.position.set(-w / 2 + 0.9 + i * 0.95, 0, -d / 2 + 0.9); mk(SH.rbox(0.8, 2.0, 0.9, 0.05), M.rack, r).position.y = 1.0; for (let k = 0; k < 4; k++) mk(new THREE.SphereGeometry(0.02, 6, 4), M.led, r).position.set(0.28, 0.5 + k * 0.35, 0.46); racks.push(r); }
  tag(part, g); return {g, racks};
}
// nền ba khu: khuôn viên (robot, trạm gốc, site biên), vùng, trung tâm
for (const [x, z, w, d, c] of [[-8, -0.5, 18, 9, '#ebe7de'], [9, -1.5, 9, 7, '#e7e9ec'], [21, -2.5, 10.5, 8, '#e4e6ea']]) { const m = mk(SH.rbox(w, 0.06, d, 0.4), MAT.satin(c)); m.position.set(x, 0.03, z); m.castShadow = false; }
// trạm gốc: cột thép, ba anten panel (RU), tủ DU dưới chân
const tram = new THREE.Group(); root.add(tram); tram.position.set(-8, 0, 0);
mk(new THREE.CylinderGeometry(0.16, 0.34, 14, 16), M.steel, tram).position.y = 7;
mk(new THREE.CylinderGeometry(0.9, 0.9, 0.08, 20), M.steel, tram).position.y = 12.1;
for (let i = 0; i < 3; i++) { const a = (i * 2 * PI) / 3, p = mk(SH.rbox(0.5, 2.0, 0.18, 0.05), M.ant, tram); p.position.set(0.55 * Math.cos(a), 13.0, 0.55 * Math.sin(a)); p.rotation.y = -a + PI / 2; }
mk(SH.rbox(1.0, 1.4, 0.8, 0.06), MAT.shell('#dfe3e6'), tram).position.set(0.9, 0.7, 0.6);
tag('gnb', tram);
// thiết bị người dùng: robot tự hành có camera trong nhà xưởng
const ue = [];
for (let i = 0; i < 6; i++) { const g = new THREE.Group(); root.add(g); g.position.set(-15.5 + (i % 3) * 2.2, 0, -2.6 + Math.floor(i / 3) * 3); g.scale.setScalar(1.7); mk(SH.rbox(0.9, 0.35, 0.6, 0.08), M.robot, g).position.y = 0.32; mk(SH.rbox(0.3, 0.25, 0.25, 0.04), M.robot2, g).position.set(0.25, 0.62, 0); for (const sx of [-0.3, 0.3]) for (const sz of [-0.3, 0.3]) mk(new THREE.CylinderGeometry(0.1, 0.1, 0.08, 12).rotateX(PI / 2), M.robot2, g).position.set(sx, 0.12, sz); tag('ue', g); ue.push(g); }
const edge = site(-1, -1, 4.4, 3.4, 2.6, 'edge', 2);
const reg = site(9, -2, 6, 4.4, 3.2, 'regional', 5);
const cen = site(21, -3, 7.5, 5.4, 3.8, 'central', 7);
// tuyến cáp quang: gNB → biên → vùng → trung tâm (khoảng cách nén, không theo tỉ lệ)
const tuyen = [new THREE.CatmullRomCurve3([P(-7.1, 0.5, 0.6), P(-5, 0.12, 1.6), P(-2.2, 0.12, 1.4), P(-1.5, 0.6, -2.0)]), new THREE.CatmullRomCurve3([P(-0.5, 0.6, -2.0), P(2, 0.12, 1.8), P(6, 0.12, 2.0), P(8, 0.6, -3.4)]), new THREE.CatmullRomCurve3([P(10, 0.6, -3.4), P(13, 0.12, 2.0), P(17.5, 0.12, 2.2), P(20, 0.6, -4.8)])];
tuyen.forEach((c, i) => tag(`tn${i}`, mk(new THREE.TubeGeometry(c, 100, 0.06, 8), M.fiber)));
for (const c of tuyen.slice(1)) { const g = new THREE.Group(); root.add(g); g.position.copy(c.getPoint(0.5)); g.position.y += 0.05; for (const dx of [-0.15, 0.15]) { const m = mk(new THREE.BoxGeometry(0.04, 0.5, 0.5), new THREE.MeshBasicMaterial({color: '#ffffff'}), g); m.position.x = dx; m.rotation.z = 0.5; } }
// mặt phẳng điều khiển 5GC đặt ở site vùng: đường đứt nét tới gNB
const cpLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints([P(-8, 13.8, 0), P(0, 9, -1), P(9, 4.2, -3.6)]), M.cp); cpLine.computeLineDistances(); root.add(cpLine);
const ups = [edge, reg, cen].map((s) => { const m = mk(SH.rbox(0.82, 0.3, 0.92, 0.04), M.upf, s.racks[0]); m.position.y = 2.2; return m; });
const pk = mk(SH.rbox(0.36, 0.2, 0.28, 0.04), M.pk); pk.visible = false;
const radio = mk(new THREE.TorusGeometry(1, 0.025, 6, 48), new THREE.MeshBasicMaterial({color: '#3B6EA8', transparent: true, opacity: 0.6})); radio.rotation.x = PI / 2;

// ---------------- mô hình
// Ba vị trí đặt UPF + máy chủ ứng dụng: khoảng cách, số chặng, số máy phục vụ. Khoảng cách đi cáp lấy 1,3 lần đường chim bay.
const VT = [
  {key: 'edge', ten: 'Biên (trong khuôn viên)', d: 2e3, hop: 1, may: 2},
  {key: 'regional', ten: 'Vùng (cùng tỉnh)', d: 80e3, hop: 4, may: 4},
  {key: 'central', ten: 'Trung tâm (thành phố khác)', d: 1140e3, hop: 9, may: 16},
];
const ROUTE = 1.3, T_HOP = 50e-6, T_UPF = 50e-6, T_DN = 20e-6;
const S = {vt: 2, prof: 'urllc', nUE: 12, rate: 10, tInf: 5e-3, budget: 20e-3, t: 0, kq: null, dirty: true, curve: null};
// trễ máy chủ ứng dụng: hàng đợi c máy (M/M/c), mỗi yêu cầu mất trung bình tInf trên một máy. Mô phỏng sự kiện; Erlang C để đối chiếu
function mayChu(vtIdx, nUE) {
  const v = VT[vtIdx], lam = nUE * S.rate, rho = (lam * S.tInf) / v.may;
  if (rho >= 0.97) return {W: Infinity, rho, lt: Infinity};
  const r = chayMMc({lam, tS: S.tInf, c: v.may, n: 12000, warm: 1200, seed: 5 + vtIdx});
  return {W: r.W, rho, p95: r.p95, lt: F.mmc(lam, 1 / S.tInf, v.may).W};
}
function doan(vtIdx) {
  const v = VT[vtIdx], ran = S.prof === 'urllc' ? 1e-3 : 4e-3, tn = F.dLanTruyen(ROUTE * v.d) + v.hop * T_HOP, app = mayChu(vtIdx, S.nUE);
  const mot = {ran, tn, upf: T_UPF, dn: T_DN};
  // đi và về: vô tuyến, truyền dẫn, UPF hai lượt; máy chủ một lượt
  const d = {ran: 2 * ran, tn: 2 * tn, upf: 2 * T_UPF, dn: 2 * T_DN, app: app.W};
  return {d, mot, tong: F.dDichVu5G({ran: d.ran, tn: d.tn, upf: d.upf, dn: d.dn, app: d.app}), rho: app.rho, may: v.may};
}
function tinh() {
  S.kq = VT.map((_, i) => doan(i));
  const ok = S.kq.map((k) => k.tong <= S.budget && k.rho < 0.9);
  // 6.9: chọn vị trí trễ nhỏ nhất trong các vị trí còn tải dưới 0,9
  let best = -1; S.kq.forEach((k, i) => { if (k.rho < 0.9 && (best < 0 || k.tong < S.kq[best].tong)) best = i; });
  S.best = best; S.ok = ok;
  S.curve = Array.from({length: 18}, (_, i) => 2 + i * 2).map((n) => { const m = mayChu(0, n); return [n, m.W, m.lt]; });
}

// ---------------- bảng
ui.header({code: '6.1', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · CHƯƠNG 6 · BT 6.4, 6.5', title: 'Gói tin 5G đầu-cuối', sub: 'UE · GNB · TRUYỀN DẪN · UPF · MEC', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['20 ms', 'NGÂN SÁCH BT 6.4'], ['1 / 4 ms', 'TRỄ VÔ TUYẾN TỐI THIỂU'], ['6.8', 'PHƯƠNG TRÌNH']]});
ui.panel(28, 112, 300, 236, 'ĐẶT UPF VÀ ỨNG DỤNG · 6.9', '01');
ui.buttons([['vt0', 'BIÊN'], ['vt1', 'VÙNG'], ['vt2', 'TRUNG TÂM']], 42, 146, 272);
const vtRows = [0, 1, 2].map((i) => { const y = 184 + i * 52; ui.rule(42, y + 44, 272); return {ten: ui.text(42, y, '', 'v', 'font-size:11.5px;font-weight:600;width:200px;white-space:nowrap'), d: ui.text(214, y, '', 'v', 'font-size:11.5px;width:100px;text-align:right'), sub: ui.text(42, y + 18, '', 'v', 'font-size:10.5px;color:#626773;width:272px;white-space:nowrap')}; });
ui.panel(28, 360, 300, 200, 'DỊCH VỤ VÀ TẢI', '02');
ui.buttons([['urllc', 'URLLC · ĐIỀU KHIỂN'], ['embb', 'EMBB · VIDEO']], 42, 394, 272);
const slN = ui.slider('nUE', 42, 438, 272, 'SỐ THIẾT BỊ', {lw: 96, vw: 64});
const slT = ui.slider('tInf', 42, 468, 272, 'XỬ LÝ MỖI YÊU CẦU', {lw: 120, vw: 50});
ui.text(42, 494, 'Mỗi thiết bị gửi 10 yêu cầu/giây. Site biên 2 máy, vùng 4, trung tâm 16 (giả định).', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:10.5px;white-space:normal;width:272px;line-height:1.45');
ui.panel(28, 572, 300, 194, 'GIẢ ĐỊNH CỦA BÀI', '03');
ui.text(42, 606, 'Trễ vô tuyến một chiều = yêu cầu tối thiểu IMT-2020 (ITU-R M.2410): URLLC 1 ms, eMBB 4 ms. Cáp quang 2·10⁸ m/s, đường cáp dài 1,3 lần đường chim bay. Mỗi chặng truyền dẫn 50 µs, UPF 50 µs. Biên 2 km, vùng 80 km, trung tâm 1 140 km (cỡ Hà Nội tới TP.HCM đường chim bay).', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:10.5px;white-space:normal;width:272px;line-height:1.5');

ui.panel(1272, 112, 300, 280, 'NGÂN SÁCH TRỄ ĐI VỀ · BT 6.4', '04');
const budSvg = ui.svg(1286, 146, 272, 140);
ui.text(1286, 296, 'TRỄ ĐI VỀ'); const totBig = ui.text(1286, 310, '', 'mo', 'position:absolute;font-size:28px;font-weight:700');
const totTxt = ui.text(1286, 348, '', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:10.5px;white-space:normal;width:272px;line-height:1.45');
ui.panel(1272, 404, 300, 200, 'MÁY CHỦ BIÊN · M/M/2', '05');
const qChart = ui.chart(1286, 450, 272, 76, {min: 0, max: 0.05, colors: [C.ink], zero: false});
const qTxt = ui.text(1286, 546, '', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:10.5px;white-space:normal;width:272px;line-height:1.45');
ui.panel(1272, 616, 300, 150, 'CHỌN VỊ TRÍ · 6.9', '06');
const bestBig = ui.text(1286, 648, '', 'mo', 'position:absolute;font-size:22px;font-weight:700;width:272px');
const bestTxt = ui.text(1286, 684, '', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:10.5px;white-space:normal;width:272px;line-height:1.45');
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_ran', 'TRẠM GỐC'], ['v_edge', 'SITE BIÊN'], ['v_far', 'VÙNG VÀ TRUNG TÂM']], 360, 120, 860);
ui.text(362, 664, 'UPF ĐẶT Ở');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts([{key: 'ue', title: 'UE', sub: 'ROBOT CÓ CAMERA'}, {key: 'gnb', title: 'GNB', sub: 'RU TRÊN CỘT · DU DƯỚI CHÂN'}, {key: 'edge', title: 'SITE BIÊN', sub: '2 KM'}, {key: 'regional', title: 'VÙNG · 5GC', sub: '80 KM'}, {key: 'central', title: 'TRUNG TÂM', sub: '1 140 KM'}]);

// ---------------- mô phỏng
const LOGC = (x, a, b) => Math.log(x / a) / Math.log(b / a), unlog = (t, a, b) => a * Math.pow(b / a, t);
const sim = {
  S,
  reset() { Object.assign(S, {vt: 2, prof: 'urllc', nUE: 12, tInf: 5e-3, t: 0}); S.dirty = true; },
  busy: () => false,
  isOn: (k) => k === `vt${S.vt}` || k === S.prof,
  act(k) { if (/^vt\d$/.test(k)) S.vt = +k.slice(2); if (k === 'urllc' || k === 'embb') S.prof = k; S.dirty = true; },
  slide(k, t) { if (k === 'nUE') S.nUE = 1 + Math.round(t * 59); if (k === 'tInf') S.tInf = unlog(t, 1e-3, 20e-3); S.dirty = true; },
  keyDown() { return false; },
  step(dt) { if (S.dirty) { tinh(); S.dirty = false; } S.t += dt; },
  shadowAt() { return new THREE.Vector3(2, 12, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq; if (!kq) return; const cur = kq[S.vt];
    // gói tin đi: robot → cột → cáp → site đặt UPF → về
    const path = [P(-14.6, 0.9, -2), P(-8, 13, 0), ...tuyen.slice(0, S.vt + 1).flatMap((c) => c.getPoints(16))];
    const curve = new THREE.CatmullRomCurve3(path), u = (S.t * 0.22) % 2, s = u < 1 ? u : 2 - u;
    pk.visible = true; pk.position.copy(curve.getPoint(s)); pk.position.y += 0.25; M.pk.color.set(u < 1 ? COL.ran : COL.app); M.pk.emissive.set(u < 1 ? COL.ran : COL.app);
    radio.position.set(-8, 13, 0); const rr = (S.t * 1.4) % 1; radio.scale.setScalar(0.5 + rr * 6); radio.material.opacity = 0.6 * (1 - rr);
    ups.forEach((m, i) => { m.visible = i === S.vt; });
    // bảng 01
    kq.forEach((k, i) => { vtRows[i].ten.textContent = `${VT[i].ten}`; vtRows[i].d.textContent = Number.isFinite(k.tong) ? F.fmtThoiGian(k.tong, 1) : 'quá tải'; vtRows[i].d.style.color = S.ok[i] ? OK : BAD; vtRows[i].sub.textContent = `${vn(VT[i].d / 1000, 0)} km · ${VT[i].hop} chặng · ${VT[i].may} máy · tải ρ = ${vn(Math.min(k.rho, 9.99), 2)}`; });
    slN.set((S.nUE - 1) / 59, `${S.nUE} thiết bị`); slT.set(LOGC(S.tInf, 1e-3, 20e-3), F.fmtThoiGian(S.tInf, 1));
    // bảng 04
    let g = ''; const W = 272, tMax = Math.max(S.budget * 1.25, Math.min(0.08, Number.isFinite(cur.tong) ? cur.tong * 1.05 : 0.08)), sc = W / tMax;
    let x = 0; for (const k of ['ran', 'tn', 'upf', 'dn', 'app']) { const v = cur.d[k]; const w = Math.min(W - x, (Number.isFinite(v) ? v : tMax) * sc); if (w > 0.2) g += `<rect x="${x}" y="8" width="${w}" height="16" fill="${COL[k]}"/>`; x += w; }
    g += `<rect x="0" y="8" width="${W}" height="16" fill="none" stroke="${C.line}"/><line x1="${S.budget * sc}" x2="${S.budget * sc}" y1="2" y2="30" stroke="${C.ink}" stroke-width="1.5"/><text x="${S.budget * sc}" y="40" text-anchor="middle" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">20 ms</text>`;
    ['ran', 'tn', 'upf', 'dn', 'app'].forEach((k, j) => { const y = 54 + j * 17; g += `<rect x="0" y="${y}" width="9" height="9" fill="${COL[k]}"/><text x="14" y="${y + 8}" font-family="Be Vietnam Pro" font-size="10.5" fill="${C.ink}">${TEN[k]}</text><text x="${W}" y="${y + 8}" text-anchor="end" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">${F.fmtThoiGian(cur.d[k], 2)}</text>`; });
    budSvg.innerHTML = g;
    totBig.textContent = Number.isFinite(cur.tong) ? F.fmtThoiGian(cur.tong, 1) : 'quá tải'; totBig.style.color = S.ok[S.vt] ? OK : BAD;
    totTxt.innerHTML = Number.isFinite(cur.tong) ? `${cur.tong <= S.budget ? '<b>Đạt</b>' : '<b>Không đạt</b>'} ngân sách 20 ms của dịch vụ điều khiển (BT 6.4). Vô tuyến và UPF đi hai lượt, máy chủ một lượt (6.8, 5.24).` : 'Máy chủ nhận yêu cầu nhanh hơn khả năng xử lý: hàng đợi dài vô hạn.';
    // bảng 05: trễ máy chủ biên theo số thiết bị (mô phỏng)
    const pts = S.curve.filter(([, w]) => Number.isFinite(w)), ymax = Math.max(0.01, ...pts.map(([, w]) => w)) * 1.1, n0 = S.curve[0][0], n1 = S.curve[S.curve.length - 1][0];
    qChart.lim.max = ymax;
    qChart.set([S.curve.map(([, , l]) => (Number.isFinite(l) ? l : ymax * 2))], {cursor: Math.max(0, Math.min(1, (S.nUE - n0) / (n1 - n0))), extra: (Y, w) => pts.map(([n, v]) => `<circle cx="${((n - n0) / (n1 - n0)) * w}" cy="${Y(v)}" r="2.6" fill="${COL.app}"/>`).join('') + `<text x="${w}" y="-4" text-anchor="end" font-family="JetBrains Mono" font-size="10.5" fill="#626773">${F.fmtThoiGian(ymax, 0)}</text><text x="0" y="88" font-family="JetBrains Mono" font-size="10.5" fill="#626773">${n0} thiết bị</text><text x="${w}" y="88" text-anchor="end" font-family="JetBrains Mono" font-size="10.5" fill="#626773">${n1}</text>`});
    const e0 = kq[0];
    qTxt.innerHTML = `Chấm: mô phỏng · đường: Erlang C. Hai máy biên, mỗi yêu cầu ${F.fmtThoiGian(S.tInf, 1)}: ${S.nUE} thiết bị × 10 = ${S.nUE * 10} yêu cầu/giây, <b>ρ = ${vn(e0.rho, 2)}</b>. Gần 1 thì trễ chờ tăng vọt (ràng buộc C_p của 6.9).`;
    bestBig.textContent = S.best >= 0 ? VT[S.best].ten.split(' (')[0] : 'không vị trí nào';
    bestTxt.innerHTML = S.best >= 0 ? `Trễ nhỏ nhất trong các vị trí còn tải dưới 0,9: ${F.fmtThoiGian(kq[S.best].tong, 1)}${kq[S.best].tong > S.budget ? ', vẫn vượt 20 ms' : ''}. Đổi số thiết bị để thấy lựa chọn chuyển từ biên sang vùng.` : 'Mọi vị trí đều quá tải: phải thêm máy chủ.';
    for (const k of ['vt0', 'vt1', 'vt2', 'urllc', 'embb']) ui.setOn(k, sim.isOn(k));
    modeEl.textContent = VT[S.vt].ten.split(' (')[0];
    modeSub.textContent = `${S.prof === 'urllc' ? 'URLLC' : 'eMBB'} · ${S.nUE} thiết bị · đi về ${Number.isFinite(cur.tong) ? F.fmtThoiGian(cur.tong, 1) : 'quá tải'} · ngân sách 20 ms · khoảng cách trên cảnh không theo tỉ lệ`;
    alert.set(!Number.isFinite(cur.tong) || cur.rho >= 0.9 ? 'MÁY CHỦ QUÁ TẢI' : cur.tong > S.budget ? 'VƯỢT NGÂN SÁCH 20 MS' : '');
    const W3 = (v) => st.project(v.x, v.y, v.z);
    ui.drawCallouts([{key: 'ue', p: W3(P(-14, 1, -1)), dx: -40, dy: -60}, {key: 'gnb', p: W3(P(-8, 13.6, 0)), dx: 40, dy: -30}, {key: 'edge', p: W3(P(-1, 2.8, -1)), dx: 30, dy: -60}, {key: 'regional', p: W3(P(9, 3.4, -2)), dx: 30, dy: -60}, {key: 'central', p: W3(P(21, 4, -3)), dx: 30, dy: -50}], 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình TEL1459, chương 6 (6.1, 6.2, 6.8, 6.9; BT 6.4, 6.5) và 5.24. Trễ mặt phẳng người dùng tối thiểu IMT-2020: 4 ms eMBB, 1 ms URLLC (ITU-R M.2410). Tốc độ trong sợi quang 2·10⁸ m/s (Kurose & Ross 2021). Khoảng cách, số chặng, thời gian xử lý, số máy chủ là giả định.';
function cardOf(part) {
  const base = {src: SRC};
  if (part === 'ue') return {...base, k: 'UE', t: 'Thiết bị người dùng', b: 'Robot tự hành gửi ảnh camera lên máy chủ để nhận lệnh điều khiển. Mỗi lần đi về phải nằm trong 20 ms.', rows: [['Số thiết bị', () => `${S.nUE}`]]};
  if (part === 'gnb') return {...base, k: 'NG-RAN', t: 'Trạm gốc gNB', b: 'Anten và khối vô tuyến RU trên cột, khối DU dưới chân. Phần vô tuyến lấy bằng yêu cầu tối thiểu của IMT-2020.', rows: [['Trễ vô tuyến một chiều', () => (S.prof === 'urllc' ? '1 ms (URLLC)' : '4 ms (eMBB)')]]};
  const i = ['edge', 'regional', 'central'].indexOf(part);
  if (i >= 0) return {...base, k: VT[i].ten, t: i === 1 ? 'Site vùng: UPF, MEC và các chức năng lõi 5GC' : 'UPF và máy chủ ứng dụng', b: i === 0 ? 'Đặt UPF và ứng dụng ngay trong khuôn viên (local breakout): đường đi ngắn nhất nhưng ít máy chủ.' : i === 1 ? 'Cùng tỉnh: thêm vài chục km cáp, nhiều máy chủ hơn. Mặt phẳng điều khiển 5GC (AMF, SMF, PCF) đặt ở đây.' : 'Thành phố khác: dễ vận hành, nhiều máy, nhưng khoảng cách làm trễ lan truyền đi về vượt chục mili giây.', rows: [['Trễ đi về', () => F.fmtThoiGian(S.kq[i].tong, 1)], ['Tải máy chủ ρ', () => vn(S.kq[i].rho, 2)]]};
  if (/^tn/.test(part)) return {...base, k: 'Truyền dẫn', t: 'Cáp quang backhaul', b: 'Khoảng cách trên cảnh đã nén. Trễ lan truyền tính theo khoảng cách thật đã giả định, nhân 1,3 cho đường cáp quanh co.', rows: []};
  return null;
}

// ---------------- góc nhìn
// điện thoại dọc: nhìn dọc theo chuỗi thiết bị để cả chuỗi lọt khung hẹp
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 3, ty: 3.5, tz: -0.5, az: -62 + 3 * Math.sin(t * 0.05), el: 28, d: 58, sx: 0, sy: -10} : {tx: 3.5, ty: 3.5, tz: -0.5, az: -14 + 4 * Math.sin(t * 0.05), el: 24, d: 84, sx: 0, sy: -10}),
  ran: () => ({tx: -10, ty: 5, tz: 0, az: -24, el: 12, d: 38, sx: 0, sy: -20}),
  edge: () => ({tx: -2, ty: 1.4, tz: -0.5, az: -8, el: 20, d: 22, sx: 0, sy: -20}),
  far: () => ({tx: 15, ty: 2, tz: -2, az: 10, el: 16, d: 40, sx: 0, sy: -20}),
};

// ---------------- bài giảng
const CAP = [
  {k: 'Chương 6 · Hình 6.1', t: 'Gói tin của robot đi qua năm miền', b: 'Robot (UE) gửi ảnh qua vô tuyến tới trạm gốc, qua cáp quang truyền dẫn tới UPF, ra mạng dữ liệu tới máy chủ ứng dụng, rồi kết quả quay về. Mỗi miền góp một phần trễ; chỉ tiêu đầu cuối chỉ đạt khi cả chuỗi được thiết kế cùng nhau.', e: 'N_5G = (U, B, T, F, A)   (6.2)'},
  {k: 'UPF ở trung tâm', t: 'Đi 1 140 km rồi quay về', b: 'Đặt UPF và máy chủ ở trung tâm dữ liệu thành phố khác: dễ vận hành, đủ máy. Nhưng lan truyền đi về đã khoảng 15 ms; cộng vô tuyến hai lượt và 5 ms máy chủ xử lý là gần 23 ms, vượt ngưỡng 20 ms.', e: 'D_svc(u, a) = D_RAN + D_TN(b, p) + D_UPF(p) + D_DN(p, a)   (6.8)'},
  {k: 'Local breakout · BT 6.5', t: 'Kéo UPF về sát người dùng', b: 'Đặt UPF và máy chủ MEC ngay trong khuôn viên: dữ liệu rẽ ra ở biên thay vì quay về lõi. Truyền dẫn chỉ còn vài chục micro giây; phần lớn ngân sách giờ là vô tuyến và máy chủ.', e: 'UPF tại biên + MEC = đường đi ngắn nhất',
    ask: {q: 'Vì sao đặt UPF gần ứng dụng biên làm giảm trễ đầu cuối?', o: ['Vì vô tuyến nhanh hơn', 'Vì dữ liệu không phải đi về lõi xa rồi quay lại, trễ truyền dẫn giảm', 'Vì UPF xử lý nhanh hơn ở biên'], a: 1, e: 'Thành phần D_TN trong (6.8) tỉ lệ với khoảng cách tới UPF; vô tuyến không đổi.'}},
  {k: 'BT 6.4 · ngân sách 20 ms', t: 'Chia ngân sách cho từng đoạn', b: 'Ngân sách 20 ms của dịch vụ điều khiển phải chia cho vô tuyến (hai lượt), truyền dẫn, UPF, mạng dữ liệu và máy chủ. Đổi sang dịch vụ eMBB: riêng vô tuyến đã 8 ms đi về, phần còn lại cho máy chủ hẹp lại.', e: 'Σ đoạn ≤ 20 ms'},
  {k: 'Ràng buộc tải · 6.9', t: 'Máy biên ít, thiết bị nhiều', b: 'Site biên chỉ có hai máy. Tăng số robot: mức sử dụng máy chủ tiến tới 1, trễ chờ tăng vọt và vượt cả phần tiết kiệm được nhờ ở gần. Khi đó site vùng, xa hơn nhưng nhiều máy hơn, lại là lựa chọn tốt hơn.', e: 'min Σ w_u·D_svc  s.t.  C_p ≤ C_p^max, A_p ≥ A_min   (6.9)',
    ask: {q: 'Số robot tăng làm máy biên quá tải. Nên làm gì?', o: ['Giữ nguyên, vì biên luôn nhanh nhất', 'Chuyển sang site vùng hoặc thêm máy chủ biên', 'Tăng băng thông vô tuyến'], a: 1, e: 'Trễ chờ ở máy chủ tăng theo ρ/(1 − ρ). Ràng buộc năng lực C_p trong (6.9) quyết định, không riêng khoảng cách.'}},
  {k: 'Kết luận', t: 'Vị trí UPF là một bài toán đánh đổi', b: 'Gần thì nhanh nhưng ít tài nguyên và khó vận hành; xa thì đủ máy nhưng tốn đường. Thiết kế chọn vị trí bằng số đo của từng đoạn và ràng buộc tải, rồi kiểm lại bằng phép đo sau triển khai (Bảng 6.3).', e: 'chọn theo số đo, không theo cảm tính'},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'}); at(6, {click: 'v_ran'});
at(11, {cap: 1}); at(11.5, {click: 'vt2'}); at(12, {click: 'v_far'}); at(18, {click: 'v_hero'});
at(21, {cap: 2}); at(22, {click: 'vt0'}); at(23, {click: 'v_edge'}); at(30, {click: 'v_hero'});
at(32, {cap: 3}); at(34, {click: 'embb'}); at(39, {click: 'urllc'});
at(42, {cap: 4}); at(43, {slide: 'nUE', to: 29 / 59, dur: 2.5}); at(48, {click: 'vt1'}); at(52, {slide: 'nUE', to: 11 / 59, dur: 1.5}); at(53.5, {click: 'vt0'});
at(55, {cap: 5});
ev.sort((a, b) => a.at - b.at);

sim.reset(); tinh(); S.dirty = false;
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 62}, firstView: 'hero', extra: [{key: 'vt0', label: 'UPF biên'}, {key: 'vt2', label: 'UPF trung tâm'}],
  keys: {1: 'v_hero', 2: 'v_ran', 3: 'v_edge', 4: 'v_far'}});
