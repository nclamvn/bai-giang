#!/usr/bin/env python3
"""tinh_zeta.py · tính sẵn dữ liệu hàm zeta cho trang toan/riemann (chạy một lần, cần `pip install mpmath`).

Ghi tools/riemann/zeta.json:
  zeros   phần ảo γ của 200 không điểm không tầm thường đầu tiên (mpmath.zetazero, 15 chữ số)
  grid    log10|ζ(σ + it)| trên lưới σ ∈ [-1, 2] (49 cột) × t ∈ [0, 80] (641 hàng), kẹp vào [-2,6; 1,2], lượng tử 8 bit, base64
Trang dựng địa hình |ζ| và công thức tường minh ψ(x) từ chính các số này; không có số nào gõ tay.
"""
import base64, json, pathlib
import mpmath as mp
mp.mp.dps = 15
OUT = pathlib.Path(__file__).with_name('zeta.json')
zeros = [float(mp.zetazero(n).imag) for n in range(1, 201)]
NS, NT, S0, S1, T0, T1, LO, HI = 49, 641, -1.0, 2.0, 0.0, 80.0, -2.6, 1.2
b = bytearray()
for j in range(NT):
    t = T0 + (T1 - T0) * j / (NT - 1)
    for i in range(NS):
        s = S0 + (S1 - S0) * i / (NS - 1)
        try: v = float(mp.log10(abs(mp.zeta(mp.mpc(s, t)))))
        except Exception: v = HI
        b.append(round(255 * (min(HI, max(LO, v)) - LO) / (HI - LO)))
OUT.write_text(json.dumps({'zeros': [round(z, 9) for z in zeros], 'ns': NS, 'nt': NT, 's': [S0, S1], 't': [T0, T1], 'lo': LO, 'hi': HI,
                           'grid': base64.b64encode(bytes(b)).decode()}), encoding='utf-8')
print('đã ghi', OUT.name, len(zeros), 'không điểm,', NS * NT, 'điểm lưới; γ1 =', zeros[0])
