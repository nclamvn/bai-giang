// Thiết kế và hiệu năng mạng · bài 5.2 · Ba hàng đợi QoS.
// Theo giáo trình TEL1459 (Hoàng Trọng Minh, PTIT 2026), mục 5.2.3–5.2.4: trễ tuần tự hoá D_ser = L/R (5.14), ràng buộc băng thông
// lớp Σ b_c ≤ C, b_c ≥ b_c^min (5.15), xác suất bỏ gói theo hàng đợi (5.16), trường ToS lịch sử sang DS và ECN; câu 2 và câu 4
// cuối chương 5. Ba lớp thoại EF, video AF41, nền BE (RFC 3246, RFC 2597, RFC 4594) trên cổng WAN 100 Mbit/s.
// Hàng đợi thật: kit/mang/mo-phong.js chayNhieuLop ở tốc độ thật; cảnh chạy cùng luật xếp lịch, chậm lại cho mắt theo.
import * as THREE from 'three';
import {createStage, MAT} from '../kit/stage.js';
import * as SH from '../kit/shapes.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {tag, picker, vn} from '../kit/soi.js';
import * as F from '../kit/mang/cong-thuc.js';
import {chayNhieuLop, rng, expo} from '../kit/mang/mo-phong.js';
import {boCanh, P, MAU, NHO} from '../kit/mang/canh.js';

const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 16, grid: 1, fade: 60, fov: 26, near: 0.2, far: 260});
const ui = createUI(app);
const root = new THREE.Group(); st.scene.add(root);
const B = boCanh(root), {mk, M} = B;

// ---------------- ba lớp
const LOP = [{ten: 'thoại', dscp: 46, ma: 'EF', mau: MAU.thoai, L: 200}, {ten: 'video', dscp: 34, ma: 'AF41', mau: MAU.video, L: 1200}, {ten: 'nền', dscp: 0, ma: 'BE', mau: MAU.nen, L: 1500}];
const CW = 100e6;

// ---------------- cảnh: ba ống hàng đợi xếp chồng trước cổng WAN, cần chọn gói (bộ lập lịch), mô hình tiêu đề IP với 8 bit DS + ECN
const rt = B.tu(0.4, 0, 2.2, 'rt');
const XA = -3.6, XB = -0.2, YQ = [2.9, 2.2, 1.5], ZQ = 0.2;
const ongQ = YQ.map((y, c) => { const m = mk(new THREE.CylinderGeometry(0.26, 0.26, XB - XA, 20, 1, true), new THREE.MeshPhysicalMaterial({color: '#dfe9f1', roughness: 0.1, transparent: true, opacity: 0.35, depthWrite: false})); m.rotation.z = Math.PI / 2; m.position.set((XA + XB) / 2, y, ZQ); m.castShadow = false; tag('q' + c, m);
  const vien = mk(new THREE.TorusGeometry(0.26, 0.03, 8, 24), MAT.plastic(LOP[c].mau)); vien.rotation.y = Math.PI / 2; vien.position.set(XB + 0.05, y, ZQ); tag('q' + c, vien); return m; });
