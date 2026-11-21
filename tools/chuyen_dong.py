#!/usr/bin/env python3
"""chuyen_dong.py · sổ 12 kĩ thuật chuyển động (tools/chuyen-dong.json) là nguồn duy nhất; tệp này kiểm sổ và dựng lại
hai khối trong docs/12-chuyen-dong-ap-dung.md (bảng tổng và thẻ từng kĩ thuật).

  python3 tools/chuyen_dong.py            kiểm sổ, dựng lại hai khối <!--SO:bang--> và <!--SO:the--> (tất định)
  python3 tools/chuyen_dong.py --tt ID T  đổi trạng thái một kĩ thuật (chua-thu, dang-thu, da-dung, da-co-tuong-duong, bo) rồi dựng lại

Sai thì thoát mã 1: thiếu trường, trạng thái hay mức lạ, số thứ tự không liền, kho không đúng dạng chủ/kho, thiếu ghi chú giấy phép.
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SO, DOC = ROOT / 'tools/chuyen-dong.json', ROOT / 'docs/12-chuyen-dong-ap-dung.md'
TT = {'chua-thu': 'chưa thử', 'dang-thu': 'đang thử', 'da-dung': 'đã dùng trong bài', 'da-co-tuong-duong': 'dự án đã có cách tương đương', 'bo': 'bỏ'}
MUC = {'cao': 'cao', 'vua': 'vừa', 'thap': 'thấp'}
CAN = ('so', 'id', 'ky_thuat', 'ten', 'cong_cu', 'y', 'web', 'bai', 'kiem', 'muc', 'tt')
CAN_CC = ('ten', 'repo', 'commit', 'commit_ngay', 'giay_phep', 'giay_phep_ghi_chu', 'blender', 'ghi_chu')


def kiem(d):
    loi, ks = [], d['ky_thuat']
    if [k['so'] for k in ks] != list(range(1, len(ks) + 1)): loi.append('số thứ tự không liền từ 1')
    if len({k['id'] for k in ks}) != len(ks): loi.append('id trùng')
    for k in ks:
        t = f'#{k.get("so")} {k.get("id")}'
        loi += [f'{t}: thiếu {f}' for f in CAN if f not in k]
        cc = k.get('cong_cu', {})
        loi += [f'{t}: công cụ thiếu {f}' for f in CAN_CC if f not in cc]
        if k.get('tt') not in TT: loi.append(f'{t}: trạng thái lạ {k.get("tt")}')
        if k.get('muc') not in MUC: loi.append(f'{t}: mức lạ {k.get("muc")}')
        if not re.fullmatch(r'[\w.-]+/[\w.-]+', cc.get('repo', '')): loi.append(f'{t}: kho không đúng dạng chủ/kho')
        if not cc.get('giay_phep_ghi_chu'): loi.append(f'{t}: thiếu ghi chú giấy phép (ghi rõ đọc ở tệp nào)')
        if not k.get('bai'): loi.append(f'{t}: chưa có bài ứng viên')
    return loi


def bang(d):
    r = ['| # | Kĩ thuật | Công cụ trong bài | Giấy phép | Blender | Commit đã đọc | Ưu tiên | Trạng thái |', '|---|---|---|---|---|---|---|---|']
    for k in d['ky_thuat']:
        c = k['cong_cu']
        cm = f'`{c["commit"]}` ({c["commit_ngay"]})' if c['commit'] else 'chỉ đọc README'
        r.append(f'| {k["so"]} | {k["ten"]} ({k["ky_thuat"]}) | [{c["ten"]}](https://github.com/{c["repo"]}) | {c["giay_phep"] or "không ghi"} | {c["blender"]} | {cm} | {MUC[k["muc"]]} | {TT[k["tt"]]} |')
    return '\n'.join(r)


def the(d):
    r = []
    for k in d['ky_thuat']:
        c = k['cong_cu']
        r += [f'### {k["so"]}. {k["ten"]} ({k["ky_thuat"]})', '',
              f'- **Công cụ:** [{c["ten"]}](https://github.com/{c["repo"]}). {c["ghi_chu"]}',
              f'- **Giấy phép:** {c["giay_phep"] or "không ghi"}. {c["giay_phep_ghi_chu"]}',
              f'- **Ý chính:** {k["y"]}',
              f'- **Trên web của dự án:** {k["web"]}',
              '- **Bài ứng viên:** ' + '; '.join(k['bai']) + '.',
              f'- **Phép kiểm bằng máy:** {k["kiem"]}',
              f'- **Ưu tiên:** {MUC[k["muc"]]}. **Trạng thái:** {TT[k["tt"]]}.', '']
    return '\n'.join(r).rstrip()


def main():
    d = json.loads(SO.read_text(encoding='utf-8'))
    if '--tt' in sys.argv:
        i = sys.argv.index('--tt'); kid, tt = sys.argv[i + 1], sys.argv[i + 2]
        k = next((k for k in d['ky_thuat'] if k['id'] == kid), None)
        if not k or tt not in TT: sys.exit(f'không có kĩ thuật {kid} hoặc trạng thái {tt} (dùng: {", ".join(TT)})')
        k['tt'] = tt
        SO.write_text(json.dumps(d, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
    loi = kiem(d)
    if loi: sys.exit('sổ chuyển động sai:\n  ' + '\n  '.join(loi))
    s = DOC.read_text(encoding='utf-8')
    for ten, noi in (('bang', bang(d)), ('the', the(d))):
        a, b = f'<!--SO:{ten}:start-->', f'<!--SO:{ten}:end-->'
        if a not in s or b not in s: sys.exit(f'docs thiếu khối {a}')
        s = s[:s.index(a) + len(a)] + '\n' + noi + '\n' + s[s.index(b):]
    DOC.write_text(s, encoding='utf-8')
    n = {t: sum(k['tt'] == t for k in d['ky_thuat']) for t in TT}
    print('sổ chuyển động: ' + ', '.join(f'{v} {TT[t]}' for t, v in n.items() if v))


if __name__ == '__main__':
    main()
