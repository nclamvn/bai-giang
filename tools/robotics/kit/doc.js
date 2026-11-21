// Bố cục tài liệu cho bài chạy trực tiếp (bản 15): trang cuộn dọc, máy tính bảng dựng đứng là chuẩn.
// Thứ tự: dòng meta chữ đơn cách, tiêu đề lớn và lời giảng của bước đang chạy, cảnh 3D tràn ngang, dải chỉ số, hàng nút,
// lưới thẻ bảng số, danh sách bước đánh số, dải chú thích. Bảng số của bài vẫn dựng trên khung 1600 × 900: mỗi khung (.cp)
// cùng mọi thứ nằm trong nó được nhấc thành một thẻ, co giãn theo bề ngang cột. Lớp phủ trên cảnh (nhãn, cảnh báo) ở lại cảnh.
import {sc} from './ui.js';

const CSS = `
html:has(body.doc),body.doc{overflow:auto!important;height:auto!important}
body.doc{background:#fff}
#dk{--g:clamp(18px,6.5vw,88px);--ink:#141416;--ink2:#4A4A4F;--mut:#8A8A8E;--faint:#C7C7CB;--hair:#ECECEA;--card:#FBFBF8;--amber:#D9A065;--sig:#CC2A53;
  --mono:var(--bg-mono,'JetBrains Mono',ui-monospace,monospace);font-family:var(--bg-font,'Be Vietnam Pro',system-ui,sans-serif);color:var(--ink);
  padding-top:var(--bg-bar,0px);-webkit-font-smoothing:antialiased;font-variant-numeric:tabular-nums}
#dk .w{max-width:1440px;margin:0 auto;padding:0 var(--g);box-sizing:border-box}
#dk .mono{font:400 11px/1.65 var(--mono);letter-spacing:.16em;text-transform:uppercase;color:#9A9A9E}
.dk-meta{display:flex;justify-content:space-between;gap:24px;padding-top:clamp(20px,3vw,40px)}
.dk-meta .r{text-align:right}
.dk-head{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(28px,5vw,80px);padding:clamp(22px,3vw,36px) 0 clamp(8px,1.5vw,18px)}
.dk-h1{margin:0;font-weight:600;font-size:clamp(38px,6.4vw,84px);line-height:1;letter-spacing:-.048em;text-wrap:balance}
.dk-leg{display:flex;flex-wrap:wrap;gap:8px 18px;margin-top:clamp(16px,2vw,26px)}
.dk-leg span{display:inline-flex;align-items:center;gap:8px}.dk-leg span:before{content:'';width:9px;height:9px;border-radius:50%;background:var(--c,#DADADC)}
.dk-say .k{margin-bottom:8px}.dk-say h2{margin:0 0 10px;font-weight:600;font-size:clamp(20px,2.1vw,27px);line-height:1.22;letter-spacing:-.022em}
.dk-say .b{margin:0;font-size:clamp(14px,1.2vw,15.5px);line-height:1.62;color:var(--ink2);max-width:58ch}
.dk-say .e{display:inline-block;margin-top:12px;padding:6px 10px;border-radius:7px;background:#F4F4F1;font:500 12.5px/1.5 var(--mono);color:var(--ink)}
.dk-say .e:empty{display:none}
.dk-nav{display:flex;align-items:center;gap:8px;margin-top:16px;flex-wrap:wrap}
.dk-nav button{height:34px;min-width:34px;padding:0 12px;border:1px solid #E2E2E0;border-radius:8px;background:#fff;font:500 13px var(--bg-font,system-ui,sans-serif);color:var(--ink);cursor:pointer}
@media (hover:hover){.dk-nav button:hover{border-color:#C9C9C6}}.dk-nav button.on{background:#20252F;border-color:#20252F;color:#fff}
.dk-nav .n{font:500 12px var(--mono);letter-spacing:.1em;color:var(--mut);padding:0 4px}
.dk-stage{position:relative;max-width:1600px;margin:clamp(6px,1vw,14px) auto 0;overflow:hidden}
.dk-stage>.fd{position:absolute;left:0;right:0;height:min(9%,56px);z-index:3;pointer-events:none}
.dk-stage:fullscreen{background:#fff}.dk-stage:fullscreen>.fd{display:none}
.dk-stage>.fd.t{top:0;background:linear-gradient(#fff,rgba(255,255,255,0))}.dk-stage>.fd.b{bottom:0;background:linear-gradient(rgba(255,255,255,0),#fff)}
body.doc #app{position:relative!important;left:auto;top:auto}
body.doc #gl{touch-action:pan-y}:fullscreen body.doc #gl,body.doc .dk-stage:fullscreen #gl{touch-action:none}
@media (max-width:700px){body.doc .dk-foot{padding-bottom:96px}}
body.doc #app>.ui>[data-r=ov].call{z-index:4}
body.doc .dk-stage .lv-time{display:flex;position:absolute;z-index:5;top:12px;right:12px}
body.doc .mob{display:none!important}
.dk-stats{display:grid;grid-template-columns:repeat(var(--n,4),minmax(0,1fr));border-top:1px solid var(--hair);border-bottom:1px solid var(--hair);margin-top:4px}
.dk-stats>div{padding:16px 16px 14px;border-left:1px solid var(--hair);min-width:0}.dk-stats>div:first-child{border-left:0;padding-left:0}
.dk-stats .sv{font-family:var(--sans,inherit);font-weight:500;font-size:clamp(22px,2.4vw,30px);line-height:1.1;letter-spacing:-.025em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dk-stats .sv small{font-size:.42em;font-weight:500;color:var(--mut);letter-spacing:0;margin-left:4px}
.dk-stats .l{margin-top:6px;display:flex;align-items:center;gap:7px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dk-stats .l:before{content:'';flex:none;width:6px;height:6px;border-radius:50%;background:#A7A7AB}.dk-stats .on .l{color:var(--ink)}.dk-stats .on .l:before{background:var(--sig)}
.dk-stats .bar{height:2px;margin-top:9px;border-radius:2px;background:var(--amber);width:22px;opacity:.75;transition:width .4s}.dk-stats .on .bar{opacity:1}
.dk-tools{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:20px 0 4px}
.dk-tools .seg{display:inline-flex;flex-wrap:wrap;gap:2px;padding:3px;border:1px solid #E6E6E3;border-radius:10px;background:#fff}
body.doc #dk .bt{position:static!important;width:auto!important;height:34px;padding:0 13px;border:1px solid #E2E2E0;border-radius:8px;background:#fff;font:500 13px var(--bg-font,system-ui,sans-serif)!important;color:var(--ink);transition:background .15s,border-color .15s}
body.doc #dk .seg .bt{border-color:transparent;height:30px;border-radius:7px}
@media (hover:hover){body.doc #dk .bt:hover{border-color:#C9C9C6;filter:none}}body.doc #dk .bt.on{background:#20252F;border-color:#20252F;color:#fff}
body.doc #dk .bt.flash{box-shadow:0 0 0 3px rgba(204,42,83,.22)}
.dk-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding:16px 0 0;align-items:start}
.dk-card{position:relative;background:var(--card);border:1px solid var(--hair);border-radius:14px;overflow:hidden}
.dk-card .in{position:absolute;left:0;top:0;transform-origin:0 0}
body.doc .dk-card .cp{background:transparent!important;box-shadow:none!important;border:0!important}
#dk .dk-card .ph{font:400 10.5px var(--mono)!important;letter-spacing:.07em;max-width:calc(100% - 52px);overflow:hidden;text-overflow:ellipsis;display:block!important;text-transform:uppercase;color:#6E6E72}
#dk .dk-card .ph i{display:none}#dk .dk-card .pn{font:400 11px var(--mono);letter-spacing:.1em;color:#A7A7AB}
.dk-steps{list-style:none;margin:0;padding:clamp(32px,4vw,52px) 0 8px;display:grid;grid-auto-flow:column;grid-template-rows:repeat(var(--r4),auto);grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(18px,2vw,26px) clamp(20px,2.4vw,34px)}
.dk-steps li{display:grid;grid-template-columns:30px minmax(0,1fr);cursor:pointer}
.dk-steps .n{font:400 11.5px/1.9 var(--mono);color:#C2C2C6}
.dk-steps .t{font-size:16px;line-height:1.35;font-weight:500;letter-spacing:-.01em;color:#B9B9BD;transition:color .2s}
.dk-steps .d{margin-top:4px;font-size:13px;line-height:1.5;color:#CDCDD0;transition:color .2s}
@media (hover:hover){.dk-steps li:hover .t{color:#6E6E72}}.dk-steps li.on .n{color:var(--sig)}.dk-steps li.on .t{color:var(--ink)}.dk-steps li.on .d{color:var(--ink2)}
.dk-foot{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;padding:clamp(20px,3vw,32px) 0 clamp(28px,4vw,56px)}
.dk-foot .r{color:#3A3A3E}
@media (max-width:1100px){.dk-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.dk-steps{grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(var(--r3),auto)}}
@media (max-width:900px){.dk-head{grid-template-columns:1fr}.dk-steps{grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(var(--r2),auto)}}
@media (max-width:640px){.dk-saym .dk-say{padding-top:18px}.dk-grid{grid-template-columns:1fr}.dk-steps{grid-template-columns:1fr;grid-auto-flow:row;grid-template-rows:none}.dk-meta .r{display:none}
  .dk-stats{grid-template-columns:repeat(2,minmax(0,1fr))}.dk-stats>div:nth-child(odd){border-left:0;padding-left:0}.dk-stats>div:nth-child(n+3){border-top:1px solid var(--hair)}}
html[data-chieu] #dk .dk-say .b{font-size:19px;color:#000}html[data-chieu] #dk .dk-say h2{font-size:30px}
`;

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
// số và đơn vị: "850 mm" → 850 cỡ lớn, mm cỡ nhỏ như dải chỉ số của video
const so = (v) => { const m = String(v ?? '').match(/^([±+\-−~≈<>]?[\d.,]+(?:[–-][\d.,]+)?)\s+(\S.{0,12})$/); return m ? `${esc(m[1])}<small>${esc(m[2])}</small>` : esc(v); };
const txt = (h) => String(h ?? '').replace(/<[^>]+>/g, '');
const tom = (h, n = 110) => { const t = txt(h).trim(); const i = t.search(/[.;:](\s|$)/); const a = i > 30 && i < n ? t.slice(0, i + 1) : t; return a.length > n ? a.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : a; };