const ongFifo = mk(new THREE.CylinderGeometry(0.3, 0.3, XB - XA, 20, 1, true), new THREE.MeshPhysicalMaterial({color: '#dfe9f1', roughness: 0.1, transparent: true, opacity: 0.35, depthWrite: false})); ongFifo.rotation.z = Math.PI / 2; ongFifo.position.set((XA + XB) / 2, 2.2, ZQ); ongFifo.castShadow = false; tag('fifo', ongFifo);
const can = new THREE.Group(); can.position.set(XB + 0.35, 2.2, ZQ); root.add(can); tag('lich', can);
mk(new THREE.CylinderGeometry(0.12, 0.12, 0.3, 16), M.rack, can).rotation.x = Math.PI / 2;
const tay = mk(SH.rbox(0.08, 0.7, 0.08, 0.02), MAT.anod('#c98a12'), can); tay.position.y = 0.35;
const nguon = LOP.map((l, c) => { const g = new THREE.Group(); g.position.set(-6.6, 0, -1.8 + c * 1.8); root.add(g); tag('nguon', g); B.tu(0, 0, 1.4, null, g, 3); return g; });
const vao = LOP.map((l, c) => B.cap([P(-6.2, 1.0, -1.8 + c * 1.8 + 0.3), P(-5.4, 0.2, -1.4 + c * 1.6), P(-4.8, 0.5, (-1.2 + c * 1.2) * 0.6), P(XA - 0.3, YQ[c], ZQ)], MAT.plastic(l.mau), 0.04, 'vao'));
const WAN = B.cap([P(0.8, 1.7, 0.4), P(2.2, 1.2, 1.0), P(5.0, 1.8, 1.2), P(7.6, 1.3, 0.4)], M.wan, 0.07, 'wan');
B.tu(8.0, 0, 1.8, 'dich');
// tiêu đề IP: 8 ô bit của byte thứ hai (DS 6 bit + ECN 2 bit), đặt nổi phía sau
const HDR = P(4.6, 3.2, -2.2);
const hdr = new THREE.Group(); hdr.position.copy(HDR); root.add(hdr); tag('hdr', hdr);
mk(SH.rbox(4.4, 1.3, 0.12, 0.04), MAT.shell('#fbfaf7'), hdr);
const bit = Array.from({length: 8}, (_, i) => { const m = mk(SH.rbox(0.42, 0.42, 0.1, 0.03), new THREE.MeshStandardMaterial({color: '#ddd', roughness: 0.5}), hdr); m.position.set(-1.75 + i * 0.5, 0.05, 0.1); return m; });
for (let i = 0; i < 8; i++) { const v = mk(SH.rbox(i === 5 ? 0.04 : 0.015, 0.6, 0.02, 0.005), MAT.plastic(i === 5 ? '#626773' : '#cfccc4'), hdr); v.position.set(-1.5 + i * 0.5, 0.05, 0.12); v.visible = i === 5; }
const GOI = Array.from({length: 120}, () => { const m = mk(SH.rbox(0.22, 0.13, 0.16, 0.03), new THREE.MeshStandardMaterial({color: '#888', roughness: 0.5})); m.visible = false; return {m, st: 'tu-do'}; });
tag('goi', ...GOI.map((g) => g.m));

