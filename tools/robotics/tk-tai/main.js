// Thiết kế và hiệu năng mạng · bài 2.2 · Đếm tải thật.
// Theo giáo trình TEL1459 (Hoàng Trọng Minh, PTIT 2026), mục 2.2.1, 2.2.4, 2.3: số phiên đồng thời (2.3), tải dịch vụ (2.4),
// ma trận lưu lượng (2.7), tốc độ hữu dụng (2.8), dung lượng liên kết (2.9), baseline trung bình và phân vị 95 (2.11);
// ví dụ trang 43 (1 050 Mbit/s) và bài tập 5 chương 2 (1 200 Mbit/s).
// Mỗi người dùng bật tắt phiên ngẫu nhiên (xích Markov hai trạng thái, xác suất dừng = κ), nên số phiên đồng thời dao động quanh κN:
// thiết kế theo trung bình thì giờ cao điểm thiếu, theo phân vị 95 thì đủ.
import * as THREE from 'three';
import {createStage, MAT} from '../kit/stage.js';
import * as SH from '../kit/shapes.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {tag, picker, vn} from '../kit/soi.js';
import * as F from '../kit/mang/cong-thuc.js';
import {rng} from '../kit/mang/mo-phong.js';
import {boCanh, P, MAU, NHO} from '../kit/mang/canh.js';

const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 16, grid: 1, fade: 60, fov: 26, near: 0.2, far: 260});
const ui = createUI(app);
const root = new THREE.Group(); st.scene.add(root);
const B = boCanh(root), {mk, M} = B;

// ---------------- cảnh: sân giảng đường đầy người dùng (400 người đại diện) · lõi · phòng máy chủ học liệu · cổng Internet
const NV = 400, COLS = 25;
const sanHoc = mk(SH.rbox(8.4, 0.14, 5.6, 0.05), M.floor); sanHoc.position.set(-6.4, 0.07, 0); tag('nguoi', sanHoc);
const nguoi = new THREE.InstancedMesh(new THREE.CapsuleGeometry(0.075, 0.16, 4, 8), new THREE.MeshStandardMaterial({color: '#ffffff', roughness: 0.6}), NV);
nguoi.castShadow = true; root.add(nguoi); tag('nguoi', nguoi);
{ const d = new THREE.Object3D(); for (let i = 0; i < NV; i++) { d.position.set(-9.9 + (i % COLS) * 0.29, 0.3, -2.4 + Math.floor(i / COLS) * 0.31); d.updateMatrix(); nguoi.setMatrixAt(i, d.matrix); nguoi.setColorAt(i, new THREE.Color('#c9ccd1')); } }
const loi = B.tu(-0.6, 0.4, 2.0, 'loi', root, 4);
B.nha(5.2, -0.6, 4.6, 4.0, 3.0, 'maychu', M.wall2);
for (const [x, z] of [[4.2, -1.2], [5.1, -1.2], [6.0, -1.2]]) B.tu(x, z, 2.2, 'maychu');
// cổng Internet: cột ăng-ten và hộp router biên trên bệ
const gw = new THREE.Group(); gw.position.set(2.2, 0, -5.4); root.add(gw); tag('internet', gw);
mk(SH.rbox(2.2, 0.14, 1.6, 0.05), M.floor, gw).position.y = 0.07;
mk(new THREE.CylinderGeometry(0.06, 0.1, 3.4, 12), M.panel, gw).position.set(0.5, 1.7, -0.2);
for (const y of [2.6, 3.1]) { const r = mk(new THREE.TorusGeometry(0.34, 0.025, 8, 28), M.panel, gw); r.position.set(0.5, y, -0.2); r.rotation.x = Math.PI / 2; }
B.tu(-0.4, 0, 1.2, 'internet', gw, 2);
// ba liên kết, độ dày theo tải
const P1 = [P(-2.0, 0.9, 0.6), P(-1.2, 0.15, 1.2), P(-0.6, 1.0, 0.9)], L1 = B.cap([P(-2.4, 0.5, 0.6), P(-1.6, 0.15, 1.3), P(-0.6, 1.0, 0.9)], MAT.plastic('#3b6ea8'), 0.06, 'l1');
const L2 = B.cap([P(-0.2, 1.4, 0.8), P(1.4, 0.2, 1.2), P(3.2, 0.2, 0.6), P(4.2, 1.2, -0.75)], MAT.plastic('#3b6ea8'), 0.06, 'l2');
const L3 = B.cap([P(-0.6, 1.6, 0.0), P(0.0, 0.2, -2.0), P(1.2, 0.2, -4.4), P(1.8, 0.9, -5.4)], MAT.plastic('#3b6ea8'), 0.06, 'l3');
void P1;
const LK = [L1, L2, L3];
const goi = LK.map(() => B.beGoi(16, MAU.prop, [0.16, 0.1, 0.12]));

