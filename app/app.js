/* Vỏ app Sáng Ăn Khoai · hướng sân khấu (docs/app-ke-hoach-moc.md, mốc M1).
 * Ba màn: Thư viện, Bài học (sân khấu), Đã tải. Danh mục: danh-muc.json, sinh bởi tools/build_app.py từ tools/chuoi_bai.py.
 * Bài chạy trong iframe name="bgs-canh" với ?app=1: vỏ bài (shell/bg-shell.js) ẩn thanh của nó, gửi trạng thái
 * {t:'state', lesson:{title, steps:[{t, note, ask}], next}, i} bằng postMessage; app vẽ chữ, thanh bước, nút và gửi lại
 * {t:'go', i} | {t:'next'} | {t:'prev'}. Liên kết trong bài sang trang khác của site đến app dưới dạng {t:'nav', href}.
 * Gói ngoại tuyến (M3): goi.json (tools/goi_bai.py) liệt kê tệp và số byte thật của từng bài; sw.js tải nốt tệp còn thiếu,
 * đếm tệp còn thiếu, xoá tệp ({t:'goi'|'luu'|'xoa', files}).
 * App Android (M4, native/, Capacitor): bài nằm sẵn trong app (tools/build_native.py), bài nặng ở app/ban-dia.json mở từ site;
 * nút Back của máy đóng bài, về Thư viện; màn hình giữ sáng khi đang học (plugin ManHinh viết trong native/android).
 * Không phụ thuộc thư viện ngoài, không đo đếm người dùng. Mã MIT, repo nclamvn/bai-giang. */
