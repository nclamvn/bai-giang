#!/usr/bin/env python3
"""kiem_bo_cuc.py · đo bố cục thật trong trình duyệt ở năm bề rộng (docs/mot-he-ba-co-man-hinh.md).

  python3 tests/kiem_bo_cuc.py [cổng]           đo, in bảng; có lỗi ở luật cổng thì thoát mã 1
  python3 tests/kiem_bo_cuc.py [cổng] --bao     chỉ báo cáo (in mọi lỗi, luôn thoát 0)
  python3 tests/kiem_bo_cuc.py [cổng] --trang home,hub-tkm   chỉ đo vài trang

Cần máy chủ tĩnh ở gốc kho (python3 -m http.server 8777). Năm bề rộng: 320, 390 (điện thoại), 768 (tablet dọc), 1024 (tablet ngang), 1440 (máy bàn).

LUẬT (đo trên phần tử đang hiện, sau khi trang ổn định):
  R1  không tràn ngang: trang không cuộn ngang được
  R2  vùng chạm: trên màn chạm (bề rộng dưới 1100), nút, chip, tab và liên kết dạng khối cao và rộng ít nhất 44 px;
      liên kết dạng chữ (display: inline, nằm trong dòng văn bản) được miễn
  R2k (chỉ báo cáo) như R2 nhưng cho nút của bảng bài kit: nút trên cảnh ở chế độ lên lớp và nút làm nhãn hàng trong thẻ (.bt.gi),
      vẽ theo đơn vị thiết kế nên không tới 44 px trên màn hẹp
  R3  chữ không nhỏ hơn 12 px sau khi tính cả phép co (transform); chỉ số trên và chỉ số dưới (sup, sub) được miễn
  R3k (chỉ báo cáo) như R3 nhưng cho chữ trong bảng của bài kit, vốn vẽ theo đơn vị thiết kế 1600 × 900 rồi co theo thẻ:
      trên điện thoại hẹp chữ ghi chú còn dưới 12 px; muốn hết phải sửa từng bài
  R4  chữ không bị cắt: chữ tràn khỏi khung ẩn phần tràn phải có dấu ba chấm thật (text-overflow không có tác dụng trên khung flex, grid)
  R5  các phần tử bấm được không đè lên nhau (điểm đánh dấu trên cảnh 3D được miễn: chúng chồng nhau theo góc nhìn)
  R6  tương phản chữ đạt AA (4,5 với chữ thường, 3 với chữ từ 24 px hoặc 18,66 px đậm), chỉ tính trên nền đặc xác định được
  R7  trong thẻ của bài kit, núm thanh trượt nằm trên thanh và trong thẻ

Trang đo: mọi trang tĩnh (trang chủ, trang mục, gói dạy, giáo án, thư viện, trang mẫu), mỗi họ bài một đại diện, và giao diện bên trong
của các bài riêng (Tế Bào, Ty Thể, Cổ Loa, Neuron, một bài thư viện, bài kit ở chế độ lên lớp, Cơ thể người, trang điều khiển).
Bài 3D chỉ đo phần giao diện DOM; chữ vẽ trong canvas không đo được. Bản xem trước phiếu A4 (.sheet-zoom) là ảnh thu nhỏ của bản in, không đo.
Phần tử đang khoá (disabled, aria-disabled) không đo: chuẩn tương phản và vùng chạm không áp cho điều khiển không dùng được.
"""
import asyncio, json, sys
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parent.parent
RONG = [(320, 640), (390, 844), (768, 1024), (1024, 768), (1440, 900)]
# (tên, đường dẫn, họ). Họ 'tinh': trang tĩnh. Họ 'bai': bài 3D, chờ lâu hơn. Họ 'trong': giao diện bên trong bài, đo ở ba bề rộng (thêm --du để đo đủ năm).
TRANG = [
    ('home', '', 'tinh'), ('hub-tkm', 'thiet-ke-mang/', 'tinh'), ('hub-robo', 'robotics/', 'tinh'), ('hub-ls10', 'lich-su-10/', 'tinh'),
    ('chu-de', 'chu-de/sinh-hoc-te-bao/', 'tinh'), ('giao-vien', 'giao-vien/', 'tinh'), ('goi-day', 'giao-vien/te-bao/', 'tinh'),
    ('giao-an', 'thiet-ke-mang/goi-tin/giao-an/', 'tinh'), ('thu-vien', 'thu-vien/', 'tinh'), ('kiem-may', 'kiem-may/', 'tinh'), ('mau', 'design/mau/', 'tinh'),
    ('bai-kit', 'thiet-ke-mang/goi-tin/', 'bai'), ('bai-kit-nut', 'robotics/jellyfish/', 'bai'), ('bai-khung', 'thu-vien/impulse-step.html', 'bai'), ('riemann', 'toan/riemann/', 'bai'),
    # giao diện bên trong bài (mở thẳng, không qua khung): vỏ bài và bảng điều khiển riêng của từng bài
    ('te-bao', 'te-bao/?doc=0', 'trong'), ('ty-the', 'ty-the/?doc=0', 'trong'), ('co-loa', 'lich-su-10/co-loa/?doc=0', 'trong'), ('neuron', 'than-kinh/?doc=0', 'trong'),
    ('thu-vien-bai', 'thu-vien/impulse-step.html?doc=0', 'trong'), ('kit-len-lop', 'thiet-ke-mang/goi-tin/?doc=0', 'trong'), ('co-the', 'co-the-nguoi/', 'trong'), ('dieu-khien', 'dieu-khien/', 'tinh'),
]
BO_TRONG = (320, 1024)   # họ 'trong' (giao diện bên trong bài) chỉ đo ở 390, 768, 1440 để CI không dài thêm quá
CONG = ('R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7')   # luật làm cổng; luật ngoài danh sách chỉ báo cáo

