const base = require('./configs/config.json');
const prettier = require('./configs/prettier.json');

base.rules = Object.assign(base.rules, { 'prettier/prettier': ['error', prettier] });

module.exports = base;
