// Thiết kế và hiệu năng mạng · bài 5.1 · Phòng đo.
// Theo giáo trình TEL1459 (Hoàng Trọng Minh, PTIT 2026), mục 5.1 và 5.3: kế hoạch đánh giá E = (M, F, L, S, A) (1.20), cấu hình kiểm
// thử S_test (5.2), trung bình và phương sai mẫu (5.10), khoảng tin cậy 95 % x̄ ± t·s/√n (5.11), thay đổi tương đối (5.30); câu 5 cuối
// chương 5 (lặp 10 lần, vì sao chỉ báo trung bình là chưa đủ). Mỗi lần đo là một lần chạy thật của bộ mô phỏng sự kiện rời rạc với hạt
// giống khác nhau, nên độ phân tán giữa các lần là thật, không phải nhiễu vẽ thêm.
import * as THREE from 'three';
import {MAT, createStage} from '../kit/stage.js';
import * as SH from '../kit/shapes.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {tag, picker, vn} from '../kit/soi.js';
import * as F from '../kit/mang/cong-thuc.js';
import {chayHangDoi, lap} from '../kit/mang/mo-phong.js';
import {boCanh, P, MAU, NHO, LOGC, unlog} from '../kit/mang/canh.js';

const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 16, grid: 1, fade: 60, fov: 26, near: 0.2, far: 260});
const ui = createUI(app);
const root = new THREE.Group(); st.scene.add(root);
const B = boCanh(root), {mk, M} = B;

// ---------------- cảnh: bàn thí nghiệm, máy phát lưu lượng · thiết bị cần đo (A hoặc B) · máy phân tích; thước kết quả phía sau
const ban = mk(SH.rbox(12, 0.1, 3.2, 0.04), M.desk); ban.position.set(0, 0.95, 0.4); tag('ban', ban);
for (const x of [-5.6, 5.6]) for (const z of [-1, 1.8]) mk(SH.rbox(0.1, 0.9, 0.1, 0.02), M.panel).position.set(x, 0.45, z);
const hop = (x, w, h, mau, part) => { const g = new THREE.Group(); g.position.set(x, 1.0, 0.8); root.add(g); tag(part, g); mk(SH.rbox(w, h, 0.9, 0.05), mau, g).position.y = h / 2; for (let i = 0; i < 4; i++) { const l = mk(new THREE.SphereGeometry(0.03, 8, 6), M.led, g); l.position.set(-w / 2 + 0.2 + i * 0.12, h * 0.7, 0.46); } return g; };
hop(-4.2, 1.6, 0.5, MAT.anod('#3b4a5c'), 'phat');
const dutA = hop(0, 1.4, 0.36, MAT.dark(), 'dut'), dutB = hop(0, 1.4, 0.36, MAT.anod('#7a4a2f'), 'dut'); dutB.position.y = 1.42;
hop(4.2, 1.6, 0.5, MAT.anod('#3b4a5c'), 'phantich');
const cA = B.cap([P(-3.4, 1.25, 0.9), P(-2, 1.08, 1.3), P(-0.7, 1.2, 0.9)], M.cu, 0.03, 'cap'), cB = B.cap([P(0.7, 1.2, 0.9), P(2, 1.08, 1.3), P(3.4, 1.25, 0.9)], M.cu, 0.03, 'cap');
const goi = B.beGoi(10, MAU.prop, [0.14, 0.08, 0.1]);
// thước kết quả: trục thời gian trễ nằm ngang phía sau bàn, mỗi lần đo một chấm; vạch CI 95 % cho A (xanh) và B (cam)
const XR0 = -5, XR1 = 5, YR = 2.5, ZR = -0.6;
const thuoc = mk(SH.rbox(XR1 - XR0 + 0.4, 0.06, 0.5, 0.02), MAT.shell('#e9e6de')); thuoc.position.set(0, YR, ZR); tag('thuoc', thuoc);
for (const x of [XR0 - 0.2, XR1 + 0.2]) mk(SH.rbox(0.06, YR - 1.0, 0.06, 0.01), M.panel).position.set(x, (YR + 1.0) / 2, ZR);
const NMAX = 40;
const cham = [MAU.thoai, MAU.video].map((c) => { const m = new THREE.InstancedMesh(new THREE.SphereGeometry(0.07, 12, 10), new THREE.MeshStandardMaterial({color: c, roughness: 0.4}), NMAX); m.count = 0; root.add(m); tag('thuoc', m); return m; });
const ci = [MAU.thoai, MAU.video].map((c, k) => { const g = new THREE.Group(); root.add(g); const thanh = mk(SH.rbox(1, 0.05, 0.05, 0.01), MAT.plastic(c), g); const tb = mk(SH.rbox(0.05, 0.3, 0.05, 0.01), MAT.plastic(c), g); const d0 = mk(SH.rbox(0.03, 0.18, 0.05, 0.01), MAT.plastic(c), g), d1 = mk(SH.rbox(0.03, 0.18, 0.05, 0.01), MAT.plastic(c), g); g.position.set(0, YR + 0.9 + k * 0.45, ZR); tag('ci', g); return {g, thanh, tb, d0, d1}; });

