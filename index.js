const baseConfig = require('./.eslintrc.json');

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    'prettier/prettier': [
      'error',
      require('./prettier.js')
    ],
  }
};
