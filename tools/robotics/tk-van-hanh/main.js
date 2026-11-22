// Thiết kế và hiệu năng mạng · tiết 5 · Vòng vận hành có kiểm chứng.
// Theo giáo trình TEL1459 (Hoàng Trọng Minh, PTIT 2026), mục 1.7.2 và 1.9: telemetry (RFC 9232), sai lệch giữa trạng thái quan
// sát và mong muốn Δk = ‖y_k − y*_k‖ (1.21), độ phủ quan sát Γ (1.28); câu hỏi 6 cuối chương 1 (polling và streaming).
// Một liên kết lõi có những đợt bùng nổ ngắn. Hỏi SNMP mỗi 5 phút thì trung bình hoá mất đợt bùng nổ; đẩy telemetry mỗi giây thì
// thấy ngay, đổi lại tốn băng thông thu thập. Chuỗi tải là chuỗi tổng hợp tất định (giả định của bài), không phải số đo thật.
import * as THREE from 'three';
import {createStage, MAT} from '../kit/stage.js';
import * as SH from '../kit/shapes.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {tag, picker, vn} from '../kit/soi.js';
import * as F from '../kit/mang/cong-thuc.js';
import {rng} from '../kit/mang/mo-phong.js';
import {boCanh, P, MAU, LOGC, unlog, NHO} from '../kit/mang/canh.js';

const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 16, grid: 1, fade: 60, fov: 26, near: 0.2, far: 260});
const ui = createUI(app);
const root = new THREE.Group(); st.scene.add(root);
const B = boCanh(root), {mk, M} = B;

// ---------------- chuỗi tải tổng hợp: một giờ, mỗi giây một mẫu. Nền 45 % dao động, bốn đợt bùng nổ 20–60 s lên 96–99 %
const N = 3600, Y_TRUE = new Float32Array(N), BURST = [];
{ const r = rng(42); let x = 0.45;
  for (let i = 0; i < N; i++) { x += (0.45 - x) * 0.02 + (r() - 0.5) * 0.03; Y_TRUE[i] = Math.min(0.78, Math.max(0.2, x + 0.06 * Math.sin(i / 300))); }
  for (const [t0, len, pk] of [[420, 24, 0.97], [1310, 60, 0.98], [2150, 20, 0.99], [2980, 40, 0.96]]) { BURST.push([t0, t0 + len]); for (let i = t0; i < t0 + len; i++) Y_TRUE[i] = pk - 0.02 * Math.abs(Math.sin(i)); } }
const Y_SAO = 0.8; // trạng thái mong muốn: mức sử dụng không vượt η = 0,8 (1.9)

// ---------------- cảnh: sáu thiết bị (2 lõi, 4 truy nhập) trên bệ, phòng vận hành có màn hình lớn
const san = mk(SH.rbox(9, 0.14, 6.4, 0.05), M.floor); san.position.set(-3.6, 0.07, 0);
const sw = [P(-5.2, 0, -1.6), P(-2.0, 0, -1.6), P(-6.8, 0, 1.6), P(-4.6, 0, 1.6), P(-2.6, 0, 1.6), P(-0.4, 0, 1.6)].map((p, i) => { const t = B.tu(p.x, p.z, i < 2 ? 1.8 : 1.3, 'tb', root, i < 2 ? 4 : 3); return {p, t, top: P(p.x, i < 2 ? 1.8 : 1.3, p.z)}; });
const LINKS = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3], [1, 4], [1, 5]], NONG = 7; // liên kết 1–4 (lõi 2 xuống truy nhập 3) là liên kết bị bùng nổ
const lk = LINKS.map(([a, b], k) => { const A = sw[a].top.clone().add(P(0, -0.2, 0.3)), Bv = sw[b].top.clone().add(P(0, -0.2, -0.3)); const mid = A.clone().lerp(Bv, 0.5); mid.y += 0.5; const c = B.cap([A, mid, Bv], k === NONG ? MAT.plastic('#3b6ea8') : M.fiber, k === NONG ? 0.06 : 0.035, k === NONG ? 'nong' : 'lk'); return c; });
const nhaNOC = B.nha(6.4, -0.2, 6.0, 4.6, 3.6, 'noc', M.wall2);
// màn hình lớn trên tường sau phòng vận hành: vẽ bằng canvas 2D
const cv2 = document.createElement('canvas'); cv2.width = 1024; cv2.height = 440; const g2 = cv2.getContext('2d');
const tex = new THREE.CanvasTexture(cv2); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
const man = mk(new THREE.PlaneGeometry(4.6, 1.98), new THREE.MeshBasicMaterial({map: tex, toneMapped: false}), nhaNOC); man.position.set(0, 2.15, -2.3 + 0.2); tag('manhinh', man);
mk(SH.rbox(4.8, 2.16, 0.06, 0.02), M.rack, nhaNOC).position.set(0, 2.15, -2.3 + 0.16);
// bàn trực và bộ thu thập
mk(SH.rbox(3.0, 0.06, 0.8, 0.02), M.desk, nhaNOC).position.set(0, 0.78, 0.6);
for (const x of [-0.9, 0, 0.9]) B.mayTinh(nhaNOC, x, 0.81, 0.5);
const thu = B.tu(8.6, 0.6, 1.6, 'thu', root, 3);
// gói telemetry: chấm xanh lục chạy từ thiết bị về bộ thu thập
const goi = B.beGoi(60, '#2F8F5B', [0.14, 0.1, 0.12]);
const duongVe = sw.map((s) => new THREE.CatmullRomCurve3([s.top.clone().add(P(0, 0.1, 0)), P((s.p.x + 8.6) / 2, 2.6, (s.p.z + 0.6) / 2), P(8.6, 1.7, 0.6)]));

