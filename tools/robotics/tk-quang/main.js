// Thiết kế và hiệu năng mạng · bài 4.2 · Ngân sách công suất quang.
// Theo giáo trình TEL1459 (Hoàng Trọng Minh, PTIT 2026), mục 4.3: P_rx = P_tx − (αL + n_c·L_c + n_s·L_s + M) (4.4), lỗi gói theo
// BER (1.16); câu 4 cuối chương 4 (chọn cáp đồng, quang đa mode, quang đơn mode). Suy hao tối đa theo ANSI/TIA-568.3-D: sợi
// đơn mode ngoài trời 0,5 dB/km, cặp đầu nối 0,75 dB, mối hàn 0,3 dB. Thông số module là giả định của bài: xem datasheet module thật.
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
const B = boCanh(root), {mk, M} = B;

// ---------------- module (giả định của bài, theo dạng thông số thường gặp; thiết kế thật phải lấy từ datasheet)
const MOD = {
  ngan: {ten: 'Module 10 km', ptx: -1, nhay: -15, max: 0.5},
  xa: {ten: 'Module 40 km', ptx: 1, nhay: -20, max: -1},
};
const TIA = {alpha: 0.5, Lc: 0.75, Ls: 0.3};

// ---------------- cảnh: tòa A (tủ, patch panel) → hố ga, mối hàn → tòa B
const XA = -8, XB = 8;
B.nha(XA, -0.4, 3.6, 3.4, 3.0, 'toaA'); B.nha(XB, -0.4, 3.6, 3.4, 3.0, 'toaB', M.wall2);
const tuA = B.tu(XA + 0.6, 0.2, 1.8, 'module'), tuB = B.tu(XB - 0.6, 0.2, 1.8, 'module');
void tuA; void tuB;
// rãnh cáp ngầm: nền tối, sợi quang vàng
mk(SH.rbox(XB - XA - 3, 0.04, 0.5, 0.02), MAT.satin('#c7c3ba')).position.set(0, 0.02, 1.9);
const soi = B.cap([P(XA + 0.6, 1.0, 0.65), P(XA + 1.4, 0.15, 1.6), P(XA + 2.4, 0.12, 1.9), P(XB - 2.4, 0.12, 1.9), P(XB - 1.4, 0.15, 1.6), P(XB - 0.6, 1.0, 0.65)], M.fiber, 0.05, 'soi');
// hố ga (mối hàn) và patch panel (đầu nối): vị trí theo thứ tự dọc tuyến, số lượng chỉnh được
const MAXN = 8;
const hoGa = Array.from({length: MAXN}, () => { const g = new THREE.Group(); root.add(g); tag('han', g); mk(new THREE.CylinderGeometry(0.42, 0.42, 0.08, 24), MAT.dark(), g).position.y = 0.05; mk(new THREE.TorusGeometry(0.42, 0.04, 8, 24), M.panel, g).rotation.x = Math.PI / 2; g.visible = false; return g; });
const dauNoi = Array.from({length: MAXN}, () => { const m = mk(SH.rbox(0.5, 0.3, 0.14, 0.03), MAT.anod('#5b6170')); tag('dau', m); m.visible = false; return m; });
// bậc thang công suất: cột trên tuyến, cao theo dBm so với −30 dBm
const NB = 48;
const cot = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({color: '#ffffff', roughness: 0.5}), NB); root.add(cot); tag('bac', cot);
const vNhay = mk(SH.rbox(XB - XA - 2, 0.03, 0.03, 0.01), new THREE.MeshBasicMaterial({color: MAU.bad})); tag('bac', vNhay);
const xung = mk(new THREE.SphereGeometry(0.16, 16, 12), new THREE.MeshStandardMaterial({color: '#ffd166', emissive: '#ffb703', emissiveIntensity: 1.5})); tag('xung', xung);
const ZB = -1.8, Y0 = 0.1, KY = 0.26; let SAN = -18; // đáy bậc thang = độ nhạy − 3 dB, để các bậc tụt nhìn rõ // bậc thang nằm phía sau tuyến, mỗi dB cao KY

