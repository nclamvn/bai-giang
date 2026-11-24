#!/usr/bin/env python3
"""Chạy thử app iOS trên máy ảo iPhone và iPad (docs/app-ke-hoach-moc.md, mốc M5). GitHub Actions (macOS) gọi sau khi dựng.

  python3 tests/kiem_ios.py <đường dẫn App.app dựng cho máy ảo>

Mỗi máy ảo (iPhone, iPad mới nhất có trên máy macOS):
  I1  cài và mở app: màn Thư viện hiện (đọc chữ trên ảnh chụp bằng Vision, tests/ocr_ios.swift)
  I2  liên kết sangankhoai://bai/than-kinh: bài mở, lớp chữ của app hiện bước. Liên kết đi qua biến SAK_LIEN_KET khi khởi chạy
      (AppDelegate.swift chuyển cho Capacitor như liên kết thật): simctl openurl làm hệ thống hiện hộp hỏi "Open in" mà máy ảo
      không có cách bấm bằng công cụ của Apple
  I3  liên kết sangankhoai://lop/than-kinh: chế độ Lớp học hiện (nhãn LỚP HỌC, nút Thoát chế độ lớp trên iPad)
  I4  app còn chạy, không có báo cáo văng app
Ảnh chụp và chữ đọc được ở kiem-ios/. Chỉ dùng công cụ của Apple (simctl, Vision). Thoát mã 1 nếu một bước hỏng.
Máy ảo không có GPU thật như máy thật: cảnh 3D trên máy ảo không đại diện cho máy thật.
"""
import glob, json, os, re, shutil, subprocess, sys, time, unicodedata

BUNDLE = 'io.github.nclamvn.sangankhoai'
OUT = 'kiem-ios'
HERE = os.path.dirname(os.path.abspath(__file__))


def chay(*a, timeout=300, check=False):
    r = subprocess.run(list(a), capture_output=True, text=True, errors='replace', timeout=timeout)
    if check and r.returncode: raise RuntimeError(' '.join(a[:4]) + ': ' + (r.stderr or r.stdout).strip()[-300:])
    return r.stdout


def bo_dau(s):
    s = unicodedata.normalize('NFD', s).replace('đ', 'd').replace('Đ', 'D')
    return re.sub(r'[̀-ͯ]', '', s).lower()


def chon_may():
    d = json.loads(chay('xcrun', 'simctl', 'list', 'devices', 'available', '-j'))['devices']
    rt = sorted([k for k in d if 'iOS' in k], key=lambda k: [int(x) for x in re.findall(r'\d+', k)])
    if not rt: raise RuntimeError('không có máy ảo iOS')
    ds = d[rt[-1]]
    def lay(tien):
        c = [x for x in ds if x['name'].startswith(tien)]
        c.sort(key=lambda x: ('Pro' in x['name'] or 'Max' in x['name'], x['name']))
        return c[0] if c else None
    return rt[-1], [m for m in (lay('iPhone'), lay('iPad')) if m]


def chup(udid, ten):
    f = f'{OUT}/{ten}.png'
    try: chay('xcrun', 'simctl', 'io', udid, 'screenshot', f, timeout=180)
    except subprocess.TimeoutExpired: return ''   # máy ảo bận (vừa khởi động): lần chờ sau chụp lại
    chu = chay('swift', os.path.join(HERE, 'ocr_ios.swift'), f, timeout=240)
    with open(f'{OUT}/{ten}.txt', 'w') as g: g.write(chu)
    return bo_dau(chu)


def cho_chu(udid, ten, mau, han=180):
    t0 = time.time(); x = ''
    while time.time() - t0 < han:
        x = chup(udid, ten)
        if re.search(mau, x): return x
        time.sleep(6)
    raise RuntimeError(f'không thấy "{mau}" trên màn hình sau {han} giây; đọc được: {x[:200]!r}')


