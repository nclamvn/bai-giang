#!/usr/bin/env python3
"""Nghiệm thu giả lập trải nghiệm trong app: mở từng bài ở cỡ điện thoại có cảm ứng, đi hết các bước như người học, ghi lỗi.

  python3 tests/kiem_trai_nghiem.py 8777                          mọi bài (lâu: máy không có GPU vẽ cảnh bằng phần mềm)
  python3 tests/kiem_trai_nghiem.py 8777 --bai than-kinh,hexapod   vài bài
  python3 tests/kiem_trai_nghiem.py 8777 --co 1180x820             cỡ máy tính bảng (mặc định 390x844)

Mỗi bài (qua app/index.html#/bai/<slug>, đúng như trong app):
  T1  mở được: bài báo trạng thái (lớp chữ của app hiện số bước); ghi thời gian mở
  T2  không lỗi trang (pageerror, console.error) và không tệp nào của site tải hỏng (mã 4xx, 5xx, lỗi mạng)
  T3  đi hết các bước bằng nút Bước tiếp: mỗi lần bấm, bước đổi trong 20 giây; nút Bước tiếp luôn nằm trong màn hình
  T4  câu hỏi trong bước (nếu có): bấm một phương án, app báo đúng hoặc sai
  T5  bố cục: trang app không tràn ngang; nút bấm được của bài không nhỏ hơn 32 px (ghi số nút nhỏ, không tính là hỏng)
  Đo thêm (không tính đạt, hỏng): tổng thời gian tác vụ dài (trên 50 ms) lúc mở bài, số khung hình trong 3 giây, bộ nhớ JS.
Kết quả: kiem-trai-nghiem/ket-qua.json và bao-cao.md (bảng xếp theo số lỗi). Thoát mã 1 nếu một bài hỏng T1 đến T4.
"""
import json, os, re, sys, time
from playwright.sync_api import sync_playwright

PORT = sys.argv[1] if len(sys.argv) > 1 and sys.argv[1].isdigit() else '8777'
ROOT = f'http://127.0.0.1:{PORT}'
OUT = 'kiem-trai-nghiem'
arg = lambda k, d=None: sys.argv[sys.argv.index(k) + 1] if k in sys.argv else d
W, H = map(int, arg('--co', '390x844').split('x'))

# tác vụ dài và khung hình đo ngay trong mọi khung (app và khung bài)
DO = """(() => { try {
  window.__td = {dai: 0, max: 0, n: 0};
  new PerformanceObserver((l) => { for (const e of l.getEntries()) { __td.dai += e.duration; __td.n++; if (e.duration > __td.max) __td.max = e.duration; } }).observe({type: 'longtask', buffered: true});
} catch (e) {} })();"""

NUT_NHO = """() => { const d = document.getElementById('canh').contentDocument; if (!d) return [];
  const out = []; const W = innerWidth, H = innerHeight;
  for (const e of d.querySelectorAll('button,a[href],[role=button],input,select,summary')) {
    const r = e.getBoundingClientRect(), cs = d.defaultView.getComputedStyle(e);
    if (!r.width || !r.height || cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) continue;
    if (r.right < 0 || r.bottom < 0 || r.left > W || r.top > H) continue;
    if (e.closest('[data-app="an"],[aria-hidden="true"]')) continue;
    if (Math.min(r.width, r.height) < 32) out.push((e.textContent || e.getAttribute('aria-label') || e.tagName).trim().slice(0, 24) + ' ' + Math.round(r.width) + '×' + Math.round(r.height));
  } return out; }"""


