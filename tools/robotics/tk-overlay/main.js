// Thiết kế và hiệu năng mạng · bài 3.4 · Underlay và overlay.
// Theo giáo trình TEL1459 (Hoàng Trọng Minh, PTIT 2026), mục 3.4.3: underlay là mạng nền nối các nút hạ tầng, overlay là lớp dịch vụ
// dựng trên đó; tenant S = {VRF, VNI, RT, Policy, SLA} (3.20); ma trận chính sách (3.12); tốc độ hữu dụng (2.8); oversubscription
// (4.8); câu 8, câu 10 cuối chương 3. VXLAN: RFC 7348 (50 byte đóng gói, VNI 24 bit); EVPN: RFC 7432, RFC 8365.
// Fabric leaf-spine: mỗi leaf nối mọi spine; mỗi leaf là một VTEP; ba tenant có máy ảnh rải trên các leaf.
import * as THREE from 'three';
import {MAT, createStage} from '../kit/stage.js';
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

// ---------------- tenant
const TEN = [{ten: 'Học vụ', vrf: 'HOCVU', vni: 10010, rt: '65000:10', mau: MAU.thoai, sla: 'trễ ≤ 2 ms'}, {ten: 'Nghiên cứu', vrf: 'NCKH', vni: 10020, rt: '65000:20', mau: MAU.ok, sla: '≥ 5 Gbit/s'}, {ten: 'Khách', vrf: 'KHACH', vni: 10030, rt: '65000:30', mau: MAU.video, sla: 'chỉ ra Internet'}];
// chính sách giữa tenant (3.12): 1 = được phép; Học vụ ↔ Nghiên cứu qua tường lửa, Khách cô lập
const POL = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];

// ---------------- cảnh: 4 leaf phía trước, 2–4 spine phía sau, máy chủ dưới leaf, mặt phẳng overlay kính phía trên
const NL = 4, LEAF = Array.from({length: NL}, (_, i) => P(-5.4 + i * 3.6, 0, 2.2));
const SPOS = (n) => Array.from({length: n}, (_, j) => P(n === 1 ? 0 : -3.6 + (j * 7.2) / (n - 1), 0, -2.4));
const leaf = LEAF.map((p, i) => B.tu(p.x, p.z, 1.4, 'leaf' + i, root, 3));
const spineObj = [0, 1, 2, 3].map((j) => B.tu(0, 0, 2.2, 'spine', root, 4));
// máy chủ dưới mỗi leaf: 6 máy ảo, màu theo tenant
const VM = []; LEAF.forEach((p, i) => { for (let k = 0; k < 6; k++) { const t = (i + k) % 3 === 0 ? 0 : (i * 2 + k) % 3; const m = mk(SH.rbox(0.36, 0.22, 0.36, 0.04), MAT.plastic(TEN[t].mau)); m.position.set(p.x - 0.9 + (k % 3) * 0.9, 0.12, p.z + 1.2 + Math.floor(k / 3) * 0.55); tag('vm' + t, m); VM.push({m, leaf: i, t}); } });
const matUL = MAT.plastic('#9aa0a6'), matHong = MAT.plastic('#d27a70');
let ulCap = [];
function datUnderlay() {
  for (const c of ulCap) { root.remove(c.mesh); c.mesh.geometry.dispose(); }
  const sp = SPOS(S.nSpine); spineObj.forEach((g, j) => { g.visible = j < S.nSpine; if (j < S.nSpine) g.position.copy(sp[j]); });
  ulCap = [];
  LEAF.forEach((lp, i) => sp.forEach((spp, j) => { const A = lp.clone().setY(1.3), Bp = spp.clone().setY(2.0), mid = A.clone().lerp(Bp, 0.5); mid.y += 0.2; const c = B.cap([A, mid, Bp], matUL, 0.035, 'ul'); c.i = i; c.j = j; ulCap.push(c); }));
}
// mặt phẳng overlay
const YO = 4.6;
const kinh = mk(SH.rbox(15, 0.04, 6.4, 0.02), new THREE.MeshPhysicalMaterial({color: '#d9e3ec', roughness: 0.2, transparent: true, opacity: 0.55, depthWrite: false})); kinh.position.set(0, YO, 0.4); kinh.castShadow = false; tag('overlay', kinh);
// VTEP: chấm trên mặt overlay ngay trên mỗi leaf, nối xuống leaf bằng vạch mảnh
const VTEP = LEAF.map((p, i) => { const v = mk(new THREE.CylinderGeometry(0.22, 0.22, 0.12, 20), MAT.dark()); v.position.set(p.x, YO + 0.08, p.z); tag('vtep', v); const d = mk(new THREE.CylinderGeometry(0.015, 0.015, YO - 1.4, 6), MAT.plastic('#b9bec6')); d.position.set(p.x, (YO + 1.4) / 2, p.z); return v; });
// đường hầm của từng tenant giữa các VTEP có máy của tenant đó
const ham = TEN.map((t, ti) => { const out = []; for (let a = 0; a < NL; a++) for (let b = a + 1; b < NL; b++) { const A = VTEP[a].position.clone(), Bp = VTEP[b].position.clone(), mid = A.clone().lerp(Bp, 0.5); mid.y += 0.5 + ti * 0.35 + (b - a) * 0.15; mid.z -= 0.4 * (ti - 1); const c = B.cap([A, mid, Bp], new THREE.MeshStandardMaterial({color: t.mau, roughness: 0.5, transparent: true, opacity: 0.8}), 0.035, 'ham' + ti); out.push({a, b, ...c}); } return out; });
// gói minh hoạ: gói tenant (màu) đi trên hầm, cùng lúc gói đã đóng gói (vỏ xám, lõi màu) đi dưới underlay leaf → spine → leaf
const inner = mk(SH.rbox(0.26, 0.16, 0.2, 0.03), MAT.plastic(TEN[0].mau)); tag('goi', inner);
const outer = new THREE.Group(); root.add(outer); tag('goi', outer);
mk(SH.rbox(0.42, 0.26, 0.32, 0.05), new THREE.MeshPhysicalMaterial({color: '#cfd3d8', roughness: 0.3, transparent: true, opacity: 0.55, depthWrite: false}), outer);
const loi = mk(SH.rbox(0.22, 0.13, 0.17, 0.03), MAT.plastic(TEN[0].mau), outer);

