#!/usr/bin/env python3
"""Xuất học phần Thiết kế và hiệu năng mạng thành một site độc lập (repo nclamvn/tel1459), cùng nguồn với site chính.

  python3 tools/xuat_tel1459.py [--out ../tel1459]

Nguồn duy nhất: danh mục 22 tiết (tools/build_thiet_ke_mang.py), giáo án (tools/giao-an-mang/*.json), bài 3D đã dựng
(thiet-ke-mang/<bai>/index.html, robotics/_chung/), vỏ bài (shell/bg-shell.js), phông (design/fonts). Script không dựng lại
bài: chạy sau build_all.py. Site xuất ra có giao diện riêng (phẳng, tối giản), đứng tên học phần và tác giả giáo trình,
không mang nhãn hay đường dẫn của site chính; cuối cùng tự quét mọi tệp và dừng nếu còn dấu vết (NHAN_CAM).
"""
import argparse
import hashlib
import html
import json
import pathlib
import re
import shutil
import subprocess
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import build_thiet_ke_mang as DM          # danh mục 22 tiết
from build_giao_an_mang import load as nap_giao_an

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = 'https://nclamvn.github.io/tel1459/'
TEN = 'Thiết kế và hiệu năng mạng'
MA = 'TEL1459'
TAC_GIA = 'PGS.TS Hoàng Trọng Minh'
BAN = 'Bản dựng 17/11/2026'
E = lambda s: html.escape(str(s), quote=True)
NHAN_CAM = ['Sáng Ăn Khoai', 'Sang An Khoai', 'sang-an-khoai', 'bai-giang', 'thu-vien', 'giao-vien', 'design/logo', 'robotics/_chung',
            'thiet-ke-mang/', 'goi-day', 'dieu-khien']

LOGO = ("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='#0B0F19'/>"
        "<path d='M10 21.5 16 10.5l6 11z' fill='none' stroke='#fff' stroke-width='1.6' stroke-linejoin='round'/>"
        "<circle cx='16' cy='10.5' r='2.7' fill='#5B8CFF'/><circle cx='10' cy='21.5' r='2.7' fill='#fff'/><circle cx='22' cy='21.5' r='2.7' fill='#fff'/></svg>")
LOGO_URI = 'data:image/svg+xml,' + LOGO.replace('#', '%23').replace('<', '%3C').replace('>', '%3E')

# bảng màu phẳng cho vỏ bài 3D: thay token của site chính, không đổ bóng, không kính mờ
TOKEN = {'bg-page': '#FFFFFF', 'bg-surface': '#FFFFFF', 'bg-glass': '#FFFFFF', 'bg-glass-strong': '#FFFFFF', 'bg-ink': '#0B0F19',
         'bg-ink2': '#394150', 'bg-ink3': '#5B6372', 'bg-hair': 'rgba(11,15,25,.10)', 'bg-hair2': 'rgba(11,15,25,.20)',
         'bg-brand': '#0B0F19', 'bg-brand-ink': '#FFFFFF', 'bg-nhan': '#2451D6', 'bg-focus': '#2451D6', 'bg-r-lg': '12px',
         'bg-r-md': '10px', 'bg-r-sm': '8px', 'bg-sh-1': '0 0 0 1px rgba(11,15,25,.08)', 'bg-sh-2': '0 0 0 1px rgba(11,15,25,.10)',
         'bg-blur': 'none'}
PHANG_3D = """<style id="phang">html #app .cp{border-radius:10px!important;box-shadow:none!important;border:1px solid #E7E9EE!important}
html #app .bt{border-radius:8px!important;border-color:#D7DBE2!important}html #app .bt.on{background:#0B0F19!important;border-color:#0B0F19!important;color:#fff!important}
html #app .call{box-shadow:none!important;border:1px solid #E7E9EE;border-radius:6px!important}html #app .tourchip{box-shadow:none!important;border:1px solid #E7E9EE}
html #app .cap .e{border-radius:6px}</style>"""


def phang(css):
    for k, v in TOKEN.items():
        css = re.sub(rf'--{k}:[^;}}]+', f'--{k}:{v}', css)
    return css


# ---------------------------------------------------------------- dữ liệu
def danh_muc():
    """22 tiết theo chương; mỗi tiết biết đã có bài 3D, giáo án chưa."""
    ga = nap_giao_an()
    ga_theo_bia = {g['id']: g for g in ga.values()}
    chuong = []
    for so, ten, ds in DM.CHUONG:
        tiet = []
        for b in ds:
            slug = b[7].strip('/') if b[7] else None
            tiet.append({'n': b[0], 'ten': b[1], 'muc': b[2], 'trang': b[3], 'pt': b[4], 'bt': b[5], 'nd': b[6], 'slug': slug,
                         'id': b[8], 'ga': ga_theo_bia.get(b[8]) if b[8] else None})
        chuong.append({'so': so, 'ten': ten, 'tiet': tiet})
    return chuong


def trang_thai(t):
    if t['ga']: return ('xong', 'Hoàn chỉnh')
    if t['slug']: return ('so-bo', 'Bản sơ bộ')
    return ('soan', 'Đang soạn')


