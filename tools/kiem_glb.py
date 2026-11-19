#!/usr/bin/env python3
"""kiem_glb.py · kiểm mô hình .glb của các bài theo bước 10 trong quy trình AnyMachine ("export and verify").

  python3 tools/kiem_glb.py            kiểm mọi <tên>.glb có tệp <tên>.kiem.json đặt cạnh; sai thì thoát mã 1
  python3 tools/kiem_glb.py --ghi P    đọc P (một .glb) và ghi <tên>.kiem.json từ chính nó (chạy một lần khi thêm mô hình mới)

Vì sao: mô hình tải từ dự án khác rồi nén lại cho web (gltf-transform: meshopt, WebP). Một lần nén sai tham số có thể gộp mất
bộ phận (bài tìm bộ phận theo tên), cắt mất chuyển động, đổi khung xương hay làm tệp phình ra. AnyMachine nạp lại GLB vào cảnh trống
rồi đếm xương, lưới, chuyển động và độ dài từng chuyển động; ở đây đọc thẳng phần JSON của tệp GLB (không cần giải nén hình),
so với bản ghi .kiem.json: số nút, lưới, da, xương, tên bộ phận và tên xương bài dùng, tên và độ dài chuyển động, phần mở rộng
bắt buộc, cỡ tệp tối đa.
"""
import json, struct, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKIP = ('node_modules', '.git', 'offline')


def doc(p):
    b = Path(p).read_bytes()
    magic, ver, n = struct.unpack_from('<III', b, 0)
    if magic != 0x46546C67 or ver != 2: raise ValueError('không phải GLB 2.0')
    ln, kind = struct.unpack_from('<II', b, 12)
    if kind != 0x4E4F534A: raise ValueError('khối đầu không phải JSON')
    return json.loads(b[20:20 + ln]), len(b)


def facts(p):
    g, size = doc(p)
    acc = g.get('accessors', [])
    joints = sorted({j for s in g.get('skins', []) for j in s.get('joints', [])})
    names = [g['nodes'][j].get('name', '') for j in joints]
    anim = {}
    for a in g.get('animations', []):
        anim[a.get('name', '')] = round(max(acc[s['input']].get('max', [0])[0] for s in a['samplers']), 3)
    return {'nodes': len(g.get('nodes', [])), 'meshes': len(g.get('meshes', [])), 'skins': len(g.get('skins', [])), 'bones': len(joints),
            'mesh_names': sorted(m.get('name', '') for m in g.get('meshes', [])), 'bone_names': sorted(names), 'animations': anim,
            'required': sorted(g.get('extensionsRequired', [])), 'bytes': size}


def check(glb, rec):
    f, want, err = facts(glb), json.loads(rec.read_text(encoding='utf-8')), []
    for k in ('nodes', 'meshes', 'skins', 'bones', 'required'):
        if k in want and f[k] != want[k]: err.append(f'{k}: {f[k]} ≠ {want[k]}')
    for k, lst in (('mesh_names', want.get('need_meshes', [])), ('bone_names', want.get('need_bones', []))):
        miss = [x for x in lst if x not in f[k]]
        if miss: err.append(f'thiếu {k}: {", ".join(miss[:6])}')
    for n, d in want.get('animations', {}).items():
        if n not in f['animations']: err.append(f'thiếu chuyển động {n}')
        elif abs(f['animations'][n] - d) > 0.05: err.append(f'{n}: {f["animations"][n]} s ≠ {d} s')
    if f['bytes'] > want.get('max_bytes', 1 << 62): err.append(f'cỡ tệp {f["bytes"] / 1e6:.2f} MB > {want["max_bytes"] / 1e6:.2f} MB')
    return f, err


def main():
    a = sys.argv[1:]
    if a[:1] == ['--ghi'] and len(a) == 2:
        p = Path(a[1]).resolve(); f = facts(p)
        rec = {k: f[k] for k in ('nodes', 'meshes', 'skins', 'bones', 'required', 'animations')}
        rec['need_meshes'] = f['mesh_names']; rec['need_bones'] = f['bone_names']; rec['max_bytes'] = int(f['bytes'] * 1.1)
        out = p.with_suffix('.kiem.json'); out.write_text(json.dumps(rec, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
        print('đã ghi', out.relative_to(ROOT)); return
    bad = 0; n = 0
    for rec in sorted(ROOT.rglob('*.kiem.json')):
        if any(s in rec.parts for s in SKIP): continue
        glb = rec.with_name(rec.name.replace('.kiem.json', '.glb'))
        if not glb.exists(): print(f'thiếu {glb.relative_to(ROOT)}'); bad += 1; continue
        f, err = check(glb, rec); n += 1
        tag = 'ok  ' if not err else 'SAI '
        print(f'{tag}{glb.relative_to(ROOT)} · {f["meshes"]} lưới, {f["bones"]} xương, {len(f["animations"])} chuyển động, {f["bytes"] / 1e6:.2f} MB')
        for e in err: print('     ', e)
        bad += bool(err)
    print(f'{n} mô hình, {bad} sai'); sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main()