// ---------------- mô hình
const S = {L: 8, nc: 4, ns: 4, M: 3, mod: 'ngan', t: 0, kq: null, dirty: true};
function tinh() {
  const m = MOD[S.mod];
  const prx = F.congSuatThu({Ptx: m.ptx, alpha: TIA.alpha, L: S.L, nc: S.nc, Lc: TIA.Lc, ns: S.ns, Ls: TIA.Ls, M: S.M});
  const du = prx - m.nhay, Lmax = (m.ptx - m.nhay - S.nc * TIA.Lc - S.ns * TIA.Ls - S.M) / TIA.alpha;
  // dọc tuyến: hai đầu nối đầu tiên ở tòa A, phần còn lại chia đều hai đầu; mối hàn rải đều ở giữa
  const ev = [];
  const ncA = Math.ceil(S.nc / 2), ncB = S.nc - ncA;
  for (let i = 0; i < ncA; i++) ev.push({x: 0.02 + i * 0.02, loai: 'dau', dB: TIA.Lc});
  for (let i = 0; i < S.ns; i++) ev.push({x: (i + 1) / (S.ns + 1), loai: 'han', dB: TIA.Ls});
  for (let i = 0; i < ncB; i++) ev.push({x: 0.98 - i * 0.02, loai: 'dau', dB: TIA.Lc});
  ev.sort((a, b) => a.x - b.x);
  const muc = (x) => { let p = m.ptx - TIA.alpha * S.L * x; for (const e of ev) if (e.x <= x) p -= e.dB; return p; };
  // xác suất lỗi gói minh hoạ theo biên còn lại: dưới độ nhạy thì BER tăng nhanh (giả định 10⁻¹² ở độ nhạy, xấu đi một bậc mỗi 0,5 dB)
  const ber = du >= 0 ? 1e-12 : Math.min(0.5, 1e-12 * Math.pow(10, -du / 0.5));
  S.kq = {m, prx, du, Lmax, ev, muc, ber, ppkt: F.pLoiGoi(ber, F.byte(1500)), soi: TIA.alpha * S.L, dau: S.nc * TIA.Lc, han: S.ns * TIA.Ls};
}

