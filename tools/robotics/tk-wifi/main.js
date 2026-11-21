// Thiết kế và hiệu năng mạng · bài 4.3 · Wi-Fi: tốc độ PHY và thông lượng thật.
// Theo giáo trình TEL1459 (Hoàng Trọng Minh, PTIT 2026), mục 4.2.4: C_AP,eff = β_mac·C_PHY·T_data / (T_data + T_ctrl + T_cont) (4.6);
// câu 8 cuối chương 4. Kênh vô tuyến là môi trường chia sẻ: mọi máy tranh nhau theo IEEE 802.11 DCF (đếm lùi ngẫu nhiên, va chạm thì
// nhân đôi cửa sổ). Mô phỏng: kit/mang/mo-phong.js chayDCF, kiểm với công thức kín một trạm trong tests/mang_check.mjs.
import * as THREE from 'three';
import {MAT, createStage} from '../kit/stage.js';
import * as SH from '../kit/shapes.js';
import {C, createUI} from '../kit/ui.js';
import {runLive} from '../kit/live.js';
import {tag, picker, vn} from '../kit/soi.js';
import * as F from '../kit/mang/cong-thuc.js';
import {chayDCF} from '../kit/mang/mo-phong.js';
import {boCanh, P, MAU, NHO, LOGC, unlog} from '../kit/mang/canh.js';

const app = document.getElementById('app');
const canvas = document.createElement('canvas'); canvas.id = 'gl'; app.appendChild(canvas);
const st = createStage({canvas, extent: 16, grid: 1, fade: 60, fov: 26, near: 0.2, far: 260});
const ui = createUI(app);
const root = new THREE.Group(); st.scene.add(root);
const B = boCanh(root), {mk, M} = B;

// ---------------- cảnh: phòng học cắt mặt trước, AP trên trần, 40 máy học viên
const lop = B.nha(0, 0, 11, 8, 3.4, 'lop');
const AP = P(0, 3.1, -0.6);
const ap = new THREE.Group(); ap.position.copy(AP); root.add(ap); tag('ap', ap);
mk(new THREE.CylinderGeometry(0.42, 0.46, 0.12, 32), MAT.shell('#fbfaf7'), ap);
const apLed = mk(new THREE.SphereGeometry(0.05, 10, 8), M.led, ap); apLed.position.set(0, -0.07, 0.3);
const NMAX = 40, TRAM = [];
for (let r = 0; r < 5; r++) for (let c = 0; c < 8; c++) {
  const x = -4.2 + c * 1.2, z = -2.4 + r * 1.3;
  mk(SH.rbox(1.0, 0.05, 0.55, 0.02), M.desk, lop).position.set(x, 0.74, z);
  const g = new THREE.Group(); g.position.set(x, 0.77, z); root.add(g); tag('tram', g);
  const de = mk(SH.rbox(0.42, 0.025, 0.3, 0.01), MAT.anod('#c9ccd1'), g); void de;
  const man = mk(SH.rbox(0.42, 0.28, 0.02, 0.01), MAT.anod('#c9ccd1'), g); man.position.set(0, 0.15, -0.15); man.rotation.x = -0.25;
  const sc = mk(new THREE.PlaneGeometry(0.38, 0.24), new THREE.MeshBasicMaterial({color: '#cfe3f2'}), g); sc.position.set(0, 0.15, -0.138); sc.rotation.x = -0.25;
  TRAM.push({g, sc, p: P(x, 1.0, z)});
}
// tia phát: một ống mảnh từ máy tới AP; vòng sóng lan từ máy đang phát
const tia = Array.from({length: 4}, () => { const m = mk(new THREE.CylinderGeometry(0.03, 0.03, 1, 8), new THREE.MeshBasicMaterial({color: MAU.ok, transparent: true, opacity: 0.85})); m.visible = false; m.castShadow = false; return m; });
const song = Array.from({length: 4}, () => { const m = mk(new THREE.SphereGeometry(1, 24, 16), new THREE.MeshBasicMaterial({color: MAU.ok, transparent: true, opacity: 0.12, depthWrite: false})); m.visible = false; m.castShadow = false; return m; });

