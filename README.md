# YAML-EnvPeek

A Visual Studio Code extension that provides environment variable peeking functionality for YAML files.

## Features

- **Environment Variable Hover**: Hover over `${VARIABLE_NAME}` or `${env:VARIABLE_NAME}` in YAML files to see the actual value from your `.env` files
- **Definition Navigation**: 
  - Command+Click (Mac) or Ctrl+Click (Windows/Linux) on environment variables to jump to their definitions
  - Click on the file path in the hover message to open the definition file
- **Multiple .env File Support**: Searches for environment variables in all `.env` files (including `.xxxenv`) from the current directory up to the workspace root
- **Clear Feedback**: Shows a warning message when an environment variable is not found

## Usage

1. Open a YAML file containing environment variable references
2. Hover over `${VARIABLE_NAME}` or `${env:VARIABLE_NAME}` to see the value
3. Use Command+Click (Mac) or Ctrl+Click (Windows/Linux) to jump to the definition
4. Click on the file path in the hover message to open the definition file

## Example

```yaml
environment:
  DATABASE_URL: ${DATABASE_URL}
  API_KEY: ${env:API_KEY}
```

Hovering over `${DATABASE_URL}` will show:
```
DATABASE_URL → postgresql://localhost:5432/mydb
(from .env)
```

## Requirements

- Visual Studio Code 1.100.0 or higher

## Extension Settings

This extension contributes the following settings:

* `yaml-envpeek.enable`: Enable/disable this extension

## Known Issues

None at the moment.

## Release Notes

### 0.2.0

- Added support for multiple language documentation (English, Japanese, Korean, Chinese, Azerbaijani, Persian, Vietnamese, Malay, Indonesian)
- Added extension icon
- Improved compatibility with VS Code 1.96.0 and above

### 0.1.0

Initial release of YAML-EnvPeek:
- Basic environment variable hovering
- Definition navigation
- Multiple .env file support
- Clear feedback for undefined variables

## Contributing

Feel free to open issues or submit pull requests on GitHub.

## License

This extension is licensed under the MIT License.

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
