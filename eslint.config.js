const eslintRecommended = require('@eslint/js/src/configs/eslint-recommended');
const globals = require('globals');
const react = require('eslint-plugin-react');
const reactRecommended = require('eslint-plugin-react/configs/recommended');
//const prettierRecommended = require('eslint-plugin-prettier/eslint-plugin-prettier');

//"plugin:prettier/recommended" ----> reactRecommended
//"eslint:recommended",         ----> eslintRecommended
module.exports = [
  eslintRecommended,
  reactRecommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        //es2021: true
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    plugins: [react],
    //...reactRecommended,
    //...prettierRecommended,
    files: ['**/*.{js,jsx}'],
    ignores: ['**/*.config.js'],
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // TODO: REVIEW
      'no-unused-vars': 'off', // TODO: REVIEW
    },
  },
];
