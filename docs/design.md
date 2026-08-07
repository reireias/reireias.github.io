# Design System

このドキュメントは、`reireias.dev` のフロントエンドリニューアルで使用するデザイン原則と実装ルールを定義する。後続のUI実装では、ページ固有の判断よりもこのドキュメントを優先する。

## Purpose

このサイトは、SRE、セキュリティ、システムアーキテクチャ、AI Engineeringに関する経験と成果を伝える個人ポートフォリオである。

主な閲覧者は次のとおり。

- 技術的な経歴や専門性を知りたいエンジニア、採用担当者、協業候補者
- 記事、登壇資料、制作物を探している人
- GitHub、Zenn、Speaker Deckなどの外部活動へアクセスしたい人

## Design Concept

### Monokai Technical

デザインコンセプトは「Monokai Technical」とする。

現行サイトのMonokai由来の配色をブランドとして継承し、余白とタイポグラフィを中心に読みやすさを改善する。グリッド、monospace、cyanなどのterminal的な表現は、技術者らしさを示すアクセントとして限定的に使用する。

キーワードは次のとおり。

- Calm
- Technical
- Reliable
- Structured
- Thoughtful

### Design Principles

1. **Content first**: 装飾よりも、人物、専門性、成果が速やかに伝わることを優先する。
2. **Technical, not theatrical**: 技術的な表現は使うが、terminalの模倣や過剰な演出を目的にしない。
3. **Quiet confidence**: 色数と装飾を抑え、タイポグラフィ、余白、整列で信頼感をつくる。
4. **Accessible by default**: キーボード、コントラスト、動きの軽減を設計段階から考慮する。
5. **System over exceptions**: ページ固有の値を増やさず、semantic tokenと共通コンポーネントを使う。

### References