// ---------------- mô hình
// Mặc định: PHY 1 201 Mbit/s (802.11ax, 2 luồng, 80 MHz, MCS 11, GI 0,8 µs), khung 1 500 byte. Preamble 40 µs và ACK ở 24 Mbit/s là
// giả định gần đúng. Yêu cầu mỗi học viên 1,5 Mbit/s lấy theo ví dụ trang 43.
const S = {N: 20, Cphy: 1201e6, gop: 1, t: 0, kq: null, dirty: true, req: 1.5e6};
function tinh() {
  const r = chayDCF({N: S.N, Cphy: S.Cphy, nGop: S.gop, nTx: 8000, seed: 6, ghi: 60});
  const r1 = chayDCF({N: 1, Cphy: S.Cphy, nGop: S.gop, nTx: 4000, seed: 6});
  const theoN = [1, 2, 5, 10, 20, 30, 40].map((n) => [n, chayDCF({N: n, Cphy: S.Cphy, nGop: S.gop, nTx: 3000, seed: 8})]);
  S.kq = {r, r1, theoN, moiNguoi: r.thongLuong / S.N, toiDa: Math.floor(r.thongLuong / S.req)};
}

// ---------------- bảng
ui.header({code: '4.3', kicker: 'THIẾT KẾ VÀ HIỆU NĂNG MẠNG · MỤC 4.2.4 · WLAN', title: 'Wi-Fi: tốc độ PHY và thông lượng thật', sub: 'THỜI GIAN PHÁT · ĐIỀU KHIỂN · TRANH CHẤP', hub: HUB_URL + 'thiet-ke-mang/',
  right: [['DCF', 'IEEE 802.11'], ['4.6', 'PHƯƠNG TRÌNH'], ['CÂU 8', 'CHƯƠNG 4']]});
