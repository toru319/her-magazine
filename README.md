# HER MAGAZINE

「架空ファッション誌」風に楽しむ、今日のヒロイン診断アプリです。

今日の気分を選ぶと、30種類の診断結果から気分に合う表紙ページをランダムに表示します。写真、ログイン、データベースは使わず、HTML / CSS / JavaScriptだけで動くGitHub Pages向けの静的Webアプリです。

## File Structure

```text
.
├── .github
│   └── workflows
│       └── pages.yml
├── .nojekyll
├── index.html
├── style.css
├── script.js
├── README.md
└── docs
    ├── magazine-settings.md
    ├── implementation-summary.md
    └── implementation-structure.md
```

## How to Use

`index.html` をブラウザで開くと、そのまま使えます。

## GitHub Pages

このリポジトリには `.github/workflows/pages.yml` があり、`main` に反映されるとGitHub Actionsで静的ファイルをGitHub Pagesへデプロイします。

1. GitHubの `Settings` → `Pages` を開きます。
2. `Build and deployment` の `Source` を `GitHub Actions` にします。
3. `Actions` タブで `Deploy static site to GitHub Pages` が成功していることを確認します。
4. 表示されたURLをスマホで開くと使えます。

## MVP Scope

- トップ画面
- 気分選択画面
- 雑誌風診断結果画面
- 30種類の診断データ
- 気分カテゴリごとのランダム表示
- 今日の日付表示
- 気分カテゴリごとのラッキーアイテム表示
- 再診断ボタン

写真選択、画像保存、SNS投稿、ログイン、通知、診断履歴は含めていません。
