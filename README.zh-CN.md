# YAML-EnvPeek

为YAML文件提供环境变量引用功能的Visual Studio Code扩展。

## 功能

- **环境变量悬停显示**: 在YAML文件中的`${VARIABLE_NAME}`或`${env:VARIABLE_NAME}`上悬停时，显示来自`.env`文件的实际值
- **定义导航**: 
  - 在环境变量上使用Command+点击（Mac）或Ctrl+点击（Windows/Linux）跳转到定义位置
  - 点击悬停消息中的文件路径打开定义文件
- **多.env文件支持**: 从当前目录到工作区根目录搜索所有`.env`文件（包括`.xxxenv`）
- **清晰的反馈**: 当找不到环境变量时显示警告消息

## 使用方法

1. 打开包含环境变量引用的YAML文件
2. 在`${VARIABLE_NAME}`或`${env:VARIABLE_NAME}`上悬停查看值
3. 使用Command+点击（Mac）或Ctrl+点击（Windows/Linux）跳转到定义位置
4. 点击悬停消息中的文件路径打开定义文件

## 使用示例

```yaml
environment:
  DATABASE_URL: ${DATABASE_URL}
  API_KEY: ${env:API_KEY}
```

在`${DATABASE_URL}`上悬停将显示：
```
DATABASE_URL → postgresql://localhost:5432/mydb
(from .env)
```

## 系统要求

- Visual Studio Code 1.100.0或更高版本

## 扩展设置

此扩展提供以下设置：

* `yaml-envpeek.enable`: 启用/禁用此扩展

## 已知问题

目前没有。

## 发行说明

### 0.0.1

YAML-EnvPeek的初始版本：
- 基本环境变量悬停显示
- 定义导航功能
- 多.env文件支持
- 对未定义变量的清晰反馈

## 贡献

欢迎在GitHub上提交问题或拉取请求。

## 许可证

此扩展采用MIT许可证。 