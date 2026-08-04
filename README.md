# reireias.dev

[![deploy](https://github.com/reireias/reireias.github.io/workflows/deploy/badge.svg)](https://github.com/reireias/reireias.github.io/actions/workflows/deploy.yml)
[![test](https://github.com/reireias/reireias.github.io/workflows/test/badge.svg)](https://github.com/reireias/reireias.github.io/actions/workflows/test.yml)

Portfolio site published at [reireias.dev](https://reireias.dev).

## Tech stack

- Nuxt 4 / Vue 3
- Vuetify
- TypeScript / JavaScript
- pnpm
- Jest / Playwright
- ESLint / Prettier / Stylelint

## Setup

Tool versions are managed with [mise](https://mise.jdx.dev/) and defined in
`.mise.toml`.

```bash
mise install
pnpm install --frozen-lockfile
```

## Development

Start the development server:

```bash
pnpm dev
```

Generate the static site and serve the generated `dist` directory:

```bash
pnpm generate
pnpm start-static
```

## Quality checks

Run checks according to the scope of the change:

```bash
pnpm lint
pnpm lint:style
pnpm test
pnpm generate
pnpm test:e2e
pnpm knip
```

To update files automatically where supported, use `pnpm lintfix` and
`pnpm lint:style:fix`. UI captures can be created with `pnpm capture`.

## Deployment

A push to `master` triggers the deploy workflow. It generates the static site
and publishes `dist` to the `release` branch. Do not deploy manually or push
directly to `master`; submit changes through a pull request.

## AI agent configuration

Antigravity CLI and Codex CLI share their project rules and skills through
[Rulesync](https://github.com/dyoshikawa/rulesync).

- Edit `.rulesync/` and `rulesync.jsonc`, which are the source of truth.
- Do not edit generated `AGENTS.md` or files under `.agents/` directly.
- Commit both the source files and generated files.

After changing the configuration, regenerate it and verify synchronization:

```bash
pnpm ai:generate
pnpm ai:check
```
