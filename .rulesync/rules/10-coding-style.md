---
root: false
targets: ["antigravity-cli", "codexcli"]
description: "Nuxt、Vue、TypeScript、スタイルシートを変更するときの規約"
globs: ["**/*.{js,mjs,cjs,ts,vue,css,scss}"]
antigravity:
  trigger: glob
  globs: ["**/*.{js,mjs,cjs,ts,vue,css,scss}"]
---

# コーディングスタイル & アーキテクチャガイドライン

## ディレクトリと責務

- `pages/`: Nuxtのページコンポーネント。簡潔に保ち、再利用する表示や詳細ロジックは `components/` に委譲する。
- `components/`: 再利用可能なVueコンポーネント。
- `layouts/`: ページ共通のレイアウト。
- `assets/`: ビルド対象のCSS、SCSS、フォント、画像など。
- `public/`: 変換せずに公開する静的ファイル。

## Vue / Nuxt

- Vue単一ファイルコンポーネントを使用する。
- 既存コンポーネントが採用しているComposition APIまたはOptions APIの書き方に合わせる。
- ページ固有でないUIやロジックは再利用可能なコンポーネントへ分離する。
- セマンティックHTMLを使い、操作要素ではキーボード操作やラベルなどのアクセシビリティを考慮する。
- Nuxtの自動importやディレクトリ規約を優先し、不要な独自構成を導入しない。

## リントとフォーマット

- `eslint.config.mjs`、`.prettierrc`、Stylelint設定に従う。
- Prettierの主要規約は、セミコロンなし、シングルクォート、ES5 trailing commaである。
- TypeScriptでは不必要な `any` や型アサーションを避け、公開境界や曖昧な値には明示的な型を付ける。
- 作業完了前に最低限 `pnpm lint` と、スタイル変更時は `pnpm lint:style` を実行する。

## パッケージと環境

- パッケージ操作には必ず `pnpm` を使用する。
- Node.jsとpnpmのバージョンは `.mise.toml`、依存バージョンは `package.json` と `pnpm-lock.yaml` に合わせる。
