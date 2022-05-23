module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021
  },
  extends: [
    'plugin:sonarjs/recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/standard',
    '@vue/typescript/recommended',
    '@vue/prettier',
    // 'plugin:vuejs-accessibility/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'vue',
    'sonarjs',
    'simple-import-sort',
    'vuejs-accessibility',
    'prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/component-name-in-template-casing': 'off',

    'prettier/prettier': ['warn'],

    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/v-on-event-hyphenation': ['error', 'never']
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/*.spec.{j,t}s?(x)',
        '**/*.test.{j,t}s?(x)',
        './tests/unit/setup.ts'
      ],
      env: {
        jest: true
      },
      rules: {
        'no-undef': 'off'
      }
    },
    {
      files: ['.eslintrc.js', '*.config.js'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        'unicorn/prefer-module': 'off'
      }
    },
    {
      files: ['*.tsx'],
      rules: {}
    },
    {
      files: ['*.json'],
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
