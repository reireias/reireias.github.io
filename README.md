[![deploy](https://github.com/reireias/reireias.github.io/workflows/deploy/badge.svg)](https://github.com/reireias/reireias.github.io/actions/workflows/deploy.yml) [![test](https://github.com/reireias/reireias.github.io/workflows/test/badge.svg)](https://github.com/reireias/reireias.github.io/actions/workflows/test.yml)
# REIREIAS'S GITHUB PAGES

https://reireias.dev

Vue.js + Vuetify.js + Nuxt.js

![vue_vuetify_nuxt](https://user-images.githubusercontent.com/24800246/59352598-014f6980-8d5c-11e9-890a-41757d81207d.png)

## Lighthouse Score
![lighthouse](https://user-images.githubusercontent.com/24800246/59352011-a0736180-8d5a-11e9-9634-876c991be867.png)

## install

```bash
yarn install
```

## run develop mode

```bash
yarn dev
```

## build for static site

```bash
yarn generate
```

## deploy to master branch

```bash
yarn deploy
```

## run static site for local

```bash
yarn start-static
```

## run lint

```bash
yarn lint
```

## fix lint error

```bash
yarn lintfix
```

## benchmark with PageSpeed Insights

```bash
mkdir -p tmp/raw
yarn benchmark
# create result file in tmp directory.
```

View result [Lighthouse Report Viewer](https://googlechrome.github.io/lighthouse/viewer/)
