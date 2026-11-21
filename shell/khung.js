/* Khung tài liệu Sáng Ăn Khoai · trang dọc cho bài 3D không dùng bộ kit (docs/thiet-ke-giao-dien-doc.md).
 * tools/inject_shell.py đặt ở đầu <head> của bài một đoạn mã nhỏ: khi bài mở ở cửa sổ chính, đoạn mã nạp tệp này rồi
 * dừng phần còn lại của trang (thẻ <plaintext>), nên mã nặng của bài không chạy ở trang ngoài. Tệp này dựng trang dọc:
 * dải nhận diện, tên bài, lời giảng, khung cảnh tràn ngang chứa chính bài (iframe name="bgs-canh", cùng địa chỉ),
 * dải chỉ số, danh sách bước sáng theo bài, bài tiếp theo, dải chân.
 * Vỏ trong khung (bg-shell.js) báo trạng thái bằng postMessage; trang ngoài gửi lại {t:'go'|'next'|'prev'|'start'}.
 * Mở ?doc=0 để chạy bài như cũ, toàn màn hình. */
(function () {
  'use strict';
  const K = window.BG_KHUNG; if (!K) return;
  const R = K.root || '../';
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const txt = (h) => String(h || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const tom = (h, n) => { const t = txt(h); const i = t.search(/[.;:!?](\s|$)/); const a = i > 24 && i < n ? t.slice(0, i + 1) : t; return a.length > n ? a.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : a; };
  const pad = (n) => String(n).padStart(2, '0');
  const fix = (h) => (/^(https?:|\/)/.test(h) ? h : R + h);

  const CSS = `
  body.bg-khung{margin:0;background:var(--bg-page);color:var(--bg-ink);font:400 var(--bg-fs-sm)/1.6 var(--bg-font);-webkit-font-smoothing:antialiased}
  body.bg-khung *{box-sizing:border-box}
  .bg-khung .sitebar .crumbs{overflow:hidden}.bg-khung .sitebar .crumbs .sep{color:#C9C9C6}
  .bg-khung .kh-say .k{margin-bottom:8px}.bg-khung .kh-say p{max-width:62ch}
  .bg-khung .kh-say .e{margin-top:14px;display:inline-block;font:500 12.5px/1.5 var(--bg-mono);background:#F4F4F0;border-radius:6px;padding:7px 11px;color:var(--bg-ink)}
  .bg-khung .kh-say .e:empty{display:none}
  .kh-nav{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:22px}
  .kh-nav button,.kh-nav a{display:inline-flex;align-items:center;justify-content:center;gap:6px;height:36px;min-width:36px;padding:0 13px;border-radius:8px;border:1px solid #E2E2E0;background:#fff;color:var(--bg-ink);font:500 13.5px var(--bg-font);text-decoration:none;cursor:pointer}
  @media (hover:hover){.kh-nav button:hover,.kh-nav a:hover{border-color:#C9C9C6}}.kh-nav .pri{background:var(--bg-ink);border-color:var(--bg-ink);color:#fff}
  .kh-nav .n{font:500 12px var(--bg-mono);color:var(--bg-mut);padding:0 6px;letter-spacing:.06em}
  .kh-stage{position:relative;max-width:1600px;margin:clamp(4px,1vw,12px) auto 0;background:#fff}
  .kh-stage iframe{display:block;width:100%;height:100%;border:0;background:#E9EAEE}
  .kh-stage:before,.kh-stage:after{content:'';position:absolute;left:0;right:0;height:18px;z-index:2;pointer-events:none}
  .kh-stage:before{top:0;background:linear-gradient(#fff,rgba(255,255,255,0))}.kh-stage:after{bottom:0;background:linear-gradient(rgba(255,255,255,0),#fff)}
  .kh-stage .cv{position:absolute;inset:0;background:#E9EAEE center/cover no-repeat;transition:opacity .6s var(--bg-ease)}.kh-stage.ok .cv{opacity:0;pointer-events:none}
  .bg-khung .bg-stats{margin-top:4px}body.bg-khung .bg-stats>*:first-child span{color:var(--bg-mut)}body.bg-khung .bg-stats>*:first-child span:before{background:#B5B5B8}body.bg-khung .bg-stats .on span{color:var(--bg-ink)}body.bg-khung .bg-stats .on span:before{background:var(--bg-sig)}.bg-khung .bg-stats .on b small{font-size:.42em}
  body.bg-khung .bg-stats>.on:after{width:var(--p,22px);transition:width .4s}
  .kh-steps{padding:clamp(32px,4vw,52px) 0 8px!important;grid-auto-flow:column;grid-template-rows:repeat(var(--r4),auto)}
  .kh-steps li{cursor:pointer}.kh-steps li:before{color:#C2C2C6!important}
  .kh-steps.run li b{color:#9A9A9E}.kh-steps.run li p{color:#B5B5B8}
  @media (hover:hover){.kh-steps li:hover b{color:var(--bg-ink2)}}.kh-steps li.on:before{color:var(--bg-sig)!important}.kh-steps li.on b{color:var(--bg-ink)!important}.kh-steps li.on p{color:var(--bg-ink2)!important}
  .kh-more{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding-top:clamp(28px,4vw,44px)}
  .kh-more a{display:block;text-decoration:none;color:inherit}@media (hover:hover){.kh-more a:hover{border-color:#C9C9C6}}.kh-more b{display:block;font:500 18px/1.35 var(--bg-font);letter-spacing:-.015em}.kh-more p{margin:6px 0 0;color:var(--bg-ink2);font-size:14px}
  .bg-khung .bg-foot{margin-top:clamp(36px,5vw,56px)}
  @media (max-width:1100px){.kh-steps{grid-template-rows:repeat(var(--r2),auto)}}
  @media (max-width:640px){.kh-steps{grid-auto-flow:row;grid-template-rows:none}.kh-more{grid-template-columns:1fr}.bg-khung .sitebar .crumbs a,.bg-khung .sitebar .crumbs .sep{display:none}}
  `;

  function build() {
    document.querySelectorAll('plaintext').forEach((n) => n.remove());
    const H = document.documentElement; H.lang = 'vi';
    if (!document.querySelector('meta[name=viewport]')) { const m = document.createElement('meta'); m.name = 'viewport'; m.content = 'width=device-width,initial-scale=1,viewport-fit=cover'; document.head.appendChild(m); }
    if (!document.querySelector('meta[name=theme-color]')) { const m = document.createElement('meta'); m.name = 'theme-color'; m.content = '#FFFFFF'; document.head.appendChild(m); } // phần đầu trang gốc nằm sau <plaintext> nên không được đọc
    document.title = K.doc_title || K.title;
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    const crumb = (K.crumb || []).map((c) => (c.href ? `<a href="${esc(fix(c.href))}">${esc(c.t)}</a>` : `<span>${esc(c.t)}</span>`)).join('<span class="sep">/</span>');
    const color = K.s ? `var(--bg-s-${K.s})` : 'var(--bg-ink)';
    const legend = [K.subject && `<span style="--c:${color}">${esc(K.subject)}</span>`]
      .concat((K.crumb || []).map((c) => (c.href ? `<a href="${esc(fix(c.href))}">${esc(c.t)}</a>` : `<span>${esc(c.t)}</span>`)))
      .concat(K.pack ? [`<a href="${esc(fix(K.pack))}" style="--c:var(--bg-amber)">Gói dạy 45 phút</a>`] : []).filter(Boolean).join('');
    const src = location.pathname + location.search;
    document.body.className = 'bg-hub bg-khung';
    document.body.innerHTML = `
<a class="bg-skip" href="#noi-dung">Bỏ qua tới nội dung</a><header class="sitebar"><div class="in"><a class="brand" href="${esc(R)}" aria-label="Sáng Ăn Khoai, trang chính"><img src="${esc(R)}design/logo/mark-128.webp" alt="" width="28" height="28"><span>Sáng Ăn Khoai</span></a>
  <nav class="crumbs" aria-label="Vị trí">${crumb}${crumb ? '<span class="sep">/</span>' : ''}<b>${esc(K.title)}</b></nav></div></header>
<main id="noi-dung" tabindex="-1" style="outline:none!important">
<div class="wrap">
  <div class="bg-meta"><div class="bg-mono">${esc((K.crumb || []).map((c) => c.t).join(' · ') || K.subject || 'Sáng Ăn Khoai')}<br>${esc(K.subject || '')}${K.subject ? ' · ' : ''}Bài 3D tương tác</div><div class="bg-mono r">Bài 3D chạy trực tiếp<br><span data-nn>…</span> bước</div></div>
  <section class="bg-head"><div><h1>${esc(K.title)}</h1><div class="bg-legend">${legend}</div></div>
    <div class="bg-say kh-say" aria-live="polite"><div class="bg-mono k">Giới thiệu</div><h2>${esc(K.title)}</h2><p>${esc(K.desc || '')}</p><div class="e"></div>
      <div class="kh-nav"><button data-a="prev" aria-label="Bước trước">‹</button><span class="n">–</span><button data-a="next" aria-label="Bước sau">›</button><button class="pri" data-a="start">Lên lớp</button><button data-a="full">Toàn màn hình</button></div></div></section>
</div>
<div class="kh-stage"><div class="cv" style="background-image:url('${esc(fix(K.cover || ''))}')"></div><iframe name="bgs-canh" title="${esc(K.title)} · cảnh 3D" src="${esc(src)}" allow="fullscreen; autoplay; xr-spatial-tracking; clipboard-write" allowfullscreen></iframe></div>
<div class="wrap">
  <div class="bg-stats" style="--n:4"><div><b data-nn>–</b><span>Bước trong bài</span></div><div class="on"><b data-cur>–</b><span>Bước đang giảng</span></div><div><b>${esc(K.subject || '3D')}</b><span>Môn</span></div><div><b>${K.pack ? '45<small>phút</small>' : 'Tự học'}</b><span>${K.pack ? 'Gói dạy trọn tiết' : 'Theo từng bước'}</span></div></div>
  <ol class="bg-steps kh-steps"></ol>
  <div class="kh-more">${K.next ? `<a class="bg-card" href="${esc(fix(K.next.href))}"><header><span>Bài tiếp theo</span><span>→</span></header><b>${esc(K.next.title)}</b><p>${esc(K.next.sub || '')}</p></a>` : ''}${K.pack ? `<a class="bg-card" href="${esc(fix(K.pack))}"><header><span>Cho giáo viên</span><span>45′</span></header><b>Gói dạy thử 45 phút</b><p>Kịch bản theo phút, phiếu học tập in A4, đáp án.</p></a>` : ''}</div>
  <footer class="bg-foot"><span>Sáng Ăn Khoai · ${esc(K.subject || 'bài học 3D')}</span><span data-foot><a href="?doc=0">Mở bài toàn màn hình</a></span></footer>
</div>
</main>`;
    const $ = (s) => document.querySelector(s), $$ = (s) => [...document.querySelectorAll(s)];
    const ifr = $('iframe'), stage = $('.kh-stage'), list = $('.kh-steps'), say = $('.kh-say');
    // khung cảnh: tràn ngang, cao theo bề rộng (điện thoại gần vuông), không quá chiều cao màn hình
    const fit = () => { const w = stage.clientWidth || innerWidth; const h = Math.round(Math.max(360, Math.min(w * (w < 700 ? 1.08 : 0.6), innerHeight - 72))); stage.style.height = h + 'px'; };
    fit(); addEventListener('resize', fit);
    // trang ngoài đọc vỏ của bài qua khung (kiểm thử, công cụ): BGShell, BG_SEQ
    for (const k of ['BGShell', 'BG_SEQ']) Object.defineProperty(window, k, { configurable: true, get: () => { try { return ifr.contentWindow[k]; } catch (e) { return undefined; } } });
    const send = (m) => { try { ifr.contentWindow.postMessage(m, location.origin === 'null' ? '*' : location.origin); } catch (e) { /* bỏ qua */ } };
    let L = null, cur = -2, on = false;
    const renderList = () => {
      const n = L.steps.length;
      list.style.setProperty('--r4', Math.ceil(n / 4)); list.style.setProperty('--r2', Math.ceil(n / 2));
      list.innerHTML = L.steps.map((s, k) => { const d = s.plan ? (s.plan.hs || s.plan.gv) : s.note; return `<li data-i="${k}"><div><b>${esc(s.t)}</b>${d ? `<p>${esc(tom(d, 110))}</p>` : ''}</div></li>`; }).join('');
      $$('[data-nn]').forEach((e) => { e.textContent = pad(n); });
    };
    const show = (i) => {
      cur = i; const n = L.steps.length, s = L.steps[i];
      $$('.kh-steps li').forEach((li, k) => li.classList.toggle('on', k === i)); list.classList.toggle('run', i >= 0);
      $('[data-cur]').innerHTML = i >= 0 ? `${pad(i + 1)}<small>/ ${pad(n)}</small>` : '–';
      $('.bg-stats .on').style.setProperty('--p', i >= 0 ? Math.max(22, Math.round(((i + 1) / n) * 100)) + '%' : '22px');
      $('.kh-nav .n').textContent = i >= 0 ? `${pad(i + 1)} / ${pad(n)}` : `– / ${pad(n)}`;
      if (s) {
        say.querySelector('.k').textContent = `Bước ${pad(i + 1)} / ${pad(n)}` + (s.plan ? ` · phút ${s.plan.m[0]}–${s.plan.m[1]}` : '');
        say.querySelector('h2').textContent = s.t;
        say.querySelector('p').textContent = txt(s.plan ? s.plan.gv : s.note) || K.desc || '';
        say.querySelector('.e').textContent = s.ask && s.ask.q ? 'Câu hỏi: ' + txt(s.ask.q) : (s.plan && s.plan.hs ? 'Học sinh: ' + tom(s.plan.hs, 140) : '');
        $('[data-foot]').textContent = s.t;
      }
    };
    addEventListener('message', (e) => {
      if (e.source !== ifr.contentWindow || !e.data || e.data.t !== 'state') return;
      const m = e.data;
      if (m.lesson && m.lesson.steps && (!L || L.steps.length !== m.lesson.steps.length)) { L = m.lesson; renderList(); }
      if (!L) return;
      if (m.i !== cur) show(m.i);
      on = !!m.on; const b = $('[data-a=start]'); b.textContent = on ? 'Dừng lên lớp' : 'Lên lớp';
      stage.classList.add('ok');
      if (!document.body.classList.contains('bgs-on')) document.body.classList.add('bgs-on');
    });
    ifr.addEventListener('load', () => setTimeout(() => stage.classList.add('ok'), 1200));
    list.addEventListener('click', (e) => { const li = e.target.closest('li'); if (li) send({ t: 'go', i: +li.dataset.i }); });
    $('.kh-nav').addEventListener('click', (e) => {
      const a = e.target.closest('button') && e.target.closest('button').dataset.a; if (!a) return;
      if (a === 'prev') send({ t: 'go', i: Math.max(0, cur - 1) });
      else if (a === 'next') send({ t: 'go', i: L ? Math.min(L.steps.length - 1, cur + 1) : 0 });
      else if (a === 'start') { send({ t: on ? 'stop' : 'start' }); try { ifr.focus(); } catch (er) { /* bỏ qua */ } }
      else if (a === 'full') (ifr.requestFullscreen || ifr.webkitRequestFullscreen || (() => {})).call(ifr);
    });
    // phím ở trang ngoài: mũi tên chuyển bước, F toàn màn hình cảnh
    addEventListener('keydown', (e) => {
      if (e.target.closest && e.target.closest('input,textarea,select')) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); send({ t: 'go', i: L ? Math.min(L.steps.length - 1, cur + 1) : 0 }); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); send({ t: 'go', i: Math.max(0, cur - 1) }); }
      else if (e.key === 'f' || e.key === 'F') (ifr.requestFullscreen || (() => {})).call(ifr);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
