module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'prettier',
    'vue',
  ],
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', {
      endOfLine: 'auto',
    }],
    'linebreak-style': 'off', // turn off ESLint's handling of linebreaks
  },
};