JS = r"""
([touch, W]) => {
  const vw = W, out = {R1: [], R2: [], R2k: [], R3: [], R3k: [], R4: [], R5: [], R6: [], R7: []};
  const ten = (e) => { const cha = e.parentElement; let s = (cha && cha !== document.body ? (cha.tagName.toLowerCase() + (typeof cha.className === 'string' && cha.className.trim() ? '.' + cha.className.trim().split(/\s+/)[0] : '') + ' > ') : '') + e.tagName.toLowerCase(); if (e.id) s += '#' + e.id; else if (typeof e.className === 'string' && e.className.trim()) s += '.' + e.className.trim().split(/\s+/).slice(0, 2).join('.'); const t = (e.innerText || e.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 26); return s + (t ? ' "' + t + '"' : ''); };
  const hien = (e) => { if (!e.getClientRects().length) return false; const c = getComputedStyle(e); if (c.visibility === 'hidden' || c.display === 'none' || +c.opacity === 0) return false; const r = e.getBoundingClientRect(); if (r.width < 1 || r.height < 1) return false;
    for (let p = e.parentElement; p; p = p.parentElement) { const pc = getComputedStyle(p); if (+pc.opacity === 0 || pc.visibility === 'hidden') return false; if (p.tagName === 'DETAILS' && !p.open && !e.closest('summary')) return false; } return true; };
  // phần tử nằm ngoài khung cuộn của tổ tiên (bị cắt hẳn) thì coi như không hiện
  const trong_khung = (e) => { const r = e.getBoundingClientRect(); for (let p = e.parentElement; p && p !== document.body; p = p.parentElement) { const c = getComputedStyle(p); if (/(hidden|clip|auto|scroll)/.test(c.overflowX + c.overflowY)) { const q = p.getBoundingClientRect(); if (r.right <= q.left + 1 || r.left >= q.right - 1 || r.bottom <= q.top + 1 || r.top >= q.bottom - 1) return false; } } return true; };
  const all = [...document.querySelectorAll('body *')].filter((e) => !e.closest('svg,canvas,[aria-hidden=true],.bg-skip,.skip,noscript,script,style,template,.sheet-zoom') && !e.closest('[aria-disabled=true],:disabled') && hien(e) && trong_khung(e));
  // R1
  const sw = document.documentElement.scrollWidth;
  if (sw > vw + 1) { const tr = all.filter((e) => { const r = e.getBoundingClientRect(); return r.right > vw + 1 && r.width < vw * 1.5 && getComputedStyle(e).position !== 'fixed'; }).sort((a, b) => b.getBoundingClientRect().right - a.getBoundingClientRect().right).slice(0, 2); out.R1.push('trang rộng ' + sw + ' px trên khung ' + vw + ': ' + tr.map(ten).join(' | ')); }
  // phần tử bấm được
  const bam = all.filter((e) => e.matches('a[href],button,input:not([type=hidden]),select,textarea,summary,[role=button],[role=tab]') && !e.disabled);
  const trong_cau = (e) => { if (e.tagName !== 'A') return false; const d = getComputedStyle(e).display; if (d === 'inline') return true;
    // dấu chú thích kiểu inline-block nằm giữa câu văn cũng là liên kết dạng chữ
    return d === 'inline-block' && [...e.parentElement.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 3); };
  if (touch) for (const e of bam) { if (trong_cau(e)) continue; const r = e.getBoundingClientRect(); if (r.width < 43.5 || r.height < 43.5) {
      // nhãn bọc ô chọn, hoặc phần tử cha là vùng bấm thật đủ lớn thì tính theo cha
      const cha = e.closest('label') || (e.parentElement && e.parentElement.matches('a,button,label,summary') ? e.parentElement : null); const q = cha ? cha.getBoundingClientRect() : null;
      // nút của bảng bài kit vẽ theo đơn vị thiết kế (nút trên cảnh ở chế độ lên lớp, nút làm nhãn hàng trong thẻ): chỉ báo cáo, như R3k
      if (!(q && q.width >= 43.5 && q.height >= 43.5)) out[e.matches('#app .bt,.bt.gi') ? 'R2k' : 'R2'].push(ten(e) + ' ' + Math.round(r.width) + '×' + Math.round(r.height)); } }
  // chữ: phần tử có nút văn bản trực tiếp
  const co_chu = all.filter((e) => [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 1));
  const he_so = (e) => { const r = e.getBoundingClientRect(); return e.offsetWidth ? r.width / e.offsetWidth : 1; };
  const mau = (s) => { const m = s.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(/[,\s\/]+/).filter(Boolean).map(Number); return {r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1}; };
  const sang = (c) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b); };
  const nen = (e) => { let lop = []; for (let p = e; p; p = p.parentElement) { const c = getComputedStyle(p); if (c.backgroundImage && c.backgroundImage !== 'none') return null; if (+c.opacity < 1 && p !== e) return null; const m = mau(c.backgroundColor); if (m && m.a > 0) { lop.push(m); if (m.a >= 0.999) break; } if (p.tagName === 'BODY' || p.tagName === 'HTML') { if (!lop.length || lop[lop.length - 1].a < 0.999) lop.push({r: 255, g: 255, b: 255, a: 1}); break; } if (/(fixed|absolute|sticky)/.test(c.position) && !(m && m.a >= 0.999)) return null; }
    let o = lop.pop(); while (lop.length) { const t = lop.pop(); o = {r: t.r * t.a + o.r * (1 - t.a), g: t.g * t.a + o.g * (1 - t.a), b: t.b * t.a + o.b * (1 - t.a), a: 1}; } return o; };
  for (const e of co_chu) { const c = getComputedStyle(e), fs = parseFloat(c.fontSize), th = fs * he_so(e);
    { const q = e.getBoundingClientRect(); if (q.width <= 2 || q.height <= 2 || c.clip !== 'auto' || c.clipPath !== 'none') continue; }  // phần chỉ dành cho trình đọc màn hình
    if (th < 11.5 && e.tagName !== 'SUB' && e.tagName !== 'SUP') (e.closest('.dk-card .in,#app,.ui') ? out.R3k : out.R3).push(ten(e) + ' ' + th.toFixed(1) + ' px');
    { const r = e.getBoundingClientRect(); let cat = 0, cham = false;
      if (/(hidden|clip)/.test(c.overflowX) && e.scrollWidth > e.clientWidth + 1) { cat = e.scrollWidth - e.clientWidth; cham = c.textOverflow === 'ellipsis' && !/flex|grid/.test(c.display); }
      else for (let p = e.parentElement, i = 0; p && i < 4; p = p.parentElement, i++) { const pc = getComputedStyle(p); if (/(hidden|clip)/.test(pc.overflowX)) { const q = p.getBoundingClientRect(); const d = Math.max(r.right - q.right, q.left - r.left); if (d > 2) { cat = Math.round(d); cham = pc.textOverflow === 'ellipsis' && !/flex|grid/.test(pc.display) && getComputedStyle(e).display === 'inline'; } break; } if (/(auto|scroll)/.test(pc.overflowX)) break; }
      if (cat && !cham) out.R4.push(ten(e) + ' cắt ' + cat + ' px'); }
    const bg = nen(e), fg = mau(c.color);
    if (bg && fg && fg.a >= 0.999 && !c.backgroundClip.includes('text') && c.webkitTextFillColor !== 'transparent') { const a = sang(fg), b = sang(bg), ti = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05); const lon = fs >= 24 || (fs >= 18.66 && +c.fontWeight >= 700);
      if (ti < (lon ? 3 : 4.5) - 0.01) out.R6.push(ten(e) + ' ' + ti.toFixed(2) + ':1 (' + c.color.replace(/\s/g, '') + ' trên rgb(' + Math.round(bg.r) + ',' + Math.round(bg.g) + ',' + Math.round(bg.b) + '))'); } }
  // R5: hai phần tử bấm được chồng lên nhau (không phải cha con)
  const rs = bam.map((e) => [e, e.getBoundingClientRect()]);
  for (let i = 0; i < rs.length; i++) for (let j = i + 1; j < rs.length; j++) { const [a, ra] = rs[i], [b, rb] = rs[j]; if (a.contains(b) || b.contains(a)) continue;
    const w = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left), h = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
    if (a.getClientRects().length > 1 || b.getClientRects().length > 1) continue;
    if (a.matches('.pin,[class*=marker],.hs') && b.matches('.pin,[class*=marker],.hs')) continue;  // điểm đánh dấu trên cảnh 3D: chồng nhau theo góc nhìn, không phải lỗi bố cục  // liên kết trong dòng bị ngắt: khung bao không phải vùng bấm thật
    if (w > 4 && h > 4 && w * h > 0.25 * Math.min(ra.width * ra.height, rb.width * rb.height)) { const fa = getComputedStyle(a).position === 'fixed' || a.closest('[style*="position:fixed"],.bgs,.top,header'), fb = getComputedStyle(b).position === 'fixed' || b.closest('[style*="position:fixed"],.bgs,.top,header'); if (!!fa !== !!fb) continue; out.R5.push(ten(a) + ' ⨯ ' + ten(b)); } }
  // R7: núm của thanh trượt trong thẻ bài kit phải nằm trên thanh (vùng bấm .hit) và trong thẻ
  for (const h of document.querySelectorAll('.dk-card .hit')) { const hr = h.getBoundingClientRect(), card = h.closest('.dk-card'), cr = card.getBoundingClientRect();
    const num = [...card.querySelectorAll('.in div')].filter((e) => e.style.borderRadius === '50%' && e.style.width === '12px').map((e) => e.getBoundingClientRect()).filter((r) => Math.abs((r.top + r.height / 2) - (hr.top + hr.height / 2)) < 8 * (hr.height / 22));
    if (num.length !== 1 || num[0].left + num[0].width / 2 < hr.left - 3 || num[0].left + num[0].width / 2 > hr.right + 3 || num[0].right > cr.right + 2) out.R7.push('thẻ "' + (card.innerText || '').trim().slice(0, 22) + '": núm lệch khỏi thanh'); }
  return out;
}
"""


