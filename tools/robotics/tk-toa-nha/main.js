// Thiết kế và hiệu năng mạng · bài 4.1 · Tòa nhà 8 tầng: tủ mạng, cáp và PoE.
// Theo giáo trình TEL1459, chương 4 (BT 4.2, 4.3, 4.5): chiều dài cáp (4.3), số cổng (4.7), oversubscription (4.8), PoE (4.5),
// công suất rack và UPS (4.15, 4.16), dự phòng song song (4.14). Con số tính từ kit/mang/cong-thuc.js. Giới hạn cáp ngang
// 90 m theo ANSI/TIA-568.1; công suất PoE theo IEEE 802.3af/at. Kích thước sàn, công suất thiết bị và UPS là giả định của bài.
import * as THREE from 'three';
import {createStage, MAT} from '../kit/stage.js';
import * as SH from '../kit/shapes.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {tag, picker, vn} from '../kit/soi.js';
import * as F from '../kit/mang/cong-thuc.js';

const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 70, grid: 5, fade: 220, fov: 26, near: 0.5, far: 900});
const ui = createUI(app);
const root = new THREE.Group(); st.scene.add(root);
const mk = (geo, mat, parent = root) => { const m = new THREE.Mesh(geo, mat); m.castShadow = m.receiveShadow = true; parent.add(m); return m; };
const NT = 8, HT = 3.6, NU = 80, NAP = 6, NCAM = 10;
const OK = '#1F7A4D', BAD = '#B3261E';
const M = {ghost: new THREE.MeshStandardMaterial({color: '#e7e3da', transparent: true, opacity: 0.22, depthWrite: false, roughness: 0.8}), slab: MAT.satin('#d8ccb6'), col: MAT.satin('#d6d1c6'), core: MAT.shell('#cfc9bd'), glass: MAT.glass('#b8cfdc'), rack: MAT.dark(), ap: MAT.shell('#f4f4f2'), cam: MAT.shell('#2b2d30'),
  out: MAT.satin('#ffffff'), cu: new THREE.MeshStandardMaterial({color: '#7c8591', roughness: 0.6}), fiber: new THREE.MeshStandardMaterial({color: '#e8c547', roughness: 0.5}), hl: MAT.satin('#E3562A')};

// ---------------- trạng thái
const S = {L: 72, W: 36, floor: 5, mode: 'phan-tan', rhoUse: 0.8, up: 4, bt45: false, ups: 1.5, sep: false, aRiser: 0.999, t: 0};
const D_SW = 80, P_AP = 25, P_CAM = 15.4, BUDGET = 740, RSAFE = 0.8, ETA_UPS = 0.9; // công suất switch (giả định), AP 25 W (BT 4.5), camera 802.3af 15,4 W tại PSE

// ---------------- tòa nhà
const bld = new THREE.Group(); root.add(bld);
let slabs = [], cols = [], back = null, core = null;
const outlets = new THREE.InstancedMesh(SH.rbox(0.35, 0.18, 0.12, 0.02), M.out, NT * NU); outlets.castShadow = false; bld.add(outlets);
const aps = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.35, 0.35, 0.08, 20), M.ap, NT * NAP); bld.add(aps);
const cams = new THREE.InstancedMesh(new THREE.SphereGeometry(0.22, 14, 10), M.cam, NT * NCAM); bld.add(cams);
const idf = Array.from({length: NT}, (_, k) => { const g = new THREE.Group(); bld.add(g); mk(SH.rbox(0.8, 2.0, 0.9, 0.05), M.rack, g).position.y = 1.0; tag(`idf${k}`, g); return g; });
const mdf = new THREE.Group(); bld.add(mdf); for (let i = 0; i < 3; i++) mk(SH.rbox(0.8, 2.2, 0.9, 0.05), M.rack, mdf).position.set(i * 0.95, 1.1, 0); tag('mdf', mdf);
const riserA = mk(new THREE.CylinderGeometry(1, 1, 1, 18), M.fiber, bld), riserB = mk(new THREE.CylinderGeometry(1, 1, 1, 18), M.fiber, bld); tag('riser', riserA, riserB);
const horiz = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({vertexColors: true})); bld.add(horiz);
const outPos = []; // vị trí ổ cắm của một tầng (toạ độ sàn)