def kiem_bai(ctx, b):
    pg = ctx.new_page()
    loi, hong = [], []
    pg.on('pageerror', lambda e: loi.append('pageerror: ' + str(e)[:200]))
    pg.on('console', lambda m: loi.append('console: ' + m.text[:200]) if m.type == 'error' else None)
    pg.on('response', lambda r: hong.append(f'{r.status} {r.url[len(ROOT):][:120]}') if r.url.startswith(ROOT) and r.status >= 400 else None)
    pg.on('requestfailed', lambda r: hong.append(f'lỗi mạng {r.url[len(ROOT):][:120]}') if r.url.startswith(ROOT) and 'favicon' not in r.url else None)
    kq = {'slug': b['slug'], 'ten': b['title'], 'hong': [], 'ghi': []}
    t0 = time.time()
    pg.goto(f'{ROOT}/app/index.html#/bai/{b["slug"]}')
    try:
        pg.wait_for_function("() => /bước/i.test(document.getElementById('cap-k').textContent)", timeout=120000)
        kq['mo_giay'] = round(time.time() - t0, 1)
    except Exception:
        kq['hong'].append('T1 không báo trạng thái sau 120 giây'); kq['loi'] = loi[:6]; pg.close(); return kq
    pg.wait_for_timeout(2500)
    # "8 bước · bấm Bắt đầu" (chưa bắt đầu) hoặc "Bước 01 / 08" (bài mở thẳng vào bước 1, như bài thư viện)
    st = pg.evaluate("() => { const k = document.getElementById('cap-k').textContent; let m = /Bước (\\d+) \\/ (\\d+)/i.exec(k); if (m) return {i: +m[1], n: +m[2]}; m = /(\\d+) bước/i.exec(k); return {i: 0, n: m ? +m[1] : 0} }")
    n = st['n']; kq['so_buoc'] = n
    # T3, T4: đi hết các bước
    ket, ngoai, hoi = [], [], []
    for i in range(st['i'], n):
        truoc = pg.text_content('#cap-k')
        sau = pg.evaluate("() => { const b = document.getElementById('sau'); const r = b.getBoundingClientRect(); return {vis: r.width > 0 && r.top >= 0 && r.bottom <= innerHeight + 1 && r.left >= 0 && r.right <= innerWidth + 1, txt: b.textContent} }")
        if not sau['vis']: ngoai.append(i)
        if 'Xong' in sau['txt'] or 'Bài tiếp' in sau['txt']: break   # đã ở bước cuối
        pg.evaluate("() => document.getElementById('sau').click()")
        try: pg.wait_for_function("(t) => document.getElementById('cap-k').textContent !== t", arg=truoc, timeout=20000)
        except Exception: ket.append(i + 1); break
        pg.wait_for_timeout(1200)
        a = pg.query_selector('#cap-ask:not([hidden]) button')
        if a:
            pg.evaluate("() => document.querySelector('#cap-ask button').click()"); pg.wait_for_timeout(400)
            if not pg.evaluate("() => /đúng|sai|chưa đúng|chính xác/i.test(document.getElementById('cap-ask').innerText)"): hoi.append(i + 1)
    if ket: kq['hong'].append(f'T3 kẹt ở bước {ket[0]}: bấm Bước tiếp, bước không đổi sau 20 giây')
    if ngoai: kq['hong'].append(f'T3 nút Bước tiếp ra ngoài màn hình ở bước {", ".join(str(x + 1) for x in ngoai[:5])}')
    if hoi: kq['hong'].append(f'T4 câu hỏi không báo đúng sai ở bước {", ".join(map(str, hoi[:5]))}')
    # T5 và đo
    tran = pg.evaluate("() => document.documentElement.scrollWidth > innerWidth + 1")
    if tran: kq['hong'].append('T5 trang app tràn ngang')
    nho = pg.evaluate(NUT_NHO); kq['nut_nho'] = len(nho)
    if nho: kq['ghi'].append('nút nhỏ hơn 32 px: ' + '; '.join(nho[:4]))
    fr = pg.frame(name='bgs-canh')
    try:
        kq['khung_3s'] = fr.evaluate("() => new Promise((ok) => { let n = 0; const t0 = performance.now(); const f = () => { n++; if (performance.now() - t0 < 3000) requestAnimationFrame(f); else ok(n); }; requestAnimationFrame(f); })")
        td = fr.evaluate("() => window.__td || null") or {}
        kq['tac_vu_dai_ms'] = round(td.get('dai', 0)); kq['tac_vu_dai_max_ms'] = round(td.get('max', 0))
        kq['bo_nho_mb'] = fr.evaluate("() => performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1048576) : null")
    except Exception as e: kq['ghi'].append('không đo được trong khung bài: ' + str(e)[:80])
    # T2 (gom sau cùng: lỗi có thể đến muộn)
    loi = [x for x in loi if 'WebGPU' not in x and 'GPU stall' not in x]
    if loi: kq['hong'].append(f'T2 {len(loi)} lỗi trang'); kq['loi'] = sorted(set(re.sub(r'\d{3,}', '#', x) for x in loi))[:6]
    if hong: kq['hong'].append(f'T2 {len(hong)} tệp tải hỏng'); kq['tep_hong'] = sorted(set(hong))[:6]
    pg.close()
    return kq


def main():
    os.makedirs(OUT, exist_ok=True)
    import urllib.request
    cat = json.load(urllib.request.urlopen(f'{ROOT}/app/danh-muc.json'))
    ds = cat['bai']
    if arg('--bai'): ds = [b for b in ds if b['slug'] in arg('--bai').split(',')]
    tat_ca = []
    with sync_playwright() as p:
        for k, b in enumerate(ds, 1):
            br = p.chromium.launch()   # mỗi bài một trình duyệt: cảnh 3D vẽ bằng phần mềm để lại bộ nhớ đồ hoạ
            ctx = br.new_context(viewport={'width': W, 'height': H}, has_touch=True, is_mobile=W < 700)
            ctx.add_init_script(DO)
            try: kq = kiem_bai(ctx, b)
            except Exception as e: kq = {'slug': b['slug'], 'ten': b['title'], 'hong': ['lỗi bộ kiểm: ' + str(e)[:160]], 'ghi': []}
            br.close()
            tat_ca.append(kq)
            print(f'[{k}/{len(ds)}] {b["slug"]:22} {"đạt" if not kq["hong"] else "LỖI " + " | ".join(kq["hong"])}  mở {kq.get("mo_giay", "?")} s, {kq.get("so_buoc", "?")} bước, nút nhỏ {kq.get("nut_nho", "?")}', flush=True)
            json.dump(tat_ca, open(f'{OUT}/ket-qua.json', 'w'), ensure_ascii=False, indent=1)
    xep = sorted(tat_ca, key=lambda x: (-len(x['hong']), -x.get('nut_nho', 0)))
    with open(f'{OUT}/bao-cao.md', 'w') as f:
        f.write(f'# Nghiệm thu giả lập trải nghiệm ({W}×{H}, {len(tat_ca)} bài)\n\n| Bài | Lỗi | Mở (s) | Bước | Nút nhỏ | Tác vụ dài (ms) | Ghi |\n|---|---|---|---|---|---|---|\n')
        for x in xep:
            f.write(f"| {x['ten']} | {'; '.join(x['hong']) or 'đạt'} | {x.get('mo_giay', '')} | {x.get('so_buoc', '')} | {x.get('nut_nho', '')} | {x.get('tac_vu_dai_ms', '')} | {'; '.join(x['ghi'])[:160]} |\n")
    hong = [x for x in tat_ca if x['hong']]
    print('tổng:', f'{len(tat_ca) - len(hong)}/{len(tat_ca)} bài đạt' + ('' if not hong else ', lỗi ở ' + ', '.join(x['slug'] for x in hong)))
    sys.exit(1 if hong else 0)


if __name__ == '__main__':
    main()
