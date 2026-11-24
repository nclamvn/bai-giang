// Đọc chữ trên ảnh chụp màn hình bằng Vision của macOS (tests/kiem_ios.py gọi). In mỗi dòng chữ nhận được một dòng.
//   swift tests/ocr_ios.swift anh.png
import AppKit
import Foundation
import Vision

guard CommandLine.arguments.count > 1,
      let img = NSImage(contentsOf: URL(fileURLWithPath: CommandLine.arguments[1])),
      let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
    FileHandle.standardError.write("không mở được ảnh\n".data(using: .utf8)!)
    exit(1)
}
let req = VNRecognizeTextRequest()
req.recognitionLevel = .accurate
req.usesLanguageCorrection = false
// tiếng Việt nếu bản Vision trên máy hỗ trợ; không thì tiếng Anh (bộ thử so chữ đã bỏ dấu)
let co = (try? req.supportedRecognitionLanguages()) ?? []
req.recognitionLanguages = co.filter { $0.hasPrefix("vi") } + ["en-US"]
do { try VNImageRequestHandler(cgImage: cg).perform([req]) } catch {
    FileHandle.standardError.write("Vision lỗi: \(error)\n".data(using: .utf8)!)
    exit(1)
}
for o in req.results ?? [] {
    if let t = o.topCandidates(1).first { print(t.string) }
}
