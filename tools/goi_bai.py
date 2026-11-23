#!/usr/bin/env python3
"""Gói ngoại tuyến của từng bài (app/goi.json, mốc M3 của docs/app-ke-hoach-moc.md).

Một gói là mọi tệp site cần để mở bài khi mất mạng, tính lúc dựng, không gõ tay:
  · tệp bài (trang HTML) và mọi tệp nó dẫn tới, dò đệ quy qua HTML (src, href, importmap, mã nhúng), JS (import, import(),
    new URL(…, import.meta.url), chuỗi đường dẫn tới tệp có đuôi tài nguyên) và CSS (url(…));
  · bài dạng thư mục (…/index.html): thêm mọi tệp của thư mục đó, trừ thư mục bài lồng bên trong (mô hình, ảnh nạp theo bước);
  · phần chung của mọi gói: phông của site, lõi app (app/) và ảnh bìa mọi bài, để app và Thư viện mở đủ khi mất mạng.
Chỉ tính tệp site phục vụ (tools/sw.py: served()). Dung lượng là số byte thật trên đĩa.
Dò tĩnh có thể sót tệp bài nạp bằng đường dẫn ghép lúc chạy: tests/kiem_ngoai_tuyen.py mở bài khi mất mạng để bắt chỗ sót.

  python3 tools/goi_bai.py            in dung lượng gói từng bài (không ghi tệp; build_app.py ghi app/goi.json)
"""
import json, pathlib, posixpath, re, sys
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import sw

ROOT = pathlib.Path(__file__).resolve().parent.parent
EXT = r'js|mjs|css|json|glb|gltf|bin|png|jpe?g|webp|avif|svg|woff2?|ktx2|hdr|exr|mp3|m4a|ogg|wav|mp4|webm|b64|txt|wasm|drc|csv|html'
R_PATH = re.compile(r'["\'(]((?:\.{1,2}/|[\w@-]+/)[\w./@%+-]*?\.(?:' + EXT + r'))(?:[?#][^"\')]*)?["\')]', re.I)
R_IMPORT = re.compile(r'\b(?:import|export)\s*(?:[\w*${}\s,]*?\bfrom\s*)?["\']([^"\'\n]+)["\']|\bimport\s*\(\s*["\']([^"\'\n]+)["\']\s*\)')
R_ATTR = re.compile(r'\b(?:src|href|data-src|poster)\s*=\s*["\']([^"\']+)["\']', re.I)
R_URL = re.compile(r'url\(\s*["\']?([^"\')]+)["\']?\s*\)', re.I)
R_MAP = re.compile(r'<script[^>]*type=["\']importmap["\'][^>]*>(.*?)</script>', re.S | re.I)
APP_CORE = ['app/index.html', 'app/app.css', 'app/app.js', 'app/danh-muc.json', 'app/goi.json', 'app/manifest.webmanifest',
            'app/icon-192.png', 'app/icon-512.png', 'app/icon-maskable-512.png', 'design/logo/favicon-32.png', 'design/logo/apple-touch-icon.png']


class Do:
    def __init__(self):
        self.served = set(sw.served())
        self.dirs = sorted({x[:-len('index.html')] for x in self.served if x.endswith('/index.html')}, key=len, reverse=True)
        self.memo = {}

    def own(self, d):
        """Tệp của thư mục bài d, trừ thư mục bài lồng bên trong."""
        inner = [o for o in self.dirs if o != d and o.startswith(d)]
        return {x for x in self.served if x.startswith(d) and not any(x.startswith(o) for o in inner)}

    def resolve(self, spec, base, imap):
        spec = spec.strip()
        if not spec or re.match(r'^(?:[a-z]+:|//|#|data:|blob:)', spec, re.I): return None
        spec = re.split(r'[?#]', spec)[0]
        if not spec.startswith(('./', '../', '/')):
            hit = imap.get(spec) or next((imap[k] + spec[len(k):] for k in sorted(imap, key=len, reverse=True) if k.endswith('/') and spec.startswith(k)), None)
            if hit: spec, base = hit, imap['__base__']
            elif not re.match(r'^[\w@-]+/', spec): return None
        if spec.startswith('/'): return None   # gốc tên miền: site không dùng
        p = posixpath.normpath(posixpath.join(posixpath.dirname(base), spec))
        if spec.endswith('/'): p += '/index.html'
        return p if p in self.served else None

    def scan(self, f, imap=None):
        """Mọi tệp f dẫn tới (đệ quy), gồm cả f."""
        out, todo = set(), [(f, imap or {})]
        while todo:
            x, im = todo.pop()
            if x in out: continue
            out.add(x)
            if not re.search(r'\.(html|js|mjs|css)$', x): continue
            if x not in self.memo:
                s = (ROOT / x).read_text(encoding='utf-8', errors='ignore'); im2 = dict(im); refs = []
                if x.endswith('.html'):
                    for m in R_MAP.finditer(s):
                        try: im2.update(json.loads(m.group(1)).get('imports', {})); im2['__base__'] = x
                        except ValueError: pass
                    refs += R_ATTR.findall(s)
                refs += [a or b for a, b in R_IMPORT.findall(s)] + R_PATH.findall(s) + R_URL.findall(s)
                self.memo[x] = (refs, im2)
            refs, im2 = self.memo[x]
            for r in refs:
                p = self.resolve(r, x, im2)
                # liên kết sang trang khác (bài sau, mục lục) là điều hướng, không phải tài nguyên của bài
                if p and p not in out and not p.endswith('.html'): todo.append((p, im2))
        return out

    def goi(self, path):
        """Gói của một bài theo đường dẫn tệp bài (vd. 'than-kinh/index.html', 'thu-vien/enzyme-step.html')."""
        tep = self.scan(path)
        if path.endswith('/index.html'):
            for x in self.own(path[:-len('index.html')]): tep |= self.scan(x)
        return tep

    def chung(self):
        # ảnh bìa mọi bài trong danh mục app: Thư viện đủ ảnh khi mất mạng, kể cả bài chưa tải
        try: bia = {posixpath.normpath(posixpath.join('app', b['cover'])) for b in json.loads((ROOT / 'app/danh-muc.json').read_text(encoding='utf-8'))['bai']}
        except (OSError, ValueError, KeyError): bia = set()
        return ({x for x in self.served if x.startswith('design/fonts/') and x.endswith('.woff2')} | {x for x in APP_CORE if x in self.served}
                | {x for x in bia if x in self.served})


def size(x):
    return (ROOT / x).stat().st_size


if __name__ == '__main__':
    import chuoi_bai as C
    d = Do(); ch = d.chung()
    print(f'phần chung: {len(ch)} tệp, {sum(map(size, ch)) / 1048576:.2f} MB')
    for path, s in C.SEQ.items():
        t = d.goi(path) | ch
        print(f'{s["slug"]:<24} {len(t):>5} tệp {sum(map(size, t)) / 1048576:>8.2f} MB')
