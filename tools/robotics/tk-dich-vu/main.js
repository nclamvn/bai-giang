// Thiết kế và hiệu năng mạng · tiết 1 · Thiết kế mạng bắt đầu từ dịch vụ.
// Theo giáo trình TEL1459 (Hoàng Trọng Minh, PTIT 2026), mục 1.1–1.5: ánh xạ thiết kế (1.1), hàm mục tiêu đánh đổi (1.2), vòng
// phản hồi vận hành (1.3), mạng như đồ thị có thuộc tính (1.4, 1.5), vector yêu cầu dịch vụ (1.6) và điều kiện nghiệm thu (1.8).
// Mọi con số trên màn hình tính từ kit/mang/dich-vu.js (mô hình hàng đợi WAN, độ sẵn sàng, chi phí); ngưỡng trễ và mất gói theo
// lớp QoS của ITU-T Y.1541, phần còn lại là giả định của bài và được ghi rõ ở thẻ soi.
import * as THREE from 'three';
import {createStage, MAT} from '../kit/stage.js';
import * as SH from '../kit/shapes.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {tag, picker, vn} from '../kit/soi.js';
import * as F from '../kit/mang/cong-thuc.js';
import {boCanh, P, NHO} from '../kit/mang/canh.js';
import {DV, danhGia, mucTieu, PHUONG_AN, K, LBIT, A_WAN} from '../kit/mang/dich-vu.js';

const PI = Math.PI;
const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 22, grid: 1, fade: 70, fov: 26, near: 0.2, far: 300});
const ui = createUI(app);
const root = new THREE.Group(); st.scene.add(root);
const B = boCanh(root), {mk, M} = B;
const MAUDV = Object.fromEntries(DV.map((d) => [d.k, d.mau]));
const TIM = '#7a5ab8', VANG = '#c99a2e';

// ---------------- cảnh: giảng đường, camera, switch lõi, phòng máy (LMS, NVR, sao lưu), router biên, WAN, nhà cung cấp đám mây
const lop = B.nha(-10, 0, 6, 5, 3.2, 'lop');
for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
  const bx = -1.8 + c * 1.8, bz = -1.0 + r * 1.15;
  mk(SH.rbox(1.4, 0.05, 0.6, 0.02), M.desk, lop).position.set(bx, 0.76, bz);
  for (const lx of [-0.62, 0.62]) mk(SH.rbox(0.04, 0.72, 0.5, 0.01), M.panel, lop).position.set(bx + lx, 0.4, bz);
  B.mayTinh(lop, bx, 0.79, bz - 0.1);
}
const manChieu = mk(new THREE.PlaneGeometry(2.6, 1.3), new THREE.MeshBasicMaterial({color: MAUDV.lh}), lop); manChieu.position.set(0, 2.1, -2.3);
// ba cột camera quanh khuôn viên
const CAMP = [P(-13.6, 0, 3.4), P(-6.4, 0, -3.0), P(-2.6, 0, 4.4)];
for (const [i, p] of CAMP.entries()) {
  const g = new THREE.Group(); g.position.copy(p); root.add(g); tag('cam', g);
  mk(new THREE.CylinderGeometry(0.06, 0.08, 2.6, 12), M.panel, g).position.y = 1.3;
  const h = mk(SH.rbox(0.42, 0.22, 0.24, 0.04), MAT.shell('#f4f4f2'), g); h.position.set(0, 2.62, 0); h.rotation.y = [0.7, -2.4, 2.2][i];
  const ong = mk(new THREE.CylinderGeometry(0.07, 0.07, 0.14, 14), M.pc, h); ong.rotation.z = PI / 2; ong.position.x = 0.26;
}
const loi = B.tu(-5.0, 1.6, 1.8, 'loi');
B.nha(1.0, -0.6, 5.2, 4.2, 3.0, 'pm', M.wall2);
const RACK = {lms: -0.4, nvr: 0.9, bk: 2.2};
for (const [k, x] of Object.entries(RACK)) {
  B.tu(x, -1.6, 2.0, k);
  mk(SH.rbox(0.8, 0.06, 0.9, 0.02), new THREE.MeshBasicMaterial({color: k === 'lms' ? MAUDV.hl : k === 'nvr' ? MAUDV.cam : MAUDV.sl}), root).position.set(x, 2.03, -1.6);
}
const bien = B.tu(5.6, 1.4, 1.6, 'bien');
B.nha(12.6, -1, 5.6, 5, 4.0, 'dm', M.wall2);
for (let k = 0; k < 4; k++) for (const zz of [-2.4, -0.9]) B.tu(10.9 + k * 1.0, zz, 2.2, 'dm');
// trạm quản trị (mặt phẳng quản lý) trước phòng máy
const qt = new THREE.Group(); qt.position.set(3.9, 0, 4.4); root.add(qt); tag('qt', qt);
mk(SH.rbox(1.3, 0.05, 0.6, 0.02), M.desk, qt).position.y = 0.76;
for (const lx of [-0.58, 0.58]) mk(SH.rbox(0.04, 0.72, 0.5, 0.01), M.panel, qt).position.set(lx, 0.4, 0);
B.mayTinh(qt, 0, 0.79, -0.1);

// ---------------- tuyến cáp (đặt dưới chân, đi vào mặt trước thiết bị)
const cuA = [P(-8.4, 0.9, 0.6), P(-7.8, 0.15, 2.6), P(-5.8, 0.15, 2.5), P(-5.0, 0.9, 2.08)];
const cuC = [
  [P(-13.6, 0.3, 3.4), P(-9.5, 0.12, 3.7), P(-5.6, 0.12, 2.9), P(-4.9, 0.6, 2.08)],
  [P(-6.4, 0.3, -3.0), P(-6.1, 0.12, -0.6), P(-5.3, 0.12, 0.7), P(-5.0, 0.6, 1.15)],
  [P(-2.6, 0.3, 4.4), P(-3.9, 0.12, 3.4), P(-4.7, 0.6, 2.08)],
];
const cuS = (x) => [P(-4.7, 1.2, 2.08), P(-3.4, 0.15, 2.7), P(x, 0.22, 1.2), P(x, 0.22, -0.9), P(x, 1.0, -1.15)];
const cuR = [P(-4.8, 1.4, 2.08), P(-3.4, 0.15, 3.1), P(2, 0.15, 3.1), P(5.6, 0.15, 2.7), P(5.6, 0.9, 1.88)];
const cuW1 = [P(5.6, 1.3, 1.88), P(7.0, 2.1, 2.4), P(8.6, 2.7, 2.6), P(10.2, 1.8, 2.0), P(11.0, 1.0, 0.6)];
const cuW2 = [P(6.0, 0.9, 1.88), P(7.0, 0.12, 4.6), P(9.6, 0.12, 4.9), P(11.8, 0.15, 3.2), P(12.2, 0.9, 0.6)];
B.cap(cuA, M.cu, 0.05, 'lop'); for (const c of cuC) B.cap(c, M.cu, 0.04, 'cam');
for (const x of Object.values(RACK)) B.cap(cuS(x), M.fiber, 0.045, 'pm');
B.cap(cuR, M.fiber, 0.05, 'bien');
const w1 = B.cap(cuW1, M.wan, 0.07, 'w1');
const matW2 = MAT.plastic('#3b6ea8'); const w2 = B.cap(cuW2, matW2, 0.06, 'w2');
B.dauGay(w1.curve.getPoint(0.5));

