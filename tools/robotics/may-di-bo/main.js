// Máy đi bộ 30 m (Stilt của AnyMachine, MIT): trang chạy trực tiếp cho Vật lí 10.
// Mô hình, khung xương 104 xương và ba chuyển động lấy nguyên từ stilt.glb của AnyMachine (apekshik/anymachine, MIT), nén
// meshopt + WebP bằng gltf-transform (35,8 MB → 6,6 MB, giữ tên 160 bộ phận). Mọi số đo hình học đọc trực tiếp từ khung xương
// lúc chạy; thông số dáng đi và xi lanh lấy từ stilt_info.json của AnyMachine. Khối lượng, áp suất dầu, cách chia khối lượng
// để tìm trọng tâm là giả định của bài (ghi rõ trong bảng và thẻ soi).
// Bài dạy: tốc độ và tính tương đối của chuyển động (bản hoạt hình đi tại chỗ), trọng tâm và mặt chân đế, mô men lực ở khớp,
// F = p·A. Bảng 06 làm lại phép kiểm của AnyMachine ngay trong trình duyệt: cần pít tông luôn nằm trong xi lanh, chân chống
// không trượt trên đất.
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {createStage} from '../kit/stage.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {picker, vn} from '../kit/soi.js';

const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 30, grid: 1, fade: 70, fov: 30, near: 0.3, far: 600});
const ui = createUI(app);
const url = (n) => (ASSET_MAP ? ASSET_MAP[n] : `./may/${n}`);

// ---------------- số liệu của mô hình (AnyMachine stilt_info.json, stilt_anchors.json)
const SRC_AM = 'Mô hình và số đo: AnyMachine, thí nghiệm 5 “Stilt” (Apekshik Panigrahi, MIT, github.com/apekshik/anymachine): stilt.glb, stilt_info.json, stilt_anchors.json, NOTES.md. Máy là thiết kế tưởng tượng dựng từ một bức tranh, không phải máy có thật.';
const AM = {
  h: 29.98, len: {thigh: 8.55, shin: 7.55, tarsus: 5.05}, hip: 21.1,
  walk: {frames: 132, fps: 24, stride: 6.0, swing: 0.34, lift: 1.9, sway: 0.95, phase: {RL: 0, FL: 0.14, RR: 0.5, FR: 0.64}},
  act: { // xi lanh Lc, cần Lr (m), hành trình lấy mẫu qua mọi chuyển động, tay đòn nhỏ nhất
    hip: {Lc: 2.256, Lr: 2.374, s: [2.556, 4.387], lev: 1.949},
    knee: {Lc: 2.422, Lr: 2.545, s: [2.722, 4.687], lev: 1.085},
    ankle: {Lc: 2.273, Lr: 2.24, s: [2.673, 4.233], lev: 0.879},
    elbow: {Lc: 2.892, Lr: 1.212, s: [3.192, 3.718]},
  },
};
const CYC = AM.walk.frames / AM.walk.fps; // 5,5 s
const ADV = AM.walk.stride / (1 - AM.walk.swing); // 9,09 m mỗi chu kì: tốc độ đất giữ chân chống đứng yên
const V = ADV / CYC; // 1,65 m/s
const G = 9.81;
// giả định của bài: chia khối lượng để tìm trọng tâm (thân và cánh, bốn chân, hai tay, cổ và đầu)
const MF = {body: 0.4, leg: 0.11, arm: 0.03, head: 0.1};

// ---------------- nạp mô hình
const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
const gltf = await loader.loadAsync(url('stilt.glb'));
const world = new THREE.Group(); st.scene.add(world); // hệ quy chiếu đất
const rig = new THREE.Group(); world.add(rig); // máy: dời theo x khi xem trong hệ đất
const model = gltf.scene; rig.add(model);
const parts = {};
model.traverse((o) => {
  if (o.isMesh) { o.castShadow = o.receiveShadow = true; o.frustumCulled = false; parts[o.name.replace(/\d{3}$/, '')] = o; o.userData.part = o.name.replace(/\d{3}$/, ''); }
});
const bone = (n) => model.getObjectByName(n);
const LEGS = ['FL', 'FR', 'RL', 'RR'];
const B = Object.fromEntries(LEGS.map((L) => [L, {hip: bone(`thigh_${L}`), knee: bone(`shin_${L}`), ankle: bone(`tarsus_${L}`), foot: bone(`foot_${L}`),
  act: {hip: [bone(`act_hip_top_${L}`), bone(`act_hip_bot_${L}`)], knee: [bone(`act_knee_top_${L}`), bone(`act_knee_bot_${L}`)], ankle: [bone(`act_ankle_top_${L}`), bone(`act_ankle_bot_${L}`)]}}]));
const ARM = ['L', 'R'].map((s) => ({up: bone(`upperarm_${s}`), fo: bone(`forearm_${s}`), ha: bone(`hand_${s}`), act: [bone(`act_elbow_top_${s}`), bone(`act_elbow_bot_${s}`)]}));
const pelvis = bone('pelvis'), headB = bone('head'), neck3 = bone('neck_03');
const mixer = new THREE.AnimationMixer(model);
const clip = (n) => gltf.animations.find((a) => a.name === n);
const ACT = {walk: mixer.clipAction(clip('A_Stilt_Walk')), reach: mixer.clipAction(clip('A_Stilt_Reach')), head: mixer.clipAction(clip('A_Stilt_HeadTurn'))};
for (const a of Object.values(ACT)) { a.play(); a.enabled = false; }
const DUR = {walk: ACT.walk.getClip().duration, reach: ACT.reach.getClip().duration, head: ACT.head.getClip().duration};
const poseAt = (name, t) => { for (const [k, a] of Object.entries(ACT)) { a.enabled = k === name; a.weight = 1; } ACT[name].time = t; mixer.update(0); model.updateMatrixWorld(true); };

// đường kính xi lanh gối vẽ trên mô hình: hai cạnh nhỏ của khối bao (lúc nghỉ), bỏ phần tai
const cylDia = (() => { const g = parts.Act_Knee_Cyl_FL?.geometry; if (!g) return null; g.computeBoundingBox(); const s = new THREE.Vector3(); g.boundingBox.getSize(s); const a = [s.x, s.y, s.z].sort((x, y) => x - y); return a[0]; })();

// người 1,75 m cạnh chân trước trái (như ảnh của AnyMachine) và hàng cọc mốc 3 m dọc đường đi
const M_ = {man: new THREE.MeshStandardMaterial({color: '#3a3d44', roughness: 0.6}), post: new THREE.MeshStandardMaterial({color: '#c9ccd2', roughness: 0.6}),
  sig: new THREE.MeshBasicMaterial({color: '#CC2A53', depthTest: false, transparent: true}), sig2: new THREE.LineBasicMaterial({color: '#CC2A53', depthTest: false, transparent: true}),
  ghost: new THREE.MeshBasicMaterial({color: '#8E8E92', depthTest: false, transparent: true}), amber: new THREE.LineBasicMaterial({color: '#D9A065', depthTest: false, transparent: true})};
