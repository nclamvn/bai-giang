// Thiết kế và hiệu năng mạng · tiết 4 · Độ sẵn sàng, RTO và RPO.
// Theo giáo trình TEL1459 (Hoàng Trọng Minh, PTIT 2026): độ sẵn sàng (1.19, 2.18), độ tin cậy (2.17), yêu cầu phục hồi
// T_detect + T_isolate + T_repair + T_verify ≤ RTO (2.19), RPO (mục 2.5.2), song song (4.14); bài tập 8 chương 2.
// Trường có hai đường lên tới nhà cung cấp. Đặt chung một ống cáp thì một gầu máy xúc cắt cả hai; tách hai ngả thì chỉ mất một
// và lưu lượng chuyển sang đường kia. Độ sẵn sàng tính hai cách: công thức và Monte Carlo hàng trăm năm (kit/mang/mo-phong.js).
import * as THREE from 'three';
import {createStage, MAT} from '../kit/stage.js';
import * as SH from '../kit/shapes.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {tag, picker, vn} from '../kit/soi.js';
import * as F from '../kit/mang/cong-thuc.js';
import {chayKhaDung} from '../kit/mang/mo-phong.js';
import {boCanh, P, MAU, LOGC, unlog, NHO} from '../kit/mang/canh.js';

const PI = Math.PI;
const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 16, grid: 1, fade: 60, fov: 26, near: 0.2, far: 260});
const ui = createUI(app);
const root = new THREE.Group(); st.scene.add(root);
const B = boCanh(root), {mk, M} = B;

// ---------------- cảnh: trường (router biên) ← hai đường lên → điểm truy nhập của nhà cung cấp (POP)
B.nha(-6.6, 0, 4.4, 4.2, 3.0, 'truong');
const rtA = B.tu(-6.0, 0.7, 2.0, 'truong');
B.nha(6.6, 0, 4.4, 4.2, 3.4, 'pop', M.wall2);
B.tu(6.0, 0.7, 2.2, 'pop'); B.tu(7.0, 0.7, 2.2, 'pop');
// phố trước (z = 2.6) và ngõ sau (z = −3.6), mặt đường tối
const duong = MAT.satin('#c7c3ba');
mk(SH.rbox(16, 0.04, 1.6, 0.02), duong).position.set(0, 0.02, 2.9);
mk(SH.rbox(16, 0.04, 1.2, 0.02), duong).position.set(0, 0.02, -3.7);
for (let x = -7; x <= 7; x += 1.4) mk(SH.rbox(0.6, 0.012, 0.06, 0.005), MAT.plastic('#fbfaf7')).position.set(x, 0.045, 3.25);
const ZA = 2.55, ZB = -3.55;
// ống cáp (trong suốt) và hai sợi cáp quang
const matOng = new THREE.MeshPhysicalMaterial({color: '#d7dde2', roughness: 0.2, transparent: true, opacity: 0.32, depthWrite: false});
const ong = (z, part) => { const m = mk(new THREE.CylinderGeometry(0.17, 0.17, 9.2, 18, 1, true), matOng); m.rotation.z = PI / 2; m.position.set(0, 0.2, z); m.castShadow = false; tag(part, m); return m; };
const ongA = ong(ZA, 'ongA'), ongB = ong(ZB, 'ongB');
const matA = MAT.plastic('#e8c547'), matB = MAT.plastic('#e8a347');
const duongA = (dz = 0) => [P(-6.0, 1.0, 1.15), P(-5.6, 0.25, 1.9), P(-4.6, 0.2, ZA + dz), P(0, 0.2, ZA + dz), P(4.6, 0.2, ZA + dz), P(5.6, 0.25, 1.9), P(6.0, 1.0, 1.15)];
const duongBtach = [P(-6.0, 1.4, 0.25), P(-6.3, 0.3, -1.6), P(-4.6, 0.2, ZB), P(0, 0.2, ZB), P(4.6, 0.2, ZB), P(6.3, 0.3, -1.6), P(6.0, 1.4, 0.25)];
const cA = B.cap(duongA(-0.06), matA, 0.045, 'capA');
let cB = null;
function datB() { if (cB) { root.remove(cB.mesh); cB.mesh.geometry.dispose(); } cB = B.cap(S.mode === 'chung' ? duongA(0.07).map((p) => p.clone().setY(p.y + 0.03)) : duongBtach, matB, 0.045, 'capB'); ongB.visible = S.mode === 'tach'; }
// máy xúc: thân, xích, cabin, cần hai đoạn, gầu; quay về phía rãnh ở phố trước
const XC = P(1.2, 0, 4.6);
const xuc = new THREE.Group(); xuc.position.copy(XC); xuc.rotation.y = PI; root.add(xuc); tag('mayxuc', xuc);
const vang = MAT.satin('#e0a526');
for (const sz of [-0.42, 0.42]) mk(SH.rbox(1.6, 0.32, 0.3, 0.08), M.rack, xuc).position.set(0, 0.16, sz);
mk(SH.rbox(1.3, 0.5, 1.0, 0.06), vang, xuc).position.set(0.15, 0.6, 0);
mk(SH.rbox(0.55, 0.6, 0.7, 0.05), M.glass, xuc).position.set(-0.25, 1.15, 0.1);
const can1 = new THREE.Group(); can1.position.set(-0.45, 0.85, -0.2); xuc.add(can1);
mk(SH.rbox(1.6, 0.16, 0.16, 0.04), vang, can1).position.set(-0.8, 0, 0);
const can2 = new THREE.Group(); can2.position.set(-1.6, 0, 0); can1.add(can2);
mk(SH.rbox(0.14, 1.1, 0.14, 0.04), vang, can2).position.set(0, -0.55, 0);
const gau = mk(SH.rbox(0.42, 0.3, 0.4, 0.05), M.rack, can2); gau.position.set(-0.1, -1.15, 0);
// hố đào và dấu cắt trên đường A
const CUT = P(0.0, 0.2, ZA);
const ho = mk(SH.rbox(1.0, 0.03, 0.9, 0.02), MAT.satin('#7b6a55')); ho.position.set(CUT.x, 0.05, CUT.z); ho.visible = false;
const vetCat = [0, 1].map(() => { const m = mk(new THREE.TorusGeometry(0.22, 0.035, 8, 24), new THREE.MeshBasicMaterial({color: MAU.bad})); m.rotation.y = PI / 2; m.visible = false; return m; });
// đồng hồ phục hồi: vòng tròn = max(RTO, tổng thời gian sự cố), bốn cung theo bốn pha của (2.19), vạch đỏ là RTO
const DIAL = P(0, 3.6, -0.4);
const dial = new THREE.Group(); dial.position.copy(DIAL); root.add(dial); tag('dongho', dial);
mk(new THREE.CylinderGeometry(1.15, 1.15, 0.06, 48), MAT.shell('#e9e6de'), dial).rotation.x = PI / 2;
mk(new THREE.CylinderGeometry(0.05, 0.05, DIAL.y - 0.1, 10), M.panel).position.set(DIAL.x, (DIAL.y - 0.1) / 2, DIAL.z - 0.1);
const PHA = [{k: 'detect', ten: 'phát hiện', mau: '#3B6EA8'}, {k: 'isolate', ten: 'khoanh vùng', mau: '#C98A12'}, {k: 'repair', ten: 'sửa hoặc chuyển', mau: '#E3562A'}, {k: 'verify', ten: 'xác nhận', mau: '#2F8F5B'}];
const cung = PHA.map((p) => { const m = mk(new THREE.TorusGeometry(0.9, 0.09, 8, 64, 0.01), new THREE.MeshStandardMaterial({color: p.mau, roughness: 0.5}), dial); m.position.z = 0.05; return m; });
const kim = new THREE.Group(); kim.position.z = 0.09; dial.add(kim); mk(SH.rbox(0.05, 0.8, 0.03, 0.01), M.rack, kim).position.y = 0.4;
const vachRTO = mk(SH.rbox(0.05, 0.32, 0.04, 0.01), new THREE.MeshBasicMaterial({color: MAU.bad}), dial); vachRTO.position.z = 0.08;
// gói tin chạy trên đường đang dùng
const goi = B.beGoi(14, MAU.prop, [0.22, 0.12, 0.16]);