(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const ORIGIN = location.origin === 'null' ? '*' : location.origin;
  const SITE = new URL('../', location.href);
  const KEY = 'sak-app-gan-day';
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const text = (h) => { const t = document.createElement('template'); t.innerHTML = String(h || ''); return t.content.textContent.replace(/\s+/g, ' ').trim(); };
  const fold = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
  const pad = (n) => String(n).padStart(2, '0');
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { return null; } };
  const save = (v) => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* chế độ riêng tư: bỏ qua */ } };
  // đường dẫn tệp của bài tính từ gốc site, dùng để so với bộ nhớ đệm và với liên kết trong bài
  const fileOf = (href) => { let p = new URL(href, location.href).pathname.slice(SITE.pathname.length); if (p === '' || p.endsWith('/')) p += 'index.html'; return decodeURIComponent(p); };

  let CAT = null, BY = new Map(), BYFILE = new Map();
  // app Android: native bridge của Capacitor có sẵn window.Capacitor; lõi Capacitor (capacitor.js, chỉ có trong app) cấp registerPlugin
  const NATIVE = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  let BANDIA = null, P = {};
  const remoteOf = (b) => BANDIA && BANDIA.ngoai.includes(b.slug) ? BANDIA.remote + fileOf(b.href).replace(/index\.html$/, '') : null;
  async function moNative() {
    try { BANDIA = await (await fetch('ban-dia.json')).json(); } catch (e) { BANDIA = { remote: '', ngoai: [] }; }
    await new Promise((ok) => { const s = document.createElement('script'); s.src = 'capacitor.js'; s.onload = s.onerror = ok; document.head.appendChild(s); });
    const C = window.Capacitor;
    if (C && C.registerPlugin) { P.App = C.registerPlugin('App'); P.ManHinh = C.registerPlugin('ManHinh'); }
    // nút Back của máy: đóng bảng chữ hay bài, về Thư viện; ở Thư viện thì thu app xuống
    if (P.App) P.App.addListener('backButton', () => {
      if (!$('stage').hidden) location.hash = '#/thu-vien';
      else if (!$('v-da-tai').hidden) location.hash = '#/thu-vien';
      else P.App.minimizeApp().catch(() => P.App.exitApp());
    });
    document.documentElement.classList.add('native');
  }
  const giuSang = (bat) => { if (P.ManHinh) P.ManHinh.giuSang({ bat }).catch(() => {}); };
  let cur = null, st = null, resume = -1, stateTimer = 0, filterS = '', query = '';
  const cached = new Set();

  /* ---------- dữ liệu ---------- */
  async function boot() {
    try { CAT = await (await fetch('danh-muc.json')).json(); } catch (e) { CAT = null; }
    if (!CAT) { document.querySelector('main').innerHTML = '<p class="empty" style="padding:24px">Không tải được danh mục bài. Kiểm tra mạng rồi mở lại app.</p>'; return; }
    for (const b of CAT.bai) { BY.set(b.slug, b); BYFILE.set(fileOf(b.href), b); }
    if (NATIVE) await moNative();
    await scanCache();
    buildLib(); wire(); route();
    addEventListener('hashchange', route);
  }
  async function scanCache() {
    cached.clear();
    if (!('caches' in window)) return;
    try {
      const c = await caches.open('bg-noi-dung');
      for (const r of await c.keys()) { const u = new URL(r.url); if (u.origin === location.origin && u.pathname.startsWith(SITE.pathname)) cached.add(fileOf(u.href)); }
    } catch (e) { /* trình duyệt chặn bộ nhớ đệm */ }
  }
  const isCached = (b) => cached.has(fileOf(b.href));

  /* ---------- điều hướng ---------- */
  function route() {
    const h = location.hash.replace(/^#\/?/, '');
    const [v, arg] = h.split('/');
    if (v === 'bai' && BY.has(arg)) return openLesson(BY.get(arg));
    if (v === 'hoc-tiep') { const r = load(); const b = (r && BY.get(r.slug)) || BY.get(CAT.noi_bat); return void location.replace('#/bai/' + b.slug); }
    closeLesson();
    show(v === 'da-tai' ? 'da-tai' : 'thu-vien');
  }
  function show(v) {
    for (const s of document.querySelectorAll('.view')) s.hidden = s.id !== 'v-' + v;
    for (const a of document.querySelectorAll('#tab a')) { if (a.dataset.v === v) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); }
    document.title = (v === 'da-tai' ? 'Đã tải' : 'Thư viện') + ' · Sáng Ăn Khoai';
    if (v === 'thu-vien') renderHero();
    if (v === 'da-tai') renderDl();
    scrollTo(0, 0);
  }

  /* ---------- Thư viện ---------- */
  function buildLib() {
    const chips = $('chips');
    const mk = (s, ten) => `<button class="chip" type="button" data-s="${esc(s)}" aria-pressed="${s === filterS}">${esc(ten)}</button>`;
    chips.innerHTML = mk('', 'Tất cả') + CAT.mon.map((m) => mk(m.s, m.ten)).join('');
    $('grid').innerHTML = CAT.bai.map((b) => `<li data-s="${esc(b.s)}" data-q="${esc(fold(b.title + ' ' + b.nhom + ' ' + b.mon))}"><a class="card" href="#/bai/${esc(b.slug)}">
      <span class="ph"><img src="${esc(b.cover)}" alt="" loading="lazy" decoding="async">${NATIVE ? (remoteOf(b) ? '<span class="badge glass can-mang">CẦN MẠNG</span>' : '') : daTai().has(b.slug) ? '<span class="badge glass">ĐÃ TẢI</span>' : ''}</span>
      <span class="tt">${esc(b.title)}</span><span class="sub">${esc(b.nhom)}</span></a></li>`).join('');
  }
  function filter() {
    let n = 0; const q = fold(query.trim());
    for (const li of $('grid').children) { const ok = (!filterS || li.dataset.s === filterS) && (!q || li.dataset.q.includes(q)); li.hidden = !ok; n += ok; }
    $('lib-empty').hidden = n > 0;
    for (const c of $('chips').children) c.setAttribute('aria-pressed', String(c.dataset.s === filterS));
  }
  function renderHero() {
    const r = load(); const b = (r && BY.get(r.slug)) || BY.get(CAT.noi_bat);
    const going = !!(r && r.slug === b.slug);
    $('hero').href = '#/bai/' + b.slug;
    $('hero-img').src = b.cover;
    $('hero-k').textContent = (going ? 'Học tiếp · ' : 'Bài nổi bật · ') + b.nhom;
    $('hero-t').textContent = b.title;
    $('hero-btn').textContent = going ? 'Học tiếp' : 'Bắt đầu';
    const hasProg = going && r.n > 0 && r.i >= 0;
    $('hero-prog').hidden = !hasProg;
    if (hasProg) { $('hero-fill').style.width = Math.round(((r.i + 1) / r.n) * 100) + '%'; $('hero-n').textContent = `Bước ${r.i + 1} / ${r.n}`; }
  }

  /* ---------- gói ngoại tuyến ---------- */
  const DL = 'sak-app-da-tai';   // bài đã tải trọn trên máy này (đánh dấu nhanh cho thư viện; màn Đã tải hỏi sw.js để xác minh)
  const daTai = () => { try { return new Set(JSON.parse(localStorage.getItem(DL)) || []); } catch (e) { return new Set(); } };
  const ghiDaTai = (s) => { try { localStorage.setItem(DL, JSON.stringify([...s])); } catch (e) { /* bỏ qua */ } };
  let GOI = null, SIZE = null;
  const dangTai = new Map();      // slug → {done, n}
  async function goiData() {
    if (GOI) return GOI;
    try { GOI = await (await fetch('goi.json')).json(); SIZE = new Map(GOI.tep); } catch (e) { GOI = null; }
    return GOI;
  }
  const tepOf = (slug) => [...new Set([...GOI.chung, ...(GOI.bai[slug] || [])])].map((i) => GOI.tep[i][0]);
  const byteOf = (paths) => paths.reduce((a, p) => a + (SIZE.get(p) || 0), 0);
  const mb = (b) => b < 104858 ? 'dưới 0,1 MB' : (b / 1048576).toLocaleString('vi-VN', { maximumFractionDigits: 1 }) + ' MB';
  const swc = () => navigator.serviceWorker && navigator.serviceWorker.controller;
  // hỏi sw.js; 'luu' gọi on() mỗi lần có tiến độ và xong khi có {xong}
  function askSw(t, files, on) {
    return new Promise((ok, no) => {
      const c = swc(); if (!c) return no(new Error('sw'));
      const ch = new MessageChannel(), tm = setTimeout(() => no(new Error('sw im lặng')), t === 'luu' ? 30 * 60000 : 20000);
      ch.port1.onmessage = (e) => { const d = e.data || {}; if (on) on(d); if (t !== 'luu' || d.xong) { clearTimeout(tm); ok(d); } };
      c.postMessage({ t, files }, [ch.port2]);
    });
  }
  // tình trạng gói của một bài: {n, con, thieu, byte (cả gói), conByte (phần còn thiếu)}
  async function tinhTrang(slug) {
    if (!(await goiData()) || !swc()) return null;
    const files = tepOf(slug), r = await askSw('goi', files);
    return { n: r.n, con: r.con, byte: byteOf(files), conByte: byteOf(r.thieu || []) };
  }
  async function taiBai(slug, onTienDo) {
    const files = tepOf(slug);
    try { if (navigator.storage && navigator.storage.persist) await navigator.storage.persist(); } catch (e) { /* trình duyệt không cho */ }
    dangTai.set(slug, { done: 0, n: files.length });
    try {
      const r = await askSw('luu', files, (d) => { if (d.n) { dangTai.set(slug, { done: d.done || 0, n: d.n }); if (onTienDo) onTienDo(d); } });
      const kt = await tinhTrang(slug), s = daTai();
      if (kt && kt.con === 0) s.add(slug); else s.delete(slug);
      ghiDaTai(s); return { ...r, con: kt ? kt.con : r.loi };
    } finally { dangTai.delete(slug); }
  }
  async function xoaBai(slug) {
    await goiData(); const s = daTai(); s.delete(slug);
    const giu = new Set(); for (const k of s) for (const p of tepOf(k)) giu.add(p);
    const bo = (GOI.bai[slug] || []).map((i) => GOI.tep[i][0]).filter((p) => !giu.has(p));
    await askSw('xoa', bo); ghiDaTai(s);
  }

  /* ---------- Đã tải ---------- */
  const ICON_XOA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>';
  async function renderDl() {
    netLine();
    if (NATIVE) return renderDlNative();
    await scanCache(); await goiData();
    const s = daTai(), co = [], mo = [];
    for (const b of CAT.bai) {
      if (s.has(b.slug) || dangTai.has(b.slug)) co.push(b); else if (isCached(b)) mo.push(b);
    }
    const row = (b, sub, act) => `<li data-slug="${esc(b.slug)}"><a href="#/bai/${esc(b.slug)}"><img src="${esc(b.cover)}" alt="" loading="lazy">
      <span><span class="tt">${esc(b.title)}</span><br><span class="sub">${sub}</span></span></a>${act}</li>`;
    // dung lượng riêng của bài (không tính phần chung: phông, lõi app, ảnh bìa, tải một lần cho mọi bài)
    const size = (b) => GOI ? mb(byteOf((GOI.bai[b.slug] || []).map((i) => GOI.tep[i][0]))) : '';
    $('rows').innerHTML = co.map((b) => row(b, dangTai.has(b.slug) ? 'Đang tải…' : 'Đã tải · bài ' + size(b),
      `<button type="button" class="act xoa" data-xoa="${esc(b.slug)}" aria-label="Xoá ${esc(b.title)} khỏi máy">${ICON_XOA}</button>`)).join('');
    // bài đã mở, hoặc vỏ bài tải trước khi máy rảnh (bài sau): có một phần trên máy, chưa chắc mở được khi mất mạng
    const off = navigator.onLine === false;
    $('rows-mo').innerHTML = mo.map((b) => row(b, 'Một phần · bài ' + size(b),
      `<button type="button" class="act" data-tai="${esc(b.slug)}" aria-label="Tải trọn ${esc(b.title)}"${off ? ' disabled' : ''}>${off ? 'Cần mạng' : 'Tải trọn'}</button>`)).join('');
    $('dl-empty').hidden = co.length + mo.length > 0;
    $('h-mo').hidden = $('rows-mo').hidden = mo.length === 0;
    // xác minh từng bài đã đánh dấu: còn đủ tệp trên máy không (trình duyệt có thể dọn bộ nhớ khi máy đầy)
    if (swc() && GOI) for (const b of co) {
      if (dangTai.has(b.slug)) continue;
      tinhTrang(b.slug).then((k) => {
        const li = $('rows').querySelector(`li[data-slug="${b.slug}"] .sub`); if (!li || !k) return;
        if (k.con) li.textContent = `Thiếu ${k.con} tệp · còn ${mb(k.conByte)}`;
      }).catch(() => {});
    }
    $('use').textContent = 'đang đo';
    try {
      const e = navigator.storage && navigator.storage.estimate ? await navigator.storage.estimate() : null;
      $('use').textContent = e && e.usage != null ? mb(e.usage) : 'trình duyệt không cho đo';
    } catch (err) { $('use').textContent = 'trình duyệt không cho đo'; }
    let ben = null; try { ben = navigator.storage && navigator.storage.persisted ? await navigator.storage.persisted() : null; } catch (e) { ben = null; }
    $('ben').textContent = !swc() ? 'Bộ nhớ ngoại tuyến chưa sẵn sàng trên trình duyệt này. Mở lại app khi có mạng.'
      : ben ? 'Trình duyệt đã cho giữ bền bài đã tải: không tự xoá khi máy đầy.'
      : 'Trình duyệt có thể tự xoá bài đã tải khi máy đầy bộ nhớ. Bài nào thiếu tệp sẽ báo ở đây.';
  }
  // app Android: bài nằm sẵn trong app, không cần tải; chỉ liệt kê bài mở từ site
  async function renderDlNative() {
    const ngoai = CAT.bai.filter((b) => remoteOf(b)), co = CAT.bai.length - ngoai.length;
    $('dl-empty').hidden = true; $('h-mo').hidden = $('rows-mo').hidden = ngoai.length === 0; $('h-mo').textContent = 'Cần mạng';
    $('rows').innerHTML = `<li><span class="tt">${co} bài có sẵn trong app</span></li>`;
    $('rows').firstElementChild.insertAdjacentHTML('beforeend', '<span class="sub">Học được cả khi mất mạng, không cần tải thêm.</span>');
    $('rows-mo').innerHTML = ngoai.map((b) => `<li data-slug="${esc(b.slug)}"><a href="#/bai/${esc(b.slug)}"><img src="${esc(b.cover)}" alt="" loading="lazy">
      <span><span class="tt">${esc(b.title)}</span><br><span class="sub">Bài nặng, mở từ site khi có mạng</span></span></a></li>`).join('');
    let e = null; try { e = navigator.storage && navigator.storage.estimate ? await navigator.storage.estimate() : null; } catch (err) { e = null; }
    $('use').textContent = e && e.usage != null ? mb(e.usage) : 'không đo được';
    $('ben').textContent = 'Bài trong app nằm trong tệp cài, không bị xoá khi máy đầy bộ nhớ.';
  }
  function netLine() {
    const on = navigator.onLine !== false;
    $('net').classList.toggle('off', !on);
    $('net').textContent = on ? 'Đang có mạng.' : 'Đang ngoại tuyến. Mở được các bài đã tải.';
  }
  async function onDlClick(e) {
    const x = e.target.closest('[data-xoa],[data-tai]'); if (!x) return;
    x.disabled = true;
    if (x.dataset.xoa) { await xoaBai(x.dataset.xoa).catch(() => {}); buildLib(); filter(); renderDl(); return; }
    const slug = x.dataset.tai;
    await taiBai(slug, (d) => { x.textContent = d.n ? Math.round(((d.done || 0) / d.n) * 100) + '%' : '…'; }).catch(() => {});
    buildLib(); filter(); renderDl();
  }

  /* ---------- sân khấu bài học ---------- */
  function openLesson(b) {
    document.body.classList.add('mo-bai');
    for (const s of document.querySelectorAll('.view')) s.hidden = true;
    $('stage').hidden = false;
    document.title = b.title + ' · Sáng Ăn Khoai';
    $('st-k').textContent = b.nhom; $('st-t').textContent = b.title;
    if (cur === b && $('canh').getAttribute('src')) return;
    cur = b; st = null;
    const r = load(); resume = r && r.slug === b.slug && r.i > 0 ? r.i : -1;
    $('cap').hidden = true; $('next-l').hidden = true; $('pnl').hidden = true; $('stage').classList.remove('pnl-mo');
    nutTai(b);
    // trong app Android, máy chủ nội bộ của Capacitor trả trang gốc cho địa chỉ thư mục (/ten-bai/): mở thẳng index.html
    const xa = remoteOf(b), u = new URL(xa || (NATIVE ? new URL(fileOf(b.href), SITE).href : b.href), location.href); u.searchParams.set('app', '1');
    if (xa) { u.searchParams.set('o', location.origin); if (navigator.onLine === false) baoTin('Bài này mở từ site, cần có mạng.', 5000); }
    giuSang(true);
    $('canh').src = u.href;
    clearTimeout(stateTimer);
    // bài không báo trạng thái (không gắn vỏ hoặc vỏ cũ): vẫn xem được cảnh, chỉ có nút đóng
    stateTimer = setTimeout(() => { if (!st) $('cap').hidden = true; }, 15000);
  }
  function closeLesson() {
    if ($('stage').hidden) return;
    $('stage').hidden = true; document.body.classList.remove('mo-bai');
    $('canh').src = 'about:blank'; cur = null; st = null; clearTimeout(stateTimer); giuSang(false);
    $('stage').classList.remove('sach'); $('an').setAttribute('aria-pressed', 'false'); $('st-msg').hidden = true;
  }
  // nút tải ở góc trên sân khấu: chưa tải (mũi tên), đang tải (phần trăm), đã tải (dấu tích)
  let xacNhan = '';
  async function nutTai(b) {
    const btn = $('tai'); btn.classList.remove('xong', 'dang'); xacNhan = '';
    if (!swc() || !(await goiData()) || !GOI.bai[b.slug]) { btn.hidden = true; return; }
    btn.hidden = false;
    const veDang = () => { const d = dangTai.get(b.slug); btn.classList.add('dang'); btn.querySelector('.pt').textContent = d && d.n ? Math.round((d.done / d.n) * 100) + '%' : '…'; btn.setAttribute('aria-label', 'Đang tải bài về máy'); };
    if (dangTai.has(b.slug)) return veDang();
    const k = await tinhTrang(b.slug).catch(() => null); if (cur !== b) return;
    const xong = k && k.con === 0;
    btn.classList.toggle('xong', !!xong);
    btn.setAttribute('aria-label', xong ? 'Đã tải bài về máy, học được khi mất mạng' : `Tải bài về máy (${k ? mb(k.conByte) : ''})`);
    btn.dataset.con = k ? k.conByte : 0;
  }
  function baoTin(msg, ms) {
    const m = $('st-msg'); m.textContent = msg; m.hidden = false;
    clearTimeout(baoTin.t); if (ms) baoTin.t = setTimeout(() => { m.hidden = true; }, ms);
  }
  async function bamTai() {
    const b = cur; if (!b) return;
    const btn = $('tai');
    if (btn.classList.contains('xong')) return baoTin('Bài đã tải về máy: học được khi mất mạng. Xoá ở màn Đã tải.', 3500);
    if (dangTai.has(b.slug)) return;
    if (navigator.onLine === false) return baoTin('Đang mất mạng: chưa tải được. Thử lại khi có mạng.', 3500);
    const con = +btn.dataset.con || 0;
    // gói lớn (trên 30 MB, ví dụ Cơ thể người): bấm lần nữa để chắc chắn
    if (con > 30 * 1048576 && xacNhan !== b.slug) { xacNhan = b.slug; return baoTin(`Bài này cần tải ${mb(con)}. Bấm nút tải lần nữa để bắt đầu.`, 6000); }
    xacNhan = '';
    baoTin('Đang tải bài về máy…');
    const r = await taiBai(b.slug, () => { if (cur === b) { const d = dangTai.get(b.slug); btn.classList.add('dang'); btn.querySelector('.pt').textContent = d && d.n ? Math.round((d.done / d.n) * 100) + '%' : '…'; } }).catch(() => null);
    if (cur === b) { await nutTai(b); baoTin(!r ? 'Chưa tải được. Thử lại khi mạng ổn.' : r.con ? `Còn ${r.con} tệp chưa tải được. Bấm tải lại khi mạng ổn.` : 'Đã tải xong: học được khi mất mạng.', 4000); }
    buildLib(); filter();
  }
  // gửi lệnh vào khung bài; bài mở từ site (app Android) có nguồn khác trang app
  const send = (m) => { const f = $('canh'), w = f.contentWindow; let o = ORIGIN; try { o = new URL(f.src).origin; } catch (e) { /* giữ nguồn của app */ } if (w) try { w.postMessage(m, o === 'null' ? '*' : o); } catch (e) { /* khung đã đóng */ } };

  function onState(d) {
    const L = d.lesson; if (!L || !cur) return;
    st = d; clearTimeout(stateTimer);
    renderPanels(d.panels || []);
    requestAnimationFrame(sendVung);
    const steps = L.steps || [], n = steps.length, i = d.i;
    if (resume > 0 && i <= 0 && resume < n) { const k = resume; resume = -1; send({ t: 'go', i: k }); return; }
    resume = -1;
    save({ slug: cur.slug, i, n });
    if (!n) { $('cap').hidden = true; return; }
    const k = Math.max(0, Math.min(i, n - 1)), s = steps[k];
    $('cap').hidden = false;
    $('cap-k').textContent = i < 0 ? `${n} bước · bấm Bắt đầu` : `Bước ${pad(k + 1)} / ${pad(n)}`;
    $('cap-h').textContent = i < 0 ? (L.title || cur.title) : s.t;
    $('cap-p').textContent = i < 0 ? '' : text(s.note);
    // điện thoại (dọc và ngang): lời dài gọn 4 dòng để cảnh còn chỗ; bấm Đọc thêm để mở hết
    const P = $('cap-p'), compact = !(innerWidth >= 840 && innerHeight > 500);
    P.classList.toggle('gon', compact); $('cap-more').hidden = true;
    if (compact) requestAnimationFrame(() => { const dai = P.scrollHeight > P.clientHeight + 2; $('cap-more').hidden = !dai; $('cap-more').setAttribute('aria-expanded', 'false'); $('cap-more').textContent = 'Đọc thêm'; });
    renderAsk(i >= 0 ? s.ask : null, k);
    const box = $('steps');
    box.classList.toggle('nhieu', n > (innerWidth >= 840 || innerHeight <= 500 ? 6 : 4));
    // đủ chỗ cho mỗi bước một nút 44 px thì thanh bước bấm được; thiếu chỗ thì chỉ là thanh tiến độ, chuyển bước bằng nút trước, sau
    const roomy = (box.clientWidth || 300) / n >= 48;
    box.setAttribute('role', roomy ? 'group' : 'img');
    box.setAttribute('aria-label', roomy ? 'Các bước của bài' : `Bước ${Math.max(i + 1, 0)} trên ${n}`);
    box.innerHTML = steps.map((x, j) => roomy ? `<button type="button" data-i="${j}" aria-label="Bước ${j + 1}: ${esc(x.t)}"${j === i ? ' aria-current="step"' : ''}>
      <span class="bar"><i style="width:${j <= i ? 100 : 0}%"></i></span><span class="lb">${esc(x.t)}</span></button>`
      : `<span class="seg"><span class="bar"><i style="width:${j <= i ? 100 : 0}%"></i></span></span>`).join('');
    $('truoc').disabled = i <= 0;
    const last = i >= n - 1;
    $('sau').textContent = i < 0 ? 'Bắt đầu' : last ? 'Xong bài' : 'Bước tiếp';
    const nx = last && L.next ? CAT.bai.find((b) => b.title === L.next.title) : null;
    $('next-l').hidden = !nx;
    if (nx) { $('next-l').href = '#/bai/' + nx.slug; $('next-l').innerHTML = `<span class="k">Bài tiếp theo</span><b>${esc(nx.title)}</b>`; }
  }

  // câu hỏi của bước: có phương án thì bấm chọn, app báo đúng sai và hiện lời giải của bài (ask.e); chỉ nhớ trong lần mở này
  const answered = new Map();
  function renderAsk(a, k) {
    const box = $('cap-ask');
    const q = a ? (typeof a === 'string' ? a : a.q) : '';
    box.hidden = !q; if (!q) return;
    const opts = a && Array.isArray(a.o) && a.o.length ? a.o : null;
    const pick = answered.get(cur.slug + ':' + k);
    let h = '<b>Câu hỏi</b>' + esc(text(q));
    if (opts) {
      h += '<span class="opts">' + opts.map((o, j) => {
        const st = pick == null ? '' : j === a.a ? ' dung' : j === pick ? ' sai' : '';
        return `<button type="button" class="opt${st}" data-j="${j}"${pick != null ? ' disabled' : ''}>${esc(text(o))}</button>`;
      }).join('') + '</span>';
      if (pick != null) h += `<span class="kq" role="status">${pick === a.a ? 'Đúng.' : 'Chưa đúng.'}${a.e ? ' ' + esc(text(a.e)) : ''}</span>`;
    }
    box.innerHTML = h;
    box.onclick = (e) => { const b = e.target.closest('button[data-j]'); if (!b || pick != null) return; answered.set(cur.slug + ':' + k, +b.dataset.j); renderAsk(a, k); requestAnimationFrame(sendVung); };
  }
  // bảng của bài (Bảng số, Điều khiển…): nút kính dưới tên bài; bảng mở thì lớp chữ của app nhường chỗ
  function renderPanels(ps) {
    const box = $('pnl'), any = ps.some((p) => p.open);
    box.hidden = !ps.length;
    box.innerHTML = ps.map((p, k) => `<button type="button" data-n="${k}" aria-pressed="${p.open}">${esc(p.label)}</button>`).join('');
    $('stage').classList.toggle('pnl-mo', any);
  }
  // vùng lớp kính của app đang chiếm, báo cho bài để bảng số, nhãn và tâm cảnh nằm trong phần còn trống
  function sendVung() {
    if ($('stage').hidden) return;
    const W = innerWidth, H = innerHeight, top = $('pnl').hidden ? $('dong') : $('pnl');
    const v = { t: Math.round(top.getBoundingClientRect().bottom + 8), r: 0, b: 0, l: 0 };
    const cap = $('cap');
    if (!cap.hidden && getComputedStyle(cap).display !== 'none') {
      const r = cap.getBoundingClientRect();
      if (r.left > W * 0.4) v.r = Math.round(W - r.left + 8);       // cột kính bên phải
      else v.b = Math.round(H - r.top + 8);                         // lớp chữ dưới đáy
    }
    send({ t: 'vung', v });
  }
  function wire() {
    $('tai').addEventListener('click', bamTai);
    $('rows').addEventListener('click', onDlClick); $('rows-mo').addEventListener('click', onDlClick);
    $('pnl').addEventListener('click', (e) => { const b = e.target.closest('button[data-n]'); if (b) send({ t: 'pnl', n: +b.dataset.n }); });
    addEventListener('resize', () => { clearTimeout(sendVung.t); sendVung.t = setTimeout(sendVung, 120); });
    $('chips').addEventListener('click', (e) => { const c = e.target.closest('.chip'); if (!c) return; filterS = c.dataset.s; filter(); });
    $('q').addEventListener('input', (e) => { query = e.target.value; filter(); });
    $('dong').addEventListener('click', () => { location.hash = '#/thu-vien'; });
    $('an').addEventListener('click', () => { const on = $('stage').classList.toggle('sach'); $('an').setAttribute('aria-pressed', String(on)); $('an').setAttribute('aria-label', on ? 'Hiện chữ của bài' : 'Ẩn chữ để xem cảnh'); sendVung(); });
    $('truoc').addEventListener('click', () => send({ t: 'prev' }));
    $('cap-more').addEventListener('click', () => { const g = $('cap-p').classList.toggle('gon'); $('cap-more').textContent = g ? 'Đọc thêm' : 'Thu gọn'; $('cap-more').setAttribute('aria-expanded', String(!g)); requestAnimationFrame(sendVung); });
    $('sau').addEventListener('click', () => {
      if (!st) return;
      const n = (st.lesson.steps || []).length;
      if (st.i < 0) send({ t: 'go', i: 0 });
      else if (st.i >= n - 1) location.hash = '#/thu-vien';
      else send({ t: 'next' });
    });
    $('steps').addEventListener('click', (e) => { const b = e.target.closest('button[data-i]'); if (b) send({ t: 'go', i: +b.dataset.i }); });
    addEventListener('message', (e) => {
      if (e.source !== $('canh').contentWindow || !e.data || typeof e.data !== 'object') return;
      const d = e.data;
      if (d.t === 'state') onState(d);
      else if (d.t === 'nav' && typeof d.href === 'string') {
        const u = new URL(d.href, location.href), rb = BANDIA && BANDIA.remote ? new URL(BANDIA.remote) : null;
        let b = null;
        if (u.origin === location.origin) b = BYFILE.get(fileOf(u.href));
        else if (rb && u.origin === rb.origin && u.pathname.startsWith(rb.pathname)) b = BYFILE.get(fileOf(new URL('../' + u.pathname.slice(rb.pathname.length), location.href).href));
        else return;
        if (b) location.hash = '#/bai/' + b.slug; else location.assign(u.href);
      }
    });
    addEventListener('keydown', (e) => {
      if ($('stage').hidden || e.target.closest('input,textarea,select')) return;
      if (e.key === 'Escape') location.hash = '#/thu-vien';
      else if (e.key === 'ArrowRight') send({ t: 'next' });
      else if (e.key === 'ArrowLeft') send({ t: 'prev' });
    });
    addEventListener('online', () => { if (!$('v-da-tai').hidden) renderDl(); });
    // lần đầu vào app, sw.js nhận quyền điều khiển sau khi trang tải xong: lúc đó mới hiện nút tải
    if (navigator.serviceWorker) navigator.serviceWorker.addEventListener('controllerchange', () => { if (cur) nutTai(cur); if (!$('v-da-tai').hidden) renderDl(); });
    addEventListener('offline', () => { if (!$('v-da-tai').hidden) renderDl(); });
  }

  boot();
})();