ui.panel(28, 112, 300, 196, 'CẤU HÌNH', '01');
const slC = ui.slider('Cphy', 42, 148, 272, 'TỐC ĐỘ PHY', {lw: 92, vw: 84});
const slN = ui.slider('N', 42, 176, 272, 'SỐ MÁY', {lw: 92, vw: 84});
const slG = ui.slider('gop', 42, 204, 272, 'GỘP KHUNG', {lw: 92, vw: 84});
const t01 = ui.text(42, 232, '', 'sm', NHO);
ui.panel(28, 320, 300, 210, 'THỜI GIAN CỦA KÊNH · 4.6', '02');
const kSvg = ui.svg(42, 354, 272, 60);
const t02 = ui.text(42, 422, '', 'sm', NHO);
ui.panel(28, 542, 300, 224, 'PHY QUẢNG CÁO VÀ THÔNG LƯỢNG THẬT', '03');
const tBars = ['TỐC ĐỘ PHY', 'MỘT MÁY', `CẢ PHÒNG`].map((n, i) => ui.bar(42, 578 + i * 22, 272, n, {lw: 86, vw: 96}));
ui.text(42, 650, 'C_EFF / C_PHY'); const eBig = ui.text(42, 664, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t03 = ui.text(42, 700, '', 'sm', NHO);
ui.panel(1272, 112, 300, 260, 'THÊM MÁY, THÊM VA CHẠM', '04');
const vChart = ui.chart(1286, 156, 272, 82, {min: 0, max: 1, colors: [MAU.bad, MAU.prop], zero: false});
const t04 = ui.text(1286, 256, '', 'sm', NHO);
ui.panel(1272, 384, 300, 196, 'MỖI NGƯỜI CÒN BAO NHIÊU', '05');
ui.text(1286, 420, 'THÔNG LƯỢNG MỖI MÁY'); const mBig = ui.text(1286, 434, '', 'mo', 'position:absolute;font-size:24px;font-weight:700');
const t05 = ui.text(1286, 470, '', 'sm', NHO);
ui.panel(1272, 592, 300, 174, 'CÂU 8 · CHƯƠNG 4', '06');
const t06 = ui.text(1286, 626, '', 'sm', NHO);
ui.buttons([['v_hero', 'TOÀN CẢNH'], ['v_ap', 'GẦN AP'], ['mot', 'MỘT MÁY'], ['ca_lop', 'CẢ LỚP 40 MÁY'], ['gop1', 'KHÔNG GỘP'], ['gop32', 'GỘP 32 KHUNG'], ['g54', 'PHY 54 MBIT/S']], 360, 120, 860);
ui.text(362, 664, 'TRÊN KÊNH');
const modeEl = ui.add(`<div style="position:absolute;left:360px;top:678px;font:700 40px/1.1 'Be Vietnam Pro',system-ui,sans-serif;letter-spacing:-.8px;color:${C.ink}"></div>`);
const modeSub = ui.text(362, 728, '', 'sm', 'text-transform:none;letter-spacing:.3px;font-size:11px;white-space:nowrap');
ui.cap = ui.caption(348, 778, 904, 106);
const alert = ui.alert(800, 186);
ui.callouts([{key: 'ap', title: 'ĐIỂM TRUY NHẬP', sub: ''}, {key: 'tram', title: 'MÁY HỌC VIÊN', sub: ''}]);
const subAp = ui.root.querySelectorAll('.call')[0]?.querySelector('span'), subTr = ui.root.querySelectorAll('.call')[1]?.querySelector('span');

// ---------------- mô phỏng
// phát lại chậm nhật ký DCF: mỗi lần gửi 0,7 s cảnh (va chạm hiện đỏ)
const T_LAN = 0.7;
const sim = {
  S,
  reset() { Object.assign(S, {N: 20, Cphy: 1201e6, gop: 1}); S.dirty = true; },
  busy: () => false,
  isOn: (k) => (k === 'gop1' ? S.gop === 1 : k === 'gop32' ? S.gop === 32 : k === 'mot' ? S.N === 1 : k === 'ca_lop' ? S.N === 40 : k === 'g54' ? S.Cphy === 54e6 : false),
  act(k) {
    if (k === 'mot') S.N = 1; if (k === 'ca_lop') S.N = 40; if (k === 'gop1') S.gop = 1; if (k === 'gop32') S.gop = 32; if (k === 'g54') S.Cphy = S.Cphy === 54e6 ? 1201e6 : 54e6;
    S.dirty = true;
  },
  slide(k, t) {
    if (k === 'Cphy') S.Cphy = Math.round(unlog(t, 54e6, 2402e6) / 1e6) * 1e6;
    if (k === 'N') S.N = Math.round(1 + t * 39);
    if (k === 'gop') S.gop = Math.round(unlog(t, 1, 64));
    S.dirty = true;
  },
  keyDown() { return false; },
  step(dt) { if (S.dirty) { tinh(); S.dirty = false; } S.t += dt; },
  shadowAt() { return new THREE.Vector3(0, 10, 0); },
  pick: picker((part) => cardOf(part)),
  draw() {
    const kq = S.kq; if (!kq) return;
    const nk = kq.r.nhatKy, k = Math.floor(S.t / T_LAN) % Math.max(1, nk.length), e = nk[k], u = (S.t % T_LAN) / T_LAN;
    TRAM.forEach((tr, i) => { tr.g.visible = i < S.N; tr.sc.material.color.set(e && e.tram.includes(i) ? (e.ok ? MAU.ok : MAU.bad) : '#cfe3f2'); });
    tia.forEach((m, j) => { const i = e ? e.tram[j] : undefined; m.visible = i !== undefined && i < S.N && u < 0.8; song[j].visible = m.visible; if (!m.visible) return;
      const a = TRAM[i].p, b = AP, mid = a.clone().lerp(b, 0.5), len = a.distanceTo(b); m.position.copy(mid); m.scale.set(1, len, 1); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize()); m.material.color.set(e.ok ? MAU.ok : MAU.bad);
      const s = song[j]; s.position.copy(a); s.scale.setScalar(0.2 + u * 2.0); s.material.color.set(e.ok ? MAU.ok : MAU.bad); s.material.opacity = 0.1 * (1 - u); });
    apLed.material = e && !e.ok ? M.ledDo : M.led;
    // bảng 01
    slC.set(LOGC(S.Cphy, 54e6, 2402e6), F.fmtBps(S.Cphy, 0)); slN.set((S.N - 1) / 39, `${S.N} máy`); slG.set(LOGC(S.gop, 1, 64), S.gop === 1 ? 'không gộp' : `${S.gop} khung`);
    t01.innerHTML = `Mặc định 1 201 Mbit/s là tốc độ PHY 802.11ax hai luồng, kênh 80 MHz, MCS 11. Mọi máy chung một kênh: tại mỗi thời điểm chỉ một máy được phát.`;
    // bảng 02
    const r = kq.r; { const parts = [['dữ liệu', r.fData, MAU.ok], ['điều khiển', r.fCtrl, MAU.warn], ['tranh chấp', r.fCont, MAU.bad]]; let x = 0, g = '';
      parts.forEach(([n, v, c]) => { const w = v * 272; g += `<rect x="${x}" y="0" width="${Math.max(0, w - 1)}" height="18" fill="${c}"/>`; x += w; });
      parts.forEach(([n, v, c], i) => { g += `<rect x="${i * 92}" y="28" width="9" height="9" fill="${c}"/><text x="${i * 92 + 13}" y="36" font-family="Be Vietnam Pro" font-size="10" fill="${C.ink}">${n}</text><text x="${i * 92 + 13}" y="52" font-family="JetBrains Mono" font-size="10" fill="${C.ink}">${vn(v * 100, 0)} %</text>`; }); kSvg.innerHTML = g; }
    t02.innerHTML = `T<sub>data</sub> chỉ là phần bit dữ liệu thực sự bay trong không khí. T<sub>ctrl</sub> gồm preamble, khoảng SIFS/DIFS và ACK; T<sub>cont</sub> là các slot đếm lùi và thời gian mất vào va chạm. Khung ${vn(r.tData * 1e6, 0)} µs, ACK ${vn(r.tAck * 1e6, 0)} µs.`;
    // bảng 03
    tBars[0].set(1, F.fmtBps(S.Cphy, 0), '#8A8F98'); tBars[1].set(kq.r1.thongLuong / S.Cphy, F.fmtBps(kq.r1.thongLuong, 0), MAU.prop); tBars[2].set(r.thongLuong / S.Cphy, F.fmtBps(r.thongLuong, 0), MAU.ok);
    eBig.textContent = `${vn((r.thongLuong / S.Cphy) * 100, 0)} %`; eBig.style.color = r.thongLuong / S.Cphy < 0.3 ? MAU.bad : C.ink;
    t03.innerHTML = `${S.gop === 1 ? 'Không gộp khung: mỗi 1 500 byte phải trả nguyên preamble, khoảng chờ và ACK, nên PHY càng nhanh tỉ lệ càng thấp.' : `Gộp ${S.gop} khung một lần: chi phí cố định chia cho nhiều dữ liệu hơn.`} Đây là β<sub>mac</sub> và tỉ số thời gian trong (4.6).`;
    // bảng 04: va chạm và thông lượng theo số máy
    const xs = kq.theoN, maxT = Math.max(...xs.map(([, v]) => v.thongLuong));
    vChart.set([xs.map(([, v]) => v.pVaCham), xs.map(([, v]) => v.thongLuong / maxT)], {cursor: Math.max(0, xs.findIndex(([n]) => n >= S.N)) / (xs.length - 1), extra: (Y, w) => `<text x="0" y="-4" font-family="JetBrains Mono" font-size="9" fill="${MAU.bad}">tỉ lệ va chạm</text><text x="${w}" y="-4" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="${MAU.prop}">thông lượng cả phòng</text><text x="0" y="94" font-family="JetBrains Mono" font-size="9" fill="#626773">1 máy</text><text x="${w}" y="94" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#626773">40 máy</text>`});
    t04.innerHTML = `${S.N} máy: ${vn(r.pVaCham * 100, 0)} % lần phát bị va chạm. Thêm máy thì nhiều lần hai máy cùng đếm về 0, kênh bận mà không chở được gì; cửa sổ đếm lùi nhân đôi để giãn ra, đổi lại là thêm thời gian chờ.`;
    // bảng 05
    mBig.textContent = F.fmtBps(kq.moiNguoi, 1);
    t05.innerHTML = `${F.fmtBps(r.thongLuong, 0)} chia ${S.N} máy. Nếu mỗi học viên cần 1,5 Mbit/s cho lớp trực tuyến (ví dụ trang 43), một AP như thế phục vụ tối đa khoảng <b>${vn(kq.toiDa, 0)} máy</b> khi tất cả cùng tải, chưa tính nhiễu và tốc độ PHY thấp hơn ở xa AP.`;
    // bảng 06
    t06.innerHTML = 'Tốc độ PHY là tốc độ khi đang phát của một máy ở điều kiện tốt nhất. Thông lượng thiết kế phải trừ preamble, khoảng chờ, ACK, thời gian tranh chấp và va chạm, rồi chia cho số người dùng chung kênh. Vì vậy không dùng số PHY quảng cáo làm thông lượng thiết kế.';
    // chế độ
    modeEl.textContent = !e ? 'Kênh rảnh' : e.ok ? `Máy ${e.tram[0] + 1} phát` : `Va chạm ${e.tram.length} máy`; modeEl.style.color = e && !e.ok ? MAU.bad : C.ink;
    modeSub.textContent = `phát lại chậm nhật ký DCF · ${S.N} máy · ${F.fmtBps(S.Cphy, 0)} PHY · ${S.gop === 1 ? 'không gộp' : 'gộp ' + S.gop + ' khung'}`;
    alert.set(r.thongLuong / S.Cphy < 0.2 ? 'THÔNG LƯỢNG DƯỚI 20 % PHY' : '');
    if (subAp) subAp.textContent = F.fmtBps(r.thongLuong, 0).toUpperCase(); if (subTr) subTr.textContent = `${S.N} MÁY · ${F.fmtBps(kq.moiNguoi, 1)} MỖI MÁY`.toUpperCase();
    const W3 = (v) => st.project(v.x, v.y, v.z);
    ui.drawCallouts([{key: 'ap', p: W3(AP.clone().add(P(0, 0.2, 0))), dx: 40, dy: -50}, {key: 'tram', p: W3(TRAM[Math.min(S.N - 1, 7)].p.clone().add(P(0, 0.3, 0))), dx: 50, dy: -40}], 1);
  },
};

