/* Chế độ Lớp học của app Sáng Ăn Khoai (docs/app-ke-hoach-moc.md, mốc M6). Theo concept LopHoc (kính tối) và LopHocSang (kính sáng).
 * Chiếu cho cả lớp: cảnh tràn màn, chữ của bước cỡ lớn, một thanh kính cho giáo viên (bước trước, bước tiếp, tiến độ,
 * Khoá góc nhìn, Ẩn nhãn để hỏi bài, Chỉ điểm, bảng của bài, Màn đen).
 * Điều khiển: bàn phím và bút trình chiếu (→ PageDown Space, ← PageUp, B hoặc dấu chấm: màn đen, Esc), điện thoại quét mã
 * (trang dieu-khien/ của site, PeerJS nối thẳng hai máy bằng WebRTC, cần mạng), hoặc màn hình giáo viên ở cửa sổ thứ hai trên
 * cùng máy (dieu-khien/?cung-may=1, BroadcastChannel, không cần mạng).
 * App là trạm chuyển tiếp: lệnh từ điện thoại đi vào khung bài như lệnh của app; trạng thái của bài (shell/bg-shell.js, cùng
 * dạng điện thoại đã hiểu) đi ra điện thoại, kèm trạng thái màn đen của app.
 * Lệnh mới gửi vào bài: {t:'chieu', v} chế độ máy chiếu (chữ đậm, cỡ lớn), {t:'nhan', an} ẩn nhãn chỉ vào bộ phận.
 * app.js gọi SakLop.init(ctx) với ctx = {send, state, bai, tiep, native, remote, sendVung}. */
