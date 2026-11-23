#!/usr/bin/env python3
"""Kiểm bài chạy trong vỏ app (app/, docs/app-ke-hoach-moc.md mốc M2).

Mở từng bài của app/danh-muc.json qua app (#/bai/<slug>, khung bgs-canh với ?app=1) ở điện thoại dọc và tablet ngang, đo:
  A1  bài báo trạng thái cho app (lớp chữ của app hiện tên bước) trong 60 giây
  A2  chữ của bài không lặp lời bước app đang hiện (tên bước của app không xuất hiện ở phần đang hiện của bài)
  A3  phần tử có chữ hoặc bấm được của bài không nằm dưới lớp kính của app (thanh trên, nút bảng, cột chữ, lớp chữ dưới)
Cảnh 3D (canvas), nhãn trên cảnh (.lab, .pin, .call, nhãn có aria-hidden), lớp phủ toàn màn và phần bị chính bài che được miễn A3.

  python3 tests/kiem_app.py [cổng]                      mọi bài, hai cỡ màn
  python3 tests/kiem_app.py 8777 --bai than-kinh,co-loa  vài bài
  python3 tests/kiem_app.py 8777 --nhom kit             một nhóm: rieng | kit | thu-vien
  python3 tests/kiem_app.py 8777 --co 390               một cỡ màn (390 hoặc 1180); tablet vẽ bằng phần mềm chậm, mỗi bài vài phút
Cần máy chủ tĩnh ở gốc repo và Playwright. Không phải cổng của CI (90 bài × 2 cỡ màn chạy lâu); chạy trước khi đẩy thay đổi
ở vỏ bài, bộ kit, khuôn thư viện hay vỏ app. Thoát mã 1 nếu có lỗi.
"""
import asyncio, json, re, sys
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parent.parent
CO = [(390, 844), (1180, 820)]
RIENG = {'te-bao', 'ty-the', 'co-loa', 'co-the-nguoi', 'than-kinh'}

# phần lớp kính của app, đo ở trang app
VO = r"""() => { const q = (s) => { const e = document.querySelector(s); if (!e || e.hidden) return null; const c = getComputedStyle(e); if (c.display === 'none') return null;
  const r = e.getBoundingClientRect(); return r.width > 2 && r.height > 2 ? [r.left, r.top, r.right, r.bottom] : null; };
  return { cap: q('#cap'), dong: q('#dong'), an: q('#an'), pnl: q('#pnl'), h: (document.getElementById('cap-h') || {}).textContent || '' }; }"""

# phần đang hiện của bài, đo trong khung
BAI = r"""([vo, h]) => {
  const hien = (e) => { if (!e.getClientRects().length) return false; for (let p = e; p && p !== document.documentElement; p = p.parentElement) { const c = getComputedStyle(p);
    if (c.display === 'none' || c.visibility === 'hidden' || +c.opacity < 0.05) return false; } return true; };
  const mien = (e) => e.closest('canvas,svg,[aria-hidden=true],.lab,.pin,.call,.bgs-sr,.bg-skip,#bgs-load,noscript,script,style,template');
  const W = innerWidth, H = innerHeight;
  const cat = (r, b) => b && r.left < b[2] - 2 && r.right > b[0] + 2 && r.top < b[3] - 2 && r.bottom > b[1] + 2;
  const ten = (e) => e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + (typeof e.className === 'string' && e.className.trim() ? '.' + e.className.trim().split(/\s+/)[0] : '');
  const chu = (e) => [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 1);
  const bam = (e) => e.matches('a[href],button,input,select,textarea,[role=button],summary');
  const che = [], lap = [];
  const fold = (s) => s.normalize('NFC').replace(/\s+/g, ' ').trim().toLowerCase();
  const H0 = fold(h);
  for (const e of document.querySelectorAll('body *')) {
    if (mien(e) || !(chu(e) || bam(e)) || !hien(e)) continue;
    const r = e.getBoundingClientRect(); if (r.width < 4 || r.height < 4 || r.right < 0 || r.bottom < 0 || r.left > W || r.top > H) continue;
    if (r.width * r.height > 0.8 * W * H) continue;
    // bị phần khác của bài che (ví dụ nội dung trang nằm dưới khung cảnh cố định): người học không thấy, bỏ qua
    { const cx = Math.min(W - 1, Math.max(0, (r.left + r.right) / 2)), cy = Math.min(H - 1, Math.max(0, (r.top + r.bottom) / 2)); const top = document.elementFromPoint(cx, cy);
      if (top && top !== e && !e.contains(top) && !top.contains(e)) continue; }
    if (chu(e) && H0.length > 8 && fold(e.textContent).includes(H0)) lap.push(ten(e));
    for (const k of ['cap', 'dong', 'an', 'pnl']) if (cat(r, vo[k])) { che.push(ten(e) + ' ⨯ ' + k + ' "' + (e.textContent || e.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 28) + '"'); break; }
  }
  return { che: [...new Set(che)], lap: [...new Set(lap)] };
}"""


