# eslint-config-rollup

A shareable ESLint configuration for Rollup projects

## Install

```
$ npm install eslint-config-rollup --save-dev
```

## Usage

This config can be used one of two ways:

### package.json:

```json
{
  "name": "snoochi-boochies",
  "eslintConfig": {
    "extends": "rollup"
  }
}
```

### .eslintrc

```json
{
  "extends": "rollup"
}
```
## Prettier

This package also exports the [prettier config](./prettier.js) that is used in the eslint config.

## License

[LICENSE (MIT)](./LICENSE)