// luồng dịch vụ = đường ghép từ các đoạn cáp
const noi = (...ds) => { const o = []; for (const d of ds) for (const p of d) if (!o.length || o[o.length - 1].distanceTo(p) > 0.3) o.push(p); return new THREE.CatmullRomCurve3(o, false, 'centripetal'); };
const nguoc = (a) => [...a].reverse();
const LUONG = {
  lh: [noi(cuA, cuR, cuW1)],
  cam: cuC.map((c) => noi(c, cuS(RACK.nvr))),
  hl: [noi(nguoc(cuS(RACK.lms)), nguoc(cuA))],
  sl: [noi(nguoc(cuS(RACK.bk)), cuR, cuW1)],
};
const ROUTER = P(5.6, 1.1, 1.9);
const sRouter = (cv) => { let b = 0, bd = 1e9; for (let i = 0; i <= 300; i++) { const d = cv.getPoint(i / 300).distanceTo(ROUTER); if (d < bd) { bd = d; b = i / 300; } } return b; };
const SOGOI = {lh: 18, cam: 12, hl: 12, sl: 22};
const goi = [];
for (const d of DV) {
  const cvs = LUONG[d.k].map((cv) => ({cv, len: cv.getLength(), sR: d.qua === 'wan' ? sRouter(cv) : 2}));
  for (let i = 0; i < SOGOI[d.k]; i++) {
    const m = mk(SH.rbox(0.26, 0.14, 0.2, 0.03), B.matGoi(d.mau)); m.castShadow = false; tag('g_' + d.k, m);
    goi.push({k: d.k, m, c: cvs[i % cvs.length], s: (i + Math.random() * 0.6) / SOGOI[d.k], bo: false, roi: 0});
  }
}
// cột hàng đợi ở cổng ra WAN của router biên
const cot = new THREE.Group(); cot.position.set(6.55, 0.2, 1.0); root.add(cot); tag('q', cot);
const ongQ = mk(new THREE.CylinderGeometry(0.2, 0.2, 2.2, 20, 1, true), M.tube, cot); ongQ.position.y = 1.1; ongQ.castShadow = false;
const NQ = 14, qpk = Array.from({length: NQ}, (_, k) => { const m = mk(SH.rbox(0.28, 0.12, 0.2, 0.02), B.matGoi('#8A8F98'), cot); m.position.y = 0.09 + k * 0.15; m.visible = false; return m; });

// ---------------- lớp phủ: đồ thị G = (V, E) (1.4) và ba mặt phẳng (1.4.2)
const gG = new THREE.Group(); root.add(gG); gG.visible = false;
const NUT = {lop: [P(-10, 6, 0), 3.2], cam1: [P(-13.6, 5.2, 3.4), 2.8], cam2: [P(-6.4, 5.2, -3.0), 2.8], cam3: [P(-2.6, 5.2, 4.4), 2.8], loi: [P(-5, 6, 1.6), 1.8],
  lms: [P(-0.4, 6, -1.6), 2.0], nvr: [P(0.9, 6, -1.6), 2.0], bk: [P(2.2, 6, -1.6), 2.0], bien: [P(5.6, 6, 1.4), 1.6], dm: [P(12.6, 6, -1), 4.0]};
const matNut = new THREE.MeshBasicMaterial({color: C.ink}), matCanh = new THREE.MeshBasicMaterial({color: '#626773'}), matCanhWan = new THREE.MeshBasicMaterial({color: '#2F8F5B'});
const matDoc = new THREE.MeshBasicMaterial({color: '#626773', transparent: true, opacity: 0.35});
const truc = (a, b, r, mat, parent) => {
  const d = b.clone().sub(a), m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, d.length(), 8), mat); m.position.copy(a).addScaledVector(d, 0.5);
  m.quaternion.setFromUnitVectors(P(0, 1, 0), d.normalize()); parent.add(m); return m;
};
const mui = (a, b, u, mat, parent) => { const d = b.clone().sub(a), m = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.26, 12), mat); m.position.copy(a).addScaledVector(d, u); m.quaternion.setFromUnitVectors(P(0, 1, 0), d.normalize()); parent.add(m); return m; };
for (const [p, h] of Object.values(NUT)) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.24, 18, 12), matNut); s.position.copy(p); gG.add(s); truc(P(p.x, h + 0.1, p.z), P(p.x, p.y - 0.25, p.z), 0.018, matDoc, gG); }
const CANH = [['lop', 'loi'], ['cam1', 'loi'], ['cam2', 'loi'], ['cam3', 'loi'], ['loi', 'lms'], ['loi', 'nvr'], ['loi', 'bk'], ['loi', 'bien'], ['bien', 'dm']];
for (const [i, j] of CANH) {
  const a = NUT[i][0], b = NUT[j][0], mat = j === 'dm' ? matCanhWan : matCanh;
  truc(a, b, j === 'dm' ? 0.06 : 0.035, mat, gG); mui(a, b, 0.62, mat, gG); mui(b, a, 0.62, mat, gG);
}
// cạnh WAN thứ hai (tách ngả), chỉ hiện khi có hai đường
const gW2 = new THREE.Group(); gG.add(gW2);
{ const a = NUT.bien[0], b = NUT.dm[0], m = a.clone().lerp(b, 0.5).add(P(0, -0.2, 2.2)); truc(a, m, 0.05, matCanhWan, gW2); truc(m, b, 0.05, matCanhWan, gW2); mui(a, m, 0.7, matCanhWan, gW2); mui(b, m, 0.7, matCanhWan, gW2); }
// ba mặt phẳng: bộ điều khiển (điều khiển, hạt tím) và trạm quản trị (quản lý, hạt vàng); mặt phẳng dữ liệu là các gói bốn màu
const gMP = new THREE.Group(); root.add(gMP); gMP.visible = false;
const dk = mk(SH.rbox(1.1, 0.5, 0.7, 0.08), new THREE.MeshPhysicalMaterial({color: TIM, roughness: 0.3, transparent: true, opacity: 0.85}), gMP); dk.position.set(1.0, 4.4, -0.8); tag('dk', dk);
const vong = (a, b, cao) => new THREE.QuadraticBezierCurve3(a, a.clone().lerp(b, 0.5).add(P(0, cao, 0)), b);
const DUONG_DK = [vong(P(1.0, 4.2, -0.8), P(-5, 1.9, 1.6), 1.2), vong(P(1.0, 4.2, -0.8), P(5.6, 1.7, 1.4), 1.2)];
const DUONG_QL = [P(-5, 1.9, 1.6), P(5.6, 1.7, 1.4), P(-0.4, 2.1, -1.6), P(0.9, 2.1, -1.6), P(2.2, 2.1, -1.6), P(-2.6, 2.8, 4.4)].map((b) => vong(P(3.9, 1.3, 4.3), b, 1.6));
const hat = (dsDuong, mau) => dsDuong.flatMap((cv) => Array.from({length: 6}, (_, i) => { const m = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), new THREE.MeshBasicMaterial({color: mau})); gMP.add(m); return {m, cv, u: i / 6}; }));
const HAT = [...hat(DUONG_DK, TIM), ...hat(DUONG_QL, VANG)];
for (const cv of [...DUONG_DK, ...DUONG_QL]) gMP.add(new THREE.Mesh(new THREE.TubeGeometry(cv, 40, 0.012, 6), new THREE.MeshBasicMaterial({color: '#9aa0a6', transparent: true, opacity: 0.5})));

// ---------------- trạng thái
const S = {x: {C: 500, qos: false, kep: false, dem: false, tang: 1}, sel: 0, dothi: false, mp: false, e: null, t: 0};
const tinh = () => { S.e = danhGia(S.x); };