const man = new THREE.Group(); world.add(man);
{ const b = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 1.05, 6, 12), M_.man); b.position.y = 0.73; const h = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 12), M_.man); h.position.y = 1.62;
  for (const m of [b, h]) { m.castShadow = true; man.add(m); } man.position.set(7.2, 0, -4.4); }
const posts = new THREE.Group(); world.add(posts);
for (let i = -12; i <= 12; i++) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.9, 0.16), M_.post); p.position.set(i * 3, 0.45, 7.5); p.castShadow = true; posts.add(p); }
// lớp phủ: mặt chân đế (đỏ), trọng tâm và đường thẳng đứng qua nó, trọng tâm khi bỏ lắc thân (xám)
const ov = new THREE.Group(); ov.renderOrder = 10; rig.add(ov);
const polyGeo = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(15), 3));
const poly = new THREE.Line(polyGeo, M_.sig2); poly.renderOrder = 11; ov.add(poly);
const gDot = new THREE.Mesh(new THREE.CircleGeometry(0.42, 28).rotateX(-Math.PI / 2), M_.sig); gDot.renderOrder = 12; ov.add(gDot);
const gLineGeo = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(6), 3));
const gLine = new THREE.LineSegments(gLineGeo, new THREE.LineDashedMaterial({color: '#CC2A53', dashSize: 0.6, gapSize: 0.4, depthTest: false, transparent: true})); gLine.renderOrder = 11; ov.add(gLine);
const g2Dot = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.45, 28).rotateX(-Math.PI / 2), M_.ghost); g2Dot.renderOrder = 12; ov.add(g2Dot);
const actLineGeo = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(12), 3));
const actLine = new THREE.LineSegments(actLineGeo, M_.amber); actLine.renderOrder = 11; ov.add(actLine);

// ---------------- đo trên khung xương
const v3 = () => new THREE.Vector3();
const wpos = (o, out = v3()) => o.getWorldPosition(out);
const toRig = (p) => rig.worldToLocal(p.clone()); // toạ độ trong khung máy (bỏ phần dời của hệ đất)
const FOOT0 = 0.6; // tâm bi chân cao 0,6 m khi chạm đất (NOTES.md)
// chân chạm đất: trong lúc đi lấy theo pha của chính mô hình (mỗi chân trên không 0,34 chu kì kể từ pha của nó, stilt_info.json);
// chuyển động khác: bi chân không cao quá 0,12 m so với lúc đặt
const wrap1 = (x) => ((x % 1) + 1) % 1;
const stance = (L, ph) => wrap1(ph - AM.walk.phase[L]) >= AM.walk.swing;
const planted = (L, ph = null) => (ph !== null ? stance(L, ph) : toRig(wpos(B[L].foot)).y < FOOT0 + 0.12);
function com(noSway, sway0) { // trọng tâm theo cách chia khối lượng giả định
  const acc = v3(); let m = 0;
  const add = (p, w) => { acc.addScaledVector(p, w); m += w; };
  const pv = toRig(wpos(pelvis)); const dz = noSway ? pv.z - sway0 : 0;
  const up = (p) => { p.z -= dz; return p; }; // thân, tay, cổ và đầu dời ngang theo hông khi lắc
  add(up(pv), MF.body);
  for (const L of LEGS) { const b = B[L], a = toRig(wpos(b.hip)), k = toRig(wpos(b.knee)), n = toRig(wpos(b.ankle)), f = toRig(wpos(b.foot)), l = AM.len;
    const mid = v3().addScaledVector(a.clone().add(k), 0.5 * l.thigh).addScaledVector(k.clone().add(n), 0.5 * l.shin).addScaledVector(n.clone().add(f), 0.5 * l.tarsus).multiplyScalar(1 / (l.thigh + l.shin + l.tarsus));
    add(mid, MF.leg); }
  for (const A of ARM) add(up(toRig(wpos(A.up)).add(toRig(wpos(A.fo))).add(toRig(wpos(A.ha))).multiplyScalar(1 / 3)), MF.arm);
  add(up(toRig(wpos(neck3)).add(toRig(wpos(headB))).multiplyScalar(0.5)), MF.head);
  return acc.multiplyScalar(1 / m);
}
// biên ổn định: khoảng cách có dấu từ hình chiếu trọng tâm tới mép đa giác chân đế (dương: ở trong). Hai chân: đoạn thẳng, luôn âm.
function margin(g, pts) {
  const segD = (p, a, b) => { const ab = [b[0] - a[0], b[1] - a[1]], ap = [p[0] - a[0], p[1] - a[1]], L2 = ab[0] ** 2 + ab[1] ** 2 || 1e-9; const u = Math.max(0, Math.min(1, (ap[0] * ab[0] + ap[1] * ab[1]) / L2)); return Math.hypot(ap[0] - u * ab[0], ap[1] - u * ab[1]); };
  if (pts.length < 2) return -9;
  if (pts.length === 2) return -segD(g, pts[0], pts[1]);
  let inside = true, d = 1e9; const n = pts.length, sgn = [];
  for (let i = 0; i < n; i++) { const a = pts[i], b = pts[(i + 1) % n]; sgn.push(Math.sign((b[0] - a[0]) * (g[1] - a[1]) - (b[1] - a[1]) * (g[0] - a[0]))); d = Math.min(d, segD(g, a, b)); }
  inside = sgn.every((s) => s >= 0) || sgn.every((s) => s <= 0);
  return inside ? d : -d;
}
const hull = (pts) => { // đa giác lồi (tối đa 4 điểm): sắp theo góc quanh tâm
  if (pts.length < 3) return pts; const c = pts.reduce((s, p) => [s[0] + p[0] / pts.length, s[1] + p[1] / pts.length], [0, 0]);
  return [...pts].sort((a, b) => Math.atan2(a[1] - c[1], a[0] - c[0]) - Math.atan2(b[1] - c[1], b[0] - c[0]));
};
const distLine = (p, a, b) => { const ab = v3().subVectors(b, a).normalize(); const ap = v3().subVectors(p, a); return ap.sub(ab.multiplyScalar(ap.dot(ab))).length(); };
function measureLeg(L) { const b = B[L], o = {};
  for (const j of ['hip', 'knee', 'ankle']) { const [t, s] = b.act[j]; const a = toRig(wpos(t)), c = toRig(wpos(s)); o[j] = {L: a.distanceTo(c), a, c}; }
  const k = toRig(wpos(b.knee)), f = toRig(wpos(b.foot));
  o.lever = distLine(k, o.knee.a, o.knee.c); // tay đòn của xi lanh gối: khoảng cách từ trục gối tới đường xi lanh
  o.r = Math.hypot(f.x - k.x, f.z - k.z); // tay đòn của phản lực đất (thẳng đứng) đối với gối: khoảng ngang gối–bàn chân
  o.k = k; o.f = f; return o;
}