// ---------------- soi chi tiết
const SRC = 'Giáo trình Thiết kế và hiệu năng mạng (TEL1459, PTIT 2026), mục 4.2.4: (4.6); câu 8 chương 4. IEEE 802.11 DCF, OFDM 5 GHz: slot 9 µs, SIFS 16 µs, DIFS 34 µs, CWmin 15, CWmax 1 023. Tốc độ PHY 1 201 Mbit/s: bảng MCS của 802.11ax (2 luồng, 80 MHz, MCS 11, GI 0,8 µs). Preamble 40 µs, ACK ở 24 Mbit/s, 34 byte tiêu đề MAC và yêu cầu 1,5 Mbit/s mỗi học viên là giả định của bài.';
function cardOf(part) {
  const kq = S.kq; if (!kq) return null;
  const base = {src: SRC};
  if (part === 'ap') return {...base, k: 'Điểm truy nhập', t: 'Một kênh chung', b: 'AP và mọi máy trong phòng dùng chung một kênh vô tuyến. Mỗi khung gửi thành công phải được AP trả ACK.', rows: [['Thông lượng cả phòng', () => F.fmtBps(S.kq.r.thongLuong, 0)], ['Tỉ lệ va chạm', () => `${vn(S.kq.r.pVaCham * 100, 0)} %`]]};
  if (part === 'tram') return {...base, k: 'Máy học viên', t: 'Đếm lùi rồi phát', b: 'Trước khi phát, mỗi máy chờ DIFS rồi đếm lùi một số slot ngẫu nhiên. Màn hình xanh là đang phát thành công, đỏ là va chạm.', rows: [['Mỗi máy', () => F.fmtBps(S.kq.moiNguoi, 1)]]};
  if (part === 'lop') return {...base, k: 'Phòng học', t: `${S.N} máy`, b: 'Phòng học đông là kịch bản khó nhất của WLAN: nhiều máy cùng tranh một kênh.', rows: []};
  return null;
}

