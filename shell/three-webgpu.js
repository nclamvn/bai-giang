// three/webgpu cho các bài dùng import map của tools/sri.py (Tế Bào, Ty Thể, Cổ Loa, Neuron): đúng bản three.js 0.180.0 tự lưu
// (trùng từng byte với bản chính thức), thêm một bản vá lúc chạy. Không sửa tệp three.js.
//
// Bản vá: three 0.180 đưa ma trận của InstancedMesh có tới 1000 bản sao vào một khối uniform (64 byte mỗi bản, tới 64 KB).
// OpenGL ES 3 chỉ bảo đảm khối uniform 16 KB (MAX_UNIFORM_BLOCK_SIZE 16384, đo được trên máy ảo Android trong CI): quá 256 bản
// thì shader không liên kết được, cảnh đen. Từ 257 bản trở lên, bản vá cho đi đường thuộc tính đỉnh (InstancedInterleavedBuffer),
// cũng là cách WebGLRenderer cổ điển luôn làm; chạy được cả WebGPU lẫn WebGL2.
export * from '../vendor/three@0.180.0/build/three.webgpu.min.js';
import { InstanceNode } from '../vendor/three@0.180.0/build/three.webgpu.min.js';

const TRAN = 256;  // 256 × 64 byte = 16384, vừa mức tối thiểu
const P = InstanceNode && InstanceNode.prototype;
if (P && typeof P.setup === 'function' && !P.vaGles3) {
  const setup = P.setup;
  P.setup = function (builder) {
    const t = this.instanceMatrix;
    if (this.instanceMatrixNode !== null || !t || !(t.count > TRAN && t.count <= 1000)) return setup.call(this, builder);
    const n = t.count;
    t.count = 1001;  // three chọn nhánh theo t.count; nhánh thuộc tính đỉnh không dùng tới số này
    try { return setup.call(this, builder); } finally { t.count = n; }
  };
  P.vaGles3 = true;
}
