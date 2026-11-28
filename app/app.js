/* Vỏ app Sáng Ăn Khoai · hướng sân khấu (docs/app-ke-hoach-moc.md, mốc M1).
 * Ba màn: Thư viện, Bài học (sân khấu), Đã tải. Danh mục: danh-muc.json, sinh bởi tools/build_app.py từ tools/chuoi_bai.py.
 * Bài chạy trong iframe name="bgs-canh" với ?app=1: vỏ bài (shell/bg-shell.js) ẩn thanh của nó, gửi trạng thái
 * {t:'state', lesson:{title, steps:[{t, note, ask}], next}, i} bằng postMessage; app vẽ chữ, thanh bước, nút và gửi lại
 * {t:'go', i} | {t:'next'} | {t:'prev'}. Liên kết trong bài sang trang khác của site đến app dưới dạng {t:'nav', href}.
 * Gói ngoại tuyến (M3): goi.json (tools/goi_bai.py) liệt kê tệp và số byte thật của từng bài; sw.js tải nốt tệp còn thiếu,
 * đếm tệp còn thiếu, xoá tệp ({t:'goi'|'luu'|'xoa', files}).
 * App Android (M4, native/, Capacitor): bài nằm sẵn trong app (tools/build_native.py), bài nặng ở app/ban-dia.json mở từ site;
 * nút Back của máy đóng bài, về Thư viện; màn hình giữ sáng khi đang học (plugin ManHinh viết trong native/android).
 * Lớp học (M6, app/lop-hoc.js): #/lop/<slug> mở bài ở chế độ chiếu cho cả lớp, điều khiển bằng bàn phím, bút trình chiếu, điện thoại.
 * Không phụ thuộc thư viện ngoài (trừ PeerJS và mã QR, chỉ nạp khi giáo viên nối điện thoại), không đo đếm người dùng. Mã MIT, repo nclamvn/bai-giang. */