// ---------------- mô hình
// Giả định của bài (ghi cạnh số trên bảng): router MTBF 100 000 h, MTTR 4 h; khoanh vùng thủ công 30 phút; chuyển đường tự động
// 1 s; xác nhận tự động 10 s, xác nhận sau sửa vật lý 15 phút. BFD: 3 lần 50 ms (RFC 5880); OSPF RouterDeadInterval 40 s (RFC 2328).
const H = 3600;
const S = {mode: 'chung', phat: 'bfd', mtbfL: 2000, mttrL: 2, catNam: 1, mttrO: 12, rto: 1, bk: 24, rpo: 24, su: null, t: 0, kq: null, dirty: true};
const tDetect = () => (S.phat === 'bfd' ? 0.15 : 40);
function pha(loai) {
  // còn đường kia thì định tuyến tự chuyển; không còn thì phải ra hiện trường
  const conDuong = loai === 'hong_a' || S.mode === 'tach';
  return conDuong ? {detect: tDetect(), isolate: 0, repair: 1, verify: 10, conDuong} : {detect: tDetect(), isolate: 0.5 * H, repair: S.mttrO * H, verify: 0.25 * H, conDuong};
}
function tinh() {
  const tp = {rt: {mtbf: 1e5, mttr: 4}, a: {mtbf: S.mtbfL, mttr: S.mttrL}, b: {mtbf: S.mtbfL, mttr: S.mttrL}, o1: {mtbf: 8766 / S.catNam, mttr: S.mttrO}, o2: {mtbf: 8766 / S.catNam, mttr: S.mttrO}};
  const tSw = (tDetect() + 1) / H;
  const cauTruc = S.mode === 'chung' ? {chung: ['rt', 'o1'], duong: [['a'], ['b']]} : {chung: ['rt'], duong: [['a', 'o1'], ['b', 'o2']]};
  const mc = chayKhaDung({tp, ...cauTruc, nam: 400, seed: 7, tChuyen: tSw});
  const Ar = F.sanSang(1e5, 4), Al = F.sanSang(S.mtbfL, S.mttrL), Ao = F.sanSang(8766 / S.catNam, S.mttrO);
  const Alt = S.mode === 'chung' ? Ar * Ao * F.sanSangSongSong([Al, Al]) : Ar * F.sanSangSongSong([Al * Ao, Al * Ao]);
  // một đường duy nhất để so sánh
  const A1 = Ar * Al * Ao;
  S.kq = {mc, Alt, A1, Al, Ao, Ar, pDao: pha('dao'), pHong: pha('hong_a')};
}

