import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const hoverProvider = vscode.languages.registerHoverProvider(
    { language: 'yaml', scheme: 'file' },   // Only for YAML files
    {
      async provideHover(document, position) {
        // Get the range of ${hoge} or ${env:hoge} pattern
        const range = document.getWordRangeAtPosition(position, /\$\{(?:env:)?\w+\}/);
        if (!range) {return;}

        const token = document.getText(range).slice(2, -1); // Remove ${ }
        const envPrefix = 'env:';
        const actualToken = token.startsWith(envPrefix) ? token.slice(envPrefix.length) : token;

        // Search from the directory containing the source file up to the root
        const roots = vscode.workspace.workspaceFolders?.map(f => f.uri.fsPath) ?? [];
        let dir = path.dirname(document.uri.fsPath);

        while (true) {
          const files = await vscode.workspace.fs.readDirectory(vscode.Uri.file(dir));
          for (const [name, type] of files) {
            if (
              type === vscode.FileType.File &&
              /^\..*env$/.test(name)             // Match .xxxenv files
            ) {
              const fullPath = path.join(dir, name);
              const lines = fs.readFileSync(fullPath, 'utf8').split(/\r?\n/);
              for (const line of lines) {
                const m = line.match(/^([^=]+)=(.*)$/);
                if (m && m[1] === actualToken) {
                  const value = m[2];
                  const markdown = new vscode.MarkdownString(
                    `[${actualToken}](${vscode.Uri.file(fullPath).toString()}) → **${value}**  \n*(from \`${name}\`)*`
                  );
                  // Make file path clickable
                  markdown.isTrusted = true;
                  markdown.supportHtml = true;
                  const fileUri = vscode.Uri.file(fullPath);
                  markdown.appendMarkdown(`\n\n[Open ${name}](${fileUri.toString()})`);
                  return new vscode.Hover(markdown);
                }
              }
            }
          }

          // Stop when we reach the root
          if (roots.includes(dir) || path.dirname(dir) === dir) {break;}
          dir = path.dirname(dir);
        }
        // Message when environment variable is not found
        return new vscode.Hover(
          new vscode.MarkdownString(
            `⚠️ Environment variable \`${actualToken}\` not found in any .env files`
          )
        );
      },
    }
  );

  // Register definition provider
  const definitionProvider = vscode.languages.registerDefinitionProvider(
    { language: 'yaml', scheme: 'file' },
    {
      async provideDefinition(document, position) {
        // Get the range of ${hoge} or ${env:hoge} pattern
        const range = document.getWordRangeAtPosition(position, /\$\{(?:env:)?\w+\}/);
        if (!range) {return;}

        const token = document.getText(range).slice(2, -1); // Remove ${ }
        const envPrefix = 'env:';
        const actualToken = token.startsWith(envPrefix) ? token.slice(envPrefix.length) : token;

        // Search from the directory containing the source file up to the root
        const roots = vscode.workspace.workspaceFolders?.map(f => f.uri.fsPath) ?? [];
        let dir = path.dirname(document.uri.fsPath);

        while (true) {
          const files = await vscode.workspace.fs.readDirectory(vscode.Uri.file(dir));
          for (const [name, type] of files) {
            if (
              type === vscode.FileType.File &&
              /^\..*env$/.test(name)             // Match .xxxenv files
            ) {
              const fullPath = path.join(dir, name);
              const lines = fs.readFileSync(fullPath, 'utf8').split(/\r?\n/);
              for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                const m = line.match(/^([^=]+)=(.*)$/);
                if (m && m[1] === actualToken) {
                  const fileUri = vscode.Uri.file(fullPath);
                  const position = new vscode.Position(i, 0);
                  return new vscode.Location(fileUri, position);
                }
              }
            }
          }

          // Stop when we reach the root
          if (roots.includes(dir) || path.dirname(dir) === dir) {break;}
          dir = path.dirname(dir);
        }
        return;
      },
    }
  );

  context.subscriptions.push(hoverProvider, definitionProvider);
}

export function deactivate() {}
