package io.github.nclamvn.sangankhoai;

import android.view.WindowManager;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * Giữ màn hình sáng khi người học đang ở trong một bài (cảnh 3D chạy, có khi chỉ nhìn không chạm).
 * app/app.js gọi ManHinh.giuSang({ bat: true }) khi mở bài và { bat: false } khi đóng.
 * Chỉ dùng cờ cửa sổ FLAG_KEEP_SCREEN_ON, không cần quyền WAKE_LOCK; tắt app hay khoá máy thì cờ tự hết tác dụng.
 */
@CapacitorPlugin(name = "ManHinh")
public class ManHinhPlugin extends Plugin {
    @PluginMethod
    public void giuSang(PluginCall call) {
        final boolean bat = Boolean.TRUE.equals(call.getBoolean("bat", false));
        getActivity().runOnUiThread(() -> {
            if (bat) getActivity().getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            else getActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            call.resolve();
        });
    }
}
