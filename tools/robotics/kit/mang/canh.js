// Đạo cụ dùng chung cho cảnh của học phần Thiết kế và hiệu năng mạng: nhà cắt mặt trước, tủ mạng, cáp, gói tin, ống hàng đợi.
// Cùng ngôn ngữ hình với ba bài mẫu (1.1, 4.1, 6.1) để 22 bài nhìn như một bộ. Không chứa số liệu: mọi con số nằm ở cong-thuc.js.
import * as THREE from 'three';
import {MAT} from '../stage.js';
import * as SH from '../shapes.js';
import {tag} from '../soi.js';

const PI = Math.PI;
export const P = (x, y, z) => new THREE.Vector3(x, y, z);
// bảng màu theo vai, giữ như bài 1.1
export const MAU = {prop: '#3B6EA8', tx: '#E3562A', queue: '#B3261E', proc: '#8A8F98', ok: '#2F8F5B', warn: '#C98A12', bad: '#B3261E', thoai: '#3B6EA8', video: '#E3562A', nen: '#8A8F98'};

export function boCanh(root) {
  const mk = (geo, mat, parent = root) => { const m = new THREE.Mesh(geo, mat); m.castShadow = m.receiveShadow = true; parent.add(m); return m; };
  const M = {floor: MAT.satin('#d9d4c8'), wall: MAT.shell('#f1efe9'), wall2: MAT.shell('#e6e2d8'), glass: MAT.glass('#a9c3d3'), rack: MAT.dark(), panel: MAT.anod('#9aa0a6'),
    desk: MAT.satin('#c9b79c'), pc: MAT.dark(), screen: new THREE.MeshBasicMaterial({color: '#cfe3f2'}), cu: MAT.plastic('#8f969e'), fiber: MAT.plastic('#e8c547'),
    wan: MAT.plastic('#3b6ea8'), led: new THREE.MeshBasicMaterial({color: '#2fbf71'}), ledDo: new THREE.MeshBasicMaterial({color: '#e0443a'}),
    tube: new THREE.MeshPhysicalMaterial({color: '#ffffff', roughness: 0.1, transparent: true, opacity: 0.22, depthWrite: false}), trang: new THREE.MeshBasicMaterial({color: '#ffffff'})};
  const goi = {}; // vật liệu gói theo màu, dùng lại
  const matGoi = (c) => goi[c] || (goi[c] = new THREE.MeshStandardMaterial({color: c, roughness: 0.5}));

  // nhà cắt mặt trước: sàn, tường sau, hai tường bên thấp dần về phía trước, không mái
  function nha(x, z, w, d, h, part, mat = M.wall) {
    const g = new THREE.Group(); g.position.set(x, 0, z); root.add(g); const t = 0.18;
    mk(SH.rbox(w, 0.16, d, 0.05), M.floor, g).position.y = 0.08;
    mk(SH.rbox(w, h, t, 0.05), mat, g).position.set(0, h / 2, -d / 2 + t / 2);
    for (const sx of [-1, 1]) {
      const s2 = new THREE.Shape([new THREE.Vector2(-d / 2, 0), new THREE.Vector2(d / 2, 0), new THREE.Vector2(d / 2, h * 0.35), new THREE.Vector2(-d / 2, h)]);
      const m = mk(new THREE.ExtrudeGeometry(s2, {depth: t, bevelEnabled: false}), mat, g); m.rotation.y = -PI / 2; m.position.set(sx * (w / 2) + (sx > 0 ? 0 : t), 0, 0);
    }
    mk(new THREE.PlaneGeometry(w * 0.7, h * 0.32), M.glass, g).position.set(0, h * 0.62, -d / 2 + t + 0.01);
    if (part) tag(part, g); return g;
  }
  // tủ mạng đứng: thân tối, các thiết bị 1U có đèn
  function tu(x, z, h = 2.0, part, parent = root, n = 5) {
    const g = new THREE.Group(); g.position.set(x, 0, z); parent.add(g);
    mk(SH.rbox(0.8, h, 0.9, 0.05), M.rack, g).position.y = h / 2;
    const leds = [];
    for (let i = 0; i < n; i++) { const y = 0.4 + i * ((h - 0.6) / Math.max(1, n - 1)); mk(SH.rbox(0.66, 0.09, 0.04, 0.01), M.panel, g).position.set(0, y, 0.46); const l = mk(new THREE.SphereGeometry(0.018, 8, 6), M.led, g); l.position.set(0.26, y, 0.49); leds.push(l); }
    g.userData.leds = leds; if (part) tag(part, g); return g;
  }
  // cáp theo đường cong Catmull-Rom
  function cap(pts, mat, r = 0.05, part) { const curve = new THREE.CatmullRomCurve3(pts); const m = mk(new THREE.TubeGeometry(curve, 120, r, 10), mat); if (part) tag(part, m); return {curve, mesh: m}; }
  // dấu "không theo tỉ lệ" (hai vạch chéo) đặt giữa một đoạn cáp dài
  function dauGay(p) { const g = new THREE.Group(); g.position.copy(p); root.add(g); for (const dx of [-0.18, 0.18]) { const m = mk(new THREE.BoxGeometry(0.04, 0.7, 0.7), M.trang, g); m.position.x = dx; m.rotation.z = 0.5; } return g; }
  // một bể gói: n hộp nhỏ dùng lại, ẩn sẵn
  function beGoi(n, mau = '#b9bec6', sz = [0.26, 0.14, 0.2]) { return Array.from({length: n}, () => { const m = mk(SH.rbox(sz[0], sz[1], sz[2], 0.03), matGoi(mau)); m.visible = false; return m; }); }
  // máy tính để bàn nhỏ (màn hình + chân)
  function mayTinh(parent, x, y, z) { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); mk(SH.rbox(0.56, 0.34, 0.03, 0.01), M.pc, g).position.set(0, 0.28, 0); mk(new THREE.PlaneGeometry(0.5, 0.28), M.screen, g).position.set(0, 0.28, 0.017); mk(SH.rbox(0.05, 0.12, 0.05, 0.01), M.pc, g).position.y = 0.06; return g; }
  return {mk, M, matGoi, nha, tu, cap, dauGay, beGoi, mayTinh};
}

// thang log cho thanh trượt
export const LOGC = (x, a, b) => Math.log(x / a) / Math.log(b / a);
export const unlog = (t, a, b) => a * Math.pow(b / a, t);
// khung chữ nhỏ dưới mỗi bảng (giữ đồng nhất kiểu chữ)
export const NHO = 'text-transform:none;letter-spacing:.2px;font-size:10.5px;white-space:normal;width:272px;line-height:1.45';
