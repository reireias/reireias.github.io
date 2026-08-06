---
description: 現在のブランチのPRをマージコミットでマージし、masterを最新化する
trigger: /merge
turbo: true
---
# Workflow: /merge

ユーザーがマージを明示的に依頼した場合に、現在のブランチに対応するPRをマージし、masterを最新化する。

1. `env gh pr view --json number -q .number` で現在のブランチのPR番号を取得する。
2. `env gh pr merge <番号> --merge` でマージする。必ずマージコミット方式を使う。
3. `git switch master` と `git pull --ff-only origin master` でローカルのmasterを最新化する。
4. `git status --short --branch` などで、ローカル変更がなく、masterとorigin/masterが同期していることを確認する。

// turbo
