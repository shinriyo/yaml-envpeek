# YAML-EnvPeek

Một tiện ích mở rộng Visual Studio Code cung cấp chức năng tham chiếu biến môi trường cho các tệp YAML.

## Tính năng

- **Hiển thị Hover Biến Môi trường**: Khi di chuột qua `${VARIABLE_NAME}` hoặc `${env:VARIABLE_NAME}` trong tệp YAML, hiển thị giá trị thực từ các tệp `.env`
- **Điều hướng Định nghĩa**: 
  - Sử dụng Command+click (Mac) hoặc Ctrl+click (Windows/Linux) trên biến môi trường để nhảy đến định nghĩa
  - Nhấp vào đường dẫn tệp trong thông báo hover để mở tệp định nghĩa
- **Hỗ trợ Nhiều Tệp .env**: Tìm kiếm tất cả các tệp `.env` (bao gồm `.xxxenv`) từ thư mục hiện tại đến thư mục gốc của không gian làm việc
- **Phản hồi Rõ ràng**: Hiển thị thông báo cảnh báo khi không tìm thấy biến môi trường

## Cách sử dụng

1. Mở tệp YAML chứa tham chiếu biến môi trường
2. Di chuột qua `${VARIABLE_NAME}` hoặc `${env:VARIABLE_NAME}` để xem giá trị
3. Sử dụng Command+click (Mac) hoặc Ctrl+click (Windows/Linux) để nhảy đến định nghĩa
4. Nhấp vào đường dẫn tệp trong thông báo hover để mở tệp định nghĩa

## Ví dụ

```yaml
environment:
  DATABASE_URL: ${DATABASE_URL}
  API_KEY: ${env:API_KEY}
```

Khi di chuột qua `${DATABASE_URL}` sẽ hiển thị:
```
DATABASE_URL → postgresql://localhost:5432/mydb
(from .env)
```

## Yêu cầu

- Visual Studio Code phiên bản 1.100.0 trở lên

## Cài đặt Tiện ích

Tiện ích này cung cấp các cài đặt sau:

* `yaml-envpeek.enable`: Bật/tắt tiện ích này

## Vấn đề đã biết

Hiện tại không có vấn đề nào.

## Ghi chú Phát hành

### 0.2.0

- Thêm hỗ trợ tài liệu đa ngôn ngữ (Tiếng Anh, Tiếng Nhật, Tiếng Hàn, Tiếng Trung, Tiếng Azerbaijan, Tiếng Ba Tư, Tiếng Việt, Tiếng Mã Lai, Tiếng Indonesia)
- Thêm biểu tượng tiện ích mở rộng
- Cải thiện khả năng tương thích với VS Code 1.96.0 trở lên

### 0.1.0

Phiên bản đầu tiên của YAML-EnvPeek:
- Hiển thị hover biến môi trường cơ bản
- Chức năng điều hướng định nghĩa
- Hỗ trợ nhiều tệp .env
- Phản hồi rõ ràng cho các biến chưa được định nghĩa

## Đóng góp

Vui lòng tạo vấn đề hoặc gửi pull request trên GitHub.

## Giấy phép

Tiện ích này được cấp phép theo MIT License. 