// ---------------- bảng
ui.header({code: '4.2', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · MỤC 4.3 · CÁP QUANG', title: 'Ngân sách công suất quang', sub: 'SỢI · ĐẦU NỐI · MỐI HÀN · BIÊN DỰ PHÒNG', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['dBm', 'ĐƠN VỊ'], ['4.4', 'PHƯƠNG TRÌNH'], ['TIA-568.3-D', 'SUY HAO TỐI ĐA']]});
ui.panel(28, 112, 300, 222, 'TUYẾN CÁP', '01');
const slL = ui.slider('L', 42, 148, 272, 'CHIỀU DÀI', {lw: 92, vw: 74});
const slC = ui.slider('nc', 42, 176, 272, 'ĐẦU NỐI', {lw: 92, vw: 74});
const slS = ui.slider('ns', 42, 204, 272, 'MỐI HÀN', {lw: 92, vw: 74});
const slM = ui.slider('M', 42, 232, 272, 'BIÊN M', {lw: 92, vw: 74});
const t01 = ui.text(42, 260, '', 'sm', NHO);
ui.panel(28, 346, 300, 204, 'CỘNG SUY HAO · 4.4', '02');
const lossSvg = ui.svg(42, 380, 272, 30);
ui.text(42, 420, 'CÔNG SUẤT THU P_RX'); const pBig = ui.text(42, 434, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t02 = ui.text(42, 470, '', 'sm', NHO);
ui.panel(28, 562, 300, 204, 'MODULE (GIẢ ĐỊNH)', '03');
const mSvg = ui.svg(42, 596, 272, 60);
const t03 = ui.text(42, 664, '', 'sm', NHO);
ui.panel(1272, 112, 300, 250, 'BẬC THANG CÔNG SUẤT', '04');
const bSvg = ui.svg(1286, 146, 272, 150);
const t04 = ui.text(1286, 304, '', 'sm', NHO);
ui.panel(1272, 374, 300, 186, 'DƯỚI ĐỘ NHẠY THÌ SAO · 1.16', '05');
const eBars = ['BER', 'GÓI 1 500 BYTE LỖI'].map((n, i) => ui.bar(1286, 410 + i * 22, 272, n, {lw: 120, vw: 76}));
const t05 = ui.text(1286, 460, '', 'sm', NHO);
ui.panel(1272, 572, 300, 194, 'TUYẾN DÀI NHẤT CÒN ĐẠT', '06');
ui.text(1286, 606, 'L_MAX'); const lBig = ui.text(1286, 620, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t06 = ui.text(1286, 656, '', 'sm', NHO);
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_bac', 'BẬC THANG'], ['ngan', 'MODULE 10 KM'], ['xa', 'MODULE 40 KM'], ['ban', 'ĐẦU NỐI BẨN'], ['sach', 'LAU ĐẦU NỐI']], 360, 120, 860);
ui.text(362, 664, 'CÔNG SUẤT THU');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts([{key: 'tx', title: 'PHÁT', sub: ''}, {key: 'rx', title: 'THU', sub: ''}, {key: 'bac', title: 'CÔNG SUẤT DỌC TUYẾN', sub: 'MỖI BẬC LÀ MỘT CHỖ SUY HAO'}]);
const subTx = ui.root.querySelectorAll('.call')[0]?.querySelector('span'), subRx = ui.root.querySelectorAll('.call')[1]?.querySelector('span');

// ---------------- mô phỏng
const xOf = (u) => XA + 1.4 + u * (XB - XA - 2.8);
let ban = 0;
const sim = {
  S,
  reset() { Object.assign(S, {L: 8, nc: 4, ns: 4, M: 3, mod: 'ngan'}); ban = 0; TIA.Lc = 0.75; S.dirty = true; },
  busy: () => false,
  isOn: (k) => (k === 'ngan' || k === 'xa' ? S.mod === k : k === 'ban' ? ban > 0 : false),
  act(k) { if (k === 'ngan' || k === 'xa') S.mod = k; if (k === 'ban') { ban = 1; TIA.Lc = 1.5; } if (k === 'sach') { ban = 0; TIA.Lc = 0.75; } S.dirty = true; },
  slide(k, t) {
    if (k === 'L') S.L = Math.round(unlog(t, 0.5, 60) * 10) / 10;
    if (k === 'nc') S.nc = Math.round(2 + t * 6);
    if (k === 'ns') S.ns = Math.round(t * MAXN);
    if (k === 'M') S.M = Math.round(t * 60) / 10;
    S.dirty = true;
  },
  keyDown() { return false; },
  step(dt) { if (S.dirty) { tinh(); S.dirty = false; } S.t += dt; },
  shadowAt() { return new THREE.Vector3(0, 10, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq; if (!kq) return;
    // đầu nối và hố ga trong cảnh
    let ic = 0, is = 0;
    kq.ev.forEach((e) => { const x = xOf(e.x); if (e.loai === 'dau') { const m = dauNoi[ic++]; if (m) { m.visible = true; m.position.set(e.x < 0.5 ? XA + 1.0 : XB - 1.0, 0.6 + (ic % 4) * 0.36, 0.95); m.material.color.set(ban ? '#8a6b3c' : '#5b6170'); } } else { const g = hoGa[is++]; if (g) { g.visible = true; g.position.set(x, 0, 1.9); } } });
    for (; ic < MAXN; ic++) dauNoi[ic].visible = false; for (; is < MAXN; is++) hoGa[is].visible = false;
    // bậc thang
    SAN = kq.m.nhay - 3; const d = new THREE.Object3D(), col = new THREE.Color(), san = SAN;
    for (let i = 0; i < NB; i++) { const u = (i + 0.5) / NB, p = kq.muc(u), h = Math.max(0.02, (p - san) * KY); d.position.set(xOf(u), Y0 + h / 2, ZB); d.scale.set(((XB - XA - 2.8) / NB) * 0.62, h, 0.22); d.updateMatrix(); cot.setMatrixAt(i, d.matrix); cot.setColorAt(i, col.set(p < kq.m.nhay ? MAU.bad : p < kq.m.nhay + S.M ? MAU.warn : '#e8c547')); }
    cot.instanceMatrix.needsUpdate = true; if (cot.instanceColor) cot.instanceColor.needsUpdate = true;
    vNhay.position.set(0, Y0 + (kq.m.nhay - SAN) * KY, ZB + 0.14);
    // xung sáng chạy dọc sợi, mờ dần theo công suất (mW = 10^(dBm/10))
    const u = (S.t * 0.22) % 1, pu = kq.muc(Math.min(1, Math.max(0, (u - 0.08) / 0.84))), mw = Math.pow(10, pu / 10);
    xung.position.copy(soi.curve.getPoint(u)); xung.position.y += 0.08; xung.material.emissiveIntensity = 0.15 + 2.2 * Math.min(1, mw / Math.pow(10, kq.m.ptx / 10)); xung.scale.setScalar(0.6 + 0.6 * Math.min(1, mw / Math.pow(10, kq.m.ptx / 10)));
    // bảng 01
    slL.set(LOGC(S.L, 0.5, 60), `${vn(S.L, 1)} km`); slC.set((S.nc - 2) / 6, `${S.nc} × ${vn(TIA.Lc, 2)} dB`); slS.set(S.ns / MAXN, `${S.ns} × 0,3 dB`); slM.set(S.M / 6, `${vn(S.M, 1)} dB`);
    t01.innerHTML = `Sợi đơn mode ngoài trời ${vn(TIA.alpha, 1)} dB/km, cặp đầu nối ${vn(TIA.Lc, 2)} dB, mối hàn 0,3 dB: mức tối đa cho phép theo TIA-568.3-D${ban ? ', <b>đầu nối bẩn tăng gấp đôi</b> (giả định)' : ''}. Biên M dành cho lão hoá, sửa chữa thêm mối hàn, nhiệt độ.`;
    // bảng 02
    { const parts = [['sợi αL', kq.soi, '#e8c547'], ['đầu nối', kq.dau, '#5b6170'], ['mối hàn', kq.han, '#8A8F98'], ['biên M', S.M, MAU.warn]], tot = parts.reduce((a, b) => a + b[1], 0); let x = 0, g = '';
      parts.forEach(([n, v, c]) => { const w = (v / Math.max(tot, 0.01)) * 272; if (w > 0.5) g += `<rect x="${x}" y="0" width="${w - 1}" height="16" fill="${c}"/>`; if (w > 40) g += `<text x="${x + 3}" y="28" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">${n} ${vn(v, 1)}</text>`; x += w; });
      lossSvg.innerHTML = g; }
    pBig.textContent = `${vn(kq.prx, 1)} dBm`; pBig.style.color = kq.du >= 0 ? MAU.ok : MAU.bad;
    t02.innerHTML = `${vn(kq.m.ptx, 1)} − (${vn(kq.soi, 1)} + ${vn(kq.dau, 2)} + ${vn(kq.han, 1)} + ${vn(S.M, 1)}) = ${vn(kq.prx, 1)} dBm. ${kq.du >= 0 ? `<b>Đạt</b>: còn ${vn(kq.du, 1)} dB trên độ nhạy sau khi đã trừ biên.` : `<b>Không đạt</b>: thiếu ${vn(-kq.du, 1)} dB so với độ nhạy.`}`;
    // bảng 03
    { const m = kq.m; let g = ''; [['Công suất phát', m.ptx], ['Độ nhạy thu', m.nhay], ['Thu tối đa', m.max]].forEach(([n, v], i) => { g += `<text x="0" y="${14 + i * 19}" font-family="Be Vietnam Pro" font-size="10.5" fill="${C.ink}">${n}</text><text x="272" y="${14 + i * 19}" text-anchor="end" font-family="JetBrains Mono" font-size="10.5" font-weight="700" fill="${C.ink}">${vn(v, 1)} dBm</text>`; }); mSvg.innerHTML = g; }
    t03.innerHTML = `${kq.m.ten}: ngân sách P<sub>tx</sub> − độ nhạy = ${vn(kq.m.ptx - kq.m.nhay, 0)} dB. Số liệu là giả định theo dạng thường gặp; thiết kế thật lấy từ datasheet. ${kq.prx > kq.m.max ? '<b>Thu quá mạnh</b>: tuyến quá ngắn cho module xa, cần bộ suy hao.' : ''}`;
    // bảng 04: bậc thang dạng phẳng
    { const W = 272, Hh = 120, top = Math.max(kq.m.ptx, kq.m.max) + 1, bot = Math.min(kq.prx, kq.m.nhay) - 3, Y = (v) => ((top - v) / (top - bot)) * Hh; let g = `<rect x="0" y="0" width="${W}" height="${Hh}" fill="${C.chart}" stroke="${C.line}"/>`, dd = '';
      for (let i = 0; i <= 200; i++) { const u2 = i / 200; dd += `${i ? 'L' : 'M'}${(u2 * W).toFixed(1)} ${Y(kq.muc(u2)).toFixed(1)}`; }
      g += `<path d="${dd}" fill="none" stroke="#c99a12" stroke-width="2"/><line x1="0" x2="${W}" y1="${Y(kq.m.nhay)}" y2="${Y(kq.m.nhay)}" stroke="${MAU.bad}" stroke-dasharray="4 3"/><text x="${W - 2}" y="${Y(kq.m.nhay) - 3}" text-anchor="end" font-family="JetBrains Mono" font-size="10.5" fill="${MAU.bad}">độ nhạy ${vn(kq.m.nhay, 0)}</text>`;
      g += `<line x1="0" x2="${W}" y1="${Y(kq.m.nhay + S.M)}" y2="${Y(kq.m.nhay + S.M)}" stroke="${MAU.warn}" stroke-dasharray="2 3"/><text x="2" y="${Hh + 14}" font-family="JetBrains Mono" font-size="10.5" fill="#626773">tòa A · ${vn(kq.m.ptx, 0)} dBm</text><text x="${W}" y="${Hh + 14}" text-anchor="end" font-family="JetBrains Mono" font-size="10.5" fill="#626773">tòa B · ${vn(kq.muc(1), 1)} dBm</text>`;
      bSvg.innerHTML = g; }
    t04.innerHTML = 'Công suất giảm đều theo chiều dài sợi và tụt một bậc ở mỗi đầu nối, mỗi mối hàn. Vạch vàng chấm là độ nhạy cộng biên M: tuyến phải kết thúc trên vạch này.';
    // bảng 05
    eBars[0].set(Math.min(1, (Math.log10(kq.ber) + 12) / 11.7), kq.ber.toExponential(0), kq.du >= 0 ? MAU.ok : MAU.bad); eBars[1].set(Math.min(1, kq.ppkt), `${vn(kq.ppkt * 100, kq.ppkt < 0.01 ? 4 : 1)} %`, kq.du >= 0 ? MAU.ok : MAU.bad);
    t05.innerHTML = `Dưới độ nhạy, BER tăng rất nhanh; gói 1 500 byte lỗi với xác suất 1 − (1 − P<sub>b</sub>)<sup>L</sup> (1.16) và phải truyền lại. Đường cong BER ở đây chỉ minh hoạ (10⁻¹² tại độ nhạy, xấu một bậc mỗi 0,5 dB thiếu).`;
    // bảng 06
    lBig.textContent = kq.Lmax > 0 ? `${vn(kq.Lmax, 1)} km` : 'không đạt ở 0 km';
    t06.innerHTML = `L<sub>max</sub> = (P<sub>tx</sub> − độ nhạy − n<sub>c</sub>L<sub>c</sub> − n<sub>s</sub>L<sub>s</sub> − M)/α. Thêm một cặp đầu nối là mất ${vn(TIA.Lc / TIA.alpha, 1)} km tầm với. Câu 4: đơn mode cho tuyến giữa các tòa nhà; đa mode chỉ cho đoạn ngắn trong tòa nhà.`;
    // chế độ
    modeEl.textContent = `${vn(kq.prx, 1)} dBm`; modeEl.style.color = kq.du >= 0 ? C.ink : MAU.bad;
    modeSub.textContent = `${kq.m.ten} · ${vn(S.L, 1)} km · ${S.nc} đầu nối · ${S.ns} mối hàn · ${kq.du >= 0 ? `dư ${vn(kq.du, 1)} dB` : `thiếu ${vn(-kq.du, 1)} dB`}`;
    alert.set(kq.du < 0 ? 'DƯỚI ĐỘ NHẠY THU' : kq.prx > kq.m.max ? 'THU QUÁ MẠNH' : '');
    if (subTx) subTx.textContent = `${vn(kq.m.ptx, 1)} DBM`; if (subRx) subRx.textContent = `${vn(kq.muc(1), 1)} DBM`;
    const W3 = (v) => st.project(v.x, v.y, v.z);
    ui.drawCallouts([{key: 'tx', p: W3(P(XA + 0.6, 2.0, 0.2)), dx: -30, dy: -60}, {key: 'rx', p: W3(P(XB - 0.6, 2.0, 0.2)), dx: 30, dy: -60}, {key: 'bac', p: W3(P(0, Y0 + (kq.m.ptx - SAN) * KY + 0.3, ZB)), dx: 0, dy: -60}], 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình Thiết kế và hiệu năng mạng (TEL1459, PTIT 2026), mục 4.3: (4.4), bảng 4.2; câu 4 chương 4; (1.16). Suy hao tối đa: ANSI/TIA-568.3-D (sợi đơn mode ngoài trời 0,5 dB/km, cặp đầu nối 0,75 dB, mối hàn 0,3 dB). Công suất phát, độ nhạy, mức thu tối đa của module, mức bẩn đầu nối và đường cong BER là giả định của bài.';
function cardOf(part) {
  const kq = S.kq; if (!kq) return null;
  const base = {src: SRC};
  if (part === 'dau' || part === 'module') return {...base, k: 'Đầu nối', t: `${S.nc} cặp, ${vn(TIA.Lc, 2)} dB mỗi cặp`, b: 'Mỗi lần cắm qua patch panel là một cặp đầu nối. Đầu nối bẩn là nguyên nhân hỏng tuyến quang hay gặp nhất: lau trước khi cắm.', rows: [['Tổng', () => `${vn(S.kq.dau, 2)} dB`]]};
  if (part === 'han') return {...base, k: 'Mối hàn', t: `${S.ns} mối, 0,3 dB mỗi mối`, b: 'Cáp được hàn nối ở hố ga khi tuyến dài hơn một cuộn cáp hoặc khi sửa chữa. Sửa một chỗ đứt thường thêm hai mối hàn: biên M dành cho việc đó.', rows: [['Tổng', () => `${vn(S.kq.han, 1)} dB`]]};
  if (part === 'soi' || part === 'xung') return {...base, k: 'Sợi quang', t: `${vn(S.L, 1)} km`, b: 'Suy hao tỉ lệ với chiều dài: αL. Ánh sáng chạy trong sợi mờ dần theo đúng bậc thang phía sau.', rows: [['αL', () => `${vn(S.kq.soi, 1)} dB`]]};
  if (part === 'bac') return {...base, k: 'Bậc thang', t: 'Công suất dọc tuyến', b: 'Đỏ là dưới độ nhạy, vàng đậm là đã lấn vào biên dự phòng.', rows: [['P_rx', () => `${vn(S.kq.prx, 1)} dBm`]]};
  if (part === 'toaA' || part === 'toaB') return {...base, k: part === 'toaA' ? 'Tòa A' : 'Tòa B', t: 'Đầu tuyến', b: 'Module quang cắm vào switch; tuyến đi qua patch panel trong tủ rồi xuống rãnh.', rows: []};
  return null;
}

// ---------------- góc nhìn
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 0, ty: 1.4, tz: 0, az: -40 + 3 * Math.sin(t * 0.05), el: 26, d: 34, sx: 0, sy: -10} : {tx: 0.4, ty: 1.4, tz: 0, az: -6 + 3 * Math.sin(t * 0.05), el: 22, d: 32, sx: 0, sy: -10}),
  bac: () => ({tx: 0, ty: 2.2, tz: ZB, az: 0, el: 6, d: 18, sx: 0, sy: -30}),
};

// ---------------- bài giảng
const CAP = [
  {k: 'Mục 4.3 · bài toán', t: 'Một sợi quang giữa hai tòa nhà', b: 'Ánh sáng rời module ở tòa A, qua patch panel, xuống rãnh, qua các hố ga có mối hàn, lên patch panel tòa B rồi vào bộ thu. Mỗi chỗ đi qua lấy đi một ít công suất. Bài toán: tới nơi còn đủ để bộ thu đọc đúng không?', e: 'P_rx = P_tx − (αL + n_c·L_c + n_s·L_s + M)   (4.4)'},
  {k: 'Bậc thang', t: 'Mỗi bậc là một chỗ suy hao', b: 'Các cột phía sau là công suất dọc tuyến, tính bằng dBm. Sợi làm công suất giảm đều; mỗi đầu nối, mỗi mối hàn làm tụt một bậc. Vạch đỏ là độ nhạy của bộ thu; vạch vàng chấm là độ nhạy cộng biên dự phòng.', e: 'dB cộng được: nhân suy hao thành cộng'},
  {k: 'Chiều dài', t: 'Kéo tuyến tới 20 km', b: 'Với module 10 km, tuyến 20 km mất thêm 6 dB ở sợi và tụt xuống dưới vạch. Bộ thu vẫn nhận được ánh sáng, nhưng lỗi bit tăng nhanh. Đổi sang module 40 km: công suất phát cao hơn, độ nhạy tốt hơn, tuyến đạt lại.', e: 'L_max = (P_tx − S − n_cL_c − n_sL_s − M) / α',
    ask: {q: 'Sợi 0,5 dB/km. Thêm một cặp đầu nối 0,75 dB thì tầm với tối đa giảm bao nhiêu?', o: ['0,75 km', '1,5 km', '0,375 km'], a: 1, e: '0,75 dB chia 0,5 dB/km bằng 1,5 km.'}},
  {k: 'Đầu nối bẩn', t: 'Một hạt bụi bằng một km sợi', b: 'Bấm Đầu nối bẩn: mỗi cặp mất 1,5 dB thay vì 0,75. Bốn cặp là thêm 3 dB, đủ đẩy một tuyến đang đạt xuống dưới độ nhạy. Đó là lý do kỹ thuật viên lau và soi đầu nối trước khi cắm.', e: 'n_c·L_c tăng gấp đôi'},
  {k: 'Biên M', t: 'Đừng dùng hết ngân sách', b: 'Biên dự phòng dành cho lão hoá, nhiệt độ, và những mối hàn sẽ phải thêm khi sửa cáp đứt. Hạ M về 0: tuyến "đạt" trên giấy nhưng lần sửa đầu tiên sẽ làm nó hỏng.', e: 'M ≈ 3 dB là thông lệ (giả định của bài)'},
  {k: 'Câu 4 · chương 4', t: 'Chọn môi trường truyền', b: 'Giữa các tòa nhà, khoảng cách vài km: cáp quang đơn mode. Trong một tòa nhà, đoạn ngắn: đa mode hoặc cáp đồng có PoE. Ngân sách công suất là phép kiểm cuối cùng trước khi chốt module và tuyến.', e: 'bảng 4.2'},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'});
at(10, {cap: 1}); at(10.5, {click: 'v_bac'});
at(20, {cap: 2}); at(21, {slide: 'L', to: LOGC(20, 0.5, 60), dur: 2}); at(27, {click: 'xa'});
at(33, {cap: 3}); at(33.5, {click: 'ngan'}); at(34, {slide: 'L', to: LOGC(8, 0.5, 60), dur: 1}); at(36, {click: 'ban'}); at(42, {click: 'sach'});
at(44, {cap: 4}); at(45, {slide: 'M', to: 0, dur: 1.5}); at(50, {slide: 'M', to: 0.5, dur: 1});
at(53, {cap: 5}); at(53.5, {click: 'v_hero'});
ev.sort((a, b) => a.at - b.at);

sim.reset(); tinh(); S.dirty = false;
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 62}, firstView: 'hero', extra: [{key: 'ban', label: 'Đầu nối bẩn'}],
  keys: {1: 'v_hero', 2: 'v_bac'}});