// ---------------- bảng
ui.header({code: 'T1', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · TIẾT 1 · MỤC 1.1–1.5 · THIẾT KẾ THEO DỊCH VỤ', title: 'Thiết kế mạng bắt đầu từ dịch vụ', sub: 'YÊU CẦU · QUYẾT ĐỊNH · ĐÁNH ĐỔI · NGHIỆM THU', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['4', 'DỊCH VỤ'], ['1.1–1.8', 'PHƯƠNG TRÌNH'], ['Y.1541', 'NGƯỠNG QoS']]});
ui.panel(28, 112, 300, 232, 'BỐN DỊCH VỤ · MỘT MẠNG', '01');
const dvRows = DV.map((d, i) => {
  const y = 146 + i * 48; if (i < 3) ui.rule(42, y + 44, 272);
  ui.add(`<div style="position:absolute;left:42px;top:${y + 3}px;width:9px;height:9px;border-radius:2px;background:${d.mau}"></div>`);
  const BV = "font-family:'Be Vietnam Pro',system-ui,sans-serif;";
  return {ten: ui.text(56, y, d.ten, 'v', BV + 'font-size:11.5px;font-weight:600;width:170px;white-space:nowrap'), kq: ui.text(214, y, '', 'v', BV + 'font-size:10.5px;font-weight:700;width:100px;text-align:right;white-space:nowrap'),
    sub: ui.text(42, y + 16, '', 'v', BV + 'font-size:10px;color:#626773;width:272px;white-space:nowrap'), g: ui.bar(42, y + 30, 272, 'GOODPUT', {lw: 60, vw: 92})};
});
ui.panel(28, 356, 300, 210, 'QUYẾT ĐỊNH THIẾT KẾ X_NET · 1.1', '02');
const xSvg = ui.svg(42, 390, 272, 96);
const slT = ui.slider('tang', 42, 496, 272, 'TẢI LỚP HỌC', {lw: 92, vw: 96});
const xTxt = ui.text(42, 522, '', 'sm', NHO);
ui.panel(28, 578, 300, 188, 'ĐÁNH ĐỔI J(x) · 1.2', '03');
const jSvg = ui.svg(42, 612, 272, 110);
const jTxt = ui.text(42, 728, '', 'sm', NHO);

ui.panel(1272, 112, 300, 300, 'VECTOR YÊU CẦU r_s · 1.6', '04');
const rTen = ui.text(1286, 146, '', 'v', 'font-size:12px;font-weight:700;width:272px;white-space:nowrap');
const rSvg = ui.svg(1286, 168, 272, 196);
const rTxt = ui.text(1286, 370, '', 'sm', NHO);
ui.panel(1272, 424, 300, 190, 'ĐIỀU KIỆN NGHIỆM THU · 1.8', '05');
const nSvg = ui.svg(1286, 458, 272, 116);
const nTxt = ui.text(1286, 580, '', 'sm', NHO);
ui.panel(1272, 626, 300, 140, 'THUỘC TÍNH LIÊN KẾT WAN c_ij · 1.5', '06');
const cSvg = ui.svg(1286, 656, 272, 70);
const cBar = ui.bar(1286, 734, 272, 'ρ WAN', {lw: 52, vw: 70});

ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_lop', 'GIẢNG ĐƯỜNG'], ['v_wan', 'ĐƯỜNG WAN'], ['c500', 'WAN 500 MBIT/S'], ['c1g', 'WAN 1 GBIT/S'], ['qos', 'ƯU TIÊN LỚP HỌC'], ['kep', 'HAI ĐƯỜNG WAN'], ['dem', 'SAO LƯU BAN ĐÊM'],
  ['dothi', 'ĐỒ THỊ G = (V, E)'], ['matphang', 'BA MẶT PHẲNG'], ['pa0', 'PA TIẾT KIỆM'], ['pa1', 'PA CÂN BẰNG'], ['pa2', 'PA MUA BĂNG THÔNG'], ['s0', 'r LỚP HỌC'], ['s1', 'r CAMERA'], ['s2', 'r HỌC LIỆU'], ['s3', 'r SAO LƯU']], 360, 120, 880);
ui.text(362, 664, 'NGHIỆM THU');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 196);
const CALL = [{key: 'lop', title: 'GIẢNG ĐƯỜNG A', sub: 'LỚP HỌC TRỰC TUYẾN'}, {key: 'cam', title: 'CAMERA', sub: '40 LUỒNG × 4 MBIT/S'}, {key: 'loi', title: 'SWITCH LÕI', sub: '10 GBIT/S'},
  {key: 'pm', title: 'PHÒNG MÁY', sub: 'LMS · NVR · SAO LƯU'}, {key: 'bien', title: 'ROUTER BIÊN', sub: 'CỔNG RA WAN'}, {key: 'dm', title: 'ĐÁM MÂY', sub: ''}];
ui.callouts(CALL);
const callSub = (k) => ui.root.querySelectorAll('.call')[CALL.findIndex((c) => c.key === k)]?.querySelector('span');

// ---------------- định dạng
const SUP = {'-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹'};
const mu10 = (e) => '10' + String(e).split('').map((c) => SUP[c] ?? c).join('');
const fP = (p) => (p <= 0 ? '≈ 0' : p < 1e-9 ? '< ' + mu10(-9) : p < 1e-3 ? `${vn(p / 10 ** Math.floor(Math.log10(p)), 1)}·${mu10(Math.floor(Math.log10(p)))}` : `${vn(p * 100, p < 0.01 ? 2 : 1)} %`);
const fA = (a) => `${vn(a * 100, 3)} %`;
const fMs = (s) => (s < 1e-3 ? `${vn(s * 1e6, 0)} µs` : `${vn(s * 1e3, s < 0.01 ? 2 : 1)} ms`);
const DAT = '#2F8F5B', HONG = '#B3261E';
const dau = (ok) => (ok == null ? `<tspan fill="#9aa0a6">–</tspan>` : ok ? `<tspan fill="${DAT}">✓</tspan>` : `<tspan fill="${HONG}">✗</tspan>`);
const T = (x, y, s, o = '') => `<text x="${x}" y="${y}" font-family="Be Vietnam Pro" font-size="10" fill="${C.ink}" ${o}>${s}</text>`;
const TM = (x, y, s, o = '') => `<text x="${x}" y="${y}" font-family="JetBrains Mono" font-size="9.5" fill="${C.ink}" ${o}>${s}</text>`;
const trec = (d) => (d.qua !== 'wan' ? null : S.x.kep ? 1 : 2 * 3600); // đổi sang đường dự phòng ≈ 1 s (giả định); một đường: chờ sửa MTTR 2 h
const fT = (t) => (t == null ? '—' : t < 60 ? `${vn(t, 0)} s` : t < 3600 ? `${vn(t / 60, 0)} phút` : `${vn(t / 3600, 0)} h`);

