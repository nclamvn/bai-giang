#!/usr/bin/env python3
"""Kiểm chế độ máy bay cho gói ngoại tuyến của app (docs/app-ke-hoach-moc.md, mốc M3).

Với mỗi bài: mở app khi có mạng, chờ sw.js điều khiển trang, mở bài, bấm nút tải ở góc trên và chờ tới khi nút báo đã tải.
Rồi cắt mạng của cả trình duyệt (như bật chế độ máy bay), mở lại app từ đầu, mở bài, đi hết các bước. Đạt khi:
  N1  nút tải báo đã tải (sw.js xác nhận mọi tệp của gói có trên máy)
  N2  khi mất mạng, app mở được và bài báo trạng thái (lớp chữ của app hiện tên bước)
  N3  khi mất mạng, không có yêu cầu nào tới site bị hỏng (tệp gói còn sót thì hiện ở đây)
Dò gói (tools/goi_bai.py) là dò tĩnh; bài kiểm này bắt tệp bài nạp bằng đường dẫn ghép lúc chạy mà dò tĩnh sót.

  python3 tests/kiem_ngoai_tuyen.py [cổng]                            mẫu mỗi nhóm bài một bài
  python3 tests/kiem_ngoai_tuyen.py 8777 --bai than-kinh,enzyme-step   bài chọn
Cần máy chủ tĩnh ở gốc repo (sw.js chỉ đăng ký ở localhost và github.io) và Playwright. Thoát mã 1 nếu có lỗi.
"""
import asyncio, sys
from playwright.async_api import async_playwright

MAU = ['than-kinh', 'tk-goi-tin', 'jellyfish', 'enzyme-step', 'co-loa', 'ty-the']


async def mot(br, cong, slug):
    base = f'http://localhost:{cong}/'
    out = {'N1': [], 'N2': [], 'N3': []}
    ctx = await br.new_context(viewport={'width': 390, 'height': 844}, has_touch=True, is_mobile=True, reduced_motion='reduce')
    pg = await ctx.new_page(); pg.set_default_timeout(60000)
    hong = []
    def ghi(kind, url):
        if url.startswith(base): hong.append(f'{kind} {url[len(base):]}')
    try:
        # có mạng: app, sw.js điều khiển, mở bài, tải gói
        await pg.goto(base + 'app/#/thu-vien')
        await pg.wait_for_function('navigator.serviceWorker && navigator.serviceWorker.controller', timeout=45000)
        await pg.goto(base + f'app/#/bai/{slug}')
        await pg.wait_for_function("!document.getElementById('tai').hidden && !document.getElementById('tai').classList.contains('dang')", timeout=60000)
        if not await pg.evaluate("document.getElementById('tai').classList.contains('xong')"):
            await pg.click('#tai')
            if await pg.evaluate("/lần nữa/.test(document.getElementById('st-msg').textContent)"): await pg.click('#tai')   # gói lớn: bấm lần hai
        try: await pg.wait_for_function("document.getElementById('tai').classList.contains('xong')", timeout=600000)
        except Exception: out['N1'].append('nút tải không báo đã tải: ' + (await pg.text_content('#st-msg') or '')); return out
        # mất mạng: mở lại từ đầu
        await ctx.set_offline(True)
        pg.on('requestfailed', lambda r: ghi('hỏng', r.url))
        pg.on('response', lambda r: ghi(str(r.status), r.url) if r.status >= 400 else None)
        await pg.goto(base + 'app/#/thu-vien')
        await pg.goto(base + f'app/#/bai/{slug}')
        try: await pg.wait_for_function("!document.getElementById('cap').hidden && document.getElementById('cap-h').textContent", timeout=60000)
        except Exception: out['N2'].append('bài không báo trạng thái khi mất mạng'); return out
        fr = pg.frame(name='bgs-canh')
        n = await fr.evaluate('(window.BGShell && BGShell.state.lesson && BGShell.state.lesson.steps.length) || 0') if fr else 0
        for i in range(n):   # đi hết các bước: bước sau có thể nạp mô hình, ảnh riêng
            await fr.evaluate(f'BGShell.go({i})'); await pg.wait_for_timeout(1200)
        await pg.wait_for_timeout(2000)
        out['N3'] = sorted(set(hong))[:10]
    except Exception as e:
        out['N2'].append('lỗi: ' + str(e).splitlines()[0][:100])
    finally:
        await ctx.close()
    return out


async def main():
    a = [x for x in sys.argv[1:] if not x.startswith('--')]
    chon = sys.argv[sys.argv.index('--bai') + 1] if '--bai' in sys.argv else None
    a = [x for x in a if x != chon]
    cong = a[0] if a else '8777'
    bai = chon.split(',') if chon else MAU
    loi = 0
    async with async_playwright() as p:
        br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
        for slug in bai:
            r = await mot(br, cong, slug)
            bad = {k: v for k, v in r.items() if v}
            loi += bool(bad)
            print(f'{slug:<24}' + ('đạt' if not bad else '; '.join(f'{k} {len(v)}: ' + ' | '.join(v) for k, v in bad.items())), flush=True)
        await br.close()
    print(f'tổng: {len(bai)} bài, {loi} bài có lỗi')
    sys.exit(1 if loi else 0)


if __name__ == '__main__':
    asyncio.run(main())