// ---------------- mô hình
// lap: 'fifo' một hàng chung · 'uutien' ưu tiên tuyệt đối theo lớp · 'gioihan' ưu tiên tuyệt đối, thoại và video bị policer cắt ở mức
// trần (gói vượt bị bỏ ngay ở biên), nền không bị cắt. Bộ đệm 200 gói mỗi hàng (giả định).
const S = {tai: [10, 40, 45], lap: 'uutien', tran: [15, 45], sel: 0, t: 0, kq: null, dirty: true, v: {q: [[], [], []], fifo: [], busy: null, busyTo: 0, next: [0, 0, 0], r: rng(3), ra: []}};
function tinh() {
  const cat = S.lap === 'gioihan' ? [Math.min(S.tai[0], S.tran[0]), Math.min(S.tai[1], S.tran[1]), S.tai[2]] : S.tai;
  const lop = LOP.map((l, c) => ({ten: l.ten, lam: (cat[c] * 1e6) / F.byte(l.L), Lbit: F.byte(l.L)}));
  const r = chayNhieuLop({C: CW, lop, lap: S.lap === 'fifo' ? 'fifo' : 'uutien', buffer: 200, T: 4, warm: 0.6, seed: 5});
  const policer = S.tai.map((x, c) => (x > cat[c] ? 1 - cat[c] / x : 0));
  S.kq = {r, cat, policer, rho: S.tai.reduce((a, b) => a + b, 0) / 100, dser: LOP.map((l) => F.dTruyen(F.byte(l.L), CW))};
}
// cảnh chậm: μ gói/s ở 1×, cùng luật xếp lịch
const MUV = 3.2, T_VAO = 0.9, T_RA = 1.6;
function vStep(dt) {
  const V = S.v, t = (S.t += dt), cat = S.kq.cat;
  for (let c = 0; c < 3; c++) { const lamV = ((MUV * S.tai[c]) / 100) * (1500 / LOP[c].L); // λ_c·thời gian phát = tải lớp: tổng mức sử dụng của cảnh đúng bằng ρ
    while (V.next[c] <= t) { const g = GOI.find((x) => x.st === 'tu-do'); const bo = S.lap === 'gioihan' && V.r() < (S.tai[c] > cat[c] ? 1 - cat[c] / S.tai[c] : 0);
      if (g) { Object.assign(g, {st: bo ? 'cat' : 'vao', t0: V.next[c], c, svc: expo(V.r, LOP[c].L / 1500 / MUV)}); g.m.visible = true; g.m.material.color.set(bo ? MAU.bad : LOP[c].mau); g.m.scale.setScalar(0.6 + 0.4 * (LOP[c].L / 1500)); }
      V.next[c] += expo(V.r, 1 / Math.max(0.05, lamV)); } }
  for (const g of GOI) {
    if (g.st === 'vao' && t - g.t0 >= T_VAO) { const q = S.lap === 'fifo' ? V.fifo : V.q[g.c]; if (q.length >= 14) { g.st = 'cat'; g.t0 = t; g.m.material.color.set(MAU.bad); } else { g.st = 'q'; q.push(g); } }
    else if (g.st === 'ra' && t - g.t0 >= T_RA) { g.st = 'tu-do'; g.m.visible = false; }
    else if (g.st === 'cat' && t - g.t0 >= 0.8) { g.st = 'tu-do'; g.m.visible = false; }
  }
  if (V.busy && V.busyTo <= t) { V.busy.st = 'ra'; V.busy.t0 = V.busyTo; V.busy = null; }
  if (!V.busy) { let q = null; if (S.lap === 'fifo') q = V.fifo.length ? V.fifo : null; else for (let c = 0; c < 3; c++) if (V.q[c].length) { q = V.q[c]; break; }
    if (q) { V.busy = q.shift(); V.busy.st = 'phat'; V.busyTo = t + V.busy.svc; V.lastC = V.busy.c; } }
}

