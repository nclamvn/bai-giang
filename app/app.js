/* Vỏ app Sáng Ăn Khoai · hướng sân khấu (docs/app-ke-hoach-moc.md, mốc M1).
 * Ba màn: Thư viện, Bài học (sân khấu), Đã tải. Danh mục: danh-muc.json, sinh bởi tools/build_app.py từ tools/chuoi_bai.py.
 * Bài chạy trong iframe name="bgs-canh" với ?app=1: vỏ bài (shell/bg-shell.js) ẩn thanh của nó, gửi trạng thái
 * {t:'state', lesson:{title, steps:[{t, note, ask}], next}, i} bằng postMessage; app vẽ chữ, thanh bước, nút và gửi lại
 * {t:'go', i} | {t:'next'} | {t:'prev'}. Liên kết trong bài sang trang khác của site đến app dưới dạng {t:'nav', href}.
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
  let cur = null, st = null, resume = -1, stateTimer = 0, filterS = '', query = '';
  const cached = new Set();

  /* ---------- dữ liệu ---------- */
  async function boot() {
    try { CAT = await (await fetch('danh-muc.json')).json(); } catch (e) { CAT = null; }
    if (!CAT) { document.querySelector('main').innerHTML = '<p class="empty" style="padding:24px">Không tải được danh mục bài. Kiểm tra mạng rồi mở lại app.</p>'; return; }
    for (const b of CAT.bai) { BY.set(b.slug, b); BYFILE.set(fileOf(b.href), b); }
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
      <span class="ph"><img src="${esc(b.cover)}" alt="" loading="lazy" decoding="async">${isCached(b) ? '<span class="badge glass">CÓ TRÊN MÁY</span>' : ''}</span>
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

  /* ---------- Đã tải ---------- */
  async function renderDl() {
    netLine();
    await scanCache();
    const have = CAT.bai.filter(isCached);
    $('rows').innerHTML = have.map((b) => `<li><a href="#/bai/${esc(b.slug)}"><img src="${esc(b.cover)}" alt="" loading="lazy">
      <span><span class="tt">${esc(b.title)}</span><br><span class="sub">${esc(b.nhom)}</span></span><span class="ok">CÓ TRÊN MÁY</span></a></li>`).join('');
    $('dl-empty').hidden = have.length > 0;
    $('use').textContent = 'đang đo';
    try {
      const e = navigator.storage && navigator.storage.estimate ? await navigator.storage.estimate() : null;
      $('use').textContent = e && e.usage != null ? (e.usage / 1048576).toLocaleString('vi-VN', { maximumFractionDigits: 1 }) + ' MB' : 'trình duyệt không cho đo';
    } catch (err) { $('use').textContent = 'trình duyệt không cho đo'; }
  }
  function netLine() {
    const on = navigator.onLine !== false;
    $('net').classList.toggle('off', !on);
    $('net').textContent = on ? 'Đang có mạng. Mở bài nào là bài đó được lưu để học khi mất mạng.' : 'Đang ngoại tuyến. Các bài dưới đây vẫn mở được.';
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
    $('cap').hidden = true; $('next-l').hidden = true;
    const u = new URL(b.href, location.href); u.searchParams.set('app', '1');
    $('canh').src = u.href;
    clearTimeout(stateTimer);
    // bài không báo trạng thái (không gắn vỏ hoặc vỏ cũ): vẫn xem được cảnh, chỉ có nút đóng
    stateTimer = setTimeout(() => { if (!st) $('cap').hidden = true; }, 15000);
    $('dong').focus({ preventScroll: true });
  }
  function closeLesson() {
    if ($('stage').hidden) return;
    $('stage').hidden = true; document.body.classList.remove('mo-bai');
    $('canh').src = 'about:blank'; cur = null; st = null; clearTimeout(stateTimer);
    $('stage').classList.remove('sach'); $('an').setAttribute('aria-pressed', 'false');
  }
  const send = (m) => { const w = $('canh').contentWindow; if (w) try { w.postMessage(m, ORIGIN); } catch (e) { /* khung đã đóng */ } };

  function onState(d) {
    const L = d.lesson; if (!L || !cur) return;
    st = d; clearTimeout(stateTimer);
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
    const q = i >= 0 && s.ask ? (typeof s.ask === 'string' ? s.ask : s.ask.q) : '';
    $('cap-ask').hidden = !q; if (q) $('cap-ask').innerHTML = '<b>Câu hỏi</b>' + esc(text(q));
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

  function wire() {
    $('chips').addEventListener('click', (e) => { const c = e.target.closest('.chip'); if (!c) return; filterS = c.dataset.s; filter(); });
    $('q').addEventListener('input', (e) => { query = e.target.value; filter(); });
    $('dong').addEventListener('click', () => { location.hash = '#/thu-vien'; });
    $('an').addEventListener('click', () => { const on = $('stage').classList.toggle('sach'); $('an').setAttribute('aria-pressed', String(on)); $('an').setAttribute('aria-label', on ? 'Hiện chữ của bài' : 'Ẩn chữ để xem cảnh'); });
    $('truoc').addEventListener('click', () => send({ t: 'prev' }));
    $('cap-more').addEventListener('click', () => { const g = $('cap-p').classList.toggle('gon'); $('cap-more').textContent = g ? 'Đọc thêm' : 'Thu gọn'; $('cap-more').setAttribute('aria-expanded', String(!g)); });
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
        const u = new URL(d.href, location.href); if (u.origin !== location.origin) return;
        const b = BYFILE.get(fileOf(u.href));
        if (b) location.hash = '#/bai/' + b.slug; else location.assign(u.href);
      }
    });
    addEventListener('keydown', (e) => {
      if ($('stage').hidden || e.target.closest('input,textarea,select')) return;
      if (e.key === 'Escape') location.hash = '#/thu-vien';
      else if (e.key === 'ArrowRight') send({ t: 'next' });
      else if (e.key === 'ArrowLeft') send({ t: 'prev' });
    });
    addEventListener('online', () => { if (!$('v-da-tai').hidden) netLine(); });
    addEventListener('offline', () => { if (!$('v-da-tai').hidden) netLine(); });
  }

  boot();
})();
