// Giả thuyết Riemann · trang điện ảnh tương tác (toan/riemann). Một canvas three.js cố định, bảy cảnh đổi theo vị trí cuộn.
// Số liệu: tools/riemann/zeta.json (không điểm và lưới |ζ| tính bằng mpmath) và tools/riemann/du-lieu.json (sổ mốc có nguồn, trạng thái).
// Cảnh: 0 dãy số nguyên tố · 1 bậc thang ψ(x) và công thức tường minh · 2 địa hình |ζ(s)| · 3 con đường công phá (mạng lưới mốc)
// · 4 hai nhánh trí tuệ · 5 bốn mươi mốt ngày · 6 sau cánh cổng.
import * as THREE from 'three';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import Z from './zeta.json';
import D from './du-lieu.json';

const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x)), lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => t * t * (3 - 2 * t), seg = (u, a, b) => clamp((u - a) / (b - a));
const vn = (x, d = 0) => x.toLocaleString('vi-VN', {minimumFractionDigits: d, maximumFractionDigits: d});
const COL = {ink: 0xf4f1ea, dim: 0x5a5a62, amber: 0xd9a065, sig: 0xcc2a53, blue: 0x6f9bd8, green: 0x7fb58a, violet: 0xa58ad6, bg: 0x020203};
const LANE = {so: {z: -7, c: COL.ink, n: 'Số học'}, gt: {z: -2.5, c: COL.amber, n: 'Giải tích'}, hh: {z: 2, c: COL.blue, n: 'Hình học'}, may: {z: 6.5, c: COL.green, n: 'Tính toán và máy'}, vl: {z: 10.5, c: COL.violet, n: 'Vật lí'}, ai: {z: 2, c: COL.sig, n: 'AI và người'}};
const TT = {'dinh-ly': 'Định lí', 'gia-thuyet': 'Phỏng đoán', 'tinh-toan': 'Kiểm bằng máy tính', 'y-tuong': 'Ý tưởng, chương trình', 'tuyen-bo': 'Tuyên bố, chưa kiểm độc lập', 'hinh-thuc': 'Đã qua máy kiểm (Lean)'};
const small = matchMedia('(max-width: 760px)').matches, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------------------------------------------------------------- dựng nền
const canvas = $('#gl');
const renderer = new THREE.WebGLRenderer({canvas, antialias: !small, powerPreference: 'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.5 : 2)); renderer.setClearColor(COL.bg);
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(COL.bg, 0.012);
const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 600);
scene.add(new THREE.AmbientLight(0xffffff, 0.35)); const sun = new THREE.DirectionalLight(0xffffff, 1.2); sun.position.set(6, 12, 8); scene.add(sun);
const composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.85, 0.7, 0.18); composer.addPass(bloom); composer.addPass(new OutputPass());
function resize() { const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); composer.setSize(w, h); camera.aspect = w / h; camera.fov = w < h ? 58 : 40; camera.updateProjectionMatrix(); }
addEventListener('resize', resize); resize();

const glow = (c, o = 1) => new THREE.MeshBasicMaterial({color: c, transparent: true, opacity: o});
const lineM = (c, o = 1) => new THREE.LineBasicMaterial({color: c, transparent: true, opacity: o});
const line = (pts, c, o = 1) => new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineM(c, o));
const V = (x, y, z) => new THREE.Vector3(x, y, z);

// nhãn HTML bám theo điểm 3D
const labels = $('#labels'), pool = new Map(); let used = new Set();
function label(key, html, p, cls = '') {
  const v = p.clone().project(camera); if (v.z > 1 || Math.abs(v.x) > 1.05 || Math.abs(v.y) > 1.05) return;
  let el = pool.get(key); if (!el) { el = document.createElement('div'); el.className = 'lb'; labels.appendChild(el); pool.set(key, el); }
  if (el._h !== html) { el.innerHTML = html; el._h = html; } el.className = 'lb ' + cls;
  el.style.transform = `translate(${((v.x + 1) / 2 * innerWidth).toFixed(1)}px, ${((1 - v.y) / 2 * innerHeight).toFixed(1)}px)`; el.style.opacity = 1; used.add(key);
}
function sweepLabels() { for (const [k, el] of pool) if (!used.has(k)) el.style.opacity = 0; used = new Set(); }

