# プロジェクト概要 & ルール: reireias.github.io

このファイルは、本リポジトリにおける AI 開発エージェント（Antigravity CLI / `agy` 等）のエントリーポイントです。

## 1. 技術スタック & 開発環境
- **フレームワーク**: Nuxt.js (v2) / Vue.js
- **言語**: JavaScript / TypeScript
- **パッケージマネージャー**: pnpm (`pnpm`)
- **フォーマット & ラーン**: ESLint, Prettier

## 2. 主要コマンド
- **開発サーバー起動**: `pnpm dev`
- **リントチェック**: `pnpm lint`
- **テスト実行**: `pnpm test`
- **ビルド / サイト生成**: `pnpm generate`

## 3. サブルーフ & 詳細ガイドライン
詳細なルールについては、`.agent/rules/` 内のドキュメントを参照してください：
- [.agent/rules/coding-style.md](file://.agent/rules/coding-style.md): Vue/Nuxt のコンポーネント構造、JS/TS のフォーマット、ESLint/Prettier の規約。
- [.agent/rules/git-workflow.md](file://.agent/rules/git-workflow.md): ブランチ運用、コミットメッセージ規約、GitHub CLI (`env gh`) の使用ルール。

## 4. 基本原則
- 変更を加える前に必ず既存のコードスタイルを確認すること。
- 作業を完了する前に、`pnpm lint` および `pnpm test` を実行して動作・規約を確認すること。
- ユーザーの明示的な許可なしに `master` ブランチへ直接コミットやマージを行わないこと。
