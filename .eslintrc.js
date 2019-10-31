module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prefer-stateless-function': 'off',
    'react/require-default-props': 'off',
    'react/no-danger': 'off',
    'react/forbid-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'consistent-return': 'off',
  },
  settings: {
    'import/core-modules': [],
  },
};
