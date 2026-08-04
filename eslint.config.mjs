import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { includeIgnoreFile } from '@eslint/compat'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import pluginJest from 'eslint-plugin-jest'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

export default [
  includeIgnoreFile(gitignorePath),
  eslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        defineNuxtConfig: 'readonly',
        definePageMeta: 'readonly',
        defineAppConfig: 'readonly',
      },
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]