export function makeDoc({ui, app, captions, W = 1600, H = 900, onStep, onTour}) {
  const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
  document.body.classList.add('doc'); document.body.classList.remove('cmp', 'full');
  const m = ui.meta || {title: document.title, kicker: '', sub: '', right: [], code: ''};
  const dk = document.createElement('div'); dk.id = 'dk';
  const legend = String(m.sub || '').split(/\s*·\s*/).filter(Boolean);
  dk.innerHTML = `
  <div class="w"><div class="dk-meta"><div class="mono">${esc(m.code)}<br>${esc(sc(m.kicker))}</div><div class="mono r">Bài 3D chạy trực tiếp<br>${captions.length} bước</div></div>
  <div class="dk-head"><div><h1 class="dk-h1">${m.title}</h1><div class="dk-leg mono">${legend.map((x) => `<span>${esc(sc(x))}</span>`).join('')}</div></div>
    <div class="dk-say"><div class="k mono"></div><h2></h2><p class="b"></p><div class="e"></div>
      <div class="dk-nav"><button data-a="prev" aria-label="Bước trước">‹</button><span class="n"></span><button data-a="next" aria-label="Bước sau">›</button><button data-a="tour"></button><button data-a="full">Toàn màn hình</button></div></div></div></div>
  <div class="dk-stage"><i class="fd t"></i><i class="fd b"></i></div>
  <div class="w dk-saym"></div>
  <div class="w"><div class="dk-stats"></div><div class="dk-tools"></div><div class="dk-grid"></div>
    <ol class="dk-steps" style="--r4:${Math.ceil(captions.length / 4)};--r3:${Math.ceil(captions.length / 3)};--r2:${Math.ceil(captions.length / 2)}">${captions.map((c, i) => `<li data-i="${i}"><span class="n">${String(i + 1).padStart(2, '0')}</span><div><div class="t">${esc(c.t)}</div><div class="d">${esc(tom(c.b))}</div></div></li>`).join('')}</ol>
    <div class="dk-foot"><span class="mono">${esc(sc(m.kicker).split('·').slice(0, 2).join('·').trim())}</span><span class="mono r"></span></div></div>`;
  document.body.appendChild(dk);
  const $ = (s) => dk.querySelector(s);
  const stage = $('.dk-stage');
  stage.appendChild(app);
  const lv = document.querySelector('.lv-time'); if (lv) stage.appendChild(lv);

  // đo vị trí mọi phần tử trên khung 1600 × 900 (chưa co)
  app.style.transform = 'none';
  const R0 = ui.root.getBoundingClientRect();
  const rectOf = (n) => { const r = n.getBoundingClientRect(); return {x: r.left - R0.left, y: r.top - R0.top, w: r.width, h: r.height}; };
  const kids = [...ui.root.children];
  const btns = new Set(Object.values(ui.btn));
  const isOv = (n) => n.dataset.r === 'ov' || n.classList.contains('tourchip') || n.classList.contains('hit');
  const panels = [], rest = [];
  for (const n of kids) {
    // đầu bảng, lời giảng và dải tên các bước (div chứa [data-b]) đã có bản riêng trong trang dọc (dk-head, dk-say, dk-steps)
    if (n.dataset.r === 'hd' || n.dataset.r === 'cap' || n.querySelector?.(':scope>[data-b]')) { n.remove(); continue; }
    if (isOv(n) || btns.has(n)) continue;
    if (n.classList.contains('cp')) panels.push({n, x: n.offsetLeft, y: n.offsetTop, w: n.offsetWidth, h: n.offsetHeight, items: []});
    else rest.push(n);
  }
  // khung bảng có thể nhỏ hơn nội dung (ở cảnh, phần tràn vẫn hiện): nới theo phần tử con
  const grow = (p) => { const w0 = p.w, h0 = p.h; for (const n of p.items) { const r = rectOf(n); if (!r.w && !r.h) continue; p.w = Math.max(p.w, r.x + r.w - p.x + 10); p.h = Math.max(p.h, r.y + r.h - p.y + 12); } p.w = Math.min(p.w, w0 * 1.3); p.h = Math.min(p.h, h0 * 1.6); };
  const free = [];
  for (const n of rest) {
    const r = rectOf(n), cx = r.x + r.w / 2, cy = r.y + Math.min(r.h, 40) / 2;
    const p = panels.find((q) => cx >= q.x - 2 && cx <= q.x + q.w + 2 && cy >= q.y - 2 && cy <= q.y + q.h + 2);
    if (p) p.items.push(n); else if (r.w > 0 || r.h > 0) free.push({n, r}); else n.remove();
  }
  // phần tử nằm ngoài khung: gom theo dải dọc thành thẻ
  free.sort((a, b) => a.r.y - b.r.y);
  const groups = [];
  for (const f of free) {
    const g = groups.at(-1);
    if (g && f.r.y < g.y + g.h + 70) { const x1 = Math.min(g.x, f.r.x), y1 = Math.min(g.y, f.r.y), x2 = Math.max(g.x + g.w, f.r.x + f.r.w), y2 = Math.max(g.y + g.h, f.r.y + f.r.h); Object.assign(g, {x: x1, y: y1, w: x2 - x1, h: y2 - y1}); g.items.push(f.n); }
    else groups.push({x: f.r.x, y: f.r.y, w: f.r.w, h: f.r.h, items: [f.n]});
  }
  panels.forEach(grow);
  // nhãn lẻ (tên nhóm nút đã dời xuống hàng công cụ) không thành thẻ
  for (let i = groups.length - 1; i >= 0; i--) { const g = groups[i]; if (g.w < 170 && g.h < 48) { g.items.forEach((n) => n.remove()); groups.splice(i, 1); } }
  for (const g of groups) { g.x -= 16; g.y -= 14; g.w += 32; g.h += 28; g.free = true; }
  const grid = $('.dk-grid'), cards = [];
  for (const p of [...panels, ...groups].sort((a, b) => (a.free - b.free) || (a.x - b.x) || (a.y - b.y))) {
    const card = document.createElement('div'); card.className = 'dk-card' + (p.free ? ' free' : '');
    const inn = document.createElement('div'); inn.className = 'in ui'; Object.assign(inn.style, {width: `${p.w}px`, height: `${p.h}px`, pointerEvents: 'none'});
    for (const n of [p.n, ...p.items].filter(Boolean)) {
      const r = n === p.n ? {x: p.x, y: p.y} : rectOf(n);
      // phần tử neo bằng right: giữ neo phải, tính lại theo mép phải của bảng
      if (n.style.right) { n.style.right = `${p.x + p.w - (r.x + r.w)}px`; }
      else if (n.style.left || n.tagName === 'svg') n.style.left = `${parseFloat(n.style.left || r.x) - p.x}px`;
      if (n.style.top || n.tagName === 'svg') n.style.top = `${parseFloat(n.style.top || r.y) - p.y}px`;
      inn.appendChild(n);
    }
    card.appendChild(inn); grid.appendChild(card);
    cards.push({card, inn, x: p.x, y: p.y, w: p.w, h: p.h, w0: p.w, h0: p.h, s: 1});
  }
  // nút: góc nhìn thành nhóm phân đoạn, còn lại thành hàng chip
  const tools = $('.dk-tools'), seg = document.createElement('div'); seg.className = 'seg';
  for (const [k, b] of Object.entries(ui.btn)) { if (k.startsWith('v_')) seg.appendChild(b); }
  if (seg.children.length) tools.appendChild(seg);
  for (const [k, b] of Object.entries(ui.btn)) { if (!k.startsWith('v_') && !cards.some((c) => c.inn.contains(b))) tools.appendChild(b); }
  // dải chỉ số: số liệu chính của đầu bảng và tiến độ bài
  const stats = $('.dk-stats'), right = m.right || [];
  stats.style.setProperty('--n', right.length + 1);
  stats.innerHTML = right.map(([v, l]) => `<div><div class="sv">${so(v)}</div><div class="l mono">${esc(sc(l))}</div><div class="bar"></div></div>`).join('')
    + `<div class="on" data-s><div class="sv">01<small>/ ${String(captions.length).padStart(2, '0')}</small></div><div class="l mono">Bước đang giảng</div><div class="bar"></div></div>`;
  app.style.transform = '';

  // co giãn
  let scale = 1;
  const fit = () => {
    if (document.fullscreenElement === stage) {
      scale = Math.min(innerWidth / W, innerHeight / H); ui.view = {x0: 0, x1: W};
      app.style.transform = `translate(${(innerWidth - W * scale) / 2}px, ${(innerHeight - H * scale) / 2}px) scale(${scale})`;
    } else {
      // điện thoại dọc: khung cao hơn (gần 4:3), cắt bớt hai mép trống của cảnh 16:9
      const w = stage.clientWidth || innerWidth, h = Math.round(w * (w < 700 ? 0.8 : H / W));
      scale = Math.max(w / W, h / H);
      const tx = (w - W * scale) / 2; ui.view = {x0: -tx / scale, x1: (w - tx) / scale};
      app.style.transform = `translate(${(w - W * scale) / 2}px, ${(h - H * scale) / 2}px) scale(${scale})`; stage.style.height = `${h}px`;
    }
    const hideCalls = scale < 0.5; ui.root.querySelectorAll('.call,.tourchip').forEach((n) => { n.style.visibility = hideCalls ? 'hidden' : ''; });
    ui.root.querySelectorAll('[data-r=ov]').forEach((n) => { if (n.tagName === 'svg') n.style.visibility = hideCalls ? 'hidden' : ''; });
    for (const c of cards) place(c);
    // điện thoại: lời giảng đứng ngay dưới cảnh để vừa xem vừa đọc
    const say = $('.dk-say'), want = innerWidth < 700 ? $('.dk-saym') : $('.dk-head');
    if (say.parentNode !== want) want.appendChild(say);
    return scale;
  };
  const place = (c) => { c.s = c.card.clientWidth / c.w; c.inn.style.transform = `scale(${c.s})`; c.card.style.height = `${c.h * c.s}px`; };
  // chữ trong bảng do draw() điền sau: đo lại phần nội dung, nới thẻ khi chữ dài ra
  const refit = () => {
    for (const c of cards) {
      if (!c.s) continue;
      const R = c.inn.getBoundingClientRect(); let mx = 0, my = 0;
      for (const n of c.inn.children) { const r = n.getBoundingClientRect(); if (!r.width && !r.height) continue; mx = Math.max(mx, (r.right - R.left) / c.s); my = Math.max(my, (r.bottom - R.top) / c.s); }
      const w = Math.min(Math.max(c.w0, Math.ceil(mx + 12)), c.w0 * 1.35), h = Math.min(Math.max(c.h0, Math.ceil(my + 14)), c.h0 * 1.8);
      if (Math.abs(w - c.w) > 1 || Math.abs(h - c.h) > 1) { c.w = w; c.h = h; c.inn.style.width = `${w}px`; c.inn.style.height = `${h}px`; place(c); }
    }
  };
  setTimeout(refit, 60); setInterval(refit, 1500);
  // bước
  const steps = [...dk.querySelectorAll('.dk-steps li')];
  let cur = -1;
  const show = (c, i) => {
    if (!c) return; cur = i;
    $('.dk-say .k').textContent = sc(c.k || ''); $('.dk-say h2').textContent = c.t; $('.dk-say .b').innerHTML = c.b; $('.dk-say .e').textContent = c.e || '';
    $('.dk-nav .n').textContent = `${String(i + 1).padStart(2, '0')} / ${String(captions.length).padStart(2, '0')}`;
    steps.forEach((li, j) => li.classList.toggle('on', j === i));
    const s = stats.querySelector('[data-s]'); s.querySelector('.sv').innerHTML = `${String(i + 1).padStart(2, '0')}<small>/ ${String(captions.length).padStart(2, '0')}</small>`;
    s.querySelector('.bar').style.width = `${((i + 1) / captions.length) * 100}%`;
    $('.dk-foot .r').textContent = txt(c.e || c.k || '');
  };
  const tourBtn = $('[data-a=tour]');
  const setTour = (on) => { tourBtn.textContent = on ? 'Dừng tự chạy' : 'Tự chạy'; tourBtn.classList.toggle('on', !on); };
  dk.addEventListener('click', (e) => {
    const li = e.target.closest('.dk-steps li'); if (li) { onStep(+li.dataset.i); return; }
    const a = e.target.closest('.dk-nav button')?.dataset.a; if (!a) return;
    if (a === 'prev') onStep(Math.max(0, cur - 1)); else if (a === 'next') onStep(Math.min(captions.length - 1, cur + 1));
    else if (a === 'tour') onTour(); else if (a === 'full') (stage.requestFullscreen || stage.webkitRequestFullscreen)?.call(stage);
  });
  const hostOf = (s) => { const c = cards.find((q) => s.x >= q.x && s.x <= q.x + q.w && s.y >= q.y && s.y <= q.y + q.h); return c ? {el: c.inn, ox: c.x, oy: c.y, s: () => c.s} : null; };
  const flash = (k) => { const b = ui.btn[k]; if (!b) return; b.classList.add('flash'); setTimeout(() => b.classList.remove('flash'), 650); };
  document.addEventListener('fullscreenchange', () => dispatchEvent(new Event('resize')));
  if (window.ResizeObserver) new ResizeObserver(() => dispatchEvent(new Event('resize'))).observe(stage);
  show(captions[0], 0);
  return {fit, show, hostOf, flash, setTour, stage, get scale() { return scale; }};
}
