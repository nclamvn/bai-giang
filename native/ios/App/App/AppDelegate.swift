import UIKit
import Capacitor

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        return true
    }

    func applicationWillResignActive(_ application: UIApplication) {
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
        // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }

    func applicationWillEnterForeground(_ application: UIApplication) {
        // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
    }

    func applicationDidBecomeActive(_ application: UIApplication) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    }

    func applicationWillTerminate(_ application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }

    func application(_ application: UIApplication,
                     configurationForConnecting connectingSceneSession: UISceneSession,
                     options: UIScene.ConnectionOptions) -> UISceneConfiguration {
        let config = UISceneConfiguration(name: "Default Configuration",
                                          sessionRole: connectingSceneSession.role)
        config.delegateClass = SceneDelegate.self
        return config
    }
}

// Sáng Ăn Khoai (docs/app-ke-hoach-moc.md, mốc M5). Màn hình bài học của app: CAPBridgeViewController có thêm plugin ManHinh.
// Đặt ở đây (tệp đã có trong target) để không phải sửa tay App.xcodeproj. Main.storyboard dùng lớp MainViewController.
class MainViewController: CAPBridgeViewController {
    override open func capacitorDidLoad() {
        bridge?.registerPluginInstance(ManHinhPlugin())
    }
}

// Giữ màn hình sáng khi đang học (app.js gọi ManHinh.giuSang({ bat })), cùng tên với plugin Android (ManHinhPlugin.java).
@objc(ManHinhPlugin)
public class ManHinhPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ManHinhPlugin"
    public let jsName = "ManHinh"
    public let pluginMethods: [CAPPluginMethod] = [CAPPluginMethod(name: "giuSang", returnType: CAPPluginReturnPromise)]

    @objc func giuSang(_ call: CAPPluginCall) {
        let bat = call.getBool("bat") ?? false
        DispatchQueue.main.async {
            UIApplication.shared.isIdleTimerDisabled = bat
            call.resolve()
        }
    }
}
