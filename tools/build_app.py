#!/usr/bin/env python3
"""Danh mục cho vỏ app (app/): sinh app/danh-muc.json từ nguồn duy nhất tools/chuoi_bai.py (thứ tự bài, tên, ảnh bìa, môn).

Không gõ tay danh sách bài ở app. Thêm bài vào chuoi_bai.py hoặc thu-vien/catalog.vi.json là app có bài đó.
Đường dẫn trong tệp sinh ra tính từ thư mục app/. Báo lỗi nếu bài hoặc ảnh bìa không có trên đĩa.
Chạy từ gốc repo:  python3 tools/build_app.py
"""
import json, pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import chuoi_bai as C

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'app/danh-muc.json'
FEATURED = 'than-kinh'   # bài mở sẵn ở ảnh lớn Thư viện khi máy chưa học bài nào


def main():
    bai, loi = [], []
    for path, d in C.SEQ.items():
        if not (ROOT / path).is_file(): loi.append(f'thiếu bài {path}'); continue
        if not (ROOT / d['cover']).is_file(): loi.append(f'thiếu ảnh bìa {d["cover"]}')
        href = path[:-len('index.html')] if path.endswith('/index.html') else path
        nhom = d['crumb'][-1]['t'] if d.get('crumb') else d['subject']
        bai.append({'slug': d['slug'], 'title': d['title'], 'href': '../' + href, 'cover': '../' + d['cover'],
                    'mon': d['subject'], 's': d['s'], 'nhom': nhom})
    if loi: sys.exit('build_app: ' + '; '.join(loi))
    slugs = [b['slug'] for b in bai]
    assert len(slugs) == len(set(slugs)), 'trùng slug'
    assert FEATURED in slugs, f'bài nổi bật {FEATURED} không có trong danh mục'
    mon = []
    for b in bai:
        if (b['s'], b['mon']) not in mon: mon.append((b['s'], b['mon']))
    data = {'v': 1, 'noi_bat': FEATURED, 'mon': [{'s': s, 'ten': t} for s, t in mon], 'bai': bai}
    txt = json.dumps(data, ensure_ascii=False, separators=(',', ':')) + '\n'
    if not OUT.exists() or OUT.read_text(encoding='utf-8') != txt: OUT.write_text(txt, encoding='utf-8')
    print(f'app/danh-muc.json: {len(bai)} bài, {len(mon)} môn')


if __name__ == '__main__':
    main()
