import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const hoverProvider = vscode.languages.registerHoverProvider(
    { language: 'yaml', scheme: 'file' },   // YAML だけに限定
    {
      async provideHover(document, position) {
        // `${hoge}` または `${env:hoge}` パターンの範囲を取得
        const range = document.getWordRangeAtPosition(position, /\$\{(?:env:)?\w+\}/);
        if (!range) {return;}

        const token = document.getText(range).slice(2, -1); // ${ } を取り除く
        const envPrefix = 'env:';
        const actualToken = token.startsWith(envPrefix) ? token.slice(envPrefix.length) : token;

        // 元ファイルのあるディレクトリからルートへ
        const roots = vscode.workspace.workspaceFolders?.map(f => f.uri.fsPath) ?? [];
        let dir = path.dirname(document.uri.fsPath);

        while (true) {
          const files = await vscode.workspace.fs.readDirectory(vscode.Uri.file(dir));
          for (const [name, type] of files) {
            if (
              type === vscode.FileType.File &&
              /^\..*env$/.test(name)             // .xxxenv にマッチ
            ) {
              const fullPath = path.join(dir, name);
              const lines = fs.readFileSync(fullPath, 'utf8').split(/\r?\n/);
              for (const line of lines) {
                const m = line.match(/^([^=]+)=(.*)$/);
                if (m && m[1] === actualToken) {
                  const value = m[2];
                  return new vscode.Hover(
                    new vscode.MarkdownString(
                      `\`${actualToken}\` → **${value}**  \n*(from \`${name}\`)*`
                    )
                  );
                }
              }
            }
          }

          // ルートまで来たら終了
          if (roots.includes(dir) || path.dirname(dir) === dir) {break;}
          dir = path.dirname(dir);
        }
        return;
      },
    }
  );

  context.subscriptions.push(hoverProvider);
}

export function deactivate() {}