function dung() {
  for (const m of [...slabs, ...cols, back, core]) if (m) { m.geometry.dispose(); bld.remove(m); }
  slabs = []; cols = [];
  const {L, W} = S;
  for (let k = 0; k <= NT; k++) { const s = mk(SH.rbox(L, 0.25, W, 0.08), M.ghost, bld); s.position.set(0, k * HT, 0); s.castShadow = false; tag(`san${Math.min(k, NT - 1)}`, s); slabs.push(s); }
  for (const x of [-L / 2 + 0.4, -L / 6, L / 6, L / 2 - 0.4]) for (const z of [-W / 2 + 0.4, W / 2 - 0.4]) { const c = mk(new THREE.BoxGeometry(0.6, NT * HT, 0.6), M.col, bld); c.position.set(x, (NT * HT) / 2, z); cols.push(c); }
  back = mk(new THREE.PlaneGeometry(L, NT * HT), M.glass, bld); back.position.set(0, (NT * HT) / 2, -W / 2); back.castShadow = false;
  core = mk(new THREE.BoxGeometry(5, NT * HT, 5), M.ghost, bld); core.position.set(0, (NT * HT) / 2, -W / 2 + 4); tag('core', core);
  // ổ cắm: lưới 10 × 8 phủ sàn; AP 3 × 2; camera dọc mép
  outPos.length = 0; const m4 = new THREE.Matrix4();
  for (let i = 0; i < 10; i++) for (let j = 0; j < 8; j++) outPos.push([-L / 2 + (L * (i + 0.5)) / 10, -W / 2 + (W * (j + 0.5)) / 8]);
  for (let k = 0; k < NT; k++) {
    outPos.forEach(([x, z], i) => { m4.makeTranslation(x, k * HT + 0.25, z); outlets.setMatrixAt(k * NU + i, m4); });
    for (let i = 0; i < NAP; i++) { m4.makeTranslation(-L / 2 + (L * ((i % 3) + 0.5)) / 3, (k + 1) * HT - 0.25, -W / 2 + (W * (Math.floor(i / 3) + 0.5)) / 2); aps.setMatrixAt(k * NAP + i, m4); }
    for (let i = 0; i < NCAM; i++) { const side = i < 5, f = ((i % 5) + 0.5) / 5; m4.makeTranslation(-L / 2 + L * f, (k + 1) * HT - 0.35, side ? W / 2 - 0.8 : -W / 2 + 0.8); cams.setMatrixAt(k * NCAM + i, m4); }
    idf[k].position.set(3.2, k * HT + 0.15, -W / 2 + 4);
  }
  outlets.instanceMatrix.needsUpdate = aps.instanceMatrix.needsUpdate = cams.instanceMatrix.needsUpdate = true;
  mdf.position.set(-6, 0.15, -W / 2 + 3);
}