// ---------------- góc nhìn
const doc = () => innerWidth < innerHeight * 0.8;
const views = {
  hero: (t) => (doc() ? {tx: 0, ty: 1.2, tz: 0, az: -30 + 3 * Math.sin(t * 0.05), el: 40, d: 26, sx: 0, sy: -10} : {tx: 0.6, ty: 1.2, tz: 0.3, az: -8 + 3 * Math.sin(t * 0.05), el: 36, d: 23, sx: 0, sy: -10}),
  ap: () => ({tx: 0, ty: 2.4, tz: -0.4, az: -14, el: 12, d: 9, sx: 0, sy: -30}),
};

// ---------------- bài giảng
const CAP = [
  {k: 'Mục 4.2.4 · bài toán', t: 'AP ghi 1 201 Mbit/s, phòng học nhận được bao nhiêu?', b: 'Một AP Wi-Fi 6 trên trần, 20 máy học viên cùng tải. Con số in trên hộp là tốc độ PHY. Bài này đếm thời gian của kênh vô tuyến để xem bao nhiêu phần trăm thực sự chở dữ liệu.', e: 'C_eff = β_mac·C_PHY·T_data / (T_data + T_ctrl + T_cont)   (4.6)'},
  {k: 'Một máy', t: 'Không có ai tranh, vẫn chỉ được khoảng 5 %', b: 'Bấm Một máy. 1 500 byte ở 1 201 Mbit/s bay trong 10 µs, nhưng trước đó là 40 µs preamble, sau đó là SIFS, ACK, DIFS và vài slot đếm lùi. Thời gian chở dữ liệu là phần nhỏ nhất.', e: 'chi phí cố định mỗi lần phát lớn hơn thời gian dữ liệu'},
  {k: 'Gộp khung', t: '32 khung một lần phát', b: 'Bấm Gộp 32 khung: một lần tranh kênh, một preamble, một Block ACK cho 48 kilobyte. Hiệu suất tăng vọt. Đây là lý do 802.11n trở đi gộp khung, và vì sao ứng dụng gửi gói nhỏ rời rạc trên Wi-Fi rất phí.', e: 'T_data tăng 32 lần, T_ctrl gần như không đổi',
    ask: {q: 'PHY tăng gấp đôi, không gộp khung. Thông lượng thật tăng khoảng bao nhiêu?', o: ['Gấp đôi', 'Ít hơn nhiều so với gấp đôi', 'Không đổi chút nào'], a: 1, e: 'Chỉ T_data giảm một nửa; preamble, khoảng chờ và ACK giữ nguyên nên thông lượng tăng ít.'}},
  {k: 'Cả lớp 40 máy', t: 'Thêm máy là thêm va chạm', b: 'Bấm Cả lớp 40 máy. Hai máy đếm về 0 cùng lúc thì cả hai khung hỏng, kênh mất trọn thời gian một khung mà không chở được gì. Màn hình đỏ là va chạm. Mỗi máy còn lại vài Mbit/s.', e: 'kênh chia sẻ: thông lượng chia cho mọi máy'},
  {k: 'PHY thấp', t: 'Máy ở xa AP kéo cả phòng chậm theo', b: 'Bấm PHY 54 Mbit/s, như một máy ở góc xa dùng tốc độ thấp. Mỗi khung chiếm kênh lâu hơn hai chục lần, và trong lúc đó mọi máy khác phải chờ.', e: 'thời gian phát mỗi khung = L / C_PHY'},
  {k: 'Câu 8 · chương 4', t: 'Không lấy số trên hộp làm thông lượng thiết kế', b: 'Thông lượng thiết kế = tốc độ PHY × hiệu suất MAC × tỉ lệ thời gian chở dữ liệu, rồi chia cho số người chung kênh. Muốn đủ cho cả lớp: thêm AP trên kênh khác nhau, thu nhỏ vùng phủ để mọi máy dùng PHY cao, và gộp khung.', e: 'thông lượng thiết kế ≪ tốc độ PHY'},
];
const ev = [], at = (t, o) => ev.push({at: t, ...o});
at(0.2, {cap: 0}); at(1, {click: 'reset'}); at(2, {click: 'v_hero'});
at(10, {cap: 1}); at(10.5, {click: 'mot'}); at(11, {click: 'v_ap'});
at(21, {cap: 2}); at(22, {click: 'gop32'});
at(32, {cap: 3}); at(32.5, {click: 'v_hero'}); at(33, {click: 'gop1'}); at(34, {click: 'ca_lop'});
at(44, {cap: 4}); at(45, {click: 'g54'}); at(52, {click: 'g54'});
at(54, {cap: 5}); at(55, {click: 'gop32'});
ev.sort((a, b) => a.at - b.at);

sim.reset(); tinh(); S.dirty = false;
runLive({stage: st, ui, sim, views, captions: CAP, script: {events: ev, duration: 64}, firstView: 'hero', extra: [{key: 'ca_lop', label: 'Cả lớp 40 máy'}],
  keys: {1: 'v_hero', 2: 'v_ap'}});