// ---------------------------------------------------------------- số học
const isPrime = (n) => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };
const zeros = Z.zeros;
// ψ(x) thật: tổng ln p trên các luỹ thừa nguyên tố p^k ≤ x
const PSI_JUMPS = (() => { const a = []; for (let n = 2; n <= 110; n++) { for (let p = 2; p <= n; p++) { if (!isPrime(p)) continue; let q = p; while (q < n) q *= p; if (q === n) { a.push([n, Math.log(p)]); break; } } } return a; })();
const psi = (x) => PSI_JUMPS.reduce((s, [n, l]) => s + (n <= x ? l : 0), 0);
// công thức tường minh với N cặp không điểm: ψ₀(x) = x − Σ 2·Re(x^ρ/ρ) − ln 2π − ½ ln(1 − x⁻²)
const psiN = (x, N) => { const L = Math.log(x), r = Math.sqrt(x); let s = 0; for (let k = 0; k < N; k++) { const g = zeros[k]; s += (0.5 * Math.cos(g * L) + g * Math.sin(g * L)) / (0.25 + g * g); } return x - 2 * r * s - Math.log(2 * Math.PI) - 0.5 * Math.log(1 - 1 / (x * x)); };

// ---------------------------------------------------------------- cảnh 0: dãy số nguyên tố
function act0() {
  const g = new THREE.Group(), N = 600, pa = [], ca = [], la = [];
  for (let n = 1; n <= N; n++) { const x = n * 0.42; (isPrime(n) ? pa : ca).push(x, 0, 0); if (isPrime(n)) la.push(x, 0, 0, x, 0.5 + 0.9 * Math.random() ** 0, 0); }
  const P = (a, c, s, o) => new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(a, 3)), new THREE.PointsMaterial({color: c, size: s, transparent: true, opacity: o, sizeAttenuation: true}));
  g.add(P(ca, COL.dim, 0.07, 0.9), P(pa, COL.amber, 0.2, 1));
  g.add(new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(la, 3)), lineM(COL.amber, 0.55)));
  g.add(line([V(0, 0, 0), V(N * 0.42, 0, 0)], COL.dim, 0.35));
  return {g, update(u, t) {
    const x = lerp(2, 60, ease(u)); camera.position.set(x - 6, 1.1 + 2.2 * u, 5.2 - 1.5 * u); camera.lookAt(x + 9, 0.3, 0);
    for (const p of [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149]) { const px = p * 0.42; if (px > x - 4 && px < x + 16) label('p' + p, String(p), V(px, 1.55, 0), 'num'); }
    void t; }};
}

// ---------------------------------------------------------------- cảnh 1: bậc thang ψ(x) và công thức tường minh
const A1 = {N: 0, auto: true};
function act1() {
  const g = new THREE.Group(), X0 = 2, X1 = 100, SX = 0.3, SY = 0.3, M = 900;
  const P = (x, y, z = 0) => V((x - 50) * SX, y * SY - 15, z);
  const st = []; let y = psi(X0 - 0.001); st.push(P(X0, y)); for (const [n, l] of PSI_JUMPS) { if (n > X1) break; st.push(P(n, y)); y += l; st.push(P(n, y)); } st.push(P(X1, y));
  g.add(line(st, COL.ink, 0.95)); g.add(line([P(X0, X0), P(X1, X1)], COL.dim, 0.5));
  g.add(line([P(0, 0), P(X1 + 2, 0)], COL.dim, 0.4), line([P(0, 0), P(0, 104)], COL.dim, 0.4));
  const ag = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(M * 3), 3)); const approx = new THREE.Line(ag, lineM(COL.amber, 1)); g.add(approx);
  const wg = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(M * 3), 3)); const wave = new THREE.Line(wg, lineM(COL.sig, 0.85)); g.add(wave);
  const pp = []; for (let n = 2; n <= X1; n++) if (isPrime(n)) pp.push(P(n, 0)); g.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(pp), new THREE.PointsMaterial({color: COL.amber, size: 0.32})));
  let last = -1;
  const redraw = (N) => { const a = ag.attributes.position.array, w = wg.attributes.position.array;
    for (let i = 0; i < M; i++) { const x = X0 + (X1 - X0) * i / (M - 1), p = P(x, psiN(x, N)); a[i * 3] = p.x; a[i * 3 + 1] = p.y; a[i * 3 + 2] = 0.02;
      const gk = zeros[Math.max(0, N - 1)], L = Math.log(x), q = P(x * 0.55, N ? -2 * Math.sqrt(x) * (0.5 * Math.cos(gk * L) + gk * Math.sin(gk * L)) / (0.25 + gk * gk) * 6 + 84 : 84); w[i * 3] = q.x; w[i * 3 + 1] = q.y; w[i * 3 + 2] = 0; }
    ag.attributes.position.needsUpdate = wg.attributes.position.needsUpdate = true; };
  return {g, update(u) {
    if (A1.auto) A1.N = Math.round(200 * ease(seg(u, 0.22, 0.86)) ** 2.2);
    if (A1.N !== last) { last = A1.N; redraw(last); hudA1(last); }
    const k = ease(seg(u, 0, 0.25)); camera.position.set(lerp(-6, 1, k), lerp(-4, 0, k), lerp(36, 54, k) * (innerWidth < innerHeight ? 1.7 : 1)); camera.lookAt(1, -2.5, 0);
    label('ax', 'x', P(101, -3), 'mono'); label('psi', 'ψ(x): bậc thang thật', P(84, psi(84) + 9), 'mono'); label('apx', `công thức tường minh · ${last} cặp không điểm`, P(52, psiN(52, last) - 9), 'mono am');
    if (last) label('wav', `sóng thứ ${last}: γ = ${vn(zeros[last - 1], 4)} (phóng 6 lần)`, P(57, 84), 'mono sg'); }};
}
function hudA1(N) { const r = $('#a1n'); if (r) { r.value = N; $('#a1v').textContent = `${N} cặp không điểm`; let e = 0, c = 0; for (let x = 10; x <= 100; x += 0.37) { e += Math.abs(psiN(x, N) - psi(x)); c++; } $('#a1e').textContent = `sai lệch trung bình ${vn(e / c, 2)}`; } }

