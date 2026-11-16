// Thiết kế và hiệu năng mạng · bài 3.2 · Chia địa chỉ VLSM.
// Theo giáo trình TEL1459 (Hoàng Trọng Minh, PTIT 2026), mục 3.4: dung lượng subnet IPv4 (3.4), số host dùng được (3.5), IPv6
// (3.6), tiền tố theo tăng trưởng 2^(32−p) − 2 ≥ αH (3.7), hệ số sử dụng η = H / H_IPv4(p) (3.8); câu 3 cuối chương 3 (ba tòa nhà,
// mỗi tòa 6 phòng ban, tối đa 80 thiết bị). Không gian 10.10.0.0/20 (RFC 1918). Cấp phát lớn trước, căn biên (CIDR, RFC 4632),
// mỗi tòa một khối liền để gộp tuyến.
import * as THREE from 'three';
import {createStage, MAT} from '../kit/stage.js';
import * as SH from '../kit/shapes.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {tag, picker, vn} from '../kit/soi.js';
import * as F from '../kit/mang/cong-thuc.js';
import {boCanh, P, MAU, NHO} from '../kit/mang/canh.js';

const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 16, grid: 1, fade: 60, fov: 26, near: 0.2, far: 260});
const ui = createUI(app);
const root = new THREE.Group(); st.scene.add(root);
const B = boCanh(root), {mk, M} = B;

// ---------------- địa chỉ
const BASE = (10 << 24) | (10 << 16), BASE_P = 20, SPACE = 2 ** (32 - BASE_P);
const ipStr = (x) => [x >>> 24, (x >>> 16) & 255, (x >>> 8) & 255, x & 255].join('.');
const MAU_TOA = ['#3B6EA8', '#E3562A', '#2F8F5B'];
const CO_KHAC = [80, 40, 20, 60, 12, 30, 50, 24]; // cỡ phòng ban khi "khác cỡ" (giả định của bài)

// ---------------- cảnh: thước địa chỉ /20 nằm sau, ba tòa nhà phía trước, mỗi tầng một phòng ban
const XL = -8, XR = 8, LEN = XR - XL, ZR = -3.2, YR = 4.0;
const nen = mk(SH.rbox(LEN + 0.2, 0.22, 0.7, 0.04), MAT.shell('#e4e1d9')); nen.position.set(0, YR, ZR); tag('thuoc', nen);
for (let i = 0; i <= 16; i++) { const v = mk(SH.rbox(0.02, 0.36, 0.72, 0.005), MAT.plastic(i % 4 ? '#cfccc4' : '#9a978f')); v.position.set(XL + (i / 16) * LEN, YR, ZR); }
const chan = [XL + 0.3, XR - 0.3].map((x) => { const m = mk(SH.rbox(0.12, YR, 0.12, 0.02), M.panel); m.position.set(x, YR / 2, ZR); return m; });
void chan;
const NMAX = 3 * 8;
const khoi = Array.from({length: NMAX}, () => { const m = mk(SH.rbox(1, 0.34, 0.6, 0.03), new THREE.MeshStandardMaterial({color: '#888', roughness: 0.5})); m.visible = false; return m; });
tag('khoi', ...khoi);
const ngoac = [0, 1, 2].map((i) => { const m = mk(SH.rbox(1, 0.06, 0.66, 0.02), new THREE.MeshStandardMaterial({color: MAU_TOA[i], roughness: 0.5})); m.visible = false; tag('gop', m); return m; });
const toa = [0, 1, 2].map((i) => { const g = new THREE.Group(); g.position.set(-5 + i * 5, 0, 1.6); root.add(g); tag('toa' + i, g);
  mk(SH.rbox(2.6, 0.12, 2.0, 0.04), M.floor, g).position.y = 0.06; return {g, san: []}; });
