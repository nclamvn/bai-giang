#!/usr/bin/env python3
"""ve_sinh_ui.py · vệ sinh giao diện: sửa những gì sửa được bằng máy trên trang đã dựng, rồi kiểm các luật (docs/ve-sinh-giao-dien.md).

  python3 tools/ve_sinh_ui.py           sửa rồi kiểm; còn lỗi thì thoát mã 1 (bước 've-sinh-ui' trong build_all)
  python3 tools/ve_sinh_ui.py --kiem    chỉ kiểm, không ghi tệp

Luật lấy từ Web Interface Guidelines của Vercel và bộ Design Engineering của Emil Kowalski (đều MIT), chỉ giữ những luật kiểm được
bằng máy và hợp với trang tĩnh của dự án.

SỬA (tất định, chạy lại bao nhiêu lần cũng được):
  S1  <img> trỏ tệp trong kho mà thiếu width/height: thêm theo kích thước thật của tệp (giữ chỗ, không giật bố cục khi ảnh về).
      house.css có ':where(img){height:auto}' nên ảnh vẫn giữ tỉ lệ theo CSS.
  S2  trang nạp house.css mà thiếu <meta name="theme-color">: thêm màu nền trang (#FFFFFF).
  S3  trang nạp house.css, không có vỏ bài: thêm liên kết "Bỏ qua tới nội dung" đầu <body>, đích là <main> hoặc khối .wrap đầu tiên.
      (Trang có vỏ bài hoặc khung thì vỏ và khung tự thêm lúc chạy.)

KIỂM:
  K1  không dùng 'transition: all'
  K2  mọi luật :hover nằm trong @media (hover:hover) (hover không dính trên máy chạm)
  K3  có 'outline: none' thì trang phải có vòng focus thay thế (:focus-visible của trang, house.css hoặc vỏ bài)
  K4  mọi <img> có alt, width, height
  K5  không chặn phóng to (user-scalable=no, maximum-scale=1)
  K6  <html> có lang
  K7  có theme-color
  K8  có liên kết bỏ qua tới nội dung (tĩnh, hoặc do vỏ bài hay khung thêm)
  K9  trang nền tối (theme-color tối) khai color-scheme
  K10 không gắn onclick lên <div> hay <span>

Miễn trừ có ghi lí do ở MIEN bên dưới; thêm miễn trừ thì phải ghi lí do.
Mỗi lần chạy, công cụ tự thử trước: một trang mẫu đạt cả 10 luật và 10 bản mỗi bản phạm đúng một luật (tu_thu). Luật nào không cắn thì dừng.
"""
import re, struct, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BO_QUA = ('tools/', 'tests/', 'offline/', 'docs/', 'src/', '.art_robo/', 'node_modules/')
SKIP_LINK = '<a class="bg-skip" href="#{id}">Bỏ qua tới nội dung</a>'
# đường dẫn (tiền tố) → các luật được miễn và lí do
MIEN = {
    'thu-vien/': ({'K2'}, 'CSS mô phỏng của Tongjiang Lab (khoảng 600 luật :hover), dự án không sửa mã mô phỏng gốc'),
    'co-the-nguoi/dental/': ({'K2', 'K7', 'K8'}, 'trang của dự án gốc dental, giữ nguyên'),
    'co-the-nguoi/app/': ({'K2'}, 'ứng dụng atlas dựng bằng bộ công cụ riêng (tools/co-the-nguoi)'),
    'te-bao/ar.html': ({'K8'}, 'mô hình là phần tử đầu tiên của trang, không có thanh điều hướng đứng trước để bỏ qua'),
    'than-kinh/': ({'K9'}, 'cảnh nền tối nhưng mọi bảng điều khiển nền sáng: khai color-scheme tối sẽ làm thanh trượt và ô chọn gốc đổi sang kiểu tối trên bảng trắng'),
}


def mien(rel, k):
    return any(rel.startswith(p) and k in ks for p, (ks, _) in MIEN.items())