# ---------------------------------------------------------------- giao diện chung (trang mục lục, giáo án)
FONT = lambda up: '\n'.join(
    f"@font-face{{font-family:'{f}';font-style:normal;font-weight:{w};font-display:swap;src:url({up}design/fonts/{s}-{u}-{w}-normal.woff2) format('woff2');unicode-range:{r}}}"
    for f, s, ws in [('Be Vietnam Pro', 'be-vietnam-pro', (400, 500, 600, 700)), ('JetBrains Mono', 'jetbrains-mono', (500, 600))]
    for w in ws for u, r in [('latin', 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'),
                              ('vietnamese', 'U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB')])
CSS = r"""
:root{--ink:#0B0F19;--ink2:#394150;--mut:#6B7280;--line:#E7E9EE;--soft:#F5F6F8;--soft2:#EEF0F3;--bg:#fff;--acc:#2451D6;--acc-soft:#EEF2FF;
--ok:#167A4A;--ok-soft:#E7F4EC;--so:#2451D6;--sans:'Be Vietnam Pro',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;--mono:'JetBrains Mono',ui-monospace,Menlo,monospace}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%;scroll-behavior:smooth;scroll-padding-top:76px}
body{margin:0;background:var(--bg);color:var(--ink);font:400 16px/1.65 var(--sans);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
a{color:inherit;text-underline-offset:3px;text-decoration-thickness:1px}img{display:block;max-width:100%}
.wrap{max-width:1160px;margin:0 auto;padding:0 28px}
.mono{font-family:var(--mono)}.mut{color:var(--mut)}
.top{position:sticky;top:0;z-index:20;background:rgba(255,255,255,.97);border-bottom:1px solid var(--line)}
.top .in{display:flex;align-items:center;gap:12px;height:64px}
.brand{display:flex;align-items:center;gap:11px;text-decoration:none;min-width:0}
.brand img{width:30px;height:30px;flex:none}.brand b{display:block;font-weight:600;font-size:15px;letter-spacing:-.01em;line-height:1.2;white-space:nowrap}
.brand small{display:block;font:500 11px/1.3 var(--mono);color:var(--mut);letter-spacing:.06em}
.crumb{display:flex;align-items:center;gap:10px;color:var(--mut);font-size:14px;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.crumb:before{content:'';width:1px;height:20px;background:var(--line);flex:none}
.sp{flex:1}.links{display:flex;gap:2px}.links a{padding:8px 12px;border-radius:8px;text-decoration:none;font-size:14px;color:var(--ink2);font-weight:500}
.links a:hover{background:var(--soft);color:var(--ink)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:40px;padding:0 16px;border-radius:10px;border:1px solid var(--line);background:#fff;
font:600 14px/1 var(--sans);color:var(--ink);text-decoration:none;cursor:pointer;white-space:nowrap;transition:border-color .15s,background .15s}
.btn:hover{border-color:#C6CBD3}.btn.pri{background:var(--ink);border-color:var(--ink);color:#fff}.btn.pri:hover{background:#232A38;border-color:#232A38}
.btn.sm{height:34px;padding:0 13px;font-size:13px;border-radius:8px}.btn svg{width:16px;height:16px;flex:none}
.btn[aria-disabled=true]{color:#A0A6B1;border-style:dashed;pointer-events:none}
.eye{font:500 12px/1.4 var(--mono);letter-spacing:.09em;text-transform:uppercase;color:var(--mut)}
h1{font-size:clamp(36px,5.2vw,60px);line-height:1.04;letter-spacing:-.04em;font-weight:700;margin:16px 0 18px}
h2{font-size:clamp(24px,2.6vw,30px);letter-spacing:-.028em;line-height:1.2;margin:0;font-weight:700}
h3{font-size:18px;letter-spacing:-.015em;line-height:1.35;margin:0;font-weight:600}
.lead{font-size:18px;line-height:1.65;color:var(--ink2);max-width:720px;margin:0}
section{padding:72px 0;border-top:1px solid var(--line)}section.first{border-top:0}
.sh{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:28px;flex-wrap:wrap}.sh p{margin:6px 0 0;color:var(--mut);max-width:640px}
.chip{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 9px;border-radius:999px;font:600 11.5px/1 var(--sans);white-space:nowrap}
.chip:before{content:'';width:6px;height:6px;border-radius:50%;background:currentColor}
.chip.xong{background:var(--ok-soft);color:var(--ok)}.chip.so-bo{background:var(--acc-soft);color:var(--so)}.chip.soan{background:var(--soft);color:var(--mut)}
.foot{border-top:1px solid var(--line);padding:32px 0 48px;color:var(--mut);font-size:13.5px}.foot .in{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
@media (max-width:720px){.wrap{padding:0 18px}.links{display:none}section{padding:52px 0}.lead{font-size:16.5px}.brand small{display:none}}
"""
ICON = {
    'play': '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z"/></svg>',
    'doc': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3.5H7a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8z"/><path d="M14 3.5V8h4.5M9 12.5h6M9 16h6"/></svg>',
    'print': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 8.5V3.5h10v5M7 17H5a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 5 9h14a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 19 17h-2"/><path d="M7 14h10v6.5H7z"/></svg>',
    'arrow': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    'back': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
}


def dau_trang(up, title, desc, extra_css=''):
    return f'''<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{E(title)}</title>
<meta name="description" content="{E(desc)}">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#FFFFFF">
<meta property="og:title" content="{E(title)}"><meta property="og:description" content="{E(desc)}"><meta property="og:site_name" content="{E(TEN)}">
<link rel="icon" href="{up}favicon.svg" type="image/svg+xml">
<style>{FONT(up)}{CSS}{extra_css}</style>
</head>'''


def thanh(up, crumb='', right=''):
    c = f'<span class="crumb">{crumb}</span>' if crumb else ''
    return f'''<header class="top"><div class="wrap in">
  <a class="brand" href="{up or './'}"><img src="{up}favicon.svg" alt="" width="30" height="30"><span><b>{TEN}</b><small>{MA}</small></span></a>{c}
  <span class="sp"></span>{right}
</div></header>'''


def chan():
    return f'''<footer class="foot"><div class="wrap in"><span>{TEN} · {MA} · Theo giáo trình của {TAC_GIA}</span><span>{BAN}</span></div></footer>'''


# ---------------------------------------------------------------- trang mục lục
CSS_MUC = r"""
.hero{padding:72px 0 64px;display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:64px;align-items:end}
.hero .by{margin:22px 0 0;font-size:15px;color:var(--ink2)}.hero .by b{font-weight:600;color:var(--ink)}
.hero .cta{display:flex;gap:10px;margin-top:30px;flex-wrap:wrap}
.map{border:1px solid var(--line);border-radius:14px;padding:22px 22px 18px}
.map .r{display:grid;grid-template-columns:28px 1fr;align-items:center;gap:10px;padding:7px 0}
.map .r>span{font:600 12px var(--mono);color:var(--mut)}.map .cells{display:flex;gap:6px;flex-wrap:wrap}
.map a,.map i{width:34px;height:34px;border-radius:8px;display:grid;place-items:center;font:600 12px var(--mono);text-decoration:none;font-style:normal}
.map .xong{background:var(--ink);color:#fff}.map .so-bo{background:#fff;color:var(--ink);box-shadow:inset 0 0 0 1.5px var(--ink)}
.map .soan{color:#A0A6B1;box-shadow:inset 0 0 0 1px var(--line);background:var(--soft)}
.map a:hover{transform:translateY(-1px)}.map .lg{display:flex;gap:16px;flex-wrap:wrap;margin-top:14px;padding-top:14px;border-top:1px solid var(--line);font-size:12.5px;color:var(--mut)}
.map .lg span{display:flex;align-items:center;gap:7px}.map .lg i{width:12px;height:12px;border-radius:3px}
.stats{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.stats div{padding:22px 0 22px 22px;border-left:1px solid var(--line)}.stats div:first-child{border-left:0;padding-left:0}
.stats b{display:block;font-size:34px;font-weight:700;letter-spacing:-.03em;line-height:1.1}.stats span{font-size:13.5px;color:var(--mut)}
.ch{padding:64px 0 8px;border-top:0}.ch+.ch{border-top:1px solid var(--line)}
.ch-h{display:grid;grid-template-columns:72px 1fr;gap:8px;margin-bottom:22px}.ch-h .num{font:600 15px var(--mono);color:var(--acc);padding-top:6px}
.ch-h p{margin:6px 0 0;color:var(--mut);font-size:14.5px}
.tiet{list-style:none;margin:0 0 0 72px;padding:0}
.t{display:grid;grid-template-columns:176px minmax(0,1fr) auto;gap:24px;align-items:center;padding:20px 0;border-top:1px solid var(--line)}
.t:first-child{border-top:0}
.t .th{aspect-ratio:3/2;border-radius:10px;overflow:hidden;background:var(--soft);display:block}
.t .th img{width:100%;height:100%;object-fit:cover}.t .th.trong{display:grid;place-items:center;box-shadow:inset 0 0 0 1px var(--line);font:600 12px var(--mono);color:#A0A6B1}
.t .k{font:500 12px var(--mono);color:var(--mut);letter-spacing:.02em}.t h3{margin:4px 0 6px}.t h3 a{text-decoration:none}.t h3 a:hover{text-decoration:underline}
.t p{margin:0;color:var(--ink2);font-size:14.5px;line-height:1.55}.t .pt{margin-top:8px;font:500 12.5px/1.5 var(--mono);color:var(--mut)}
.t .act{display:flex;flex-direction:column;align-items:flex-end;gap:10px}.t .act .b{display:flex;gap:8px}
.cach{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cach div{border:1px solid var(--line);border-radius:14px;padding:22px}
.cach b{font:600 13px var(--mono);color:var(--acc)}.cach h3{margin:10px 0 8px}.cach p{margin:0;color:var(--ink2);font-size:14.5px}
.cach kbd{font:600 12px var(--mono);border:1px solid var(--line);border-bottom-width:2px;border-radius:6px;padding:1px 6px;background:#fff}
.ng{display:grid;grid-template-columns:1fr 1fr;gap:48px}.ng ul{margin:0;padding:0;list-style:none}.ng li{padding:12px 0;border-top:1px solid var(--line);color:var(--ink2);font-size:15px}
.ng li:first-child{border-top:0;padding-top:0}
@media (max-width:980px){.hero{grid-template-columns:1fr;gap:40px;padding-top:48px}.t{grid-template-columns:120px minmax(0,1fr)}.t .act{grid-column:1/-1;flex-direction:row;justify-content:space-between;align-items:center}
.tiet{margin-left:0}.ch-h{grid-template-columns:52px 1fr}.cach{grid-template-columns:1fr}.ng{grid-template-columns:1fr;gap:28px}}
@media (max-width:600px){.t .th{aspect-ratio:16/9}.stats{grid-template-columns:1fr 1fr}.stats div:nth-child(3){border-left:0;padding-left:0}.stats div:nth-child(n+3){border-top:1px solid var(--line)}
.t{grid-template-columns:1fr;gap:14px}.t .th{max-width:100%}.t .act{flex-wrap:wrap;gap:10px}.map a,.map i{width:30px;height:30px}}
"""


def trang_muc_luc(chuong):
    tat = [t for c in chuong for t in c['tiet']]
    xong = sum(1 for t in tat if t['ga'])
    co_bai = sum(1 for t in tat if t['slug'])
    cells = []
    for c in chuong:
        o = ''.join((f'<a class="{trang_thai(t)[0]}" href="#tiet-{t["n"]}" title="Tiết {t["n"]} · {E(t["ten"])} · {trang_thai(t)[1]}">{t["n"]}</a>')
                    for t in c['tiet'])
        cells.append(f'<div class="r"><span>C{c["so"]}</span><div class="cells">{o}</div></div>')
    sections = []
    for c in chuong:
        items = []
        for t in c['tiet']:
            st, nhan = trang_thai(t)
            th = (f'<a class="th" href="{t["slug"]}/" tabindex="-1" aria-hidden="true"><img src="anh/{t["id"]}.webp" alt="" loading="lazy"></a>' if t['slug']
                  else '<span class="th trong">Đang soạn</span>')
            ten = f'<a href="{t["slug"]}/">{E(t["ten"])}</a>' if t['slug'] else E(t['ten'])
            b3d = f'<a class="btn sm pri" href="{t["slug"]}/">{ICON["play"]}Bài 3D</a>' if t['slug'] else '<span class="btn sm" aria-disabled="true">Bài 3D</span>'
            ga = f'<a class="btn sm" href="{t["slug"]}/giao-an/">{ICON["doc"]}Giáo án</a>' if t['ga'] else '<span class="btn sm" aria-disabled="true">Giáo án</span>'
            items.append(f'''<li class="t" id="tiet-{t["n"]}">{th}
  <div><div class="k">Tiết {t["n"]:02d} · mục {E(t["muc"])} · tr. {E(t["trang"])}</div><h3>{ten}</h3><p>{E(t["nd"])}</p>
  <div class="pt">PT {E(t["pt"])} · Bài tập {E(t["bt"])}</div></div>
  <div class="act"><span class="chip {st}">{nhan}</span><div class="b">{b3d}{ga}</div></div></li>''')
        sections.append(f'''<section class="ch" id="chuong-{c["so"]}"><div class="wrap">
  <div class="ch-h"><span class="num">{int(c["so"]):02d}</span><div><h2>{E(c["ten"])}</h2><p>{len(c["tiet"])} tiết · tiết {c["tiet"][0]["n"]}–{c["tiet"][-1]["n"]}</p></div></div>
  <ol class="tiet">{"".join(items)}</ol>
</div></section>''')
    ng = ''.join(f'<li>{E(x)}</li>' for x in DM.KIEM)
    desc = f'Học phần {TEN} ({MA}): 22 tiết bài giảng 3D tương tác và giáo án 45 phút, theo giáo trình của {TAC_GIA}.'
    return f'''{dau_trang('', f'{TEN} · {MA}', desc, CSS_MUC)}
<body>
{thanh('', right='<nav class="links"><a href="#chuong-1">Tiết học</a><a href="#cach-dung">Cách dùng</a><a href="#noi-dung">Về nội dung</a></nav>')}
<main>
<div class="wrap"><div class="hero">
  <div>
    <div class="eye">{MA} · Học phần đại học · 22 tiết</div>
    <h1>{TEN}</h1>
    <p class="lead">Bài giảng 3D tương tác và giáo án 45 phút cho từng tiết học. Mỗi con số trên màn hình được tính từ mô hình thật: hàng đợi, độ sẵn sàng, ngân sách quang, vô tuyến.</p>
    <p class="by">Theo giáo trình của <b>{TAC_GIA}</b></p>
    <div class="cta"><a class="btn pri" href="#chuong-1">{ICON["arrow"]}Xem 22 tiết</a><a class="btn" href="{tat[0]["slug"]}/">{ICON["play"]}Mở tiết 1</a></div>
  </div>
  <div class="map" aria-label="Tiến độ 22 tiết theo chương">
    {"".join(cells)}
    <div class="lg"><span><i style="background:var(--ink)"></i>Hoàn chỉnh · {xong}</span><span><i style="box-shadow:inset 0 0 0 1.5px var(--ink)"></i>Bản sơ bộ · {co_bai - xong}</span><span><i style="background:var(--soft);box-shadow:inset 0 0 0 1px var(--line)"></i>Đang soạn · {len(tat) - co_bai}</span></div>
  </div>
</div>
<div class="stats"><div><b>22</b><span>tiết, mỗi tiết 45 phút</span></div><div><b>6</b><span>chương</span></div><div><b>146</b><span>công thức giữ đúng số hiệu</span></div><div><b>74</b><span>câu hỏi cuối chương</span></div></div>
</div>
{"".join(sections)}
<section id="cach-dung"><div class="wrap">
  <div class="sh"><div><div class="eye">Cách dùng</div><h2 style="margin-top:10px">Một tiết học trên lớp</h2><p>Mỗi tiết hoàn chỉnh gồm bài 3D có lời giảng từng bước và giáo án in được, cùng tên bước và thứ tự.</p></div></div>
  <div class="cach">
    <div><b>01</b><h3>Mở bài 3D trên máy chiếu</h3><p>Bài tự chạy như một bài giảng. Bấm vào cảnh để tự điều khiển; <kbd>←</kbd> <kbd>→</kbd> chuyển bước, <kbd>B</kbd> màn đen, <kbd>F</kbd> toàn màn hình.</p></div>
    <div><b>02</b><h3>Bật màn hình giảng viên</h3><p>Nút <b>Lên lớp</b> mở cửa sổ riêng cho máy giảng viên: phút dự kiến, việc của giảng viên và sinh viên ở từng bước, đồng hồ tiết học.</p></div>
    <div><b>03</b><h3>In giáo án và phiếu</h3><p>Giáo án có mục tiêu, diễn tiến theo phút, ví dụ giải mẫu, phiếu bài tập A4 lấy câu hỏi cuối chương, đáp án và câu kiểm tra nhanh.</p></div>
  </div>
</div></section>
<section id="noi-dung"><div class="wrap">
  <div class="sh"><div><div class="eye">Về nội dung</div><h2 style="margin-top:10px">Bám giáo trình, kiểm bằng máy</h2></div></div>
  <div class="ng">
    <ul>{ng}</ul>
    <ul><li>Lời giảng viết mới theo giáo trình {TEN} ({MA}) của {TAC_GIA}; không chép văn bản hay hình của sách.</li>
      <li>Công thức giữ đúng số hiệu của giáo trình để sinh viên tra lại.</li>
      <li>Tiết <b>hoàn chỉnh</b> có bài 3D 13 bước và giáo án. Tiết <b>sơ bộ</b> có bài 3D, lời giảng đang được viết lại theo chuẩn tiết 45 phút.</li>
      <li>Chạy trên trình duyệt Chrome hoặc Edge bản mới, không cần cài đặt.</li></ul>
  </div>
</div></section>
</main>
{chan()}
</body>
</html>
'''


# ---------------------------------------------------------------- trang giáo án
CSS_GA = r"""
.gh{padding:56px 0 48px;display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:48px;align-items:start}
.gh h1{font-size:clamp(30px,4vw,46px);margin:14px 0 16px}
.meta{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));margin-top:28px;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.meta div{padding:14px 14px 14px 0;font-size:14px;line-height:1.45}.meta div+div{padding-left:14px;border-left:1px solid var(--line)}
.meta b{display:block;font:500 11px var(--mono);letter-spacing:.07em;text-transform:uppercase;color:var(--mut);margin-bottom:4px}
.cov{position:relative;border-radius:14px;overflow:hidden;background:var(--soft);aspect-ratio:3/2}.cov img{width:100%;height:100%;object-fit:cover}
.cov .btn{position:absolute;left:16px;bottom:16px}
.lay{display:grid;grid-template-columns:200px minmax(0,1fr);gap:56px;padding-bottom:24px}
.toc{position:sticky;top:92px;align-self:start;display:flex;flex-direction:column;gap:2px;font-size:14px}
.toc a{padding:7px 12px;border-radius:8px;text-decoration:none;color:var(--mut);border-left:2px solid transparent}.toc a:hover{color:var(--ink);background:var(--soft)}
.blk{padding:44px 0;border-top:1px solid var(--line)}.blk:first-child{border-top:0;padding-top:8px}.blk>h2{margin-bottom:6px}.blk>.sub{margin:0 0 22px;color:var(--mut);font-size:15px}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:40px}.g2 h3{margin-bottom:10px}
ul.li{margin:0;padding:0;list-style:none}ul.li li{position:relative;padding:8px 0 8px 22px;border-top:1px solid var(--line);color:var(--ink2);font-size:15px}
ul.li li:first-child{border-top:0}ul.li li:before{content:'';position:absolute;left:2px;top:17px;width:8px;height:8px;border-radius:2px;background:var(--acc)}
.tl{display:flex;gap:3px;margin:0 0 28px;height:56px}.tl a{display:flex;flex-direction:column;justify-content:center;padding:0 12px;border-radius:8px;text-decoration:none;min-width:0;overflow:hidden;background:var(--soft)}
.tl a:nth-child(even){background:var(--soft2)}.tl a:hover{background:var(--acc-soft)}
.tl b{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tl span{font:500 11.5px var(--mono);color:var(--mut)}
.hd{margin:0 0 28px}.hd>header{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;padding-bottom:12px;border-bottom:1.5px solid var(--ink)}
.hd>header .n{font:600 13px var(--mono);color:var(--acc)}.hd>header .m{margin-left:auto;font:500 13px var(--mono);color:var(--mut)}
.hd>p{margin:12px 0 4px;color:var(--ink2);font-size:15px}
.row{display:grid;grid-template-columns:84px minmax(0,.9fr) minmax(0,1.5fr) minmax(0,1fr);gap:20px;padding:16px 0;border-bottom:1px solid var(--line);font-size:14.5px;line-height:1.6}
.row .m{font:600 13px var(--mono)}.row .m span{display:block;font-weight:500;color:var(--mut);font-size:11.5px}
.row .t{font-weight:600}.row .t small{display:block;font:500 11.5px var(--mono);color:var(--mut);margin-bottom:2px}
.row .k{display:none;font:500 11px var(--mono);letter-spacing:.07em;text-transform:uppercase;color:var(--mut);margin-bottom:2px}
.row .sv{color:var(--ink2)}.th{display:grid;grid-template-columns:84px minmax(0,.9fr) minmax(0,1.5fr) minmax(0,1fr);gap:20px;padding:14px 0 8px;font:500 11px var(--mono);letter-spacing:.07em;text-transform:uppercase;color:var(--mut);border-bottom:1px solid var(--line)}
.kq{margin-top:12px;font-size:14px;color:var(--ink2)}.kq b{color:var(--ink)}
.vd{padding:22px 0;border-top:1px solid var(--line)}.vd:first-child{border-top:0;padding-top:0}.vd h3{margin-bottom:8px}.vd h3 span{font:600 13px var(--mono);color:var(--acc);margin-right:10px}
.vd .de{margin:0 0 12px;color:var(--ink2)}.vd .giai{background:var(--soft);border-radius:10px;padding:14px 18px;font-size:15px}
.vd .giai:before{content:'Lời giải';display:block;font:500 11px var(--mono);letter-spacing:.07em;text-transform:uppercase;color:var(--mut);margin-bottom:6px}
.ans{display:grid;grid-template-columns:40px 1fr;margin:0}.ans dt{font:600 14px var(--mono);color:var(--acc);padding:14px 0;border-top:1px solid var(--line)}
.ans dd{margin:0;padding:14px 0;border-top:1px solid var(--line);color:var(--ink2);font-size:15px}.ans dt:first-of-type,.ans dd:first-of-type{border-top:0;padding-top:0}
.qz{padding:16px 0;border-top:1px solid var(--line)}.qz:first-child{border-top:0;padding-top:0}.qz p{margin:0 0 8px;font-weight:600}
.qz ol{margin:0 0 8px;padding-left:22px;color:var(--ink2)}.qz details{font-size:14.5px;color:var(--ink2)}.qz summary{cursor:pointer;color:var(--acc);font-weight:600;font-size:13.5px}
.src li{font-size:14px}
.nav2{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:40px 0 64px;border-top:1px solid var(--line)}
.nav2 a{border:1px solid var(--line);border-radius:12px;padding:18px 20px;text-decoration:none}.nav2 a:hover{border-color:#C6CBD3}.nav2 a.r{text-align:right}
.nav2 small{display:block;font:500 12px var(--mono);color:var(--mut);margin-bottom:4px}.nav2 b{font-weight:600}
/* phiếu A4 */
.sheet-wrap{overflow:hidden;border:1px solid var(--line);border-radius:12px;background:var(--soft);padding:20px}
.sheet-zoom{width:210mm;transform-origin:0 0;transform:scale(var(--z,1));margin-bottom:calc((var(--z,1) - 1) * 297mm)}
.paper{width:210mm;min-height:297mm;background:#fff;padding:14mm 16mm;font:10.5pt/1.5 var(--sans);color:#0B0F19;box-shadow:0 0 0 1px var(--line)}
.paper header{display:flex;justify-content:space-between;gap:10mm;align-items:flex-start;border-bottom:1.2pt solid #0B0F19;padding-bottom:4mm;margin-bottom:6mm}
.paper .k{font:500 8pt var(--mono);letter-spacing:.06em;text-transform:uppercase;color:#6B7280}.paper h4{margin:1.5mm 0 0;font-size:13pt;letter-spacing:-.01em}
.paper .who{display:grid;grid-template-columns:auto 52mm;gap:2mm 3mm;font-size:9pt;align-items:end}.paper .who span{white-space:nowrap}.paper header>div:first-child{flex:1;min-width:0}.paper .who i{border-bottom:.6pt solid #9AA1AC;height:5mm}
.paper .q{margin:0 0 4mm}.paper .q .d{display:flex;gap:2mm}.paper .q .s{color:#6B7280;font-size:8.5pt}
.paper .ln{border-bottom:.5pt solid #C9CED6;height:7.4mm}
.paper footer{display:flex;justify-content:space-between;margin-top:6mm;padding-top:3mm;border-top:.6pt solid #C9CED6;font-size:8pt;color:#6B7280}
@media (max-width:980px){.gh{grid-template-columns:1fr}.lay{grid-template-columns:1fr}.toc{display:none}.meta{grid-template-columns:repeat(2,minmax(0,1fr))}.meta div:nth-child(odd){border-left:0;padding-left:0}
.meta div{border-top:1px solid var(--line)}.meta div:nth-child(-n+2){border-top:0}.g2{grid-template-columns:1fr;gap:24px}
.th{display:none}.row{grid-template-columns:1fr;gap:6px}.row .k{display:block;margin-top:6px}.tl{height:auto;flex-wrap:wrap}.tl a{flex:1 1 40%!important;padding:10px 12px}}
@media (max-width:600px){.nav2{grid-template-columns:1fr}.top .btn .l{display:none}.top .btn{padding:0 11px}}
@media print{@page{size:A4;margin:14mm}body{font-size:10.5pt}.top,.toc,.cov .btn,.noprint,.nav2,.foot{display:none!important}.gh{padding:0 0 6mm;grid-template-columns:1fr}.cov{display:none}
.lay{display:block}.blk{padding:6mm 0;break-inside:auto}.row,.vd,.qz{break-inside:avoid}.qz details{display:block}.qz details>*{display:block}
#phieu{break-before:page}.sheet-wrap{border:0;padding:0;background:none}.sheet-zoom{transform:none;margin:0}.paper{box-shadow:none;padding:0;min-height:auto;width:auto}
body.in-phieu main>*:not(.lay),body.in-phieu .lay>*:not(.ct),body.in-phieu .ct>*:not(#phieu),body.in-phieu #phieu>*:not(.sheet-wrap){display:none!important}body.in-phieu #phieu{break-before:auto;padding:0;border:0}}
"""


def phieu(g):
    q = ''.join(f'<div class="q"><div class="d"><b>{E(x["so"])}.</b><span>{x["de"]}{f" <span class=s>({E(x["nguon"])})</span>" if x.get("nguon") else ""}</span></div>'
                + '<div class="ln"></div>' * x.get('dong', 3) + '</div>' for x in g['bai_tap'])
    return f'''<div class="paper" lang="vi">
  <header><div><div class="k">{TEN} · {MA} · Tiết {g["tiet"]} · Phiếu bài tập</div><h4>{E(g["ten_tiet"])}</h4></div>
    <div class="who"><span>Họ tên</span><i></i><span>Mã sinh viên</span><i></i></div></header>
  {q}
  <footer><span>Giáo trình {MA}, mục {E(g["muc"])}, tr. {E(g["trang"])}</span><span>{TAC_GIA}</span></footer>
</div>'''


def trang_giao_an(g, t, truoc, sau):
    nb = len(g['buoc'])
    tl = ''.join(f'<a href="#hd-{k}" style="flex:{h["den"] - h["tu"]}"><b>{E(h["ten"])}</b><span>{h["tu"]}–{h["den"]} phút</span></a>' for k, h in enumerate(g['hoat_dong']))
    hds = []
    for k, h in enumerate(g['hoat_dong']):
        rows = []
        for i in h['buoc']:
            if any(i in hh['buoc'] for hh in g['hoat_dong'][:k]): continue
            x = g['buoc'][i - 1]
            rows.append(f'<div class="row"><div class="m">{x["tu"]}–{x["den"]}<span>{x["den"] - x["tu"]} phút</span></div>'
                        f'<div class="t"><small>Bước {i}/{nb}</small>{E(x["t"])}</div>'
                        f'<div class="gv"><span class="k">Giảng viên</span>{x["gv"]}</div><div class="sv"><span class="k">Sinh viên</span>{x["sv"]}</div></div>')
        hds.append(f'''<div class="hd" id="hd-{k}"><header><span class="n">{k + 1:02d}</span><h3>{E(h["ten"])}</h3><span class="m">{h["tu"]}–{h["den"]} phút</span></header>
  <p>{E(h["muc"])}</p><div class="th"><span>Phút</span><span>Trên màn chiếu</span><span>Giảng viên</span><span>Sinh viên</span></div>{"".join(rows)}
  <div class="kq"><b>Kết quả:</b> {E(h["san_pham"])}</div></div>''')
    vd = ''.join(f'<div class="vd"><h3><span>{k + 1:02d}</span>{E(x["ten"])}</h3><p class="de">{x["de"]}</p><div class="giai">{x["giai"]}</div></div>' for k, x in enumerate(g['vi_du']))
    da = ''.join(f'<dt>{E(x["so"])}</dt><dd>{x["giai"]}</dd>' for x in g['dap_an'])
    qz = ''.join(f'<div class="qz"><p>{k + 1}. {E(q["q"])}</p><ol type="A">{"".join(f"<li>{E(o)}</li>" for o in q["o"])}</ol><details><summary>Đáp án</summary><b>{"ABCDEF"[q["a"]]}.</b> {q["giai"]}</details></div>'
                 for k, q in enumerate(g['kiem_tra']))
    meta = ''.join(f'<div><b>{a}</b>{E(b)}</div>' for a, b in [('Chương', g['chuong'].split('·')[0].strip()), ('Mục', g['muc']), ('Trang', g['trang']), ('Phương trình', g['pt']), ('Bài tập', g['bt_sach'])])
    nav = ''
    if truoc or sau:
        a = (f'<a href="../../{truoc["slug"]}/giao-an/"><small>← Tiết {truoc["n"]}</small><b>{E(truoc["ga"]["ten_tiet"])}</b></a>' if truoc else '<span></span>')
        b = (f'<a class="r" href="../../{sau["slug"]}/giao-an/"><small>Tiết {sau["n"]} →</small><b>{E(sau["ga"]["ten_tiet"])}</b></a>' if sau else '<span></span>')
        nav = f'<nav class="nav2 wrap" aria-label="Giáo án khác">{a}{b}</nav>'
    title = f'Giáo án tiết {g["tiet"]} · {g["ten_tiet"]} · {TEN}'
    desc = f'Giáo án 45 phút, tiết {g["tiet"]} học phần {TEN}: {g["ten_tiet"]}. Mục tiêu, diễn tiến theo phút, ví dụ giải mẫu, phiếu bài tập, đáp án và kiểm tra nhanh.'
    up = '../../'
    right = (f'<button class="btn sm noprint" type="button" data-print="gv">{ICON["print"]}<span class="l">In giáo án</span></button>'
             f'<button class="btn sm noprint" type="button" data-print="phieu">{ICON["print"]}<span class="l">In phiếu</span></button>'
             f'<a class="btn sm pri" href="../">{ICON["play"]}<span class="l">Mở bài 3D</span></a>')
    return f'''{dau_trang(up, title, desc, CSS_GA)}
<body>
{thanh(up, f'Tiết {g["tiet"]} · Giáo án', right)}
<main>
<div class="wrap"><div class="gh">
  <div>
    <div class="eye">Tiết {g["tiet"]:02d} / 22 · Giáo án 45 phút</div>
    <h1>{E(g["ten_tiet"])}</h1>
    <p class="lead">{E(g["dan"])}</p>
    <div class="meta">{meta}</div>
  </div>
  <div class="cov"><img src="{up}anh/{E(g["id"])}.webp" alt="Cảnh 3D của bài {E(g["ten_bai"])}"><a class="btn pri" href="../">{ICON["play"]}Mở bài 3D: {E(g["ten_bai"])}</a></div>
</div></div>
<div class="wrap lay">
  <nav class="toc" aria-label="Các phần"><a href="#muc-tieu">Mục tiêu</a><a href="#dien-tien">Diễn tiến 45 phút</a><a href="#vi-du">Ví dụ giải mẫu</a><a href="#phieu">Phiếu bài tập</a><a href="#dap-an">Đáp án</a><a href="#kiem-tra">Kiểm tra nhanh</a><a href="#tom-tat">Tóm tắt, nguồn</a></nav>
  <div class="ct">
    <div class="blk" id="muc-tieu"><h2>Mục tiêu và chuẩn bị</h2><p class="sub">Dùng cùng bài 3D <a href="../">{E(g["ten_bai"])}</a>; nút Lên lớp trong bài mở màn hình giảng viên với phút và việc từng bước.</p>
      <div class="g2"><div><h3>Sau tiết học, sinh viên có thể</h3><ul class="li">{"".join(f"<li>{E(x)}</li>" for x in g["muc_tieu"])}</ul></div>
      <div><h3>Kiến thức cần có</h3><ul class="li">{"".join(f"<li>{E(x)}</li>" for x in g["can_co"])}</ul>
        <h3 style="margin-top:24px">Chuẩn bị</h3><ul class="li">{"".join(f"<li>{E(x)}</li>" for x in g["chuan_bi"]["gv"])}{"".join(f"<li>Sinh viên: {E(x)}</li>" for x in g["chuan_bi"]["sv"])}</ul></div></div></div>
    <div class="blk" id="dien-tien"><h2>Diễn tiến 45 phút</h2><p class="sub">Mỗi dòng là một bước trên màn chiếu, cùng tên và thứ tự với bài 3D. Phút là gợi ý; giảng viên chủ động co giãn.</p>
      <div class="tl" aria-label="Phân bổ thời gian">{tl}</div>{"".join(hds)}</div>
    <div class="blk" id="vi-du"><h2>Ví dụ giải mẫu</h2><p class="sub">Giải trên bảng trong tiết; số liệu đã kiểm bằng máy cùng công thức của bài 3D.</p>{vd}</div>
    <div class="blk" id="phieu"><h2>Phiếu bài tập</h2><p class="sub">Một trang A4. Làm trên lớp phần đầu, phần còn lại về nhà.</p><div class="sheet-wrap"><div class="sheet-zoom">{phieu(g)}</div></div></div>
    <div class="blk" id="dap-an"><h2>Đáp án và gợi ý chấm</h2><dl class="ans">{da}</dl></div>
    <div class="blk" id="kiem-tra"><h2>Kiểm tra nhanh cuối tiết</h2><p class="sub">{len(g["kiem_tra"])} câu, khoảng 3 phút. Mở đáp án sau khi lớp trả lời.</p>{qz}</div>
    <div class="blk" id="tom-tat"><h2>Tóm tắt và nguồn</h2><div class="g2"><div><h3>Ghi nhớ</h3><ul class="li">{"".join(f"<li>{x}</li>" for x in g["tom_tat"])}</ul></div>
      <div><h3>Nguồn</h3><ul class="li src">{"".join(f"<li>{E(x)}</li>" for x in g["nguon"])}</ul></div></div></div>
  </div>
</div>
{nav}
</main>
{chan()}
<script>
(function(){{
  var z=document.querySelector('.sheet-zoom'),w=document.querySelector('.sheet-wrap');
  function fit(){{var mm=210*96/25.4;z.style.setProperty('--z',Math.min(1,(w.clientWidth-40)/mm).toFixed(3))}}
  fit();addEventListener('resize',fit);
  document.querySelectorAll('[data-print]').forEach(function(b){{b.addEventListener('click',function(){{
    document.body.classList.toggle('in-phieu',b.dataset.print==='phieu');window.print();}})}});
  addEventListener('afterprint',function(){{document.body.classList.remove('in-phieu')}});
}})();
</script>
</body>
</html>
'''


# ---------------------------------------------------------------- bài 3D: lấy bản đã dựng, thay vỏ và đường dẫn
def vo_bai():
    """Vỏ bài (shell/bg-shell.js) mang tên học phần: đổi tên, logo, bảng màu; bỏ điều khiển bằng điện thoại (trang đó chỉ có ở site chính)."""
    s = (ROOT / 'shell/bg-shell.js').read_text(encoding='utf-8')
    s = re.sub(r'^/\*.*?\*/\n', '', s, count=1, flags=re.S)  # chú thích đầu tệp
    thay = [
        ("const SITE = 'https://nclamvn.github.io/bai-giang/';", f"const SITE = '{SITE}';"),
        ("const REMOTE_URL = SITE + 'dieu-khien/';", "const REMOTE_URL = SITE;"),
        ('aria-label="Về trang chính Sáng Ăn Khoai" title="Trang chính Sáng Ăn Khoai">${LOGO}<b>Sáng Ăn Khoai</b>',
         f'aria-label="Về mục lục học phần" title="Mục lục học phần">${{LOGO}}<b>{MA}</b>'),
        ('<p class="bgs-small">Sáng Ăn Khoai: bài học 3D tiếng Việt, dùng tự do cho trường học, phi thương mại. <a href="${esc(root())}">Trang chính</a></p>',
         f'<p class="bgs-small">{TEN} ({MA}), theo giáo trình của {TAC_GIA}. <a href="${{esc(root())}}">Mục lục học phần</a></p>'),
        ('\n<button class="bgs-mi" role="menuitem" data-a="phone">${ico(\'phone\')}Điều khiển bằng điện thoại</button>', ''),
        ('<span>Kịch bản và phiếu in<br><span class="bgs-small">Gói dạy thử 45 phút</span></span>', '<span>Giáo án và phiếu bài tập<br><span class="bgs-small">Giáo án 45 phút</span></span>'),
        ('>Kịch bản và phiếu in ›<', '>Giáo án và phiếu bài tập ›<'),
        ('<p class="h">Học sinh: ', '<p class="h">Sinh viên: '),
    ]
    s = re.sub(r'\n[ \t]+', '\n', s)
    for a, b in thay:
        a2 = re.sub(r'\n[ \t]+', '\n', a)
        if a2 not in s: raise SystemExit(f'vỏ bài: không tìm thấy đoạn cần thay: {a[:70]}')
        s = s.replace(a2, b)
    s = re.sub(r'const LOGO_SRC = "[^"]*";', f'const LOGO_SRC = {json.dumps(LOGO_URI)};', s)
    s = re.sub(r'const TOKENS_CSS = ("(?:[^"\\]|\\.)*");', lambda m: 'const TOKENS_CSS = ' + json.dumps(phang(json.loads(m.group(1)))) + ';', s)
    s = s.replace('Sáng Ăn Khoai', MA)
    es = ROOT / 'tools/robotics/node_modules/.bin/esbuild'
    if es.exists():
        s = subprocess.run([str(es), '--minify', '--loader=js', '--charset=utf8'], input=s.encode(), capture_output=True, check=True).stdout.decode()
    return s


def xuat_bai(t, ds_bai, k, vo_ten):
    src = (ROOT / 'thiet-ke-mang' / t['slug'] / 'index.html').read_text(encoding='utf-8')
    s = src
    s = s.replace('<meta name="bg-root" content="../../">', '<meta name="bg-root" content="../">')
    s = re.sub(r'<link rel="icon"[^>]*>(<link rel="apple-touch-icon"[^>]*>)?', '<link rel="icon" href="../favicon.svg" type="image/svg+xml">', s, count=1)
    s = re.sub(r'<!--BG-TOKENS:start-->(.*?)<!--BG-TOKENS:end-->', lambda m: phang(m.group(1)).replace('../../design/fonts/', '../design/fonts/'), s, flags=re.S)
    desc = re.search(r'<meta name="description" content="([^"]*)"', s).group(1)
    tit = f'Tiết {t["n"]} · {t["ten"]} · {TEN}'
    meta = (f'<meta name="robots" content="noindex,nofollow"><meta property="og:site_name" content="{E(TEN)}"><meta property="og:title" content="{E(tit)}">'
            f'<meta property="og:description" content="{desc}"><link rel="canonical" href="{SITE}{t["slug"]}/">')
    s = re.sub(r'<!--BG-SHARE:start-->.*?<!--BG-SHARE:end-->', meta, s, flags=re.S)
    s = re.sub(r'<title>[^<]*</title>', f'<title>{E(tit)}</title>', s, count=1)
    s = re.sub(r'<meta name="theme-color" content="[^"]*">', '<meta name="theme-color" content="#FFFFFF">', s)
    s = s.replace('../../robotics/_chung/', '../_chung/')
    s = re.sub(r'/\* chuẩn thành phần [^*]*\*/\n?', '', s)
    s = re.sub(r'<script id="bg-sw">.*?</script>\n?', '', s, flags=re.S)
    s = s.replace("url('../../thu-vien/covers/", "url('../anh/").replace('background:#E9EAEE url(', 'background:#F5F6F8 url(')
    s = re.sub(r'<!-- Dựng trên .*? -->\n?', '', s)
    # vị trí trong học phần: mục lục, tiết sau, giáo án
    i = s.index('window.BG_SEQ=') + len('window.BG_SEQ='); j = s.index('</script>', i)
    q = json.loads(s[i:j].rstrip().rstrip(';'))
    sau = ds_bai[k + 1] if k + 1 < len(ds_bai) else None
    q.update({'crumb': [{'t': f'{TEN} · Tiết {t["n"]}', 'href': './'}], 'cover': f'anh/{t["id"]}.webp', 'subject': f'{TEN} · Tiết {t["n"]}',
              'next': {'title': sau['ten'], 'href': f'{sau["slug"]}/', 'sub': f'Tiết {sau["n"]}'} if sau else {'title': 'Mục lục học phần', 'href': './', 'sub': '22 tiết'}})
    if t['ga']: q['pack'] = f'{t["slug"]}/giao-an/'
    else: q.pop('pack', None); q.pop('plan', None)
    q.pop('s', None)
    s = s[:i] + json.dumps(q, ensure_ascii=False) + ';' + s[j:]
    s = re.sub(r'<script src="\.\./\.\./shell/dist/[^"]*"></script>', f'<script src="../{vo_ten}"></script>', s)
    s = s.replace('hub:"../../thiet-ke-mang/"', 'hub:"../"')
    s = s.replace('</head>', PHANG_3D + '\n</head>', 1)
    if '../../' in s: raise SystemExit(f'{t["slug"]}: còn đường dẫn ra ngoài học phần: ' + s[s.index('../../') - 60:s.index('../../') + 40])
    return s


def anh_bia(src, dst):
    """Ảnh bìa 960×640; vài ảnh cũ có viền đen ở mép do cắt quá khung chụp: cắt bỏ hàng, cột gần như đen ở mép rồi phủ lại khung."""
    from PIL import Image
    im = Image.open(src).convert('RGB'); px = im.load(); W, H = im.size
    toi = lambda xs: sum(1 for p in xs if sum(p) < 90) > 0.6 * len(xs)
    l, t, r, b = 0, 0, W, H
    while r - l > W // 2 and toi([px[r - 1, y] for y in range(0, H, 4)]): r -= 1
    while r - l > W // 2 and toi([px[l, y] for y in range(0, H, 4)]): l += 1
    while b - t > H // 2 and toi([px[x, b - 1] for x in range(0, W, 4)]): b -= 1
    while b - t > H // 2 and toi([px[x, t] for x in range(0, W, 4)]): t += 1
    if (l, t, r, b) != (0, 0, W, H):
        m = 3; im = im.crop((l + m, t + m, r - m, b - m))
        w, h = im.size; k = max(960 / w, 640 / h); im = im.resize((round(w * k), round(h * k)), Image.LANCZOS)
        w, h = im.size; im = im.crop(((w - 960) // 2, (h - 640) // 2, (w - 960) // 2 + 960, (h - 640) // 2 + 640))
        im.save(dst, 'WEBP', quality=86)
    else:
        shutil.copy2(src, dst)


def chung_can(htmls):
    """Các khối mã dùng chung mà bài cần, kể cả khối được khối khác nhập."""
    can, hang = set(), []
    for h in htmls: hang += re.findall(r'\.\./_chung/(chung-[A-Z0-9]+\.js)', h)
    while hang:
        f = hang.pop()
        if f in can: continue
        can.add(f)
        hang += re.findall(r'\./(chung-[A-Z0-9]+\.js)', (ROOT / 'robotics/_chung' / f).read_text(encoding='utf-8'))
    return sorted(can)


# ---------------------------------------------------------------- chạy
def main():
    ap = argparse.ArgumentParser(); ap.add_argument('--out', default=str(ROOT.parent / 'tel1459')); a = ap.parse_args()
    OUT = pathlib.Path(a.out).resolve()
    giu = {'.git', 'CNAME'}
    OUT.mkdir(parents=True, exist_ok=True)
    for p in OUT.iterdir():
        if p.name in giu: continue
        shutil.rmtree(p) if p.is_dir() else p.unlink()
    chuong = danh_muc()
    tat = [t for c in chuong for t in c['tiet']]
    ds_bai = [t for t in tat if t['slug']]
    ds_ga = [t for t in tat if t['ga']]
    w = lambda rel, txt: ((OUT / rel).parent.mkdir(parents=True, exist_ok=True), (OUT / rel).write_text(txt, encoding='utf-8'))
    # vỏ, ảnh, phông
    vo = vo_bai(); vo_ten = f'vo-{hashlib.sha1(vo.encode()).hexdigest()[:8]}.js'; w(vo_ten, vo)
    w('favicon.svg', LOGO)
    (OUT / 'anh').mkdir(exist_ok=True)
    for t in ds_bai: anh_bia(ROOT / 'thu-vien/covers' / f'{t["id"]}.webp', OUT / 'anh' / f'{t["id"]}.webp')
    (OUT / 'design/fonts').mkdir(parents=True, exist_ok=True)
    for f in (ROOT / 'design/fonts').iterdir(): shutil.copy2(f, OUT / 'design/fonts' / f.name)
    # bài 3D
    htmls = []
    for k, t in enumerate(ds_bai):
        h = xuat_bai(t, ds_bai, k, vo_ten); htmls.append(h); w(f'{t["slug"]}/index.html', h)
    (OUT / '_chung').mkdir(exist_ok=True)
    for f in chung_can(htmls): shutil.copy2(ROOT / 'robotics/_chung' / f, OUT / '_chung' / f)
    # giáo án, mục lục
    for k, t in enumerate(ds_ga):
        w(f'{t["slug"]}/giao-an/index.html', trang_giao_an(t['ga'], t, ds_ga[k - 1] if k else None, ds_ga[k + 1] if k + 1 < len(ds_ga) else None))
    w('index.html', trang_muc_luc(chuong))
    w('robots.txt', 'User-agent: *\nDisallow: /\n')
    w('.nojekyll', '')
    w('README.md', f'# {TEN} · {MA}\n\nBài giảng 3D tương tác và giáo án 45 phút theo giáo trình {TEN} ({MA}) của {TAC_GIA}.\n\n'
                   f'Trang: {SITE}\n\nTệp trong repo này được dựng tự động; mã nguồn bên thứ ba và giấy phép: NOTICE.md.\n')
    w('NOTICE.md', '# Giấy phép bên thứ ba\n\n- three.js, MIT License, © 2010–2026 three.js authors.\n'
                   '- Bộ dựng cảnh 3D dựa trên mã mở theo MIT License (teardown, claude-motion); bản quyền thuộc các tác giả gốc.\n'
                   '- Phông Be Vietnam Pro, JetBrains Mono, Noto Serif: SIL Open Font License 1.1 (tệp OFL-*.txt trong design/fonts).\n')
    # quét dấu vết: không còn nhãn, đường dẫn của site chính
    loi = []
    for p in OUT.rglob('*'):
        if p.is_file() and p.suffix in ('.html', '.js', '.md', '.txt', '.svg') and '.git' not in p.parts:
            txt = p.read_text(encoding='utf-8', errors='ignore')
            for n in NHAN_CAM:
                if n in txt: loi.append(f'{p.relative_to(OUT)}: "{n}"')
    if loi: raise SystemExit('còn dấu vết site chính:\n  ' + '\n  '.join(loi[:30]))
    print(f'{OUT}: mục lục, {len(ds_bai)} bài 3D, {len(ds_ga)} giáo án, {len(chung_can(htmls))} khối mã chung · sạch dấu vết')


if __name__ == '__main__':
    main()