const tang = Array.from({length: NMAX}, (_, k) => { const i = Math.floor(k / 8), m = mk(SH.rbox(2.2, 0.36, 1.6, 0.05), new THREE.MeshStandardMaterial({color: MAU_TOA[i], roughness: 0.55, transparent: true, opacity: 0.85}), toa[i].g); m.visible = false; tag('toa' + i, m); return m; });
// dây dẫn từ tầng lên khối địa chỉ của nó
const day = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({color: '#9a978f', transparent: true, opacity: 0.55})); root.add(day);

// ---------------- mô hình
const S = {H: 80, alpha: 1.25, nPB: 6, khac: false, flsm: false, gop: true, t: 0, tKq: 0, kq: null, dirty: true};
const pow2 = (n) => 2 ** Math.ceil(Math.log2(Math.max(1, n)));
function tinh() {
  const toaKq = [], all = [];
  let off = 0, tran = false;
  // khối mỗi tòa: tổng cỡ (đã làm tròn lên lũy thừa 2) của các subnet, rồi làm tròn tiếp; cấp lớn trước nên luôn căn biên
  const reqs = [0, 1, 2].map((i) => Array.from({length: S.nPB}, (_, j) => {
    const H = S.khac ? CO_KHAC[(j + 2 * i) % CO_KHAC.length] : S.H;
    return {toa: i, pb: j, H};
  }));
  const Hmax = Math.max(...reqs.flat().map((r) => r.H));
  for (let i = 0; i < 3; i++) {
    const subs = reqs[i].map((r) => { const t = F.tienToIPv4(S.flsm ? Hmax : r.H, S.alpha); return {...r, p: t.p, size: 2 ** (32 - t.p), host: t.host, eta: r.H / t.host}; });
    const sum = subs.reduce((a, s) => a + s.size, 0), blk = pow2(sum), pBlk = 32 - Math.log2(blk);
    off = Math.ceil(off / blk) * blk; // căn biên khối tòa
    let o = 0; [...subs].sort((a, b) => b.size - a.size || a.pb - b.pb).forEach((s) => { s.net = BASE + off + o; s.off = off + o; o += s.size; });
    if (off + blk > SPACE) tran = true;
    toaKq.push({i, subs, blk, pBlk, off, net: BASE + off}); all.push(...subs); off += blk;
  }
  const dung = all.reduce((a, s) => a + s.H, 0), cap = all.reduce((a, s) => a + s.host, 0);
  S.kq = {toa: toaKq, all, dung, cap, eta: dung / cap, tong: off, tran, routes: S.gop ? 3 : all.length};
  S.tKq = performance.now() / 1000; // hiện dần theo đồng hồ thật, máy chậm cũng thấy đủ khối sau vài giây
}