# ---------------------------------------------------------------- kích thước ảnh, không cần thư viện ngoài
def co_anh(p):
    b = p.read_bytes()[:65536]
    if b[:8] == b'\x89PNG\r\n\x1a\n': return struct.unpack('>II', b[16:24])
    if b[:6] in (b'GIF87a', b'GIF89a'): return struct.unpack('<HH', b[6:10])
    if b[:4] == b'RIFF' and b[8:12] == b'WEBP':
        k = b[12:16]
        if k == b'VP8 ': return struct.unpack('<H', b[26:28])[0] & 0x3FFF, struct.unpack('<H', b[28:30])[0] & 0x3FFF
        if k == b'VP8L': v = struct.unpack('<I', b[21:25])[0]; return (v & 0x3FFF) + 1, ((v >> 14) & 0x3FFF) + 1
        if k == b'VP8X': return int.from_bytes(b[24:27], 'little') + 1, int.from_bytes(b[27:30], 'little') + 1
    if b[:2] == b'\xff\xd8':
        i = 2
        while i + 9 < len(b):
            if b[i] != 0xFF: i += 1; continue
            m = b[i + 1]
            if m in (0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF): h, w = struct.unpack('>HH', b[i + 5:i + 9]); return w, h
            i += 2 + struct.unpack('>H', b[i + 2:i + 4])[0]
    if b.lstrip()[:5] in (b'<?xml', b'<svg '):
        t = b.decode('utf-8', 'ignore'); m = re.search(r'<svg[^>]*>', t)
        if m:
            w, h = re.search(r'\bwidth="([\d.]+)', m.group(0)), re.search(r'\bheight="([\d.]+)', m.group(0)); vb = re.search(r'viewBox="[\d.\s-]*?([\d.]+)\s+([\d.]+)"', m.group(0))
            if w and h: return round(float(w.group(1))), round(float(h.group(1)))
            if vb: return round(float(vb.group(1))), round(float(vb.group(2)))
    return None


def tep_anh(rel, src):
    if re.match(r'(?:[a-z]+:)?//|data:|blob:', src) or '${' in src or '{{' in src: return None
    src = src.split('#')[0].split('?')[0]
    p = (ROOT / src.lstrip('/')) if src.startswith('/') else (ROOT / rel).parent / src
    try: p = p.resolve()
    except OSError: return None
    return p if p.is_file() and ROOT in p.parents else None


# ---------------------------------------------------------------- trang và tệp
def trang():
    out = []
    for p in sorted(ROOT.rglob('*.html')):
        rel = p.relative_to(ROOT).as_posix()
        if rel.startswith(BO_QUA) or '/node_modules/' in rel or '/upstream/' in rel: continue
        s = p.read_text(encoding='utf-8', errors='ignore')
        if 'http-equiv="refresh"' in s[:4000]: continue
        out.append((rel, p, s))
    return out


def tai_san():
    """CSS và JS của dự án đang phát hành (không tính thư viện ngoài và bản rút gọn sinh từ nguồn đã kiểm)."""
    out = []
    for ext in ('*.css', '*.js'):
        for p in sorted(ROOT.rglob(ext)):
            rel = p.relative_to(ROOT).as_posix()
            if rel.startswith(BO_QUA) or '/node_modules/' in rel or '/upstream/' in rel or '/vendor/' in rel or rel == 'sw.js': continue
            if p.stat().st_size > 6_000_000: continue
            out.append((rel, p.read_text(encoding='utf-8', errors='ignore')))
    return out


CO_VO = re.compile(r'bg-shell(?:\.min)?\.js|khung(?:\.min)?\.js|BG-KHUNG')
CO_NHA = 'design/house.css'