// ---------------- mô hình
// Đo: polling lấy hiệu bộ đếm octet chia khoảng hỏi (mức sử dụng trung bình của khoảng); streaming lấy mẫu mỗi τ giây (cũng là
// trung bình trong τ). Cảnh báo khi Δ = y − y* > 0 tức mức đo vượt 0,8. Dung lượng thu thập: 50 thiết bị × 2 kB mỗi lần gửi (giả định).
const S = {mode: 'poll', tau: 300, t: 0, kq: null, dirty: true, metric: new Set(['ifc', 'cpu']), tScale: 20};
const MET = [{k: 'ifc', ten: 'Bộ đếm giao diện', phu: ['nghen', 'mat']}, {k: 'q', ten: 'Độ sâu hàng đợi', phu: ['nghen']}, {k: 'probe', ten: 'Đo chủ động', phu: ['sla', 'mat']}, {k: 'opt', ten: 'Công suất quang', phu: ['quang']}, {k: 'cpu', ten: 'CPU, bộ nhớ', phu: ['cpu']}, {k: 'log', ten: 'Sự kiện định tuyến', phu: ['duong']}];
const YS = [{k: 'nghen', ten: 'Nghẽn liên kết'}, {k: 'mat', ten: 'Mất gói'}, {k: 'sla', ten: 'Trễ dịch vụ vượt SLA'}, {k: 'quang', ten: 'Suy giảm quang'}, {k: 'cpu', ten: 'Quá tải thiết bị'}, {k: 'duong', ten: 'Đổi đường định tuyến'}];
const N_TB = 50, B_MAU = 2000;
function tinh() {
  const tau = Math.max(1, Math.round(S.tau)), meas = new Float32Array(N);
  for (let s = 0; s < N; s += tau) { let sum = 0, n = 0; for (let i = s; i < Math.min(N, s + tau); i++) { sum += Y_TRUE[i]; n++; } const v = sum / n; for (let i = s; i < Math.min(N, s + tau); i++) meas[i] = v; }
  // giá trị đo chỉ có sau khi kết thúc khoảng: mẫu của khoảng [s, s+τ) đến tay người vận hành ở thời điểm s + τ
  const det = BURST.map(([a, b]) => { for (let s = Math.floor(a / tau) * tau; s < b + tau; s += tau) { if (meas[Math.min(N - 1, s)] > Y_SAO) return {thay: true, tre: Math.max(0, s + tau - a)}; } return {thay: false}; });
  const thay = det.filter((d) => d.thay), phu = new Set(MET.filter((m) => S.metric.has(m.k)).flatMap((m) => m.phu));
  S.kq = {meas, tau, det, nThay: thay.length, treTB: thay.length ? thay.reduce((a, d) => a + d.tre, 0) / thay.length : NaN,
    bw: (N_TB * B_MAU * 8) / tau, Gamma: phu.size / YS.length, phu};
}

