module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  ecmaFeatures: {
    jsx: true, // Allows for the parsing of JSX
  },
  rules: {
    'import/no-unresolved': 'off',
    'prettier/prettier': ['warn'],
    'react/jsx-fragments': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