// ---------------- tính toán
// chiều dài một tuyến cáp ngang (giả định): đi trên trần theo hai trục, hệ số uốn và chừa 1,1, thêm 2 × 2 m lên xuống
function capTuOdo(x, z, k) {
  const goc = S.mode === 'phan-tan' ? [3.2, -S.W / 2 + 4] : [-6, -S.W / 2 + 3];
  const ngang = 1.1 * (Math.abs(x - goc[0]) + Math.abs(z - goc[1])) + 4;
  return S.mode === 'phan-tan' ? ngang : ngang + k * HT + 3; // tập trung: thêm đoạn đứng trong trục kỹ thuật
}
function tinh() {
  const k = S.floor - 1, len = outPos.map(([x, z]) => capTuOdo(x, z, k));
  const all = []; for (let f = 0; f < NT; f++) for (const [x, z] of outPos) all.push(capTuOdo(x, z, f));
  const port = F.soCong({Nu: NU, NAP, Ncam: NCAM, rhoUse: S.rhoUse}), nSw = Math.ceil(port / 48);
  const omega = F.oversub(Array(48).fill(1e9), Array(S.up).fill(10e9));
  // PoE: chia đều AP và camera cho các switch của tầng; BT 4.5: dồn 24 AP vào một switch
  const sw = S.bt45 ? [Array(24).fill(P_AP)] : Array.from({length: nSw}, (_, i) => [...Array(Math.floor(NAP / nSw) + (i < NAP % nSw ? 1 : 0)).fill(P_AP), ...Array(Math.floor(NCAM / nSw) + (i < NCAM % nSw ? 1 : 0)).fill(P_CAM)]);
  const poe = sw.map((p) => F.poe(p, BUDGET, RSAFE));
  const Ppoe = poe.reduce((a, p) => a + p.tong, 0), Prack = F.congSuatRack(Array(nSw).fill(D_SW), Ppoe, 0.1 * (nSw * D_SW + Ppoe));
  const Tups = F.thoiGianUPS(S.ups * 1000, ETA_UPS, Prack);
  const A1 = S.aRiser, A = S.sep ? F.sanSangSongSong([A1, A1]) : A1;
  S.kq = {len, max: Math.max(...len), over: len.filter((l) => l > F.CAP_NGANG_MAX).length, overAll: all.filter((l) => l > F.CAP_NGANG_MAX).length, bundle: S.mode === 'phan-tan' ? 2 * NT : NT * (NU + NAP + NCAM),
    port, nSw, omega, poe, Ppoe, Prack, Tups, A, down: F.phutNgungNam(A)};
  // dây ngang của tầng đang xem: xanh trong giới hạn, đỏ khi vượt 90 m
  const goc = S.mode === 'phan-tan' ? [3.2, -S.W / 2 + 4] : [-6, -S.W / 2 + 3], y = k * HT + 3.2, pos = [], col = [], cOk = new THREE.Color(OK), cBad = new THREE.Color(BAD);
  outPos.forEach(([x, z], i) => { const c = len[i] > F.CAP_NGANG_MAX ? cBad : cOk; const pts = [[goc[0], y, goc[1]], [x, y, goc[1]], [x, y, z], [x, k * HT + 0.35, z]]; for (let s = 0; s < 3; s++) { pos.push(...pts[s], ...pts[s + 1]); col.push(c.r, c.g, c.b, c.r, c.g, c.b); } });
  outPos.forEach(([x, z], i) => { outlets.setColorAt(k * NU + i, new THREE.Color(len[i] > F.CAP_NGANG_MAX ? BAD : OK)); }); for (let f = 0; f < NT; f++) if (f !== k) for (let i = 0; i < NU; i++) outlets.setColorAt(f * NU + i, new THREE.Color('#e6e3dc')); outlets.instanceColor.needsUpdate = true;
  horiz.geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); horiz.geometry.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); horiz.geometry.computeBoundingSphere();
  // trục cáp: bán kính bó cáp theo căn bậc hai số sợi (minh hoạ); tách trục thì có hai trục ở hai đầu nhà
  const r = 0.08 * Math.sqrt(S.kq.bundle) * (S.mode === 'phan-tan' ? 1.6 : 1);
  riserA.material = riserB.material = S.mode === 'phan-tan' ? M.fiber : M.cu;
  riserA.scale.set(r, NT * HT, r); riserA.position.set(1.8, (NT * HT) / 2, -S.W / 2 + 6.6);
  riserB.visible = S.sep; riserB.scale.set(r, NT * HT, r); riserB.position.set(-S.L / 2 + 3, (NT * HT) / 2, -S.W / 2 + 2);
  idf.forEach((g, i) => { g.visible = S.mode === 'phan-tan'; g.children[0].material = i === k ? M.hl : M.rack; });
  slabs.forEach((m, i) => { m.material = i === k ? M.slab : M.ghost; m.castShadow = i === k; });
}

