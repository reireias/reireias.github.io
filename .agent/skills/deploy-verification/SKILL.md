---
name: deploy-verification
description: GitHub Actions でのデプロイジョブのログ詳細検証、Docker クリーン環境での再現、および本番環境（サイト表示・レスポンス）の動作確認手順を提供するスキル。
---

# Deploy Verification & Production Health Check Skill

このスキルは、GitHub Actions のデプロイジョブの動作検証、ログの徹底調査、Docker による再現検証、および本番環境（GitHub Pages / カスタムドメイン）の動作確認を行うためのガイドラインです。

---

## 1. GitHub Actions デプロイジョブの調査・確認

### ステータス確認
```bash
env gh run list --workflow deploy.yml --limit 5
```

### ログ詳細の抽出とエラー診断
単に `conclusion: success` を鵜呑みにせず、実際のステップログ（例: `pnpm generate`）を抽出してサイレントなエラーや警告をチェックする。

```bash
# 実行ログ全般の取得
env gh run view <RUN_ID> --log

# SSR やビルド特有のエラー（Cannot find module など）のフィルタリング
env gh run view <RUN_ID> --log | grep -i "Cannot find module"
```

---

## 2. Docker を用いたクリーン環境でのローカル再現検証

ローカル環境や CI の状態をゼロベースで再現するため、Docker コンテナ（`node:16-slim` 等）上でクリーンビルド・生成を検証する。

```bash
docker run --rm -v "$(pwd):/app" -w /app node:16-slim bash -c "
  rm -rf node_modules .nuxt dist && \
  npm i -g pnpm@8.15.9 && \
  pnpm install && \
  pnpm generate
"
```

### チェックポイント
- SSR 生成ログに `Error: Cannot find module` や `ERROR` が出力されていないか確認する。
- `dist/index.html` に `<div data-server-rendered="true">` などの SSR 結果が正しくレンダリングされているか確認する。
- pnpm の strict node-modules による依存解決エラーが発生する場合は、`.npmrc` に `shamefully-hoist=true` を設定する。

---

## 3. 本番環境 (GitHub Pages / カスタムドメイン) の動作確認

### リモートリリースブランチの確認
`release` ブランチ（デプロイ先）に静的ファイル（`_nuxt/`, `index.html`, `CNAME` 等）が正しくプッシュされているか調査する。

```bash
git fetch origin release
git ls-tree origin/release
```

### Web サイトアクセス & HTTP レスポンス検証
```bash
# HTTP ヘッダー / ステータスコードの確認
curl -sIL https://reireias.dev

# Cloudflare / GitHub Pages のリダイレクト状況のテスト
curl -sIL -H "Host: reireias.github.io" https://reireias.github.io
```

> [!NOTE]
> AI エージェントの HTTP クライアントツールが Cloudflare 等の Bot 保護により 404 やチャレンジ応答を返す場合があるため、curl の結果と併せて実ブラウザでのアクセス確認を推奨します。
