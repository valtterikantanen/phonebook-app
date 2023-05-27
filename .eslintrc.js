module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'react-app', 'react-app/jest'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }]
  },
  settings: {
    react: {
      version: '18.2.0'
    }
  }
};