// ---------------- lấy mẫu một chu kì đi (132 khung): chân chạm đất, trọng tâm, biên ổn định, trượt chân
const N = AM.walk.frames;
const PRE = [];
{ let z0 = 0; for (let i = 0; i < N; i++) { poseAt('walk', (i / N) * DUR.walk); z0 += toRig(wpos(pelvis)).z / N; }
  for (let i = 0; i < N; i++) {
    const t = (i / N) * DUR.walk; poseAt('walk', t);
    const on = LEGS.filter((L) => planted(L, i / N)), feet = Object.fromEntries(LEGS.map((L) => { const p = toRig(wpos(B[L].foot)); return [L, [p.x, p.z]]; }));
    const pts = hull(on.map((L) => feet[L])), g = com(false), g2 = com(true, z0);
    PRE.push({t, on, feet, m: margin([g.x, g.z], pts), m2: margin([g2.x, g2.z], pts), sway: toRig(wpos(pelvis)).z - z0, knee: measureLeg('FL')});
  }
  PRE.z0 = z0; }
// trượt chân trong hệ đất: trong mỗi pha chống, x_đất = x_tại_chỗ + V·t phải gần như không đổi. Bỏ 2 khung đầu và cuối mỗi pha
// (lúc bàn chân đang hạ xuống và đang nhấc lên, chân còn giảm tốc).
const TRIM = 2;
const SLIP = Object.fromEntries(LEGS.map((L) => { let run = [], worst = 0;
  const flush = () => { const r = run.slice(TRIM, run.length - TRIM); if (r.length > 4) { const xs = r.map(([t, x]) => x + V * t); worst = Math.max(worst, Math.max(...xs) - Math.min(...xs)); } run = []; };
  for (let k = 0; k < 2 * N; k++) { const s = PRE[k % N], t = s.t + (k >= N ? DUR.walk : 0); if (s.on.includes(L)) run.push([t, s.feet[L][0]]); else flush(); } flush(); return [L, worst]; }));
const SLIPMAX = Math.max(...Object.values(SLIP));
const STAT = (() => { const n3 = PRE.filter((s) => s.on.length >= 3), n2 = PRE.filter((s) => s.on.length === 2);
  const inn = (arr, k) => arr.filter((s) => s[k] > 0).length / (arr.length || 1);
  return {f3: n3.length / N, f2: n2.length / N, nbar: PRE.reduce((a, s) => a + s.on.length, 0) / N, in3: inn(n3, 'm'), in3b: inn(n3, 'm2'),
    min3: Math.min(...n3.map((s) => s.m)), dev2: Math.max(...n2.map((s) => -s.m), 0), dev2b: Math.max(...n2.map((s) => -s.m2), 0),
    rngKnee: [Math.min(...PRE.map((s) => s.knee.knee.L)), Math.max(...PRE.map((s) => s.knee.knee.L))], swayAmp: (Math.max(...PRE.map((s) => s.sway)) - Math.min(...PRE.map((s) => s.sway))) / 2}; })();

window.MAY = {PRE, SLIP, STAT}; // cho kiểm thử và công cụ

// ---------------- trạng thái
const S = {t: 0, act: 'walk', tt: 0, play: true, ground: false, sway: true, labels: true, poly: true, m: 120, p: 25, x: 0, cur: null, log: []};
const say = (txt) => { if (S.log[0] === txt) return; S.log.unshift(txt); S.log.length = Math.min(S.log.length, 2); };

// ---------------- bảng
ui.header({code: 'VL-M', kicker: 'MÁY ĐI BỘ 30 M · BỐN CHÂN, HAI TAY · XI LANH THUỶ LỰC Ở MỌI KHỚP · MÔ HÌNH ANYMACHINE (MIT)', title: 'Máy đi bộ 30 m', sub: 'TỐC ĐỘ · TÍNH TƯƠNG ĐỐI · TRỌNG TÂM · MẶT CHÂN ĐẾ · MÔ MEN', hub: HUB_URL,
  right: [['30 m', 'CHIỀU CAO'], ['6,0 m', 'BƯỚC CHÂN'], [`${vn(V, 2)} m/s`, 'TỐC ĐỘ'], ['104', 'XƯƠNG']]});