// ---------------- bảng
ui.header({code: '4.1', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · CHƯƠNG 4 · BT 4.2, 4.3, 4.5', title: 'Tòa nhà 8 tầng', sub: 'TỦ MẠNG · CÁP NGANG · CỔNG · POE · UPS', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['8 tầng', 'MỖI TẦNG'], ['80 · 6 · 10', 'NGƯỜI DÙNG · AP · CAMERA'], ['90 m', 'CÁP NGANG TỐI ĐA']]});
ui.panel(28, 112, 300, 210, 'TÒA NHÀ · BT 4.2', '01');
ui.buttons([['phan-tan', 'IDF MỖI TẦNG'], ['tap-trung', 'KÉO HẾT VỀ MDF']], 42, 146, 272);
const slLen = ui.slider('L', 42, 190, 272, 'CHIỀU DÀI SÀN', {lw: 96, vw: 60});
const slFl = ui.slider('floor', 42, 220, 272, 'TẦNG ĐANG XEM', {lw: 96, vw: 60});
const capTxt = ui.text(42, 246, '', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:9.5px;white-space:normal;width:272px;line-height:1.45');
ui.panel(28, 334, 300, 196, 'CÁP NGANG · 4.3', '02');
ui.text(42, 368, 'TUYẾN DÀI NHẤT'); const lenBig = ui.text(42, 382, '', 'mo', 'position:absolute;font-size:26px;font-weight:700');
ui.text(178, 368, 'VƯỢT 90 M'); const overBig = ui.text(178, 382, '', 'mo', 'position:absolute;font-size:26px;font-weight:700');
const bundleTxt = ui.text(42, 424, '', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:9.5px;white-space:normal;width:272px;line-height:1.45');
ui.panel(28, 542, 300, 224, 'CỔNG VÀ UPLINK · 4.7, 4.8', '03');
const slRu = ui.slider('rhoUse', 42, 578, 272, 'HỆ SỐ DÙNG CỔNG', {lw: 110, vw: 50});
ui.text(42, 600, 'CỔNG CẦN'); const portBig = ui.text(42, 614, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
ui.text(178, 600, 'SWITCH 48 CỔNG'); const swBig = ui.text(178, 614, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
ui.buttons([['up1', '1 × 10G'], ['up2', '2 × 10G'], ['up4', '4 × 10G']], 42, 652, 272);
const omTxt = ui.text(42, 688, '', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:9.5px;white-space:normal;width:272px;line-height:1.45');

ui.panel(1272, 112, 300, 238, 'POE · 4.5', '04');
ui.buttons([['bt45', 'BT 4.5 · 24 AP MỘT SWITCH']], 1286, 146, 272);
const poeSvg = ui.svg(1286, 182, 272, 92);
const poeTxt = ui.text(1286, 282, '', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:9.5px;white-space:normal;width:272px;line-height:1.45');
ui.panel(1272, 362, 300, 196, 'NGUỒN VÀ UPS · 4.15, 4.16', '05');
const slUps = ui.slider('ups', 1286, 398, 272, 'NĂNG LƯỢNG UPS', {lw: 104, vw: 64});
ui.text(1286, 422, 'CÔNG SUẤT TỦ'); const prBig = ui.text(1286, 436, '', 'mo', 'position:absolute;font-size:22px;font-weight:700');
ui.text(1430, 422, 'LƯU ĐIỆN'); const upsBig = ui.text(1430, 436, '', 'mo', 'position:absolute;font-size:22px;font-weight:700');
const upsTxt = ui.text(1286, 474, '', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:9.5px;white-space:normal;width:272px;line-height:1.45');
ui.panel(1272, 570, 300, 196, 'DỰ PHÒNG TRỤC CÁP · 4.14', '06');
ui.buttons([['chung', 'HAI ĐƯỜNG CHUNG TRỤC'], ['tach', 'TÁCH HAI TRỤC']], 1286, 604, 272);
ui.text(1286, 642, 'ĐỘ SẴN SÀNG'); const aBig = ui.text(1286, 656, '', 'mo', 'position:absolute;font-size:22px;font-weight:700');
ui.text(1430, 642, 'NGỪNG MỖI NĂM'); const dnBig = ui.text(1430, 656, '', 'mo', 'position:absolute;font-size:22px;font-weight:700');
const aTxt = ui.text(1286, 694, '', 'sm', 'text-transform:none;letter-spacing:.2px;font-size:9.5px;white-space:normal;width:272px;line-height:1.45');
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_floor', 'MỘT TẦNG'], ['v_core', 'TRỤC KỸ THUẬT']], 360, 120, 860);
ui.text(362, 664, 'PHƯƠNG ÁN');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts([{key: 'idf', title: 'IDF', sub: 'TỦ TẦNG'}, {key: 'mdf', title: 'MDF', sub: 'TỦ CHÍNH'}, {key: 'riser', title: 'TRỤC CÁP', sub: ''}]);
const riserSub = ui.root.querySelectorAll('.call')[2]?.querySelector('span');

// ---------------- mô phỏng
const sim = {
  S,
  reset() { Object.assign(S, {L: 72, W: 36, floor: 5, mode: 'phan-tan', rhoUse: 0.8, up: 4, bt45: false, ups: 1.5, sep: false}); dung(); tinh(); },
  busy: () => false,
  isOn: (k) => k === S.mode || (k === 'bt45' && S.bt45) || (k === 'tach' && S.sep) || (k === 'chung' && !S.sep) || (k === `up${S.up}`),
  act(k) {
    if (k === 'phan-tan' || k === 'tap-trung') S.mode = k;
    if (k === 'bt45') S.bt45 = !S.bt45;
    if (k === 'tach') S.sep = true; if (k === 'chung') S.sep = false;
    if (/^up\d$/.test(k)) S.up = +k.slice(2);
    tinh();
  },
  slide(k, t) {
    if (k === 'L') { S.L = Math.round(30 + t * 90); S.W = Math.round(S.L / 2); dung(); }
    if (k === 'floor') S.floor = 1 + Math.round(t * (NT - 1));
    if (k === 'rhoUse') S.rhoUse = 0.5 + t * 0.5;
    if (k === 'ups') S.ups = 0.5 + t * 4.5;
    tinh();
  },
  keyDown() { return false; },
  step(dt) { S.t += dt; },
  shadowAt() { return new THREE.Vector3(0, 30, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq; if (!kq) return;
    slLen.set((S.L - 30) / 90, `${S.L} × ${S.W} m`); slFl.set((S.floor - 1) / (NT - 1), `tầng ${S.floor}`);
    capTxt.innerHTML = S.mode === 'phan-tan' ? `Mỗi tầng một tủ IDF cạnh trục kỹ thuật; cáp ngang chỉ đi trong tầng. Trục nối các IDF về tủ chính bằng cáp quang.` : `Mọi ổ cắm kéo thẳng về tủ chính MDF ở tầng 1: cáp ngang của tầng cao phải đi thêm đoạn đứng trong trục.`;
    lenBig.textContent = `${vn(kq.max, 0)} m`; lenBig.style.color = kq.max > F.CAP_NGANG_MAX ? BAD : C.ink;
    overBig.textContent = `${kq.over}/${NU}`; overBig.style.color = kq.over ? BAD : OK;
    bundleTxt.innerHTML = `Tầng ${S.floor}: ${kq.over ? `<b>${kq.over} ổ cắm vượt 90 m</b> (cả tòa ${kq.overAll}/${NT * NU}).` : 'mọi tuyến trong giới hạn 90 m.'} Trục cáp mang <b>${kq.bundle} sợi</b>${S.mode === 'tap-trung' ? ' cáp đồng: bó lớn, một điểm hỏng làm mất cả tòa.' : ' (hai sợi quang mỗi tầng).'} Chiều dài theo giả định đi trên trần, hệ số chừa 1,1.`;
    slRu.set((S.rhoUse - 0.5) / 0.5, vn(S.rhoUse, 2));
    portBig.textContent = `${kq.port}`; swBig.textContent = `${kq.nSw}`;
    omTxt.innerHTML = `⌈(80 + 6 + 10) / ${vn(S.rhoUse, 2)}⌉ = ${kq.port} cổng mỗi tầng (4.7). Mỗi switch 48 × 1 Gbit/s, uplink ${S.up} × 10 Gbit/s: <b>Ω = ${vn(kq.omega, 1)}</b> (4.8)${S.up === 4 ? ' · BT 4.3' : ''}. Ω càng lớn càng dựa vào giả định không phải mọi cổng cùng chạy hết tốc độ.`;
    // PoE: mỗi switch một thanh, vạch là ρ_safe · P_budget
    let g = ''; const W = 272, sc = W / BUDGET;
    kq.poe.forEach((p, i) => { const y = i * 26; g += `<text x="0" y="${y + 9}" font-family="Be Vietnam Pro" font-size="10" font-weight="600" fill="${C.ink}">Switch ${i + 1}</text><text x="${W}" y="${y + 9}" text-anchor="end" font-family="JetBrains Mono" font-size="10" fill="${p.dat ? C.ink : BAD}">${vn(p.tong, 1)} / ${vn(p.gioiHan, 0)} W</text><rect x="0" y="${y + 13}" width="${W}" height="8" fill="${C.chart}" stroke="${C.line}"/><rect x="0" y="${y + 13}" width="${Math.min(W, p.tong * sc)}" height="8" fill="${p.dat ? OK : BAD}"/><line x1="${p.gioiHan * sc}" x2="${p.gioiHan * sc}" y1="${y + 10}" y2="${y + 24}" stroke="${C.ink}" stroke-width="1.5"/>`; });
    poeSvg.innerHTML = g;
    const bad = kq.poe.find((p) => !p.dat);
    poeTxt.innerHTML = S.bt45 ? `24 AP × 25 W = <b>600 W</b> > 0,8 × 740 = <b>592 W</b>: <b>không đạt</b>. Chia sang hai switch hoặc dùng switch ngân sách lớn hơn.` : `Mỗi tầng 6 AP × 25 W và 10 camera × 15,4 W (802.3af tại PSE) chia cho ${kq.nSw} switch, ngân sách 740 W, ρ<sub>safe</sub> = 0,8. ${bad ? 'Có switch vượt.' : 'Mọi switch trong giới hạn.'}`;
    slUps.set((S.ups - 0.5) / 4.5, `${vn(S.ups, 1)} kWh`);
    prBig.textContent = `${vn(kq.Prack, 0)} W`; upsBig.textContent = `${vn(kq.Tups * 60, 0)} phút`;
    upsTxt.innerHTML = `P<sub>rack</sub> = ${kq.nSw} × 80 W (switch, giả định) + ${vn(kq.Ppoe, 0)} W PoE + 10 % dự phòng (4.15). T ≈ E·η/P với η = 0,9 (4.16). Quên phần PoE thì thời gian lưu điện bị tính dài hơn thật.`;
    aBig.textContent = `${vn(kq.A * 100, kq.A > 0.9999 ? 5 : 3)} %`; dnBig.textContent = `${vn(kq.down, kq.down < 10 ? 2 : 0)} phút`;
    aTxt.innerHTML = S.sep ? `Hai trục ở hai đầu nhà, hỏng độc lập: A = 1 − (1 − ${vn(S.aRiser, 3)})² (4.14).` : `Hai đường cáp đi chung một trục: cháy hay đứt trục là mất cả hai. Độ sẵn sàng chỉ bằng một trục, ${vn(S.aRiser, 3)} (giả định).`;
    for (const k of ['phan-tan', 'tap-trung', 'bt45', 'tach', 'chung', 'up1', 'up2', 'up4']) ui.setOn(k, sim.isOn(k));
    modeEl.textContent = S.mode === 'phan-tan' ? 'IDF mỗi tầng' : 'Kéo hết về MDF';
    modeSub.textContent = `sàn ${S.L} × ${S.W} m · ${NT} tầng × ${HT} m · tầng ${S.floor}: tuyến dài nhất ${vn(kq.max, 0)} m · ${kq.nSw} switch/tầng · Ω ${vn(kq.omega, 1)}`;
    alert.set(kq.over ? `${kq.over} TUYẾN VƯỢT 90 M` : !kq.poe.every((p) => p.dat) ? 'VƯỢT NGÂN SÁCH POE' : '');
    if (riserSub) riserSub.textContent = `${kq.bundle} SỢI`;
    const W3 = (x, y, z) => st.project(x, y, z), k = S.floor - 1;
    ui.drawCallouts([
      {key: 'idf', p: S.mode === 'phan-tan' ? W3(3.2, k * HT + 2.2, -S.W / 2 + 4) : null, dx: 80, dy: -50}, {key: 'mdf', p: W3(-5, 2.4, -S.W / 2 + 3), dx: -90, dy: 30},
      {key: 'riser', p: W3(1.8, NT * HT * 0.7, -S.W / 2 + 6.6), dx: -110, dy: -40},
    ], 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình TEL1459, chương 4 (BT 4.2, 4.3, 4.5). Cáp ngang tối đa 90 m, cả kênh 100 m: ANSI/TIA-568.1. PoE 802.3af 15,4 W, 802.3at 30 W tại PSE: IEEE 802.3. Kích thước sàn, cách đi cáp, công suất switch 80 W, độ sẵn sàng một trục 0,999 là giả định của bài.';
function cardOf(part) {
  const base = {src: SRC};
  if (/^idf/.test(part)) return {...base, k: 'Tủ tầng', t: 'IDF (Intermediate Distribution Frame)', b: 'Điểm phân phối trung gian đặt theo tầng: rút ngắn cáp ngang, gom switch truy nhập, làm rõ miền lỗi (mục 4.1.3).', rows: [['Switch mỗi tầng', () => `${S.kq.nSw}`], ['Cổng cần', () => `${S.kq.port}`]]};
  if (part === 'mdf') return {...base, k: 'Tủ chính', t: 'MDF (Main Distribution Frame)', b: 'Điểm phân phối chính của tòa nhà, thường chứa switch lõi hoặc phân phối chính.', rows: [['Phương án', () => (S.mode === 'phan-tan' ? 'nhận trục quang từ 8 IDF' : `nhận ${S.kq.bundle} cáp đồng`)]]};
  if (part === 'riser' || part === 'core') return {...base, k: 'Trục kỹ thuật', t: 'Cáp trục (backbone)', b: 'Nối các tầng với tủ chính. Hai tuyến dự phòng đi chung một trục thì chung một miền lỗi.', rows: [['Số sợi', () => `${S.kq.bundle}`], ['Độ sẵn sàng', () => `${vn(S.kq.A * 100, 4)} %`]]};
  if (/^san/.test(part)) return {...base, k: 'Sàn', t: `Tầng ${+part.slice(3) + 1}`, b: 'Mỗi tầng 80 ổ cắm người dùng, 6 điểm truy nhập Wi-Fi trên trần, 10 camera dọc hai mép.', rows: [['Tuyến dài nhất', () => `${vn(S.kq.max, 0)} m`]]};
  return null;
}

// ---------------- góc nhìn
// điện thoại dọc: nhìn dọc theo chuỗi thiết bị để cả chuỗi lọt khung hẹp
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 0, ty: 13, tz: 0, az: -52 + 3 * Math.sin(t * 0.05), el: 30, d: 120, sx: 0, sy: -10} : {tx: 4, ty: 12, tz: 0, az: -24 + 4 * Math.sin(t * 0.05), el: 34, d: 172, sx: 0, sy: -10}),
  floor: () => ({tx: 0, ty: (S.floor - 1) * HT + 1.5, tz: 0, az: -12, el: 58, d: 105, sx: 0, sy: -10}),
  core: () => ({tx: 0, ty: 12, tz: -S.W / 2 + 5, az: 20, el: 10, d: 70, sx: 0, sy: -20}),
};

// ---------------- bài giảng
const CAP = [
  {k: 'BT 4.2 · bài toán', t: 'Tòa nhà 8 tầng, mỗi tầng 80 người dùng, 6 AP, 10 camera', b: 'Thiết kế vật lý biến bản thiết kế logic thành cáp, tủ, cổng và nguồn có thật. Bài này trả lời ba câu của chương 4: đặt tủ ở đâu, cần bao nhiêu cổng và uplink, cấp nguồn có đủ không.', e: 'D_phy = Φ(D_log, R, F, S, E, C)   (4.1)'},
  {k: 'MDF và IDF · 4.1.3', t: 'Mỗi tầng một tủ', b: 'Tủ tầng IDF đặt cạnh trục kỹ thuật, nối ổ cắm trong tầng bằng cáp đồng; trục nối các IDF về tủ chính MDF bằng cáp quang. Chọn tầng để xem các tuyến cáp ngang của tầng đó.', e: 'IDF: cáp ngang · MDF: tủ chính · trục: cáp quang'},
  {k: 'Chiều dài cáp · 4.3', t: 'Kéo hết về một phòng thì sao?', b: 'Bấm "Kéo hết về MDF": cáp của tầng cao phải đi thêm đoạn đứng trong trục, tuyến dài nhất vượt 90 m. Vượt giới hạn, liên kết vẫn có thể sáng đèn nhưng không bảo đảm tốc độ và tỉ lệ lỗi. Bó cáp trong trục lên hàng trăm sợi.', e: 'ℓ ≤ ℓ_max · cáp ngang 90 m (TIA-568.1)',
    ask: {q: 'Vì sao không nên kéo toàn bộ cáp của tòa 8 tầng về một phòng trung tâm?', o: ['Vì cáp đồng đắt hơn cáp quang', 'Vì tuyến tầng cao vượt giới hạn 90 m và bó cáp tạo một điểm hỏng chung', 'Vì switch không đủ cổng'], a: 1, e: 'Đoạn đứng trong trục cộng với đoạn ngang làm tuyến xa vượt 90 m; mọi tầng phụ thuộc một bó cáp và một phòng máy.'}},
  {k: 'Đếm cổng · 4.7', t: '96 thiết bị cần 120 cổng', b: 'Mỗi tầng 80 + 6 + 10 = 96 thiết bị. Nếu chỉ muốn dùng 80 % số cổng để còn chỗ mở rộng, cần ⌈96/0,8⌉ = 120 cổng, tức 3 switch 48 cổng.', e: 'N_port ≥ ⌈(N_u + N_AP + N_cam + N_spare) / ρ_use⌉'},
  {k: 'Oversubscription · BT 4.3', t: '48 cổng 1 Gbit/s trên 4 uplink 10 Gbit/s', b: 'Tổng cổng truy nhập 48 Gbit/s, tổng uplink 40 Gbit/s: Ω = 1,2. Giảm còn một uplink, Ω = 4,8: thiết kế chỉ đứng được nếu không phải mọi cổng cùng tải cao một lúc. Camera tạo lưu lượng đều nên làm giả định đó kém đi.', e: 'Ω = Σ C_truy nhập / Σ U_uplink   (4.8)',
    ask: {q: 'Switch 48 cổng 1 Gbit/s, 4 uplink 10 Gbit/s. Ω bằng bao nhiêu?', o: ['0,83', '1,2', '4,8'], a: 1, e: '48 / 40 = 1,2.'}},
  {k: 'PoE · BT 4.5', t: '24 AP trên một switch 740 W', b: 'Mỗi AP tối đa 25 W: 24 × 25 = 600 W. Với hệ số dự phòng 0,8, chỉ dùng được 0,8 × 740 = 592 W. Thiếu 8 W: phương án không đạt, dù trên giấy 600 < 740.', e: 'Σ P_i ≤ ρ_safe · P_budget   (4.5)',
    ask: {q: 'Vì sao không dùng hết 740 W ngân sách PoE?', o: ['Vì switch sẽ chạy chậm hơn', 'Vì tải thật có thể tăng (AP bật thêm radio, camera bật hồng ngoại) nên cần dư địa', 'Vì PoE chỉ dùng được một nửa'], a: 1, e: 'Giáo trình mục 4.2.3: ρ_safe < 1 để giữ dư địa khi công suất thiết bị tăng.'}},
  {k: 'UPS · 4.15, 4.16', t: 'Tính cả công suất PoE vào tủ', b: 'Khi mất điện, AP, camera, điện thoại IP sống nhờ switch, mà switch sống nhờ UPS. Công suất tủ phải cộng phần PoE; bỏ sót thì thời gian lưu điện bị tính dài hơn thật.', e: 'P_rack = Σ P_dev + P_PoE + P_margin · T ≈ E·η / P'},
  {k: 'Dự phòng · 4.14', t: 'Hai đường chung một trục không phải là dự phòng', b: 'Hai uplink đi chung một trục cáp thì một vụ cháy trục làm mất cả hai. Tách thành hai trục ở hai đầu nhà, hỏng độc lập: độ sẵn sàng tăng từ 0,999 lên 0,999999, thời gian ngừng mỗi năm từ khoảng 8,8 giờ xuống dưới 1 phút.', e: 'A∥ = 1 − Π(1 − A_i)   (4.14)'},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'});
at(9, {cap: 1}); at(10, {click: 'v_floor'});
at(18, {cap: 2}); at(19, {click: 'tap-trung'}); at(20, {click: 'v_hero'}); at(23, {slide: 'floor', to: 1, dur: 1.5}); at(28, {click: 'phan-tan'});
at(31, {cap: 3}); at(32, {slide: 'rhoUse', to: 0.2, dur: 1.2}); at(36, {slide: 'rhoUse', to: 0.6, dur: 1});
at(40, {cap: 4}); at(41, {click: 'up1'}); at(45, {click: 'up4'});
at(49, {cap: 5}); at(50, {click: 'bt45'}); at(57, {click: 'bt45'});
at(59, {cap: 6}); at(60, {slide: 'ups', to: 0.6, dur: 1.5});
at(67, {cap: 7}); at(68, {click: 'v_core'}); at(70, {click: 'tach'}); at(76, {click: 'chung'}); at(78, {click: 'v_hero'});
ev.sort((a, b) => a.at - b.at);

sim.reset();
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 84}, firstView: 'hero', extra: [{key: 'tap-trung', label: 'Kéo về MDF'}, {key: 'bt45', label: 'BT 4.5'}],
  keys: {1: 'v_hero', 2: 'v_floor', 3: 'v_core'}});
