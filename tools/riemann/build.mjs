// Dựng trang toan/riemann: gói main.js (three.js r186 của tools/robotics) thành app.js, chép trang.html thành index.html kèm mã băm.
//   node tools/riemann/build.mjs
import {build} from '../robotics/node_modules/esbuild/lib/main.js';
import {createHash} from 'node:crypto';
import fs from 'node:fs'; import path from 'node:path'; import {fileURLToPath} from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url)), OUT = path.join(HERE, '../../toan/riemann');
fs.mkdirSync(OUT, {recursive: true});
await build({entryPoints: [path.join(HERE, 'main.js')], bundle: true, minify: !process.env.DEBUG, format: 'esm', target: 'es2022', outfile: path.join(OUT, 'app.js'), legalComments: 'none',
  loader: {'.json': 'json'}, nodePaths: [path.join(HERE, '../robotics/node_modules')], alias: {'three/addons': path.join(HERE, '../robotics/node_modules/three/examples/jsm'), three: path.join(HERE, '../robotics/node_modules/three')}});
const v = createHash('sha256').update(fs.readFileSync(path.join(OUT, 'app.js'))).digest('hex').slice(0, 10);
fs.writeFileSync(path.join(OUT, 'index.html'), fs.readFileSync(path.join(HERE, 'trang.html'), 'utf8').replace('__V__', v));
console.log(`toan/riemann: app.js ${(fs.statSync(path.join(OUT, 'app.js')).size / 1024).toFixed(0)} KB · ${v}`);
