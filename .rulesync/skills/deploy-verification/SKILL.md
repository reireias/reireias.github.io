---
name: deploy-verification
description: "GitHub Actionsのデプロイ、クリーン環境での静的生成、本番サイトのレスポンスを検証するときの手順"
targets: ["antigravity-cli", "codexcli"]
---

# Deploy Verification & Production Health Check

## GitHub Actions

```bash
env gh run list --workflow deploy.yml --limit 5
env gh run view <RUN_ID> --log
```

成功ステータスだけで判断せず、`pnpm generate` を含む各ステップのログにエラーや重要な警告がないか確認する。

## クリーン環境での再現

リポジトリの `.mise.toml`、`package.json`、`pnpm-lock.yaml`、GitHub Actionsと同じNode.jsおよびpnpmのバージョンを使う。コンテナを使う場合もバージョンをハードコードせず、これらの設定に合わせる。

```bash
pnpm install --frozen-lockfile
pnpm nuxi prepare
pnpm generate
```

`.output/public` と `dist` に静的サイトが生成され、`dist/CNAME` が正しいことを確認する。

## デプロイ先と本番サイト

```bash
git fetch origin release
git ls-tree origin/release
curl -sIL https://reireias.dev
curl -sIL https://reireias.github.io
```

- `release` ブランチに `index.html`、`_nuxt/`、`CNAME` などがあることを確認する。
- HTTPステータス、リダイレクト、キャッシュ、カスタムドメインを確認する。
- Bot保護などでCLIとブラウザの結果が異なる場合は、実ブラウザでも確認して差異を報告する。
