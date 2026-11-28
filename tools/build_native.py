#!/usr/bin/env python3
"""Thư mục web cho app Android (native/www), mốc M4 của docs/app-ke-hoach-moc.md.

Gom từ site đúng các tệp app cần, theo gói ngoại tuyến app/goi.json (tools/goi_bai.py): phần chung (phông, lõi app, ảnh bìa)
và gói của mọi bài trừ bài nặng ở NGOAI (Cơ thể người, 90 MB). Bài trong app mở được không cần mạng ngay từ lần đầu.
Bài ở NGOAI mở từ site (REMOTE) khi có mạng; app ghi danh sách này vào app/ban-dia.json để biết.
Trang HTML bỏ khối đăng ký sw.js: trong app, mọi tệp đã nằm sẵn trên máy, không cần bộ nhớ đệm của trình duyệt.

  python3 tools/build_native.py      dựng native/www (không nằm trong git); rồi: cd native && npx cap sync android
"""
import json, pathlib, re, shutil, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
WWW = ROOT / 'native/www'
REMOTE = 'https://nclamvn.github.io/bai-giang/'
NGOAI = {'co-the-nguoi'}
# trang phụ không đóng vào app, mở từ site bằng trình duyệt của máy: xem Tế Bào bằng AR cần model-viewer tải từ CDN (cần mạng)
# và AR chạy tốt nhất trong Chrome, Safari; mô hình ribosome của trang này nặng 4,2 MB (2,2 MB sau nén)
TRANG_XA = {'te-bao/ar.html': ['te-bao/assets/ribosome-3j7r.glb', 'te-bao/assets/ribosome-3j7r.labels.json']}
SW = re.compile(r'<script id="bg-sw">.*?</script>\n?', re.S)


def main():
    g = json.loads((ROOT / 'app/goi.json').read_text(encoding='utf-8'))
    cat = json.loads((ROOT / 'app/danh-muc.json').read_text(encoding='utf-8'))
    tep = {g['tep'][i][0] for i in g['chung']}
    for slug, idx in g['bai'].items():
        if slug not in NGOAI: tep |= {g['tep'][i][0] for i in idx}
    tep -= set(TRANG_XA) | {x for v in TRANG_XA.values() for x in v}
    thieu = [x for x in tep if not (ROOT / x).is_file()]
    if thieu: sys.exit('build_native: thiếu tệp ' + ', '.join(sorted(thieu)[:5]))
    if WWW.exists(): shutil.rmtree(WWW)
    n = byte = 0
    for x in sorted(tep):
        src, dst = ROOT / x, WWW / x
        dst.parent.mkdir(parents=True, exist_ok=True)
        if x.endswith('.html'): dst.write_text(SW.sub('', src.read_text(encoding='utf-8')), encoding='utf-8')
        else: shutil.copyfile(src, dst)
        n += 1; byte += dst.stat().st_size
    # lõi Capacitor (registerPlugin cho plugin App, ManHinh): app.js chỉ nạp khi chạy trong app
    core = ROOT / 'native/node_modules/@capacitor/core/dist/capacitor.js'
    if not core.is_file(): sys.exit('build_native: chưa có native/node_modules, chạy: cd native && npm ci')
    shutil.copyfile(core, WWW / 'app/capacitor.js')
    ngoai = sorted(NGOAI & {b['slug'] for b in cat['bai']})
    (WWW / 'app/ban-dia.json').write_text(json.dumps({'v': 1, 'remote': REMOTE, 'ngoai': ngoai, 'trang_xa': sorted(TRANG_XA)}, ensure_ascii=False) + '\n', encoding='utf-8')
    # Capacitor mở www/index.html: chuyển ngay vào app/
    (WWW / 'index.html').write_text('<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
                                    '<meta name="theme-color" content="#0E0C1A"><title>Sáng Ăn Khoai</title><style>html,body{margin:0;background:#0E0C1A}</style>'
                                    '<script>location.replace("app/index.html#/thu-vien")</script></head><body></body></html>\n', encoding='utf-8')
    print(f'native/www: {n} tệp, {byte / 1048576:.1f} MB, {len(cat["bai"]) - len(ngoai)} bài sẵn trong app, mở từ site: {", ".join(ngoai) or "không"}')


if __name__ == '__main__':
    main()
