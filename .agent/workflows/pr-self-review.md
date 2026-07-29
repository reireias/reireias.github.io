---
description: PR をセルフレビューし、品質基準をチェックします。引数に Issue 番号を指定可能（省略可）。
trigger: /pr-self-review
turbo: true
---
# Workflow: /pr-self-review

以下のプロジェクト基準と現在の変更内容を元に、PR のセルフレビューを行ってください。

### Context

#### PR 情報 (env gh pr view)
!`env gh pr view`

#### PR の変更サマリ (stat)
!`git diff origin/master...HEAD --stat`

#### 新規追加ファイル一覧
!`git diff origin/master...HEAD --name-only --diff-filter=A`

#### コミット履歴 (git log origin/master..HEAD)
!`git log origin/master..HEAD`

#### マージ先ブランチとの同期状態
!`git fetch origin master --quiet && git merge-base --is-ancestor origin/master HEAD && echo "OK: master の最新コミットを含んでいます" || echo "NG: master の最新コミットを含んでいません。rebase が必要です"`

#### ローカルの未コミット差分
!`git status --short`

#### プロジェクトガイドライン
プロジェクトルール（GEMINI.md / .agent/rules/ 内の設定）に基づいてレビューすること。

#### 関連する Issue
引数が指定されている場合のみ、Issue `#$ARGUMENTS` の内容と照合すること。
引数が未指定の場合は Issue との整合性チェックをスキップし、コード品質のレビューに集中すること。

### レビュー観点 (Checklist)
1. **Issue との整合性** (引数指定時のみ): 実装内容が Issue で定義された目的や要件をすべて満たしているか？
2. **コミットの整理**: "fix typo", "test", "wip" などの無駄なコミットが積み重なっていないか？
3. **計画・一時ファイルの除外**: 一時スクリプトや計画ファイルが PR の差分に含まれていないか？
4. **ルールの遵守**: 命名規則、アーキテクチャ、セキュリティ、テストの追加等。
5. **PR の説明 (日本語)**: PR の説明が日本語で分かりやすく記載されているか？
6. **実装の妥当性**:
    - コードが適切にモジュール化・分離されているか？
    - 不適切な `any` や型キャスト、マジックナンバーが使われていないか？
    - 適切なテスト・リントが通過しているか (`yarn lint`, `yarn test`)？
7. **CI ステータス**: `env gh pr checks --watch` で CI が完了するまで待機し、すべてのチェックが pass になっているか確認すること。CI が pending の状態でレビュー結果を確定・報告してはならない。
8. **マージ先ブランチとの同期**: ブランチが `origin/master` の最新コミットを含んでいるか？ 含んでいない場合は rebase が必要な旨を NG として報告すること。
9. **ローカルの未コミット差分**: `git status` で未コミットの変更や未追跡ファイルが残っていないか？ 残っている場合は、コミット漏れの可能性として NG を報告すること。

### 実行手順

1. 上記 Context の stat サマリと新規ファイル一覧から変更の全体像を把握する。
2. CI ステータスが pending の場合は `env gh pr checks --watch` を実行して、全チェックが完了するまで必ず待機する。
3. **実装の妥当性** のレビューでは、変更ファイルの詳細を確認する。`git diff origin/master...HEAD -- <ファイルパス>` で個別ファイルの diff を取得して確認すること。
4. すべてのレビュー観点を評価し、結果を報告する。

### 指示
- CI が Pending の状態で「Pending」として報告を終了してはならない。`env gh pr checks --watch` で完了を待ち、Pass または Fail の確証を得ること。
- NG ポイントがある場合は、ファイル名・行数・コミットハッシュとともに具体的に提示してください。
- 修正は行わず、ユーザーに「修正が必要な箇所」として報告してください。
- 回答は日本語で行ってください。

// turbo