# Trang mẫu phạm đúng bảy luật, để chứng minh mỗi luật cắn trước khi tin kết quả "đạt".
THU = """<!doctype html><html lang="vi"><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>
body{margin:0;background:#fff;color:#141416;font:16px/1.5 sans-serif}.r1{width:520px;height:10px}.r2{display:inline-flex;height:28px;padding:0 6px}
.r3{font-size:10px}.r4{width:60px;white-space:nowrap;overflow:hidden}.r5{position:relative;height:60px}.r5 button{position:absolute;left:0;top:0;width:120px;height:48px}
.r6{color:#BDBDC1}.tot{display:inline-flex;align-items:center;min-height:44px;min-width:44px;font-size:16px}</style></head><body>
<div class="r1"></div><button class="r2">nhỏ</button><p class="r3">chữ mười điểm ảnh</p><div class="r4">nhãn dài bị cắt mất phần sau</div>
<div class="r5"><button>một</button><button>hai</button></div><p class="r6">chữ xám nhạt trên nền trắng</p><a class="tot" href="#">liên kết đạt</a>
<div class="dk-card" style="position:relative;width:340px;height:30px"><div class="in"><div class="hit" style="position:absolute;left:0;top:0;width:100px;height:22px"></div><div style="position:absolute;left:300px;top:5px;width:12px;height:12px;border-radius:50%"></div></div></div></body></html>"""


