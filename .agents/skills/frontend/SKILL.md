---
name: frontend
description: Nuxt 4 / Vue 3フロントエンドの実装、リント、テスト、表示確認、PR用キャプチャを行うときの手順
---
# Nuxt / Vue フロントエンド開発スキル

## 前提

- パッケージマネージャーはpnpmのみを使用する。
- Node.jsとpnpmは `.mise.toml` のバージョンを使用する。
- フレームワークはNuxt 4 / Vue 3、UIはVuetifyである。

## 実装

1. `pages/`、`components/`、`layouts/` の関連コードと既存スタイルを先に確認する。
2. ページは簡潔に保ち、再利用するUIとロジックを `components/` へ分離する。
3. Composition APIまたはOptions APIは、変更対象の既存コードに合わせる。
4. セマンティックHTML、ラベル、キーボード操作、色のコントラストを考慮する。
5. ESLint、Prettier、Stylelintの既存設定に従う。

## 検証

変更範囲に応じて以下を実行する。

```bash
pnpm lint
pnpm lint:style
pnpm test
pnpm generate
pnpm test:e2e
```

UI変更では `pnpm dev` またはPlaywrightで実際の表示と操作を確認する。必要な場合は `pnpm capture` でキャプチャする。

## コミットとPR用画像

- 1つのテーマにつき原則1つのクリーンなコミットに整理する。
- GitHub CLIは `env gh` で実行する。
- PR用画像をリポジトリへ直接コミットしない。
- 画像が必要な場合は `env gh release create <tag> <image-files> --notes "..." --draft` でdraft Releaseへアップロードし、アセットのURLをPR本文またはコメントへ埋め込む。
