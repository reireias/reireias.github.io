module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'jest'],
  globals: {
    defineNuxtConfig: 'readonly',
    definePageMeta: 'readonly',
    useVuetify: 'readonly',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