// ---------------------------------------------------------------- cảnh 2: địa hình |ζ(σ + it)|
function act2() {
  const g = new THREE.Group(), {ns, nt} = Z, raw = Uint8Array.from(atob(Z.grid), (c) => c.charCodeAt(0));
  const WX = 14, WZ = 110, HY = 5.2, X = (s) => ((s - Z.s[0]) / (Z.s[1] - Z.s[0]) - 0.5) * WX, Zc = (t) => -(t / Z.t[1]) * WZ, Hh = (i, j) => (raw[j * ns + i] / 255) * HY;
  const hAt = (s, t) => { const fi = clamp((s - Z.s[0]) / (Z.s[1] - Z.s[0])) * (ns - 1), fj = clamp(t / Z.t[1]) * (nt - 1), i = Math.min(ns - 2, fi | 0), j = Math.min(nt - 2, fj | 0), a = fi - i, b = fj - j;
    return lerp(lerp(Hh(i, j), Hh(i + 1, j), a), lerp(Hh(i, j + 1), Hh(i + 1, j + 1), a), b); };
  const pos = new Float32Array(ns * nt * 3), col = new Float32Array(ns * nt * 3), idx = [], c0 = new THREE.Color(0x3a0a18), c1 = new THREE.Color(0x15161c), c2 = new THREE.Color(0x8c8f9c), cc = new THREE.Color();
  for (let j = 0; j < nt; j++) for (let i = 0; i < ns; i++) { const k = j * ns + i, h = raw[k] / 255; pos.set([X(Z.s[0] + (Z.s[1] - Z.s[0]) * i / (ns - 1)), h * HY, Zc(Z.t[1] * j / (nt - 1))], k * 3);
    if (h < 0.5) cc.lerpColors(c0, c1, h / 0.5); else cc.lerpColors(c1, c2, (h - 0.5) / 0.5); col.set([cc.r, cc.g, cc.b], k * 3); }
  for (let j = 0; j < nt - 1; j++) for (let i = 0; i < ns - 1; i++) { const a = j * ns + i; idx.push(a, a + ns, a + 1, a + 1, a + ns, a + ns + 1); }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3)); geo.setIndex(idx); geo.computeVertexNormals();
  g.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({vertexColors: true, roughness: 0.62, metalness: 0.25, side: THREE.DoubleSide})));
  const gl = []; for (let j = 0; j < nt; j += 8) for (let i = 0; i < ns - 1; i++) { const a = (j * ns + i) * 3; gl.push(pos[a], pos[a + 1] + 0.02, pos[a + 2], pos[a + 3], pos[a + 4] + 0.02, pos[a + 5]); }
  g.add(new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(gl, 3)), lineM(COL.ink, 0.1)));
  const cl = []; for (let j = 0; j < nt; j++) { const t = Z.t[1] * j / (nt - 1); cl.push(V(X(0.5), hAt(0.5, t) + 0.05, Zc(t))); } g.add(line(cl, COL.amber, 1));
  for (const s of [0, 1]) { const e = []; for (let j = 0; j < nt; j += 2) { const t = Z.t[1] * j / (nt - 1); e.push(V(X(s), hAt(s, t) + 0.04, Zc(t))); } g.add(line(e, COL.ink, 0.35)); }
  const zs = zeros.filter((z) => z < Z.t[1] - 1), beams = [];
  for (const z of zs) { const m = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), glow(COL.sig)); m.position.set(X(0.5), 0.12, Zc(z)); g.add(m);
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 7, 6), glow(COL.sig, 0.5)); b.position.set(X(0.5), 3.6, Zc(z)); g.add(b); beams.push(b); }
  return {g, update(u, t) {
    const k = ease(seg(u, 0.08, 0.92)), tt = lerp(-4, 62, k), rise = ease(seg(u, 0.8, 1));
    camera.position.set(X(0.5) + lerp(-9, 1.6, ease(seg(u, 0, 0.3))) + 5 * rise, lerp(11, 5.2, ease(seg(u, 0, 0.32))) + 16 * rise, Zc(tt) + lerp(22, 14, seg(u, 0, 0.3))); camera.lookAt(X(0.5), 1.2, Zc(tt + 13 - 6 * rise));
    beams.forEach((b, i) => { b.material.opacity = 0.32 + 0.25 * Math.sin(t * 1.6 + i); });
    zs.forEach((z, i) => { if (Math.abs(z - tt - 8) < 12) label('z' + i, i < 3 ? `ρ${'₁₂₃'[i]} = ½ + ${vn(z, 4)}i` : `${vn(z, 2)}`, V(X(0.5), 7.3, Zc(z)), 'mono sg'); });
    if (tt < 14) { label('pole', 'cực tại s = 1', V(X(1), HY + 0.6, Zc(0)), 'mono'); }
    label('cl', 'đường tới hạn Re s = ½', V(X(0.5), hAt(0.5, tt + 16) + 1.2, Zc(tt + 16)), 'mono am');
    label('s0', 'Re s = 0', V(X(0), hAt(0, tt + 10) + 0.5, Zc(tt + 10)), 'mono'); label('s1', 'Re s = 1', V(X(1), hAt(1, tt + 10) + 0.5, Zc(tt + 10)), 'mono'); }};
}

