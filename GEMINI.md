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
- **パッケージマネージャー**: 必ず `pnpm` を使用すること (`npm` / `yarn` は絶対に使用しないこと)。シェル実行時は PATH に `~/.local/share/mise/shims` を含めて `export PATH="$HOME/.local/share/mise/shims:$PATH" && pnpm ...` または `pnpm` を直接実行すること。GitHub Actions やローカル設定も常に `pnpm` を前提とすること。
- **クリーンなコミット履歴の厳格維持 (絶対遵守ルール)**: push および PR 提出・更新の直前には、必ず `git log origin/master..HEAD` を確認し、複数コミットに分かれている場合は `git reset --soft origin/master` 等で **必ず1つのクリーンなコミット** にスクワッシュしてから push / 報告すること。細切れコミットのまま push・報告することは厳禁。
- 変更を加える前に必ず既存のコードスタイルを確認すること。
- 作業を完了する前に、`pnpm lint` および `pnpm test` を実行して動作・規約を確認すること。
- **スキルの事前確認**: フロントエンド開発、キャプチャ添付、デプロイ検証等のタスク着手時には、コード修正やコマンド実行前に必ず該当する `SKILL.md`（`.agent/skills/` 内）を `view_file` で確認すること。
- **PR用キャプチャ添付手順 (直コミット厳禁)**: 画像ファイルを git リポジトリへ直接コミットすることは絶対禁止。`frontend` スキルの規定通り `env gh release create ... --draft` でアセットにアップロードし、取得した直リンク URL を PR に埋め込むこと。
- ユーザーの明示的な許可なしに `master` ブランチへ直接コミットやマージを行わないこと。
