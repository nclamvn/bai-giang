#!/usr/bin/env python3
"""Hai trang pháp lý cho app và site (docs/app-ke-hoach-moc.md, mốc M7: hồ sơ cửa hàng cần đường dẫn chính sách riêng tư).

  chinh-sach-rieng-tu/index.html   Chính sách riêng tư. Nguồn: hằng RIENG_TU dưới đây (ghi đúng những gì app làm, kiểm ngày 24/11/2026:
                                   quyền Android chỉ INTERNET; PeerJS 1.5.4 mặc định 0.peerjs.com, STUN Google, TURN eu-0/us-0.turn.peerjs.com)
  gioi-thieu/index.html            Giới thiệu, nguồn và giấy phép. Nguồn duy nhất: hai mục "## Giấy phép" và "## Nguồn" của README.md

Liên kết trỏ thẳng tới index.html: trong app, máy chủ nội bộ của Capacitor trả trang gốc cho địa chỉ thư mục.
Trang tự chứa (phông và token của design.py nhúng sẵn, không ảnh ngoài) để chạy ngoại tuyến trong app: hai tệp nằm trong phần chung
của gói ngoại tuyến (tools/goi_bai.py APP_CORE) và trong app Android, iOS (tools/build_native.py).
Chạy từ gốc repo:  python3 tools/build_phap_ly.py
"""
import html, pathlib, re, sys
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import design as D

ROOT = pathlib.Path(__file__).resolve().parent.parent
E = lambda s: html.escape(str(s), quote=True)
REPO = 'https://github.com/nclamvn/bai-giang'
GOPY = REPO + '/issues'
HIEU_LUC = '24/11/2026'

# Mỗi mục: (tiêu đề, [đoạn]). Đoạn là HTML tin cậy (do nhóm soạn).
RIENG_TU = [
    ('Tóm tắt', [
        'Sáng Ăn Khoai không thu thập, không lưu trên máy chủ, không bán và không chia sẻ dữ liệu cá nhân của người dùng. '
        'Không có tài khoản, không quảng cáo, không công cụ đo đếm hay theo dõi người dùng, không bán gì trong app.',
    ]),
    ('Dữ liệu chỉ nằm trên máy của bạn', [
        'App và trang web lưu vài thứ ngay trên máy để dùng tiện hơn, không gửi đi đâu: bài đang học và bước đang dừng (để mở lại đúng chỗ), '
        'danh sách bài đã tải về, kiểu kính chọn ở chế độ Lớp học, và bản sao các tệp bài đã tải để học khi mất mạng.',
        'Xoá những dữ liệu này bằng cách gỡ app, hoặc xoá dữ liệu trang trong cài đặt trình duyệt. Màn Đã tải của app xoá được từng bài đã tải.',
    ]),
    ('Quyền app xin', [
        'App Android chỉ xin quyền truy cập Internet. App không xin quyền camera, micro, vị trí, danh bạ, ảnh hay tệp. '
        'Khi đang học, app giữ màn hình sáng; việc này không cần quyền riêng và tắt khi đóng bài.',
    ]),
    ('Khi nào app dùng mạng, và ai nhận được gì', [
        '<b>Tải trang và bài.</b> Site và các bài mở từ site (trong app, bài Cơ thể người) được phục vụ bởi GitHub Pages của GitHub, Inc. '
        'Như với mọi trang web, máy chủ của GitHub nhận địa chỉ IP và thông tin trình duyệt của bạn theo chính sách riêng tư của GitHub. '
        'Các bài nằm sẵn trong app mở không cần mạng.',
        '<b>Điều khiển từ điện thoại ở chế độ Lớp học</b> (chỉ khi giáo viên bấm nút này): app tải thư viện kết nối PeerJS và thư viện mã QR '
        'từ jsDelivr. Hai máy tìm thấy nhau qua máy chủ môi giới công cộng của dự án PeerJS (0.peerjs.com), dùng máy STUN của Google để biết địa chỉ mạng '
        'của nhau, rồi nối thẳng bằng WebRTC; khi mạng chặn kết nối thẳng, dữ liệu có thể đi qua máy chuyển tiếp TURN của PeerJS. '
        'Các máy này thấy địa chỉ IP của hai máy và một mã kết nối tạm 6 ký tự. Thứ được gửi qua kết nối chỉ là lệnh chuyển bước và trạng thái của bài '
        '(tên bài, bước, ghi chú), không có thông tin cá nhân. Mã hết hiệu lực khi thoát chế độ Lớp học.',
        '<b>Màn hình giáo viên trên cùng máy</b> nối hai cửa sổ ngay trong máy, không qua mạng.',
    ]),
    ('Trẻ em và học sinh', [
        'App làm cho học sinh và giáo viên. App không thu thập dữ liệu của bất kỳ ai, kể cả trẻ em, và không có quảng cáo hay liên kết mua bán.',
    ]),
    ('Mã nguồn mở', [
        f'Toàn bộ mã của app và site công khai tại <a href="{REPO}">{REPO.replace("https://", "")}</a>, nên ai cũng kiểm được những điều trên.',
    ]),
    ('Thay đổi và liên hệ', [
        f'Chính sách này có hiệu lực từ {HIEU_LUC}. Mọi thay đổi được ghi trong lịch sử của kho mã trên GitHub. '
        f'Câu hỏi hay góp ý: <a href="{GOPY}">mở một mục góp ý trên GitHub</a>.',
    ]),
]