const BEATS = ['Toàn thân', 'Chân', 'Dáng đi', 'Mấy chân', 'Chân đế', 'Lắc thân', 'Hai chân', 'Tương đối', 'Tốc độ', 'Trượt', 'Mô men', 'p·A', 'Kiểm máy'];
const beatEl = ui.add(`<div style="position:absolute;left:348px;top:84px;width:904px;display:flex;gap:3px">${BEATS.map((b, i) => `<div data-b="${i}" style="flex:1;min-width:0;padding:3px 0 5px;border-bottom:2px solid ${C.line};font:600 10.5px/1.2 'Be Vietnam Pro',system-ui,sans-serif;color:${C.mute};white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><span style="font:500 10.5px 'JetBrains Mono',monospace;color:${C.faint};margin-right:4px">${String(i + 1).padStart(2, '0')}</span>${b}</div>`).join('')}</div>`);
const setBeat = (i) => beatEl.querySelectorAll('[data-b]').forEach((n) => { const on = +n.dataset.b === i; n.style.borderBottomColor = on ? C.or : C.line; n.style.color = on ? C.ink : C.mute; });

ui.panel(28, 112, 300, 236, 'DÁNG ĐI BỐN NHỊP', '01');
const gaitSvg = ui.svg(42, 146, 272, 62);
const gRows = ['THỨ TỰ CHÂN', 'TRÊN KHÔNG', 'SỐ CHÂN CHẠM ĐẤT', 'TRUNG BÌNH'].map((n, k) => [ui.text(42, 222 + k * 20, n), ui.text(186, 220 + k * 20, '', 'v', 'width:128px;text-align:right')]);
const gTxt = ui.text(42, 304, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:10.5px;white-space:normal;width:272px;line-height:1.45');
ui.panel(28, 360, 300, 228, 'ĐIỀU KHIỂN', '02');
ui.buttons([['walk', 'ĐI'], ['reach', 'CÚI VỚI TAY'], ['head', 'QUAY ĐẦU'], ['pause', 'DỪNG'], ['sway', 'LẮC THÂN'], ['ground', 'HỆ ĐẤT']], 42, 394, 272);
const SL = [['tt', 'THỜI ĐIỂM'], ['m', 'KHỐI LƯỢNG'], ['p', 'ÁP SUẤT DẦU']];
const sl = Object.fromEntries(SL.map(([k, n], i) => [k, ui.slider(k, 42, 476 + i * 30, 272, n, {lw: 92, vw: 84})]));
ui.text(42, 566, 'KHỐI LƯỢNG VÀ ÁP SUẤT: GIẢ ĐỊNH CỦA BÀI');
ui.panel(28, 600, 300, 166, 'MẶT CHÂN ĐẾ · NHÌN TỪ TRÊN', '03');
const topSvg = ui.svg(42, 632, 140, 124);
const tRows = ['CHÂN ĐỠ', 'BIÊN', 'TRỌNG TÂM'].map((n, k) => [ui.text(194, 636 + k * 38, n), ui.text(194, 650 + k * 38, '', 'v', 'width:120px')]);

ui.panel(1272, 112, 300, 210, 'CHUYỂN ĐỘNG · HAI HỆ QUY CHIẾU', '04');
const vRows = ['HỆ QUY CHIẾU', 'THÂN SO VỚI ĐẤT', 'CHÂN CHỐNG SO VỚI THÂN', 'CHÂN CHỐNG SO VỚI ĐẤT', 'QUÃNG ĐƯỜNG / CHU KÌ'].map((n, k) => [ui.text(1286, 146 + k * 20, n), ui.text(1430, 144 + k * 20, '', 'v', 'width:128px;text-align:right')]);
const vTxt = ui.text(1286, 252, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:10.5px;white-space:normal;width:272px;line-height:1.45');
ui.panel(1272, 334, 300, 246, 'KHỚP GỐI TRƯỚC TRÁI · M = F·d', '05');
const kRows = ['CHÂN', 'LỰC ĐỠ N = mg / n', 'TAY ĐÒN CỦA N (r)', 'MÔ MEN M = N·r', 'TAY ĐÒN XI LANH (d)', 'LỰC XI LANH F = M / d', 'ĐƯỜNG KÍNH PÍT TÔNG', 'ĐƯỜNG KÍNH VẼ TRÊN MÔ HÌNH'].map((n, k) => [ui.text(1286, 368 + k * 20, n), ui.text(1440, 366 + k * 20, '', 'v', 'width:118px;text-align:right')]);
const kTxt = ui.text(1286, 532, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:10.5px;white-space:normal;width:272px;line-height:1.45');
ui.panel(1272, 592, 300, 174, 'KIỂM MÁY · NHƯ ANYMACHINE', '06');
const chkSvg = ui.svg(1286, 624, 272, 84);
const chkTxt = ui.text(1286, 714, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:10.5px;white-space:normal;width:272px;line-height:1.45');
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_side', 'BÊN'], ['v_top', 'TRÊN'], ['v_knee', 'KHỚP GỐI'], ['v_man', 'NGƯỜI 1,75 M'], ['labels', 'NHÃN']], 360, 120, 640);
ui.text(362, 664, 'TRẠNG THÁI');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
{ const set = ui.cap.set; ui.cap.set = (c, i, n) => { setBeat(i); set(c, i, n); }; }
const alert = ui.alert(800, 186);
ui.callouts([{key: 'knee', title: 'XI LANH GỐI', sub: '—'}, {key: 'foot', title: 'BÀN CHÂN TRƯỚC TRÁI', sub: '—'}, {key: 'g', title: 'TRỌNG TÂM', sub: '—'}, {key: 'man', title: 'NGƯỜI 1,75 M', sub: 'ĐỂ SO KÍCH THƯỚC'}]);
const callSub = Object.fromEntries(['knee', 'foot', 'g', 'man'].map((k, i) => [k, ui.root.querySelectorAll('.call')[i]?.querySelector('span')]));

// ---------------- mô phỏng
const clipLen = () => DUR[S.act];
function sample() { // đo ở tư thế hiện tại
  const ph = S.act === 'walk' ? S.tt / DUR.walk : null, on = LEGS.filter((L) => planted(L, ph)), feet = Object.fromEntries(LEGS.map((L) => { const p = toRig(wpos(B[L].foot)); return [L, [p.x, p.z]]; }));
  const pts = hull(on.map((L) => feet[L])), g = com(false), g2 = com(true, PRE.z0);
  return {on, feet, pts, g, g2, m: margin([g.x, g.z], pts), m2: margin([g2.x, g2.z], pts), leg: measureLeg('FL'), elbow: (() => { const [a, c] = ARM[0].act; return toRig(wpos(a)).distanceTo(toRig(wpos(c))); })()};
}
const sim = {
  S, root: world,
  reset() { Object.assign(S, {t: 0, act: 'walk', tt: 0, play: true, ground: false, sway: true, labels: true, m: 120, p: 25, x: 0}); poseAt('walk', 0); S.cur = sample(); say('đi tại chỗ · như trên máy chạy bộ'); },
  busy: () => false,
  isOn: (k) => (k === S.act && S.play) || (k === 'pause' && !S.play) || (k === 'sway' && S.sway) || (k === 'ground' && S.ground) || (k === 'labels' && S.labels),
  act(k) {
    if (k === 'walk' || k === 'reach' || k === 'head') { if (S.act !== k) S.tt = 0; S.act = k; S.play = true; say(k === 'walk' ? 'đi · bốn nhịp' : k === 'reach' ? 'cúi xuống, với tay chạm đất' : 'ngẩng đầu, nhìn trái, nhìn phải'); return; }
    if (k === 'pause') { S.play = !S.play; say(S.play ? 'chạy tiếp' : 'dừng hình · kéo thanh thời điểm'); return; }
    if (k === 'sway') { S.sway = !S.sway; say(S.sway ? 'trọng tâm thật (thân có lắc)' : 'xem thử: trọng tâm khi thân không lắc'); return; }
    if (k === 'ground') { S.ground = !S.ground; say(S.ground ? 'hệ quy chiếu đất: thân tiến, chân chống đứng yên' : 'hệ quy chiếu thân: đất và cọc mốc lùi lại'); return; }
    if (k === 'labels') S.labels = !S.labels;
  },
  slide(k, t) {
    if (k === 'tt') { S.tt = t * clipLen(); S.play = false; }
    if (k === 'm') S.m = 60 + 140 * t;
    if (k === 'p') S.p = 10 + 25 * t;
  },
  step(dt) {
    S.t += dt;
    if (S.play) { S.tt += dt; if (S.tt >= clipLen()) { S.tt -= clipLen(); if (S.act !== 'walk') { S.act = 'walk'; S.tt = 0; } } }
    poseAt(S.act, S.tt);
    // hệ đất: máy tiến với V (chỉ khi đang đi), cọc mốc và người đứng yên; hệ thân: máy tại chỗ, cọc mốc và người lùi với V.
    // Cọc cách nhau 3 m nên dời cả hàng đúng 3 m là không thấy; người quay lại phía trước sau mỗi 60 m.
    if (S.act === 'walk' && S.play) S.x += V * dt;
    if (S.x > 150) S.x -= 150;
    const wrap = (x, a) => ((x % a) + a) % a;
    if (S.ground) { rig.position.x = S.x; posts.position.x = 3 * Math.floor(S.x / 3); man.position.x = 7.2 + 60 * Math.floor((S.x + 20) / 60); }
    else { rig.position.x = 0; posts.position.x = -wrap(S.x, 3); man.position.x = 7.2 + 30 - wrap(S.x + 30, 60); }
    S.cur = sample();
  },
  shadowAt() { return new THREE.Vector3(rig.position.x + 1, 8, 0); },
  pick: (hits) => soi(hits),
  measure() { // tỉ lệ đo trên mô hình so với số đo trong NOTES.md của AnyMachine
    poseAt('walk', 0); const bx = new THREE.Box3().setFromObject(model, true), s = v3(); bx.getSize(s);
    return [{name: 'chiều cao (m), NOTES: 29,98', got: s.y, want: AM.h, tol: 0.03}, {name: 'tốc độ đất (m/s) = 9,09 / 5,5', got: V, want: 1.653, tol: 0.01}];
  },
  draw() {
    const c = S.cur, nOn = c.on.length;
    // lớp phủ chân đế và trọng tâm (trong khung máy)
    const P = polyGeo.attributes.position.array; const pts = c.pts.length >= 2 ? [...c.pts, c.pts[0]] : [];
    for (let i = 0; i < 5; i++) { const p = pts[Math.min(i, pts.length - 1)] || [0, 0]; P[i * 3] = p[0]; P[i * 3 + 1] = 0.06; P[i * 3 + 2] = p[1]; }
    polyGeo.attributes.position.needsUpdate = true; polyGeo.setDrawRange(0, pts.length); poly.visible = S.labels && pts.length >= 2;
    gDot.position.set(c.g.x, 0.07, c.g.z); g2Dot.position.set(c.g2.x, 0.08, c.g2.z); g2Dot.visible = S.labels && !S.sway; gDot.visible = S.labels;
    const GL = gLineGeo.attributes.position.array; GL.set([c.g.x, c.g.y, c.g.z, c.g.x, 0.07, c.g.z]); gLineGeo.attributes.position.needsUpdate = true; gLine.computeLineDistances(); gLine.visible = S.labels;
    const kn = c.leg.knee, AL = actLineGeo.attributes.position.array; AL.set([kn.a.x, kn.a.y, kn.a.z, kn.c.x, kn.c.y, kn.c.z, c.leg.k.x, c.leg.k.y, c.leg.k.z, c.leg.f.x, c.leg.f.y + 0.6, c.leg.f.z]);
    actLineGeo.attributes.position.needsUpdate = true; actLine.visible = S.labels;
    const mm = S.sway ? c.m : c.m2;
    // bảng 01: biểu đồ bước 4 chân, vạch = thời điểm trong chu kì
    const ph = S.act === 'walk' ? S.tt / DUR.walk : null;
    { let s = ''; const W = 236, ord = ['RL', 'FL', 'RR', 'FR'], vnL = {RL: 'SAU T', FL: 'TRƯỚC T', RR: 'SAU P', FR: 'TRƯỚC P'};
      ord.forEach((L, i) => { const y = i * 15; s += `<text x="0" y="${y + 10}" font-family="JetBrains Mono" font-size="10.5" fill="${C.mute}">${vnL[L]}</text><rect x="36" y="${y}" width="${W}" height="11" fill="${C.ink}"/>`;
        // khoảng trên không lấy từ chính lấy mẫu (chân không chạm đất)
        let k0 = null; for (let k = 0; k <= N; k++) { const air = k < N && !PRE[k].on.includes(L); if (air && k0 === null) k0 = k; if (!air && k0 !== null) { s += `<rect x="${36 + (k0 / N) * W}" y="${y}" width="${((k - k0) / N) * W}" height="11" fill="#d5d8de"/>`; k0 = null; } } });
      if (ph !== null) s += `<line x1="${36 + ph * W}" x2="${36 + ph * W}" y1="0" y2="60" stroke="${C.or}" stroke-width="2"/>`;
      gaitSvg.innerHTML = s; }
    gRows[0][1].textContent = 'ST → TT → SP → TP'; gRows[1][1].textContent = `${vn(AM.walk.swing * 100, 0)} % chu kì`; gRows[2][1].textContent = `${nOn} chân`; gRows[3][1].textContent = `${vn(STAT.nbar, 2)} chân`;
    gTxt.innerHTML = `Đen: chân chạm đất, xám: chân trên không. ${vn(STAT.f3 * 100, 0)} % thời gian có 3 chân đỡ, ${vn(STAT.f2 * 100, 0)} % chỉ còn 2. Trung bình 4·(1 − 0,34) = 2,64 chân.`;
    // bảng 02
    sl.tt.set(S.tt / clipLen(), `${vn(S.tt, 1)} / ${vn(clipLen(), 1)} s`); sl.m.set((S.m - 60) / 140, `${vn(S.m, 0)} tấn`); sl.p.set((S.p - 10) / 25, `${vn(S.p, 0)} MPa`);
    // bảng 03: nhìn từ trên (x lên trên, trái sang trái)
    { const W = 140, H = 124, sc = 9; // x tiến lên, z (bên phải máy) sang phải màn hình
      const P2 = (p) => [W / 2 + p[1] * sc, H / 2 - p[0] * sc]; let s = `<rect x="0" y="0" width="${W}" height="${H}" fill="${C.chart}" stroke="${C.line}"/>`;
      if (c.pts.length >= 2) s += `<polygon points="${c.pts.map((p) => P2(p).map((v) => v.toFixed(1)).join(',')).join(' ')}" fill="rgba(204,42,83,.08)" stroke="#CC2A53" stroke-width="1.5"/>`;
      for (const L of LEGS) { const q = P2(c.feet[L]); s += `<circle cx="${q[0].toFixed(1)}" cy="${q[1].toFixed(1)}" r="4" fill="${c.on.includes(L) ? C.ink : '#fff'}" stroke="${C.ink}" stroke-width="1.2"/>`; }
      const q1 = P2([c.g.x, c.g.z]); s += `<circle cx="${q1[0].toFixed(1)}" cy="${q1[1].toFixed(1)}" r="4.5" fill="#CC2A53"/>`;
      if (!S.sway) { const q2 = P2([c.g2.x, c.g2.z]); s += `<circle cx="${q2[0].toFixed(1)}" cy="${q2[1].toFixed(1)}" r="4.5" fill="none" stroke="#76767A" stroke-width="1.6"/>`; }
      s += `<text x="4" y="11" font-family="JetBrains Mono" font-size="10.5" fill="${C.mute}">↑ ĐI</text>`;
      topSvg.innerHTML = s; }
    tRows[0][1].textContent = `${nOn} · ${c.on.map((L) => ({FL: 'TT', FR: 'TP', RL: 'ST', RR: 'SP'}[L])).join(' ')}`;
    tRows[1][1].textContent = nOn >= 3 ? `${mm >= 0 ? 'trong' : 'ngoài'} ${vn(Math.abs(mm), 2)} m` : `lệch ${vn(-mm, 2)} m`;
    tRows[2][1].textContent = `cao ${vn(c.g.y, 1)} m`;
    // bảng 04: tính tương đối
    const walking = S.act === 'walk';
    vRows[0][1].textContent = S.ground ? 'gắn với đất' : 'gắn với thân';
    vRows[1][1].textContent = walking ? `+${vn(V, 2)} m/s` : '0 m/s'; vRows[2][1].textContent = walking ? `−${vn(V, 2)} m/s` : '0 m/s'; vRows[3][1].textContent = walking ? '0 m/s' : '0 m/s';
    vRows[4][1].textContent = `${vn(ADV, 2)} m`;
    vTxt.innerHTML = `Bản hoạt hình đi tại chỗ. Muốn chân chống đứng yên trên đất, thân phải tiến ${vn(ADV, 2)} m mỗi chu kì ${vn(CYC, 1)} s: v = s/t = <b>${vn(V, 2)} m/s ≈ ${vn(V * 3.6, 1)} km/h</b>. Bước 6,0 m mà tiến 9,09 m vì mỗi chân chỉ chống 66 % chu kì: s = 6,0 / (1 − 0,34).`;
    // bảng 05: mô men ở gối
    const fl = c.leg, onFL = c.on.includes('FL'), Nn = onFL ? (S.m * 1000 * G) / Math.max(1, nOn) : 0, M = Nn * fl.r, F = fl.lever > 0.05 ? M / fl.lever : 0, A = F / (S.p * 1e6), D = 2 * Math.sqrt(A / Math.PI);
    const kv = [onFL ? 'đang chống' : 'đang bước', onFL ? `${vn(Nn / 1000, 0)} kN` : '0', `${vn(fl.r, 2)} m`, onFL ? `${vn(M / 1e6, 2)} MN·m` : '0', `${vn(fl.lever, 2)} m`, onFL ? `${vn(F / 1e6, 2)} MN` : '0', onFL ? `${vn(D * 100, 0)} cm` : '—', cylDia ? `≈ ${vn(cylDia * 100, 0)} cm` : '—'];
    kRows.forEach((r, i) => { r[1].textContent = kv[i]; });
    kTxt.innerHTML = `d đo trên mô hình từ trục gối tới đường xi lanh (AnyMachine chọn điểm neo cho d nhỏ nhất ${vn(AM.act.knee.lev, 3)} m). A = F/p, chia đều mg cho các chân đang chống (giả định).`;
    // bảng 06: chiều dài xi lanh trong cửa sổ [max(Lc, Lr), Lc + Lr]; trượt chân
    { let s = ''; const rows = [['HÁNG', AM.act.hip, fl.hip.L], ['GỐI', AM.act.knee, fl.knee.L], ['CỔ CHÂN', AM.act.ankle, fl.ankle.L], ['KHUỶU', AM.act.elbow, c.elbow]];
      rows.forEach(([n, a, L], i) => { const lo = Math.max(a.Lc, a.Lr), hi = a.Lc + a.Lr, y = i * 20, X = (v) => 70 + ((v - 1) / 4.5) * 200, ok = L >= lo - 0.01 && L <= hi + 0.01;
        s += `<text x="0" y="${y + 10}" font-family="JetBrains Mono" font-size="10.5" fill="${C.mute}">${n}</text><rect x="${X(lo)}" y="${y + 3}" width="${X(hi) - X(lo)}" height="8" fill="#e9ebef"/>`;
        s += `<rect x="${X(a.s[0])}" y="${y + 3}" width="${X(a.s[1]) - X(a.s[0])}" height="8" fill="#d5d8de"/><line x1="${X(L)}" x2="${X(L)}" y1="${y}" y2="${y + 14}" stroke="${ok ? C.ink : '#c4271c'}" stroke-width="2.5"/>`;
        s += `<text x="272" y="${y + 10}" text-anchor="end" font-family="JetBrains Mono" font-size="10.5" fill="${C.ink}">${vn(L, 2)}</text>`; });
      chkSvg.innerHTML = s; }
    chkTxt.innerHTML = `Vạch: chiều dài xi lanh lúc này (m), nền sẫm: hành trình lấy mẫu, nền nhạt: cần còn trong ống. Chân chống trượt trên đất nhiều nhất <b>${vn(SLIPMAX * 100, 0)} cm</b> mỗi pha (${vn((SLIPMAX / AM.walk.stride) * 100, 1)} % quãng 6,0 m).`;
    for (const k of ['walk', 'reach', 'head', 'pause', 'sway', 'ground', 'labels']) ui.setOn(k, sim.isOn(k));
    modeEl.textContent = S.act === 'walk' ? (S.play ? `Đi · ${nOn} chân đỡ` : `Dừng hình · ${nOn} chân đỡ`) : S.act === 'reach' ? 'Cúi với tay' : 'Quay đầu';
    modeSub.textContent = `${S.ground ? 'hệ đất' : 'hệ thân'} · ${S.sway ? 'thân lắc như mô hình' : 'xem thử: bỏ lắc thân'} · ${vn(S.m, 0)} tấn · ${vn(S.p, 0)} MPa (giả định) · ${S.log[0] || ''}`;
    alert.set(nOn >= 3 && mm < 0 ? 'TRỌNG TÂM RA NGOÀI MẶT CHÂN ĐẾ' : '');
    if (callSub.knee) callSub.knee.textContent = `D ${vn(fl.lever, 2)} M · DÀI ${vn(fl.knee.L, 2)} M`;
    if (callSub.foot) callSub.foot.textContent = onFL ? 'ĐANG CHỐNG' : 'ĐANG BƯỚC';
    if (callSub.g) callSub.g.textContent = nOn >= 3 ? (mm >= 0 ? `TRONG CHÂN ĐẾ · ${vn(mm, 2)} M` : `NGOÀI ${vn(-mm, 2)} M`) : `2 CHÂN · LỆCH ${vn(-mm, 2)} M`;
    const Pj = (p) => { const w = rig.localToWorld(p.clone()); return st.project(w.x, w.y, w.z); };
    const lab = S.labels ? 1 : 0;
    ui.drawCallouts([{key: 'knee', p: Pj(kn.a.clone().lerp(kn.c, 0.5)), dx: 150, dy: -40}, {key: 'foot', p: Pj(c.leg.f), dx: 120, dy: 40}, {key: 'g', p: Pj(v3(c.g.x, 0.1, c.g.z)), dx: -150, dy: 50},
      {key: 'man', p: st.project(man.position.x, 1.8, man.position.z), dx: 90, dy: -70}], lab);
  },
};

// ---------------- soi chi tiết
function cardOf(part) {
  const base = {src: SRC_AM};
  if (/^Act_/.test(part)) { const j = /Knee/.test(part) ? 'knee' : /Hip/.test(part) ? 'hip' : /Ankle/.test(part) ? 'ankle' : 'elbow', a = AM.act[j];
    return {...base, k: 'Xi lanh thuỷ lực', t: `Xi lanh ${({knee: 'gối', hip: 'háng', ankle: 'cổ chân', elbow: 'khuỷu'})[j]}`, b: 'Hai nửa riêng: ống xi lanh gắn đoạn trên, cần pít tông gắn đoạn dưới, luôn chĩa vào nhau. Dầu ép lên mặt pít tông tạo lực F = p·A; lực đặt cách trục khớp một tay đòn d cho mô men M = F·d. AnyMachine chọn điểm neo bằng cách lấy mẫu mọi chuyển động, giữ chỗ cần luôn còn trong ống và tay đòn lớn nhất.',
      rows: [['Ống / cần', `${vn(a.Lc, 3)} / ${vn(a.Lr, 3)} m`], ['Cửa sổ chiều dài', `${vn(Math.max(a.Lc, a.Lr), 3)}–${vn(a.Lc + a.Lr, 3)} m`], ['Hành trình lấy mẫu', `${vn(a.s[0], 3)}–${vn(a.s[1], 3)} m`], ...(a.lev ? [['Tay đòn nhỏ nhất', `${vn(a.lev, 3)} m`]] : [])]}; }
  if (/(Thigh|Shin|Tarsus|Foot|Toe|Hip|Knee|Ankle)/.test(part)) return {...base, k: 'Chân ba đoạn', t: 'Chân là một cột giằng', b: 'Mỗi đoạn chân là dầm hộp carbon chịu nén, hai cáp chịu kéo chạy sau lưng trên các giá đỡ, như cần cẩu hay cột buồm. Chân đứng hơi gấp khúc (gối ra trước, cổ chân ra sau) để đường truyền lực rõ và có chỗ để cúi.',
    rows: [['Đùi · cẳng · cổ chân', '8,55 · 7,55 · 5,05 m'], ['Khớp háng', 'cao ≈ 21 m'], ['Bi chân', 'cao 0,60 m khi chạm đất'], ['Khung xương', '104 xương, mỗi bộ phận gắn đúng một xương']]};
  if (/Head|Neck|Sensor|Antenn/.test(part)) return {...base, k: 'Đầu và cổ', t: 'Cổ năm khớp, đầu xoay', b: 'Năm khâu cổ nối bằng chốt; đầu xoay trên vòng bi. Trong chuyển động “Quay đầu”, đầu ngẩng lên, đèn cảm biến bật, nhìn trái 52°, phải 40°.', rows: [['Đỉnh ăng ten', '29,98 m'], ['Khâu cổ', '5']]};
  return {...base, k: 'Thân', t: 'Thân và cánh vỏ', b: 'Thân carbon hình giọt nước dài 8,2 m, rộng 2,6 m, vỏ gốm ở lưng và hai cánh vỏ rủ xuống. Trong bài, thân, cổ và tay được coi là phần lắc ngang theo hông khi đi (giả định để tính trọng tâm).',
    rows: [['Kích thước', '16,9 × 12,5 m, cao 30 m'], ['Tam giác', '≈ 352 nghìn trong 160 bộ phận'], ['Chia khối lượng (giả định)', 'thân 40 %, mỗi chân 11 %, mỗi tay 3 %, cổ và đầu 10 %']]};
}
const soi = picker((part) => cardOf(part));

// ---------------- góc nhìn (bám theo máy)
const T0 = (y = 14) => ({tx: rig.position.x + 0.5, ty: y, tz: 0});
const views = {
  hero: (t) => ({...T0(14.5), az: 52 + 5 * Math.sin(t * 0.1), el: 12, d: 92, sx: 0, sy: -20}),
  side: () => ({...T0(15), az: 0, el: 4, d: 96, sx: 0, sy: -20}),
  top: () => ({...T0(0), az: 0, el: 86, d: 62, sx: 0, sy: -10}),
  knee: () => { const k = rig.localToWorld(S.cur.leg.k.clone()); return {tx: k.x, ty: k.y - 1, tz: k.z, az: 18, el: 6, d: 26, sx: 0, sy: -20}; },
  man: () => ({tx: man.position.x - 0.8, ty: 4, tz: man.position.z, az: 70, el: 6, d: 22, sx: 0, sy: -20}),
};

// ---------------- bài giảng
const p0 = (x) => vn(x * 100, 0);
const CAP = [
  {k: 'MÁY ĐI BỘ 30 M · ANYMACHINE', t: 'Một cỗ máy cao bằng toà nhà mười tầng', b: 'Máy tưởng tượng này được dựng hoàn toàn bằng mã: một tệp Python chạy trong Blender làm ra 160 bộ phận, 104 xương và ba chuyển động (AnyMachine, MIT). Người cạnh chân cao 1,75 m. Mọi số đo trong bài đọc thẳng từ khung xương của mô hình.', e: 'cao 29,98 m · 4 chân, 2 tay · xi lanh ở mọi khớp lớn'},
  {k: 'CHÂN BA ĐOẠN', t: 'Đùi 8,55 m, cẳng 7,55 m, cổ chân 5,05 m', b: 'Mỗi chân có ba khớp bản lề: háng, gối, cổ chân. Qua mỗi khớp là một xi lanh thuỷ lực hai nửa: ống gắn đoạn trên, cần pít tông gắn đoạn dưới. Đoạn chân là dầm chịu nén có cáp chịu kéo phía sau, như cần cẩu.', e: 'chân 21,15 m · khớp háng cao ≈ 21 m'},
  {k: 'DÁNG ĐI BỐN NHỊP', t: 'Sau trái, trước trái, sau phải, trước phải', b: 'Chân sau trái nhấc trước, chân trước trái nhấc sau đó 0,14 chu kì, cặp bên phải lặp lại nửa chu kì sau: dáng đi của hươu cao cổ. Mỗi chân ở trên không 34 % chu kì, nên các bước chồng lên nhau (bảng 01).', e: 'pha: ST 0 · TT 0,14 · SP 0,5 · TP 0,64',
    ask: {q: 'Mỗi chân ở trên không 34 % chu kì. Trung bình có bao nhiêu chân chạm đất?', o: ['2 chân', '4·(1 − 0,34) ≈ 2,64 chân', '3 chân'], a: 1, e: 'Mỗi chân chạm đất 66 % thời gian; bốn chân cộng lại trung bình 4 × 0,66 = 2,64 chân.'}},
  {k: 'BA CHÂN HAY HAI CHÂN', t: 'Lúc ba chân đỡ, lúc chỉ còn hai', b: `Đếm trên chính chuyển động: ${p0(STAT.f3)} % thời gian có ba chân chạm đất, ${p0(STAT.f2)} % chỉ còn hai. Ba chân cho một tam giác đỡ; hai chân chỉ cho một đoạn thẳng.`, e: 'n̄ = 4·(1 − 0,34) = 2,64'},
  {k: 'TRỌNG TÂM VÀ MẶT CHÂN ĐẾ', t: 'Đứng vững khi trọng tâm rơi vào chân đế', b: 'Mặt chân đế là đa giác nối các chân đang chạm đất (viền đỏ). Vật đứng yên được khi đường thẳng đứng qua trọng tâm (chấm đỏ) cắt mặt chân đế; ra ngoài là đổ. Trọng tâm ở đây tính từ vị trí từng đoạn chân, thân, tay, đầu với cách chia khối lượng giả định.', e: 'điều kiện cân bằng: hình chiếu G nằm trong mặt chân đế'},
  {k: 'VÌ SAO THÂN LẮC', t: 'Thân lắc về phía chân đang đỡ', b: `Khi đi, hông lắc ngang khoảng ${vn(STAT.swayAmp, 2)} m về phía các chân đang chống. Bấm “Lắc thân” để xem thử trọng tâm khi thân đứng yên giữa (vòng xám). Lúc ba chân đỡ, trọng tâm thật nằm trong tam giác ${p0(STAT.in3)} % thời gian (bỏ lắc: ${p0(STAT.in3b)} %); lúc chỉ còn hai chân, lắc thân kéo trọng tâm lại gần đường đỡ: lệch xa nhất ${vn(STAT.dev2, 2)} m thay vì ${vn(STAT.dev2b, 2)} m.`, e: 'lắc thân = dời G về phía chân đỡ',
    ask: {q: 'Vì sao máy (và con vật bốn chân) lắc thân sang bên chân đang đỡ?', o: ['Cho đẹp', 'Để kéo hình chiếu trọng tâm vào trong mặt chân đế', 'Để đi nhanh hơn'], a: 1, e: 'Dời thân về phía chân đỡ là dời trọng tâm vào tam giác đỡ, nên máy không đổ khi một chân nhấc lên.'}},
  {k: 'LÚC CHỈ CÒN HAI CHÂN', t: 'Đi là ngã có kiểm soát', b: `Khi chỉ hai chân chạm đất, mặt chân đế là một đoạn thẳng, trọng tâm không thể nằm đúng trên đó: máy bắt đầu ngã, nhưng chân kế tiếp đặt xuống kịp. Độ lệch lớn nhất lúc hai chân: ${vn(STAT.dev2, 2)} m (bỏ lắc thân: ${vn(STAT.dev2b, 2)} m).`, e: 'cân bằng tĩnh cần ≥ 3 điểm đỡ không thẳng hàng'},
  {k: 'TÍNH TƯƠNG ĐỐI', t: 'Đi tại chỗ hay đi trên đất?', b: 'Chuyển động trong mô hình là đi tại chỗ, như trên máy chạy bộ: so với thân, chân chống lùi lại, cọc mốc và người cũng lùi. Bấm “Hệ đất”: so với đất, thân tiến tới còn chân chống đứng yên. Cùng một chuyển động, mô tả khác nhau theo hệ quy chiếu.', e: 'v(chân/đất) = v(chân/thân) + v(thân/đất) = −v + v = 0'},
  {k: 'TỐC ĐỘ · V = S / T', t: `${vn(ADV, 2)} m trong ${vn(CYC, 1)} giây`, b: `Bước chân dài 6,0 m nhưng mỗi chu kì thân tiến ${vn(ADV, 2)} m, vì mỗi chân chỉ chống 66 % chu kì: s = 6,0 / (1 − 0,34). Tốc độ v = ${vn(ADV, 2)} / ${vn(CYC, 1)} = ${vn(V, 2)} m/s, khoảng ${vn(V * 3.6, 1)} km/h, nhanh hơn người đi bộ một chút.`, e: `v = s/t = ${vn(ADV, 2)} m / ${vn(CYC, 1)} s = ${vn(V, 2)} m/s`,
    ask: {q: `Máy tiến ${vn(ADV, 2)} m mỗi ${vn(CYC, 1)} s. Đi 1 km mất khoảng bao lâu?`, o: ['1 phút', `≈ ${vn(1000 / V / 60, 0)} phút`, '1 giờ'], a: 1, e: `t = s/v = 1000 / ${vn(V, 2)} ≈ ${vn(1000 / V, 0)} s ≈ ${vn(1000 / V / 60, 0)} phút.`}},
  {k: 'KIỂM TRƯỢT CHÂN', t: 'Chân chống có trượt trên đất không?', b: `Trong hệ đất, chân đang chống phải đứng yên. Bài đo lại từ chính chuyển động (bỏ lúc chân đang hạ và đang nhấc): trong mỗi pha chống, bàn chân dịch nhiều nhất ${vn(SLIPMAX * 100, 0)} cm, khoảng ${vn((SLIPMAX / AM.walk.stride) * 100, 1)} % của quãng 6,0 m nó lùi so với thân. Kiểm trượt chân là một phép kiểm AnyMachine chạy cho mọi dáng đi; bản hoạt hình này gần đạt, chưa tuyệt đối.`, e: 'trượt = max − min của x_đất trong pha chống'},
  {k: 'MÔ MEN Ở KHỚP GỐI', t: 'M = F·d', b: 'Lực đỡ của đất N đặt ở bàn chân, cách gối một khoảng ngang r, tạo mô men M = N·r làm gối gập. Xi lanh gối giữ lại bằng lực F đặt cách trục gối tay đòn d: F·d = N·r. Tay đòn d đo trực tiếp trên mô hình, đổi theo góc gối (bảng 05).', e: 'M = N·r = F·d ⇒ F = N·r / d'},
  {k: 'LỰC XI LANH · F = P·A', t: 'Từ mô men ra đường kính pít tông', b: 'Giả định máy nặng 120 tấn, áp suất dầu 25 MPa (khoảng 250 lần áp suất khí quyển). Lực đỡ mỗi chân bằng mg chia số chân đang chống; F = N·r / d; tiết diện pít tông A = F/p. So đường kính tính được với ống vẽ trên mô hình. Kéo khối lượng và áp suất để xem.', e: 'A = F / p · D = 2·√(A/π)'},
  {k: 'KIỂM MÁY', t: 'Cần pít tông không bao giờ tuột khỏi ống', b: 'Ống dài Lc, cần dài Lr: chiều dài xi lanh phải nằm trong [max(Lc, Lr); Lc + Lr]. Bảng 06 đo chiều dài bốn xi lanh mỗi khung hình. Bấm “Cúi với tay”: thân hạ 4,6 m, gối gập sâu nhất mà vạch vẫn trong cửa sổ.', e: 'max(Lc, Lr) ≤ L ≤ Lc + Lr'},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'v_man'}); at(5, {click: 'v_hero'});
at(9, {cap: 1}); at(9.5, {click: 'v_side'});
at(16, {cap: 2}); at(16.5, {click: 'v_hero'});
at(24, {cap: 3}); at(24.5, {click: 'v_top'});
at(31, {cap: 4});
at(39, {cap: 5}); at(40, {click: 'sway'}); at(46, {click: 'sway'});
at(49, {cap: 6}); at(49.5, {click: 'pause'}); at(50, {slide: 'tt', to: 0.62, dur: 1.5}); at(55, {click: 'walk'});
at(57, {cap: 7}); at(57.5, {click: 'v_side'}); at(61, {click: 'ground'});
at(68, {cap: 8});
at(76, {cap: 9}); at(76.5, {click: 'v_man'}); at(81, {click: 'ground'}); at(82, {click: 'v_hero'});
at(84, {cap: 10}); at(84.5, {click: 'v_knee'});
at(92, {cap: 11}); at(93, {slide: 'm', to: 0.85, dur: 2}); at(97, {slide: 'p', to: 0.2, dur: 2}); at(100, {slide: 'm', to: 0.43, dur: 1}); at(101.5, {slide: 'p', to: 0.6, dur: 1});
at(104, {cap: 12}); at(104.5, {click: 'v_side'}); at(105, {click: 'reach'});
ev.sort((a, b) => a.at - b.at);

sim.reset();
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 120}, firstView: 'hero',
  extra: [{key: 'walk', label: 'Đi'}, {key: 'reach', label: 'Cúi với tay'}, {key: 'pause', label: 'Dừng'}, {key: 'ground', label: 'Hệ đất'}],
  shell: {subject: 'Vật lí 10 · chuyển động, cân bằng, mô men', objectives: ['Tính tốc độ v = s/t và giải thích tính tương đối của chuyển động bằng hai hệ quy chiếu', 'Nêu điều kiện cân bằng của vật có mặt chân đế và giải thích vì sao máy bốn chân lắc thân khi đi', 'Vận dụng mô men lực M = F·d và F = p·A để ước lượng lực và cỡ xi lanh thuỷ lực'],
    credit: 'Mô hình Stilt, khung xương và chuyển động: AnyMachine của Apekshik Panigrahi (MIT), nén cho web bằng gltf-transform. Mô phỏng và lời giảng: Sáng Ăn Khoai, dựng trên teardown của elvarofficial và claude-motion của whaleyxbt (MIT). Khối lượng, áp suất dầu và cách chia khối lượng là giả định của bài.'},
  keys: {1: 'v_hero', 2: 'v_side', 3: 'v_top', 4: 'v_knee', 5: 'v_man', w: 'walk', r: 'reach', h: 'head', p: 'pause', s: 'sway', g: 'ground', n: 'labels'}});