// ---------------- bảng
ui.header({code: '3.2', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · MỤC 3.4 · ĐÁNH ĐỊA CHỈ', title: 'Chia địa chỉ VLSM', sub: 'TIỀN TỐ THEO NHU CẦU · CĂN BIÊN · GỘP TUYẾN', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['10.10.0.0/20', 'KHÔNG GIAN'], ['3.4–3.8', 'PHƯƠNG TRÌNH'], ['CÂU 3', 'CHƯƠNG 3']]});
ui.panel(28, 112, 300, 196, 'YÊU CẦU', '01');
const slH = ui.slider('H', 42, 148, 272, 'THIẾT BỊ / PB', {lw: 96, vw: 70});
const slA = ui.slider('alpha', 42, 176, 272, 'TĂNG TRƯỞNG α', {lw: 96, vw: 70});
const slN = ui.slider('nPB', 42, 204, 272, 'PHÒNG BAN / TÒA', {lw: 96, vw: 70});
const t01 = ui.text(42, 232, '', 'sm', NHO);
ui.panel(28, 320, 300, 250, 'TÒA 1 · TIỀN TỐ TỪNG PHÒNG BAN · 3.7', '02');
const tbSvg = ui.svg(42, 354, 272, 180);
const t02 = ui.text(42, 538, '', 'sm', NHO);
ui.panel(28, 582, 300, 184, 'HỆ SỐ SỬ DỤNG · 3.8', '03');
const eBars = ['VLSM', 'CÙNG CỠ'].map((n, i) => ui.bar(42, 618 + i * 20, 272, n, {lw: 76, vw: 80}));
const t03 = ui.text(42, 664, '', 'sm', NHO);
ui.panel(1272, 112, 300, 270, 'KẾ HOẠCH ĐỊA CHỈ', '04');
const kSvg = ui.svg(1286, 146, 272, 150);
const t04 = ui.text(1286, 300, '', 'sm', NHO);
ui.panel(1272, 394, 300, 196, 'GỘP TUYẾN · CIDR', '05');
ui.text(1286, 430, 'SỐ TUYẾN Ở LÕI'); const rBig = ui.text(1286, 444, '', 'mo', 'position:absolute;font-size:28px;font-weight:700');
const t05 = ui.text(1286, 486, '', 'sm', NHO);
ui.panel(1272, 602, 300, 164, 'CÒN IPV6 THÌ SAO · 3.6', '06');
const t06 = ui.text(1286, 636, '', 'sm', NHO);
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_thuoc', 'THƯỚC ĐỊA CHỈ'], ['cau3', 'CÂU 3 · CHƯƠNG 3'], ['khac', 'PHÒNG BAN KHÁC CỠ'], ['flsm', 'MỌI SUBNET CÙNG CỠ'], ['gop', 'GỘP TUYẾN']], 360, 120, 860);
ui.text(362, 664, 'ĐÃ DÙNG');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts([{key: 'thuoc', title: 'KHÔNG GIAN 10.10.0.0/20', sub: '4 096 ĐỊA CHỈ'}, {key: 't0', title: 'TÒA 1', sub: ''}, {key: 't1', title: 'TÒA 2', sub: ''}, {key: 't2', title: 'TÒA 3', sub: ''}]);
const subT = [1, 2, 3].map((k) => ui.root.querySelectorAll('.call')[k]?.querySelector('span'));

// ---------------- mô phỏng
const X = (off) => XL + (off / SPACE) * LEN;
const sim = {
  S,
  reset() { Object.assign(S, {H: 80, alpha: 1.25, nPB: 6, khac: false, flsm: false, gop: true}); S.dirty = true; },
  busy: () => false,
  isOn: (k) => (k === 'khac' ? S.khac : k === 'flsm' ? S.flsm : k === 'gop' ? S.gop : false),
  act(k) {
    if (k === 'cau3') Object.assign(S, {H: 80, alpha: 1.25, nPB: 6, khac: false, flsm: false});
    if (k === 'khac') S.khac = !S.khac;
    if (k === 'flsm') S.flsm = !S.flsm;
    if (k === 'gop') S.gop = !S.gop;
    S.dirty = true;
  },
  slide(k, t) {
    if (k === 'H') S.H = Math.round(4 + t * 246);
    if (k === 'alpha') S.alpha = Math.round((1 + t) * 100) / 100;
    if (k === 'nPB') S.nPB = Math.round(2 + t * 6);
    S.dirty = true;
  },
  keyDown() { return false; },
  step(dt) { if (S.dirty) { tinh(); S.dirty = false; } S.t += dt; },
  shadowAt() { return new THREE.Vector3(0, 10, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq; if (!kq) return;
    // khối địa chỉ hiện dần theo thứ tự cấp phát (0,12 s mỗi khối) sau mỗi lần đổi
    const u = (performance.now() / 1000 - S.tKq) / 0.12, seg = [];
    let k = 0;
    kq.toa.forEach((T, i) => {
      ngoac[i].visible = S.gop && u > T.subs.length * (i + 1); ngoac[i].scale.x = Math.max(0.01, (T.blk / SPACE) * LEN - 0.04); ngoac[i].position.set(X(T.off) + (T.blk / SPACE) * LEN / 2, YR + 0.33, ZR);
      T.subs.forEach((s) => {
        const m = khoi[k], show = k < u, w = (s.size / SPACE) * LEN;
        m.visible = show && s.off + s.size <= SPACE; m.scale.set(Math.max(0.01, w - 0.03), 1, 1); m.position.set(X(s.off) + w / 2, YR + 0.12 + (show ? 0 : 0.6), ZR); m.material.color.set(MAU_TOA[i]).offsetHSL(0, 0, (s.pb % 3) * 0.06);
        const tg = tang[i * 8 + s.pb]; tg.visible = true; tg.position.set(0, 0.32 + s.pb * 0.42, 0); tg.material.color.set(MAU_TOA[i]).offsetHSL(0, 0, (s.pb % 3) * 0.06);
        if (show) { const a = toa[i].g.position.clone().add(P(1.1, 0.32 + s.pb * 0.42, -0.8)); seg.push(a.x, a.y, a.z, X(s.off) + w / 2, YR - 0.05, ZR + 0.3); }
        k++;
      });
      for (let j = S.nPB; j < 8; j++) tang[i * 8 + j].visible = false;
    });
    for (; k < NMAX; k++) khoi[k].visible = false;
    day.geometry.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3)); day.geometry.computeBoundingSphere();
    // bảng 01
    slH.set((S.H - 4) / 246, S.khac ? 'khác cỡ' : vn(S.H, 0)); slA.set(S.alpha - 1, vn(S.alpha, 2)); slN.set((S.nPB - 2) / 6, vn(S.nPB, 0));
    t01.innerHTML = `Ba tòa × ${S.nPB} phòng ban. ${S.khac ? 'Mỗi phòng ban một cỡ (12–80 thiết bị, giả định).' : `Mỗi phòng ban tối đa ${S.H} thiết bị.`} Dự phòng tăng trưởng α = ${vn(S.alpha, 2)}: subnet phải chứa được α·H host.`;
    // bảng 02: tòa 1
    { const T = kq.toa[0]; let g = `<text x="0" y="10" font-family="Be Vietnam Pro" font-size="9.5" fill="#626773">PB</text><text x="36" y="10" font-family="Be Vietnam Pro" font-size="9.5" fill="#626773">H → α·H</text><text x="122" y="10" font-family="Be Vietnam Pro" font-size="9.5" fill="#626773">subnet</text><text x="272" y="10" text-anchor="end" font-family="Be Vietnam Pro" font-size="9.5" fill="#626773">η</text>`;
      [...T.subs].sort((a, b) => a.pb - b.pb).forEach((s, j) => { const y = 26 + j * 19; g += `<text x="0" y="${y}" font-family="JetBrains Mono" font-size="10" fill="${C.ink}">${s.pb + 1}</text><text x="36" y="${y}" font-family="JetBrains Mono" font-size="10" fill="${C.ink}">${s.H} → ${vn(s.H * S.alpha, 0)}</text><text x="122" y="${y}" font-family="JetBrains Mono" font-size="10" font-weight="700" fill="${MAU_TOA[0]}">${ipStr(s.net)}/${s.p}</text><text x="272" y="${y}" text-anchor="end" font-family="JetBrains Mono" font-size="10" fill="${s.eta < 0.4 ? MAU.bad : C.ink}">${vn(s.eta, 2)}</text>`; });
      tbSvg.innerHTML = g; }
    const s0 = kq.toa[0].subs[0];
    t02.innerHTML = `2<sup>32−p</sup> − 2 ≥ α·H: ${S.khac ? 'mỗi phòng ban một tiền tố riêng.' : `${vn(S.H * S.alpha, 0)} host cần /${s0.p} với ${s0.host} địa chỉ dùng được (3.5).`} ${!S.khac && S.H === 80 && S.alpha <= 1.57 ? '<b>Câu 3: /25, 126 host.</b>' : ''}`;
    // bảng 03: so VLSM với cùng cỡ
    const vl = (() => { const all = kq.all; return {d: all.reduce((a, s) => a + s.H, 0), c: all.reduce((a, s) => a + F.tienToIPv4(s.H, S.alpha).host, 0)}; })();
    const Hmax = Math.max(...kq.all.map((s) => s.H)), fl = kq.all.reduce((a) => a + F.tienToIPv4(Hmax, S.alpha).host, 0);
    eBars[0].set(vl.d / vl.c, vn(vl.d / vl.c, 2), MAU.ok); eBars[1].set(vl.d / fl, vn(vl.d / fl, 2), '#8A8F98');
    t03.innerHTML = `η = H / H<sub>IPv4</sub>(p). ${S.khac ? `Cùng một cỡ cho mọi phòng ban thì phòng 12 thiết bị cũng ôm subnet của phòng 80: dùng ${vn(vl.c, 0)} so với ${vn(fl, 0)} địa chỉ.` : 'Các phòng ban bằng nhau thì VLSM và cùng cỡ cho cùng kết quả; bật Phòng ban khác cỡ để thấy khác biệt.'} η quá cao là hết chỗ lớn thêm.`;
    // bảng 04: khối mỗi tòa
    { let g = ''; kq.toa.forEach((T, i) => { const y = 12 + i * 46; g += `<rect x="0" y="${y - 10}" width="10" height="10" fill="${MAU_TOA[i]}"/><text x="16" y="${y}" font-family="Be Vietnam Pro" font-size="11" font-weight="600" fill="${C.ink}">Tòa ${i + 1}</text><text x="272" y="${y}" text-anchor="end" font-family="JetBrains Mono" font-size="11" font-weight="700" fill="${MAU_TOA[i]}">${ipStr(T.net)}/${T.pBlk}</text><text x="16" y="${y + 16}" font-family="JetBrains Mono" font-size="9.5" fill="#626773">${T.subs.length} subnet · ${vn(T.blk, 0)} địa chỉ · ${ipStr(T.net)} – ${ipStr(T.net + T.blk - 1)}</text>`; });
      g += `<text x="0" y="146" font-family="JetBrains Mono" font-size="9.5" fill="${kq.tran ? MAU.bad : '#626773'}">${kq.tran ? 'VƯỢT /20: cần không gian lớn hơn' : `còn trống ${vn(SPACE - kq.tong, 0)} / ${vn(SPACE, 0)} địa chỉ`}</text>`; kSvg.innerHTML = g; }
    t04.innerHTML = 'Mỗi tòa nhận một khối liền, căn biên đúng cỡ của nó; trong khối, subnet lớn cấp trước để mọi subnet đều căn biên. Còn chỗ cho liên kết điểm–điểm và vùng quản lý.';
    // bảng 05
    rBig.textContent = `${kq.routes}`; rBig.style.color = S.gop ? MAU.ok : MAU.bad;
    t05.innerHTML = S.gop ? `Lõi chỉ cần ba tuyến, mỗi tòa một khối /${kq.toa[0].pBlk}. Một subnet trong tòa đổi trạng thái thì tuyến gộp không đổi: bảng tuyến ổn định, hội tụ nhanh hơn (RFC 4632).` : `Không gộp: lõi giữ ${kq.all.length} tuyến, và mỗi subnet chập chờn là một lần cập nhật lan khắp mạng.`;
    // bảng 06
    t06.innerHTML = `IPv6 cấp mỗi subnet một /64: 2<sup>64</sup> ≈ 1,8·10<sup>19</sup> địa chỉ (3.6), nên η không còn là bài toán. Bài toán còn lại vẫn là <b>cấu trúc</b>: khối theo tòa, theo vùng chức năng, để gộp tuyến và viết chính sách gọn.`;
    // chế độ
    modeEl.textContent = `${vn((kq.tong / SPACE) * 100, 0)} % không gian`;
    modeSub.textContent = `${kq.all.length} subnet · ${vn(kq.dung, 0)} thiết bị · ${vn(kq.cap, 0)} địa chỉ dùng được · η chung ${vn(kq.eta, 2)}`;
    alert.set(kq.tran ? 'VƯỢT KHÔNG GIAN /20' : '');
    kq.toa.forEach((T, i) => { if (subT[i]) subT[i].textContent = `${ipStr(T.net)}/${T.pBlk}`; });
    const W3 = (v) => st.project(v.x, v.y, v.z);
    ui.drawCallouts([{key: 'thuoc', p: W3(P(XL + 0.6, YR + 0.4, ZR)), dx: -30, dy: -60}, ...[0, 1, 2].map((i) => ({key: 't' + i, p: W3(toa[i].g.position.clone().add(P(0, 0.4 + S.nPB * 0.42, 0))), dx: i === 0 ? -40 : i === 2 ? 40 : 0, dy: -50}))], 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình Thiết kế và hiệu năng mạng (TEL1459, PTIT 2026), mục 3.4: (3.4)–(3.8); câu 3 chương 3. Địa chỉ riêng 10.0.0.0/8: RFC 1918. CIDR và gộp tuyến: RFC 4632. Cỡ các phòng ban khi khác cỡ và hệ số α mặc định 1,25 là giả định của bài.';
function cardOf(part) {
  const kq = S.kq; if (!kq) return null;
  const base = {src: SRC};
  if (part === 'thuoc' || part === 'khoi' || part === 'gop') return {...base, k: 'Thước địa chỉ', t: '10.10.0.0/20, 4 096 địa chỉ', b: 'Mỗi khối màu là một subnet, rộng đúng theo số địa chỉ của nó. Thanh mảnh phía trên là khối gộp của cả tòa: lõi chỉ cần biết thanh này.', rows: [['Đã dùng', () => `${vn(S.kq.tong, 0)} / ${vn(SPACE, 0)}`], ['Tuyến ở lõi', () => `${S.kq.routes}`]]};
  if (part.startsWith('toa')) { const i = +part[3]; return {...base, k: `Tòa ${i + 1}`, t: `${ipStr(kq.toa[i].net)}/${kq.toa[i].pBlk}`, b: 'Mỗi tầng là một phòng ban, một subnet; dây mảnh nối tầng với khối địa chỉ của nó trên thước.', rows: kq.toa[i].subs.slice(0, 6).map((s) => [`PB ${s.pb + 1} · ${s.H} thiết bị`, () => `/${s.p}`])}; }
  return null;
}

// ---------------- góc nhìn
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 0, ty: 1.8, tz: -0.6, az: -30 + 3 * Math.sin(t * 0.05), el: 26, d: 36, sx: 0, sy: -10} : {tx: 0.6, ty: 2.2, tz: -0.6, az: -6 + 3 * Math.sin(t * 0.05), el: 20, d: 31, sx: 0, sy: -10}),
  thuoc: () => ({tx: -3, ty: 3.8, tz: -3.2, az: 0, el: 12, d: 14, sx: 0, sy: -30}),
};

// ---------------- bài giảng
const CAP = [
  {k: 'Mục 3.4 · bài toán', t: 'Ba tòa nhà, 18 phòng ban, một khối 4 096 địa chỉ', b: 'Mỗi tầng là một phòng ban cần một subnet riêng. Thanh phía sau là không gian 10.10.0.0/20. Cấp lần lượt theo yêu cầu phát sinh thì bảng tuyến rối và sớm phải đánh địa chỉ lại; bài này cấp theo cấu trúc.', e: 'N_IPv4(p) = 2^(32−p),  H_IPv4(p) = 2^(32−p) − 2'},
  {k: 'Câu 3 · chương 3', t: '80 thiết bị, dự phòng 25 %', b: '80 × 1,25 = 100 host. /26 chỉ có 62 địa chỉ dùng được, /25 có 126: chọn /25. Kéo α lên 1,6: 128 host không còn vừa /25 nữa, cả kế hoạch nhảy sang /24, tốn gấp đôi và không còn vừa khối /20.', e: '2^(32−p) − 2 ≥ α·H   (3.7)',
    ask: {q: 'Phòng ban 50 thiết bị, α = 1,2. Tiền tố nhỏ nhất đủ dùng là?', o: ['/27', '/26', '/25'], a: 1, e: '50 × 1,2 = 60 ≤ 62 = 2⁶ − 2, nên /26 đủ. /27 chỉ có 30.'}},
  {k: 'VLSM · 3.8', t: 'Phòng nhỏ không cần subnet lớn', b: 'Bật Phòng ban khác cỡ: mỗi phòng một tiền tố theo nhu cầu. Rồi bật Mọi subnet cùng cỡ: phòng 12 thiết bị cũng phải ôm subnet của phòng 80, hệ số sử dụng tụt mạnh. VLSM là chia theo đúng nhu cầu từng vùng.', e: 'η = H / H_IPv4(p)'},
  {k: 'Căn biên', t: 'Lớn trước, nhỏ sau', b: 'Subnet /25 phải bắt đầu ở bội số của 128, /26 ở bội số của 64. Cấp subnet lớn trước trong mỗi khối thì mọi subnet tự nhiên rơi đúng biên, không chừa lỗ hổng.', e: 'địa chỉ mạng chia hết cho cỡ subnet'},
  {k: 'Gộp tuyến · CIDR', t: '18 tuyến thành 3', b: 'Mỗi tòa nằm trọn trong một khối liền. Router lõi chỉ cần biết ba khối, không cần biết 18 subnet bên trong. Tắt Gộp tuyến để thấy bảng tuyến phình ra.', e: 'một tiền tố ngắn thay cho nhiều tiền tố dài',
    ask: {q: 'Một phòng ban trong tòa 2 mất kết nối. Khi đã gộp tuyến, router lõi có phải cập nhật bảng tuyến không?', o: ['Có, phải xoá subnet đó', 'Không, tuyến gộp của tòa 2 vẫn như cũ', 'Phải xoá cả khối tòa 2'], a: 1, e: 'Lõi chỉ giữ tuyến gộp của tòa 2. Thay đổi bên trong khối được giấu đi, bảng tuyến lõi ổn định hơn.'}},
  {k: 'IPv6 · 3.6', t: 'Hết thiếu địa chỉ, vẫn cần kế hoạch', b: 'Với IPv6 mỗi subnet là một /64, nên tiết kiệm địa chỉ không còn là mục tiêu. Nhưng khối theo tòa, theo vùng chức năng vẫn quyết định việc gộp tuyến và viết chính sách.', e: 'N_IPv6(p) = 2^(128−p)'},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'});
at(10, {cap: 1}); at(10.5, {click: 'cau3'}); at(14, {slide: 'alpha', to: 0.6, dur: 1.5}); at(19, {slide: 'alpha', to: 0.25, dur: 1});
at(22, {cap: 2}); at(23, {click: 'khac'}); at(28, {click: 'flsm'}); at(32, {click: 'flsm'});
at(34, {cap: 3}); at(34.5, {click: 'v_thuoc'});
at(44, {cap: 4}); at(44.5, {click: 'v_hero'}); at(47, {click: 'gop'}); at(51, {click: 'gop'});
at(54, {cap: 5});
ev.sort((a, b) => a.at - b.at);

sim.reset(); tinh(); S.dirty = false;
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 64}, firstView: 'hero', extra: [{key: 'khac', label: 'Phòng ban khác cỡ'}],
  keys: {1: 'v_hero', 2: 'v_thuoc'}});