CSS = r"""
*,*::before,*::after{box-sizing:border-box}
html,body{margin:0;background:var(--bg-page);color:var(--bg-ink);font:400 17px/1.65 var(--bg-font);-webkit-font-smoothing:antialiased}
a{color:var(--bg-ink);text-underline-offset:3px}
:focus-visible{outline:2px solid var(--bg-brand);outline-offset:3px}
.bg-skip{position:absolute;left:12px;top:-60px;padding:10px 14px;border-radius:10px;background:var(--bg-ink);color:var(--bg-page)}
.bg-skip:focus{top:12px}
header{display:flex;align-items:center;gap:16px;max-width:760px;margin:0 auto;padding:calc(20px + env(safe-area-inset-top)) 20px 0}
header .brand{font-weight:600;text-decoration:none;display:inline-flex;align-items:center;min-height:44px}
header .gian{flex:1}
header .ve{display:inline-flex;align-items:center;min-height:44px;padding:0 16px;border-radius:22px;border:1px solid var(--bg-hair2);text-decoration:none;font-size:15px}
main{max-width:760px;margin:0 auto;padding:28px 20px calc(56px + env(safe-area-inset-bottom))}
.k{font:500 13px/1.3 var(--bg-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--bg-ink3)}
h1{margin:8px 0 12px;font-size:clamp(32px,6vw,44px);line-height:1.1;letter-spacing:-.02em;font-weight:600}
h2{margin:36px 0 8px;font-size:21px;line-height:1.3;font-weight:600}
p,li{color:var(--bg-ink2)}
p{margin:0 0 12px}
ul{margin:0 0 12px;padding-left:22px}
li{margin:0 0 8px}
code{font:500 .9em var(--bg-mono)}
.chu{margin-top:44px;padding-top:16px;border-top:1px solid var(--bg-hair);font-size:15px;color:var(--bg-ink3)}
.lien{display:flex;flex-wrap:wrap;gap:8px 20px;margin:20px 0 0}
.lien a{display:inline-flex;align-items:center;min-height:44px}
"""


def khung(tieu_de, mo_ta, than, root='../'):
    return f'''<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{E(tieu_de)} · Sáng Ăn Khoai</title>
<meta name="description" content="{E(mo_ta)}">
<meta name="theme-color" content="#FFFFFF">
<link rel="icon" type="image/png" sizes="32x32" href="{root}design/logo/favicon-32.png">
<style>{D.fontface(root=root + 'design/fonts/')}{D.tokens_css()}{CSS}</style>
</head>
<body>
<a class="bg-skip" href="#noi-dung">Bỏ qua tới nội dung</a>
<header><a class="brand" href="{root}index.html">Sáng Ăn Khoai</a><span class="gian"></span><a class="ve" href="{root}app/index.html#/da-tai">Về app</a></header>
<main id="noi-dung">
{than}
<div class="lien"><a href="{root}chinh-sach-rieng-tu/index.html">Chính sách riêng tư</a><a href="{root}gioi-thieu/index.html">Giới thiệu, nguồn và giấy phép</a><a href="{GOPY}">Góp ý trên GitHub</a></div>
<p class="chu">Sáng Ăn Khoai: bài học 3D tiếng Việt, miễn phí, phi thương mại. © 2026 Nguyễn Cảnh Lâm. Mã MIT.</p>
</main>
</body>
</html>
'''