// ---------------- mô hình
// Leaf 48 cổng 25 Gbit/s xuống máy chủ, mỗi spine một đường 100 Gbit/s lên (giả định). Đóng gói VXLAN 50 byte trên IPv4 (RFC 7348).
const S = {nSpine: 2, mtu: 1550, hong: -1, sel: 0, t: 0, kq: null, dirty: true, flow: {ti: 0, a: 0, b: 2, j: 0, t0: 0}};
const VX = {eth: 14, ip: 20, udp: 8, vxlan: 8}, OH = VX.eth + VX.ip + VX.udp + VX.vxlan;
function tinh() {
  const sp = S.nSpine - (S.hong >= 0 ? 1 : 0), down = 48 * 25e9, up = sp * 100e9;
  const om = F.oversub([down], [Math.max(up, 1)]);
  const can = 1500 + OH, vua = S.mtu >= can;
  S.kq = {om, up, sp, can, vua, eta: 1500 / (1500 + OH), vlan: 4094, vni: 2 ** 24};
}

// ---------------- bảng
ui.header({code: '3.4', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · MỤC 3.4.3 · ẢO HOÁ MẠNG', title: 'Underlay và overlay', sub: 'LEAF-SPINE · VXLAN/EVPN · TENANT', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['3', 'TENANT'], ['3.20', 'PHƯƠNG TRÌNH'], ['50 BYTE', 'ĐÓNG GÓI VXLAN']]});
ui.panel(28, 112, 300, 200, 'UNDERLAY · LEAF-SPINE', '01');
const slS = ui.slider('nSpine', 42, 148, 272, 'SỐ SPINE', {lw: 92, vw: 70});
ui.text(42, 176, 'OVERSUBSCRIPTION Ω MỖI LEAF'); const oBig = ui.text(42, 190, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t01 = ui.text(42, 226, '', 'sm', NHO);
ui.panel(28, 324, 300, 236, 'TENANT · 3.20', '02');
const tSvg = ui.svg(42, 358, 272, 120);
const t02 = ui.text(42, 486, '', 'sm', NHO);
ui.panel(28, 572, 300, 194, 'ĐÓNG GÓI VXLAN', '03');
const slM = ui.slider('mtu', 42, 608, 272, 'MTU UNDERLAY', {lw: 92, vw: 70});
const hSvg = ui.svg(42, 636, 272, 48);
const t03 = ui.text(42, 690, '', 'sm', NHO);
ui.panel(1272, 112, 300, 196, 'KHÔNG GIAN ĐỊNH DANH', '04');
const idBars = ['VLAN 12 BIT', 'VNI 24 BIT'].map((n, i) => ui.bar(1286, 148 + i * 22, 272, n, {lw: 86, vw: 96}));
const t04 = ui.text(1286, 200, '', 'sm', NHO);
ui.panel(1272, 320, 300, 230, 'MIỀN LỖI · HỎNG MỘT SPINE', '05');
const capBars = TEN.map((t, i) => ui.bar(1286, 356 + i * 22, 272, t.ten.toUpperCase(), {lw: 74, vw: 132}));
const t05 = ui.text(1286, 428, '', 'sm', NHO);
ui.panel(1272, 562, 300, 204, 'KIỂM CÔ LẬP · 3.12', '06');
const pSvg = ui.svg(1286, 596, 272, 100);
const t06 = ui.text(1286, 704, '', 'sm', NHO);
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_under', 'UNDERLAY'], ['v_over', 'OVERLAY'], ['g0', 'GÓI HỌC VỤ'], ['g1', 'GÓI NGHIÊN CỨU'], ['g2', 'GÓI KHÁCH'], ['hong', 'HỎNG SPINE 1'], ['sua', 'SỬA SPINE'], ['mtu1500', 'MTU 1 500']], 360, 120, 860);
ui.text(362, 664, 'GÓI ĐANG XEM');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts([{key: 'overlay', title: 'OVERLAY', sub: 'ĐƯỜNG HẦM VXLAN THEO TENANT'}, {key: 'spine', title: 'SPINE', sub: 'UNDERLAY'}, {key: 'leaf', title: 'LEAF = VTEP', sub: 'ĐÓNG VÀ MỞ GÓI'}, {key: 'vm', title: 'MÁY ẢO', sub: 'BA TENANT'}]);

// ---------------- mô phỏng
const T_DI = 4.0;
function moiGoi() { const f = S.flow, t = f.ti; const ls = [...new Set(VM.filter((v) => v.t === t).map((v) => v.leaf))]; const a = ls[Math.floor(Math.random() * ls.length)]; let b = ls[Math.floor(Math.random() * ls.length)]; if (b === a) b = ls[(ls.indexOf(a) + 1) % ls.length];
  const live = Array.from({length: S.nSpine}, (_, j) => j).filter((j) => j !== S.hong); Object.assign(f, {a: Math.min(a, b), b: Math.max(a, b), j: live[Math.floor(Math.random() * live.length)], t0: S.t}); }
const sim = {
  S,
  reset() { Object.assign(S, {nSpine: 2, mtu: 1550, hong: -1, sel: 0}); S.flow.ti = 0; datUnderlay(); S.dirty = true; moiGoi(); },
  busy: () => false,
  isOn: (k) => (k[0] === 'g' && k.length === 2 ? S.flow.ti === +k[1] : k === 'hong' ? S.hong >= 0 : false),
  act(k) {
    if (k[0] === 'g' && k.length === 2) { S.flow.ti = +k[1]; inner.material.color.set(TEN[+k[1]].mau); loi.material.color.set(TEN[+k[1]].mau); moiGoi(); }
    if (k === 'hong') S.hong = 0;
    if (k === 'sua') S.hong = -1;
    if (k === 'mtu1500') S.mtu = 1500;
    S.dirty = true;
  },
  slide(k, t) {
    if (k === 'nSpine') { const n = Math.round(1 + t * 3); if (n !== S.nSpine) { S.nSpine = n; if (S.hong >= n) S.hong = -1; datUnderlay(); } }
    if (k === 'mtu') S.mtu = Math.round(1500 + t * 7500);
    S.dirty = true;
  },
  keyDown() { return false; },
  step(dt) { if (S.dirty) { tinh(); S.dirty = false; } S.t += dt; if (S.t - S.flow.t0 > T_DI + 0.8) moiGoi(); },
  shadowAt() { return new THREE.Vector3(0, 10, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq; if (!kq) return;
    const f = S.flow, u = Math.min(1, (S.t - f.t0) / T_DI), sp = SPOS(S.nSpine);
    // underlay: spine hỏng tối đi, cáp của nó đỏ
    ulCap.forEach((c) => { c.mesh.material = c.j === S.hong ? matHong : matUL; });
    // hầm: hầm của tenant đang xem sáng, các hầm khác mờ
    ham.forEach((hs, ti) => hs.forEach((h) => { h.mesh.material.opacity = ti === f.ti ? (h.a === f.a && h.b === f.b ? 1 : 0.5) : 0.22; }));
    // gói trong: chạy trên hầm a → b. gói ngoài: leaf a → spine j → leaf b; MTU nhỏ thì gói ngoài kẹt ở leaf a
    const h = ham[f.ti].find((x) => x.a === f.a && x.b === f.b);
    inner.visible = !!h; if (h) { inner.position.copy(h.curve.getPoint(kq.vua ? u : Math.min(u, 0.12))); inner.position.y += 0.12; }
    const A = LEAF[f.a].clone().setY(1.3), S2 = sp[f.j].clone().setY(2.0), Bp = LEAF[f.b].clone().setY(1.3);
    const uu = kq.vua ? u : Math.min(u, 0.15), pos = uu < 0.5 ? A.clone().lerp(S2, uu * 2) : S2.clone().lerp(Bp, (uu - 0.5) * 2);
    outer.position.copy(pos); outer.position.y += 0.25; outer.children[0].material.color.set(kq.vua ? '#cfd3d8' : MAU.bad);
    // bảng 01
    slS.set((S.nSpine - 1) / 3, `${S.nSpine}${S.hong >= 0 ? ' (1 hỏng)' : ''}`);
    oBig.textContent = `Ω = ${vn(kq.om, 1)}`; oBig.style.color = kq.om > 3 ? MAU.bad : C.ink;
    t01.innerHTML = `48 cổng 25 Gbit/s xuống máy chủ chia cho ${kq.sp} × 100 Gbit/s lên spine (4.8, giả định). Underlay chỉ lo nối mọi leaf với nhau bằng IP và ECMP qua các spine, không biết gì về tenant.`;
    // bảng 02: bảng tenant
    { let g = ['VRF', 'VNI', 'RT', 'SLA'].map((c, i) => `<text x="${[0, 70, 128, 196][i]}" y="10" font-family="Be Vietnam Pro" font-size="10.5" fill="#626773">${c}</text>`).join('');
      TEN.forEach((t, i) => { const y = 30 + i * 30; g += `<rect x="0" y="${y - 12}" width="4" height="16" fill="${t.mau}"/><text x="8" y="${y}" font-family="JetBrains Mono" font-size="10.5" font-weight="700" fill="${C.ink}">${t.vrf}</text><text x="70" y="${y}" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">${t.vni}</text><text x="128" y="${y}" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">${t.rt}</text><text x="196" y="${y}" font-family="Be Vietnam Pro" font-size="10.5" fill="${C.ink}">${t.sla}</text>`; });
      tSvg.innerHTML = g; }
    t02.innerHTML = 'Một tenant không chỉ là một VLAN: là bộ VRF, VNI, route target, chính sách và SLA phải khớp nhau trên mọi leaf (3.20). EVPN dùng BGP để phát các bộ này giữa các VTEP (RFC 7432, 8365).';
    // bảng 03: tiêu đề đóng gói
    slM.set((S.mtu - 1500) / 7500, `${vn(S.mtu, 0)} byte`);
    { const parts = [['Eth', VX.eth, '#6f747d', 38], ['IP', VX.ip, '#626773', 30], ['UDP', VX.udp, '#6f747d', 38], ['VXLAN', VX.vxlan, MAU.warn, 50], ['khung gốc', '1 500 + 14', TEN[f.ti].mau, 116]], tot = parts.reduce((a, b) => a + b[1], 0); let x = 0, g = '';
      // hàng trên: tên từng phần đầu khung; hàng dưới: số byte của phần đó (chữ 10,5 không còn chui vừa một ô 34 đơn vị cả tên lẫn số)
      parts.forEach(([n, v, c, w]) => { g += `<rect x="${x}" y="0" width="${w - 2}" height="20" fill="${c}"/><text x="${x + 4}" y="14" font-family="JetBrains Mono" font-size="10.5" fill="#fff">${n}</text><text x="${x + 4}" y="32" font-family="JetBrains Mono" font-size="10.5" fill="#626773">${v}</text>`; x += w; }); void tot;
      g += `<text x="0" y="46" font-family="JetBrains Mono" font-size="10.5" fill="${kq.vua ? '#626773' : MAU.bad}">gói IP ngoài ${kq.can} byte ${kq.vua ? '≤' : '>'} MTU ${S.mtu}</text>`; hSvg.innerHTML = g; }
    t03.innerHTML = `Mỗi khung thêm ${OH} byte: η<sub>tunnel</sub> = 1 500 / ${1500 + OH} = ${vn(kq.eta, 3)} (2.8). ${kq.vua ? 'MTU underlay đủ lớn.' : '<b>MTU underlay 1 500 không chứa nổi gói đã đóng gói</b>: gói đầy cỡ bị bỏ ở leaf, trong khi ping nhỏ vẫn qua. Lỗi kinh điển khi dựng overlay.'}`;
    // bảng 04
    idBars[0].set(Math.log2(4094) / 24, '4 094', '#8A8F98'); idBars[1].set(1, '16 777 216', MAU.prop);
    t04.innerHTML = 'VLAN có 12 bit, trừ hai giá trị dành riêng còn 4 094. VNI của VXLAN có 24 bit: hơn 16 triệu phân đoạn (RFC 7348), đủ cho trung tâm dữ liệu nhiều tenant. Thanh vẽ theo số bit.';
    // bảng 05: hỏng một spine thì mọi tenant mất cùng một phần dung lượng
    const full = S.nSpine * 100e9, con = kq.sp * 100e9;
    TEN.forEach((t, i) => capBars[i].set(con / Math.max(full, 1), `${F.fmtBps(con / 3, 0)} / tenant`, S.hong >= 0 ? MAU.warn : t.mau));
    t05.innerHTML = S.hong >= 0 ? `Một spine hỏng: dung lượng lên của mọi leaf còn ${kq.sp}/${S.nSpine}, Ω lên ${vn(kq.om, 1)}. <b>Cả ba tenant cùng chịu</b>, vì chúng chung một underlay. Lỗi underlay là lỗi của mọi overlay trên nó.` : 'Bấm Hỏng spine 1. Thêm spine thì mỗi spine hỏng chỉ mất 1/N dung lượng: leaf-spine mở rộng ngang và chia nhỏ miền lỗi.';
    // bảng 06: ma trận cô lập
    { let g = ''; TEN.forEach((t, j) => { g += `<text x="${96 + j * 58 + 26}" y="10" text-anchor="middle" font-family="Be Vietnam Pro" font-size="10.5" fill="#626773">${t.ten}</text>`; });
      TEN.forEach((t, i) => { const y = 18 + i * 26; g += `<text x="0" y="${y + 15}" font-family="Be Vietnam Pro" font-size="10.5" font-weight="600" fill="${t.mau}">${t.ten}</text>`; TEN.forEach((_, j) => { const ok = POL[i][j]; g += `<rect x="${96 + j * 58}" y="${y}" width="52" height="22" fill="${ok ? '#e5f4e4' : '#fbebeb'}" stroke="${C.line}"/><text x="${96 + j * 58 + 26}" y="${y + 15}" text-anchor="middle" font-family="JetBrains Mono" font-size="11" font-weight="700" fill="${ok ? MAU.ok : MAU.bad}">${ok ? '✓' : '✗'}</text>`; }); });
      pSvg.innerHTML = g; }
    t06.innerHTML = 'A<sub>ij</sub> = 1 nếu vùng i được nói với vùng j. Câu 10: mỗi ô là một ca kiểm thử, gồm cả ca phải bị chặn. Khách chỉ ra Internet, không chạm tới hai tenant còn lại.';
    // chế độ
    modeEl.textContent = TEN[f.ti].ten; modeEl.style.color = TEN[f.ti].mau;
    modeSub.textContent = kq.vua ? `leaf ${f.a + 1} → spine ${f.j + 1} → leaf ${f.b + 1} ở underlay · VNI ${TEN[f.ti].vni} ở overlay` : `gói ${kq.can} byte vượt MTU ${S.mtu} của underlay · bị bỏ ở leaf ${f.a + 1}`;
    alert.set(!kq.vua ? 'MTU UNDERLAY QUÁ NHỎ' : S.hong >= 0 ? 'SPINE HỎNG · MỌI TENANT GIẢM DUNG LƯỢNG' : '');
    const W3 = (v) => st.project(v.x, v.y, v.z);
    ui.drawCallouts([{key: 'overlay', p: W3(P(-7, YO + 0.1, -2.4)), dx: -30, dy: -50}, {key: 'spine', p: W3(sp[sp.length - 1].clone().setY(2.3)), dx: 40, dy: -40}, {key: 'leaf', p: W3(LEAF[NL - 1].clone().setY(1.5)), dx: 50, dy: 30}, {key: 'vm', p: W3(LEAF[0].clone().add(P(0, 0.3, 1.6))), dx: -40, dy: 50}], 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình Thiết kế và hiệu năng mạng (TEL1459, PTIT 2026), mục 3.4.3: (3.20), (3.12), (2.8), (4.8); câu 8, câu 10 chương 3. VXLAN: RFC 7348 (đóng gói 50 byte trên IPv4, VNI 24 bit). EVPN: RFC 7432, RFC 8365. Cỡ cổng leaf, số máy ảo, tên tenant, VNI, RT và chính sách là ví dụ của bài.';
function cardOf(part) {
  const kq = S.kq; if (!kq) return null;
  const base = {src: SRC};
  if (part.startsWith('leaf') || part === 'vtep') return {...base, k: 'Leaf = VTEP', t: 'Đóng gói và mở gói', b: 'Khung của máy ảo được bọc thêm Ethernet, IP, UDP và VXLAN rồi gửi qua underlay như một gói IP thường. Leaf đích bóc vỏ và trả khung về đúng VNI.', rows: [['Thêm mỗi khung', () => `${OH} byte`], ['MTU cần', () => `≥ ${S.kq.can} byte`]]};
  if (part === 'spine' || part === 'ul') return {...base, k: 'Underlay', t: 'Leaf-spine', b: 'Mỗi leaf nối mọi spine: hai leaf bất kỳ cách nhau đúng hai chặng, ECMP qua mọi spine.', rows: [['Ω mỗi leaf', () => vn(S.kq.om, 1)]]};
  if (part.startsWith('ham') || part === 'overlay' || part === 'goi') return {...base, k: 'Overlay', t: 'Đường hầm theo tenant', b: 'Mỗi tenant thấy một mạng riêng nối các máy của mình, độc lập với topo vật lý bên dưới.', rows: TEN.map((t) => [t.ten, () => `VNI ${t.vni}`])};
  if (part.startsWith('vm')) { const t = TEN[+part[2]]; return {...base, k: 'Máy ảo', t: t.ten, b: 'Máy ảo của một tenant rải trên nhiều leaf nhưng vẫn cùng một phân đoạn lớp 2 hoặc một VRF.', rows: [['VRF', () => t.vrf], ['SLA', () => t.sla]]}; }
  return null;
}

// ---------------- góc nhìn
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 0, ty: 2.4, tz: 0, az: -36 + 3 * Math.sin(t * 0.05), el: 26, d: 34, sx: 0, sy: -10} : {tx: 0.4, ty: 2.4, tz: 0.4, az: -10 + 3 * Math.sin(t * 0.05), el: 20, d: 30, sx: 0, sy: -10}),
  under: () => ({tx: 0, ty: 1.2, tz: 0, az: -8, el: 26, d: 20, sx: 0, sy: -30}),
  over: () => ({tx: 0, ty: YO, tz: 0.4, az: -4, el: 42, d: 22, sx: 0, sy: -30}),
};

// ---------------- bài giảng
const CAP = [
  {k: 'Mục 3.4.3 · bài toán', t: 'Ba tenant trên một mạng vật lý', b: 'Bên dưới là underlay: bốn leaf, mỗi leaf nối mọi spine. Phía trên, trên mặt kính, là overlay: mỗi tenant một màu, các đường hầm nối những leaf có máy ảo của nó. Học vụ, nghiên cứu và khách dùng chung dây cáp nhưng mỗi bên thấy một mạng riêng.', e: 'underlay nối hạ tầng · overlay tạo dịch vụ'},
  {k: 'Đóng gói VXLAN', t: 'Một gói, hai tầng', b: 'Gói màu đi trên hầm của tenant. Cùng lúc, ở dưới, gói đó được bọc vỏ xám và đi như một gói IP thường: leaf nguồn, một spine, leaf đích. Spine chỉ thấy vỏ, không biết bên trong là tenant nào.', e: 'thêm 14 + 20 + 8 + 8 = 50 byte mỗi khung'},
  {k: 'Tenant · 3.20', t: 'Không chỉ là một VLAN', b: 'Mỗi tenant là một bộ: VRF để tách bảng tuyến, VNI để tách phân đoạn, route target để EVPN biết phát tuyến cho ai, chính sách giữa các tenant và cam kết SLA. Thiếu một phần là tenant hoặc bị cô lập sai, hoặc rò sang tenant khác.', e: 'S_tenant = {VRF, VNI, RT, Policy, SLA}',
    ask: {q: 'Vì sao VXLAN dùng VNI 24 bit thay vì VLAN 12 bit?', o: ['Để gói nhỏ hơn', 'VLAN chỉ có 4 094 giá trị, không đủ cho nhiều tenant', 'Để spine đọc được tenant'], a: 1, e: '12 bit cho 4 094 VLAN dùng được; 24 bit cho hơn 16 triệu phân đoạn.'}},
  {k: 'MTU', t: 'Ping qua, ứng dụng hỏng', b: 'Bấm MTU 1 500: underlay vẫn để MTU mặc định. Gói đầy cỡ cộng 50 byte vỏ thành 1 550 byte, không lọt. Gói nhỏ như ping vẫn qua nên mạng trông như bình thường, chỉ ứng dụng truyền dữ liệu lớn là treo. Underlay phải có MTU lớn hơn overlay ít nhất 50 byte.', e: 'MTU_underlay ≥ MTU_overlay + 50'},
  {k: 'Miền lỗi', t: 'Một spine hỏng, ba tenant cùng chịu', b: 'Hỏng spine 1: mọi leaf mất một nửa đường lên, cả ba tenant cùng giảm dung lượng. Tenant tách nhau về chính sách nhưng chung số phận về hạ tầng. Thêm spine thì mỗi lần hỏng mất ít hơn.', e: 'lỗi underlay ảnh hưởng mọi overlay'},
  {k: 'Câu 10 · ma trận chính sách', t: 'Kiểm cả cái phải bị chặn', b: 'Ma trận ba tenant cho chín ca kiểm thử kết nối. Ca khách tới học vụ phải thất bại; nếu nó thành công là thiết kế đã sai. Kiểm thử cô lập là kiểm cả chiều được phép lẫn chiều bị cấm.', e: 'A_ij = 1 nếu vùng i được nói với vùng j   (3.12)'},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'});
at(10, {cap: 1}); at(10.5, {click: 'g0'}); at(16, {click: 'g1'});
at(21, {cap: 2}); at(21.5, {click: 'v_over'}); at(24, {click: 'g2'});
at(32, {cap: 3}); at(32.5, {click: 'v_under'}); at(33, {click: 'mtu1500'}); at(40, {slide: 'mtu', to: 0.2, dur: 1});
at(43, {cap: 4}); at(43.5, {click: 'v_hero'}); at(44, {click: 'hong'}); at(50, {slide: 'nSpine', to: 1, dur: 1}); at(53, {click: 'sua'});
at(55, {cap: 5});
ev.sort((a, b) => a.at - b.at);

sim.reset(); tinh(); S.dirty = false;
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 66}, firstView: 'hero', extra: [{key: 'mtu1500', label: 'MTU 1 500'}],
  keys: {1: 'v_hero', 2: 'v_under', 3: 'v_over'}});