(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const PEERJS = 'https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js';
  const QRLIB = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js';
  // cùng mã băm toàn vẹn với vỏ bài (tools/sri.py)
  const SRI = { [PEERJS]: 'sha384-nlUQ8ZqCbvStErob+biJNzSgltf6urV3VGqhfIfzhmg9RXmpeRm76ELw0pYnKlTR', [QRLIB]: 'sha384-8FWZA6BGMXhsfO+BLtrJK0We6gg5o1JyO8xQm6peWDEUs17ACA5ziE/NIAkl9z2k' };
  const SITE_PROD = 'https://nclamvn.github.io/bai-giang/';
  const KINH = 'sak-lop-kinh';   // kính giáo viên chọn cho từng bài (trên máy này)
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const text = (h) => { const t = document.createElement('template'); t.innerHTML = String(h || ''); return t.content.textContent.replace(/\s+/g, ' ').trim(); };
  const pad = (n) => String(n).padStart(2, '0');
  const doc = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
  const ghi = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* chế độ riêng tư */ } };

  let C = null, on = false, den = false, anNhan = false, daGui = '', ma = '', peer = null, bc = null, wl = null, soMay = 0;
  const links = new Set();
  const dat = (id, v) => $(id).setAttribute('aria-pressed', String(!!v));

  function init(ctx) { C = ctx; wire(); }

  /* ---------- vào, ra ---------- */
  function bat() {
    if (on) return;
    on = true; daGui = '';
    $('lop').hidden = false; $('stage').classList.add('lop-on');
    $('lop').classList.add('khoa'); $('lop').classList.remove('chi', 'an-nhan');
    dat('lop-khoa', true); dat('lop-chi', false); dat('lop-nhan', false); anNhan = false;
    apKinh(); ve(C.state());
    if (C.state()) guiBai();   // bài đã báo trạng thái (đang mở sẵn); bài vừa mở thì gửi khi trạng thái đầu tiên đến
    giuSang(true); toanMan(true); doThanh();
    requestAnimationFrame(C.sendVung);
  }
  function tat() {
    if (!on) return;
    on = false;
    C.send({ t: 'chieu', v: 0 }); C.send({ t: 'nhan', an: 0 });
    $('lop').hidden = true; $('stage').classList.remove('lop-on', 'lop-sang');
    setDen(false); hop(false); giuSang(false); toanMan(false); dongNoi();
    requestAnimationFrame(C.sendVung);
  }
  // bài mới mở trong lúc đang ở chế độ lớp (bài tiếp theo): báo lại chế độ máy chiếu, nhãn, kính
  function guiBai() {
    const b = C.bai(); if (!b) return;
    C.send({ t: 'chieu', v: 1 }); C.send({ t: 'nhan', an: anNhan ? 1 : 0 });
    daGui = b.slug; $('lop-t').textContent = b.title; apKinh();
  }
  function kinhOf(b) { const m = doc(KINH, {}); return m[b.slug] || (b.toi ? 'toi' : 'sang'); }
  function apKinh() {
    const b = C.bai(); if (!b) return;
    const sang = kinhOf(b) === 'sang';
    $('lop').classList.toggle('sang', sang); $('stage').classList.toggle('lop-sang', sang);
    dat('lop-kinh', sang); $('lop-kinh').setAttribute('aria-label', sang ? 'Đang dùng kính sáng, bấm để đổi sang kính tối' : 'Đang dùng kính tối, bấm để đổi sang kính sáng');
  }
  function doiKinh() {
    const b = C.bai(); if (!b) return;
    const m = doc(KINH, {}); m[b.slug] = kinhOf(b) === 'sang' ? 'toi' : 'sang'; ghi(KINH, m);
    apKinh(); requestAnimationFrame(C.sendVung);
  }
  async function giuSang(v) {
    if (C.native) return;   // app Android: plugin ManHinh đã giữ sáng khi mở bài
    try {
      if (v && navigator.wakeLock && !wl) { wl = await navigator.wakeLock.request('screen'); wl.addEventListener('release', () => { wl = null; }); }
      else if (!v && wl) { await wl.release(); wl = null; }
    } catch (e) { wl = null; }
  }
  function toanMan(v) {
    if (C.native) return;
    const d = document;
    try {
      if (v && !d.fullscreenElement && d.documentElement.requestFullscreen) d.documentElement.requestFullscreen().catch(() => {});
      else if (!v && d.fullscreenElement) d.exitFullscreen().catch(() => {});
    } catch (e) { /* trình duyệt không cho */ }
  }

  /* ---------- vẽ theo trạng thái của bài ---------- */
  function onState(d) {
    if (!on) return;
    const b = C.bai(); if (b && daGui !== b.slug) guiBai();
    ve(d);
  }
  function ve(d) {
    const b = C.bai(); if (!b) return;
    $('lop-t').textContent = b.title;
    const L = d && d.lesson, steps = (L && L.steps) || [], n = steps.length, i = d ? d.i : -1;
    const k = Math.max(0, Math.min(i, n - 1)), s = steps[k];
    $('lop-k').textContent = !d ? 'Đang mở bài…' : !n ? '' : i < 0 ? `${n} bước · bấm Bắt đầu` : `Bước ${pad(k + 1)} / ${pad(n)}`;
    $('lop-h').textContent = !n || i < 0 ? (L && L.title) || b.title : s.t;
    $('lop-p').textContent = !n || i < 0 ? '' : text(s.note);
    const tien = $('lop-tien');
    tien.innerHTML = steps.map((x, j) => `<i${j <= i ? ' class="xong"' : ''}></i>`).join('');
    tien.setAttribute('aria-label', `Bước ${Math.max(i + 1, 0)} trên ${n}`);
    $('lop-truoc').disabled = i <= 0;
    const last = n && i >= n - 1, nx = last && L ? C.tiep(L) : null;
    $('lop-sau').textContent = i < 0 ? 'Bắt đầu' : !last ? 'Bước tiếp' : nx ? 'Bài tiếp' : 'Xong bài';
    $('lop-sau').disabled = !n;
    const ps = (d && d.panels) || [];
    $('lop-pnl').innerHTML = ps.map((p, j) => `<button class="lop-c" type="button" data-n="${j}" aria-pressed="${p.open}">${esc(p.label)}</button>`).join('');
    $('stage').classList.toggle('pnl-mo', ps.some((p) => p.open));
    doThanh(); phat(d);
  }

  /* ---------- lệnh: thanh của giáo viên, bàn phím, điện thoại ---------- */
  // nguon 'xa' (điện thoại, màn hình giáo viên): ở bước cuối không tự sang bài khác, tránh bấm nhầm đổi bài giữa giờ
  function lenh(m, nguon) {
    if (!m || typeof m !== 'object') return;
    const d = C.state(), n = d && d.lesson ? (d.lesson.steps || []).length : 0;
    if (m.t === 'hello') return phat(d);
    if (m.t === 'black') return setDen(!den);
    if (m.t === 'go' && Number.isFinite(+m.i)) return C.send({ t: 'go', i: +m.i });
    if (m.t === 'prev') return C.send({ t: 'prev' });
    if (m.t === 'start' || m.t === 'stop') return C.send({ t: m.t });
    if (m.t === 'next') {
      if (!d) return;
      if (d.i < 0) return C.send({ t: 'go', i: 0 });
      if (d.i < n - 1) return C.send({ t: 'next' });
      if (nguon === 'thanh') { const nx = C.tiep(d.lesson); location.hash = nx ? '#/lop/' + nx.slug : '#/thu-vien'; }
    }
  }
  function setDen(v) {
    den = !!v; $('lop-mden').hidden = !den; dat('lop-den', den);
    phat(C.state());
  }
  function phim(e) {
    if (!on) return false;
    const k = e.key;
    if (k === 'Escape') { if (!$('lop-hop').hidden) hop(false); else if (den) setDen(false); else thoat(); return true; }
    if (!$('lop-hop').hidden) return false;
    if (k === 'ArrowRight' || k === 'PageDown' || k === ' ') { lenh({ t: 'next' }, 'phim'); return true; }
    if (k === 'ArrowLeft' || k === 'PageUp') { lenh({ t: 'prev' }, 'phim'); return true; }
    if (k === 'b' || k === 'B' || k === '.') { setDen(!den); return true; }
    return false;
  }
  function thoat() { const b = C.bai(); location.hash = b ? '#/bai/' + b.slug : '#/thu-vien'; }

  /* ---------- công cụ ---------- */
  function cong(id) {
    const L = $('lop');
    if (id === 'lop-khoa') { const v = !L.classList.contains('khoa'); L.classList.toggle('khoa', v); dat(id, v); }
    else if (id === 'lop-chi') { const v = !L.classList.contains('chi'); L.classList.toggle('chi', v); dat(id, v); if (!v) $('lop-tro').hidden = true; }
    else if (id === 'lop-nhan') { anNhan = !anNhan; L.classList.toggle('an-nhan', anNhan); dat(id, anNhan); C.send({ t: 'nhan', an: anNhan ? 1 : 0 }); }
    else if (id === 'lop-den') setDen(!den);
  }
  function tro(e) {
    if (!$('lop').classList.contains('chi')) return;
    const t = $('lop-tro'); t.hidden = false; t.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
  }

  /* ---------- vùng kính của chế độ lớp, báo cho bài để cảnh và nhãn nằm trong phần còn trống ---------- */
  // chiều cao thật của thanh giáo viên (xuống dòng khi màn hẹp hay bài có nhiều bảng): cột chữ đặt ngay trên thanh
  function doThanh() { if (on) $('lop').style.setProperty('--lbh', Math.round($('lop').querySelector('.lop-bar').getBoundingClientRect().height) + 'px'); }

  function vung() {
    doThanh();
    const W = innerWidth, H = innerHeight, r = (el) => el.getBoundingClientRect();
    const v = { t: Math.round(r($('lop').querySelector('.lop-top')).bottom + 8), r: 0, b: Math.round(H - r($('lop').querySelector('.lop-bar')).top + 8), l: 0 };
    const cap = $('lop-cap');
    if (getComputedStyle(cap).display !== 'none' && cap.textContent.trim()) {
      const c = r(cap);
      if ($('lop').classList.contains('sang') && c.right < W * 0.5) v.l = Math.round(c.right + 16);   // kính sáng: cột chữ bên trái
      else v.b = Math.max(v.b, Math.round(H - c.top + 8));                                           // kính tối: chữ ở đáy
    }
    return v;
  }

  /* ---------- nối điện thoại và màn hình giáo viên ---------- */
  function phat(d) {
    if (!d || !links.size) return;
    const m = Object.assign({}, d, { black: den, on: true });
    for (const l of [...links]) { try { l.send(m); } catch (e) { links.delete(l); } }
  }
  function taoMa() {
    if (ma) return ma;
    ma = Array.from(crypto.getRandomValues(new Uint8Array(6)), (b) => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[b % 32]).join('');
    // màn hình giáo viên trên cùng máy: BroadcastChannel, không cần mạng
    if ('BroadcastChannel' in window) {
      bc = new BroadcastChannel('sak-lop-' + ma.toLowerCase());
      const l = { send: (m) => bc.postMessage({ tu: 'app', m }) };
      bc.onmessage = (e) => { const x = e.data; if (!x || x.tu !== 'dk') return; if (!links.has(l)) { links.add(l); noiBao(); } lenh(x.m, 'xa'); };
    }
    return ma;
  }
  const trangDk = () => C.native ? ((C.remote() || SITE_PROD) + 'dieu-khien/') : new URL('../dieu-khien/', location.href).href;
  function nap(src) {
    return new Promise((ok, no) => {
      const s = document.createElement('script'); s.src = src; s.crossOrigin = 'anonymous';
      if (SRI[src]) s.integrity = SRI[src];
      s.onload = ok; s.onerror = () => no(new Error(src)); document.head.appendChild(s);
    });
  }
  async function moHop() {
    taoMa(); hop(true);
    const url = trangDk(), cay = C.native ? '' : `<button class="lop-c" id="lop-may" type="button">Mở màn hình giáo viên trên máy này</button>`;
    const phimTat = '<p>Không cần điện thoại: bút trình chiếu hoặc bàn phím, → bước sau, ← bước trước, B màn đen, Esc thoát.</p>';
    $('lop-hop-in').innerHTML = `<p>Đang chuẩn bị mã kết nối…</p>${cay}${phimTat}`;
    try { if (!window.qrcode) await nap(QRLIB); if (!window.Peer) await nap(PEERJS); }
    catch (e) {
      $('lop-hop-in').innerHTML = `<p>Không tải được bộ kết nối: máy cần mạng Internet để nối điện thoại. Mã của buổi này: <b class="lop-ma">${ma}</b></p>${cay}${phimTat}`;
      return;
    }
    const qr = window.qrcode(0, 'M'); qr.addData(url + '#' + ma); qr.make();
    $('lop-hop-in').innerHTML = `<p>Mở camera điện thoại và quét mã, hoặc vào <b>${esc(url.replace(/^https?:\/\//, ''))}</b> rồi nhập mã.</p>
      <div class="lop-qr">${qr.createImgTag(6, 8, 'Mã QR mở trang điều khiển')}<div><div class="lop-ma">${ma}</div><p>Hai máy nối trực tiếp (WebRTC), không lưu gì trên máy chủ. Cần mạng Internet.</p></div></div>${cay}${phimTat}`;
    if (!peer) moPeer();
  }
  function moPeer() {
    try { peer = new window.Peer('baigiang-' + ma.toLowerCase()); } catch (e) { return; }
    peer.on('error', (e) => { if (!$('lop-hop').hidden) $('lop-hop-in').insertAdjacentHTML('afterbegin', `<p>Không kết nối được (${esc(e && e.type || e)}). Thử lại, hoặc dùng màn hình giáo viên trên máy này.</p>`); });
    // điện thoại đầu tiên nối thẳng; từ máy thứ hai, giáo viên bấm Cho phép trên màn chiếu (giống vỏ bài)
    peer.on('connection', (conn) => {
      let ok = false;
      const l = { send: (m) => conn.open && conn.send(m) };
      const nhan = () => { if (ok) return; ok = true; soMay++; links.add(l); hop(false); noiBao(); phat(C.state()); };
      conn.on('open', () => {
        if (!soMay) return nhan();
        hop(true);
        $('lop-hop-in').innerHTML = `<p>Thêm một thiết bị muốn điều khiển. Đang có ${soMay} điện thoại nối. Chỉ cho phép nếu đó là máy của bạn hoặc đồng nghiệp.</p>
          <p style="display:flex;gap:10px"><button class="lop-c" type="button" data-cho="1">Cho phép</button><button class="lop-c" type="button" data-cho="0">Từ chối</button></p>`;
        $('lop-hop-in').onclick = (e) => { const b = e.target.closest('[data-cho]'); if (!b) return; $('lop-hop-in').onclick = null; if (b.dataset.cho === '1') nhan(); else { try { conn.close(); } catch (x) { /* đã đóng */ } hop(false); } };
      });
      conn.on('data', (m) => { if (ok) lenh(m, 'xa'); });
      conn.on('close', () => { if (!ok) return; ok = false; soMay--; links.delete(l); noiBao(); });
    });
  }
  function noiBao() {
    const n = links.size, e = $('lop-noi');
    e.hidden = !n; e.textContent = n === 1 ? 'Đã nối điều khiển' : `Đã nối ${n} thiết bị`;
  }
  function dongNoi() {
    if (peer) { try { peer.destroy(); } catch (e) { /* đã đóng */ } peer = null; }
    if (bc) { try { bc.close(); } catch (e) { /* đã đóng */ } bc = null; }
    links.clear(); ma = ''; soMay = 0; noiBao();
  }
  function hop(v) {
    $('lop-hop').hidden = !v;
    if (v) $('lop-hop-x').focus();
  }

  function wire() {
    $('lop-vao').addEventListener('click', () => { const b = C.bai(); if (b) location.hash = '#/lop/' + b.slug; });
    $('lop-thoat').addEventListener('click', thoat);
    $('lop-kinh').addEventListener('click', doiKinh);
    $('lop-dt').addEventListener('click', moHop);
    $('lop-hop-x').addEventListener('click', () => hop(false));
    $('lop-hop').addEventListener('click', (e) => {
      if (e.target.closest('#lop-may')) window.open(trangDk() + '?cung-may=1#' + ma, 'sak-giao-vien', 'width=760,height=820');
    });
    $('lop-truoc').addEventListener('click', () => lenh({ t: 'prev' }, 'thanh'));
    $('lop-sau').addEventListener('click', () => lenh({ t: 'next' }, 'thanh'));
    $('lop-cu').addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.n != null) C.send({ t: 'pnl', n: +b.dataset.n }); else cong(b.id);
    });
    $('lop-mden').addEventListener('click', () => setDen(false));
    const che = $('lop-che');
    che.addEventListener('pointermove', tro); che.addEventListener('pointerdown', tro);
    che.addEventListener('pointerleave', () => { $('lop-tro').hidden = true; });
    document.addEventListener('visibilitychange', () => { if (on && document.visibilityState === 'visible') giuSang(true); });
    if ('ResizeObserver' in window) new ResizeObserver(doThanh).observe($('lop').querySelector('.lop-bar'));
  }

  window.SakLop = { init, bat, tat, onState, phim, vung, get on() { return on; } };
})();
