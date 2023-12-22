module.exports = {
  root: true,
  env: { node: true, es6: true },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },

  plugins: ['eslint-plugin-import', '@typescript-eslint'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],

  ignorePatterns: ['node_modules', 'dist', '*.js'],

  rules: {
    'require-await': 'error',

    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/no-explicit-any': 'error',

    'no-warning-comments': ['error', { terms: ['import'] }],

    'no-console': ['error', { allow: ['warn', 'error'] }],

    'no-duplicate-imports': 'error',

    'no-self-compare': 'error',

    curly: 'error',

    eqeqeq: ['error', 'always'],

    'no-lonely-if': 'error',

    'no-unneeded-ternary': 'error',

    'prefer-template': 'error',

    'spaced-comment': 'error',

    '@typescript-eslint/no-useless-empty-export': 'error',

    '@typescript-eslint/prefer-enum-initializers': 'error',

    '@typescript-eslint/prefer-optional-chain': 'error',

    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],

    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'nestjs/*',
            group: 'type',
          },
          {
            pattern: 'supertest',
            group: 'unknown',
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
  },
}
