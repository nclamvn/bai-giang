// Giả thuyết Riemann · trang điện ảnh tương tác (toan/riemann). Một canvas three.js cố định, bảy cảnh đổi theo vị trí cuộn.
// Số liệu: tools/riemann/zeta.json (không điểm và lưới |ζ| tính bằng mpmath) và tools/riemann/du-lieu.json (sổ mốc có nguồn, trạng thái).
// Cảnh: 0 dãy số nguyên tố · 1 bậc thang ψ(x) và công thức tường minh · 2 địa hình |ζ(s)| · 3 con đường công phá (mạng lưới mốc)
// · 4 hai nhánh trí tuệ · 5 bốn mươi mốt ngày · 6 sau cánh cổng.
import * as THREE from 'three';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {Line2} from 'three/addons/lines/Line2.js';
import {LineGeometry} from 'three/addons/lines/LineGeometry.js';
import {LineMaterial} from 'three/addons/lines/LineMaterial.js';
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
const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.85, 0.7, 0.18); composer.addPass(bloom);
// lớp phim: tối bốn góc, tách màu rất nhẹ ở rìa, hạt nhiễu mịn
const FX = new ShaderPass({uniforms: {tDiffuse: {value: null}, uT: {value: 0}}, vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader: `uniform sampler2D tDiffuse;uniform float uT;varying vec2 vUv;
float hh(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uT)*43758.5453);}
void main(){vec2 d=vUv-.5;float r=dot(d,d);vec2 o=d*r*.014;
vec3 c=vec3(texture2D(tDiffuse,vUv+o).r,texture2D(tDiffuse,vUv).g,texture2D(tDiffuse,vUv-o).b);
c*=1.-smoothstep(.16,.8,r)*.72;c+=(hh(floor(vUv*vec2(1600.,900.)))-.5)*.011;gl_FragColor=vec4(max(c,0.),1.);}`});
composer.addPass(FX); composer.addPass(new OutputPass());
let ACT = -1;
function resize() { const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); composer.setSize(w, h); camera.aspect = w / h; camera.fov = w < h ? 58 : 40;
  vo(); }
// màn hình dọc: dời khung nhìn theo từng cảnh để hình không nằm dưới bảng số và thẻ lời
function vo() { const w = innerWidth, h = innerHeight; if (w < h) camera.setViewOffset(w, h, 0, h * [-0.27, 0.08, 0.1, 0.15, -0.16, 0.02, 0][Math.max(0, ACT)], w, h); else camera.clearViewOffset(); camera.updateProjectionMatrix(); }
addEventListener('resize', resize); resize();

const glow = (c, o = 1) => new THREE.MeshBasicMaterial({color: c, transparent: true, opacity: o});
const lineM = (c, o = 1) => new THREE.LineBasicMaterial({color: c, transparent: true, opacity: o});
const line = (pts, c, o = 1) => new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineM(c, o));
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const PR = Math.min(devicePixelRatio, 2);
// nét dày phát sáng (Line2) cho các đường chính; chấm tròn mềm cho mọi đám điểm
const fat = (pts, c, w = 2, o = 1) => { const g = new LineGeometry(); g.setPositions(pts.flatMap((p) => [p.x, p.y, p.z])); return new Line2(g, new LineMaterial({color: c, linewidth: w * PR, transparent: true, opacity: o, depthWrite: false})); };
const DOT = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.22, 'rgba(255,255,255,.9)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
const dots = (pts, c, size, o = 1) => new THREE.Points(Array.isArray(pts) && pts[0]?.isVector3 ? new THREE.BufferGeometry().setFromPoints(pts) : new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(pts, 3)),
  new THREE.PointsMaterial({color: c, size, map: DOT, transparent: true, opacity: o, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true}));
