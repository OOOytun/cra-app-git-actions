module.exports = {
  extends: ['plugin:import/recommended', 'plugin:import/typescript'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'max-len': ['warn', { code: 120 }],
    // https://github.com/firebase/firebase-admin-node/discussions/1359
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^firebase-admin/.+'],
      },
    ],
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: './*+(styles|.styles)',
            group: 'index',
          },
          {
            pattern: '**/graphql',
            group: 'index',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        groups: [
          'external',
          'builtin',
          ['sibling', 'parent'],
          'internal',
          'object',
          'type',
          ['index'],
        ],
      },
    ],
  },
};
