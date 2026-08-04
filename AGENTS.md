Please also reference the following rules as needed. The list below is provided in TOON format, and `@` stands for the project root directory.

rules[2]:
  - path: @.agents/rules/10-coding-style.md
    description: Nuxt、Vue、TypeScript、スタイルシートを変更するときの規約
    applyTo[1]: "**/*.{js,mjs,cjs,ts,vue,css,scss}"
  - path: @.agents/rules/20-git-workflow.md
    description: Git、GitHub、コミット、PRを扱うときのワークフロー
    applyTo[1]: **/*

# プロジェクト概要 & ルール: reireias.github.io

このリポジトリは、Nuxt 4、Vue 3、Vuetify で構築されたポートフォリオサイトです。

## 技術スタック

- フレームワーク: Nuxt 4 / Vue 3
- UI: Vuetify
- 言語: JavaScript / TypeScript
- パッケージマネージャー: pnpm
- フォーマット・静的解析: ESLint / Prettier / Stylelint
- テスト: Jest / Playwright

## 主要コマンド

- 開発サーバー: `pnpm dev`
- JavaScript / TypeScript / Vue のリント: `pnpm lint`
- CSS / SCSS / Vue style のリント: `pnpm lint:style`
- 単体テスト: `pnpm test`
- E2Eテスト: `pnpm test:e2e`
- 静的サイト生成: `pnpm generate`

## 基本原則

- パッケージ管理とスクリプト実行には必ず `pnpm` を使用し、`npm` や `yarn` を使用しない。
- 必要に応じてmiseのshimsをPATHに含める。リポジトリの `.mise.toml` を環境の正本とする。
- 変更前に関連コードと既存のコードスタイルを確認する。
- 作業完了前に、変更範囲に応じて `pnpm lint`、`pnpm lint:style`、`pnpm test`、`pnpm generate`、`pnpm test:e2e` を実行する。
- フロントエンド開発、キャプチャ添付、デプロイ検証では、実装前に `.agents/skills/` にある該当スキルを確認する。
- ユーザーの明示的な許可なしに `master` へ直接コミット、push、マージしない。
- スクリーンショットなどのPR用画像をリポジトリへコミットしない。`frontend` スキルの手順でGitHub Releaseへアップロードする。

## AI Agent設定の管理

- AI Agent設定の正本は `.rulesync/` と `rulesync.jsonc` である。
- `AGENTS.md` と `.agents/` 配下はRulesyncの生成物であり、直接編集しない。
- 設定を変更したら `pnpm ai:generate` を実行し、`pnpm ai:check` で同期を確認する。