const rnd = (a) => (Math.random() * 2 - 1) * a;
// bụi sáng trôi quanh máy quay ở mọi cảnh, cho chiều sâu
const dust = dots(Array.from({length: small ? 500 : 1300}, () => V(rnd(70), rnd(40), rnd(70))), 0x8f93a8, 0.2, 0.55); scene.add(dust);
// vòng sóng lan ra (dùng khi cổng đầy, khi hai nhánh gặp nhau)
const shock = (c, n = 3) => { const g = new THREE.Group(), rs = Array.from({length: n}, () => { const m = new THREE.Mesh(new THREE.RingGeometry(0.988, 1, 128), new THREE.MeshBasicMaterial({color: c, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending})); g.add(m); return m; });
  g.userData.tick = (t, on, R = 14) => rs.forEach((m, i) => { const f = ((t * 0.35 + i / n) % 1); m.scale.setScalar(1 + f * R); m.material.opacity = on * (1 - f) * (1 - f) * 0.55; }); return g; };

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
  g.add(dots(ca, 0x6b6b78, 0.13, 0.9), dots(pa, COL.amber, 0.5, 1)); void P;
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
  g.add(fat(st, COL.ink, 1.1, 0.9)); g.add(line([P(X0, X0), P(X1, X1)], COL.dim, 0.5));
  g.add(line([P(0, 0), P(X1 + 2, 0)], COL.dim, 0.4), line([P(0, 0), P(0, 104)], COL.dim, 0.4));
  const approx = fat([V(0, 0, 0), V(1, 0, 0)], COL.amber, 1.7, 1); g.add(approx); const aArr = new Float32Array(M * 3);
  const wg = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(M * 3), 3)); const wave = new THREE.Line(wg, lineM(COL.sig, 0.85)); g.add(wave);
  const pp = []; for (let n = 2; n <= X1; n++) if (isPrime(n)) pp.push(P(n, 0)); g.add(dots(pp, COL.amber, 0.7, 1));
  let last = -1;
  const redraw = (N) => { const a = aArr, w = wg.attributes.position.array;
    for (let i = 0; i < M; i++) { const x = X0 + (X1 - X0) * i / (M - 1), p = P(x, psiN(x, N)); a[i * 3] = p.x; a[i * 3 + 1] = p.y; a[i * 3 + 2] = 0.02;
      const gk = zeros[Math.max(0, N - 1)], L = Math.log(x), q = P(x * 0.55, N ? -2 * Math.sqrt(x) * (0.5 * Math.cos(gk * L) + gk * Math.sin(gk * L)) / (0.25 + gk * gk) * 6 + 84 : 84); w[i * 3] = q.x; w[i * 3 + 1] = q.y; w[i * 3 + 2] = 0; }
    approx.geometry.dispose(); approx.geometry = new LineGeometry(); approx.geometry.setPositions(a); wg.attributes.position.needsUpdate = true; };
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
  const tm = new THREE.MeshStandardMaterial({vertexColors: true, roughness: 0.55, metalness: 0.3, side: THREE.DoubleSide}), uScan = {value: 0};
  // đường đồng mức phát sáng theo độ cao, đáy giếng (không điểm) ửng đỏ, một vệt quét chạy theo máy quay
  tm.onBeforeCompile = (sh) => { sh.uniforms.uScan = uScan;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vP;varying float vS;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvP = position; vS = 1.0 - abs(normal.y);');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vP;varying float vS;uniform float uScan;').replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      float hN = vP.y / ${HY.toFixed(1)}; float q = hN * 18.0; float fw = fwidth(q); float ln = (1.0 - smoothstep(0.0, fw * 1.4, abs(fract(q) - 0.5))) * smoothstep(0.004, 0.03, fw) * smoothstep(0.004, 0.05, vS);
      totalEmissiveRadiance += vec3(0.85, 0.63, 0.40) * ln * 0.32 * smoothstep(0.03, 0.25, hN);
      totalEmissiveRadiance += vec3(0.80, 0.14, 0.30) * pow(smoothstep(0.30, 0.0, hN), 1.5) * 1.1;
      totalEmissiveRadiance += vec3(0.85, 0.63, 0.40) * exp(-pow((vP.z - uScan) * 0.45, 2.0)) * 0.22;`); };
  g.add(new THREE.Mesh(geo, tm));
  const gl = []; for (let j = 0; j < nt; j += 8) for (let i = 0; i < ns - 1; i++) { const a = (j * ns + i) * 3; gl.push(pos[a], pos[a + 1] + 0.02, pos[a + 2], pos[a + 3], pos[a + 4] + 0.02, pos[a + 5]); }
  g.add(new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(gl, 3)), lineM(COL.ink, 0.1)));
  const cl = []; for (let j = 0; j < nt; j++) { const t = Z.t[1] * j / (nt - 1); cl.push(V(X(0.5), hAt(0.5, t) + 0.05, Zc(t))); } g.add(fat(cl, COL.amber, 2.2, 1));
  for (const s of [0, 1]) { const e = []; for (let j = 0; j < nt; j += 2) { const t = Z.t[1] * j / (nt - 1); e.push(V(X(s), hAt(s, t) + 0.04, Zc(t))); } g.add(line(e, COL.ink, 0.35)); }
  const zs = zeros.filter((z) => z < Z.t[1] - 1), beams = [];
  for (const z of zs) { const m = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), glow(COL.sig)); m.position.set(X(0.5), 0.12, Zc(z)); g.add(m);
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 7, 6), glow(COL.sig, 0.5)); b.position.set(X(0.5), 3.6, Zc(z)); g.add(b); beams.push(b);
    const r = new THREE.Mesh(new THREE.RingGeometry(0.9, 1, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({color: COL.sig, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide})); r.position.set(X(0.5), 0.35, Zc(z)); g.add(r); b.userData.ring = r; }
  return {g, update(u, t) {
    const k = ease(seg(u, 0.08, 0.92)), tt = lerp(-4, 62, k), rise = ease(seg(u, 0.8, 1));
    camera.position.set(X(0.5) + lerp(-9, 1.6, ease(seg(u, 0, 0.3))) + 5 * rise, lerp(11, 5.2, ease(seg(u, 0, 0.32))) + 16 * rise, Zc(tt) + lerp(22, 14, seg(u, 0, 0.3))); camera.lookAt(X(0.5), 1.2, Zc(tt + 13 - 6 * rise));
    uScan.value = Zc(tt + 10 + 9 * Math.sin(t * 0.5));
    beams.forEach((b, i) => { b.material.opacity = 0.32 + 0.25 * Math.sin(t * 1.6 + i); const f = (t * 0.4 + i * 0.37) % 1, r = b.userData.ring; r.scale.setScalar(0.3 + f * 2.2); r.material.opacity = (1 - f) * 0.7; });
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
  const grid = new THREE.GridHelper(240, 120, 0x2a2a33, 0x16161c); grid.position.set(48, -0.02, 2); grid.material.transparent = true; grid.material.opacity = 0.55; g.add(grid);
  const seen = {};
  for (const m of MOC) { const L = LANE[m.nhanh], key = m.nhanh + Math.round(tx(m.nam)); seen[key] = (seen[key] || 0) + 1; const h = 0.8 + m.tam * 0.42;
    m.p = V(tx(m.nam) + (seen[key] - 1) * 0.9, 0, L.z + (seen[key] - 1) * 1.2 + (m.id === 'masullo' ? -3.5 : 0)); m.top = m.p.clone().setY(h);
    m.mesh = new THREE.Mesh(new THREE.BoxGeometry(0.09, h, 0.09), glow(L.c, 0.2)); m.mesh.position.copy(m.p).setY(h / 2); m.mesh.userData.m = m; g.add(m.mesh);
    m.dot = new THREE.Mesh(new THREE.SphereGeometry(m.tt === 'dinh-ly' ? 0.22 : 0.17, 16, 12), glow(L.c, 0.25)); m.dot.position.copy(m.top); m.dot.userData.m = m; g.add(m.dot);
    m.base = new THREE.Mesh(new THREE.RingGeometry(0.34, 0.4, 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({color: L.c, transparent: true, opacity: 0.15, depthWrite: false, side: THREE.DoubleSide})); m.base.position.copy(m.p).setY(0.02); g.add(m.base); }
  const edges = D.noi.map(([a, b]) => { const A = byId[a], B = byId[b], mid = A.top.clone().lerp(B.top, 0.5); mid.y += 1.2 + A.top.distanceTo(B.top) * 0.16;
    const cv = new THREE.QuadraticBezierCurve3(A.top, mid, B.top), l = line(cv.getPoints(28), LANE[B.nhanh].c, 0.05); g.add(l); return {l, A, B, cv}; });
  // hạt sáng chạy dọc các cung đã thông: ý tưởng truyền từ mốc trước sang mốc sau
  const FP = 3, flow = dots(new Float32Array(edges.length * FP * 3), 0xfff2dc, 0.34, 1); flow.frustumCulled = false; g.add(flow);
  const burst = shock(COL.sig, 4);
  // cổng: vòng tròn ở cuối đường; cung đỏ lấp theo tỉ lệ không điểm đã chứng minh nằm trên đường ½
  const gate = new THREE.Group(); gate.position.set(GX, 6.2, 2); gate.rotation.y = Math.PI / 2; g.add(gate);
  gate.add(new THREE.Mesh(new THREE.TorusGeometry(6, 0.05, 8, 160), glow(COL.dim, 0.9)));
  let arc = null, arcT = -1; const setArc = (f) => { if (Math.abs(f - arcT) < 1e-4) return; arcT = f; if (arc) { gate.remove(arc); arc.geometry.dispose(); }
    arc = new THREE.Mesh(new THREE.TorusGeometry(6, 0.13, 10, 200, Math.max(0.0001, f) * Math.PI * 2), glow(COL.sig, 1)); arc.rotation.z = Math.PI / 2; gate.add(arc); };
  const core = new THREE.Mesh(new THREE.CircleGeometry(5.9, 64), glow(COL.amber, 0)); gate.add(core); burst.scale.setScalar(6); gate.add(burst);
  const halo = dots(Array.from({length: 220}, (_, i) => { const a = i / 220 * Math.PI * 2, r = 6.5 + Math.random() * 1.6; return V(Math.cos(a) * r, Math.sin(a) * r, rnd(0.6)); }), COL.amber, 0.22, 0.0); gate.add(halo);
  const cursor = fat([V(0, 0.03, -9), V(0, 0.03, 12.5)], COL.ink, 1, 0.38); g.add(cursor);
  const ray = new THREE.Raycaster(); ray.params.Line = {threshold: 0.2};
  const pickAt = (cx, cy) => { ray.setFromCamera(new THREE.Vector2(cx / innerWidth * 2 - 1, -(cy / innerHeight) * 2 + 1), camera); const h = ray.intersectObjects(MOC.flatMap((m) => [m.mesh, m.dot]))[0]; return h ? h.object.userData.m : null; };
  canvas.addEventListener('click', (e) => { if (ACT !== 3) return; const m = pickAt(e.clientX, e.clientY); A3.pin = m; if (m) card3(m, true); });
  canvas.addEventListener('pointermove', (e) => { if (ACT !== 3) return; canvas.style.cursor = pickAt(e.clientX, e.clientY) ? 'pointer' : ''; });
  return {g, update(u, t) {
    const x = lerp(-2, GX - 3, ease(seg(u, 0.04, 0.9))), yr = xt(clamp(x, 0, 92)), end = ease(seg(u, 0.9, 1)); A3.year = yr; cursor.position.x = x;
    const portrait = innerWidth < innerHeight;
    camera.position.set(x - lerp(15, 20, end) * (portrait ? 1.5 : 1), lerp(8.5, 7, end) * (portrait ? 1.4 : 1), lerp(19, 9, end) * (portrait ? 1.5 : 1)); camera.lookAt(x + lerp(5, 4, end), lerp(2.2, 6, end), lerp(1.5, 2, end));
    let cur = null, tile = 0, so = 3;
    for (const m of MOC) { const on = m.p.x <= x + 0.01, near = Math.abs(m.p.x - x) < 9; m.mesh.material.opacity = on ? 0.55 : 0.12; m.dot.material.opacity = on ? 0.95 : 0.2; m.dot.scale.setScalar(on ? 1 + 0.18 * Math.sin(t * 2 + m.i) : 0.8); m.base.material.opacity = on ? 0.8 : 0.12; m.base.scale.setScalar(on ? 1 + 0.5 * ((t * 0.5 + m.i * 0.3) % 1) : 1);
      if (on) { if (!cur || m.p.x >= cur.p.x) cur = m; if (m.tile !== undefined) tile = Math.max(tile, m.tile); if (m.so) so = Math.max(so, m.so); }
      if (near || m === A3.pin) label('m' + m.id, `<b>${m.nam < 0 ? 'khoảng 300 TCN' : m.ngay || Math.floor(m.nam)}</b>${m.nguoi.split(' · ')[0].split(' (')[0]}`, m.top.clone().setY(m.top.y + 0.5), 'node' + (on ? ' on' : '')); }
    const fa = flow.geometry.attributes.position.array, tp = V(0, 0, 0);
    edges.forEach((e, k) => { const a = e.A.p.x <= x, b = e.B.p.x <= x; e.l.material.opacity = a && b ? 0.5 : a ? 0.14 : 0.04;
      for (let j = 0; j < FP; j++) { const o = (k * FP + j) * 3; if (a && b) { e.cv.getPoint((t * 0.22 + j / FP + k * 0.137) % 1, tp); fa[o] = tp.x; fa[o + 1] = tp.y; fa[o + 2] = tp.z; } else fa[o + 1] = -999; } });
    flow.geometry.attributes.position.needsUpdate = true;
    setArc(tile); const full = tile >= 1 ? 1 : 0; core.material.opacity = 0.04 + 0.42 * full * (0.6 + 0.4 * Math.sin(t * 2)); burst.userData.tick(t, full, 0.9); halo.material.opacity = 0.25 + 0.6 * full; halo.rotation.z = t * 0.08;
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
    // màn sáng rủ từ dải xuống trục: sáng ở mép trên, tắt dần về đáy
    // (chỉ giữ các điểm có hoành độ tăng dần, để màn không tự chồng lên chính nó ở các bậc đứng)
    const cp = [], cc2 = [], ci = [], col = new THREE.Color(c), sp = []; let lx = -1e9; for (const q of cv.getSpacedPoints(900)) if (q.x > lx + 0.02) { sp.push(q); lx = q.x; }
    sp.forEach((q, i) => { cp.push(q.x, q.y, z, q.x, Y(0), z); cc2.push(col.r * 0.2, col.g * 0.2, col.b * 0.2, 0, 0, 0); if (i < sp.length - 1) { const a = i * 2; ci.push(a, a + 1, a + 2, a + 2, a + 1, a + 3); } });
    const cg = new THREE.BufferGeometry(); cg.setAttribute('position', new THREE.Float32BufferAttribute(cp, 3)); cg.setAttribute('color', new THREE.Float32BufferAttribute(cc2, 3)); cg.setIndex(ci);
    const curtain = new THREE.Mesh(cg, new THREE.MeshBasicMaterial({vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide})); g.add(curtain);
    const beads = pts.filter((p) => p.n).map((p) => { const b = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 12), glow(c, 1)); b.position.set(X(p.y), Y(p.v), z); b.userData = p; g.add(b); return b; }); return {m, n: geo.index.count, beads, cv, curtain, sp}; };
  const H = mk(hp, COL.amber, -0.6), A = mk(ap, COL.sig, 0.6);
  g.add(line([V(-27, Y(0), 0), V(27.5, Y(0), 0)], COL.dim, 0.5), line([V(-27, Y(0), 0), V(-27, Y(10.4), 0)], COL.dim, 0.5), line([V(-6, Y(0) - 0.3, 0), V(-6, Y(10.4), 0)], COL.dim, 0.22));
  for (const v of [2, 4, 6, 8, 10]) g.add(line([V(-27, Y(v), 0), V(27.5, Y(v), 0)], COL.dim, 0.12));
  const meet = new THREE.Mesh(new THREE.SphereGeometry(0.5, 24, 16), glow(COL.ink, 0)); meet.position.set(X(2026.887), Y(10), 0); g.add(meet);
  const wave4 = shock(0xfff2dc, 4); wave4.position.copy(meet.position); g.add(wave4);
  const sparks = dots(new Float32Array(2 * 3), 0xffffff, 1.3, 1); sparks.frustumCulled = false; g.add(sparks);
  return {g, update(u, t) {
    const yr = u < 0.5 ? lerp(1850, 2010, ease(seg(u, 0.03, 0.5))) : lerp(2010, 2026.9, ease(seg(u, 0.5, 0.9))), cx = X(yr);
    const sa = sparks.geometry.attributes.position.array;
    [H, A].forEach((R, ri) => { const f = clamp((cx + 26) / 52); R.m.geometry.setDrawRange(0, Math.floor(R.n * f / 48) * 48); R.beads.forEach((b) => { const on = b.position.x <= cx + 0.05; b.visible = on; });
      // đầu dải: tìm điểm cuối theo hoành độ con trỏ thời gian, màn sáng vẽ tới đó
      let k = 0; while (k < R.sp.length - 1 && R.sp[k + 1].x <= cx) k++; R.curtain.geometry.setDrawRange(0, k * 6); sa.set([R.sp[k].x, R.sp[k].y, R.sp[k].z + (ri ? 0.6 : -0.6) * 0], ri * 3); });
    sparks.geometry.attributes.position.needsUpdate = true;
    const k = ease(seg(u, 0.45, 0.92)), portrait = innerWidth < innerHeight;
    camera.position.set(lerp(-6, 9, k), lerp(1, 2, k), lerp(54, 42, k) * (portrait ? 1.7 : 1)); camera.lookAt(lerp(-4, 9, k), lerp(-1, 0.8, k), 0);
    const done = seg(u, 0.9, 1); meet.material.opacity = done; meet.scale.setScalar(1 + done * (1.2 + 0.3 * Math.sin(t * 3))); wave4.userData.tick(t, done, 9);
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
  g.add(dots(hp, COL.blue, 0.42, 0.95), line(hp, COL.blue, 0.2));
  const top = new THREE.Mesh(new THREE.SphereGeometry(0.45, 24, 16), glow(COL.ink, 0)); top.position.set(0, 7, 0); g.add(top);
  // dòng mã Lean: hạt bay lên trong lòng cầu thang, dày dần theo tiến độ 41 ngày
  const NC = small ? 500 : 1400, code = dots(new Float32Array(NC * 3), 0x9fe0b0, 0.13, 0.9), cs = Array.from({length: NC}, () => [Math.random() * Math.PI * 2, Math.sqrt(Math.random()) * 3.2, Math.random(), 0.3 + Math.random() * 0.9]); code.frustumCulled = false; g.add(code);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 15, 8), glow(0xfff2dc, 0)); beam.position.y = 0.5; g.add(beam); const wave5 = shock(0xfff2dc, 3); wave5.position.set(0, 7, 0); wave5.rotation.x = Math.PI / 2; g.add(wave5);
  return {g, update(u, t) {
    const f = seg(u, 0.05, 0.72) * S.length, n = Math.min(S.length, Math.floor(f)), a = 0.55 + u * 2.6 + (reduce ? 0 : t * 0.02), portrait = innerWidth < innerHeight;
    plates.forEach((p, i) => { p.m.material.opacity = i === n - 1 ? 0.6 : i < n ? 0.3 : 0.07; if (i < n && i >= n - 3) label('s' + i, `<b>${p.d}</b>`, p.m.position.clone().add(V(0, 0.5, 0)), 'node on'); });
    const cy = lerp(-5, 5.5, seg(u, 0, 0.8)); camera.position.set(Math.cos(a) * 23 * (portrait ? 1.5 : 1), cy + 5, Math.sin(a) * 23 * (portrait ? 1.5 : 1)); camera.lookAt(0, cy, 0);
    const doneN = n >= S.length ? 1 : 0; top.material.opacity = doneN * (0.6 + 0.4 * Math.sin(t * 3)); beam.material.opacity = 0.5 * doneN; wave5.userData.tick(t, doneN, 11);
    const ca2 = code.geometry.attributes.position.array, dens = seg(u, 0.05, 0.86), act = Math.floor(NC * (0.06 + 0.94 * dens));
    for (let i = 0; i < NC; i++) { const c0 = cs[i], y = ((c0[2] + t * 0.05 * c0[3]) % 1) * 14 - 6.5; if (i < act) { ca2[i * 3] = Math.cos(c0[0]) * c0[1]; ca2[i * 3 + 1] = y; ca2[i * 3 + 2] = Math.sin(c0[0]) * c0[1]; } else ca2[i * 3 + 1] = -999; }
    code.geometry.attributes.position.needsUpdate = true;
    label('h12', 'đường thuần người: 12 năm, mỗi chấm một tháng', hp[70].clone().add(V(0, 0.6, 0)), 'mono bl'); label('h41', '41 ngày, 20 bước', plates[Math.min(S.length - 1, Math.max(0, n - 1))].m.position.clone().add(V(0, -0.7, 0)), 'mono am');
    const el = $('#a5list'); if (el._n !== n) { el._n = n; el.innerHTML = S.slice(Math.max(0, n - 4), n).map(([d, s], i, arr) => `<li class="${i === arr.length - 1 ? 'on' : ''}"><b>${d}</b>${s}</li>`).join('') || '<li><b>6/10</b>Bắt đầu</li>'; $('#a5n').textContent = `${String(n).padStart(2, '0')} / ${S.length}`; }
    const c = ease(seg(u, 0.6, 0.86)); $('#a5l').textContent = vn(Math.round(17374215 * c)); $('#a5f').textContent = vn(Math.round(175187 * c)); $('#a5m').textContent = vn(Math.round(239 * c));
    const kn = Math.floor(seg(u, 0.8, 0.99) * (D.kiem.length + 0.99)), ke = $('#a5k'); if (ke._n !== kn) { ke._n = kn; ke.innerHTML = D.kiem.slice(0, kn).map(([a2, b], i) => `<li class="${i === D.kiem.length - 1 ? 'wait' : ''}"><span>${a2}</span><b>${b}</b></li>`).join(''); } }};
}

// ---------------------------------------------------------------- cảnh 6: sau cánh cổng
function act6() {
  const g = new THREE.Group(); const ring = new THREE.Mesh(new THREE.TorusGeometry(6, 0.12, 10, 200), glow(COL.sig, 1)); g.add(ring);
  const pts = zeros.map((z) => V(0, 0, -z * 0.55 - 4)); g.add(dots(pts, COL.amber, 0.7, 1));
  const tun = zeros.slice(0, 60).map((z, i) => { const m = new THREE.Mesh(new THREE.TorusGeometry(6, 0.025, 6, 120), glow(i % 5 === 0 ? COL.sig : COL.amber, 0.5)); m.position.z = -z * 0.55 - 4; g.add(m); return m; });
  g.add(line([V(0, 0, 0), V(0, 0, -160)], COL.amber, 0.45)); for (const s of [-3, 3]) g.add(line([V(s, 0, 4), V(s, 0, -160)], COL.dim, 0.3));
  return {g, update(u, t) { camera.position.set(0.6 * Math.sin(t * 0.2), 1.5 - 0.9 * u, lerp(26, -18, ease(u))); camera.lookAt(0, 0.2, -60); ring.material.opacity = 0.7 + 0.3 * Math.sin(t * 1.5); tun.forEach((m, i) => { m.material.opacity = 0.14 + 0.3 * Math.max(0, Math.sin(t * 1.2 - i * 0.35)); m.rotation.z = t * 0.05 + i * 0.2; }); }};
}

// ---------------------------------------------------------------- điều phối theo vị trí cuộn
const ACTS = [act0, act1, act2, act3, act4, act5, act6].map((f) => { const a = f(); a.g.visible = false; scene.add(a.g); return a; });
const secs = $$('section[data-act]'), fade = $('#fade'), huds = $$('.hud'), nav = $('#nav');
let TP = 0, US = 0, MX = 0, MY = 0, mx = 0, my = 0;
const chap = $('#chap'), prog = $('#prog');
addEventListener('pointermove', (e) => { mx = e.clientX / innerWidth * 2 - 1; my = e.clientY / innerHeight * 2 - 1; });
nav.innerHTML = secs.map((s, i) => `<a href="#${s.id}" data-i="${i}"><span>${String(i).padStart(2, '0')}</span>${s.dataset.t}</a>`).join('');
$('#a1n').addEventListener('input', (e) => { A1.auto = false; A1.N = +e.target.value; });
$('#a1auto').addEventListener('click', () => { A1.auto = true; });
const clock = new THREE.Clock();
function frame() {
  const t = clock.getElapsedTime(), vh = innerHeight, mid = vh / 2; let act = 0, u = 0, edge = 1;
  secs.forEach((s, i) => { const r = s.getBoundingClientRect(); if (r.top <= mid && r.bottom > mid) { act = i; u = clamp(-r.top / Math.max(1, r.height - vh)); edge = Math.min(mid - r.top, r.bottom - mid) / (vh * 0.45); } });
  if (act !== ACT) { ACT = act; ACTS.forEach((a, i) => { a.g.visible = i === act; }); huds.forEach((h) => h.classList.toggle('on', +h.dataset.act === act)); $$('a', nav).forEach((a) => a.classList.toggle('on', +a.dataset.i === act));
    US = u; scene.fog.density = [0.02, 0.004, 0.016, 0.011, 0.004, 0.008, 0.012][act]; bloom.strength = [0.9, 0.55, 0.8, 0.85, 0.7, 0.8, 1.0][act]; canvas.style.cursor = ''; vo(); }
  const fd = (act === 0 && u < 0.5) || (act === secs.length - 1 && u > 0.5) ? 0 : 1 - clamp(edge); fade.style.opacity = fd;
  // thẻ chương hiện trong khoảnh khắc chuyển cảnh
  const ci = u < 0.5 ? act : Math.min(secs.length - 1, act + 1), co = clamp((fd - 0.45) / 0.4); chap.style.opacity = co;
  const oo = (1 - clamp(fd * 1.7)).toFixed(2); if (chap._o !== oo) { chap._o = oo; document.documentElement.style.setProperty('--o', oo); }
  if (co > 0 && chap._i !== ci) { chap._i = ci; chap.innerHTML = `<span>${String(ci).padStart(2, '0')}</span><b>${secs[ci].dataset.t}</b>`; }
  prog.style.transform = `scaleX(${clamp(scrollY / Math.max(1, document.documentElement.scrollHeight - vh))})`;
  const dt = Math.min(0.25, t - TP), kS = 1 - Math.exp(-dt * 6); TP = t; US += (u - US) * (reduce ? 1 : kS); MX += (mx - MX) * kS * 0.5; MY += (my - MY) * kS * 0.5;
  ACTS[act].update(US, t);
  if (!reduce && !small) { camera.rotateY(-MX * 0.03); camera.rotateX(-MY * 0.02); }
  dust.position.copy(camera.position).multiplyScalar(0.94); dust.rotation.y = t * 0.004; FX.uniforms.uT.value = t % 10;
  sweepLabels(); composer.render(); requestAnimationFrame(frame);
}
// lời dẫn hiện khi vào giữa màn hình
const io = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle('in', e.isIntersecting)), {rootMargin: '-28% 0px -28% 0px'}); $$('.beat').forEach((b) => io.observe(b));
// bảng nguồn và các con số ở phần kết
$('#nguon').innerHTML = Object.values(D.nguon).map(([n, h]) => `<li><a href="${h}" target="_blank" rel="noopener">${n}</a></li>`).join('');
$('#dem').textContent = `${D.moc.length} mốc, ${D.noi.length} liên hệ, ${Object.keys(D.nguon).length} nguồn, ${zeros.length} không điểm, ${Z.ns * Z.nt} điểm lưới |ζ|`;
// nút chia sẻ: bảng chia sẻ của máy nếu có, không thì chép liên kết
$$('[data-chia]').forEach((b) => b.addEventListener('click', async () => { const url = 'https://nclamvn.github.io/bai-giang/toan/riemann/', t0 = b.textContent;
  try { if (navigator.share) { await navigator.share({title: document.title, url}); return; } await navigator.clipboard.writeText(url); b.textContent = 'Đã chép liên kết'; }
  catch (e) { if (e && e.name === 'AbortError') return; b.textContent = url.replace('https://', ''); }
  setTimeout(() => { b.textContent = t0; }, 2200); }));
document.documentElement.classList.add('ok'); frame();
window.RH = {D, Z, psi, psiN, get act() { return ACT; }};