// ---------------------------------------------------------------- cảnh 3: con đường công phá
const TX = [[-300, 0], [1700, 5], [1850, 15], [1900, 27], [1950, 44], [2000, 60], [2020, 70], [2026, 76], [2027, 92]];
const tx = (y) => { for (let i = 1; i < TX.length; i++) if (y <= TX[i][0]) { const [a, xa] = TX[i - 1], [b, xb] = TX[i]; return lerp(xa, xb, clamp((y - a) / (b - a))); } return TX.at(-1)[1]; };
const xt = (x) => { for (let i = 1; i < TX.length; i++) if (x <= TX[i][1]) { const [a, xa] = TX[i - 1], [b, xb] = TX[i]; return lerp(a, b, clamp((x - xa) / (xb - xa))); } return TX.at(-1)[0]; };
const MOC = D.moc.map((m, i) => ({...m, i})), byId = Object.fromEntries(MOC.map((m) => [m.id, m]));
const A3 = {pin: null, cur: null, year: -300};
function act3() {
  const g = new THREE.Group(), GX = 95;
  for (const [k, L] of Object.entries(LANE)) if (k !== 'ai') g.add(line([V(0, 0, L.z), V(GX - 6, 0, L.z)], L.c, 0.16));
  for (const y of [1700, 1800, 1850, 1900, 1950, 2000, 2020, 2026]) g.add(line([V(tx(y), 0, -9), V(tx(y), 0, 12.5)], COL.dim, 0.3));
  const seen = {};
  for (const m of MOC) { const L = LANE[m.nhanh], key = m.nhanh + Math.round(tx(m.nam)); seen[key] = (seen[key] || 0) + 1; const h = 0.8 + m.tam * 0.42;
    m.p = V(tx(m.nam) + (seen[key] - 1) * 0.9, 0, L.z + (seen[key] - 1) * 1.2 + (m.id === 'masullo' ? -3.5 : 0)); m.top = m.p.clone().setY(h);
    m.mesh = new THREE.Mesh(new THREE.BoxGeometry(0.09, h, 0.09), glow(L.c, 0.2)); m.mesh.position.copy(m.p).setY(h / 2); m.mesh.userData.m = m; g.add(m.mesh);
    m.dot = new THREE.Mesh(new THREE.SphereGeometry(m.tt === 'dinh-ly' ? 0.22 : 0.17, 16, 12), glow(L.c, 0.25)); m.dot.position.copy(m.top); m.dot.userData.m = m; g.add(m.dot); }
  const edges = D.noi.map(([a, b]) => { const A = byId[a], B = byId[b], mid = A.top.clone().lerp(B.top, 0.5); mid.y += 1.2 + A.top.distanceTo(B.top) * 0.16;
    const l = line(new THREE.QuadraticBezierCurve3(A.top, mid, B.top).getPoints(28), LANE[B.nhanh].c, 0.05); g.add(l); return {l, A, B}; });
  // cổng: vòng tròn ở cuối đường; cung đỏ lấp theo tỉ lệ không điểm đã chứng minh nằm trên đường ½
  const gate = new THREE.Group(); gate.position.set(GX, 6.2, 2); gate.rotation.y = Math.PI / 2; g.add(gate);
  gate.add(new THREE.Mesh(new THREE.TorusGeometry(6, 0.05, 8, 160), glow(COL.dim, 0.9)));
  let arc = null, arcT = -1; const setArc = (f) => { if (Math.abs(f - arcT) < 1e-4) return; arcT = f; if (arc) { gate.remove(arc); arc.geometry.dispose(); }
    arc = new THREE.Mesh(new THREE.TorusGeometry(6, 0.13, 10, 200, Math.max(0.0001, f) * Math.PI * 2), glow(COL.sig, 1)); arc.rotation.z = Math.PI / 2; gate.add(arc); };
  const core = new THREE.Mesh(new THREE.CircleGeometry(5.9, 64), glow(COL.amber, 0)); gate.add(core);
  const cursor = line([V(0, 0, -9), V(0, 0, 12.5)], COL.ink, 0.45); g.add(cursor);
  const ray = new THREE.Raycaster(); ray.params.Line = {threshold: 0.2};
  const pickAt = (cx, cy) => { ray.setFromCamera(new THREE.Vector2(cx / innerWidth * 2 - 1, -(cy / innerHeight) * 2 + 1), camera); const h = ray.intersectObjects(MOC.flatMap((m) => [m.mesh, m.dot]))[0]; return h ? h.object.userData.m : null; };
  canvas.addEventListener('click', (e) => { if (ACT !== 3) return; const m = pickAt(e.clientX, e.clientY); A3.pin = m; if (m) card3(m, true); });
  canvas.addEventListener('pointermove', (e) => { if (ACT !== 3) return; canvas.style.cursor = pickAt(e.clientX, e.clientY) ? 'pointer' : ''; });
  return {g, update(u, t) {
    const x = lerp(-2, GX - 3, ease(seg(u, 0.04, 0.9))), yr = xt(clamp(x, 0, 92)), end = ease(seg(u, 0.9, 1)); A3.year = yr; cursor.position.x = x;
    const portrait = innerWidth < innerHeight;
    camera.position.set(x - lerp(15, 20, end) * (portrait ? 1.5 : 1), lerp(8.5, 7, end) * (portrait ? 1.4 : 1), lerp(19, 9, end) * (portrait ? 1.5 : 1)); camera.lookAt(x + lerp(5, 4, end), lerp(2.2, 6, end), lerp(1.5, 2, end));
    let cur = null, tile = 0, so = 3;
    for (const m of MOC) { const on = m.p.x <= x + 0.01, near = Math.abs(m.p.x - x) < 9; m.mesh.material.opacity = on ? 0.55 : 0.12; m.dot.material.opacity = on ? 0.95 : 0.2; m.dot.scale.setScalar(on ? 1 + 0.18 * Math.sin(t * 2 + m.i) : 0.8);
      if (on) { if (!cur || m.p.x >= cur.p.x) cur = m; if (m.tile !== undefined) tile = Math.max(tile, m.tile); if (m.so) so = Math.max(so, m.so); }
      if (near || m === A3.pin) label('m' + m.id, `<b>${m.nam < 0 ? 'khoảng 300 TCN' : m.ngay || Math.floor(m.nam)}</b>${m.nguoi.split(' · ')[0].split(' (')[0]}`, m.top.clone().setY(m.top.y + 0.5), 'node' + (on ? ' on' : '')); }
    for (const e of edges) { const a = e.A.p.x <= x, b = e.B.p.x <= x; e.l.material.opacity = a && b ? 0.5 : a ? 0.14 : 0.04; }
    setArc(tile); core.material.opacity = 0.05 + 0.5 * (tile >= 1 ? 1 : 0) * (0.6 + 0.4 * Math.sin(t * 2));
    if (end > 0.5) cur = byId.rh26;
    if (cur !== A3.cur) { A3.cur = cur; A3.pin = null; if (cur) card3(cur, false); }
    $('#a3y').textContent = yr < 0 ? `${Math.round(-yr)} TCN` : yr < 2026 ? String(Math.floor(yr)) : yr < 2026.6 ? '2026' : yr < 2026.7 ? 'tháng 8/2026' : yr < 2026.86 ? 'tháng 10/2026' : '20/11/2026';
    $('#a3t').textContent = tile >= 1 ? '100 % (tuyên bố)' : tile > 0.02 ? `${vn(tile * 100, 1)} %` : tile > 0 ? '> 0 %' : yr >= 1914 ? 'vô hạn, chưa rõ tỉ lệ' : 'chưa biết gì'; $('#a3tb').style.width = `${tile * 100}%`;
    $('#a3s').innerHTML = so >= 1e4 ? `≈ 10<sup>${Math.log10(so).toFixed(so >= 1e12 ? 1 : 0).replace('.0', '')}</sup>` : vn(so); $('#a3sb').style.width = `${clamp(Math.log10(so) / 13.1) * 100}%`;
    label('gate', tile >= 1 ? 'cánh cổng: mọi không điểm trên đường ½' : 'cánh cổng', V(GX, 13.2, 2), 'mono am'); }};
}
const srcLinks = (ids) => (ids || []).map((k) => D.nguon[k] ? `<a href="${D.nguon[k][1]}" target="_blank" rel="noopener">${D.nguon[k][0]}</a>` : '').filter(Boolean).join(' · ');
function card3(m, pinned) { const L = LANE[m.nhanh], c = '#' + L.c.toString(16).padStart(6, '0');
  $('#a3card').innerHTML = `<div class="k"><i style="background:${c}"></i>${L.n} · ${TT[m.tt]}${pinned ? ' · đang ghim' : ''}</div><h3>${m.ten}</h3><div class="who">${m.nguoi} · ${m.nam < 0 ? 'khoảng 300 TCN' : m.ngay || Math.floor(m.nam)}</div><p>${m.y}</p><div class="src">Nguồn: ${srcLinks(m.src)}</div>`; }