// ---------------- mô phỏng
const PA = (i) => Object.assign(S.x, PHUONG_AN[i].x);
const giong = (a, b) => a.C === b.C && a.qos === b.qos && a.kep === b.kep && a.dem === b.dem;
const sim = {
  S,
  reset() { Object.assign(S, {x: {C: 500, qos: false, kep: false, dem: false, tang: 1}, sel: 0, dothi: false, mp: false, t: 0}); tinh(); },
  busy: () => false,
  isOn: (k) => (k === 'c500' ? S.x.C === 500 : k === 'c1g' ? S.x.C === 1000 : k === 'qos' || k === 'kep' || k === 'dem' ? S.x[k] : k === 'dothi' ? S.dothi : k === 'matphang' ? S.mp
    : k[0] === 'p' && k[1] === 'a' ? giong(S.x, PHUONG_AN[+k[2]].x) : k[0] === 's' && k.length === 2 ? S.sel === +k[1] : false),
  act(k) {
    if (k === 'c500') S.x.C = 500; else if (k === 'c1g') S.x.C = 1000;
    else if (k === 'qos' || k === 'kep' || k === 'dem') S.x[k] = !S.x[k];
    else if (k === 'dothi') S.dothi = !S.dothi; else if (k === 'matphang') S.mp = !S.mp;
    else if (k.startsWith('pa')) PA(+k[2]); else if (k[0] === 's' && k.length === 2) S.sel = +k[1];
    else return;
    tinh();
  },
  slide(k, t) { if (k === 'tang') { S.x.tang = 1 + Math.round(t * 50) / 100; tinh(); } },
  keyDown() { return false; },
  step(dt) {
    S.t += dt; const e = S.e;
    for (const g of goi) {
      const d = e.kq[g.k], an = g.k === 'sl' && S.x.dem; g.m.visible = !an; if (an) continue;
      if (g.roi > 0) { g.roi += dt; if (g.roi > 0.9) { g.roi = 0; g.s = 0; g.bo = Math.random() < d.v.P; } continue; }
      const s0 = g.s; g.s += (dt * 2.6) / g.c.len;
      if (g.bo && s0 < g.c.sR && g.s >= g.c.sR) { g.roi = 1e-3; g.s = g.c.sR; continue; }
      if (g.s >= 1) { g.s -= 1; g.bo = g.c.sR < 1 && Math.random() < d.v.P; }
    }
    for (const h of HAT) h.u = (h.u + dt * 0.25) % 1;
  },
  shadowAt() { return new THREE.Vector3(0, 10, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const e = S.e, x = S.x; if (!e) return;
    for (const k of ['c500', 'c1g', 'qos', 'kep', 'dem', 'dothi', 'matphang', 'pa0', 'pa1', 'pa2', 's0', 's1', 's2', 's3']) ui.setOn(k, sim.isOn(k));
    // gói
    for (const g of goi) {
      if (!g.m.visible) continue;
      if (g.roi > 0) { const u = g.roi; g.m.position.set(ROUTER.x + 0.5 + u * 0.6, Math.max(0.12, 1.3 - 2.4 * u * u), ROUTER.z + 0.6 + u * 0.4); g.m.rotation.z = u * 3; g.m.material = B.matGoi(HONG); continue; }
      g.m.material = B.matGoi(MAUDV[g.k]); g.m.rotation.z = 0;
      g.m.position.copy(g.c.cv.getPoint(Math.min(1, g.s))); g.m.position.y += 0.15;
      const sc = DV[S.sel].k === g.k ? 1.25 : 1; g.m.scale.set(sc, sc, sc);
    }
    // hàng đợi cổng WAN: số gói chờ trung bình L_q = λ·W_q (Little), tối đa 14 ô hiển thị
    const lam1 = (DV[0].b * (x.tang ?? 1) * 1e6) / LBIT, lam2 = x.dem ? 0 : (DV[3].b * 1e6) / LBIT;
    const n1 = Math.min(NQ, Math.round(lam1 * e.kq.lh.v.J)), n2 = x.dem ? 0 : Math.min(NQ, Math.round(lam2 * e.kq.sl.v.J));
    const tong = Math.min(NQ, x.qos ? n1 + n2 : Math.max(n1, n2)), phanLH = lam1 / (lam1 + lam2);
    qpk.forEach((m, k) => { m.visible = k < tong; if (!m.visible) return; const laLH = x.qos ? k < n1 : Math.floor((k + 1) * phanLH) > Math.floor(k * phanLH); m.material = B.matGoi(laLH ? MAUDV.lh : MAUDV.sl); });
    // đường WAN thứ hai và lớp phủ
    w2.mesh.visible = x.kep; gW2.visible = x.kep; matW2.opacity = 1;
    gG.visible = S.dothi; matCanhWan.color.set(e.rho > 1 ? HONG : e.rho > 0.8 ? '#C98A12' : DAT);
    gMP.visible = S.mp; for (const h of HAT) h.m.position.copy(h.cv.getPoint(h.u));
    manChieu.material.color.set(e.kq.lh.dat ? MAUDV.lh : '#5c6470');

    // bảng 01
    DV.forEach((d, i) => {
      const r = dvRows[i], k = e.kq[d.k], an = d.k === 'sl' && x.dem, bmin = d.r.Bmin * (d.k === 'lh' ? x.tang : 1);
      r.kq.innerHTML = k.dat ? `<span style="color:${DAT}">ĐẠT</span>` : `<span style="color:${HONG}">CHƯA ĐẠT</span>`;
      r.sub.textContent = `${d.qua === 'wan' ? 'qua WAN' : 'trong trường'} · ${vn(d.b * (d.k === 'lh' ? x.tang : 1), 0)} Mbit/s · Y.1541 lớp ${d.y1541}${an ? ' · chạy 0h–6h' : ''}`;
      r.g.set(Math.min(1, k.v.G / bmin), `${vn(k.v.G, 0)} / ${vn(bmin, 0)}`, k.ok.G ? DAT : HONG);
    });
    // bảng 02
    const hang = [['Dung lượng WAN C', `${x.C === 1000 ? '1 Gbit/s' : '500 Mbit/s'}`], ['Chính sách hàng đợi q', x.qos ? 'ưu tiên lớp học' : 'một hàng chung (FIFO)'], ['Dự phòng WAN', x.kep ? 'hai đường tách ngả' : 'một đường'], ['Lịch sao lưu', x.dem ? 'ban đêm 0h–6h' : 'ban ngày, cùng giờ học']];
    xSvg.innerHTML = hang.map(([a, b], i) => T(0, 12 + i * 22, a, 'fill="#626773"') + T(272, 12 + i * 22, b, 'text-anchor="end" font-weight="600"') + `<line x1="0" x2="272" y1="${18 + i * 22}" y2="${18 + i * 22}" stroke="${C.line}"/>`).join('');
    slT.set((x.tang - 1) / 0.5, `×${vn(x.tang, 2)} · ${vn(300 * x.tang, 0)} Mbit/s`);
    xTxt.innerHTML = `D: (R<sub>svc</sub>, C<sub>env</sub>) → X<sub>net</sub>. R<sub>svc</sub>: bốn vector ở bảng 04. Tải lớp học tăng là nhiễu w<sub>k</sub> (1.3).`;
    // bảng 03
    const dong = [...PHUONG_AN.map((p) => ({ten: p.ten, e: danhGia({...p.x, tang: x.tang})})), {ten: 'Đang chọn', e, cur: true}].map((r) => ({...r, m: mucTieu(r.e)}));
    const best = Math.min(...dong.slice(0, 3).map((r) => r.m.J));
    let g3 = ['PHƯƠNG ÁN', 'D', 'MẤT', 'C_op', 'A', 'J'].map((h, j) => TM([0, 134, 174, 204, 232, 272][j], 10, h, `fill="#626773" font-size="8.5" ${j ? 'text-anchor="end"' : ''}`)).join('');
    dong.forEach((r, i) => {
      const y = 30 + i * 21 + (r.cur ? 6 : 0), dam = r.cur || r.m.J === best ? 'font-weight="700"' : '';
      if (r.cur) g3 += `<line x1="0" x2="272" y1="${y - 14}" y2="${y - 14}" stroke="${C.line}"/>`;
      g3 += T(0, y, (r.e.datHet ? '<tspan fill="' + DAT + '">● </tspan>' : '<tspan fill="' + HONG + '">● </tspan>') + r.ten, dam + ' font-size="9.5"');
      g3 += TM(134, y, fMs(r.e.kq.lh.v.D), 'text-anchor="end"') + TM(174, y, fP(Math.max(r.e.kq.lh.v.P, r.e.kq.sl.v.P)), 'text-anchor="end"') + TM(204, y, vn(r.e.cop, 2), 'text-anchor="end"') + TM(232, y, vn(r.m.A, 1), 'text-anchor="end"') + TM(272, y, vn(r.m.J, 2), `text-anchor="end" ${dam}`);
    });
    jSvg.innerHTML = g3;
    jTxt.innerHTML = `● đạt hết (1.8) · ● chưa. J = D/10 ms + mất (%) + C<sub>op</sub> − số chữ số 9 của A; α = 1, chi phí theo đơn vị là giả định của bài. J nhỏ hơn là tốt hơn.`;
    // bảng 04
    const d = DV[S.sel], k = e.kq[d.k], r = d.r;
    rTen.innerHTML = `<span style="color:${d.mau}">■</span> ${d.ten} · Y.1541 lớp ${d.y1541}`;
    const tr = trec(d);
    const R = [['B_min', 'tối thiểu', `${vn(r.Bmin * (d.k === 'lh' ? x.tang : 1), 0)} Mbit/s`, `${vn(k.v.G, 0)}`, k.ok.G], ['B_max', 'tốc độ đỉnh', `${vn(r.Bmax, 0)} Mbit/s`, 'định cỡ', null],
      ['D_max', 'trễ', r.Dmax == null ? 'không quy định' : fMs(r.Dmax), fMs(k.v.D), r.Dmax == null ? null : k.ok.D], ['J_max', 'biến thiên trễ', r.Jmax == null ? 'không quy định' : fMs(r.Jmax), fMs(k.v.J), r.Jmax == null ? null : k.ok.J],
      ['P_max', 'mất gói', fP(r.Pmax), fP(k.v.P), k.ok.P], ['A_min', 'sẵn sàng', fA(r.Amin), fA(k.v.A), k.ok.A], ['T_rec', 'phục hồi', fT(r.Trec), fT(tr), tr == null ? null : tr <= r.Trec]];
    let g4 = TM(0, 10, 'THÀNH PHẦN', 'fill="#626773" font-size="8.5"') + TM(196, 10, 'YÊU CẦU', 'fill="#626773" font-size="8.5" text-anchor="end"') + TM(252, 10, 'ĐO', 'fill="#626773" font-size="8.5" text-anchor="end"');
    R.forEach(([sym, ten, yc, do_, ok], i) => {
      const y = 32 + i * 24;
      g4 += TM(0, y, sym.replace('_', ''), 'font-weight="700"') + T(40, y, ten, 'fill="#626773" font-size="9"') + TM(196, y, yc, 'text-anchor="end"') + TM(252, y, do_, 'text-anchor="end"') + T(272, y, dau(ok), 'text-anchor="end" font-size="12" font-weight="700"');
      g4 += `<line x1="0" x2="272" y1="${y + 8}" y2="${y + 8}" stroke="${C.line}"/>`;
    });
    rSvg.innerHTML = g4;
    rTxt.innerHTML = `Trễ, biến thiên trễ, mất gói theo lớp ${d.y1541} của ITU-T Y.1541; băng thông, sẵn sàng, phục hồi là giả định của bài. Ô không quy định thì không có tiêu chí kiểm ở ô đó.`;
    // bảng 05: ma trận (1.8)
    const COT = [['D', 'D ≤ Dmax'], ['J', 'J ≤ Jmax'], ['P', 'P ≤ Pmax'], ['G', 'G ≥ Gmin'], ['A', 'A ≥ Amin']];
    let g5 = COT.map(([c], j) => TM(104 + j * 26, 10, c, 'fill="#626773" text-anchor="middle"')).join('') + TM(272, 10, 'KẾT LUẬN', 'fill="#626773" font-size="8.5" text-anchor="end"');
    DV.forEach((dv, i) => {
      const y = 34 + i * 22, kk = e.kq[dv.k];
      g5 += `<rect x="0" y="${y - 8}" width="8" height="8" rx="2" fill="${dv.mau}"/>` + T(13, y, dv.ten.replace(' trực tuyến', '').replace(' giám sát', '').replace(' ra đám mây', ''), S.sel === i ? 'font-weight="700"' : '');
      COT.forEach(([c], j) => { const ok = c === 'D' && dv.r.Dmax == null ? null : c === 'J' && dv.r.Jmax == null ? null : kk.ok[c]; g5 += T(104 + j * 26, y, dau(ok), 'text-anchor="middle" font-size="12" font-weight="700"'); });
      g5 += T(272, y, kk.dat ? `<tspan fill="${DAT}">đạt</tspan>` : `<tspan fill="${HONG}">chưa đạt</tspan>`, 'text-anchor="end" font-weight="700"');
      g5 += `<line x1="0" x2="272" y1="${y + 8}" y2="${y + 8}" stroke="${C.line}"/>`;
    });
    nSvg.innerHTML = g5;
    const so = DV.filter((dv) => e.kq[dv.k].dat).length;
    nTxt.innerHTML = `Một dịch vụ đạt khi đủ cả năm ô. – : yêu cầu không quy định ngưỡng. Đạt <b>${so}/4</b>; quyết định bằng so sánh số đo với ngưỡng.`;
    // bảng 06
    const Pagg = x.qos ? Math.max(e.kq.lh.v.P, e.kq.sl.v.P) : e.kq.lh.v.P;
    const c6 = [['C  dung lượng', `${x.C === 1000 ? '1 000' : '500'} Mbit/s`], ['d  trễ lan truyền', '2,5 ms (500 km)'], ['p  xác suất mất', fP(Pagg)], ['a  độ sẵn sàng', `${fA(A_WAN)}${x.kep ? ' mỗi ngả' : ''}`], ['q  hàng đợi', x.qos ? 'ưu tiên lớp học' : 'FIFO']];
    cSvg.innerHTML = c6.map(([a, b], i) => { const y = 10 + i * 13; return TM(0, y, a, 'fill="#626773"') + TM(272, y, b, 'text-anchor="end" font-weight="700"'); }).join('');
    cBar.set(Math.min(1, e.rho), vn(e.rho, 2), e.rho > 1 ? HONG : e.rho > 0.8 ? '#C98A12' : DAT);
    // chế độ
    const hong = DV.filter((dv) => !e.kq[dv.k].dat).map((dv) => dv.ten.split(' ')[0] === 'Học' ? 'học liệu' : dv.ten.split(' ').slice(0, 2).join(' ').toLowerCase());
    modeEl.textContent = so === 4 ? 'Đạt cả bốn dịch vụ' : `Đạt ${so}/4 dịch vụ`;
    modeSub.textContent = so === 4 ? `ρ WAN = ${vn(e.rho, 2)} · chi phí ${vn(e.cop, 2)} đơn vị · J = ${vn(mucTieu(e).J, 2)}` : `chưa đạt: ${hong.join(', ')} · ρ WAN = ${vn(e.rho, 2)} · chi phí ${vn(e.cop, 2)} đơn vị`;
    alert.set(e.rho > 1 ? (x.qos ? 'WAN QUÁ TẢI · LỚP HỌC ĐƯỢC ƯU TIÊN, SAO LƯU BỊ CẮT' : 'WAN QUÁ TẢI · MỌI LUỒNG CÙNG MẤT GÓI') : '');
    const sdm = callSub('dm'); if (sdm) sdm.textContent = `${x.kep ? 'HAI ĐƯỜNG WAN' : 'MỘT ĐƯỜNG WAN'} · ${x.C === 1000 ? '1 GBIT/S' : '500 MBIT/S'}`;
    const spm = callSub('pm'); if (spm) spm.textContent = x.dem ? 'LMS · NVR · SAO LƯU 0H–6H' : 'LMS · NVR · SAO LƯU ĐANG CHẠY';
    const W3 = (v) => st.project(v.x, v.y, v.z);
    ui.drawCallouts([
      {key: 'lop', p: W3(P(-10, 3.3, -1)), dx: 30, dy: -70}, {key: 'cam', p: W3(P(-2.6, 2.8, 4.4)), dx: -30, dy: 80}, {key: 'loi', p: W3(P(-5, 1.9, 1.6)), dx: -10, dy: -90},
      {key: 'pm', p: W3(P(1, 3.1, -0.6)), dx: -20, dy: -60}, {key: 'bien', p: W3(P(5.6, 1.7, 1.4)), dx: 20, dy: 70}, {key: 'dm', p: W3(P(12.6, 4.1, -1)), dx: 40, dy: -40},
    ], 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình Thiết kế và hiệu năng mạng (TEL1459, PTIT 2026), mục 1.1–1.5. Ngưỡng trễ, biến thiên trễ, mất gói: ITU-T Y.1541 (2011), bảng 1 lớp QoS 0, 3, 4, 5. Độ sẵn sàng một đường WAN MTBF 2 000 h, MTTR 2 h như bài tập 8 chương 2. Băng thông dịch vụ, chi phí, bộ đệm 200 gói, gói trung bình 1 250 byte, trễ cố định 3,5 ms là giả định của bài.';
function cardOf(part) {
  const e = S.e, base = {src: SRC}; if (!e) return null;
  const the = (k, t, b, dk) => ({...base, k, t, b, rows: [['Goodput', () => `${vn(S.e.kq[dk].v.G, 0)} Mbit/s`], ['Trễ một chiều', () => fMs(S.e.kq[dk].v.D)], ['Mất gói', () => fP(S.e.kq[dk].v.P)], ['Độ sẵn sàng', () => fA(S.e.kq[dk].v.A)]]});
  if (part === 'lop' || part === 'g_lh') return the('Dịch vụ 1', 'Lớp học trực tuyến', '120 phiên × 2,5 Mbit/s đi ra nền tảng trên đám mây. Nhạy với trễ và biến thiên trễ: thuộc lớp 0 của Y.1541.', 'lh');
  if (part === 'cam' || part === 'nvr' || part === 'g_cam') return the('Dịch vụ 2', 'Camera giám sát', '40 camera × 4 Mbit/s ghi về máy NVR trong phòng máy, không ra WAN. Cần thông lượng ổn định, chấp nhận trễ tới 1 s (lớp 4).', 'cam');
  if (part === 'lms' || part === 'g_hl') return the('Dịch vụ 3', 'Học liệu (LMS)', 'Máy chủ học liệu đặt trong trường, phục vụ giảng đường qua lõi 10 Gbit/s. Lớp 3 của Y.1541: trễ tới 400 ms.', 'hl');
  if (part === 'bk' || part === 'g_sl') return the('Dịch vụ 4', 'Sao lưu ra đám mây', '400 Mbit/s trong khung giờ sao lưu. Ít nhạy với trễ (lớp 5, không quy định) nhưng chiếm băng thông đáng kể: chạy ban ngày thì tranh WAN với lớp học.', 'sl');
  if (part === 'bien' || part === 'q' || part === 'w1') return {...base, k: 'Nút thắt', t: 'Cổng ra WAN của router biên', b: 'Lớp học và sao lưu dùng chung cổng này. Khi tổng tải vượt dung lượng, phần vượt bị bỏ; chính sách hàng đợi quyết định luồng nào chịu thiệt.', rows: [['ρ', () => vn(S.e.rho, 2)], ['Gói chờ lớp học', () => fMs(S.e.kq.lh.v.J)], ['Gói chờ sao lưu', () => fMs(S.e.kq.sl.v.J)]]};
  if (part === 'w2') return {...base, k: 'Dự phòng', t: 'Đường WAN thứ hai, tách ngả', b: 'Chờ sẵn; khi đường chính hỏng, lưu lượng chuyển sang trong khoảng 1 s (giả định có phát hiện lỗi nhanh). Hai ngả độc lập: A = 1 − (1 − 0,999)².', rows: [['Độ sẵn sàng hai ngả', () => fA(S.e.A)]]};
  if (part === 'loi') return {...base, k: 'Lõi', t: 'Switch lõi 10 Gbit/s', b: 'Mọi luồng trong trường đi qua đây. Tổng tải trong trường dưới 1 Gbit/s nên lõi gần như rỗng: nâng lõi không sửa được lỗi ở WAN.', rows: []};
  if (part === 'pm') return {...base, k: 'Phòng máy', t: 'LMS, NVR, máy sao lưu', b: 'Ba tủ, mỗi tủ một dịch vụ; dải màu trên nóc tủ là màu luồng.', rows: []};
  if (part === 'dm') return {...base, k: 'Đích ngoài trường', t: 'Nhà cung cấp đám mây', b: 'Nền tảng lớp học trực tuyến và kho sao lưu đặt ở đây. Đường WAN dài khoảng 500 km (giả định), lan truyền 2,5 ms.', rows: [['Chi phí WAN', () => `${vn(S.e.cop, 2)} đơn vị`]]};
  if (part === 'qt') return {...base, k: 'Mặt phẳng quản lý', t: 'Trạm quản trị', b: 'Cấu hình, giám sát, ghi sự kiện, telemetry. Dữ liệu cấu hình và trạng thái mô hình hoá bằng YANG, đọc ghi qua NETCONF hoặc RESTCONF.', rows: []};
  if (part === 'dk') return {...base, k: 'Mặt phẳng điều khiển', t: 'Bộ điều khiển', b: 'Tính đường đi, trao đổi định tuyến, giữ trạng thái điều khiển. Với SDN, mặt phẳng này tách khỏi thiết bị chuyển tiếp (RFC 7426).', rows: []};
  return null;
}

// ---------------- góc nhìn
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 0.5, ty: 1.4, tz: 0.6, az: -62 + 3 * Math.sin(t * 0.05), el: 36, d: 54, sx: 0, sy: -10} : {tx: 0.5, ty: 1.4, tz: 0.6, az: -8 + 4 * Math.sin(t * 0.05), el: 30, d: 54, sx: 0, sy: -10}),
  lop: () => ({tx: -8, ty: 1.2, tz: 1.4, az: -24, el: 20, d: 22, sx: 0, sy: -30}),
  wan: () => ({tx: 7.6, ty: 1.6, tz: 1.8, az: 10, el: 18, d: 22, sx: 0, sy: -30}),
};

// ---------------- bài giảng · tiết 1 (45 phút), theo mục 1.1–1.5 của giáo trình; giáo án: tools/giao-an-mang/tk-dich-vu.json
// Tên bước (t) phải khớp từng bước của giáo án; tests/smoke.py kiểm.
const CAP = [
  {k: 'Tiết 1 · mục 1.1', t: 'Một mạng trường, bốn dịch vụ khác nhau', b: 'Cùng một mạng trường phải phục vụ đồng thời bốn luồng có yêu cầu rất khác nhau. Lớp học trực tuyến nhạy với trễ và biến thiên trễ; camera cần thông lượng ổn định; học liệu cần độ sẵn sàng cao; sao lưu chấp nhận trễ lớn nhưng tiêu thụ nhiều băng thông. Cảnh đang chạy phương án rẻ nhất: một đường WAN 500 Mbit/s, một hàng đợi chung, sao lưu chạy giờ học. Thiết bị vẫn chạy bình thường, vậy mà hai dịch vụ không đạt.', e: 'nút thắt không nằm ở tốc độ danh định của thiết bị'},
  {k: 'Hình 1.1', t: 'Từ yêu cầu tới kiểm chứng và quay lại', b: 'Quy trình đi từ bối cảnh dịch vụ và yêu cầu (người dùng, ứng dụng, SLA/SLO), sang thiết kế logic và vật lý, sang mô hình hoá với metric, tải làm việc và kịch bản đo, rồi đo kiểm độ trễ, mất gói, goodput, độ sẵn sàng, cuối cùng kết luận đạt hay không đạt. Chưa đạt thì quay lại sửa thiết kế, mô hình đo hoặc giả thuyết tải. Ở cổng WAN, gói lớp học và gói sao lưu cùng rơi (đỏ): đó là kết quả đo phải đưa ngược về thiết kế.', e: 'yêu cầu → thiết kế → mô hình → đo kiểm → kết luận, hai vòng phản hồi'},
  {k: 'Mục 1.2.1', t: 'Mạng, thiết kế mạng, hiệu năng mạng', b: 'Mạng truyền thông là tập nút, liên kết, giao thức và chính sách để truyền, chuyển tiếp, điều khiển và quản lý thông tin. Thiết kế mạng là xác định kiến trúc logic, kiến trúc vật lý, cơ chế điều khiển, bảo mật, quản lý và kế hoạch kiểm thử cho một tập yêu cầu đã lượng hoá. Hiệu năng mạng là mức đáp ứng yêu cầu, đo bằng trễ, biến thiên trễ, mất gói, thông lượng, goodput, mức sử dụng, độ sẵn sàng và thời gian phục hồi; ITU-T Y.1540 định nghĩa các tham số này cho dịch vụ IP.', e: 'thiết kế cho yêu cầu đã lượng hoá, không cho tính từ'},
  {k: 'Phương trình 1.1', t: 'Thiết kế là một ánh xạ', b: 'Thiết kế ánh xạ yêu cầu dịch vụ R_svc và ràng buộc môi trường C_env (địa điểm, ngân sách, thiết bị, nhân lực, chính sách) sang tập quyết định X_net. Bảng 02 là X_net của bài: dung lượng WAN, chính sách hàng đợi, dự phòng, lịch sao lưu. Mỗi quyết định phải có căn cứ từ một yêu cầu. Bật Ưu tiên lớp học: lớp học hết mất gói vì yêu cầu trễ thấp của nó được đưa vào chính sách hàng đợi, còn sao lưu chịu phần thiếu.', e: 'D : (R_svc, C_env) → X_net   (1.1)',
    ask: {q: 'Lớp học mất gói khi sao lưu chạy giờ học. Quyết định nào có căn cứ từ yêu cầu của lớp học?', o: ['Thay switch lõi đời mới', 'Ưu tiên lớp học ở cổng WAN hoặc dời sao lưu', 'Thêm camera cho giảng đường'], a: 1, e: 'Nghẽn ở cổng ra WAN chứ không ở lõi 10 Gbit/s đang gần như rỗng. Hai quyết định này tác động đúng chỗ yêu cầu chỉ ra.'}},
  {k: 'Phương trình 1.2', t: 'Không tối ưu được mọi thứ cùng lúc', b: 'Bảng 03 tính J(x) cho ba phương án. Tiết kiệm rẻ nhất nhưng mất gần 29 % gói. Mua băng thông (1 Gbit/s, hai đường) đạt hết với chi phí 3,6 đơn vị. Cân bằng giữ 500 Mbit/s, ưu tiên lớp học, dời sao lưu ra ban đêm, thêm đường thứ hai: đạt hết với 2,15 đơn vị và J nhỏ nhất. Trọng số α phản ánh mức ưu tiên; đổi α thì thứ hạng có thể đổi. Công thức không thay quyết định kỹ thuật, nó làm lộ ra sự đánh đổi.', e: 'min J(x) = α1·D(x) + α2·P_loss(x) + α3·C_op(x) − α4·A(x)   (1.2)',
    ask: {q: 'Phương án Mua băng thông cũng đạt mọi yêu cầu. Vì sao J của nó lớn hơn Cân bằng?', o: ['Vì độ trễ lớn hơn nhiều', 'Vì chi phí gần gấp 1,7 lần trong khi trễ và mất gói gần như không tốt thêm', 'Vì độ sẵn sàng thấp hơn'], a: 1, e: '3,6 so với 2,15 đơn vị. Trễ hai phương án chênh nhau vài chục micro giây, độ sẵn sàng như nhau.'}},
  {k: 'Hình 1.2 · phương trình 1.3', t: 'Chu trình sáu bước và vòng phản hồi', b: 'Sáu bước: phân tích yêu cầu, thiết kế logic, thiết kế vật lý, kiểm thử, triển khai, giám sát. Bỏ kiểm thử thì lỗi chỉ lộ ra khi khai thác; bỏ giám sát thì không có dữ liệu để hiệu chỉnh. Tải lớp học tăng 30 % là nhiễu w_k: phương án Cân bằng vẫn đạt nhờ dư địa. Sao lưu chạy bù vào giờ học là nhiễu thứ hai: ưu tiên giữ lớp học đạt, sao lưu hụt thông lượng. Số đo y_k báo điều đó; người vận hành đáp lại bằng hành động u_k.', e: 'x_(k+1) = f(x_k, u_k, w_k),  y_k = g(x_k)   (1.3)'},
  {k: 'Mục 1.3.1 · bảng 1.1', t: 'Yêu cầu, QoS, SLA, metric khác nhau thế nào', b: 'Yêu cầu dịch vụ là điều ứng dụng cần: hình ổn định, tiếng không đứt, đủ người tham gia. QoS là cơ chế mạng dùng để phục vụ: phân lớp, ưu tiên hàng đợi, giới hạn lưu lượng nền, như nút Ưu tiên lớp học. SLA là cam kết định lượng: trễ một chiều không quá 100 ms, mất gói dưới 10⁻³, sẵn sàng 99,95 %. Metric là đại lượng đo được để kiểm SLA, có điểm đo, điều kiện đo và cách tính: trễ một chiều (RFC 7679), mất gói (RFC 7680), biến thiên trễ (RFC 3393).', e: 'yêu cầu dịch vụ → QoS → SLA → metric   (bảng 1.1)',
    ask: {q: '"Lớp học không được giật" thuộc loại nào trong bảng 1.1?', o: ['Yêu cầu dịch vụ', 'SLA', 'Metric hiệu năng'], a: 0, e: 'Đó là điều ứng dụng cần, nói bằng lời. Muốn nghiệm thu phải đổi thành SLA có ngưỡng và metric có điều kiện đo.'}},
  {k: 'Mục 1.3.2', t: 'Luồng lưu lượng và năm nhóm thông tin', b: 'Luồng là tập gói có chung thuộc tính nhận dạng: địa chỉ nguồn, đích, cổng, giao thức, lớp dịch vụ hoặc lát cắt. Bốn màu gói trong cảnh là bốn luồng. Mô tả một dịch vụ cần ít nhất năm nhóm: nguồn và đích, mô hình lưu lượng, yêu cầu hiệu năng, yêu cầu bảo mật, yêu cầu phục hồi. Thiếu mô hình lưu lượng thì dung lượng chỉ là ước lượng thô; thiếu ngưỡng thì không kết luận được; thiếu yêu cầu phục hồi thì không có tiêu chí chọn dự phòng.', e: 'luồng = gói chung (nguồn, đích, cổng, giao thức, lớp)'},
  {k: 'Phương trình 1.4, 1.5', t: 'Mạng là một đồ thị có thuộc tính', b: 'Bật đồ thị: mỗi thiết bị thành một nút, mỗi cáp thành hai cạnh có hướng i → j và j → i. Từ đồ thị tính được đường đi, tải trên cạnh, điểm nghẽn và miền lỗi. Mỗi cạnh mang vector thuộc tính: dung lượng, trễ lan truyền, xác suất mất gói, độ sẵn sàng, chính sách hàng đợi; bảng 06 là vector của cạnh router biên tới đám mây. Băng thông cao chưa đủ: cùng 500 Mbit/s, đổi q từ FIFO sang ưu tiên là đổi kết quả của lớp học.', e: 'G = (V, E), e_ij: i → j   (1.4) · c_ij = [C_ij, d_ij^prop, p_ij^loss, a_ij, q_ij]   (1.5)'},
  {k: 'Mục 1.4.2', t: 'Ba mặt phẳng: dữ liệu, điều khiển, quản lý', b: 'Gói bốn màu đi trên mặt phẳng dữ liệu, nơi chuyển tiếp gói. Hạt tím là mặt phẳng điều khiển: tính đường, trao đổi định tuyến, giữ trạng thái; SDN tách nó khỏi thiết bị chuyển tiếp và lập trình qua giao diện mở (RFC 7426). Hạt vàng là mặt phẳng quản lý: cấu hình, giám sát, ghi sự kiện, telemetry. YANG mô hình hoá dữ liệu cấu hình và trạng thái, NETCONF và RESTCONF đọc ghi chúng, NMDA tách cấu hình dự kiến, cấu hình đang chạy và trạng thái vận hành. NFV đưa chức năng mạng thành phần mềm trên máy chủ chuẩn.', e: 'dữ liệu chuyển tiếp · điều khiển tính đường · quản lý cấu hình và giám sát'},
  {k: 'Phương trình 1.6', t: 'Mỗi dịch vụ một vector yêu cầu', b: 'Tên ứng dụng không đủ để thiết kế: "camera" có thể là 2 hay 16 Mbit/s mỗi luồng, ghi tại chỗ hay đẩy lên mây. Vector r_s gom bảy thành phần: băng thông tối thiểu, tốc độ đỉnh, trễ cực đại, biến thiên trễ cực đại, tỉ lệ mất tối đa, độ sẵn sàng tối thiểu, thời gian phục hồi. Ngưỡng trễ và mất lấy theo lớp QoS của ITU-T Y.1541: lớp học lớp 0 (100 ms, 50 ms, 10⁻³), học liệu lớp 3 (400 ms), camera lớp 4 (1 s), sao lưu lớp 5. Ô bỏ trống là thiếu một tiêu chí kiểm chứng.', e: 'r_s = [B_min, B_max, D_max, J_max, P_max, A_min, T_rec]   (1.6)',
    ask: {q: 'Vector của sao lưu không quy định D_max. Điều đó có nghĩa là gì?', o: ['Sao lưu không cần mạng tốt', 'Trễ không là tiêu chí nghiệm thu của sao lưu; thông lượng trong khung giờ mới là', 'Có thể bỏ sao lưu khỏi thiết kế'], a: 1, e: 'Sao lưu chấm điểm bằng việc xong đúng khung giờ, tức goodput ≥ B_min, không bằng trễ từng gói.'}},
  {k: 'Phương trình 1.8', t: 'Đạt hay không đạt là phép so sánh', b: 'Một dịch vụ đạt khi cả năm số đo cùng qua ngưỡng: trễ, biến thiên trễ, mất gói không vượt mức tối đa; goodput và độ sẵn sàng không dưới mức tối thiểu. Bảng 05 là ma trận đó. Một đường WAN có độ sẵn sàng 0,999 (MTBF 2 000 h, MTTR 2 h), nhân với phần trong trường còn khoảng 0,99895: lớp học hụt yêu cầu 0,9995. Hai đường tách ngả nâng lên khoảng 0,99995 và rút thời gian phục hồi từ hai giờ sửa chữa xuống thời gian chuyển đường.', e: 'D_s ≤ D_s^max, J_s ≤ J_s^max, P_s ≤ P_s^max, G_s ≥ G_s^min, A_s ≥ A_s^min   (1.8)',
    ask: {q: 'Phương án 500 Mbit/s, ưu tiên lớp học, sao lưu ban đêm, một đường WAN. Lớp học còn hụt ô nào?', o: ['Độ trễ', 'Mất gói', 'Độ sẵn sàng'], a: 2, e: 'A ≈ 0,999 × 0,99995 ≈ 0,99895 < 0,9995. Cần đường thứ hai đi ngả khác.'}},
  {k: 'Tổng kết · câu 1, 2', t: 'Không bắt đầu từ việc chọn thiết bị', b: 'Đi từ dịch vụ: lập vector yêu cầu cho từng dịch vụ, chọn quyết định thiết kế có căn cứ, tính đánh đổi, rồi nghiệm thu bằng so sánh số đo với ngưỡng. Thiết bị nhanh hơn chỉ là một lựa chọn trong X_net và thường không phải lựa chọn rẻ nhất. Về nhà: câu 1, 2 và 7 cuối chương 1. Tiết sau đi vào độ trễ đầu cuối: bốn thành phần và đòn bẩy thiết kế cho từng phần.', e: 'dịch vụ → vector yêu cầu → quyết định → đánh đổi → nghiệm thu'},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'});
at(11, {cap: 1}); at(11.5, {click: 'v_wan'});
at(22, {cap: 2}); at(22.5, {click: 'v_lop'});
at(32, {cap: 3}); at(32.5, {click: 'v_hero'}); at(35, {click: 'qos'});
at(43, {cap: 4}); at(44, {click: 'pa2'}); at(48, {click: 'pa0'}); at(52, {click: 'pa1'});
at(57, {cap: 5}); at(58, {slide: 'tang', to: 0.6, dur: 2}); at(63, {click: 'dem'}); at(68, {click: 'dem'}); at(69, {slide: 'tang', to: 0, dur: 1});
at(72, {cap: 6}); at(72.5, {click: 's0'});
at(83, {cap: 7}); at(83.5, {click: 'v_lop'});
at(93, {cap: 8}); at(93.5, {click: 'v_hero'}); at(94, {click: 'dothi'});
at(104, {cap: 9}); at(104.5, {click: 'dothi'}); at(105, {click: 'matphang'});
at(114, {cap: 10}); at(114.5, {click: 'matphang'}); at(116, {click: 's1'}); at(119, {click: 's3'});
at(124, {cap: 11}); at(124.5, {click: 's0'}); at(125, {click: 'kep'}); at(130, {click: 'kep'});
at(134, {cap: 12}); at(134.5, {click: 'v_hero'});
ev.sort((a, b) => a.at - b.at);

sim.reset();
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 144}, firstView: 'hero', extra: [{key: 'qos', label: 'Ưu tiên lớp học'}],
  keys: {1: 'v_hero', 2: 'v_lop', 3: 'v_wan', q: 'qos', k: 'kep', d: 'dem', g: 'dothi'}});
