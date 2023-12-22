module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  settings: { react: { version: 'detect' } },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: ['*.js', '*.d.ts'],
  plugins: ['@typescript-eslint', 'jsdoc', 'import', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  rules: {
    curly: 'error',

    eqeqeq: ['error', 'always'],

    'no-warning-comments': ['error', { terms: ['import'] }],

    'no-console': ['error', { allow: ['warn', 'error'] }],

    'no-duplicate-imports': 'error',

    'no-self-compare': 'error',

    'no-lonely-if': 'error',

    'no-alert': 'error',

    'no-unneeded-ternary': 'error',

    'prefer-template': 'error',

    'spaced-comment': 'error',

    'jsx-a11y/anchor-is-valid': 'off',

    'react/display-name': 'off',

    'jsx-a11y/no-autofocus': 'off',

    'react/prop-types': 'off',

    'react/react-in-jsx-scope': 'off',

    '@typescript-eslint/no-unused-vars': 'error',

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/no-explicit-any': 'error',

    '@typescript-eslint/no-useless-empty-export': 'error',

    '@typescript-eslint/prefer-enum-initializers': 'error',

    '@typescript-eslint/prefer-optional-chain': 'error',

    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'next/*',
            group: 'builtin',
          },
          {
            pattern: 'react',
            group: 'builtin',
          },
          {
            pattern: '@mui/*',
            group: 'external',
            position: 'before',
          },
        ],
        groups: [
          'builtin',
          'internal',
          'external',
          ['parent', 'sibling'],
          'object',
          'unknown',
          'index',
          'type',
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'internal', 'parent'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],

    
  },
  overrides: [
    {
      files: ['**/*.tsx', '**/*.option.ts', '**/*.config.ts', '**hook.ts'],
    },
  ],
}