// ---------------- vẽ màn hình
function veManHinh(tNow) {
  const kq = S.kq, W = cv2.width, Hh = cv2.height, x0 = 40, x1 = W - 20, y0 = 70, y1 = Hh - 40, X = (i) => x0 + (i / (N - 1)) * (x1 - x0), Y = (v) => y1 - v * (y1 - y0);
  g2.fillStyle = '#10151c'; g2.fillRect(0, 0, W, Hh);
  g2.fillStyle = '#e9edf2'; g2.font = '600 26px "Be Vietnam Pro", system-ui, sans-serif'; g2.fillText('Liên kết lõi 2 → truy nhập 3 · mức sử dụng', x0, 40);
  g2.font = '500 20px "JetBrains Mono", monospace'; g2.fillStyle = '#8fa3b8'; g2.textAlign = 'right'; g2.fillText(S.mode === 'poll' ? `SNMP hỏi mỗi ${F.fmtThoiGian(kq.tau, 0)}` : `telemetry đẩy mỗi ${F.fmtThoiGian(kq.tau, 0)}`, x1, 40); g2.textAlign = 'left';
  g2.strokeStyle = '#2a3440'; g2.lineWidth = 1; for (let k = 0; k <= 4; k++) { g2.beginPath(); g2.moveTo(x0, Y(k / 4)); g2.lineTo(x1, Y(k / 4)); g2.stroke(); }
  const n = Math.min(N, Math.floor(tNow));
  // tải thật (xám) tới thời điểm hiện tại
  g2.strokeStyle = '#5d6b7a'; g2.lineWidth = 1.5; g2.beginPath(); for (let i = 0; i < n; i++) { const xx = X(i), yy = Y(Y_TRUE[i]); i ? g2.lineTo(xx, yy) : g2.moveTo(xx, yy); } g2.stroke();
  // số đo (xanh): chỉ hiện các khoảng đã kết thúc
  const nd = Math.floor(n / kq.tau) * kq.tau;
  g2.strokeStyle = '#5aa9ff'; g2.lineWidth = 3; g2.beginPath(); for (let i = 0; i < nd; i++) { const xx = X(i), yy = Y(kq.meas[i]); i ? g2.lineTo(xx, yy) : g2.moveTo(xx, yy); } g2.stroke();
  // ngưỡng y*
  g2.strokeStyle = '#ff6b5e'; g2.setLineDash([10, 8]); g2.lineWidth = 2; g2.beginPath(); g2.moveTo(x0, Y(Y_SAO)); g2.lineTo(x1, Y(Y_SAO)); g2.stroke(); g2.setLineDash([]);
  g2.fillStyle = '#ff6b5e'; g2.font = '500 18px "JetBrains Mono", monospace'; g2.fillText('y* = 0,8', x0 + 6, Y(Y_SAO) - 8);
  // đợt bùng nổ: đánh dấu dưới trục, xanh lục nếu đã bắt được, đỏ nếu bị bỏ lỡ
  BURST.forEach(([a, b], k) => { if (a > n) return; const d = kq.det[k], ok = d.thay && a + d.tre <= n; g2.fillStyle = ok ? '#3ccf7c' : b + kq.tau < n ? '#ff6b5e' : '#8fa3b8'; g2.fillRect(X(a), y1 + 8, Math.max(4, X(b) - X(a)), 10); });
  g2.fillStyle = '#e9edf2'; g2.fillRect(X(n), y0 - 10, 2, y1 - y0 + 20);
  g2.fillStyle = '#8fa3b8'; g2.font = '500 18px "JetBrains Mono", monospace'; g2.fillText('0', x0, Hh - 10); g2.textAlign = 'right'; g2.fillText('60 phút', x1, Hh - 10); g2.textAlign = 'left';
  tex.needsUpdate = true;
}