# ---------------------------------------------------------------- sửa
def sua(rel, s):
    # S1
    def img(m):
        t = m.group(0)
        if re.search(r'\swidth=', t) and re.search(r'\sheight=', t): return t
        src = re.search(r'\ssrc="([^"]+)"', t)
        p = tep_anh(rel, src.group(1)) if src else None
        wh = co_anh(p) if p else None
        if not wh: return t
        t = re.sub(r'\s(?:width|height)="[^"]*"', '', t)
        return t[:-1].rstrip('/').rstrip() + f' width="{wh[0]}" height="{wh[1]}">'
    s = re.sub(r'<img\b[^>]*>', img, s)
    nha = CO_NHA in s
    # S2
    if nha and 'name="theme-color"' not in s and not mien(rel, 'K7'):
        m = re.search(r'<meta name="viewport"[^>]*>', s)
        if m: s = s[:m.end()] + '\n<meta name="theme-color" content="#FFFFFF">' + s[m.end():]
    # S3
    if nha and not CO_VO.search(s) and 'class="bg-skip"' not in s and not mien(rel, 'K8'):
        b = re.search(r'<body[^>]*>', s)
        m = re.search(r'<main\b[^>]*>', s) or (re.search(r'<div class="wrap"[^>]*>', s[s.find('</header>'):]) if '</header>' in s else None)
        if b and m:
            off = 0 if m.re.pattern.startswith('<main') else s.find('</header>')
            a, e = off + m.start(), off + m.end(); tag = s[a:e]
            i = re.search(r'\sid="([^"]+)"', tag); nid = i.group(1) if i else 'noi-dung'
            if not i: tag = tag[:-1] + ' id="noi-dung">'
            if 'tabindex=' not in tag:  # đích của liên kết bỏ qua: nhận focus nhưng không vẽ vòng quanh cả khối nội dung
                tag = re.sub(r'\sstyle="([^"]*)"', lambda m: f' style="{m.group(1).rstrip(";")};outline:none!important"', tag) if ' style="' in tag else tag[:-1] + ' style="outline:none!important">'
                tag = tag[:-1] + ' tabindex="-1">'
            s = s[:a] + tag + s[e:]
            s = s[:b.end()] + SKIP_LINK.format(id=nid) + s[b.end():]
    return s


# ---------------------------------------------------------------- kiểm
def trong_hover_media(s, i):
    """vị trí i có nằm trong một khối @media (hover:hover) đang mở không (lần ngược theo ngoặc nhọn)"""
    d, j, lim = 0, i, max(0, i - 60000)
    while j > lim:
        j -= 1
        ch = s[j]
        if ch == '}': d += 1
        elif ch == '{':
            if d: d -= 1
            else:
                k = s.rfind('@media', max(0, j - 200), j)
                if k >= 0 and '{' not in s[k:j] and re.search(r'hover:\s*hover', s[k:j]): return True
    return False


HOVER = re.compile(r'(?<![\w(-]hover):hover\b(?!\s*\))')


def kiem_css(rel, s, loi):
    if not mien(rel, 'K1'):
        for m in re.finditer(r'transition:\s*all\b', s): loi.append(f'K1 {rel}: transition: all ({s[max(0, m.start() - 40):m.start()].strip()[-40:]}…)')
    if not mien(rel, 'K2'):
        n = [m.start() for m in HOVER.finditer(s) if re.match(r'[^{};]*\{', s[m.start():m.start() + 300]) and not trong_hover_media(s, m.start())]
        if n: loi.append(f'K2 {rel}: {len(n)} luật :hover ngoài @media (hover:hover), ví dụ …{s[max(0, n[0] - 40):n[0] + 6].strip()}')


def luma(hexa):
    h = hexa.lstrip('#')
    if len(h) == 3: h = ''.join(c * 2 for c in h)
    try: r, g, b = (int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))
    except ValueError: return 1
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def kiem_trang(rel, s, loi):
    kiem_css(rel, s, loi)
    vo, nha = bool(CO_VO.search(s)), CO_NHA in s
    if not mien(rel, 'K3') and re.search(r'outline:\s*(?:none|0)\b', s) and not (':focus-visible' in s or vo or nha): loi.append(f'K3 {rel}: outline: none mà không có :focus-visible thay thế')
    if not mien(rel, 'K4'):
        for t in re.findall(r'<img\b[^>]*>', s):
            if '${' in t or "'+" in t or '"+' in t: continue  # thẻ nằm trong mã JS dựng lúc chạy
            thieu = [a for a in ('alt', 'width', 'height') if not re.search(rf'\s{a}=', t)]
            if thieu: loi.append(f'K4 {rel}: <img> thiếu {", ".join(thieu)}: {t[:90]}')
    vp = re.search(r'<meta name="viewport"[^>]*>', s)
    if not mien(rel, 'K5') and vp and re.search(r'user-scalable\s*=\s*(?:no|0)|maximum-scale\s*=\s*1(?:\.0)?\b', vp.group(0)): loi.append(f'K5 {rel}: chặn phóng to')
    if not mien(rel, 'K6') and not re.search(r'<html[^>]*\slang=', s): loi.append(f'K6 {rel}: <html> thiếu lang')
    tc = re.search(r'<meta name="theme-color" content="([^"]+)"', s)
    if not mien(rel, 'K7') and not tc: loi.append(f'K7 {rel}: thiếu theme-color')
    if not mien(rel, 'K8') and not ('class="bg-skip"' in s or vo): loi.append(f'K8 {rel}: thiếu liên kết bỏ qua tới nội dung')
    if not mien(rel, 'K9') and tc and luma(tc.group(1)) < 0.2 and 'color-scheme' not in s: loi.append(f'K9 {rel}: trang nền tối chưa khai color-scheme')
    if not mien(rel, 'K10') and re.search(r'<(?:div|span)\b[^>]*\sonclick=', s): loi.append(f'K10 {rel}: onclick trên div hoặc span (dùng <button> hoặc <a>)')


