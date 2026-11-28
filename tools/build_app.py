#!/usr/bin/env python3
"""Danh mục cho vỏ app (app/): sinh app/danh-muc.json từ nguồn duy nhất tools/chuoi_bai.py (thứ tự bài, tên, ảnh bìa, môn)
và app/goi.json, gói ngoại tuyến của từng bài (tools/goi_bai.py: danh sách tệp và số byte thật).

Không gõ tay danh sách bài ở app. Thêm bài vào chuoi_bai.py hoặc thu-vien/catalog.vi.json là app có bài đó.
Đường dẫn trong tệp sinh ra tính từ thư mục app/. Báo lỗi nếu bài hoặc ảnh bìa không có trên đĩa.
Chạy từ gốc repo:  python3 tools/build_app.py
"""
import json, pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import chuoi_bai as C
import goi_bai as G

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'app/danh-muc.json'
GOI = ROOT / 'app/goi.json'
FEATURED = 'than-kinh'   # bài mở sẵn ở ảnh lớn Thư viện khi máy chưa học bài nào
# Lớp học (mốc M6): bài có cảnh nền tối dùng kính tối, còn lại kính sáng; giáo viên đổi được trên màn chiếu.
# Đo ngày 24/11/2026: độ sáng trung bình ảnh bìa (thang 0 đến 255) Neuron 51, Cá thở bằng mang 63, các bài khác từ 104 trở lên;
# Tế Bào có bìa sáng nhưng nền cảnh đen (ảnh chụp cảnh trên máy dựng và máy ảo Android).
TOI = {'than-kinh', 'mang', 'te-bao'}
# Ảnh bìa nhỏ cho thẻ Thư viện và danh sách Đã tải: thẻ rộng nhiều nhất khoảng 180 px CSS ở điện thoại màn 3 lần (540 điểm ảnh)
# và 260 px CSS ở máy tính bảng màn 2 lần (520), nên bản 560 px đủ nét như bản gốc 800 đến 1200 px; ảnh lớn đầu Thư viện vẫn dùng bản gốc.
# Đo 28/11/2026: 90 bìa gốc 2,2 MB. Bản nhỏ giảm số byte tải và bộ nhớ giải mã khi cuộn (ít hơn khoảng 3 lần số điểm ảnh).
NHO_W = 560


def bia_nho(cover):
    """thu-vien/covers/x.webp -> thu-vien/covers/the/x.webp (560 px; covers/nho/ là ảnh 264 px của mục lục trang chính, tools/anh_nho.py). Dựng khi chưa có hoặc bìa gốc mới hơn; None nếu bìa đã nhỏ."""
    from PIL import Image
    src = ROOT / cover
    with Image.open(src) as im:
        if im.width <= NHO_W * 1.15: return None
        dst = src.parent / 'the' / src.name
        if not dst.exists() or dst.stat().st_mtime < src.stat().st_mtime:
            dst.parent.mkdir(exist_ok=True)
            im.convert('RGB').resize((NHO_W, round(im.height * NHO_W / im.width)), Image.LANCZOS).save(dst, 'WEBP', quality=84, method=6)
    return dst.relative_to(ROOT).as_posix()


def main():
    bai, loi = [], []
    for path, d in C.SEQ.items():
        if not (ROOT / path).is_file(): loi.append(f'thiếu bài {path}'); continue
        if not (ROOT / d['cover']).is_file(): loi.append(f'thiếu ảnh bìa {d["cover"]}')
        href = path[:-len('index.html')] if path.endswith('/index.html') else path
        nhom = d['crumb'][-1]['t'] if d.get('crumb') else d['subject']
        nho = bia_nho(d['cover']) if (ROOT / d['cover']).is_file() else None
        bai.append({'slug': d['slug'], 'title': d['title'], 'href': '../' + href, 'cover': '../' + d['cover'], **({'nho': '../' + nho} if nho else {}),
                    'mon': d['subject'], 's': d['s'], 'nhom': nhom, **({'toi': 1} if d['slug'] in TOI else {})})
    if loi: sys.exit('build_app: ' + '; '.join(loi))
    slugs = [b['slug'] for b in bai]
    assert len(slugs) == len(set(slugs)), 'trùng slug'
    assert FEATURED in slugs, f'bài nổi bật {FEATURED} không có trong danh mục'
    assert TOI <= set(slugs), f'bài kính tối không có trong danh mục: {TOI - set(slugs)}'
    mon = []
    for b in bai:
        if (b['s'], b['mon']) not in mon: mon.append((b['s'], b['mon']))
    data = {'v': 1, 'noi_bat': FEATURED, 'mon': [{'s': s, 'ten': t} for s, t in mon], 'bai': bai}
    txt = json.dumps(data, ensure_ascii=False, separators=(',', ':')) + '\n'
    if not OUT.exists() or OUT.read_text(encoding='utf-8') != txt: OUT.write_text(txt, encoding='utf-8')
    print(f'app/danh-muc.json: {len(bai)} bài, {len(mon)} môn')
    goi()


def goi():
    """app/goi.json: {tep: [[đường dẫn từ gốc site, byte]], chung: [chỉ số], bai: {slug: [chỉ số]}}. Gói một bài = bai[slug] ∪ chung.
    Ghi hai lượt: chính app/goi.json nằm trong phần chung, số byte của nó chỉ đúng sau lượt thứ hai."""
    d = G.Do(); ch = d.chung(); per = {s['slug']: d.goi(path) - ch for path, s in C.SEQ.items()}
    allf = sorted(ch.union(*per.values())); idx = {x: i for i, x in enumerate(allf)}
    for _ in range(3):
        data = {'v': 1, 'tep': [[x, (ROOT / x).stat().st_size if x != 'app/goi.json' or GOI.exists() else 0] for x in allf],
                'chung': sorted(idx[x] for x in ch), 'bai': {k: sorted(idx[x] for x in v) for k, v in per.items()}}
        txt = json.dumps(data, ensure_ascii=False, separators=(',', ':')) + '\n'
        if GOI.exists() and GOI.read_text(encoding='utf-8') == txt: break
        GOI.write_text(txt, encoding='utf-8')
    mb = lambda xs: sum((ROOT / x).stat().st_size for x in xs) / 1048576
    lon = max(per, key=lambda k: mb(per[k] | ch))
    print(f'app/goi.json: {len(per)} gói, {len(allf)} tệp, phần chung {mb(ch):.2f} MB, gói lớn nhất {lon} {mb(per[lon] | ch):.1f} MB')


if __name__ == '__main__':
    main()
