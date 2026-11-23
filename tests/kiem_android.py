#!/usr/bin/env python3
"""Chạy thử app Android trên máy ảo (docs/app-ke-hoach-moc.md, mốc M4). GitHub Actions gọi sau khi dựng APK.

  python3 tests/kiem_android.py sang-an-khoai.apk

Cần adb và một máy ảo (hoặc máy thật cắm cáp) đang khởi động. Các bước, mỗi bước chụp màn hình vào kiem-android/:
  D1  cài APK, mở app: màn Thư viện hiện (đọc cây giao diện bằng uiautomator)
  D2  bấm nút ở ảnh lớn của Thư viện (Bắt đầu hoặc Học tiếp): bài mở, lớp chữ của app hiện bước
  D3  nút Back của máy: về Thư viện
  D4  bật chế độ máy bay, tắt hẳn app rồi mở lại: Thư viện và bài vẫn mở (bài nằm sẵn trong app)
  D5  không có lỗi văng app (FATAL EXCEPTION) của gói trong logcat
Thoát mã 1 nếu một bước hỏng.
"""
import os, re, subprocess, sys, time

PKG = 'io.github.nclamvn.sangankhoai'
OUT = 'kiem-android'


def adb(*a, check=False, timeout=120):
    try: r = subprocess.run(['adb', *a], capture_output=True, text=True, errors='replace', timeout=timeout)
    except subprocess.TimeoutExpired:
        if check: raise
        return ''
    if check and r.returncode: raise RuntimeError(' '.join(a) + ': ' + r.stderr.strip())
    return r.stdout


def con_song():
    """Máy ảo do CI chạy nền (emulator.pid) còn sống không; không có tệp pid (máy thật) thì coi là còn."""
    try: pid = int(open('emulator.pid').read().strip())
    except (OSError, ValueError): return True
    return os.path.exists(f'/proc/{pid}')


def cho_may(han=900):
    t0 = time.time()
    while time.time() - t0 < han:
        if not con_song(): raise RuntimeError('máy ảo đã tắt, xem emulator.log')
        if adb('shell', 'getprop', 'sys.boot_completed', timeout=30).strip() == '1': time.sleep(10); return
        time.sleep(5)
    raise RuntimeError('máy ảo chưa khởi động xong')


def chup(ten):
    with open(f'{OUT}/{ten}.png', 'wb') as f: f.write(subprocess.run(['adb', 'exec-out', 'screencap', '-p'], capture_output=True, timeout=60).stdout)


def cay():
    adb('shell', 'uiautomator', 'dump', '/sdcard/cay.xml', timeout=60)
    return adb('shell', 'cat', '/sdcard/cay.xml')


def cho_chu(mau, han=120):
    """Chờ tới khi cây giao diện có nút hay chữ khớp mẫu; trả về cây."""
    t0 = time.time(); x = ''
    while time.time() - t0 < han:
        x = cay()
        if re.search(mau, x, re.I): return x
        time.sleep(4)
    raise RuntimeError(f'không thấy "{mau}" sau {han} giây')


def bam(x, mau, cuoi=False):
    """Bấm vào giữa nút có chữ khớp mẫu; cuoi=True chọn nút khớp cuối cùng trong cây (vd nút ở ảnh lớn, nằm sau thanh dưới)."""
    ms = list(re.finditer(r'(?:text|content-desc)="[^"]*(?:' + mau + r')[^"]*"[^>]*bounds="\[(?P<a>\d+),(?P<b>\d+)\]\[(?P<c>\d+),(?P<d>\d+)\]"', x))
    if not ms: raise RuntimeError(f'không thấy nút "{mau}" để bấm')
    m = ms[-1] if cuoi else ms[0]
    a, b, c, d = (int(m['a']), int(m['b']), int(m['c']), int(m['d'])); adb('shell', 'input', 'tap', str((a + c) // 2), str((b + d) // 2))


def truoc_mat():
    """App có đang ở tiền cảnh không (cửa sổ có tiêu điểm thuộc gói)."""
    return PKG in adb('shell', 'dumpsys', 'window', 'displays', timeout=30).split('mCurrentFocus', 1)[-1][:300]


def mo_bai():
    """Từ Thư viện, bấm nút ở ảnh lớn; nếu app không ở tiền cảnh (máy ảo đôi khi đẩy app ra sau) thì mở lại một lần."""
    for lan in range(2):
        if not truoc_mat():
            print('  app không ở tiền cảnh, mở lại'); adb('shell', 'monkey', '-p', PKG, '-c', 'android.intent.category.LAUNCHER', '1')
            cho_chu(r'Thư viện', 120)
        try: return bam(cay(), r'Bắt đầu|Học tiếp', cuoi=True)
        except RuntimeError:
            if lan: raise
            time.sleep(5)


def mo_app():
    adb('shell', 'am', 'force-stop', PKG); time.sleep(2)
    adb('shell', 'monkey', '-p', PKG, '-c', 'android.intent.category.LAUNCHER', '1')


def main():
    apk = sys.argv[1] if len(sys.argv) > 1 else 'sang-an-khoai.apk'
    os.makedirs(OUT, exist_ok=True)
    loi = []
    cho_may()
    adb('logcat', '-c')
    wv = re.search(r'versionName=(\S+)', adb('shell', 'dumpsys', 'package', 'com.google.android.webview'))
    print('WebView', wv.group(1) if wv else 'không rõ', '· Android', adb('shell', 'getprop', 'ro.build.version.release').strip())
    print(adb('install', '-r', apk, check=True, timeout=300).strip().splitlines()[-1])
    buoc = [
        ('D1 Thư viện hiện', lambda: (mo_app(), cho_chu(r'Thư viện', 180), chup('d1-thu-vien'))),
        ('D2 mở bài', lambda: (mo_bai(), cho_chu(r'Bước \d+ / \d+|bấm Bắt đầu', 180), time.sleep(8), chup('d2-bai'))),
        ('D3 nút Back về Thư viện', lambda: (adb('shell', 'input', 'keyevent', '4'), cho_chu(r'Tìm bài', 60), chup('d3-back'))),
        ('D4 chế độ máy bay', lambda: (adb('shell', 'cmd', 'connectivity', 'airplane-mode', 'enable'), time.sleep(3), mo_app(),
                                      cho_chu(r'Thư viện', 180), mo_bai(), cho_chu(r'Bước \d+ / \d+|bấm Bắt đầu', 180),
                                      time.sleep(5), chup('d4-may-bay'), adb('shell', 'cmd', 'connectivity', 'airplane-mode', 'disable'))),
    ]
    for ten, f in buoc:
        try: f(); print('đạt ', ten)
        except Exception as e: loi.append(ten); print('LỖI ', ten, '·', str(e)[:160]); chup('loi-' + ten.split()[0].lower())
    log = adb('logcat', '-d', '-b', 'crash', timeout=60)
    if PKG in log and 'FATAL EXCEPTION' in log: loi.append('D5 văng app'); print('LỖI  D5 văng app\n' + log[-2000:])
    else: print('đạt  D5 không văng app')
    with open(f'{OUT}/logcat.txt', 'w') as f: f.write(adb('logcat', '-d', timeout=60))
    with open(f'{OUT}/logcat-app.txt', 'w') as f:  # lời của trang web trong app (console) và lỗi Capacitor
        f.write(adb('logcat', '-d', '-s', 'Capacitor:*', 'Capacitor/Console:*', 'chromium:*', timeout=60))
    print('tổng:', 'đạt' if not loi else 'lỗi ở ' + ', '.join(loi))
    sys.exit(1 if loi else 0)


if __name__ == '__main__':
    main()
