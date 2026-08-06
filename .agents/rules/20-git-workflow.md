# Gitワークフロー & コマンド実行ガイドライン

## GitHub CLI

- GitHub CLIは素の `gh` ではなく `env gh` の形式で実行する。
- 例: `env gh pr list`、`env gh pr create`、`env gh issue list`。

## ブランチとマージ

- ユーザーの明示的な許可なしに `master` へ直接コミットまたはpushしない。
- 新機能や修正ではトピックブランチを作成し、Pull Requestを経由する。
- CIが成功しても、ユーザーの明示的な承認なしにPull Requestをマージしない。
- マージを依頼された場合は、squashやrebaseではなく `env gh pr merge <番号> --merge` でマージコミットを作る。
- Pull Requestをマージした後は、`git switch master` と `git pull --ff-only origin master` を実行し、ローカルの `master` を最新化する。最後にローカル変更がなく、`master` と `origin/master` が同期していることを確認する。

## コミット

- `feat:`, `fix:`, `docs:`, `chore:` など、変更内容に合うConventional Commits形式を使用する。
- 試行錯誤や微修正のコミットを積み重ねず、1つのテーマにつき原則1コミットに整理する。
- pushおよびPR作成・更新の直前に `git log origin/master..HEAD` を確認する。
- 複数の細切れコミットがある場合は、push前にamendやsoft resetを使って整理する。

## CIと品質確認

- PR作成後は `env gh pr checks --watch` で全チェックが完了するまで待つ。
- CI設定や依存関係を変更するときは、Node.js、pnpm、lockfileなど既存設定との整合性を確認する。
- UI変更では開発サーバーまたはPlaywrightを使い、実画面の表示と操作を確認する。