// ---------------- mô hình
// Yếu tố F: tốc độ cổng của thiết bị cần đo; hai mức: A 100 Mbit/s, B nhanh hơn x %. Kịch bản S: tải 80 Mbit/s, gói mũ trung bình 1 000
// byte. Metric M: trễ trung bình trong hệ. Phân tích A: CI 95 % theo (5.11). Tất cả là thiết lập của bài.
const S = {n: 3, goiMoi: 3000, hon: 0.06, t: 0, kq: null, dirty: true};
function tinh() {
  const L = F.byte(1000), lam = 80e6 / L;
  const run = (C, seed) => chayHangDoi({C, Lbit: L, rho: (lam * L) / C, n: S.goiMoi, warm: 300, seed}).W;
  const a = lap(S.n, (sd) => run(100e6, sd), 101), b = lap(S.n, (sd) => run(100e6 * (1 + S.hon), sd), 2001);
  const ka = F.thongKe(a), kb = F.thongKe(b), tq = F.tStudent975(S.n - 1);
  const ciA = [ka.tb - (tq * ka.s) / Math.sqrt(S.n), ka.tb + (tq * ka.s) / Math.sqrt(S.n)], ciB = [kb.tb - (tq * kb.s) / Math.sqrt(S.n), kb.tb + (tq * kb.s) / Math.sqrt(S.n)];
  const chong = !(ciB[1] < ciA[0] || ciA[1] < ciB[0]);
  const ltA = F.mm1(lam, 100e6 / L).W, ltB = F.mm1(lam, (100e6 * (1 + S.hon)) / L).W;
  S.kq = {a, b, ka, kb, tq, ciA, ciB, chong, ltA, ltB, doi: F.thayDoi(ka.tb, kb.tb)};
  S.t0 = performance.now() / 1000; // các lần đo hiện dần theo đồng hồ thật
}