- [Brittany Chiang](https://brittanychiang.com/): ダークテーマにおける情報階層、経歴と実績の構成
- [Lee Robinson](https://leerob.com/): 文章を主役にした簡潔な情報設計
- [Rauno Freiberg](https://rauno.me/): 抑制されたインタラクションと細部の質感

参考サイトのレイアウトや表現をそのまま再現せず、上記の観点のみを参照する。

## Color

### Color Mode

初期リニューアルではダークテーマのみを提供する。ライトテーマは必須要件にせず、semantic tokenを使うことで将来追加できる構造を維持する。

### Brand Palette

| Token | Value | Usage |
| --- | --- | --- |
| `brand-green` | `#a6e22e` | ブランド、主要アクション、セクションラベル |
| `technical-cyan` | `#66d9ef` | 技術的アクセント、focus、補助的な状態 |
| `accent-violet` | `#ae81ff` | 図表などで第3色が必要な場合のみ |

`brand-green`と`technical-cyan`を同じ面積や強さで競合させない。greenをprimary、cyanをsecondaryとして扱う。

### Semantic Colors

| Token | Value | Usage |
| --- | --- | --- |
| `background` | `#131613` | ページ背景 |
| `surface` | `#1d211d` | カード、ナビゲーション、浮いた領域 |
| `surface-hover` | `#242924` | hoverされたsurface |
| `text` | `#f1f4ec` | 見出し、主要本文 |
| `text-muted` | `#9da69a` | 補足、メタデータ |
| `border` | `#323a31` | 装飾的な区切り線、カード境界 |
| `border-strong` | `#657064` | 入力欄など、識別に境界が必要なUI |
| `primary` | `#a6e22e` | CTA、active、ブランド |
| `secondary` | `#66d9ef` | focus、技術的アクセント |
| `success` | `#a6e22e` | 成功状態 |
| `info` | `#66d9ef` | 情報状態 |
| `warning` | `#fd971f` | 警告状態 |
| `error` | `#f92672` | エラー状態 |

### Color Rules

- 通常本文には`text`または`text-muted`を使用し、brand colorを長文に使用しない。
- primary背景上の文字には`background`相当の暗色を使用する。
- 色だけで状態や選択を伝えず、ラベル、アイコン、境界などを併用する。
- 新しい色を追加する前にsemantic tokenで表現できないか確認する。
- 通常文字はWCAG AAの4.5:1、大きな文字とUI境界は3:1以上のコントラストを確保する。
- 装飾的な区切り線には`border`、識別に境界が必要なcontrolには`border-strong`またはsecondaryを使用する。

### Nuxt UI Mapping

Nuxt UI移行後は、色名をコンポーネント内へ直接記述せず、`app.config.ts`とCSS variablesへ集約する。

```ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      secondary: 'cyan',
      success: 'green',
      info: 'cyan',
      warning: 'orange',
      error: 'pink',
      neutral: 'zinc',
    },
  },
})
```

実際のpalette名とshadeは、Nuxt UI移行時に上記のhex値へ最も近くなるよう定義する。

## Typography

### Font Families

| Role | Font |
| --- | --- |
| Display / Body | `Inter`, `Noto Sans JP`, system-ui, sans-serif |
| Technical | `JetBrains Mono`, ui-monospace, monospace |

- 日本語を含む見出しと本文はsans-serifを使用する。
- monospaceはナビゲーション、セクションラベル、日付、タグ、コードに限定する。
- 長文やすべての見出しをmonospaceにしない。
- Webフォントを使用する場合は必要なweightだけを読み込み、`font-display: swap`を使用する。

### Type Scale

| Role | Desktop | Mobile | Weight | Line height |
| --- | --- | --- | --- | --- |
| Hero | `clamp(3.75rem, 7vw, 6.75rem)` | `clamp(3rem, 15vw, 4.5rem)` | 650–700 | 0.95 |
| H1 | `3.5rem` | `2.5rem` | 650–700 | 1.1 |
| H2 | `2.25rem` | `1.75rem` | 650–700 | 1.2 |
| H3 | `1.35rem` | `1.25rem` | 600–700 | 1.35 |
| Lead | `1.125rem` | `1rem` | 400 | 1.8 |
| Body | `1rem` | `1rem` | 400 | 1.75 |
| Small | `0.875rem` | `0.875rem` | 400–600 | 1.6 |
| Label | `0.75rem` | `0.75rem` | 600 | 1.5 |

Heroは英語の短いメッセージにのみ使用する。日本語本文の1行はおおむね35〜45文字、欧文本文は65〜75文字を上限とする。

## Spacing, Radius, Border and Shadow

### Spacing

4pxを基準とし、次のscaleのみを使用する。

| Token | Value |
| --- | --- |
| `space-1` | `4px` |
| `space-2` | `8px` |
| `space-3` | `12px` |
| `space-4` | `16px` |
| `space-6` | `24px` |
| `space-8` | `32px` |
| `space-12` | `48px` |
| `space-16` | `64px` |
| `space-24` | `96px` |

通常のセクション間隔はデスクトップで96px、モバイルで64〜72pxとする。

### Radius

| Token | Value | Usage |
| --- | --- | --- |
| `radius-sm` | `4px` | 小さなcontrol |
| `radius-md` | `8px` | button、card |
| `radius-lg` | `12px` | 大きなsurface |
| `radius-full` | `9999px` | tag、avatar |

角丸を装飾目的で大きくしすぎない。基本値は8pxとする。

### Border

- 通常は`1px solid border`を使用する。
- セクションは余白と水平線で区切り、すべてをカードで囲まない。
- technical accentを示すカードでは、左辺のみsecondaryへ変更してよい。

### Shadow

- 通常のカードにblur shadowを使用しない。
- 注目コンテンツまたはtechnical accentに限り、`4px 4px 0 rgb(102 217 239 / 8%)`のoffset shadowを使用できる。
- elevationはshadowだけでなく、背景色とborderで表現する。

## Layout

### Breakpoints

| Name | Width | Policy |
| --- | --- | --- |
| Mobile | `< 640px` | 1 column、16px side padding |
| Tablet | `640–1023px` | 1〜2 columns、24px side padding |
| Desktop | `>= 1024px` | 2〜3 columns、32px side padding |

コンポーネントの内容に応じてcontainer queryを使用してよい。device名だけを理由にレイアウトを分岐しない。

### Containers

| Role | Max width |
| --- | --- |
| Text | `720px` |
| Default | `960px` |
| Wide | `1120px` |

- ページの主要領域は中央揃えにする。
- 全幅背景を使用しても、テキストと操作要素はcontainer内に置く。
- 長文ページはtext containerを使用する。

### Navigation

- デスクトップは上部headerにブランドと主要ナビゲーションを配置する。
- 現在の常設sidebarは廃止する。
- モバイルではメニューボタンからナビゲーションを展開する。
- 現在地は色だけでなく、下線、背景、`aria-current="page"`などで示す。
- headerはコンテンツを隠さず、必要な場合のみstickyにする。
- headerの主要項目は`reireias.dev`、`About`、`Experience`、`Skills`、`Articles`とする。
- Homeでは`About`と`Experience`を同一ページ内のanchor、`Skills`と`Articles`を詳細ページへのlinkとする。
- 詳細ページの`About`と`Experience`は、Homeのanchorへ戻る絶対パスを使用する。
- ContactとSandboxはfooterへ配置し、headerの主要項目には含めない。

### Page Structure

基本構造は次のとおり。

1. Header
2. HeroまたはPage title
3. Primary content sections
4. Related linksまたはCTA
5. Footer

ページタイトル、セクションラベル、本文開始位置をページ間で揃える。

### Information Architecture

サイト全体は、Homeで人物と主要な実績を一続きに伝え、情報量の多いコンテンツを詳細ページで深掘りするハイブリッド構成とする。すべてのコンテンツをHomeへ詰め込まない。

```text
/
├─ #about
├─ #expertise
├─ #experience
├─ #work
└─ #contact

/skills
/articles
/sandbox
└─ /sandbox/anime

Error
└─ 404
```

#### Home `/`

- Hero、About、Expertise、Experience、Selected Work、Social / Contactの順を基本とする。
- 現在のProfileとJobの主要内容をAboutとExperienceへ統合する。
- Expertiseは代表項目3〜6件に絞り、`/skills`へ詳細導線を設ける。
- Selected Workは代表記事・登壇3〜6件に絞り、`/articles`へ一覧導線を設ける。
- scroll-linked animationはHero区間だけに適用し、以降のsectionは通常のscrollで読めるようにする。

#### Skills `/skills`

- 全スキルと詳細な経験、実績、技術タグ、資格を扱う。
- 情報量に応じてカテゴリ分けとaccordionを使用できる。
- Homeと内容を重複させず、Homeでは概要、Skillsでは根拠と詳細を示す。

#### Articles `/articles`

- 記事、登壇資料、制作物の一覧を扱う。
- title、種別、公開年、媒体、技術カテゴリ、短いdescriptionを表示する。
- 初期リニューアルではサイト内の記事詳細ページを作らず、各コンテンツの外部URLへ遷移させる。
- 件数が増えた場合にfilterやpaginationを追加できる構造とするが、初期実装の必須要件にはしない。

#### Sandbox `/sandbox`

- UI、animation、技術検証などの実験的コンテンツを扱う。
- headerの主要ナビゲーションには含めず、footerから控えめに導線を設ける。
- 個別の実験は`/sandbox/<slug>`に配置する。
- 実験の目的に必要な範囲でデザインルールから外れてよいが、基本的なaccessibilityを損なわない。

#### URL Migration

| Current | Destination |
| --- | --- |
| `/profile` | `/#about` |
| `/job` | `/#experience` |
| `/skill` | `/skills` |

- 既存URLからは、ホスティング方式で可能な恒久redirect、またはcanonicalを設定した静的な移行ページを提供する。
- 内部link、sitemap、canonical URLは新しいURLへ統一する。
- 詳細ページではブランドからHomeへ戻れるようにし、Home内anchorには`/#about`のような絶対パスを使用する。

## Component Rules

### Buttons and Links

- primary buttonは1つのviewportまたはsectionにつき原則1つとする。
- primaryはgreen背景、暗色文字を使用する。
- secondary actionはoutlineまたはtext linkを使用する。
- 外部リンクには必要に応じて外部遷移アイコンと、スクリーンリーダー向けの説明を付ける。
- hoverだけに依存せず、keyboard focusでも同等のフィードバックを提供する。

### Cards

- カードは異なる情報単位をまとめる場合に使用する。
- 同じページ内のカードはpadding、border、heading位置を揃える。
- カード全体がリンクの場合、内部に競合する操作要素を置かない。
- decorative hoverは`translateY(-2px)`から`-3px`以内とする。

### Tags and Badges

- 技術名やカテゴリにはpill型tagを使用できる。
- 本文より小さいmonospaceを使用する。
- tagの色数を増やさず、通常はsecondaryの低彩度背景を使用する。

### Timeline

- 年をmonospaceで表示し、本文と視覚的に分離する。
- モバイルでは1columnにし、反対側へ情報を配置しない。
- 色だけでカテゴリを区別しない。

### Accordion

- 長いSkill一覧など、概要から詳細を段階的に読む用途に使用する。
- headingとbuttonのsemanticsを保ち、keyboard操作をNuxt UIの標準実装へ委ねる。
- 重要情報を初期状態で隠さない。

### Article Card

- title、source、published date、短いdescriptionを基本要素とする。
- thumbnailは必須とせず、画像の品質が揃わない場合はtypography中心にする。
- 外部OG画像へ依存する場合は、読み込み失敗時もtitleが読める構造にする。

### Nuxt UI Usage

- semantic HTMLだけで十分な場合は、不要なwrapper componentを追加しない。
- interactive componentはNuxt UIを優先し、keyboard navigationとfocus managementを活用する。
- 共通変更は`app.config.ts`のglobal themeで行う。
- `ui` propやページ固有classによる上書きは、共通themeで表現できない場合に限定する。
- component variantには見た目ではなく目的が分かる名前を使用する。

## Motion

### Principles

Motionは、状態変化、空間的な関係、サイトの個性を伝えるために使用する。内容の理解を遅らせる装飾には使用しない。

| Token | Duration | Usage |
| --- | --- | --- |
| `motion-fast` | `120ms` | hover、focus、色の変化 |
| `motion-normal` | `200ms` | button、card、small reveal |
| `motion-slow` | `320ms` | section transition、larger reveal |

- 基本easingは`ease-out`とする。
- 移動とfadeには`transform`と`opacity`を優先する。
- hoverの移動距離は2〜3px以内とする。
- 無限loop、常時点滅、装飾目的の大きなparallaxは使用しない。

### Home Scroll-linked Animation

Homeは、通常のスクロールに連動するシグネチャーアニメーションを使用する。Heroは固定せず、スクロール操作と同時にAboutが画面内へ入り始める構造とする。

アバター、名前、肩書き、紹介文は最初から完成状態で表示し、背景のTopologyのみをscroll progress 0〜100%として変化させる。

| Progress | State |
| --- | --- |
| `0–25%` | 薄いtechnical gridと疎らなcyanのnodeを表示する |
| `25–70%` | node間の経路が段階的に接続され、Topologyが明るくなる |
| `70–100%` | 接続状態を保ったままTopologyを弱め、Aboutへつなぐ |

実装時は次を必須とする。

- Heroはheaderを除く1画面以内とし、追加のスクロール領域を設けない。
- 背景アニメーションの進行範囲はdesktopで`75svh`、mobileで`65svh`を目安とする。
- mobileはTopologyを中央部分へ絞り、node数と経路の情報量を減らす。
- 前景コンテンツの背面には保護領域を設け、Topologyとのコントラストを一定に保つ。
- wheel、touch、keyboardによる通常のスクロール位置や速度を変更しない。
- Hero演出にscroll snapを使用しない。
- animationの進行にかかわらず主要情報へアクセスできる構造にする。
- JavaScriptが無効または失敗した場合は、最終状態の内容を表示する。
- Core Web Vitalsへ影響する大きな画像やlayout shiftを発生させない。

Home以外のページでは、scroll-linked animationを原則使用しない。

### Reduced Motion

`prefers-reduced-motion: reduce`の場合、Homeの装飾的なsequenceを省略し、最終状態を即座に表示する。単にdurationを短くするだけでなく、大きな移動、拡大縮小、連続した点滅を取り除く。

## Technical Accents

次の表現をtechnical accentとして使用できる。

- 40px前後のごく薄いgrid背景
- headingやcursorに付けるcyanの`>`
- section番号、date、tagのmonospace
- card左辺のcyan border
- 小さなsignal、status、architecture diagram

同一sectionで複数を重ねすぎない。特に本文、すべての見出し、すべてのカードをterminal風にしない。

## Accessibility

- ページ構造に`header`、`nav`、`main`、`section`、`footer`を使用する。
- heading levelを飛ばさない。
- すべての操作をkeyboardで利用可能にする。
- focus indicatorを削除しない。基本は2pxのsecondary ringと2pxのoffsetを使用する。
- icon-only buttonにはaccessible nameを付ける。
- target sizeは原則44px四方以上とする。
- 意味のある画像には内容を説明する代替テキストを付け、装飾画像は空の代替テキストにする。
- 外部リンクの`target="_blank"`は、新しいタブで開くことが予測できる表現にする。
- 200% zoom、keyboard navigation、screen reader、reduced motionで主要フローを確認する。

Nuxt UIのaccessibilityを基礎として利用するが、ページ固有のlabel、heading、focus順序、コントラストは個別に検証する。

## Content Guidelines

- 見出しは内容を具体的に表し、装飾的な英語だけにしない。
- 経歴やSkillは技術名の羅列ではなく、何を実現できるかを先に書く。
- 記事や登壇資料は、title、媒体、年、短い説明を揃える。
- 日本語と英数字の間へ手動spaceを大量に挿入しない。
- `SRE / Security / Architecture`のような短いtechnical labelは英語でよい。

## Implementation Policy

このドキュメントでは次の強度を使用する。

- **MUST**: accessibility、semantic token、layoutの基本ルール。例外には理由とレビューが必要。
- **SHOULD**: 一貫性を保つための標準。合理的な理由があれば変更できる。
- **MAY**: technical accentなど、コンテンツに応じて選択できる表現。

実装時の優先順位は次のとおり。

1. Semantic HTMLとaccessibility
2. Content hierarchyとresponsive layout
3. Design tokenとcomponent consistency
4. Progressive enhancementとしてのmotionとtechnical accent

## Review Checklist

UIを追加または変更するときは、次を確認する。

- [ ] semantic color、spacing、radius tokenを使用している
- [ ] page固有のmagic numberや色を不要に追加していない
- [ ] desktopとmobileで情報の優先順位が保たれている
- [ ] keyboardで操作でき、focusが視認できる
- [ ] textとUI componentのcontrastが基準を満たす
- [ ] hoverがなくても情報と操作が理解できる
- [ ] `prefers-reduced-motion`で主要内容が利用できる
- [ ] animationが通常のscrollを妨げない
- [ ] loadingや外部画像の失敗時にも主要情報が読める
- [ ] `pnpm lint`、`pnpm lint:style`、関連test、`pnpm generate`が成功する

## Design Study

Monokai、Terminal、その混合案を比較し、Monokai Technicalを採用した。比較用キャプチャはIssue #558と関連Pull Requestに添付し、リポジトリにはコミットしない。

キャプチャは方向性を共有するための参考資料であり、pixel-perfectな完成仕様ではない。実装ではこのドキュメントのtoken、accessibility、responsive、motionのルールを正本とする。
