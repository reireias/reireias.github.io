---
description: 現在のブランチに対応する PR をマージし、master ブランチを最新化する。
trigger: /merge
turbo: true
---
# Workflow: /merge

現在のブランチに対応する PR をマージし、master ブランチを最新化してください。

## 手順

1. `env gh pr view --json number -q .number` で現在のブランチの PR 番号を取得する
2. `env gh pr merge <番号> --merge` でマージする（必ずマージコミットを使用すること）
3. `git checkout master && git pull` で master を最新化する

// turbo