async def tu_thu(b):
    ctx = await b.new_context(viewport={'width': 390, 'height': 844}, has_touch=True, is_mobile=True)
    pg = await ctx.new_page(); await pg.set_content(THU); r = await pg.evaluate(JS, [True, 390]); await ctx.close()
    sai = [k for k in ('R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7') if not r[k]]
    if any('liên kết đạt' in x for v in r.values() for x in v): sai.append('báo nhầm phần tử đạt')
    if sai: sys.exit('kiểm bố cục: phép đo hỏng, các luật không cắn trên trang mẫu lỗi: ' + ', '.join(sai))


async def main():
    a = [x for x in sys.argv[1:] if not x.startswith('--')]
    cong = a[0] if a else '8777'
    bao = '--bao' in sys.argv
    chon = sys.argv[sys.argv.index('--trang') + 1].split(',') if '--trang' in sys.argv else None
    if chon: a = [x for x in a if x != sys.argv[sys.argv.index('--trang') + 1]]; cong = a[0] if a else '8777'
    trang = [t for t in TRANG if (not chon or t[0] in chon) and (ROOT / t[1].split('?')[0]).exists()]
    kq, tong = {}, {r: 0 for r in ('R1', 'R2', 'R2k', 'R3', 'R3k', 'R4', 'R5', 'R6', 'R7')}
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'])
        await tu_thu(b)
        for w, h in RONG:
            ctx = await b.new_context(viewport={'width': w, 'height': h}, has_touch=w < 1100, is_mobile=w < 1100, reduced_motion='reduce')
            pg = await ctx.new_page()
            for ten, url, ho in trang:
                if ho == 'trong' and w in BO_TRONG and '--du' not in sys.argv: kq[f'{ten}@{w}'] = None; continue
                try:
                    await pg.goto(f'http://localhost:{cong}/{url}', wait_until='domcontentloaded', timeout=40000)
                    if ho != 'tinh':
                        # màn tải (#bgs-load) che cả trang tới khi cảnh sẵn sàng. Đo lúc nó còn đó là đo giao diện dự phòng nằm bên dưới,
                        # thứ người dùng không thấy; máy chậm (CI) thì dính, máy nhanh thì không, nên phải chờ cho tất định.
                        # Bài nạp tệp vỏ (window.BGShell) thì chờ tới khi vỏ gắn xong (body.bgs-on), để luôn đo cùng một trạng thái.
                        try: await pg.wait_for_function("!document.getElementById('bgs-load') && (!window.BGShell || document.body.classList.contains('bgs-on'))", timeout=45000)
                        except Exception: print(f'  chú ý {ten}@{w}: bài chưa tải xong sau 45 giây, vẫn đo', flush=True)
                    await pg.wait_for_timeout(700 if ho == 'tinh' else 2600)
                    try: await pg.evaluate('Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 4000))])')  # đo sau khi phông tự lưu đã về
                    except Exception: pass
                    # trang 3D vẽ bằng phần mềm có thể không kịp ra khung hình: tắt chuyển tiếp để kiểu tính ra là kiểu cuối, không phải điểm đầu của một chuyển tiếp
                    await pg.add_style_tag(content='*,*::before,*::after{transition:none!important}'); await pg.wait_for_timeout(120)
                    r = await pg.evaluate(JS, [w < 1100, w])
                except Exception as e:
                    r = {'LOI': [str(e)[:120]]}
                kq[f'{ten}@{w}'] = r
                for k, v in r.items(): tong[k] = tong.get(k, 0) + len(v)
            await ctx.close()
        await b.close()
    (ROOT / 'tests' / '.kiem_bo_cuc.json').write_text(json.dumps(kq, ensure_ascii=False, indent=1), encoding='utf-8')
    print('trang'.ljust(13) + ''.join(str(w).rjust(22) for w, _ in RONG))
    for ten, _, _ in trang:
        o = ten.ljust(13)
        for w, _ in RONG:
            r = kq[f'{ten}@{w}']; o += ('·' if r is None else ' '.join(f'{k}:{len(v)}' for k, v in r.items() if v) or 'đạt').rjust(22)
        print(o)
    print('tổng: ' + ', '.join(f'{k} {v}' for k, v in tong.items()))
    xau = sum(v for k, v in tong.items() if k in CONG or k == 'LOI')
    if bao or xau:
        for key, r in kq.items():
            for k, v in (r or {}).items():
                if v and (bao or k in CONG or k == 'LOI'):
                    print(f'  {k} {key}: ' + '; '.join(v[:4]) + (f' … (+{len(v) - 4})' if len(v) > 4 else ''))
    if xau and not bao: sys.exit(1)


if __name__ == '__main__':
    asyncio.run(main())