// ---------------- bảng
ui.header({code: '5.1', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · MỤC 5.1, 5.3 · ĐO VÀ PHÂN TÍCH', title: 'Phòng đo', sub: 'LẶP n LẦN · KHOẢNG TIN CẬY 95 % · KẾT LUẬN CÓ CĂN CỨ', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['A / B', 'HAI THIẾT KẾ'], ['5.10 · 5.11', 'PHƯƠNG TRÌNH'], ['CÂU 5', 'CHƯƠNG 5']]});
ui.panel(28, 112, 300, 226, 'KẾ HOẠCH ĐÁNH GIÁ · 1.20', '01');
const pSvg = ui.svg(42, 146, 272, 104);
const slH = ui.slider('hon', 42, 260, 272, 'B NHANH HƠN', {lw: 92, vw: 74});
const t01 = ui.text(42, 290, '', 'sm', NHO);
ui.panel(28, 350, 300, 196, 'LẶP LẠI', '02');
const slN = ui.slider('n', 42, 386, 272, 'SỐ LẦN n', {lw: 92, vw: 74});
const slG = ui.slider('goi', 42, 414, 272, 'GÓI MỖI LẦN', {lw: 92, vw: 74});
const t02 = ui.text(42, 442, '', 'sm', NHO);
ui.panel(28, 558, 300, 208, 'TRUNG BÌNH VÀ ĐỘ LỆCH · 5.10', '03');
const sSvg = ui.svg(42, 592, 272, 70);
const t03 = ui.text(42, 670, '', 'sm', NHO);
ui.panel(1272, 112, 300, 250, 'KHOẢNG TIN CẬY 95 % · 5.11', '04');
const cSvg = ui.svg(1286, 146, 272, 96);
ui.text(1286, 252, 'KẾT LUẬN'); const kBig = ui.text(1286, 266, '', 'mo', 'position:absolute;font-size:22px;font-weight:700');
const t04 = ui.text(1286, 300, '', 'sm', NHO);
ui.panel(1272, 374, 300, 186, 'HỆ SỐ t', '05');
ui.text(1286, 408, 't_0,975; n−1'); const tBig = ui.text(1286, 422, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t05 = ui.text(1286, 458, '', 'sm', NHO);
ui.panel(1272, 572, 300, 194, 'CÂU 5 · CHƯƠNG 5', '06');
const t06 = ui.text(1286, 606, '', 'sm', NHO);
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_thuoc', 'THƯỚC KẾT QUẢ'], ['n3', '3 LẦN'], ['n10', '10 LẦN'], ['n30', '30 LẦN'], ['dai', 'ĐO DÀI HƠN']], 360, 120, 860);
ui.text(362, 664, 'LẦN ĐO');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts([{key: 'phat', title: 'MÁY PHÁT LƯU LƯỢNG', sub: '80 MBIT/S'}, {key: 'dut', title: 'THIẾT BỊ CẦN ĐO', sub: 'A VÀ B'}, {key: 'phantich', title: 'MÁY PHÂN TÍCH', sub: 'TRỄ MỖI GÓI'}, {key: 'thuoc', title: 'KẾT QUẢ TỪNG LẦN', sub: 'XANH A · CAM B'}]);

// ---------------- mô phỏng
const T_LAN = 0.45; // mỗi lần đo hiện ra sau 0,45 s cảnh
const sim = {
  S,
  reset() { Object.assign(S, {n: 3, goiMoi: 3000, hon: 0.06}); S.dirty = true; },
  busy: () => false,
  isOn: (k) => (k === 'n3' ? S.n === 3 : k === 'n10' ? S.n === 10 : k === 'n30' ? S.n === 30 : k === 'dai' ? S.goiMoi >= 30000 : false),
  act(k) { if (k === 'n3') S.n = 3; if (k === 'n10') S.n = 10; if (k === 'n30') S.n = 30; if (k === 'dai') S.goiMoi = S.goiMoi >= 30000 ? 3000 : 30000; S.dirty = true; },
  slide(k, t) {
    if (k === 'n') S.n = Math.round(2 + t * (NMAX - 2));
    if (k === 'goi') S.goiMoi = Math.round(unlog(t, 500, 60000));
    if (k === 'hon') S.hon = Math.round(t * 30) / 100;
    S.dirty = true;
  },
  keyDown() { return false; },
  step(dt) { if (S.dirty) { tinh(); S.dirty = false; } S.t += dt; },
  shadowAt() { return new THREE.Vector3(0, 10, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq; if (!kq) return;
    const tt = performance.now() / 1000 - S.t0, hien = Math.min(S.n, Math.floor(tt / T_LAN) + 1), xong = hien >= S.n;
    // thang trục: từ min tới max của mọi kết quả, nới 15 %
    const all = [...kq.a, ...kq.b, ...kq.ciA, ...kq.ciB], lo = Math.min(...all), hi = Math.max(...all), pad = (hi - lo) * 0.15 + 1e-9, X = (v) => XR0 + ((v - (lo - pad)) / (hi - lo + 2 * pad)) * (XR1 - XR0);
    const d = new THREE.Object3D();
    [kq.a, kq.b].forEach((arr, k) => { cham[k].count = hien; for (let i = 0; i < hien; i++) { d.position.set(X(arr[i]), YR + 0.12 + k * 0.0 + (k ? 0.18 : 0), ZR + (k ? 0.12 : -0.12) + ((i % 3) - 1) * 0.05); d.updateMatrix(); cham[k].setMatrixAt(i, d.matrix); } cham[k].instanceMatrix.needsUpdate = true; });
    [[kq.ciA, kq.ka], [kq.ciB, kq.kb]].forEach(([c, s], k) => { const o = ci[k], x0 = X(c[0]), x1 = X(c[1]); o.g.visible = xong && S.n >= 2; o.thanh.scale.x = Math.max(0.02, x1 - x0); o.thanh.position.x = (x0 + x1) / 2; o.tb.position.x = X(s.tb); o.d0.position.x = x0; o.d1.position.x = x1; });
    // thiết bị đang đo: lần chẵn A, lần lẻ B (đổi lần lượt), gói chạy qua bàn
    const dangB = !xong && Math.floor(tt / (T_LAN / 2)) % 2 === 1;
    dutA.position.y = 1.0; dutB.position.y = 1.42;
    goi.forEach((m, j) => { m.visible = !xong; if (!m.visible) return; const s = ((j / goi.length) + S.t * 0.8) % 1, cv = s < 0.5 ? cA.curve : cB.curve; m.position.copy(cv.getPoint((s % 0.5) * 2)); m.position.y += 0.06 + (dangB ? 0.3 : 0); m.material.color.set(dangB ? MAU.video : MAU.thoai); });
    // bảng 01
    { const rows = [['M · metric', 'trễ trung bình trong hệ'], ['F · yếu tố', 'tốc độ cổng thiết bị'], ['L · mức', `A 100 · B ${vn(100 * (1 + S.hon), 0)} Mbit/s`], ['S · kịch bản', '80 Mbit/s, gói 1 000 byte mũ'], ['A · phân tích', `CI 95 %, ${S.n} lần mỗi mức`]]; let g = '';
      rows.forEach(([a, b], i) => { g += `<text x="0" y="${12 + i * 20}" font-family="JetBrains Mono" font-size="10" fill="#626773">${a}</text><text x="272" y="${12 + i * 20}" text-anchor="end" font-family="Be Vietnam Pro" font-size="10.5" fill="${C.ink}">${b}</text>`; }); pSvg.innerHTML = g; }
    slH.set(S.hon / 0.3, `${vn(S.hon * 100, 0)} %`);
    t01.innerHTML = 'Mỗi thí nghiệm phải có đủ năm thành phần trước khi chạy (1.20). Câu hỏi của bài: B có thật sự nhanh hơn A không?';
    // bảng 02
    slN.set((S.n - 2) / (NMAX - 2), `${S.n} lần`); slG.set(LOGC(S.goiMoi, 500, 60000), vn(S.goiMoi, 0));
    t02.innerHTML = `Mỗi lần đo là một lần chạy độc lập ${vn(S.goiMoi, 0)} gói với hạt giống khác. Đo dài hơn thì mỗi lần ít dao động hơn; lặp nhiều hơn thì ước lượng trung bình chắc hơn.`;
    // bảng 03
    { let g = ''; [['A', kq.ka, MAU.thoai, kq.ltA], ['B', kq.kb, MAU.video, kq.ltB]].forEach(([n, s, c, lt], i) => { const y = 14 + i * 30; g += `<rect x="0" y="${y - 10}" width="10" height="10" fill="${c}"/><text x="16" y="${y}" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">x̄ = ${F.fmtThoiGian(s.tb, 2)}</text><text x="150" y="${y}" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">s = ${F.fmtThoiGian(s.s, 2)}</text><text x="16" y="${y + 14}" font-family="JetBrains Mono" font-size="9" fill="#626773">M/M/1 (đáp án thật): ${F.fmtThoiGian(lt, 2)}</text>`; }); sSvg.innerHTML = g; }
    t03.innerHTML = 'x̄ = Σx<sub>i</sub>/n, s² = Σ(x<sub>i</sub> − x̄)²/(n − 1). Vì đây là mô phỏng, ta biết đáp án thật (lời giải M/M/1) để so: ngoài đời thì không.';
    // bảng 04
    { const W = 272, lo2 = Math.min(kq.ciA[0], kq.ciB[0]), hi2 = Math.max(kq.ciA[1], kq.ciB[1]), pd = (hi2 - lo2) * 0.1 + 1e-9, XX = (v) => ((v - lo2 + pd) / (hi2 - lo2 + 2 * pd)) * W; let g = '';
      [[kq.ciA, kq.ka, MAU.thoai, 'A'], [kq.ciB, kq.kb, MAU.video, 'B']].forEach(([c, s, col, n], i) => { const y = 22 + i * 34; g += `<line x1="${XX(c[0])}" x2="${XX(c[1])}" y1="${y}" y2="${y}" stroke="${col}" stroke-width="3"/><line x1="${XX(c[0])}" x2="${XX(c[0])}" y1="${y - 7}" y2="${y + 7}" stroke="${col}" stroke-width="2"/><line x1="${XX(c[1])}" x2="${XX(c[1])}" y1="${y - 7}" y2="${y + 7}" stroke="${col}" stroke-width="2"/><circle cx="${XX(s.tb)}" cy="${y}" r="4" fill="${col}"/><text x="${XX(c[1]) + 6}" y="${y + 4}" font-family="JetBrains Mono" font-size="10" fill="${col}">${n}</text>`; });
      if (kq.chong) g += `<rect x="${XX(Math.max(kq.ciA[0], kq.ciB[0]))}" y="6" width="${Math.max(0, XX(Math.min(kq.ciA[1], kq.ciB[1])) - XX(Math.max(kq.ciA[0], kq.ciB[0])))}" height="70" fill="${MAU.bad}" opacity=".1"/>`;
      g += `<text x="0" y="92" font-family="JetBrains Mono" font-size="9" fill="#626773">${F.fmtThoiGian(lo2, 2)}</text><text x="${W}" y="92" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#626773">${F.fmtThoiGian(hi2, 2)}</text>`; cSvg.innerHTML = g; }
    kBig.textContent = kq.chong ? 'Chưa kết luận được' : (kq.kb.tb < kq.ka.tb ? 'B nhanh hơn A' : 'A nhanh hơn B'); kBig.style.color = kq.chong ? MAU.warn : MAU.ok;
    t04.innerHTML = `CI 95 % = x̄ ± t·s/√n. ${kq.chong ? 'Hai khoảng chồng lên nhau (vùng đỏ nhạt): chênh lệch có thể chỉ là ngẫu nhiên. Tăng số lần hoặc đo dài hơn.' : `Hai khoảng tách rời: B đổi trễ ${vn(kq.doi * 100, 1)} % so với A, đủ căn cứ để kết luận (5.30).`} Hai khoảng không chồng là phép kiểm thận trọng, chưa phải kiểm định đầy đủ.`;
    // bảng 05
    tBig.textContent = vn(kq.tq, 3);
    t05.innerHTML = `Với ${S.n} lần đo, hệ số Student ${vn(kq.tq, 3)}${S.n === 10 ? ' (giá trị 2,262 của bảng t, 9 bậc tự do)' : ''}. n nhỏ thì t lớn và khoảng tin cậy rộng: 3 lần cho t = 4,303, 30 lần còn 2,045. Lặp nhiều lần vừa giảm s/√n vừa giảm t.`;
    // bảng 06
    t06.innerHTML = 'Lặp 10 lần mà chỉ báo trung bình thì người đọc không biết 10 kết quả sát nhau hay tản mát. Phải báo kèm độ lệch chuẩn hoặc khoảng tin cậy, cùng điều kiện đo: kích thước gói, mô hình tải, số luồng, thời lượng (bảng 1.3).';
    // chế độ
    modeEl.textContent = xong ? `${S.n} / ${S.n} lần` : `${hien} / ${S.n}`;
    modeSub.textContent = xong ? `A ${F.fmtThoiGian(kq.ka.tb, 2)} ± ${F.fmtThoiGian((kq.ciA[1] - kq.ciA[0]) / 2, 2)} · B ${F.fmtThoiGian(kq.kb.tb, 2)} ± ${F.fmtThoiGian((kq.ciB[1] - kq.ciB[0]) / 2, 2)}` : `đang chạy, mỗi lần ${vn(S.goiMoi, 0)} gói ở tốc độ thật`;
    alert.set(xong && kq.chong ? 'HAI KHOẢNG TIN CẬY CHỒNG NHAU' : '');
    const W3 = (v) => st.project(v.x, v.y, v.z);
    ui.drawCallouts([{key: 'phat', p: W3(P(-4.2, 1.6, 0.8)), dx: -40, dy: 50}, {key: 'dut', p: W3(P(0, 1.9, 0.8)), dx: 0, dy: 60}, {key: 'phantich', p: W3(P(4.2, 1.6, 0.8)), dx: 40, dy: 50}, {key: 'thuoc', p: W3(P(XR0, YR + 0.2, ZR)), dx: -40, dy: -50}], 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình Thiết kế và hiệu năng mạng (TEL1459, PTIT 2026): (1.20), (5.2), (5.10), (5.11), (5.30), bảng 1.3; câu 5 chương 5. Giá trị t của phân bố Student lấy theo bảng chuẩn (t_0,975 với 9 bậc tự do = 2,262). Thiết bị, tải, cỡ gói và hai mức tốc độ là thiết lập của bài; mỗi lần đo là một lần chạy bộ mô phỏng.';
function cardOf(part) {
  const kq = S.kq; if (!kq) return null;
  const base = {src: SRC};
  if (part === 'thuoc' || part === 'ci') return {...base, k: 'Kết quả', t: `${S.n} lần mỗi thiết kế`, b: 'Mỗi chấm là trễ trung bình của một lần đo. Thanh ngang phía trên là khoảng tin cậy 95 % của trung bình.', rows: [['CI A', () => `${F.fmtThoiGian(S.kq.ciA[0], 2)} – ${F.fmtThoiGian(S.kq.ciA[1], 2)}`], ['CI B', () => `${F.fmtThoiGian(S.kq.ciB[0], 2)} – ${F.fmtThoiGian(S.kq.ciB[1], 2)}`]]};
  if (part === 'dut') return {...base, k: 'Thiết bị cần đo', t: 'A dưới, B trên', b: 'Hai mức của cùng một yếu tố. Mọi thứ khác (tải, cỡ gói, thời lượng) giữ y hệt để chênh lệch chỉ do yếu tố đang xét.', rows: [['B nhanh hơn', () => `${vn(S.hon * 100, 0)} %`]]};
  if (part === 'phat' || part === 'phantich' || part === 'cap' || part === 'ban') return {...base, k: 'Cấu hình kiểm thử', t: 'S_test = {N, C, P, W, T, O}', b: 'Nút, cấu hình, chính sách, workload, thời gian đo và đầu ra phải ghi đủ thì người khác mới lặp lại được phép đo (5.2).', rows: []};
  return null;
}

// ---------------- góc nhìn
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 0, ty: 1.8, tz: 0, az: -30 + 3 * Math.sin(t * 0.05), el: 22, d: 26, sx: 0, sy: -10} : {tx: 0.6, ty: 1.8, tz: 0.2, az: -6 + 3 * Math.sin(t * 0.05), el: 18, d: 22, sx: 0, sy: -10}),
  thuoc: () => ({tx: 0, ty: YR + 0.5, tz: ZR, az: 0, el: 8, d: 12, sx: 0, sy: -30}),
};

// ---------------- bài giảng
const CAP = [
  {k: 'Mục 5.1 · bài toán', t: 'Thiết bị B có thật sự nhanh hơn A?', b: 'B có cổng nhanh hơn A 6 %. Phòng đo cho cùng một tải chạy qua từng thiết bị và ghi trễ trung bình. Câu hỏi nghe đơn giản, nhưng mỗi lần đo cho một số hơi khác: lưu lượng là ngẫu nhiên.', e: 'E = (M, F, L, S, A)   (1.20)'},
  {k: 'Ba lần đo', t: 'Chấm xanh và chấm cam lẫn vào nhau', b: 'Mỗi thiết kế đo ba lần. Các chấm của A và B xen kẽ nhau trên thước, hai khoảng tin cậy chồng lên nhau rất rộng. Với ba lần đo, chưa thể nói B nhanh hơn: chênh lệch có thể chỉ là may rủi.', e: 'CI95% = x̄ ± t_(0,975; n−1)·s/√n   (5.11)'},
  {k: 'Mười lần · câu 5', t: 'Trung bình thôi là chưa đủ', b: 'Bấm 10 lần. Trung bình có thể đã cho thấy B nhỏ hơn, nhưng nếu chỉ báo hai con số trung bình thì người đọc không biết mười kết quả sát nhau hay tản mát. Khoảng tin cậy trả lời đúng câu đó.', e: 't_(0,975; 9) = 2,262',
    ask: {q: 'Mười lần đo, trung bình A lớn hơn B nhưng hai khoảng tin cậy 95 % chồng lên nhau. Kết luận nào thận trọng?', o: ['B chắc chắn nhanh hơn', 'Chưa đủ căn cứ, cần đo thêm', 'A nhanh hơn'], a: 1, e: 'Chồng nhau nghĩa là chênh lệch quan sát được vẫn nằm trong dao động ngẫu nhiên có thể có.'}},
  {k: 'Ba mươi lần', t: 'Hai khoảng tách rời', b: 'Bấm 30 lần: s/√n nhỏ đi, hệ số t cũng nhỏ đi. Hai khoảng tin cậy tách rời, đủ căn cứ để kết luận B nhanh hơn, và nói được nhanh hơn bao nhiêu phần trăm.', e: 'độ rộng CI ∝ t·s/√n'},
  {k: 'Đo dài hơn', t: 'Mỗi lần đo chắc hơn', b: 'Bấm Đo dài hơn: mỗi lần chạy 30 000 gói thay vì 3 000. Mỗi kết quả dao động ít hơn, chấm co cụm lại. Thời lượng đo là một phần của cấu hình kiểm thử, phải ghi trong báo cáo (5.2).', e: 'S_test = {N, C, P, W, T, O}'},
  {k: 'Kiểm mô hình', t: 'Biết đáp án thật để kiểm phương pháp', b: 'Vì đây là mô phỏng hàng đợi M/M/1, ta biết trễ trung bình thật của A và B. Khoảng tin cậy 95 % chứa đáp án thật trong khoảng 95 % số lần làm thí nghiệm. Ngoài đời không có đáp án để so: chỉ có phương pháp đúng.', e: 'bảng 03 · M/M/1 là đáp án thật'},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'});
at(9, {cap: 1}); at(9.5, {click: 'n3'}); at(10, {click: 'v_thuoc'});
at(20, {cap: 2}); at(20.5, {click: 'n10'});
at(32, {cap: 3}); at(32.5, {click: 'n30'});
at(44, {cap: 4}); at(44.5, {click: 'dai'});
at(54, {cap: 5}); at(54.5, {click: 'v_hero'});
ev.sort((a, b) => a.at - b.at);

sim.reset(); tinh(); S.dirty = false;
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 64}, firstView: 'hero', extra: [{key: 'n30', label: '30 lần'}],
  keys: {1: 'v_hero', 2: 'v_thuoc'}});
