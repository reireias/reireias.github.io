---
description: ステージされた変更から適切なコミットメッセージを生成し、コミットする
trigger: /commit
turbo: true
---
# Workflow: /commit

ステージされた変更内容とプロジェクトの履歴に基づき、簡潔で意図が伝わるコミットメッセージを生成する。

## コンテキスト

直近のコミット履歴:
!`git log -n 10 --pretty=format:"%s"`

ユーザーからの追加コンテキスト: $ARGUMENTS

ステージされた変更:
!`git diff --cached`

## ルール

1. ステージされた変更が空の場合はコミットせず、「ステージされた変更がありません。`git add` で変更をステージしてから再実行してください。」と報告する。
2. diffを調査し、変更内容だけでなく変更の意図を把握する。
3. `fix`, `feat`, `refactor`, `perf`, `docs`, `chore`, `style`, `test` の適切なprefixを使い、Conventional Commits形式にする。
4. subjectは最大50文字を目安に、日本語または英語で簡潔に記述する。
5. 複雑な変更では空行の後に、変更した理由を説明するbodyを付ける。
6. 生成したメッセージで `git commit` を実行する。

// turbo