def md_dong(s):
    """Một dòng markdown của README thành HTML: `mã` (đường dẫn tệp thành liên kết GitHub), [chữ](url), **đậm**, doi."""
    out, i = [], 0
    for m in re.finditer(r'`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|doi:(10\.[^\s,;]+[^\s,;.])', s):
        out.append(E(s[i:m.start()])); i = m.end()
        if m.group(1):
            p = m.group(1)
            out.append(f'<a href="{REPO}/blob/main/{E(p)}"><code>{E(p)}</code></a>' if re.match(r'^[\w.@-]+(/[\w.@-]+)+$|^LICENSE$', p) else f'<code>{E(p)}</code>')
        elif m.group(2): out.append(f'<a href="{E(m.group(3))}">{E(m.group(2))}</a>')
        elif m.group(4): out.append(f'<b>{E(m.group(4))}</b>')
        else: out.append(f'<a href="https://doi.org/{E(m.group(5))}">doi:{E(m.group(5))}</a>')
    out.append(E(s[i:]))
    return ''.join(out)


def muc_readme(ten):
    s = (ROOT / 'README.md').read_text(encoding='utf-8')
    m = re.search(r'^## ' + re.escape(ten) + r'\s*\n(.*?)(?=^## |\Z)', s, re.S | re.M)
    if not m: sys.exit(f'build_phap_ly: README.md thiếu mục "## {ten}"')
    dong = [x[2:].strip() for x in m.group(1).splitlines() if x.startswith('- ')]
    if not dong: sys.exit(f'build_phap_ly: mục "## {ten}" của README.md không có dòng nào')
    return dong


def rieng_tu():
    than = '<span class="k">Áp dụng cho app và site Sáng Ăn Khoai · hiệu lực ' + HIEU_LUC + '</span>\n<h1>Chính sách riêng tư</h1>\n'
    for t, ps in RIENG_TU: than += f'<h2>{E(t)}</h2>\n' + ''.join(f'<p>{p}</p>\n' for p in ps)
    return khung('Chính sách riêng tư', 'Sáng Ăn Khoai không thu thập, không lưu trên máy chủ, không bán và không chia sẻ dữ liệu cá nhân. Không tài khoản, không quảng cáo, không đo đếm người dùng.', than)


def gioi_thieu():
    gp, ng = muc_readme('Giấy phép'), muc_readme('Nguồn')
    than = ('<span class="k">Giới thiệu</span>\n<h1>Sáng Ăn Khoai</h1>\n'
            '<p>Bài học 3D tương tác tiếng Việt cho học sinh và giáo viên: Sinh học, Vật lí, Hoá học, Địa lí, Lịch sử, Công nghệ, Robotics, Mạng. '
            'Cảnh 3D tràn màn hình, học theo từng bước, học được khi mất mạng, chiếu cho cả lớp bằng chế độ Lớp học. '
            'Miễn phí, không quảng cáo, phi thương mại.</p>\n'
            f'<p>Mã nguồn mở tại <a href="{REPO}">{REPO.replace("https://", "")}</a>. Nguồn số liệu và tác giả của từng bài ghi ngay trong bài và trong README của kho mã.</p>\n'
            '<h2>Giấy phép</h2>\n<ul>' + ''.join(f'<li>{md_dong(x)}</li>' for x in gp) + '</ul>\n'
            '<p>Một phần nội dung (54 bài thư viện, một phần mô hình giải phẫu) chỉ được dùng phi thương mại. Vì vậy app và site luôn miễn phí, '
            'không quảng cáo, không bán gì trong app.</p>\n'
            '<h2>Nguồn tài liệu</h2>\n<ul>' + ''.join(f'<li>{md_dong(x)}</li>' for x in ng) + '</ul>\n')
    return khung('Giới thiệu, nguồn và giấy phép', 'Giới thiệu Sáng Ăn Khoai, giấy phép của mã và nội dung, nguồn tài liệu của các bài.', than)


def main():
    for ten, f in (('chinh-sach-rieng-tu', rieng_tu), ('gioi-thieu', gioi_thieu)):
        out = ROOT / ten / 'index.html'; out.parent.mkdir(exist_ok=True)
        s = f()
        if not out.exists() or out.read_text(encoding='utf-8') != s: out.write_text(s, encoding='utf-8')
    print('trang pháp lý: chinh-sach-rieng-tu/, gioi-thieu/')


if __name__ == '__main__':
    main()
