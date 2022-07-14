module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {},
  // env: {
  //   browser: true,
  //   es2021: true
  // },
  // extends: [
  //   'plugin:vue/vue3-essential',
  //   'standard'
  // ],
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   parser: '@typescript-eslint/parser',
  //   sourceType: 'module'
  // },
  // plugins: [
  //   'vue',
  //   '@typescript-eslint'
  // ],
  // rules: {
  // }
}
