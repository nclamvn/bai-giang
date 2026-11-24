"""Nối vào WebView của app Android qua cổng gỡ lỗi (chỉ bản debug mở cổng này) bằng giao thức CDP thô.

Playwright connect_over_cdp không dùng được với WebView (nó đòi quản lý ngữ cảnh trình duyệt, WebView không hỗ trợ),
nên đây gọi thẳng /json và websocket. Khung bài (iframe bgs-canh) cùng nguồn https://localhost với trang app,
nên đọc được từ trang app qua contentWindow.
"""
import json, subprocess, time, urllib.request

import websocket  # gói websocket-client

PKG = 'io.github.nclamvn.sangankhoai'


def _adb(*a, timeout=60):
    try: return subprocess.run(['adb', *a], capture_output=True, text=True, errors='replace', timeout=timeout).stdout
    except subprocess.TimeoutExpired: return ''


class Trang:
    def __init__(self, port=9333, han=60):
        pid = _adb('shell', 'pidof', PKG).strip().split()
        if not pid: raise RuntimeError('app chưa chạy')
        sock = f'webview_devtools_remote_{pid[0]}'
        t0 = time.time()
        while sock not in _adb('shell', 'cat', '/proc/net/unix'):
            if time.time() - t0 > han: raise RuntimeError('WebView không mở cổng gỡ lỗi (bản phát hành? hay app chưa nạp trang)')
            time.sleep(3)
        _adb('forward', f'tcp:{port}', f'localabstract:{sock}')
        mo = urllib.request.build_opener(urllib.request.ProxyHandler({}))  # cổng nội bộ: không đi qua proxy
        ds = json.load(mo.open(f'http://127.0.0.1:{port}/json', timeout=20))
        t = next((x for x in ds if x.get('type') == 'page' and '/app/' in x.get('url', '')), None)
        if not t: raise RuntimeError('không thấy trang app trong WebView: ' + ', '.join(x.get('url', '') for x in ds))
        self.ws = websocket.create_connection(t['webSocketDebuggerUrl'], timeout=30, suppress_origin=True)
        self.n = 0
        self.su_kien = []  # lời console và nhật ký của trình duyệt, gom trong lúc chờ
        self.goi('Runtime.enable'); self.goi('Log.enable')

    def goi(self, method, params=None, timeout=60):
        self.n += 1; mid = self.n
        self.ws.send(json.dumps({'id': mid, 'method': method, 'params': params or {}}))
        t0 = time.time()
        while time.time() - t0 < timeout:
            self.ws.settimeout(max(1, timeout - (time.time() - t0)))
            m = json.loads(self.ws.recv())
            if m.get('id') == mid:
                if 'error' in m: raise RuntimeError(f"{method}: {m['error']}")
                return m.get('result', {})
            self._ghi(m)
        raise TimeoutError(method)

    def _ghi(self, m):
        p = m.get('params', {})
        if m.get('method') == 'Runtime.consoleAPICalled':
            self.su_kien.append((p.get('type'), ' '.join(str(a.get('value', a.get('description', ''))) for a in p.get('args', []))))
        elif m.get('method') == 'Log.entryAdded':
            e = p.get('entry', {}); self.su_kien.append((e.get('level'), e.get('text', '')))
        elif m.get('method') == 'Runtime.exceptionThrown':
            d = p.get('exceptionDetails', {}); self.su_kien.append(('error', 'exception: ' + str(d.get('exception', {}).get('description', d.get('text')))))

    def js(self, bieu_thuc, timeout=60):
        """Chạy biểu thức JS (có thể là Promise) trong trang app, trả về giá trị."""
        r = self.goi('Runtime.evaluate', {'expression': bieu_thuc, 'returnByValue': True, 'awaitPromise': True}, timeout)
        if 'exceptionDetails' in r: raise RuntimeError('JS: ' + str(r['exceptionDetails'].get('exception', {}).get('description', r['exceptionDetails'].get('text')))[:200])
        return r.get('result', {}).get('value')

    def cho(self, bieu_thuc, han=120, nghi=2):
        """Chờ biểu thức JS trả về giá trị đúng; trong lúc chờ vẫn gom lời console."""
        t0 = time.time()
        while time.time() - t0 < han:
            try:
                if self.js(bieu_thuc, 30): return True
            except RuntimeError: pass
            self.nghe(nghi)
        return False

    def nghe(self, giay):
        """Ngồi gom sự kiện trong một khoảng thời gian."""
        t0 = time.time()
        while time.time() - t0 < giay:
            self.ws.settimeout(max(0.2, giay - (time.time() - t0)))
            try: self._ghi(json.loads(self.ws.recv()))
            except websocket.WebSocketTimeoutException: break

    def dong(self):
        try: self.ws.close()
        except Exception: pass