// ---------------- bảng
ui.header({code: 'T5', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · TIẾT 5 · MỤC 1.7–1.10 · VẬN HÀNH CÓ KIỂM CHỨNG', title: 'Vòng vận hành có kiểm chứng', sub: 'ĐO · SO VỚI MỤC TIÊU · CẢNH BÁO', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['Δk', 'SAI LỆCH'], ['1.21 · 1.28', 'PHƯƠNG TRÌNH'], ['Γ', 'ĐỘ PHỦ QUAN SÁT']]});
ui.panel(28, 112, 300, 170, 'CÁCH THU THẬP', '01');
const slT = ui.slider('tau', 42, 148, 272, 'CHU KỲ', {lw: 92, vw: 74});
const t01 = ui.text(42, 176, '', 'sm', NHO);
ui.panel(28, 294, 300, 196, 'SAI LỆCH Δk · 1.21', '02');
const dBars = ['TẢI THẬT', 'SỐ ĐO y', 'MỤC TIÊU y*'].map((n, i) => ui.bar(42, 330 + i * 20, 272, n, {lw: 86, vw: 70}));
ui.text(42, 396, 'Δ = y − y*'); const dBig = ui.text(42, 410, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t02 = ui.text(42, 446, '', 'sm', NHO);
ui.panel(28, 502, 300, 264, 'BẮT ĐƯỢC BAO NHIÊU ĐỢT BÙNG NỔ', '03');
const bSvg = ui.svg(42, 538, 272, 70);
ui.text(42, 618, 'BẮT ĐƯỢC'); const bBig = ui.text(42, 632, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t03 = ui.text(42, 668, '', 'sm', NHO);
ui.panel(1272, 112, 300, 330, 'ĐỘ PHỦ QUAN SÁT Γ · 1.28', '04');
const yRows = YS.map((y, i) => ui.text(1286, 148 + i * 22, '', 'v', 'font-size:11.5px;width:272px;white-space:nowrap'));
ui.text(1286, 290, 'Γ = TRẠNG THÁI SUY RA ĐƯỢC / TẤT CẢ'); const gBig = ui.text(1286, 304, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t04 = ui.text(1286, 340, '', 'sm', NHO);
ui.panel(1272, 454, 300, 168, 'CHI PHÍ THU THẬP', '05');
const bwBar = ui.bar(1286, 490, 272, 'BĂNG THÔNG', {lw: 76, vw: 86});
const t05 = ui.text(1286, 516, '', 'sm', NHO);
ui.panel(1272, 634, 300, 132, 'VÒNG KHÉP KÍN', '06');
const vSvg = ui.svg(1286, 668, 272, 40);
const t06 = ui.text(1286, 714, '', 'sm', NHO);
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_man', 'MÀN HÌNH'], ['poll', 'SNMP 5 PHÚT'], ['stream', 'TELEMETRY 1 S'], ...MET.map((m) => ['m_' + m.k, m.ten.toUpperCase()])], 360, 120, 860);
ui.text(362, 664, 'TRẠNG THÁI');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts([{key: 'nong', title: 'LIÊN KẾT LÕI 2 → TRUY NHẬP 3', sub: 'CÓ ĐỢT BÙNG NỔ'}, {key: 'thu', title: 'BỘ THU THẬP', sub: ''}, {key: 'manhinh', title: 'MÀN HÌNH VẬN HÀNH', sub: 'XÁM: THẬT · XANH: ĐO'}]);
const subThu = ui.root.querySelectorAll('.call')[1]?.querySelector('span');

// ---------------- mô phỏng
const sim = {
  S,
  reset() { Object.assign(S, {mode: 'poll', tau: 300, t: 330, metric: new Set(['ifc', 'cpu'])}); S.dirty = true; },
  busy: () => false,
  isOn: (k) => (k === 'poll' || k === 'stream' ? S.mode === k : k.startsWith('m_') ? S.metric.has(k.slice(2)) : false),
  act(k) {
    if (k === 'poll') { S.mode = 'poll'; S.tau = 300; S.dirty = true; }
    if (k === 'stream') { S.mode = 'stream'; S.tau = 1; S.dirty = true; }
    if (k.startsWith('m_')) { const m = k.slice(2); S.metric.has(m) ? S.metric.delete(m) : S.metric.add(m); S.dirty = true; }
  },
  slide(k, t) { if (k === 'tau') { S.tau = Math.round(unlog(t, 1, 900)); S.mode = S.tau >= 60 ? 'poll' : 'stream'; S.dirty = true; } },
  keyDown() { return false; },
  step(dt) { if (S.dirty) { tinh(); S.dirty = false; } S.t += dt * S.tScale; if (S.t >= N) S.t = 0; },
  shadowAt() { return new THREE.Vector3(0, 10, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq; if (!kq) return;
    const n = Math.min(N - 1, Math.floor(S.t)), y = Y_TRUE[n], idx = Math.max(0, Math.floor(n / kq.tau) * kq.tau - 1), ym = idx > 0 ? kq.meas[idx] : kq.meas[0], d = ym - Y_SAO;
    // vẽ lại màn hình khi thời gian cảnh nhích đủ 4 s hay khi đổi cách đo (một lần tải ảnh 1024 × 440 lên GPU mỗi lần vẽ)
    if (Math.abs(S.t - (S.tVe ?? -99)) >= 4 || S.kqVe !== kq) { veManHinh(S.t); S.tVe = S.t; S.kqVe = kq; }
    // liên kết nóng đỏ lên theo tải thật; đèn thiết bị
    lk[NONG].mesh.material.color.set(y > 0.9 ? MAU.bad : y > Y_SAO ? MAU.warn : '#3b6ea8');
    // gói telemetry: polling = một chùm mỗi chu kỳ (hỏi rồi trả), streaming = dòng đều
    const pha = (S.t % kq.tau) / kq.tau;
    goi.forEach((m, k) => { const i = k % 6, c = duongVe[i]; let u;
      if (S.mode === 'stream') u = ((k / goi.length) * 6 + S.t * 0.05) % 1;
      else { const tt = (S.t % kq.tau) / S.tScale; u = tt < 2.5 ? Math.min(1, tt / 2.5 + (k / goi.length) * 0.15) : -1; }
      m.visible = u >= 0 && u <= 1 && (S.mode === 'stream' ? k < Math.min(60, 12 + 48 / Math.max(1, kq.tau)) : k < 18); if (m.visible) { m.position.copy(c.getPoint(u)); } });
    void pha;
    // bảng 01
    slT.set(LOGC(kq.tau, 1, 900), F.fmtThoiGian(kq.tau, 0));
    t01.innerHTML = S.mode === 'poll' ? `Polling: trạm quản lý hỏi từng thiết bị (SNMP) mỗi ${F.fmtThoiGian(kq.tau, 0)}, lấy hiệu bộ đếm chia cho khoảng hỏi. Số nhận được là <b>trung bình</b> cả khoảng.` : `Streaming: thiết bị tự đẩy dữ liệu theo đăng ký (RFC 8639, 8641) mỗi ${F.fmtThoiGian(kq.tau, 0)}. Khoảng càng ngắn, đợt bùng nổ càng ít bị san phẳng.`;
    // bảng 02
    dBars[0].set(y, `${vn(y * 100, 0)} %`, '#5d6b7a'); dBars[1].set(ym, `${vn(ym * 100, 0)} %`, MAU.prop); dBars[2].set(Y_SAO, '80 %', MAU.bad);
    dBig.textContent = `${d > 0 ? '+' : ''}${vn(d * 100, 0)} điểm %`; dBig.style.color = d > 0 ? MAU.bad : MAU.ok;
    t02.innerHTML = `Δ<sub>k</sub> = ‖y<sub>k</sub> − y*<sub>k</sub>‖ (1.21) chỉ tính được trên <b>số đo</b>, không phải trên tải thật. ${y > Y_SAO && d <= 0 ? '<b>Lúc này liên kết đang quá ngưỡng mà số đo chưa biết.</b>' : d > 0 ? 'Số đo vượt ngưỡng: hệ thống cảnh báo.' : 'Số đo dưới ngưỡng.'}`;
    // bảng 03
    { const W = 272, X = (i) => (i / (N - 1)) * W; let g = `<rect x="0" y="0" width="${W}" height="40" fill="${C.chart}" stroke="${C.line}"/>`;
      BURST.forEach(([a, b], k) => { const dd = kq.det[k]; g += `<rect x="${X(a)}" y="6" width="${Math.max(3, X(b) - X(a))}" height="28" fill="${dd.thay ? MAU.ok : MAU.bad}"/><text x="${X(a) + 2}" y="54" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">${dd.thay ? '+' + F.fmtThoiGian(dd.tre, 0) : 'lỡ'}</text>`; });
      g += `<text x="0" y="68" font-family="JetBrains Mono" font-size="10.5" fill="#626773">0</text><text x="${W}" y="68" text-anchor="end" font-family="JetBrains Mono" font-size="10.5" fill="#626773">60 phút</text>`; bSvg.innerHTML = g; }
    bBig.textContent = `${kq.nThay} / ${BURST.length}`; bBig.style.color = kq.nThay === BURST.length ? MAU.ok : MAU.bad;
    t03.innerHTML = `Bốn đợt bùng nổ dài 20–60 s lên gần 100 %. ${kq.nThay ? `Phát hiện trung bình sau ${F.fmtThoiGian(kq.treTB, 0)} kể từ lúc đợt bắt đầu.` : ''} ${kq.nThay < BURST.length ? 'Đợt bị lỡ vẫn làm rơi gói và tăng jitter (tiết 3), chỉ là không ai thấy.' : ''}`;
    // bảng 04
    YS.forEach((s, i) => { const ok = kq.phu.has(s.k); yRows[i].innerHTML = `<span style="color:${ok ? MAU.ok : MAU.bad};font-weight:700">${ok ? '✓' : '✗'}</span> ${s.ten}`; });
    gBig.textContent = `${kq.phu.size} / ${YS.length} = ${vn(kq.Gamma, 2)}`;
    t04.innerHTML = 'Bấm các nút tên metric để thêm hay bớt nguồn đo. Bảng nối metric với trạng thái suy ra được là ví dụ của bài. Telemetry đúng là đủ để suy ra trạng thái ảnh hưởng SLA, không phải càng nhiều càng tốt.';
    // bảng 05
    bwBar.set(LOGC(kq.bw, (N_TB * B_MAU * 8) / 900, N_TB * B_MAU * 8), F.fmtBps(kq.bw, 1), kq.tau < 10 ? MAU.warn : MAU.prop);
    t05.innerHTML = `${N_TB} thiết bị × 2 kB mỗi lần gửi (giả định) chia chu kỳ ${F.fmtThoiGian(kq.tau, 0)}. Chu kỳ ngắn hơn 300 lần thì dữ liệu thu thập nhiều hơn 300 lần: phải tính cả đường truyền về, lưu trữ và xử lý.`;
    // bảng 06: đo → so → quyết → làm
    { const st4 = [['ĐO', kq.tau], ['SO Δk', 1], ['QUYẾT', 30], ['LÀM', 60]], tot = st4.reduce((a, b) => a + b[1], 0); let g = '', x = 0; const cols = [MAU.prop, MAU.warn, MAU.tx, MAU.ok];
      st4.forEach(([n2, v], i) => { const w = Math.min(140, Math.max(44, (v / tot) * 272 * 0.6));   /* ô hẹp nhất 44 đơn vị cho vừa chữ 10,5; ô đo không quá 140 để cả bốn ô nằm trong 272 */ g += `<rect x="${x}" y="0" width="${w - 3}" height="18" fill="${cols[i]}"/><text x="${x + 4}" y="13" font-family="JetBrains Mono" font-size="10.5" fill="#fff">${n2}</text><text x="${x}" y="32" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">${F.fmtThoiGian(v, 0)}</text>`; x += w; });
      vSvg.innerHTML = g; t06.innerHTML = `Vòng khép kín không nhanh hơn khâu đo: ${F.fmtThoiGian(kq.tau + 91, 0)} mỗi vòng (so, quyết, làm 1 s, 30 s, 60 s là giả định).`; }
    // chế độ
    modeEl.textContent = d > 0 ? 'Cảnh báo' : y > Y_SAO ? 'Quá ngưỡng, chưa thấy' : 'Bình thường'; modeEl.style.color = d > 0 ? MAU.bad : y > Y_SAO ? MAU.warn : C.ink;
    modeSub.textContent = `phút ${vn(S.t / 60, 1)} / 60 · cảnh chạy nhanh ${S.tScale}× · ${S.mode === 'poll' ? 'SNMP polling' : 'streaming telemetry'}`;
    alert.set(y > Y_SAO && d <= 0 ? 'LIÊN KẾT QUÁ NGƯỠNG · SỐ ĐO CHƯA THẤY' : d > 0 ? 'Δk > 0 · CẢNH BÁO' : '');
    if (subThu) subThu.textContent = F.fmtBps(kq.bw, 0).toUpperCase();
    const W3 = (v) => st.project(v.x, v.y, v.z);
    ui.drawCallouts([{key: 'nong', p: W3(lk[NONG].curve.getPoint(0.5).add(P(0, 0.2, 0))), dx: -60, dy: -70}, {key: 'thu', p: W3(P(8.6, 1.8, 0.6)), dx: 40, dy: 40}, {key: 'manhinh', p: W3(P(6.4, 3.3, -2.1)), dx: 40, dy: -40}], 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình Thiết kế và hiệu năng mạng (TEL1459, PTIT 2026), mục 1.7.2 và 1.9: (1.21), (1.28); câu hỏi 6 chương 1. Telemetry: RFC 9232; đăng ký thông báo YANG: RFC 8639, RFC 8641. Chuỗi tải, số thiết bị, cỡ mỗi lần gửi và bảng nối metric với trạng thái là giả định của bài.';
function cardOf(part) {
  const kq = S.kq; if (!kq) return null;
  const base = {src: SRC};
  if (part === 'nong' || part === 'lk' || part === 'tb') return {...base, k: 'Liên kết lõi 2 → truy nhập 3', t: 'Bốn đợt bùng nổ ngắn', b: 'Trung bình cả giờ chỉ khoảng một nửa công suất, nhưng có bốn đợt ngắn gần chạm 100 %. Đó là lúc hàng đợi đầy và gói rơi.', rows: [['Bắt được', () => `${S.kq.nThay} / ${BURST.length}`]]};
  if (part === 'manhinh' || part === 'noc') return {...base, k: 'Màn hình vận hành', t: 'Xám là thật, xanh là đo', b: 'Người vận hành chỉ thấy đường xanh. Đường xám vẽ ra để người học so: số đo trung bình hoá dài sẽ san phẳng đợt bùng nổ.', rows: [['Chu kỳ', () => F.fmtThoiGian(S.kq.tau, 0)]]};
  if (part === 'thu') return {...base, k: 'Bộ thu thập', t: 'Đổi lại là dữ liệu', b: 'Đo dày hơn thì thấy nhiều hơn, nhưng đường truyền về, lưu trữ và xử lý tăng theo đúng tỉ lệ.', rows: [['Băng thông thu thập', () => F.fmtBps(S.kq.bw, 1)]]};
  return null;
}

// ---------------- góc nhìn
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 1.5, ty: 1.4, tz: 0, az: -48 + 3 * Math.sin(t * 0.05), el: 30, d: 34, sx: 0, sy: -10} : {tx: 1.6, ty: 1.4, tz: 0, az: -10 + 4 * Math.sin(t * 0.05), el: 26, d: 34, sx: 0, sy: -10}),
  man: () => ({tx: 6.4, ty: 2.1, tz: -1.8, az: 0, el: 4, d: 10.5, sx: 0, sy: -30}),
};

// ---------------- bài giảng
// Bài giảng · tiết 5 (45 phút), theo mục 1.7–1.10 của giáo trình; giáo án: tools/giao-an-mang/tk-van-hanh.json.
// Tên bước (t) phải khớp từng bước của giáo án; tests/smoke.py kiểm. Cảnh giữ vòng vận hành; các mục 5G-Advanced, 6G đọc qua bốn câu hỏi của 1.10.2.
const CAP = [
  {k: 'Tiết 5 · mục 1.7', t: 'Mạng đã chạy, làm sao biết nó còn đạt?', b: 'Bốn tiết trước là thiết kế: yêu cầu, trễ, mất gói, độ sẵn sàng. Tiết này là vận hành: mạng đã chạy, tải thay đổi từng giây, làm sao biết nó còn đạt yêu cầu. Liên kết lõi 2 xuống truy nhập 3 có những đợt bùng nổ ngắn. Trên màn hình phòng vận hành, đường xám là tải thật, đường xanh là cái người vận hành đo được.', e: 'thiết kế → vận hành → kiểm chứng → điều chỉnh'},
  {k: 'Mục 1.7.1 · phương trình 1.20', t: 'Ba hướng đánh giá và một kế hoạch đánh giá', b: 'Đánh giá hiệu năng có ba hướng: đo kiểm thực nghiệm (thật nhưng phụ thuộc môi trường), mô phỏng (nhiều kịch bản nhưng phải xác thực mô hình), phân tích mô hình (nhanh nhưng dựa trên giả thiết đơn giản). Bài này dùng cả ba. Mỗi thí nghiệm cần đủ năm thành phần trước khi chạy, và báo cáo phải ghi metric, điểm đo, thời gian, cỡ gói, mô hình tải, số lần lặp.', e: 'E = (M, F, L, S, A)   (1.20)'},
  {k: 'Mục 1.7.2 · câu 6', t: 'Hỏi định kỳ bỏ lỡ đợt bùng nổ', b: 'SNMP hỏi bộ đếm giao diện mỗi 5 phút, mức sử dụng là trung bình của cả khoảng. Đợt bùng nổ 24 giây lên 97 % bị pha loãng vào 276 giây còn lại ở khoảng 45 %: con số đo ra quanh 50 %, xa ngưỡng 80 %. Người vận hành không hề biết người dùng vừa chịu nghẽn. Polling có độ trễ phát hiện và không đủ chi tiết cho biến động ngắn.', e: 'mẫu 5 phút = trung bình 300 giây'},
  {k: 'Telemetry · câu 6', t: 'Thiết bị tự đẩy dữ liệu', b: 'Đổi sang telemetry: thiết bị tự đẩy mẫu mỗi giây theo đăng ký, không chờ bị hỏi. RFC 9232 mô tả khung telemetry; RFC 8639, 8641 định nghĩa đăng ký nhận thông báo và cập nhật datastore YANG. Cả bốn đợt bùng nổ đều bị bắt, chậm chừng một giây. Đổi lại, dữ liệu thu thập nhiều gấp 300 lần: thiết kế phải chọn dữ liệu nào, tần suất nào, thu ở đâu, xử lý ra sao.', e: 'polling: hỏi rồi chờ · streaming: đăng ký rồi nhận',
    ask: {q: 'Đợt bùng nổ dài 20 s. Chu kỳ đo nào chắc chắn có ít nhất một mẫu nằm trọn trong đợt?', o: ['5 phút', '1 phút', '10 s'], a: 2, e: 'Chu kỳ phải ngắn hơn khoảng một nửa thời gian của hiện tượng; 10 s cho ít nhất một khoảng nằm trọn trong 20 s.'}},
  {k: 'Phương trình 1.21', t: 'Sai lệch giữa trạng thái đo và mục tiêu', b: 'Vận hành có kiểm chứng là so liên tục trạng thái quan sát y_k với trạng thái mong muốn y*_k. Ở đây y* là mức sử dụng 0,8, hệ số khai thác mục tiêu của tiết 2. Khi Δk vượt ngưỡng, hệ thống cảnh báo, phân tích nguyên nhân hoặc tự phục hồi. Bảng 06 cho thấy vòng khép kín không nhanh hơn khâu đo của nó.', e: 'Δ_k = ‖y_k − y*_k‖   (1.21)'},
  {k: 'Mục 1.9.3 · phương trình 1.28', t: 'Đo nhiều chưa chắc thấy đủ', b: 'Chỉ có bộ đếm giao diện và CPU thì suy ra được ba trong sáu trạng thái cần kiểm soát: Γ = 0,5. Thêm độ sâu hàng đợi không tăng Γ vì nghẽn đã thấy rồi. Thêm đo chủ động, công suất quang, sự kiện định tuyến thì Γ lên 1. Telemetry đúng là thu đúng dữ liệu để suy ra trạng thái ảnh hưởng SLA, không phải thu thật nhiều.', e: 'Γ = |{y ∈ Y : y suy ra được từ M}| / |Y|   (1.28)',
    ask: {q: 'Có 8 trạng thái cần kiểm soát; bộ metric hiện tại suy ra được 6. Γ bằng bao nhiêu và nên làm gì?', o: ['0,75; thêm metric cho đúng hai trạng thái còn thiếu', '0,75; tăng tần suất mọi metric', '6; đủ rồi'], a: 0, e: 'Γ = 6/8 = 0,75. Tăng tần suất không giúp suy ra trạng thái chưa có nguồn đo.'}},
  {k: 'Mục 1.8.1', t: 'Từ mạng IP sang mạng dịch vụ lập trình được', b: 'Lớp học, camera, robot, cảm biến, thực tế mở rộng cần những thứ khác nhau. Nút thắt không chỉ là băng thông mà là khả năng ánh xạ yêu cầu thành tài nguyên truyền dẫn, tính toán, chính sách, cô lập, giám sát và phục hồi. 5GS tách xử lý điều khiển, quản lý phiên và chuyển tiếp (AMF, SMF, UPF); 5G-Advanced bắt đầu từ Release 18. Người thiết kế phải chọn cả vị trí chức năng mạng và điểm đo.', e: 'yêu cầu → tài nguyên + chính sách + giám sát'},
  {k: 'Mục 1.8.2 · phương trình 1.22 · câu 8', t: 'Lát cắt mạng không phải VLAN', b: 'VLAN phân đoạn miền lớp 2; VPN cho kết nối riêng trên hạ tầng chung; lát cắt mạng gắn với mục tiêu dịch vụ và cam kết tài nguyên (RFC 9543). Một lát cắt phải có điểm biên, yêu cầu tài nguyên, mức cô lập, metric giám sát và chính sách QoS. Thành phần M_n nối thẳng với tiết này: không đo được thì lát cắt chỉ còn là phân đoạn logic.', e: 'S_n = (P_n, R_n, I_n, M_n, Q_n)   (1.22)'},
  {k: 'Mục 1.8.3 · phương trình 1.23 · câu 9', t: 'Xử lý ở biên chỉ có lợi khi tổng trễ nhỏ hơn', b: 'MEC đưa tính toán về gần người dùng: trễ truyền tải giảm, nhưng xử lý phụ thuộc máy chủ biên và tải tại chỗ. Ví dụ giả định: tập trung 5 + 20 + 15 + 20 = 60 ms; ở biên 5 + 2 + 35 + 2 = 44 ms, có lợi; nếu máy biên quá tải, xử lý 60 ms thì tổng 69 ms, thua tập trung. MEC là bài toán đồng thiết kế mạng, tính toán, vị trí dữ liệu và di động phiên.', e: 'T_edge = D_access + D_transport + T_proc + D_return   (1.23)'},
  {k: 'Mục 1.8.4–1.8.5 · phương trình 1.24 · câu 10', t: 'Vòng điều khiển cần dữ liệu đo tin được', b: 'Bộ điều khiển RAN trong O-RAN chọn hành động từ dữ liệu đo, mục tiêu QoS và trạng thái dịch vụ. Tắt đo chủ động: Γ tụt, bộ điều khiển mù với trễ dịch vụ. Dữ liệu thiếu thì hành động có thể làm hiệu năng tệ đi. AI for Network dùng AI để vận hành mạng; Network for AI là mạng phục vụ AI phân tán. Cả hai phải đánh giá bằng tác động lên trễ, mất gói, SLA, năng lượng, không chỉ bằng độ chính xác dự đoán.', e: 'u_t = π(z_t, q_t, s_t)   (1.24)'},
  {k: 'Mục 1.8.6–1.8.7 · phương trình 1.25, 1.26 · câu 11, 12', t: 'Trễ lan truyền biến thiên và metric cảm nhận', b: 'Với UAV hay vệ tinh, khoảng cách thay đổi theo thời gian nên trễ lan truyền không còn là hằng số. UAV cách 3 km: khoảng 10 µs; vệ tinh quỹ đạo thấp cách 1 000 km: khoảng 3,3 ms; vệ tinh địa tĩnh cao 35 786 km: khoảng 119 ms một chặng. ISAC dùng cùng tín hiệu vô tuyến cho truyền thông và cảm nhận, nên phải thêm metric cảm nhận như xác suất phát hiện, sai số định vị, và cân hai mục tiêu bằng trọng số.', e: 'd_prop(t) = r(t)/c   (1.25) · J_ISAC = β1·J_comm + β2·J_sense + β3·C_resource   (1.26)'},
  {k: 'Mục 1.9.1–1.9.2 · phương trình 1.27 · câu 13', t: 'Bảo mật, chống chịu, năng lượng là ràng buộc từ đầu', b: 'Ảo hoá, AI, tự động hoá làm miền tấn công lan ra telemetry, mô hình, giao diện lập trình. Thiết kế an toàn phải trả lời: miền nào cô lập, sự cố lan qua đâu, dữ liệu nào cần bảo vệ, phát hiện sai lệch thì rollback về đâu. Hiệu quả năng lượng là bit hữu ích trên joule: 10 Gbit/s ở 2 kW là 5 Mbit/J, tốt hơn 12 Gbit/s ở 3 kW (4 Mbit/J). Telemetry mỗi giây cũng tốn năng lượng thu, lưu, xử lý.', e: 'η_EE = B_useful / E_total   (1.27)'},
  {k: 'Mục 1.10 · bảng 1.5', t: 'Bốn câu hỏi trước mọi công nghệ mới', b: 'Chuỗi thiết kế hiện đại: xác định dịch vụ, lượng hoá yêu cầu, ánh xạ tài nguyên, cô lập và bảo mật, đo kiểm, giám sát và tối ưu; bước cuối quay về bước đầu. Trước một công nghệ mới, hỏi bốn câu: phục vụ dịch vụ nào, tác động metric nào, cần thêm tài nguyên hay dữ liệu gì, tạo rủi ro gì. Về nhà: câu 6, 8–13 chương 1. Tiết sau mở chương 2: phân tích yêu cầu.', e: 'dịch vụ nào · metric nào · tốn gì · rủi ro gì'},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'});
at(11, {cap: 1}); at(11.5, {click: 'v_man'});
at(22, {cap: 2}); at(22.5, {click: 'poll'});
at(33, {cap: 3}); at(33.5, {click: 'stream'});
at(44, {cap: 4}); at(44.5, {click: 'v_hero'}); at(46, {slide: 'tau', to: LOGC(10, 1, 900), dur: 2});
at(55, {cap: 5}); at(57, {click: 'm_q'}); at(60, {click: 'm_probe'}); at(62.5, {click: 'm_opt'}); at(65, {click: 'm_log'});
at(67, {cap: 6});
at(78, {cap: 7});
at(89, {cap: 8});
at(100, {cap: 9}); at(102, {click: 'm_probe'}); at(108, {click: 'm_probe'});
at(111, {cap: 10});
at(124, {cap: 11}); at(125, {slide: 'tau', to: 0, dur: 1.5}); at(130, {slide: 'tau', to: LOGC(10, 1, 900), dur: 1.5});
at(135, {cap: 12}); at(135.5, {click: 'v_hero'});
ev.sort((a, b) => a.at - b.at);

sim.reset(); tinh(); S.dirty = false;
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 148}, firstView: 'hero', extra: [{key: 'stream', label: 'Telemetry 1 s'}],
  keys: {1: 'v_hero', 2: 'v_man', p: 'poll', s: 'stream'}});
