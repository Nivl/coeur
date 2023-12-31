module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/jsx-runtime',
      'plugin:prettier/recommended',
      'prettier',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^\\u0000'], ['^@?\\w'], ['^'], ['^\\.', '^(@/)']],
        },
      ],
      'simple-import-sort/exports': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 0,
      'prettier/prettier': ['error', {
        singleQuote: true,
        proseWrap: "always",
        trailingComma: "all",
        arrowParens: "avoid",
      }],
      'no-console': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      'import/no-default-export': 'error',
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-misused-promises": "error"
    },
    overrides: [
      {
        files: ['**/*.stories.*'],
        rules: {
          'import/no-anonymous-default-export': 'off',
          'import/no-default-export': 'off',
        },
      },
    ],
  };