// ---------------------------------------------------------------- cảnh 4: hai nhánh
function act4() {
  const g = new THREE.Group(), X = (y) => (y <= 2010 ? lerp(-26, -6, clamp((y - 1850) / 160)) : lerp(-6, 26, clamp((y - 2010) / 16.9))), Y = (v) => v * 1.5 - 7;
  const hum = MOC.filter((m) => m.nhanh !== 'ai' && m.nam >= 1850 && m.id !== 'masullo').sort((a, b) => a.nam - b.nam); let mx = 0;
  const hp = hum.map((m) => { mx = Math.max(mx, m.tam); return {y: m.nam, v: mx, n: m.ten, who: m.nguoi}; }); hp.unshift({y: 1850, v: 3.0, n: '', who: ''}); hp.push({y: 2026.6, v: 8.05, n: '', who: ''}, {y: 2026.887, v: 10, n: 'Tuyên bố chứng minh', who: ''});
  const ap = [{y: 1850, v: 0, n: ''}, {y: 1955, v: 0, n: ''}, ...D.ai.map((a) => ({y: a.nam, v: a.tam, n: a.ten}))];
  const mk = (pts, c, z) => { const cv = new THREE.CatmullRomCurve3(pts.map((p) => V(X(p.y), Y(p.v), z)), false, 'catmullrom', 0.08), geo = new THREE.TubeGeometry(cv, 700, 0.1, 8, false), m = new THREE.Mesh(geo, glow(c, 1)); g.add(m);
    const beads = pts.filter((p) => p.n).map((p) => { const b = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 12), glow(c, 1)); b.position.set(X(p.y), Y(p.v), z); b.userData = p; g.add(b); return b; }); return {m, n: geo.index.count, beads, cv}; };
  const H = mk(hp, COL.amber, -0.6), A = mk(ap, COL.sig, 0.6);
  g.add(line([V(-27, Y(0), 0), V(27.5, Y(0), 0)], COL.dim, 0.5), line([V(-27, Y(0), 0), V(-27, Y(10.4), 0)], COL.dim, 0.5), line([V(-6, Y(0) - 0.3, 0), V(-6, Y(10.4), 0)], COL.dim, 0.22));
  for (const v of [2, 4, 6, 8, 10]) g.add(line([V(-27, Y(v), 0), V(27.5, Y(v), 0)], COL.dim, 0.12));
  const meet = new THREE.Mesh(new THREE.SphereGeometry(0.5, 24, 16), glow(COL.ink, 0)); meet.position.set(X(2026.887), Y(10), 0); g.add(meet);
  return {g, update(u, t) {
    const yr = u < 0.5 ? lerp(1850, 2010, ease(seg(u, 0.03, 0.5))) : lerp(2010, 2026.9, ease(seg(u, 0.5, 0.9))), cx = X(yr);
    for (const R of [H, A]) { const f = clamp((cx + 26) / 52); R.m.geometry.setDrawRange(0, Math.floor(R.n * f / 48) * 48); R.beads.forEach((b) => { const on = b.position.x <= cx + 0.05; b.visible = on; }); }
    const k = ease(seg(u, 0.45, 0.92)), portrait = innerWidth < innerHeight;
    camera.position.set(lerp(-6, 9, k), lerp(1, 2, k), lerp(54, 42, k) * (portrait ? 1.7 : 1)); camera.lookAt(lerp(-4, 9, k), lerp(-1, 0.8, k), 0);
    const done = seg(u, 0.9, 1); meet.material.opacity = done; meet.scale.setScalar(1 + done * (1.2 + 0.3 * Math.sin(t * 3)));
    for (const y of [1859, 1900, 1950, 2010, 2020, 2024, 2026]) label('y' + y, String(y), V(X(y), Y(0) - 0.8, 0), 'mono');
    for (const v of [0, 5, 10]) label('v' + v, String(v), V(-28, Y(v), 0), 'mono');
    const near = (R, cls, dy) => R.beads.filter((b) => b.visible).slice(-2).forEach((b, i) => label(cls + b.userData.y + b.userData.n, `<b>${b.userData.y > 2026 ? '2026' : Math.floor(b.userData.y)}</b>${b.userData.n}`, b.position.clone().add(V(0, dy * (1 + i * 1.5), 0)), 'node on ' + cls));
    near(H, 'hu', 0.9); near(A, 'ai', -0.9);
    $('#a4y').textContent = yr > 2026.85 ? '20/11/2026' : String(Math.floor(yr));
    const hv = hp.filter((p) => p.y <= yr).at(-1)?.v ?? 3, av = ap.filter((p) => p.y <= yr).at(-1)?.v ?? 0; $('#a4h').textContent = vn(hv, 1); $('#a4a').textContent = vn(av, 1); $('#a4hb').style.width = `${hv * 10}%`; $('#a4ab').style.width = `${av * 10}%`; }};
}