def con_chay(udid):
    return f'UIKitApplication:{BUNDLE}' in chay('xcrun', 'simctl', 'spawn', udid, 'launchctl', 'list', timeout=60)


def khoi_chay(udid, env=None):
    """simctl launch; máy ảo vừa khởi động có lúc chậm: thử lại một lần với thời gian chờ dài hơn."""
    for han in (180, 420):
        try:
            r = subprocess.run(['xcrun', 'simctl', 'launch', udid, BUNDLE], capture_output=True, text=True, timeout=han, env=env)
            if r.returncode: raise RuntimeError('không khởi chạy được app: ' + r.stderr.strip()[-200:])
            return
        except subprocess.TimeoutExpired:
            chay('xcrun', 'simctl', 'terminate', udid, BUNDLE, timeout=60)
    raise RuntimeError('simctl launch không trả lời sau hai lần')


def mo_lk(udid, duong):
    chay('xcrun', 'simctl', 'terminate', udid, BUNDLE, timeout=60)
    khoi_chay(udid, dict(os.environ, SIMCTL_CHILD_SAK_LIEN_KET='sangankhoai://' + duong))


def con_song(udid, ten):
    time.sleep(10); chup(udid, f'{ten}-4-sau')
    if not con_chay(udid): raise RuntimeError('app đã tắt')


def main():
    app = sys.argv[1]
    os.makedirs(OUT, exist_ok=True)
    rt, mays = chon_may()
    print('iOS:', rt.split('.')[-1], '· máy ảo:', ', '.join(m['name'] for m in mays))
    loi, t_bat_dau = [], time.time()
    for m in mays:
        u, ten = m['udid'], re.sub(r'[^a-z0-9]+', '-', m['name'].lower()).strip('-')
        chay('xcrun', 'simctl', 'boot', u, timeout=300)
        chay('xcrun', 'simctl', 'bootstatus', u, '-b', timeout=900)
        chay('xcrun', 'simctl', 'install', u, app, timeout=300, check=True)
        buoc = [(f'I1 {m["name"]}: mở app, Thư viện hiện', lambda: (khoi_chay(u), cho_chu(u, f'{ten}-1-thu-vien', r'thu vien|tim bai', 240)))]
        buoc.append((f'I2 {m["name"]}: liên kết mở bài, lớp chữ hiện bước', lambda: (mo_lk(u, 'bai/than-kinh'), cho_chu(u, f'{ten}-2-bai', r'buoc \d+ / \d+|bam bat dau', 240))))
        buoc.append((f'I3 {m["name"]}: liên kết mở chế độ Lớp học', lambda: (mo_lk(u, 'lop/than-kinh'), cho_chu(u, f'{ten}-3-lop', r'lop hoc', 180))))
        buoc.append((f'I4 {m["name"]}: app còn chạy', lambda: con_song(u, ten)))
        for t, f in buoc:
            try: f(); print('đạt ', t)
            except Exception as e: loi.append(t); print('LỖI ', t, '·', str(e)[:240])
        # nhật ký của app (NSLog của Swift, lời console của trang qua Capacitor) để tra khi một bước hỏng
        with open(f'{OUT}/log-{ten}.txt', 'w') as g:
            g.write(chay('xcrun', 'simctl', 'spawn', u, 'log', 'show', '--last', '20m', '--style', 'compact', '--predicate', 'process == "App"', timeout=300)[-400000:])
        chay('xcrun', 'simctl', 'shutdown', u, timeout=120)
    van = [f for f in glob.glob(os.path.expanduser('~/Library/Logs/DiagnosticReports/App*')) if os.path.getmtime(f) > t_bat_dau]
    if van:
        loi.append('văng app'); print('LỖI  có báo cáo văng app:', ', '.join(os.path.basename(x) for x in van))
        for x in van: shutil.copy(x, OUT)
    print('tổng:', 'đạt' if not loi else 'lỗi ở ' + ', '.join(loi))
    sys.exit(1 if loi else 0)


if __name__ == '__main__':
    main()