def tu_thu():
    """Mỗi luật phải tự chứng minh nó cắn: một trang mẫu đạt cả 10 luật, rồi 10 bản mỗi bản phạm đúng một luật."""
    ok = ('<!doctype html><html lang="vi"><head><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#FFFFFF">'
          '<link rel="stylesheet" href="design/house.css"><style>.a{color:red}@media (hover:hover){.a:hover{color:blue}}</style></head>'
          '<body><a class="bg-skip" href="#m">x</a><main id="m"><img src="a.webp" alt="" width="1" height="1"></main></body></html>')
    pham = {'K1': ('.a{color:red}', '.a{color:red;transition: all .2s}'), 'K2': ('@media (hover:hover){.a:hover{color:blue}}', '.a:hover{color:blue}'),
            'K4': (' width="1" height="1"', ''), 'K5': ('initial-scale=1"', 'initial-scale=1,user-scalable=no"'), 'K6': ('<html lang="vi">', '<html>'),
            'K7': ('<meta name="theme-color" content="#FFFFFF">', ''), 'K8': ('<a class="bg-skip" href="#m">x</a>', ''), 'K9': ('#FFFFFF', '#020203'),
            'K10': ('<main id="m">', '<main id="m"><div onclick="x()">a</div>')}
    def chay(t):
        l = []; kiem_trang('_thu/x.html', t, l); return sorted({x.split()[0] for x in l})
    sai = [] if chay(ok) == [] else [f'trang mẫu bị báo lỗi: {chay(ok)}']
    for k, (a, b) in pham.items():
        if chay(ok.replace(a, b)) != [k]: sai.append(f'{k} không cắn đúng: {chay(ok.replace(a, b))}')
    k3 = ok.replace('<link rel="stylesheet" href="design/house.css">', '').replace('.a{color:red}', '.a{outline:none}')
    if chay(k3) != ['K3']: sai.append(f'K3 không cắn đúng: {chay(k3)}')
    if chay(ok.replace('(hover:hover){.a:hover{color:blue}}', '(hover: hover) and (pointer: fine){.a:hover{color:blue}.b:hover{color:red}}')) != []: sai.append('K2 báo nhầm luật đã nằm trong @media (hover: hover)')
    if sai: sys.exit('vệ sinh giao diện: phép kiểm hỏng\n  ' + '\n  '.join(sai))


def main():
    tu_thu()
    chi_kiem = '--kiem' in sys.argv
    ps, da_sua = trang(), 0
    if not chi_kiem:
        moi = []
        for rel, p, s in ps:
            t = sua(rel, s)
            if t != s: p.write_text(t, encoding='utf-8'); da_sua += 1
            moi.append((rel, p, t))
        ps = moi
    loi = []
    for rel, _, s in ps: kiem_trang(rel, s, loi)
    ts = tai_san()
    for rel, s in ts: kiem_css(rel, s, loi)
    if loi:
        print(f'vệ sinh giao diện: {len(loi)} lỗi'); print('\n'.join('  ' + x for x in loi[:60]))
        if len(loi) > 60: print(f'  … và {len(loi) - 60} lỗi nữa')
        sys.exit(1)
    print(f'vệ sinh giao diện: {len(ps)} trang, {len(ts)} tệp CSS và JS đạt 10 luật' + (f' (vừa sửa {da_sua} trang)' if da_sua else ''))


if __name__ == '__main__':
    main()