// ---------------------------------------------------------------- cảnh 5: bốn mươi mốt ngày
function act5() {
  const g = new THREE.Group(), S = D.buoc41, plates = S.map(([d, n], i) => { const a = i * 0.62, r = 4.6, m = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.09, 0.9), glow(i === S.length - 1 ? COL.sig : COL.amber, 0.12));
    m.position.set(Math.cos(a) * r, i * 0.62 - 6, Math.sin(a) * r); m.rotation.y = -a + Math.PI / 2; g.add(m); return {m, d, n}; });
  g.add(line(plates.map((p) => p.m.position.clone()), COL.amber, 0.35));
  // con đường thuần người chạy song song: 12 năm = 144 tháng, mỗi chấm một tháng
  const hp = []; for (let i = 0; i < 144; i++) { const a = i * 0.21, r = 10.5; hp.push(V(Math.cos(a) * r, (i / 143) * 11.8 - 6, Math.sin(a) * r)); }
  g.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(hp), new THREE.PointsMaterial({color: COL.blue, size: 0.16, transparent: true, opacity: 0.8})), line(hp, COL.blue, 0.18));
  const top = new THREE.Mesh(new THREE.SphereGeometry(0.45, 24, 16), glow(COL.ink, 0)); top.position.set(0, 7, 0); g.add(top);
  return {g, update(u, t) {
    const f = seg(u, 0.05, 0.72) * S.length, n = Math.min(S.length, Math.floor(f)), a = 0.55 + u * 2.6 + (reduce ? 0 : t * 0.02), portrait = innerWidth < innerHeight;
    plates.forEach((p, i) => { p.m.material.opacity = i < n ? 0.5 : 0.08; if (i < n && i >= n - 3) label('s' + i, `<b>${p.d}</b>`, p.m.position.clone().add(V(0, 0.5, 0)), 'node on'); });
    const cy = lerp(-5, 5.5, seg(u, 0, 0.8)); camera.position.set(Math.cos(a) * 23 * (portrait ? 1.5 : 1), cy + 5, Math.sin(a) * 23 * (portrait ? 1.5 : 1)); camera.lookAt(0, cy, 0);
    top.material.opacity = n >= S.length ? 0.6 + 0.4 * Math.sin(t * 3) : 0;
    label('h12', 'đường thuần người: 12 năm, mỗi chấm một tháng', hp[70].clone().add(V(0, 0.6, 0)), 'mono bl'); label('h41', '41 ngày, 20 bước', plates[Math.min(S.length - 1, Math.max(0, n - 1))].m.position.clone().add(V(0, -0.7, 0)), 'mono am');
    const el = $('#a5list'); if (el._n !== n) { el._n = n; el.innerHTML = S.slice(Math.max(0, n - 4), n).map(([d, s], i, arr) => `<li class="${i === arr.length - 1 ? 'on' : ''}"><b>${d}</b>${s}</li>`).join('') || '<li><b>6/10</b>Bắt đầu</li>'; $('#a5n').textContent = `${String(n).padStart(2, '0')} / ${S.length}`; }
    const c = ease(seg(u, 0.6, 0.86)); $('#a5l').textContent = vn(Math.round(17374215 * c)); $('#a5f').textContent = vn(Math.round(175187 * c)); $('#a5m').textContent = vn(Math.round(239 * c));
    const kn = Math.floor(seg(u, 0.8, 0.99) * (D.kiem.length + 0.99)), ke = $('#a5k'); if (ke._n !== kn) { ke._n = kn; ke.innerHTML = D.kiem.slice(0, kn).map(([a2, b], i) => `<li class="${i === D.kiem.length - 1 ? 'wait' : ''}"><span>${a2}</span><b>${b}</b></li>`).join(''); } }};
}

