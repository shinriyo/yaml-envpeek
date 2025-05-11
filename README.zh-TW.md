# YAML-EnvPeek

為YAML檔案提供環境變數引用功能的Visual Studio Code擴充功能。

## 功能

- **環境變數懸停顯示**: 在YAML檔案中的`${VARIABLE_NAME}`或`${env:VARIABLE_NAME}`上懸停時，顯示來自`.env`檔案的實際值
- **定義導航**: 
  - 在環境變數上使用Command+點擊（Mac）或Ctrl+點擊（Windows/Linux）跳轉到定義位置
  - 點擊懸停訊息中的檔案路徑開啟定義檔案
- **多.env檔案支援**: 從當前目錄到工作區根目錄搜尋所有`.env`檔案（包括`.xxxenv`）
- **清晰的回饋**: 當找不到環境變數時顯示警告訊息

## 使用方法

1. 開啟包含環境變數引用的YAML檔案
2. 在`${VARIABLE_NAME}`或`${env:VARIABLE_NAME}`上懸停查看值
3. 使用Command+點擊（Mac）或Ctrl+點擊（Windows/Linux）跳轉到定義位置
4. 點擊懸停訊息中的檔案路徑開啟定義檔案

## 使用範例

```yaml
environment:
  DATABASE_URL: ${DATABASE_URL}
  API_KEY: ${env:API_KEY}
```

在`${DATABASE_URL}`上懸停將顯示：
```
DATABASE_URL → postgresql://localhost:5432/mydb
(from .env)
```

## 系統需求

- Visual Studio Code 1.100.0或更高版本

## 擴充功能設定

此擴充功能提供以下設定：

* `yaml-envpeek.enable`: 啟用/停用此擴充功能

## 已知問題

目前沒有。

## 發行說明

### 0.0.1

YAML-EnvPeek的初始版本：
- 基本環境變數懸停顯示
- 定義導航功能
- 多.env檔案支援
- 對未定義變數的清晰回饋

## 貢獻

歡迎在GitHub上提交問題或拉取請求。

## 授權

此擴充功能採用MIT授權。 