// ---------------- mô hình
// Nhóm A, học trực tuyến: N, κ, b chỉnh được (mặc định ví dụ trang 43), máy chủ → phòng học.
// Nhóm B, duyệt web: cùng N người dùng, κ 0,15, 0,8 Mbit/s, Internet → phòng học (giả định).
// Sao lưu ra ngoài: 100 Mbit/s đều, máy chủ → Internet (giả định).
const S = {N: 2000, k: 0.35, b: 1.5, kB: 0.15, bB: 0.8, bk: 100, g: 1.2, u: 0.7, l1: 1e9, l2: 10e9, l3: 1e9, sec: false, t: 0, kq: null, dirty: true,
  on: new Uint8Array(3000), hist: [], r: rng(9), TON: 18};
const ETA = () => ({L2: 1500 / 1538, L3: 1460 / 1500, sec: S.sec ? 0.94 : 1, proc: 0.95});
function tinh() {
  const A = F.taiDichVu([{kappa: S.k, N: S.N, b: S.b}]), Bw = F.taiDichVu([{kappa: S.kB, N: S.N, b: S.bB}]);
  const tSP = A, tIP = Bw, tSI = S.bk; // Mbit/s
  const T = [[0, 0, 0], [tSP, 0, tSI], [tIP, 0, 0]]; // hàng: nguồn (phòng học, máy chủ, Internet); cột: đích
  const e = ETA(), heso = e.L2 * e.L3 * e.sec * e.proc;
  const tai = [tSP + tIP, tSP + tSI, Math.max(tIP, tSI)];
  const can = tai.map((x) => (S.g / S.u) * x);
  const lap = [S.l1, S.l2, S.l3].map((c) => (c * heso) / 1e6);
  // phân vị 95 của số phiên đồng thời: xấp xỉ chuẩn của nhị thức (N, κ)
  const mu = S.k * S.N, sd = Math.sqrt(S.N * S.k * (1 - S.k));
  S.kq = {A, Bw, T, tai, can, lap, heso, e, mu, p95: mu + 1.645 * sd, nAct: F.phienDongThoi([{kappa: S.k, N: S.N}])};
}
// xích Markov bật tắt cho từng người dùng: thời gian một phiên trung bình TON giây cảnh, xác suất dừng = κ
function buoc(dt) {
  const a = dt / S.TON, bb = (a * S.k) / (1 - S.k), r = S.r; let n = 0;
  for (let i = 0; i < S.N; i++) { if (S.on[i]) { if (r() < a) S.on[i] = 0; } else if (r() < bb) S.on[i] = 1; n += S.on[i]; }
  return n;
}
function khoiDong() { for (let i = 0; i < 3000; i++) S.on[i] = S.r() < S.k ? 1 : 0; S.hist = []; for (let i = 0; i < 240; i++) S.hist.push(buoc(0.25)); }

