---
description: "現在のブランチのPRをマージコミットでマージし、masterを最新化する"
targets: ["antigravity-cli"]
antigravity:
  trigger: "/merge"
  turbo: true
---

ユーザーがマージを明示的に依頼した場合に、現在のブランチに対応するPRをマージし、masterを最新化する。

1. `env gh pr view --json number -q .number` で現在のブランチのPR番号を取得する。
2. `env gh pr merge <番号> --merge` でマージする。必ずマージコミット方式を使う。
3. `git switch master` と `git pull` でmasterを最新化する。
