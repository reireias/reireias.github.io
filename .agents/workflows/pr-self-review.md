---
description: PRをセルフレビューし、CI完了まで待って品質基準を確認する
trigger: /pr-self-review
turbo: true
---
# Workflow: /pr-self-review

プロジェクト基準と現在の変更内容を元に、PRをセルフレビューする。引数にIssue番号を指定できる。

## コンテキスト

- PR情報: !`env gh pr view`
- 変更サマリ: !`git diff origin/master...HEAD --stat`
- 新規ファイル: !`git diff origin/master...HEAD --name-only --diff-filter=A`
- コミット履歴: !`git log origin/master..HEAD`
- ローカル差分: !`git status --short`
- 関連Issue: $ARGUMENTS

## レビュー観点

1. 引数がある場合、実装がIssueの目的と要件を満たすか。
2. WIPや微修正など不要なコミットが残っていないか。
3. 一時スクリプト、計画、キャプチャなど不要なファイルが差分にないか。
4. プロジェクトルール、命名、アーキテクチャ、セキュリティを守っているか。
5. PRの説明が日本語で分かりやすいか。
6. 実装が適切に分離され、不適切な型キャストやマジックナンバーがないか。
7. 必要なテスト、リント、生成処理が成功しているか。
8. ブランチが `origin/master` の最新コミットを含むか。
9. 未コミットまたは未追跡の変更が残っていないか。

## 実行手順

1. statと新規ファイル一覧から変更の全体像を把握する。
2. 必要なファイルを `git diff origin/master...HEAD -- <path>` で詳細に確認する。
3. `git merge-base --is-ancestor origin/master HEAD` でmasterとの同期を確認する。
4. `env gh pr checks --watch` を実行し、全CIが完了するまで待つ。pendingのまま結果を確定しない。
5. 問題があればファイル名、行番号、コミットを含めて具体的に報告する。
6. 修正は行わず、結果を日本語で報告する。

// turbo
