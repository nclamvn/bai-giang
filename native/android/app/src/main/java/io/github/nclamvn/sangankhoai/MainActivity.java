package io.github.nclamvn.sangankhoai;

import android.os.Bundle;
import androidx.activity.EdgeToEdge;
import com.getcapacitor.BridgeActivity;

/**
 * Vỏ app Sáng Ăn Khoai trên Android (docs/app-ke-hoach-moc.md, mốc M4).
 * Nội dung là app web trong native/www (tools/build_native.py). Lớp này chỉ bật tràn viền (SystemBars của Capacitor
 * xử lý vùng an toàn) và đăng ký plugin ManHinh (giữ màn hình sáng khi đang học).
 */
public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(ManHinhPlugin.class);
        // super.onCreate (BridgeActivity) đổi sang theme không thanh tiêu đề rồi mới dựng khung cửa sổ.
        // Gọi EdgeToEdge trước đó sẽ dựng khung theo theme khởi động, để lại thanh tiêu đề mang ảnh splash bị kéo dẹt.
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
    }
}