// ---------------- bảng
ui.header({code: '2.2', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · MỤC 2.2–2.3 · NHU CẦU THÀNH TẢI', title: 'Đếm tải thật', sub: 'NGƯỜI DÙNG · PHIÊN ĐỒNG THỜI · MA TRẬN LƯU LƯỢNG · DUNG LƯỢNG', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['κ', 'HỆ SỐ ĐỒNG THỜI'], ['2.3–2.11', 'PHƯƠNG TRÌNH'], ['1 050', 'VÍ DỤ TR.43 · MBIT/S']]});
ui.panel(28, 112, 300, 236, 'HỌC TRỰC TUYẾN · 2.3, 2.4', '01');
const slN = ui.slider('N', 42, 148, 272, 'NGƯỜI DÙNG N', {lw: 92, vw: 74});
const slK = ui.slider('k', 42, 176, 272, 'HỆ SỐ κ', {lw: 92, vw: 74});
const slB = ui.slider('b', 42, 204, 272, 'MỖI PHIÊN b', {lw: 92, vw: 74});
ui.text(42, 232, 'TẢI DỊCH VỤ Λ = κ·N·b'); const lBig = ui.text(42, 246, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t01 = ui.text(42, 284, '', 'sm', NHO);
ui.panel(28, 360, 300, 210, 'PHIÊN ĐỒNG THỜI · 2.11', '02');
const sChart = ui.chart(42, 396, 272, 84, {min: 0, max: 1000, colors: [MAU.tx], zero: false});
const t02 = ui.text(42, 490, '', 'sm', NHO);
ui.panel(28, 582, 300, 184, 'MA TRẬN LƯU LƯỢNG T · 2.7', '03');
const mSvg = ui.svg(42, 616, 272, 96);
const t03 = ui.text(42, 720, '', 'sm', NHO);
ui.panel(1272, 112, 300, 300, 'DUNG LƯỢNG CẦN · 2.9', '04');
const slG = ui.slider('g', 1286, 148, 272, 'TĂNG TRƯỞNG ρ', {lw: 104, vw: 62});
const slU = ui.slider('u', 1286, 176, 272, 'NGƯỠNG u_max', {lw: 104, vw: 62});
const cRows = ['PHÒNG HỌC ↔ LÕI', 'LÕI ↔ MÁY CHỦ', 'LÕI ↔ INTERNET'].map((n, i) => { const y = 208 + i * 50; return {t: ui.text(1286, y, n, 'v', 'font-size:11px;font-weight:600;width:272px'), b: ui.bar(1286, y + 16, 272, 'CẦN', {lw: 44, vw: 120}), c: ui.bar(1286, y + 32, 272, 'CÓ', {lw: 44, vw: 120})}; });
const t04 = ui.text(1286, 362, '', 'sm', NHO);
ui.panel(1272, 424, 300, 190, 'TỐC ĐỘ HỮU DỤNG · 2.8', '05');
const eRows = ['η L2 (ETHERNET)', 'η L3 (IP + TCP)', 'η BẢO MẬT', 'η XỬ LÝ'].map((n, i) => ui.bar(1286, 460 + i * 20, 272, n, {lw: 112, vw: 60}));
const t05 = ui.text(1286, 546, '', 'sm', NHO);
ui.panel(1272, 626, 300, 140, 'KẾT LUẬN', '06');
const t06 = ui.text(1286, 660, '', 'sm', NHO);
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_san', 'NGƯỜI DÙNG'], ['vd43', 'VÍ DỤ TR.43'], ['bt25', 'BT 2.5'], ['l1_1g', 'PHÒNG HỌC 1 GBIT/S'], ['l1_10g', 'PHÒNG HỌC 10 GBIT/S'], ['sec', 'ĐƯỜNG HẦM IPSEC']], 360, 120, 860);
ui.text(362, 664, 'ĐANG HOẠT ĐỘNG');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts([{key: 'nguoi', title: 'NGƯỜI DÙNG', sub: ''}, {key: 'loi', title: 'LÕI', sub: ''}, {key: 'maychu', title: 'MÁY CHỦ HỌC LIỆU', sub: ''}, {key: 'internet', title: 'INTERNET', sub: ''}]);
const subN = ui.root.querySelectorAll('.call')[0]?.querySelector('span');

// ---------------- mô phỏng
const sim = {
  S,
  reset() { Object.assign(S, {N: 2000, k: 0.35, b: 1.5, g: 1.2, u: 0.7, l1: 1e9, l2: 10e9, l3: 1e9, sec: false}); S.dirty = true; khoiDong(); },
  busy: () => false,
  isOn: (k) => (k === 'l1_1g' ? S.l1 === 1e9 : k === 'l1_10g' ? S.l1 === 10e9 : k === 'sec' ? S.sec : false),
  act(k) {
    if (k === 'vd43') { Object.assign(S, {N: 2000, k: 0.35, b: 1.5}); khoiDong(); }
    if (k === 'bt25') { Object.assign(S, {N: 1500, k: 0.4, b: 2}); khoiDong(); }
    if (k === 'l1_1g') S.l1 = 1e9;
    if (k === 'l1_10g') S.l1 = 10e9;
    if (k === 'sec') S.sec = !S.sec;
    S.dirty = true;
  },
  slide(k, t) {
    if (k === 'N') S.N = Math.round(100 + t * 2900);
    if (k === 'k') S.k = Math.round((0.05 + t * 0.9) * 100) / 100;
    if (k === 'b') S.b = Math.round((0.2 + t * 4.8) * 10) / 10;
    if (k === 'g') S.g = 1 + t;
    if (k === 'u') S.u = 0.5 + t * 0.45;
    S.dirty = true;
  },
  keyDown() { return false; },
  step(dt) {
    if (S.dirty) { tinh(); S.dirty = false; }
    S.t += dt; const n = buoc(Math.min(dt, 0.5)); S.nNow = n;
    if ((S.tH ?? 0) <= S.t) { S.hist.push(n); if (S.hist.length > 240) S.hist.shift(); S.tH = S.t + 0.25; }
  },
  shadowAt() { return new THREE.Vector3(0, 10, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq; if (!kq) return;
    const col = new THREE.Color(), nShow = Math.min(NV, S.N);
    for (let i = 0; i < NV; i++) nguoi.setColorAt(i, col.set(i >= nShow ? '#eceae4' : S.on[i] ? MAU.tx : '#c9ccd1'));
    if (nguoi.instanceColor) nguoi.instanceColor.needsUpdate = true;
    // liên kết: độ dày theo tải tức thời so với dung lượng hữu dụng; màu theo mức sử dụng
    const nNow = S.nNow ?? kq.nAct, Anow = nNow * S.b, taiNow = [Anow + kq.Bw, Anow + S.bk, Math.max(kq.Bw, S.bk)];
    LK.forEach((L, i) => { const ro = taiNow[i] / kq.lap[i]; L.mesh.scale.set(1, 1, 1); L.mesh.material.color.set(ro > 1 ? MAU.bad : ro > S.u ? MAU.warn : '#3b6ea8');
      const nv = Math.min(16, Math.round(4 + 12 * Math.min(1, ro))); goi[i].forEach((m, k) => { m.visible = k < nv; if (!m.visible) return; const s = ((k / 16) + S.t * (0.08 + 0.1 * Math.min(1.2, ro))) % 1; m.position.copy(L.curve.getPoint(i === 0 ? 1 - s : s)); m.position.y += 0.1; m.material.color.set(ro > 1 ? MAU.bad : MAU.prop); }); });
    // bảng 01
    slN.set((S.N - 100) / 2900, vn(S.N, 0)); slK.set((S.k - 0.05) / 0.9, vn(S.k, 2)); slB.set((S.b - 0.2) / 4.8, `${vn(S.b, 1)} Mbit/s`);
    lBig.textContent = `${vn(kq.A, 0)} Mbit/s`;
    t01.innerHTML = `${vn(S.k, 2)} × ${vn(S.N, 0)} × ${vn(S.b, 1)} = ${vn(kq.A, 0)} Mbit/s, trước overhead. ${S.N === 2000 && S.k === 0.35 && S.b === 1.5 ? '<b>Ví dụ trang 43.</b>' : S.N === 1500 && S.k === 0.4 && S.b === 2 ? '<b>Bài tập 5 chương 2.</b>' : ''} Nếu lấy cả ${vn(S.N, 0)} người cùng lúc thì ra ${vn(S.N * S.b, 0)} Mbit/s, lãng phí gấp ${vn(1 / S.k, 1)} lần.`;
    // bảng 02
    sChart.lim.max = Math.max(50, kq.p95 * 1.35); sChart.set([S.hist], {extra: (Y, w) => `<line x1="0" x2="${w}" y1="${Y(kq.mu)}" y2="${Y(kq.mu)}" stroke="${C.ink}" stroke-dasharray="3 3"/><text x="${w}" y="${Y(kq.mu) + 11}" text-anchor="end" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">κN = ${vn(kq.mu, 0)}</text><line x1="0" x2="${w}" y1="${Y(kq.p95)}" y2="${Y(kq.p95)}" stroke="${MAU.bad}" stroke-dasharray="3 3"/><text x="${w}" y="${Y(kq.p95) - 3}" text-anchor="end" font-family="JetBrains Mono" font-size="10.5" fill="${MAU.bad}">p95 ≈ ${vn(kq.p95, 0)}</text>`});
    const sap = [...S.hist].sort((a, b) => a - b), p95s = sap.length > 20 ? sap[Math.floor(0.95 * sap.length)] : NaN;
    t02.innerHTML = `Mỗi người bật tắt phiên ngẫu nhiên, trung bình κ thời gian. Số phiên dao động quanh κN; phân vị 95 ${Number.isFinite(p95s) ? `đo được ${vn(p95s, 0)}` : ''} (lý thuyết ${vn(kq.p95, 0)}) mới là giờ cao điểm thật (2.11).`;
    // bảng 03: ma trận 3 × 3
    { const Z = ['Phòng học', 'Máy chủ', 'Internet'], w = 272, cw = 64, x0 = 80; let g = '';
      Z.forEach((z, j) => { g += `<text x="${x0 + j * cw + cw / 2}" y="10" text-anchor="middle" font-family="Be Vietnam Pro" font-size="10.5" fill="#626773">→ ${z}</text>`; });
      Z.forEach((z, i) => { const y = 18 + i * 24; g += `<text x="0" y="${y + 15}" font-family="Be Vietnam Pro" font-size="10.5" font-weight="600" fill="${C.ink}">${z}</text>`;
        Z.forEach((_, j) => { const v = kq.T[i][j]; g += `<rect x="${x0 + j * cw}" y="${y}" width="${cw - 4}" height="20" fill="${v ? MAU.prop : C.chart}" opacity="${v ? 0.15 + 0.6 * Math.min(1, v / 1500) : 1}" stroke="${C.line}"/><text x="${x0 + j * cw + cw / 2 - 2}" y="${y + 14}" text-anchor="middle" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">${v ? vn(v, 0) : '·'}</text>`; }); });
      void w; mSvg.innerHTML = g; }
    t03.innerHTML = 't<sub>ij</sub> = Σ b<sub>a</sub>·n<sub>a</sub>, Mbit/s. Học trực tuyến từ máy chủ, duyệt web từ Internet (κ 0,15, 0,8 Mbit/s), sao lưu ra ngoài 100 Mbit/s: hai dòng sau là giả định của bài.';
    // bảng 04
    slG.set(S.g - 1, vn(S.g, 2)); slU.set((S.u - 0.5) / 0.45, vn(S.u, 2));
    let thieu = [];
    cRows.forEach((r, i) => { const mx = Math.max(kq.can[i], kq.lap[i]) * 1.1; r.b.set(kq.can[i] / mx, `${vn(kq.can[i], 0)} Mbit/s`, kq.can[i] > kq.lap[i] ? MAU.bad : MAU.prop); r.c.set(kq.lap[i] / mx, `${vn(kq.lap[i], 0)} Mbit/s`, C.ink); if (kq.can[i] > kq.lap[i]) thieu.push(i); });
    t04.innerHTML = `C<sub>l</sub> ≥ (ρ/u<sub>max</sub>)·Σ t<sub>ij</sub>: tải đi qua liên kết × ${vn(S.g / S.u, 2)}. "Có" là tốc độ hữu dụng sau η ở bảng 05, không phải tốc độ cổng.`;
    // bảng 05
    const e = kq.e; [e.L2, e.L3, e.sec, e.proc].forEach((v, i) => eRows[i].set(v, vn(v, 3), i === 2 && S.sec ? MAU.warn : MAU.prop));
    t05.innerHTML = `R<sub>eff</sub> = η<sub>L2</sub>·η<sub>L3</sub>·η<sub>sec</sub>·η<sub>proc</sub>·R<sub>phy</sub> = ${vn(kq.heso, 3)}·R<sub>phy</sub>. Khung 1 500 byte tốn 38 byte Ethernet và 40 byte IP + TCP; IPsec 0,94 và xử lý 0,95 là giả định.`;
    // bảng 06
    t06.innerHTML = thieu.length ? `<b>Thiếu dung lượng</b> ở ${thieu.map((i) => ['phòng học ↔ lõi', 'lõi ↔ máy chủ', 'lõi ↔ Internet'][i]).join(', ')}. ${thieu.includes(0) && S.l1 === 1e9 ? 'Nâng đường phòng học lên 10 Gbit/s, hoặc tách thành nhiều đường lên.' : 'Nâng liên kết đó hoặc dời luồng (đặt bản sao học liệu gần người dùng).'}` : '<b>Mọi liên kết đủ dung lượng</b> với tăng trưởng và ngưỡng sử dụng đang chọn. Kiểm tiếp ở giờ cao điểm thật bằng p95.';
    // chế độ
    modeEl.textContent = `${vn(nNow, 0)} phiên`;
    modeSub.textContent = `trên ${vn(S.N, 0)} người dùng · ${vn((nNow / S.N) * 100, 0)} % đang hoạt động · tải học trực tuyến lúc này ${vn(Anow, 0)} Mbit/s`;
    alert.set(thieu.length ? 'LIÊN KẾT THIẾU DUNG LƯỢNG' : '');
    if (subN) subN.textContent = `${vn(S.N, 0)} · MỖI HÌNH ${S.N > NV ? '≈ 1 TRONG ' + vn(S.N / NV, 1) : '1 NGƯỜI'}`.toUpperCase();
    const W3 = (v) => st.project(v.x, v.y, v.z);
    ui.drawCallouts([{key: 'nguoi', p: W3(P(-6.4, 0.6, -2.6)), dx: -40, dy: -60}, {key: 'loi', p: W3(P(-0.6, 2.1, 0.4)), dx: -20, dy: -70}, {key: 'maychu', p: W3(P(5.2, 3.1, -1.4)), dx: 40, dy: -40}, {key: 'internet', p: W3(P(2.7, 3.5, -5.6)), dx: 30, dy: -40}], 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình Thiết kế và hiệu năng mạng (TEL1459, PTIT 2026), mục 2.2.1, 2.2.4, 2.3.1–2.3.3: (2.3), (2.4), (2.7)–(2.9), (2.11); ví dụ trang 43; bài tập 5 chương 2. Overhead Ethernet 38 byte mỗi khung (preamble, tiêu đề, FCS, khoảng trống): IEEE 802.3. Nhóm duyệt web, sao lưu, η bảo mật, η xử lý và thời gian phiên là giả định của bài.';
function cardOf(part) {
  const kq = S.kq; if (!kq) return null;
  const base = {src: SRC};
  if (part === 'nguoi') return {...base, k: 'Người dùng', t: `${vn(S.N, 0)} người, κ = ${vn(S.k, 2)}`, b: 'Hình cam là người đang có phiên. Số người hoạt động không cố định: thiết kế theo κN là thiết kế cho giờ trung bình.', rows: [['Phiên đồng thời κN', () => vn(S.kq.mu, 0)], ['p95', () => vn(S.kq.p95, 0)]]};
  if (part === 'l1' || part === 'l2' || part === 'l3') { const i = +part[1] - 1; return {...base, k: 'Liên kết', t: ['Phòng học ↔ lõi', 'Lõi ↔ máy chủ', 'Lõi ↔ Internet'][i], b: 'Xanh: dưới ngưỡng u_max. Vàng: trên ngưỡng. Đỏ: vượt tốc độ hữu dụng.', rows: [['Tải', () => `${vn(S.kq.tai[i], 0)} Mbit/s`], ['Cần (2.9)', () => `${vn(S.kq.can[i], 0)} Mbit/s`], ['Có (2.8)', () => `${vn(S.kq.lap[i], 0)} Mbit/s`]]}; }
  if (part === 'maychu') return {...base, k: 'Máy chủ học liệu', t: 'Nguồn của luồng lớn nhất', b: 'Luồng học trực tuyến đi từ đây xuống phòng học, qua lõi.', rows: [['t máy chủ → phòng học', () => `${vn(S.kq.T[1][0], 0)} Mbit/s`]]};
  if (part === 'internet' || part === 'loi') return {...base, k: part === 'loi' ? 'Lõi' : 'Internet', t: part === 'loi' ? 'Nơi các luồng gặp nhau' : 'Đường ra ngoài', b: 'Ma trận lưu lượng cho biết luồng nào đi qua liên kết nào: đó là đầu vào của (2.9).', rows: []};
  return null;
}

// ---------------- góc nhìn
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: -1.5, ty: 1.0, tz: -0.8, az: -40 + 3 * Math.sin(t * 0.05), el: 40, d: 34, sx: 0, sy: -10} : {tx: -0.8, ty: 1.0, tz: -0.8, az: -8 + 4 * Math.sin(t * 0.05), el: 34, d: 34, sx: 0, sy: -10}),
  san: () => ({tx: -6.4, ty: 0.4, tz: 0, az: -10, el: 38, d: 15, sx: 0, sy: -30}),
};

// ---------------- bài giảng
const CAP = [
  {k: 'Mục 2.2.1 · bài toán', t: '2 000 người dùng đăng ký, bao nhiêu người dùng cùng lúc?', b: 'Một lỗi phổ biến là lấy tổng số người đăng ký làm tải. Mỗi hình nhỏ trên sân là người dùng; hình cam là người đang có phiên học. Chỉ khoảng một phần ba đang hoạt động, và con số đó thay đổi từng lúc.', e: 'N_act = Σ κ·N   (2.3)'},
  {k: 'Ví dụ trang 43', t: '0,35 × 2 000 × 1,5 = 1 050 Mbit/s', b: 'Hệ số đồng thời 0,35, mỗi phiên 1,5 Mbit/s: tải học trực tuyến 1 050 Mbit/s trước overhead. Đường phòng học hiện là 1 Gbit/s: chưa cộng gì đã vượt.', e: 'Λ = Σ κ·N·b   (2.4)'},
  {k: 'Phân vị 95 · 2.11', t: 'Trung bình không phải giờ cao điểm', b: 'Đường cam là số phiên đếm từng lúc. Nó dao động quanh κN, và 5 % thời gian vượt vạch đỏ p95. Thiết kế theo trung bình thì cứ vài phút lại thiếu một lần.', e: 'p95 = percentile95{y(t)}',
    ask: {q: 'Thiết kế dung lượng nên dựa vào số nào?', o: ['Tổng số người đăng ký', 'Trung bình κN', 'Phân vị cao như p95 của tải, cộng dư địa'], a: 2, e: 'Tổng đăng ký thì lãng phí, trung bình thì thiếu giờ cao điểm. Phân vị cao cộng hệ số tăng trưởng và ngưỡng sử dụng là cách làm của (2.9) và (2.11).'}},
  {k: 'Ma trận lưu lượng · 2.7', t: 'Luồng nào đi qua đâu', b: 'Học trực tuyến từ máy chủ xuống phòng học, duyệt web từ Internet, sao lưu từ máy chủ ra ngoài. Mỗi ô của ma trận là một luồng; cộng các luồng đi qua cùng một liên kết mới biết liên kết đó chịu bao nhiêu.', e: 'T = [t_ij],  t_ij = Σ b_a·n_a'},
  {k: 'Dung lượng cần · 2.9', t: 'Tăng trưởng 1,2, ngưỡng 0,7', b: 'Liên kết không được chạy sát 100 %: chừa dư địa cho bùng nổ (u_max) và cho tăng trưởng vài năm tới (ρ). 1 290 Mbit/s qua đường phòng học cần ít nhất 1,2/0,7 × 1 290 ≈ 2 211 Mbit/s. Bấm Phòng học 10 Gbit/s.', e: 'C_l ≥ (ρ / u_max) · Σ t_ij'},
  {k: 'Tốc độ hữu dụng · 2.8', t: 'Cổng 10 Gbit/s không chở được 10 Gbit/s dữ liệu', b: 'Mỗi khung 1 500 byte tốn thêm 38 byte của Ethernet và 40 byte của IP, TCP. Bật đường hầm IPsec, hiệu suất giảm thêm. Dung lượng phải so với tốc độ hữu dụng, không phải số in trên cổng.', e: 'R_eff = η_L2·η_L3·η_sec·η_proc·R_phy'},
  {k: 'Bài tập 5 · chương 2', t: '1 500 người, κ 0,4, 2 Mbit/s', b: 'Bấm BT 2.5: 0,4 × 1 500 × 2 = 1 200 Mbit/s trước overhead. Ít người hơn ví dụ trang 43 mà tải lại lớn hơn, vì hệ số đồng thời và tốc độ mỗi phiên cao hơn.', e: '0,4 × 1 500 × 2 = 1 200 Mbit/s',
    ask: {q: 'Giữ N và b, hệ số đồng thời tăng từ 0,3 lên 0,45. Tải dịch vụ tăng bao nhiêu phần trăm?', o: ['15 %', '50 %', '45 %'], a: 1, e: 'Λ tỉ lệ thuận với κ: 0,45 / 0,3 = 1,5, tăng 50 %.'}},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_san'});
at(11, {cap: 1}); at(11.5, {click: 'v_hero'}); at(12, {click: 'vd43'});
at(21, {cap: 2}); at(22, {click: 'v_san'});
at(34, {cap: 3}); at(34.5, {click: 'v_hero'});
at(44, {cap: 4}); at(48, {click: 'l1_10g'});
at(56, {cap: 5}); at(57, {click: 'sec'}); at(62, {click: 'sec'});
at(66, {cap: 6}); at(67, {click: 'bt25'});
ev.sort((a, b) => a.at - b.at);

sim.reset(); tinh(); S.dirty = false;
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 78}, firstView: 'hero', extra: [{key: 'vd43', label: 'Ví dụ tr.43'}],
  keys: {1: 'v_hero', 2: 'v_san'}});
