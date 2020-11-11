module.exports = {
  extends: [
    'ecubelabs',
    'react-app',
    // Put 'plugin:prettier/recommended' last.
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  settings: {
    // 'import/resolver': {
    //   webpack: {
    //     config: './webpack.config.js',
    //   },
    // },
    // 'import/extensions': ['.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // '@typescript-eslint/indent': 'off',
    // 'class-methods-use-this': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-member-accessibility': 'off',
    // 'react/jsx-one-expression-per-line': 'off',
    // 'import/no-unresolved': ['error', { ignore: ['enzyme', '@material-ui/*'] }],
    // 'react/jsx-filename-extension': 'off',
    // '@typescript-eslint/no-var-requires': 'off',
    // 'import/no-unresolved': 'off',
    // 'no-case-declarations': 'off',
    // 'no-unused-expressions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.spec.*', '**/*.stories.*'] }],
    // '@typescript-eslint/prefer-interface': 'off',
    // 'implicit-arrow-linebreak': 'off', // TODO: 임시. https://github.com/eslint/eslint/issues/11408
    // 'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    // 'react/no-array-index-key': 'error',
    // https://stackoverflow.com/a/59268871
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prettier/prettier': 'error',
  },
};