// ---------------- bảng
ui.header({code: 'T4', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · TIẾT 4 · MỤC 1.6.5, 2.5 · DỰ PHÒNG VÀ PHỤC HỒI', title: 'Độ sẵn sàng, RTO và RPO', sub: 'HAI ĐƯỜNG LÊN · MỘT ỐNG HAY HAI NGẢ', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['2', 'ĐƯỜNG LÊN'], ['1.19 · 2.19', 'PHƯƠNG TRÌNH'], ['400 NĂM', 'Monte Carlo']]});
ui.panel(28, 112, 300, 176, 'PHƯƠNG ÁN · HAI ĐƯỜNG LÊN', '01');
const t01a = ui.text(42, 148, '', 'v', 'font-size:12px;font-weight:600;width:272px;white-space:normal');
const pathBars = ['ĐƯỜNG A', 'ĐƯỜNG B', 'DỊCH VỤ'].map((n, i) => ui.bar(42, 192 + i * 20, 272, n, {lw: 76, vw: 86}));
const t01 = ui.text(42, 254, '', 'sm', NHO);
ui.panel(28, 300, 300, 186, 'THÀNH PHẦN · MTBF VÀ MTTR', '02');
const slM = ui.slider('mtbfL', 42, 336, 272, 'MTBF ĐƯỜNG', {lw: 92, vw: 74});
const slR = ui.slider('mttrL', 42, 364, 272, 'MTTR ĐƯỜNG', {lw: 92, vw: 74});
const slC = ui.slider('catNam', 42, 392, 272, 'ỐNG BỊ CẮT', {lw: 92, vw: 74});
const slO = ui.slider('mttrO', 42, 420, 272, 'SỬA ỐNG', {lw: 92, vw: 74});
const t02 = ui.text(42, 446, '', 'sm', NHO);
ui.panel(28, 498, 300, 268, 'ĐỘ SẴN SÀNG · 1.19, 4.14', '03');
const aBars = ['CÔNG THỨC', 'Monte Carlo', 'MỘT ĐƯỜNG'].map((n, i) => ui.bar(42, 534 + i * 20, 272, n, {lw: 86, vw: 80}));
ui.text(42, 600, 'NGỪNG DỊCH VỤ MỖI NĂM'); const aBig = ui.text(42, 614, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t03 = ui.text(42, 650, '', 'sm', NHO);

ui.panel(1272, 112, 300, 262, 'ĐỒNG HỒ PHỤC HỒI · 2.19', '04');
const slT = ui.slider('rto', 1286, 148, 272, 'RTO', {lw: 92, vw: 74});
const phaRows = PHA.map((p, i) => ui.bar(1286, 176 + i * 20, 272, p.ten.toUpperCase(), {lw: 104, vw: 70}));
ui.text(1286, 262, 'TỔNG THỜI GIAN PHỤC HỒI'); const rBig = ui.text(1286, 276, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t04 = ui.text(1286, 312, '', 'sm', NHO);
ui.panel(1272, 386, 300, 186, 'RPO · DỮ LIỆU CẤU HÌNH', '05');
const slK = ui.slider('bk', 1286, 422, 272, 'SAO LƯU MỖI', {lw: 92, vw: 74});
const slP = ui.slider('rpo', 1286, 450, 272, 'RPO', {lw: 92, vw: 74});
const rpoSvg = ui.svg(1286, 478, 272, 34);
const t05 = ui.text(1286, 520, '', 'sm', NHO);
ui.panel(1272, 584, 300, 182, 'NGỪNG THEO NGUYÊN NHÂN', '06');
const ngSvg = ui.svg(1286, 618, 272, 72);
const t06 = ui.text(1286, 700, '', 'sm', NHO);
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_pho', 'PHỐ TRƯỚC'], ['v_dial', 'ĐỒNG HỒ'], ['chung', 'CHUNG MỘT ỐNG'], ['tach', 'TÁCH HAI NGẢ'], ['dao', 'MÁY XÚC ĐÀO'], ['hong_a', 'HỎNG CỔNG A'], ['bfd', 'BFD'], ['hello', 'OSPF HELLO'], ['bt28', 'BT 2.8']], 360, 120, 860);
ui.text(362, 664, 'DỊCH VỤ');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts([{key: 'truong', title: 'TRƯỜNG', sub: 'ROUTER BIÊN'}, {key: 'pop', title: 'NHÀ CUNG CẤP', sub: 'ĐIỂM TRUY NHẬP'}, {key: 'ongA', title: 'ỐNG CÁP PHỐ TRƯỚC', sub: ''}, {key: 'ongB', title: 'ỐNG CÁP NGÕ SAU', sub: 'ĐƯỜNG B'}, {key: 'dongho', title: 'ĐỒNG HỒ PHỤC HỒI', sub: ''}]);
const subA = ui.root.querySelectorAll('.call')[2]?.querySelector('span'), subD = ui.root.querySelectorAll('.call')[4]?.querySelector('span');

// ---------------- mô phỏng
// sự cố phát lại nén: 7 s cảnh cho cả sự cố, mỗi pha chiếm phần theo tỉ lệ thời gian thật (tối thiểu 6 % để nhìn thấy)
const T_SU = 7;
function trangThai() {
  // trả về {a, b, svc, u (0..1 tiến độ sự cố), phaHien}
  const su = S.su; if (!su) return {a: true, b: true, svc: true, u: 0, ph: null};
  const u = Math.min(1, (S.t - su.t0) / T_SU), p = su.p, tong = p.detect + p.isolate + p.repair + p.verify;
  const w = PHA.map((x) => Math.max(0.06, p[x.k] / tong)), sw = w.reduce((a, b) => a + b, 0);
  let acc = 0, ph = 3; for (let i = 0; i < 4; i++) { acc += w[i] / sw; if (u < acc) { ph = i; break; } }
  const daSua = u >= 1;
  const catA = !daSua, catB = !daSua && su.loai === 'dao' && S.mode === 'chung';
  // còn đường: ngừng trong pha phát hiện và chuyển (pha 0..2), chạy lại từ pha xác nhận; không còn: ngừng tới hết sự cố
  const svc = daSua || (p.conDuong ? ph >= 3 : false);
  return {a: !catA, b: !catB, svc, u, ph: daSua ? null : ph};
}
const sim = {
  S,
  reset() { Object.assign(S, {mode: 'chung', phat: 'bfd', mtbfL: 2000, mttrL: 2, catNam: 1, mttrO: 12, rto: 1, bk: 24, rpo: 24, su: null}); S.dirty = true; datB(); },
  busy: () => !!S.su && S.t - S.su.t0 < T_SU,
  isOn: (k) => (k === 'chung' || k === 'tach' ? S.mode === k : k === 'bfd' || k === 'hello' ? S.phat === k : false),
  act(k) {
    if (k === 'chung' || k === 'tach') { S.mode = k; S.su = null; datB(); S.dirty = true; }
    if (k === 'bfd' || k === 'hello') { S.phat = k; S.dirty = true; }
    if (k === 'dao' || k === 'hong_a') { S.su = {loai: k, t0: S.t, p: pha(k)}; }
    if (k === 'bt28') { S.mtbfL = 2000; S.mttrL = 2; S.dirty = true; }
  },
  slide(k, t) {
    if (k === 'mtbfL') S.mtbfL = Math.round(unlog(t, 500, 50000));
    if (k === 'mttrL') S.mttrL = unlog(t, 0.5, 48);
    if (k === 'catNam') S.catNam = unlog(t, 0.1, 10);
    if (k === 'mttrO') S.mttrO = unlog(t, 2, 72);
    if (k === 'rto') S.rto = unlog(t, 1 / H, 48);
    if (k === 'bk') S.bk = unlog(t, 0.25, 168);
    if (k === 'rpo') S.rpo = unlog(t, 0.25, 168);
    if (k !== 'rto' && k !== 'bk' && k !== 'rpo') S.dirty = true;
  },
  keyDown() { return false; },
  step(dt) { if (S.dirty) { tinh(); S.dirty = false; if (S.su) S.su.p = pha(S.su.loai); } S.t += dt; },
  shadowAt() { return new THREE.Vector3(0, 10, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq; if (!kq) return;
    const z = trangThai(), su = S.su, t = S.t;
    // máy xúc: gầu hạ xuống trong 0,8 s đầu của sự cố đào rồi nhấc lên
    const dig = su && su.loai === 'dao' ? Math.max(0, 1 - Math.abs((t - su.t0) / 0.8 - 1)) : 0;
    can1.rotation.z = -0.15 - 0.45 * dig; can2.rotation.z = 0.35 + 0.5 * dig;
    ho.visible = !!(su && su.loai === 'dao' && z.u < 1);
    vetCat[0].visible = !z.a; vetCat[0].position.copy(su && su.loai === 'hong_a' ? P(-5.0, 0.2, ZA - 0.06) : P(CUT.x, 0.2, ZA - 0.06));
    vetCat[1].visible = !z.b; vetCat[1].position.set(CUT.x, 0.23, ZA + 0.07);
    matA.color.set(z.a ? '#e8c547' : '#d27a70'); matB.color.set(z.b ? '#e8a347' : '#d27a70');
    // gói: chạy trên đường đang dùng (A nếu còn, không thì B), dừng khi dịch vụ ngừng
    const dung = z.svc ? (z.a ? cA.curve : cB.curve) : null;
    goi.forEach((m, k) => { m.visible = !!dung; if (!dung) return; const s = ((k / goi.length) + t * 0.12) % 1, sv = k % 2 ? s : 1 - s; m.position.copy(dung.getPoint(sv)); m.position.y += 0.12; });
    // đồng hồ
    const p = su ? su.p : kq.pDao, tong = p.detect + p.isolate + p.repair + p.verify, rtoS = S.rto * H, vong = Math.max(rtoS, tong);
    let a0 = 0;
    PHA.forEach((x, i) => { const len = Math.max(0.0001, (2 * PI * p[x.k]) / vong); cung[i].geometry.dispose(); cung[i].geometry = new THREE.TorusGeometry(0.9, 0.09, 8, 48, len); cung[i].rotation.z = PI / 2 - (a0 + len); a0 += len; });
    const aR = (2 * PI * rtoS) / vong; vachRTO.position.set(Math.sin(aR) * 0.9, Math.cos(aR) * 0.9, 0.08); vachRTO.rotation.z = -aR;
    kim.rotation.z = -(su ? z.u * a0 : 0);
    // bảng 01
    t01a.textContent = S.mode === 'chung' ? 'Hai sợi cáp chung một ống ở phố trước' : 'Đường A phố trước, đường B ngõ sau';
    pathBars[0].set(z.a ? 1 : 0, z.a ? 'chạy' : 'bị cắt', z.a ? MAU.ok : MAU.bad); pathBars[1].set(z.b ? 1 : 0, z.b ? 'chạy' : 'bị cắt', z.b ? MAU.ok : MAU.bad); pathBars[2].set(z.svc ? 1 : 0, z.svc ? (z.a ? 'qua A' : 'qua B') : 'ngừng', z.svc ? MAU.ok : MAU.bad);
    t01.innerHTML = S.mode === 'chung' ? 'Hai đường độc lập về thiết bị nhưng <b>chung một miền lỗi</b>: ống cáp nối tiếp với cả hai.' : 'Mỗi đường có ống riêng trên một ngả riêng: một sự cố đào đường chỉ cắt được một.';
    // bảng 02
    slM.set(LOGC(S.mtbfL, 500, 50000), `${vn(S.mtbfL, 0)} h`); slR.set(LOGC(S.mttrL, 0.5, 48), `${vn(S.mttrL, 1)} h`); slC.set(LOGC(S.catNam, 0.1, 10), `${vn(S.catNam, 1)} lần/năm`); slO.set(LOGC(S.mttrO, 2, 72), `${vn(S.mttrO, 0)} h`);
    t02.innerHTML = `A<sub>đường</sub> = ${vn(kq.Al, 5)}, A<sub>ống</sub> = ${vn(kq.Ao, 5)} theo MTBF/(MTBF + MTTR). Router MTBF 100 000 h, MTTR 4 h là giả định. Độ tin cậy một năm của một đường R = e<sup>−t/MTBF</sup> = ${vn(F.doTinCay(1 / S.mtbfL, 8766), 3)} (2.17).`;
    // bảng 03
    const mx = 1; const nines = (A) => `${vn(A * 100, 4)} %`;
    const sc = (A) => Math.max(0, 1 - (1 - A) / Math.max(1 - kq.A1, 1e-9)) * 0.9 + 0.1;
    aBars[0].set(sc(kq.Alt) * mx, nines(kq.Alt), C.ink); aBars[1].set(sc(kq.mc.A), nines(kq.mc.A), MAU.prop); aBars[2].set(sc(kq.A1), nines(kq.A1), '#8A8F98');
    aBig.textContent = `${vn(kq.mc.phutNam, 0)} phút`;
    t03.innerHTML = `Monte Carlo 400 năm (có tính ngừng khi chuyển đường): ${vn(kq.mc.suCoNam, 2)} sự cố/năm. Một đường duy nhất ngừng ${vn(F.phutNgungNam(kq.A1), 0)} phút/năm. ${S.mode === 'chung' ? 'Thêm đường thứ hai chung ống chỉ bớt được phần lỗi thiết bị; phần ống bị cắt vẫn còn nguyên.' : 'Tách ngả thì hai đường gần như không cùng hỏng: phần còn lại chủ yếu là router đơn.'}`;
    // bảng 04
    slT.set(LOGC(S.rto, 1 / H, 48), F.fmtThoiGian(rtoS, 0));
    PHA.forEach((x, i) => phaRows[i].set(p[x.k] / vong, F.fmtThoiGian(p[x.k], p[x.k] < 1 ? 2 : 0), x.mau));
    rBig.textContent = F.fmtThoiGian(tong, tong < 10 ? 2 : 0); rBig.style.color = tong <= rtoS ? MAU.ok : MAU.bad;
    t04.innerHTML = `${su ? (su.loai === 'dao' ? 'Sự cố: máy xúc đào đứt ống phố trước. ' : 'Sự cố: hỏng cổng quang đường A. ') : 'Kịch bản: máy xúc đào đứt ống phố trước. '}${p.conDuong ? 'Còn đường kia: phát hiện rồi định tuyến tự chuyển.' : 'Không còn đường: phải khoanh vùng, ra hiện trường hàn nối, rồi xác nhận.'} ${tong <= rtoS ? '<b>Đạt RTO.</b>' : '<b>Vượt RTO.</b>'} Phát hiện ${S.phat === 'bfd' ? 'bằng BFD 3 × 50 ms' : 'bằng OSPF, chờ 40 s không nhận hello'}.`;
    // bảng 05
    slK.set(LOGC(S.bk, 0.25, 168), F.fmtThoiGian(S.bk * H, 0)); slP.set(LOGC(S.rpo, 0.25, 168), F.fmtThoiGian(S.rpo * H, 0));
    { const W = 272, span = 168, X = (h) => (h / span) * W; let g = `<rect x="0" y="10" width="${W}" height="12" fill="${C.chart}" stroke="${C.line}"/>`;
      for (let h = 0; h <= span; h += S.bk) g += `<line x1="${X(h)}" x2="${X(h)}" y1="6" y2="26" stroke="${C.ink}" stroke-width="1.2"/>`;
      const hong = 0.8 * span, cuoi = Math.floor(hong / S.bk) * S.bk;
      g += `<rect x="${X(cuoi)}" y="10" width="${Math.max(1, X(hong) - X(cuoi))}" height="12" fill="${MAU.bad}" opacity=".55"/><path d="M${X(hong)} 2 l4 -2 l0 30" stroke="${MAU.bad}" fill="none"/><text x="0" y="34" font-family="JetBrains Mono" font-size="9" fill="#626773">7 ngày</text><text x="${W}" y="34" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="${MAU.bad}">router hỏng</text>`;
      rpoSvg.innerHTML = g; }
    t05.innerHTML = `Vạch đen là các bản sao lưu cấu hình; phần đỏ là thay đổi chưa kịp lưu, mất khi khôi phục. Tệ nhất mất trọn một chu kỳ: ${S.bk <= S.rpo ? '<b>đạt RPO</b>' : '<b>vượt RPO</b>'} (chu kỳ ${F.fmtThoiGian(S.bk * H, 0)} so với ${F.fmtThoiGian(S.rpo * H, 0)}).`;
    // bảng 06
    { const th = kq.mc.theo, items = [['Router (chung)', th.chung, '#5b6170'], ['Cả hai đường', th['cả hai đường'], MAU.bad], ['Chuyển đường', th['chuyển mạch'], MAU.warn]], tot = Math.max(1e-9, items.reduce((a, b) => a + b[1], 0));
      let g = '', x = 0; for (const [, v, c] of items) { const w = (v / tot) * 272; g += `<rect x="${x}" y="0" width="${w}" height="14" fill="${c}"/>`; x += w; }
      items.forEach(([n, v, c], i) => { const y = 30 + i * 14; g += `<rect x="0" y="${y - 8}" width="9" height="9" fill="${c}"/><text x="14" y="${y}" font-family="Be Vietnam Pro" font-size="10" fill="${C.ink}">${n}</text><text x="272" y="${y}" text-anchor="end" font-family="JetBrains Mono" font-size="10" fill="${C.ink}">${vn(v, v < 1 ? 2 : 0)} phút/năm</text>`; });
      ngSvg.innerHTML = g;
      t06.innerHTML = th['chuyển mạch'] > th['cả hai đường'] ? 'Thời gian chuyển đường chiếm nhiều nhất: phát hiện nhanh hơn (BFD) có lợi hơn thêm đường.' : S.mode === 'chung' ? 'Ống chung cắt cả hai đường là nguyên nhân lớn nhất.' : 'Phần lớn còn lại nằm ở router đơn: muốn hơn nữa phải nhân đôi router.'; }
    // chế độ
    modeEl.textContent = z.svc ? 'Đang chạy' : 'Ngừng'; modeEl.style.color = z.svc ? C.ink : MAU.bad;
    modeSub.textContent = z.ph !== null ? `pha ${z.ph + 1}/4 · ${PHA[z.ph].ten} · phát lại nén, mỗi pha theo tỉ lệ thời gian thật` : `${S.mode === 'chung' ? 'chung một ống' : 'tách hai ngả'} · ${vn(kq.mc.phutNam, 0)} phút ngừng mỗi năm (Monte Carlo)`;
    alert.set(!z.svc ? 'DỊCH VỤ NGỪNG' : z.ph !== null ? 'ĐANG CHẠY TRÊN ĐƯỜNG DỰ PHÒNG' : '');
    if (subA) subA.textContent = S.mode === 'chung' ? 'CẢ HAI ĐƯỜNG' : 'ĐƯỜNG A';
    if (subD) subD.textContent = `RTO ${F.fmtThoiGian(rtoS, 0).toUpperCase()}`;
    const W3 = (v) => st.project(v.x, v.y, v.z);
    const ds = [{key: 'truong', p: W3(P(-6.6, 3.1, -1)), dx: -50, dy: -40}, {key: 'pop', p: W3(P(6.6, 3.5, -1)), dx: 40, dy: -40}, {key: 'ongA', p: W3(P(3, 0.4, ZA)), dx: 40, dy: 50}, {key: 'dongho', p: W3(P(DIAL.x, DIAL.y + 1.2, DIAL.z)), dx: 30, dy: -40}];
    if (S.mode === 'tach') ds.push({key: 'ongB', p: W3(P(-3, 0.4, ZB)), dx: -40, dy: -40});
    ui.drawCallouts(ds, 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình Thiết kế và hiệu năng mạng (TEL1459, PTIT 2026): 1.19, 2.17–2.19, 4.14, mục 2.5.2; bài tập 8 chương 2. BFD: RFC 5880 (thời gian phát hiện = hệ số nhân × khoảng gửi; 3 × 50 ms là giả định). OSPF RouterDeadInterval mặc định 40 s: RFC 2328. MTBF, MTTR của router, ống cáp và thời gian khoanh vùng, xác nhận là giả định của bài.';
function cardOf(part) {
  const kq = S.kq; if (!kq) return null;
  const base = {src: SRC};
  if (part === 'ongA' || part === 'capA' || part === 'capB' || part === 'mayxuc') return {...base, k: 'Miền lỗi', t: S.mode === 'chung' ? 'Hai đường, một ống' : 'Hai đường, hai ngả', b: 'Dự phòng chỉ có tác dụng khi hai nhánh không hỏng cùng lúc. Chung ống, chung cột điện, chung nguồn điện đều là miền lỗi chung, phải đếm như một phần tử nối tiếp.', rows: [['Độ sẵn sàng (công thức)', () => `${vn(S.kq.Alt * 100, 4)} %`], ['Ngừng mỗi năm (Monte Carlo)', () => `${vn(S.kq.mc.phutNam, 0)} phút`]]};
  if (part === 'ongB') return {...base, k: 'Đường B', t: 'Ống riêng ở ngõ sau', b: 'Tách ngả làm hai đường thành song song thật: A = 1 − (1 − A₁)(1 − A₂) (4.14).', rows: [['A mỗi đường', () => vn(S.kq.Al * S.kq.Ao, 5)]]};
  if (part === 'dongho') return {...base, k: 'Phương trình 2.19', t: 'Bốn pha của một lần phục hồi', b: 'Phát hiện, khoanh vùng, sửa hoặc chuyển, xác nhận. Tách bốn pha mới biết nên đầu tư vào giám sát, dự phòng hay quy trình sửa chữa.', rows: PHA.map((x) => [x.ten, () => F.fmtThoiGian((S.su ? S.su.p : S.kq.pDao)[x.k], 1)])};
  if (part === 'truong' || part === 'pop') return {...base, k: part === 'pop' ? 'Nhà cung cấp' : 'Trường', t: part === 'pop' ? 'Điểm truy nhập' : 'Router biên đơn', b: 'Router biên vẫn là một phần tử duy nhất, nối tiếp với mọi đường: phần ngừng còn lại khi đã tách ngả nằm chủ yếu ở đây.', rows: [['A router', () => vn(S.kq.Ar, 5)]]};
  return null;
}

// ---------------- góc nhìn
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 0, ty: 1.4, tz: 0, az: -50 + 3 * Math.sin(t * 0.05), el: 34, d: 36, sx: 0, sy: -10} : {tx: 0.4, ty: 1.4, tz: 0, az: -8 + 4 * Math.sin(t * 0.05), el: 30, d: 38, sx: 0, sy: -10}),
  pho: () => ({tx: 0.6, ty: 0.6, tz: 2.8, az: 14, el: 22, d: 15, sx: 0, sy: -30}),
  dial: () => ({tx: 0, ty: 3.4, tz: -0.4, az: 0, el: 6, d: 10, sx: 0, sy: -30}),
};

// ---------------- bài giảng · tiết 4 (45 phút), theo mục 1.6.5 và 2.5.1–2.5.2 của giáo trình; giáo án: tools/giao-an-mang/tk-san-sang.json
// Tên bước (t) phải khớp từng bước của giáo án; tests/smoke.py kiểm.
const CAP = [
  {k: 'Tiết 4 · mục 1.6.5', t: 'Hai đường lên có chắc gấp đôi?', b: 'Trường thuê hai đường cáp quang tới nhà cung cấp để không bao giờ mất mạng. Câu hỏi của thiết kế: hai đường đó có thể cùng hỏng không? Tiết này trả lời bằng hai cách, công thức độ sẵn sàng và mô phỏng 400 năm vận hành, rồi đi tiếp tới câu hỏi thứ hai: hỏng rồi thì phục hồi trong bao lâu và mất bao nhiêu dữ liệu.', e: 'dự phòng · miền lỗi · RTO · RPO'},
  {k: 'Mục 1.6.5, 2.5.1', t: 'Sẵn sàng, tin cậy, bảo trì là ba chuyện khác nhau', b: 'Độ sẵn sàng là xác suất hệ thống đang ở trạng thái cung cấp được dịch vụ, hay tỉ lệ thời gian dùng được. Độ tin cậy là xác suất chạy không lỗi suốt một khoảng thời gian. Khả năng bảo trì là mức dễ phát hiện, sửa và khôi phục. Ba khái niệm áp cho thiết bị, liên kết, tuyến đường, nguồn điện, và cả quy trình vận hành.', e: 'sẵn sàng ≠ tin cậy ≠ bảo trì'},
  {k: 'Phương trình 2.17', t: 'Độ tin cậy giảm dần theo thời gian', b: 'Nếu thời gian giữa hai lỗi phân bố mũ với cường độ lỗi λ = 1/MTBF, xác suất còn chạy sau thời gian t là e^(−λt). Một đường MTBF 2 000 giờ: chạy trọn một tháng không lỗi với xác suất khoảng 0,69, trọn một năm chỉ khoảng 0,012. Gần như chắc chắn hỏng ít nhất một lần trong năm, vậy mà độ sẵn sàng vẫn 0,999 vì sửa nhanh.', e: 'R(t) = e^(−λt)   (2.17)'},
  {k: 'Phương trình 1.19 · bài tập 8 chương 2', t: 'MTBF 2 000 giờ, MTTR 2 giờ', b: 'A = 2 000 / 2 002 ≈ 0,999. Nghe rất cao, nhưng 0,1 % của một năm là khoảng 8 giờ 45 phút mất dịch vụ. Với một trường đang thi trực tuyến, chừng đó có thể là quá nhiều. Công thức chỉ là xấp xỉ trung bình dài hạn, không nói lần ngừng rơi vào lúc nào.', e: 'A = MTBF / (MTBF + MTTR)   (1.19), (2.18)',
    ask: {q: '"Ba số chín" (99,9 %) tương đương khoảng bao nhiêu thời gian ngừng mỗi năm?', o: ['Khoảng 53 phút', 'Khoảng 8,8 giờ', 'Khoảng 3,6 ngày'], a: 1, e: '0,001 × 8 766 giờ ≈ 8,8 giờ. Bốn số chín mới là khoảng 53 phút.'}},
  {k: 'MTBF và MTTR', t: 'Hai cách tăng độ sẵn sàng', b: 'Kéo MTBF lên là thiết bị tốt hơn, môi trường tốt hơn hoặc thêm dự phòng. Kéo MTTR xuống là giám sát, quy trình thay thế, tự động hoá cấu hình, khả năng rollback và khoanh vùng lỗi. Đẩy MTBF lên 10 000 giờ hay hạ MTTR xuống nửa giờ đều cho độ sẵn sàng tương đương; thường cách thứ hai rẻ hơn.', e: 'A tăng khi MTBF tăng hoặc MTTR giảm'},
  {k: 'Miền lỗi chung', t: 'Một gầu máy xúc, hai sợi cáp', b: 'Hai sợi đang nằm chung một ống ở phố trước. Bấm Máy xúc đào: cả hai đứt cùng lúc, dịch vụ ngừng tới khi đội cáp hàn nối xong. Hai đường độc lập về thiết bị nhưng chung một miền lỗi: ống cáp phải đếm như một phần tử nối tiếp với cả hai.', e: 'ống chung nối tiếp với cả hai đường'},
  {k: 'Phương trình 4.14', t: 'Đường B đi ngõ sau', b: 'Chuyển sang Tách hai ngả rồi đào lại. Lần này chỉ đường A đứt; định tuyến phát hiện và chuyển sang B trong khoảng một giây. Với n nhánh song song và độc lập, xác suất cả hệ mất dịch vụ là tích xác suất từng nhánh mất. Theo công thức, thời gian ngừng mỗi năm giảm từ khoảng 740 xuống khoảng 24 phút; Monte Carlo cho con số gần đó.', e: 'A_k = 1 − Π (1 − A_i)   (4.14)',
    ask: {q: 'Hai đường, mỗi đường A = 0,999, chung một ống có A = 0,9986. Độ sẵn sàng cả hệ gần nhất với?', o: ['0,999999 như hai đường song song', '0,9986, bị ống chung giới hạn', '0,998'], a: 1, e: 'Phần song song gần bằng 1 nhưng nhân với ống chung 0,9986: cả hệ không vượt được phần tử nối tiếp yếu nhất.'}},
  {k: 'Hình 1.6', t: 'RTO càng nhỏ càng đắt', b: 'RTO là thời gian tối đa chấp nhận được để khôi phục dịch vụ. RTO càng nhỏ thì yêu cầu về dự phòng, tự động chuyển mạch, giám sát và vận hành càng cao: chi phí khôi phục tăng, tổn thất do ngừng giảm. Vì vậy RTO đặt theo mức quan trọng của từng dịch vụ, không áp một ngưỡng cho mọi ứng dụng.', e: 'RTO nhỏ → chi phí phục hồi tăng, tổn thất giảm'},
  {k: 'Phương trình 2.19', t: 'Bốn pha của một lần phục hồi', b: 'Đồng hồ chia một lần phục hồi thành bốn cung: phát hiện, khoanh vùng, sửa hoặc chuyển, xác nhận. Chung ống, máy xúc đào: khoanh vùng nửa giờ, hàn nối mười hai giờ, xác nhận mười lăm phút, vượt xa RTO một giờ. Tách bốn pha mới biết nên đầu tư vào giám sát, dự phòng hay quy trình sửa chữa.', e: 'T_detect + T_isolate + T_repair + T_verify ≤ RTO   (2.19)'},
  {k: 'Phương trình 2.19 · pha phát hiện', t: 'Phát hiện chậm cũng là ngừng', b: 'Đã tách ngả, đổi sang OSPF hello: router chờ 40 giây không nghe thấy hàng xóm mới kết luận đường hỏng. Mỗi lần hỏng một đường là 40 giây ngừng, cộng dồn qua năm. BFD phát hiện trong khoảng 150 ms: cùng hai đường, ít ngừng hơn. Khi đã có dự phòng, pha phát hiện thường là pha dài nhất.', e: 'BFD 3 × 50 ms so với OSPF 40 s'},
  {k: 'Mục 2.5.2 · hình 1.7', t: 'Mất bao nhiêu dữ liệu thì chấp nhận được', b: 'RTO hỏi phục hồi trong bao lâu; RPO hỏi được phép mất tối đa bao nhiêu dữ liệu khi khôi phục. Với mạng, RPO gắn với cấu hình, log, cơ sở dữ liệu quản trị. Nếu sao lưu cấu hình mỗi ngày mà router hỏng cuối ngày, mọi thay đổi trong ngày mất theo. Chu kỳ sao lưu phải không dài hơn RPO.', e: 'chu kỳ sao lưu ≤ RPO',
    ask: {q: 'Sao lưu cấu hình mỗi 24 giờ, RPO đặt 4 giờ. Kết luận?', o: ['Đạt, vì có sao lưu', 'Không đạt: tệ nhất mất 24 giờ thay đổi', 'Đạt nếu RTO nhỏ'], a: 1, e: 'Tệ nhất là mất trọn một chu kỳ 24 giờ > 4 giờ. Cần sao lưu ít nhất mỗi 4 giờ, hoặc sao lưu khi có thay đổi.'}},
  {k: 'Kiểm mô hình', t: 'Công thức và 400 năm mô phỏng', b: 'Thanh công thức và thanh Monte Carlo gần nhau: cách tính nối tiếp, song song là đúng. Chỗ chúng lệch là thời gian chuyển đường, thứ công thức 1.19 không chứa. Muốn kết luận về dịch vụ thật, phải đưa cả quy trình phục hồi vào mô hình.', e: 'công thức ≈ Monte Carlo, trừ phần chuyển đường'},
  {k: 'Tổng kết · bài tập 8', t: 'Dự phòng chỉ có ích khi độc lập', b: 'Độ sẵn sàng tăng bằng MTBF lớn hoặc MTTR nhỏ; song song chỉ có ích khi các nhánh không chung miền lỗi; RTO đặt theo mức quan trọng và chia thành bốn pha để biết đầu tư vào đâu; RPO quyết định chu kỳ sao lưu. Về nhà: bài tập 8 chương 2 và phiếu bài tập. Tiết sau: vòng vận hành có kiểm chứng.', e: 'độc lập · bốn pha · RTO theo dịch vụ · sao lưu ≤ RPO'},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'});
at(11, {cap: 1});
at(22, {cap: 2}); at(24, {slide: 'mtbfL', to: LOGC(10000, 500, 50000), dur: 1.5}); at(30, {click: 'bt28'});
at(33, {cap: 3}); at(33.5, {click: 'bt28'});
at(44, {cap: 4}); at(45, {slide: 'mtbfL', to: LOGC(10000, 500, 50000), dur: 1.5}); at(49, {click: 'bt28'}); at(49.5, {slide: 'mttrL', to: LOGC(0.5, 0.5, 48), dur: 1.5}); at(54, {click: 'bt28'});
at(55, {cap: 5}); at(55.5, {click: 'chung'}); at(56, {click: 'v_pho'}); at(57.5, {click: 'dao'}); at(64, {click: 'v_hero'});
at(67, {cap: 6}); at(67.5, {click: 'tach'}); at(69, {click: 'v_pho'}); at(70, {click: 'dao'}); at(76, {click: 'v_hero'});
at(79, {cap: 7}); at(79.5, {click: 'v_dial'}); at(81, {slide: 'rto', to: LOGC(1 / 60, 1 / H, 48), dur: 2}); at(86, {slide: 'rto', to: LOGC(1, 1 / H, 48), dur: 1.2});
at(90, {cap: 8}); at(90.5, {click: 'chung'}); at(91.5, {click: 'dao'});
at(101, {cap: 9}); at(101.5, {click: 'tach'}); at(102, {click: 'hello'}); at(103, {click: 'hong_a'}); at(107, {click: 'bfd'}); at(107.5, {click: 'hong_a'});
at(112, {cap: 10}); at(112.5, {click: 'v_hero'}); at(113, {slide: 'bk', to: LOGC(72, 0.25, 168), dur: 1.5}); at(118, {slide: 'bk', to: LOGC(12, 0.25, 168), dur: 1.2});
at(124, {cap: 11});
at(135, {cap: 12});
ev.sort((a, b) => a.at - b.at);

sim.reset(); tinh(); S.dirty = false;
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 148}, firstView: 'hero', extra: [{key: 'dao', label: 'Máy xúc đào'}],
  keys: {1: 'v_hero', 2: 'v_pho', 3: 'v_dial', d: 'dao'}});
