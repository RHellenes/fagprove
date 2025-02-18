module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    use: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "linebreak-style": ["error", "unix"],
    'semi': ['error', 'always'],

  }
}