// ---------------------------------------------------------------- cảnh 6: sau cánh cổng
function act6() {
  const g = new THREE.Group(); const ring = new THREE.Mesh(new THREE.TorusGeometry(6, 0.12, 10, 200), glow(COL.sig, 1)); g.add(ring);
  const pts = zeros.map((z) => V(0, 0, -z * 0.55 - 4)); g.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(pts), new THREE.PointsMaterial({color: COL.amber, size: 0.3})));
  g.add(line([V(0, 0, 0), V(0, 0, -160)], COL.amber, 0.45)); for (const s of [-3, 3]) g.add(line([V(s, 0, 4), V(s, 0, -160)], COL.dim, 0.3));
  return {g, update(u, t) { camera.position.set(0.6 * Math.sin(t * 0.2), 1.5 - 0.9 * u, lerp(26, -18, ease(u))); camera.lookAt(0, 0.2, -60); ring.material.opacity = 0.7 + 0.3 * Math.sin(t * 1.5); }};
}

// ---------------------------------------------------------------- điều phối theo vị trí cuộn
const ACTS = [act0, act1, act2, act3, act4, act5, act6].map((f) => { const a = f(); a.g.visible = false; scene.add(a.g); return a; });
const secs = $$('section[data-act]'), fade = $('#fade'), huds = $$('.hud'), nav = $('#nav');
let ACT = -1;
nav.innerHTML = secs.map((s, i) => `<a href="#${s.id}" data-i="${i}"><span>${String(i).padStart(2, '0')}</span>${s.dataset.t}</a>`).join('');
$('#a1n').addEventListener('input', (e) => { A1.auto = false; A1.N = +e.target.value; });
$('#a1auto').addEventListener('click', () => { A1.auto = true; });
const clock = new THREE.Clock();
function frame() {
  const t = clock.getElapsedTime(), vh = innerHeight, mid = vh / 2; let act = 0, u = 0, edge = 1;
  secs.forEach((s, i) => { const r = s.getBoundingClientRect(); if (r.top <= mid && r.bottom > mid) { act = i; u = clamp(-r.top / Math.max(1, r.height - vh)); edge = Math.min(mid - r.top, r.bottom - mid) / (vh * 0.45); } });
  if (act !== ACT) { ACT = act; ACTS.forEach((a, i) => { a.g.visible = i === act; }); huds.forEach((h) => h.classList.toggle('on', +h.dataset.act === act)); $$('a', nav).forEach((a) => a.classList.toggle('on', +a.dataset.i === act));
    scene.fog.density = [0.02, 0.004, 0.016, 0.011, 0.004, 0.008, 0.012][act]; bloom.strength = [0.9, 0.55, 0.8, 0.85, 0.7, 0.8, 1.0][act]; canvas.style.cursor = ''; }
  fade.style.opacity = (act === 0 && u < 0.5) || (act === secs.length - 1 && u > 0.5) ? 0 : 1 - clamp(edge);
  ACTS[act].update(u, t); sweepLabels(); composer.render(); requestAnimationFrame(frame);
}
// lời dẫn hiện khi vào giữa màn hình
const io = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle('in', e.isIntersecting)), {rootMargin: '-28% 0px -28% 0px'}); $$('.beat').forEach((b) => io.observe(b));
// bảng nguồn và các con số ở phần kết
$('#nguon').innerHTML = Object.values(D.nguon).map(([n, h]) => `<li><a href="${h}" target="_blank" rel="noopener">${n}</a></li>`).join('');
$('#dem').textContent = `${D.moc.length} mốc, ${D.noi.length} liên hệ, ${Object.keys(D.nguon).length} nguồn, ${zeros.length} không điểm, ${Z.ns * Z.nt} điểm lưới |ζ|`;
document.documentElement.classList.add('ok'); frame();
window.RH = {D, Z, psi, psiN, get act() { return ACT; }};
