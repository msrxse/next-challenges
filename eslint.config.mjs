import { dirname } from 'path'
import js from '@eslint/js'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      'next',
      'next/core-web-vitals',
      'next/typescript',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    plugins: ['react', '@typescript-eslint'],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      // 'max-len': ['error', { code: 80, ignoreUrls: true }],
    },
  }),
]

export default eslintConfig
