---
name: frontend
description: Vue.js / Nuxt.js (v2) フロントエンド開発の手順、コーディング規約、テスト・リント検証、ビルド動作確認のためのガイドラインを提供するスキル。
---

# Vue.js / Nuxt.js (v2) フロントエンド開発スキル

このスキルは、本リポジトリ (`reireias.github.io`) における Vue / Nuxt フロントエンド開発、コンポーネント実装、状態管理、スタイリング、およびテスト・検証の手順を定義したガイドラインです。

---

## 1. 開発環境・前提ツール

- **パッケージマネージャー**: `pnpm` (`npm` / `yarn` の使用は厳禁)
- **環境設定**: コマンド実行時は必ず `export PATH="$HOME/.local/share/mise/shims:$PATH"` を PATH に含めて実行する。
- **フレームワーク**: Nuxt.js (v2) / Vue.js 2
- **言語**: JavaScript / TypeScript

---

## 2. コンポーネント開発規約

### ディレクトリ構造と責任分離
- `pages/`: Nuxt ページのルーティングエントリーポイント。ロジックや描画は極力 `components/` に切り出し、ページコンポーネント自体はシンプルに保つ。
- `components/`: 再利用可能な UI コンポーネント。
- `layouts/`: ヘッダー・フッター・全体のレイアウト枠組み。
- `assets/` & `static/`: スタイルシート (SCSS/CSS)、フォント、静的ファイル、画像等。

### Vue 単一ファイルコンポーネント (`.vue`) の構造
1. Options API の標準的な定義順序を遵守する：
   `name` -> `components` -> `props` -> `data` -> `computed` -> `watch` -> ライフサイクルフック (`created`, `mounted` 等) -> `methods`
2. セマンティック HTML5 タグ (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) を使用する。
3. すべてのインタラクティブ要素にはアクセシビリティを考慮した属性やクラスを設定する。

---

## 3. 開発・検証コマンド

### ローカル開発サーバー起動
```bash
export PATH="$HOME/.local/share/mise/shims:$PATH"
pnpm dev
```

### リントチェック & 自動修正
```bash
export PATH="$HOME/.local/share/mise/shims:$PATH"
pnpm lint
```

### テスト実行 (Jest)
```bash
export PATH="$HOME/.local/share/mise/shims:$PATH"
pnpm test
```

### 静的サイト生成 (ビルド) の検証
```bash
export PATH="$HOME/.local/share/mise/shims:$PATH"
pnpm generate
```

---

## 4. 変更作業時の開発フロー

1. **仕様確認 & 調査**:
   - `pages/` や `components/` 内の関連する既存コード・スタイルを確認する。
2. **コード実装**:
   - ESLint / Prettier 規約に準拠した形式で記述する。
   - TypeScript を使用する場合は明示的な型定義を行う。
3. **検証**:
   - `pnpm lint` で構文・フォーマットを検証。
   - `pnpm test` で単体テストをパスさせる。
   - `pnpm generate` または Playwright を用いて表示・動作確認を行う。
4. **コミット・PRルール**:
   - 不要な試行錯誤コミットを整理し、テーマごとに1つのクリーンなコミットにまとめる。
   - PR 作成・更新時は `env gh` コマンドを使用する。