// ---------------- bảng
ui.header({code: '5.2', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · MỤC 5.2.3–5.2.4 · QOS', title: 'Ba hàng đợi QoS', sub: 'PHÂN LỚP · ĐÁNH DẤU DSCP · XẾP LỊCH · GIỚI HẠN', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['EF · AF41 · BE', 'BA LỚP'], ['5.14–5.16', 'PHƯƠNG TRÌNH'], ['100 MBIT/S', 'CỔNG WAN']]});
ui.panel(28, 112, 300, 200, 'TẢI MỖI LỚP · 5.15', '01');
const slT = LOP.map((l, c) => ui.slider('t' + c, 42, 148 + c * 28, 272, `${l.ten.toUpperCase()} · ${l.ma}`, {lw: 96, vw: 74}));
const t01 = ui.text(42, 236, '', 'sm', NHO);
ui.panel(28, 324, 300, 236, 'TRỄ HÀNG ĐỢI TỪNG LỚP', '02');
const wRows = LOP.map((l, c) => ui.bar(42, 360 + c * 22, 272, l.ten.toUpperCase(), {lw: 60, vw: 84}));
const t02 = ui.text(42, 430, '', 'sm', NHO);
ui.panel(28, 572, 300, 194, 'MẤT GÓI VÀ THÔNG LƯỢNG · 5.16', '03');
const mRows = LOP.map((l, c) => ui.bar(42, 608 + c * 22, 272, l.ten.toUpperCase(), {lw: 46, vw: 150}));
const t03 = ui.text(42, 678, '', 'sm', NHO);
ui.panel(1272, 112, 300, 226, 'TRƯỜNG DS VÀ ECN', '04');
const hSvg = ui.svg(1286, 146, 272, 70);
const t04 = ui.text(1286, 224, '', 'sm', NHO);
ui.panel(1272, 350, 300, 196, 'TRỄ TUẦN TỰ HOÁ · 5.14', '05');
const dRows = LOP.map((l, c) => ui.bar(1286, 386 + c * 22, 272, `${l.L} BYTE`, {lw: 76, vw: 80}));
const t05 = ui.text(1286, 456, '', 'sm', NHO);
ui.panel(1272, 558, 300, 208, 'GIỚI HẠN LỚP ƯU TIÊN', '06');
const slC = [0, 1].map((c) => ui.slider('c' + c, 1286, 594 + c * 28, 272, `TRẦN ${LOP[c].ten.toUpperCase()}`, {lw: 96, vw: 74}));
const t06 = ui.text(1286, 652, '', 'sm', NHO);
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_q', 'HÀNG ĐỢI'], ['fifo', 'MỘT HÀNG CHUNG'], ['uutien', 'ƯU TIÊN TUYỆT ĐỐI'], ['gioihan', 'ƯU TIÊN CÓ GIỚI HẠN'], ['tham', 'VIDEO TĂNG VỌT'], ['s0', 'XEM EF'], ['s1', 'XEM AF41'], ['s2', 'XEM BE']], 360, 120, 860);
ui.text(362, 664, 'ĐANG PHÁT');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts([{key: 'q', title: 'BA HÀNG ĐỢI', sub: 'EF · AF41 · BE'}, {key: 'lich', title: 'BỘ LẬP LỊCH', sub: ''}, {key: 'hdr', title: 'BYTE THỨ HAI CỦA TIÊU ĐỀ IP', sub: ''}, {key: 'wan', title: 'WAN', sub: '100 MBIT/S'}]);
const subL = ui.root.querySelectorAll('.call')[1]?.querySelector('span'), subH = ui.root.querySelectorAll('.call')[2]?.querySelector('span');

// ---------------- mô phỏng
const sim = {
  S,
  reset() { Object.assign(S, {tai: [10, 40, 45], lap: 'uutien', tran: [15, 45], sel: 0}); tinh(); S.dirty = false; for (let i = 0; i < 200; i++) vStep(0.1); }, // chạy trước 20 s: mở bài đã có hàng
  busy: () => false,
  isOn: (k) => (k === 'fifo' || k === 'uutien' || k === 'gioihan' ? S.lap === k : k[0] === 's' && k.length === 2 ? S.sel === +k[1] : false),
  act(k) {
    if (k === 'fifo' || k === 'uutien' || k === 'gioihan') { S.lap = k; S.v.q = [[], [], []]; S.v.fifo = []; for (const g of GOI) if (g.st === 'q') { g.st = 'tu-do'; g.m.visible = false; } S.dirty = true; }
    if (k === 'tham') { S.tai[1] = 80; S.dirty = true; }
    if (k[0] === 's' && k.length === 2) S.sel = +k[1];
  },
  slide(k, t) {
    if (k[0] === 't') S.tai[+k[1]] = Math.round(t * 100);
    if (k[0] === 'c') S.tran[+k[1]] = Math.round(t * 100);
    S.dirty = true;
  },
  keyDown() { return false; },
  step(dt) { if (S.dirty) { tinh(); S.dirty = false; } vStep(Math.min(dt, 0.5)); },
  shadowAt() { return new THREE.Vector3(0, 10, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq, V = S.v, t = S.t; if (!kq) return;
    const fifo = S.lap === 'fifo';
    ongQ.forEach((m) => { m.visible = !fifo; }); ongFifo.visible = fifo;
    for (const g of GOI) {
      const m = g.m; if (!m.visible) continue;
      if (g.st === 'vao' || g.st === 'cat' && t - g.t0 < 0.8 && !g.q) { const u = Math.min(1, (t - g.t0) / T_VAO); m.position.copy(vao[g.c].curve.getPoint(g.st === 'cat' ? Math.min(0.35, u) : u)); m.position.y += 0.1 - (g.st === 'cat' ? u * 0.6 : 0); }
      else if (g.st === 'q') { const q = fifo ? V.fifo : V.q[g.c], i = q.indexOf(g), y = fifo ? 2.2 : YQ[g.c]; m.position.lerp(P(XB - 0.2 - i * 0.24, y, ZQ), 0.25); }
      else if (g.st === 'phat') m.position.lerp(P(XB + 0.35, 2.2, ZQ + 0.3), 0.3);
      else if (g.st === 'ra') { m.position.copy(WAN.curve.getPoint(Math.min(1, (t - g.t0) / T_RA))); m.position.y += 0.12; }
    }
    // cần lập lịch chỉ vào hàng vừa được chọn
    can.rotation.z = Math.PI / 2 + (fifo || V.lastC === undefined ? 0 : (V.lastC - 1) * 0.75);
    // tiêu đề IP: 6 bit DSCP của lớp đang xem, 2 bit ECN = 00
    const ds = LOP[S.sel].dscp;
    bit.forEach((m, i) => { const on = i < 6 ? (ds >> (5 - i)) & 1 : 0; m.material.color.set(i < 6 ? (on ? LOP[S.sel].mau : '#e9e6de') : '#d7dde2'); });
    // bảng 01
    LOP.forEach((l, c) => slT[c].set(S.tai[c] / 100, `${S.tai[c]} Mbit/s`));
    const tong = S.tai.reduce((a, b) => a + b, 0);
    t01.innerHTML = `Σ b<sub>c</sub> = ${tong} Mbit/s trên 100 Mbit/s ${tong > 100 ? '<b>: vượt dung lượng</b>, QoS chỉ chọn lớp nào chịu thiệt' : ''}. QoS không tạo dung lượng mới, chỉ phân bổ lại (5.15). Thoại 200 byte, video 1 200, nền 1 500 byte mỗi gói (giả định).`;
    // bảng 02
    const r = kq.r, Wmx = Math.max(1e-4, ...r.map((x) => x.W)) * 1.1;
    LOP.forEach((l, c) => wRows[c].set(r[c].W / Wmx, F.fmtThoiGian(r[c].W, 2), l.mau));
    t02.innerHTML = fifo ? 'Một hàng chung: gói thoại đứng sau gói video, gói nền, nên chờ như mọi gói khác.' : S.lap === 'uutien' ? `Ưu tiên tuyệt đối: thoại gần như không chờ, video chờ ít; lớp nền gánh toàn bộ phần chờ${r[2].W > 0.05 ? ', có lúc gần như bị bỏ đói' : ''}.` : 'Có trần cho thoại và video: lớp ưu tiên vẫn nhanh, nhưng không thể chiếm hết cổng; nền luôn còn phần của nó.';
    // bảng 03
    LOP.forEach((l, c) => { const mat = 1 - (1 - r[c].mat) * (1 - kq.policer[c]); mRows[c].set(r[c].thongLuong / CW / 0.8, `${vn(r[c].thongLuong / 1e6, 0)} Mbit/s · mất ${vn(mat * 100, 1)} %`, mat > 0.01 ? MAU.bad : l.mau); });
    t03.innerHTML = 'Mất gói gồm gói rơi khi hàng đầy (tail drop, bộ đệm 200 gói) và gói bị policer cắt ở biên. P<sub>drop,c</sub> phụ thuộc độ dài hàng của lớp đó và ngưỡng của nó (5.16).';
    // bảng 04: byte DS + ECN
    { let g = ''; for (let i = 0; i < 8; i++) { const on = i < 6 ? (ds >> (5 - i)) & 1 : 0; g += `<rect x="${i * 34}" y="0" width="31" height="26" fill="${i < 6 ? (on ? LOP[S.sel].mau : C.chart) : '#e6eaee'}" stroke="${C.line}"/><text x="${i * 34 + 15.5}" y="18" text-anchor="middle" font-family="JetBrains Mono" font-size="12" font-weight="700" fill="${on ? '#fff' : C.ink}">${on}</text>`; }
      g += `<text x="0" y="44" font-family="JetBrains Mono" font-size="10.5" fill="#626773">DSCP (6 bit) = ${ds} · ${LOP[S.sel].ma}</text><text x="272" y="44" text-anchor="end" font-family="JetBrains Mono" font-size="10.5" fill="#626773">ECN</text><text x="0" y="62" font-family="JetBrains Mono" font-size="10.5" fill="#626773">Trước kia: 3 bit ưu tiên + cờ ToS</text>`; hSvg.innerHTML = g; }
    t04.innerHTML = `Biên mạng đánh dấu; mỗi chặng chỉ đọc 6 bit này để chọn hàng, không cần giữ trạng thái từng luồng (DiffServ). Hai bit cuối là ECN: router báo nghẽn bằng cách đặt cờ thay vì bỏ gói. EF = 46 (RFC 3246), AF41 = 34 (RFC 2597).`;
    // bảng 05
    const dmx = Math.max(...kq.dser) * 1.1; LOP.forEach((l, c) => dRows[c].set(kq.dser[c] / dmx, F.fmtThoiGian(kq.dser[c], 2), l.mau));
    t05.innerHTML = `D<sub>ser</sub> = L/R: gói 1 500 byte trên 100 Mbit/s là <b>0,12 ms</b> (câu 2). Ưu tiên tuyệt đối không ngắt gói đang phát, nên thoại vẫn có thể chờ tới một gói nền đang dở: trên liên kết chậm, phải giảm MTU hoặc chia nhỏ gói.`;
    // bảng 06
    LOP.slice(0, 2).forEach((l, c) => slC[c].set(S.tran[c] / 100, `${S.tran[c]} Mbit/s`));
    t06.innerHTML = `Câu 4: lớp ưu tiên không bị giới hạn thì một luồng video tăng vọt sẽ chiếm cổng và bỏ đói lớp nền. ${S.lap === 'gioihan' ? `Policer đang cắt ${vn(kq.policer[1] * 100, 0)} % video vượt trần, giữ cho nền ${vn(r[2].thongLuong / 1e6, 0)} Mbit/s.` : 'Bấm Ưu tiên có giới hạn để đặt trần.'}`;
    // chế độ
    modeEl.textContent = V.busy ? `Gói ${LOP[V.busy.c].ten}` : 'Cổng rảnh'; modeEl.style.color = V.busy ? LOP[V.busy.c].mau : C.ink;
    modeSub.textContent = `${fifo ? 'một hàng chung, vào trước ra trước' : S.lap === 'uutien' ? 'ưu tiên tuyệt đối: còn gói thoại thì phát thoại trước' : 'ưu tiên có trần: thoại và video bị cắt phần vượt trần'} · tải ${tong} %`;
    alert.set(S.lap === 'uutien' && r[2].W > 0.05 ? 'LỚP NỀN BỊ BỎ ĐÓI' : tong > 100 ? 'TẢI VƯỢT DUNG LƯỢNG CỔNG' : '');
    if (subL) subL.textContent = fifo ? 'VÀO TRƯỚC RA TRƯỚC' : S.lap === 'uutien' ? 'ƯU TIÊN TUYỆT ĐỐI' : 'ƯU TIÊN CÓ TRẦN';
    if (subH) subH.textContent = `DSCP ${ds} · ${LOP[S.sel].ma}`;
    const W3 = (v) => st.project(v.x, v.y, v.z);
    ui.drawCallouts([{key: 'q', p: W3(P(XA + 0.4, 3.3, ZQ)), dx: -40, dy: -60}, {key: 'lich', p: W3(P(XB + 0.4, 2.7, ZQ)), dx: 20, dy: -90}, {key: 'hdr', p: W3(P(HDR.x, HDR.y + 0.7, HDR.z)), dx: 30, dy: -40}, {key: 'wan', p: W3(WAN.curve.getPoint(0.6).add(P(0, 0.3, 0))), dx: 30, dy: 50}], 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình Thiết kế và hiệu năng mạng (TEL1459, PTIT 2026), mục 5.2.3–5.2.4: (5.14)–(5.16); câu 2, câu 4 chương 5. DSCP EF: RFC 3246; AF41: RFC 2597; ánh xạ lớp dịch vụ: RFC 4594; trường DS: RFC 2474; ECN: RFC 3168. Cỡ gói từng lớp, bộ đệm 200 gói và mức trần mặc định là giả định của bài.';
function cardOf(part) {
  const kq = S.kq; if (!kq) return null;
  const base = {src: SRC};
  if (part.startsWith('q') || part === 'fifo' || part === 'goi') return {...base, k: 'Hàng đợi', t: S.lap === 'fifo' ? 'Một hàng chung' : 'Mỗi lớp một hàng', b: 'Phân lớp theo DSCP ở cổng vào, mỗi lớp một hàng; bộ lập lịch quyết định hàng nào được phát.', rows: LOP.map((l, c) => [`Chờ · ${l.ten}`, () => F.fmtThoiGian(S.kq.r[c].W, 2)])};
  if (part === 'lich' || part === 'rt') return {...base, k: 'Bộ lập lịch', t: S.lap === 'fifo' ? 'Vào trước ra trước' : 'Ưu tiên tuyệt đối', b: 'Ưu tiên tuyệt đối luôn phát hàng cao nhất còn gói. Không có trần thì hàng thấp có thể chờ mãi.', rows: [['Thông lượng nền', () => F.fmtBps(S.kq.r[2].thongLuong, 0)]]};
  if (part === 'hdr') return {...base, k: 'Tiêu đề IP', t: 'Byte DS + ECN', b: 'Sáu bit đầu là DSCP, hai bit cuối là ECN. Trường ToS cũ dùng cùng byte này với nghĩa khác.', rows: [['DSCP', () => `${LOP[S.sel].dscp} (${LOP[S.sel].ma})`]]};
  if (part === 'wan' || part === 'dich' || part === 'vao' || part === 'nguon') return {...base, k: 'Cổng WAN', t: '100 Mbit/s', b: 'Mọi lớp chia nhau cùng một dung lượng. Tổng tải vượt 100 Mbit/s thì phải có lớp chịu thiệt.', rows: [['Tổng tải', () => `${S.tai.reduce((a, b) => a + b, 0)} Mbit/s`]]};
  return null;
}

// ---------------- góc nhìn
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 0, ty: 1.8, tz: 0, az: -52 + 3 * Math.sin(t * 0.05), el: 24, d: 30, sx: 0, sy: -10} : {tx: 0.4, ty: 1.9, tz: -0.2, az: -10 + 3 * Math.sin(t * 0.05), el: 18, d: 28, sx: 0, sy: -10}),
  q: () => ({tx: -1.8, ty: 2.2, tz: 0.2, az: -14, el: 10, d: 10, sx: 0, sy: -30}),
};

// ---------------- bài giảng
const CAP = [
  {k: 'Mục 5.2.4 · bài toán', t: 'Thoại, video và dữ liệu nền chung một cổng WAN', b: 'Ba lớp lưu lượng cùng đổ ra một cổng 100 Mbit/s, tổng tải 95 %. Gói thoại nhỏ và nhạy trễ, gói video lớn, gói nền không vội. Bài này so ba cách xếp lịch trên cùng một tải.', e: 'Σ b_c ≤ C_link,  b_c ≥ b_c^min   (5.15)'},
  {k: 'Một hàng chung', t: 'Gói thoại xếp sau gói nền', b: 'Không phân lớp thì mọi gói vào trước ra trước. Ở tải 95 %, gói thoại chờ ngang gói nền: vài mili giây mỗi chặng, cộng qua nhiều chặng là đủ làm cuộc gọi giật.', e: 'FIFO: mọi lớp chờ như nhau'},
  {k: 'Ưu tiên tuyệt đối', t: 'Thoại đi trước, nền chịu', b: 'Mỗi lớp một hàng; bộ lập lịch còn gói thoại thì phát thoại trước. Thoại gần như không chờ. Tổng phần chờ không biến mất: nó dồn sang lớp nền.', e: 'QoS không tạo dung lượng, chỉ chia lại'},
  {k: 'Câu 4 · chương 5', t: 'Video tăng vọt, nền bị bỏ đói', b: 'Bấm Video tăng vọt: video lên 80 Mbit/s. Với ưu tiên tuyệt đối không giới hạn, thoại và video chiếm gần hết cổng, lớp nền gần như không được phát và mất gói hàng loạt.', e: 'lớp ưu tiên phải có trần (policing, shaping)',
    ask: {q: 'Vì sao lớp ưu tiên tuyệt đối phải bị giới hạn tốc độ?', o: ['Để gói ưu tiên đi nhanh hơn', 'Để lớp ưu tiên không chiếm hết cổng, bỏ đói các lớp khác', 'Để giảm trễ tuần tự hoá'], a: 1, e: 'Ưu tiên tuyệt đối luôn phục vụ hàng cao trước. Không có trần, một lớp ưu tiên quá tải sẽ chiếm toàn bộ dung lượng.'}},
  {k: 'Ưu tiên có giới hạn', t: 'Đặt trần cho video', b: 'Policer ở biên cắt phần video vượt 45 Mbit/s. Video quá tải thì chính video chịu mất gói, còn lớp nền giữ được phần của nó. Đây là chính sách giáo trình gợi ý: ưu tiên luôn đi kèm giới hạn.', e: 'b_c ≤ trần của lớp'},
  {k: 'Đánh dấu DSCP', t: 'Sáu bit quyết định hàng', b: 'Byte thứ hai của tiêu đề IP từng là trường ToS. Nay sáu bit đầu là DSCP: EF = 46 cho thoại, AF41 = 34 cho video, 0 cho nền; hai bit cuối là ECN để báo nghẽn mà không phải bỏ gói. Bấm Xem EF, AF41, BE để thấy các bit.', e: 'DS field = DSCP (6 bit) + ECN (2 bit)'},
  {k: 'Câu 2 · trễ tuần tự hoá', t: '1 500 byte trên 100 Mbit/s', b: '12 000 bit chia 100 triệu bit/s là 0,12 ms. Ưu tiên tuyệt đối không ngắt gói đang phát, nên gói thoại vừa đến vẫn có thể phải chờ hết một gói nền 1 500 byte. Trên liên kết 2 Mbit/s con số đó là 6 ms.', e: 'D_ser = L / R   (5.14)',
    ask: {q: 'Gói 1 500 byte trên liên kết 10 Mbit/s mất bao lâu để phát hết?', o: ['0,12 ms', '1,2 ms', '12 ms'], a: 1, e: '12 000 bit / 10⁷ bit/s = 1,2 ms.'}},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'});
at(9, {cap: 1}); at(9.5, {click: 'fifo'}); at(10, {click: 'v_q'});
at(20, {cap: 2}); at(20.5, {click: 'uutien'});
at(31, {cap: 3}); at(31.5, {click: 'v_hero'}); at(32, {click: 'tham'});
at(43, {cap: 4}); at(43.5, {click: 'gioihan'});
at(54, {cap: 5}); at(55, {click: 's0'}); at(58, {click: 's1'}); at(61, {click: 's2'}); at(63, {click: 's0'});
at(65, {cap: 6});
ev.sort((a, b) => a.at - b.at);

sim.reset(); tinh(); S.dirty = false;
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 76}, firstView: 'hero', extra: [{key: 'tham', label: 'Video tăng vọt'}],
  keys: {1: 'v_hero', 2: 'v_q'}});