(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const ORIGIN = location.origin === 'null' ? '*' : location.origin;
  const SITE = new URL('../', location.href);
  const KEY = 'sak-app-gan-day';
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const text = (h) => { const t = document.createElement('template'); t.innerHTML = String(h || ''); return t.content.textContent.replace(/\s+/g, ' ').trim(); };
  // lời của bước giữ ngắt đoạn (bộ kit chia tiêu đề, nội dung, ghi chú bằng dòng trống); #cap-p hiện bằng white-space:pre-line
  const doan = (h) => { const t = document.createElement('template'); t.innerHTML = String(h || ''); return t.content.textContent.split(/\n\s*\n/).map((x) => x.replace(/\s+/g, ' ').trim()).filter(Boolean).join('\n'); };
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
      if (window.SakLop && SakLop.on && cur) location.hash = '#/bai/' + cur.slug;
      else if (!$('stage').hidden) location.hash = '#/thu-vien';
      else if (!$('v-da-tai').hidden) location.hash = '#/thu-vien';
      else P.App.minimizeApp().catch(() => P.App.exitApp());
    });
    // liên kết mở thẳng vào bài (mã QR của giáo viên): sangankhoai://bai/<slug> hoặc sangankhoai://lop/<slug> (chế độ lớp học)
    if (P.App) {
      P.App.addListener('appUrlOpen', (e) => moLienKet(e && e.url));
      // app mở lần đầu bằng liên kết: danh mục (BY) đã có từ trước; route() đọc hash ngay hoặc hashchange chạy lại
      P.App.getLaunchUrl().then((e) => { if (e && e.url) moLienKet(e.url); }).catch(() => {});
    }
    document.documentElement.classList.add('native');
  }
  function moLienKet(url) {
    console.info('[app] liên kết', url);
    const m = /^sangankhoai:\/\/(bai|lop)\/([a-z0-9-]+)/i.exec(String(url || ''));
    if (m && BY.has(m[2].toLowerCase())) location.hash = '#/' + m[1].toLowerCase() + '/' + m[2].toLowerCase();
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
    buildLib(); wire();
    if (window.SakLop) SakLop.init({ cuHtml, send, state: () => st, bai: () => cur, tiep: nextOf, native: NATIVE, remote: () => BANDIA && BANDIA.remote, sendVung });
    route();
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
    const lop = window.SakLop;
    if (v === 'lop' && BY.has(arg)) { openLesson(BY.get(arg)); if (lop) lop.bat(); return; }
    if (v === 'bai' && BY.has(arg)) { if (lop) lop.tat(); return openLesson(BY.get(arg)); }
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
    requestAnimationFrame(datPill);
  }
  // viên kính dưới tab đang chọn (app.css .tab-pill): trượt tới đúng ô của tab
  function datPill() {
    const pill = $('tab-pill'), a = document.querySelector('#tab a[aria-current="page"]');
    if (!pill) return;
    if (!a || !a.offsetWidth) { pill.style.opacity = '0'; return; }
    pill.style.width = a.offsetWidth + 'px'; pill.style.transform = `translateX(${a.offsetLeft}px)`; pill.style.opacity = '1';
  }
  // bấm lại tab đang mở (như iOS): Thư viện cuộn tới đầu danh sách bài, bấm lần nữa về đầu trang; Đã tải về đầu trang.
  // Trước đây địa chỉ không đổi nên bấm không có tác dụng gì.
  function bamTabDangMo(v) {
    const mu = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    if (v === 'thu-vien') {
      const tren = parseFloat(getComputedStyle($('tab')).top) || 0, rong = innerWidth >= 840;
      const dich = Math.max(0, $('v-thu-vien').querySelector('.lib-in').getBoundingClientRect().top + scrollY - (rong ? tren + 72 : 12) - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--st')) || 0));
      scrollTo({ top: scrollY < dich - 8 ? dich : 0, behavior: mu });
    } else scrollTo({ top: 0, behavior: mu });
  }

  /* ---------- Thư viện ---------- */
  function buildLib() {
    const chips = $('chips');
    const mk = (s, ten) => `<button class="chip" type="button" data-s="${esc(s)}" aria-pressed="${s === filterS}">${esc(ten)}</button>`;
    chips.innerHTML = mk('', 'Tất cả') + CAT.mon.map((m) => mk(m.s, m.ten)).join('');
    $('grid').innerHTML = CAT.bai.map((b) => `<li data-s="${esc(b.s)}" data-q="${esc(fold(b.title + ' ' + b.nhom + ' ' + b.mon))}"><a class="card" href="#/bai/${esc(b.slug)}">
      <span class="ph"><img src="${esc(b.nho || b.cover)}"${b.nho ? ` srcset="${esc(b.nho)} 560w, ${esc(b.cover)} 960w" sizes="${THE_SIZES}"` : ''} alt="" loading="lazy" decoding="async">${NATIVE ? (remoteOf(b) ? '<span class="badge glass can-mang">CẦN MẠNG</span>' : '') : daTai().has(b.slug) ? '<span class="badge glass">ĐÃ TẢI</span>' : ''}</span>
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
  // Chất lượng hình (màn Đã tải): 'tu-dong' (mặc định), 'tiet-kiem', 'dep'. Ở Tự động, bài nào chạy chậm (vỏ bài đo nhịp khung hình,
  // shell/bg-shell.js) thì báo app; chậm ở 2 bài khác nhau thì app ghi máy này là máy chậm và từ đó mở bài bằng hình nhẹ (?hinh=yeu).
  const HINH_K = 'sak-hinh', CHAM_K = 'sak-hinh-cham';
  const doc = (k, d) => { try { return localStorage.getItem(k) || d; } catch (e) { return d; } };
  const ghi = (k, v) => { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { /* bỏ qua */ } };
  const hinh = () => { const h = doc(HINH_K, 'tu-dong'); return h === 'dep' || h === 'tiet-kiem' ? h : 'tu-dong'; };
  const baiCham = () => { try { return JSON.parse(doc(CHAM_K, '[]')); } catch (e) { return []; } };
  const mayCham = () => baiCham().length >= 2;
  const thamSoHinh = () => (hinh() !== 'tu-dong' ? hinh() : mayCham() ? 'yeu' : '');
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
  document.documentElement.dataset.hinh = hinh();
  function renderHinh() {
    const h = hinh();
    for (const b of document.querySelectorAll('#hinh button')) b.setAttribute('aria-pressed', String(b.dataset.hinh === h));
    $('hinh-note').textContent = h === 'dep' ? 'Vẽ nét nhất màn hình cho phép, không tự hạ khi giật. Máy nóng và tốn pin hơn.'
      : h === 'tiet-kiem' ? 'Vẽ ít điểm ảnh hơn, tối đa 30 khung mỗi giây, tắt hiệu ứng kính mờ. Đỡ nóng máy, pin lâu hơn.'
      : mayCham() ? 'Tự động: cảnh từng chạy chậm trên máy này nên app đang vẽ hình nhẹ (ít điểm ảnh hơn, không kính mờ).'
      : 'Tự động: vẽ vừa đủ nét cho màn hình; bài nào chạy chậm thì tự chuyển sang hình nhẹ.';
  }
  async function renderDl() {
    netLine(); renderHinh();
    if (NATIVE) return renderDlNative();
    await scanCache(); await goiData();
    const s = daTai(), co = [], mo = [];
    for (const b of CAT.bai) {
      if (s.has(b.slug) || dangTai.has(b.slug)) co.push(b); else if (isCached(b)) mo.push(b);
    }
    const row = (b, sub, act) => `<li data-slug="${esc(b.slug)}"><a href="#/bai/${esc(b.slug)}"><img src="${esc(b.nho || b.cover)}" alt="" loading="lazy" decoding="async">
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
    $('rows-mo').innerHTML = ngoai.map((b) => `<li data-slug="${esc(b.slug)}"><a href="#/bai/${esc(b.slug)}"><img src="${esc(b.nho || b.cover)}" alt="" loading="lazy" decoding="async">
      <span><span class="tt">${esc(b.title)}</span><br><span class="sub">Bài nặng, mở từ site khi có mạng</span></span></a></li>`).join('');
    // bài nằm trong tệp cài: dung lượng thật từ goi.json (phần chung và gói của mọi bài trong app); bộ nhớ trình duyệt không tính phần này
    $('use').previousElementSibling.textContent = 'Bài trong app chiếm';
    $('use').textContent = (await goiData()) ? mb(byteOf([...new Set([...GOI.chung, ...CAT.bai.filter((b) => !remoteOf(b)).flatMap((b) => GOI.bai[b.slug] || [])])].map((i) => GOI.tep[i][0]))) : 'không đo được';
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
    $('cap').hidden = true; $('next-l').hidden = true; $('pnl').hidden = true; $('pnl').dataset.h = ''; delete $('pnl').dataset.gop; dongMenu(); $('stage').classList.remove('pnl-mo');
    nutTai(b);
    // trong app Android, máy chủ nội bộ của Capacitor trả trang gốc cho địa chỉ thư mục (/ten-bai/): mở thẳng index.html
    const xa = remoteOf(b), u = new URL(xa || (NATIVE ? new URL(fileOf(b.href), SITE).href : b.href), location.href); u.searchParams.set('app', '1');
    if (thamSoHinh()) u.searchParams.set('hinh', thamSoHinh());
    if (xa) { u.searchParams.set('o', location.origin); if (navigator.onLine === false) baoTin('Bài này mở từ site, cần có mạng.', 5000); }
    giuSang(true);
    $('canh').src = u.href;
    clearTimeout(stateTimer);
    // bài không báo trạng thái (không gắn vỏ hoặc vỏ cũ): vẫn xem được cảnh, chỉ có nút đóng
    stateTimer = setTimeout(() => { if (!st) $('cap').hidden = true; }, 15000);
  }
  function closeLesson() {
    if ($('stage').hidden) return;
    if (window.SakLop) SakLop.tat();
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
    if (window.SakLop) SakLop.onState(d);
    renderPanels(d);
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
    $('cap-p').textContent = i < 0 ? '' : doan(s.note);
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
    const nx = last ? nextOf(L) : null;
    $('next-l').hidden = !nx;
    if (nx) { $('next-l').href = '#/bai/' + nx.slug; $('next-l').innerHTML = `<span class="k">Bài tiếp theo</span><b>${esc(nx.title)}</b>`; }
  }

  const nextOf = (L) => (L && L.next ? CAT.bai.find((b) => b.title === L.next.title) || null : null);

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
  /* ---------- thanh công cụ kính của cảnh ----------
     Một thanh duy nhất dưới tên bài, thay cho nhiều hàng nút riêng của bài: công cụ bài khai qua vỏ (BGShell.congCu: tự chạy,
     góc nhìn, thao tác, tháo rời, tốc độ) và các bảng của bài (Bảng số, Điều khiển…). Nhóm nhiều lựa chọn là một nút mở trình đơn
     kính; nút bật tắt sáng lên khi bật. Bảng mở thì lớp chữ của app nhường chỗ. */
  // bề rộng thẻ Thư viện theo bố cục (app.css .grid): trình duyệt chọn bìa 560 px hay bản gốc theo mật độ màn hình
  const THE_SIZES = '(min-width: 1100px) 280px, (min-width: 600px) 31vw, calc(50vw - 18px)';
  const ICON = {
    chay: '<path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none"/>',
    dung: '<rect x="7" y="5.5" width="3.6" height="13" rx="1" fill="currentColor" stroke="none"/><rect x="13.4" y="5.5" width="3.6" height="13" rx="1" fill="currentColor" stroke="none"/>',
    goc: '<path d="M3 8.5V6a2 2 0 0 1 2-2h2.5M16.5 4H19a2 2 0 0 1 2 2v2.5M21 15.5V18a2 2 0 0 1-2 2h-2.5M7.5 20H5a2 2 0 0 1-2-2v-2.5"/><circle cx="12" cy="12" r="3.2"/>',
    thao: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/><path d="M14 7h3.5v3.5M10 17H6.5v-3.5"/>',
    'thao-tac': '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
    toc: '<path d="M4.5 16a8 8 0 1 1 15 0"/><path d="M12 13l4-4"/>',
    lai: '<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4.5v4h4"/>',
    them: '<circle cx="6" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="18" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
    bang: '<rect x="4" y="4" width="16" height="16" rx="2.5"/><path d="M4 9.5h16M9.5 9.5V20"/>',
    xuong: '<path d="M7 10l5 5 5-5"/>', chon: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  };
  const ic = (k, c = '') => `<svg viewBox="0 0 24 24" aria-hidden="true"${c ? ` class="${c}"` : ''}>${ICON[k] || ''}</svg>`;
  let CU = { cu: [], panels: [], them: null };
  // màn hẹp mà vẫn tràn: gộp tốc độ và nút thao tác riêng của bài vào một trình đơn Thêm (⋯) chia mục
  function gopThem(cu) {
    const vao = (g) => g.id === 'toc' || g.id === 'tt' || (g.kieu === 'bat' && g.id !== 'tour');
    const gop = cu.filter(vao); if (gop.length < 2) return { cu, them: null };
    const items = [];
    for (const g of gop) {
      if (g.kieu === 'bat') items.push({ id: g.id, ten: g.ten, on: !!g.on, vai: 'menuitemcheckbox' });
      else { items.push({ hdr: g.ten }); for (const x of g.items || []) items.push({ ...x, vai: g.kieu === 'chon' ? 'menuitemradio' : 'menuitemcheckbox' }); }
    }
    const them = { id: 'them', kieu: 'menu', ten: 'Thêm', icon: 'them', items };
    return { cu: [...cu.filter((g) => !vao(g)), them], them };
  }
  // HTML các nút của thanh (dùng cho sân khấu và chế độ lớp học: cls là lớp nút của chế độ đó)
  function cuHtml(d, cls = '', gop = false) {
    const ps = (d && d.panels) || [], gon = innerWidth < 600 && !cls;
    let cu = (d && d.cu) || [];
    if (gop) { const r = gopThem(cu); cu = r.cu; CU.them = r.them; } else if (!cls) CU.them = null;
    const nut = cu.map((g) => {
      if (g.kieu === 'bat') return `<button type="button" class="${cls}" data-cu="${esc(g.id)}" aria-pressed="${!!g.on}"${gon && g.id === 'tour' ? ` aria-label="${esc(g.ten)}"` : ''}>${ic(g.icon)}${gon && g.id === 'tour' ? '' : `<span>${esc(g.ten)}</span>`}</button>`;
      const cur = g.kieu === 'chon' ? (g.items || []).find((x) => x.on) : null;
      const nhan = g.id === 'toc' && cur ? cur.ten.replace('Tạm dừng', '❚❚') : cur ? cur.ten : g.ten;
      const bat = g.kieu === 'menu' && (g.items || []).some((x) => x.on && x.vai !== 'menuitemradio');
      // điện thoại: nhóm chọn chỉ hiện lựa chọn đang dùng (không biểu tượng), nhóm trình đơn chỉ hiện biểu tượng
      const hienIc = !gon || g.kieu === 'menu', hienChu = !gon || g.kieu === 'chon';
      // thanh vẫn tràn (thêm nút thao tác riêng của bài): lớp .chat thu nhóm chọn về biểu tượng (app.css)
      const gonIc = gon && g.kieu === 'chon' && g.id !== 'toc';
      return `<button type="button" class="${cls} co-menu${bat ? ' dang' : ''}" data-cu-nhom="${esc(g.id)}" aria-haspopup="menu" aria-expanded="false" aria-label="${esc(g.ten + (cur ? ': ' + cur.ten : ''))}">${hienIc ? ic(g.icon) : gonIc ? ic(g.icon, 'ic-gon') : ''}${hienChu ? `<span${gonIc ? ' class="chu-gon"' : ''}>${esc(nhan)}</span>` : ''}${ic('xuong', 'cv')}</button>`;
    }).join('');
    const motBang = gon && ps.length === 1;
    return nut + ps.map((p, k) => `<button type="button" class="${cls}" data-n="${k}" aria-pressed="${p.open}"${motBang ? ` aria-label="${esc(p.label)}"` : ''}>${ic('bang')}${motBang ? '' : `<span>${esc(p.label)}</span>`}</button>`).join('');
  }
  function renderPanels(d) {
    CU = { cu: (d && d.cu) || [], panels: (d && d.panels) || [] };
    const box = $('pnl'), any = CU.panels.some((p) => p.open);
    box.hidden = !CU.cu.length && !CU.panels.length;
    box.classList.toggle('day', CU.cu.length + CU.panels.length >= 2);
    // vẽ lại chỉ khi đổi, để trình đơn đang mở không bị mất nút gốc
    let h = cuHtml(CU, '', !!box.dataset.gop);
    if (box.dataset.h !== h) {
      box.dataset.h = h; vaNut(box, h);
      if (!box.hidden && !box.dataset.gop) {
        box.classList.remove('chat');
        if (box.scrollWidth > box.clientWidth + 1) box.classList.add('chat');
        if (box.scrollWidth > box.clientWidth + 1) { box.dataset.gop = '1'; h = cuHtml(CU, '', true); box.dataset.h = h; box.innerHTML = h; box.classList.remove('chat'); if (box.scrollWidth > box.clientWidth + 1) box.classList.add('chat'); }
      } const m = $('cu-menu'); if (!m.hidden && m.dataset.nhom) moMenu(m.dataset.nhom, true); }
    $('stage').classList.toggle('pnl-mo', any);
  }
  // cập nhật nút tại chỗ (không thay cả hàng): ngón tay đang chạm một nút thì nút đó không bị gỡ khỏi trang giữa chừng
  function vaNut(box, h) {
    const t = document.createElement('div'); t.innerHTML = h;
    const moi = [...t.children], cu = [...box.children];
    const khoa = (e) => e.dataset.cu || e.dataset.cuNhom || 'n' + e.dataset.n;
    if (moi.length !== cu.length || moi.some((e, k) => khoa(e) !== khoa(cu[k]))) { box.innerHTML = h; return; }
    moi.forEach((e, k) => {
      const o = cu[k]; if (o.outerHTML === e.outerHTML) return;
      for (const a of [...o.attributes]) if (!e.hasAttribute(a.name) && a.name !== 'aria-expanded') o.removeAttribute(a.name);
      for (const a of [...e.attributes]) if (a.name !== 'aria-expanded') o.setAttribute(a.name, a.value);
      if (o.innerHTML !== e.innerHTML) o.innerHTML = e.innerHTML;
    });
  }
  // trình đơn kính của một nhóm, mở dưới nút (hoặc phía trên nếu nút ở nửa dưới màn: thanh của chế độ lớp học)
  function moMenu(id, giuCho) {
    const g = CU.cu.find((x) => x.id === id) || (id === 'them' ? CU.them : null), m = $('cu-menu');
    const nut = [...document.querySelectorAll(`[data-cu-nhom="${CSS.escape(id)}"]`)].find((b) => b.offsetParent);
    if (!g || !nut) return dongMenu();
    m.dataset.nhom = id;
    m.innerHTML = (id === 'them' ? '' : `<p class="cu-h">${esc(g.ten)}</p>`) + (g.items || []).map((x) => x.hdr ? `<p class="cu-h">${esc(x.hdr)}</p>`
      : `<button type="button" role="${x.vai || (g.kieu === 'chon' ? 'menuitemradio' : 'menuitemcheckbox')}" aria-checked="${!!x.on}" data-cu="${esc(x.id)}"><span>${esc(x.ten)}</span>${x.on ? ic('chon') : ''}</button>`).join('');
    m.hidden = false; $('cu-che').hidden = false;
    document.querySelectorAll('[data-cu-nhom]').forEach((b) => b.setAttribute('aria-expanded', String(b.dataset.cuNhom === id)));
    const r = nut.getBoundingClientRect(), w = m.offsetWidth, h = m.offsetHeight;
    const x = Math.max(8, Math.min(innerWidth - w - 8, r.left)), duoi = r.top < innerHeight / 2;
    m.style.left = x + 'px'; m.style.top = (duoi ? r.bottom + 8 : r.top - h - 8) + 'px';
    m.style.transformOrigin = `${r.left + r.width / 2 - x}px ${duoi ? 0 : h}px`;
    if (!giuCho) { m.classList.remove('mo'); requestAnimationFrame(() => m.classList.add('mo')); const f = m.querySelector('[aria-checked="true"]') || m.querySelector('button'); if (f && matchMedia('(pointer:fine)').matches) f.focus(); }
  }
  function dongMenu() {
    const m = $('cu-menu'); if (m.hidden) return;
    m.hidden = true; $('cu-che').hidden = true; m.classList.remove('mo'); delete m.dataset.nhom;
    document.querySelectorAll('[data-cu-nhom]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
  }
  // vùng lớp kính của app đang chiếm, báo cho bài để bảng số, nhãn và tâm cảnh nằm trong phần còn trống
  function sendVung() {
    if ($('stage').hidden) return;
    if (window.SakLop && SakLop.on) return send({ t: 'vung', v: SakLop.vung() });
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
    $('tab').addEventListener('click', (e) => {
      const a = e.target.closest('a[data-v]'); if (!a) return;
      const sec = $('v-' + a.dataset.v);
      if (sec && !sec.hidden && $('stage').hidden) { e.preventDefault(); bamTabDangMo(a.dataset.v); }
    });
    addEventListener('resize', () => requestAnimationFrame(datPill));
    if (document.fonts) document.fonts.ready.then(datPill);
    $('tai').addEventListener('click', bamTai);
    $('rows').addEventListener('click', onDlClick); $('rows-mo').addEventListener('click', onDlClick);
    $('pnl').addEventListener('click', (e) => { const b = e.target.closest('button[data-n]'); if (b) send({ t: 'pnl', n: +b.dataset.n }); });
    // nút của thanh công cụ (cả trên sân khấu và trong chế độ lớp học) và mục trong trình đơn
    document.addEventListener('click', (e) => {
      const nhom = e.target.closest('[data-cu-nhom]');
      if (nhom) { const m = $('cu-menu'); if (!m.hidden && m.dataset.nhom === nhom.dataset.cuNhom) dongMenu(); else moMenu(nhom.dataset.cuNhom); return; }
      const b = e.target.closest('[data-cu]');
      if (b) { send({ t: 'cu', id: b.dataset.cu }); if (b.closest('#cu-menu')) setTimeout(dongMenu, 140); return; }
      if (!e.target.closest('#cu-menu')) dongMenu();
    });
    addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('cu-menu').hidden) { e.stopImmediatePropagation(); dongMenu(); } }, true);
    addEventListener('resize', dongMenu);
    // chạm vào cảnh 3D (khung bài, sự kiện không tới trang app) khi trình đơn mở: lớp chắn trong suốt đóng trình đơn
    $('cu-che').addEventListener('pointerdown', (e) => { e.preventDefault(); dongMenu(); });
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
    $('hinh').addEventListener('click', (e) => {
      const b = e.target.closest('button[data-hinh]'); if (!b) return;
      ghi(HINH_K, b.dataset.hinh === 'tu-dong' ? null : b.dataset.hinh); ghi(CHAM_K, null); renderHinh();
      document.documentElement.dataset.hinh = hinh();
    });
    $('steps').addEventListener('click', (e) => { const b = e.target.closest('button[data-i]'); if (b) send({ t: 'go', i: +b.dataset.i }); });
    addEventListener('message', (e) => {
      if (e.source !== $('canh').contentWindow || !e.data || typeof e.data !== 'object') return;
      const d = e.data;
      if (d.t === 'state') onState(d);
      else if (d.t === 'hinh' && d.yeu && cur && hinh() === 'tu-dong' && !mayCham()) {
        const ds = baiCham(); if (!ds.includes(cur.slug)) ds.push(cur.slug);
        ghi(CHAM_K, JSON.stringify(ds.slice(-4)));
        if (mayCham()) baoTin('Cảnh 3D chạy chậm trên máy này: từ bài sau app vẽ hình nhẹ hơn cho mượt. Đổi ở Đã tải, mục Chất lượng hình.', 7000);
      }
      else if (d.t === 'nav' && typeof d.href === 'string') {
        const u = new URL(d.href, location.href), rb = BANDIA && BANDIA.remote ? new URL(BANDIA.remote) : null;
        let b = null;
        if (u.origin === location.origin) b = BYFILE.get(fileOf(u.href));
        else if (rb && u.origin === rb.origin && u.pathname.startsWith(rb.pathname)) b = BYFILE.get(fileOf(new URL('../' + u.pathname.slice(rb.pathname.length), location.href).href));
        else return;
        // trang phụ không có trong app (xem bằng AR): mở trên site; Capacitor mở địa chỉ ngoài bằng trình duyệt của máy
        const xa = !b && BANDIA && (BANDIA.trang_xa || []).find((x) => fileOf(u.href).endsWith(x));
        if (b) location.hash = '#/bai/' + b.slug; else location.assign(xa ? BANDIA.remote + xa : u.href);
      }
    });
    addEventListener('keydown', (e) => {
      if ($('stage').hidden || e.target.closest('input,textarea,select')) return;
      if (window.SakLop && SakLop.on) { if (SakLop.phim(e)) e.preventDefault(); return; }
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
