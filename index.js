const baseConfig = require('./.eslintrc.json');

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
  }
};