def nhom(b):
    if b['slug'] in RIENG: return 'rieng'
    return 'thu-vien' if b['href'].startswith('../thu-vien/') else 'kit'


async def mot(pg, cong, b, w):
    out = {'A1': [], 'A2': [], 'A3': []}
    await pg.goto(f'http://localhost:{cong}/app/#/bai/{b["slug"]}', wait_until='domcontentloaded')
    try: await pg.wait_for_function("!document.getElementById('cap').hidden && document.getElementById('cap-h').textContent", timeout=60000)
    except Exception: out['A1'].append('không báo trạng thái trong 60 giây'); return out
    if 'Bắt đầu' in (await pg.text_content('#sau') or ''): await pg.click('#sau')
    await pg.wait_for_timeout(2500)
    vo = await pg.evaluate(VO)
    fr = pg.frame(name='bgs-canh')
    if not fr: out['A1'].append('không thấy khung bgs-canh'); return out
    try: r = await fr.evaluate(BAI, [vo, vo['h']])
    except Exception as e: out['A1'].append('không đo được trong khung: ' + str(e)[:80]); return out
    out['A2'] = r['lap'][:6]; out['A3'] = r['che'][:8]
    return out


async def main():
    a = [x for x in sys.argv[1:] if not x.startswith('--')]
    def opt(k): return sys.argv[sys.argv.index(k) + 1] if k in sys.argv else None
    chon, nh, co = opt('--bai'), opt('--nhom'), opt('--co')
    a = [x for x in a if x not in (chon, nh, co)]
    sizes = [c for c in CO if not co or str(c[0]) in co.split(',')]
    cong = a[0] if a else '8777'
    cat = json.loads((ROOT / 'app/danh-muc.json').read_text(encoding='utf-8'))['bai']
    bai = [b for b in cat if (not chon or b['slug'] in chon.split(',')) and (not nh or nhom(b) == nh)]
    loi, tong = 0, {'A1': 0, 'A2': 0, 'A3': 0}
    async with async_playwright() as p:
        br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
        for w, h in sizes:
            for b in bai:
                # mỗi bài một ngữ cảnh mới: cảnh 3D vẽ bằng phần mềm của bài trước không làm chậm bài sau
                ctx = await br.new_context(viewport={'width': w, 'height': h}, has_touch=w < 1100, is_mobile=w < 1100, reduced_motion='reduce')
                pg = await ctx.new_page(); pg.set_default_timeout(60000)
                try: r = await mot(pg, cong, b, w)
                except Exception as e: r = {'A1': ['lỗi: ' + str(e).splitlines()[0][:80]], 'A2': [], 'A3': []}
                await ctx.close()
                bad = {k: v for k, v in r.items() if v}
                for k, v in bad.items(): tong[k] += 1
                loi += bool(bad)
                print(f'{b["slug"]:<28}{w:>5}  ' + ('đạt' if not bad else '; '.join(f'{k} {len(v)}: ' + ' | '.join(v) for k, v in bad.items())), flush=True)
        await br.close()
    print(f'tổng: {len(bai)} bài × {len(sizes)} cỡ màn, {loi} lượt có lỗi · A1 {tong["A1"]}, A2 {tong["A2"]}, A3 {tong["A3"]}')
    sys.exit(1 if loi else 0)


if __name__ == '__main__':
    asyncio.run(main())
