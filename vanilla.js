const vanilla = require('./');

delete vanilla.parser;
delete vanilla.parserOptions.project;

vanilla.plugins = vanilla.plugins.filter((plugin) => plugin !== '@typescript-eslint');

Object.keys(vanilla.rules).forEach((key) => {
  if (key.startsWith('@typescript')) delete vanilla.rules[key];
});

module.exports = vanilla;
