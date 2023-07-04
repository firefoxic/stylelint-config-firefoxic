# stylelint-config-firefoxic

[![Test Status][test-image]][test-url]
[![License: MIT][license-image]][license-url]
[![NPM version][npm-image]][npm-url]
[![Vulnerabilities count][vulnerabilities-image]][vulnerabilities-url]

> The shareable config for Stylelint from [firefoxic](https://firefoxic.dev).

Use it as is or as a foundation for your own config.

To see the rules that this config uses, please read the [config itself](./.stylelintrc).

## Installation

```shell
npm i -D stylelint-config-firefoxic
```

## Usage

Set your `stylelint` config to:

```json
{
	"extends": "stylelint-config-firefoxic"
}
```

Or specify an absolute path when installing the package globally.

```json
{
	"extends": "/absolute/path/to/stylelint-config-firefoxic"
}
```

## Extending the config

Add a `"rules"` key to your config, then add your overrides and additions there.

You can turn off rules by setting its value to `null`. For example:

```json
{
	"extends": "stylelint-config-firefoxic",
	"rules": {
		"selector-not-notation": null
	}
}
```

Or lower the severity of a rule to a warning using the `severity` secondary option. For example:

```json
{
	"extends": "stylelint-config-firefoxic",
	"rules": {
		"property-no-vendor-prefix": [
			true,
			{
				"severity": "warning"
			}
		]
	}
}
```

If your styles syntax is different from CSS, then install [the package of the syntax you need](https://github.com/postcss/postcss#syntaxes), specify it at the beginning of your configuration file and add or override some rules:

```json
{
	"customSyntax": "postcss-scss",
	"extends": "stylelint-config-firefoxic",
	"rules": {
		"at-rule-no-unknown": [
			true,
			{
				"ignoreAtRules": [
					"mixin",
					"include"
				]
			}
		]
	}
}
```

## Usage in VSCode

1. Install [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) plugin for VSCode
2. Install stylelint:
	- globally — `npm i -g stylelint`
	- or locally in your project — `npm i -D stylelint`
3. Inconsistencies with `stylelint-config-firefoxic` rules will be underlined with a red wavy line.

## Useful links

- [Changelog](CHANGELOG.md)
- [License](LICENSE)
- [Stylelint documentation](https://stylelint.io)

[test-url]: https://github.com/firefoxic/stylelint-config-firefoxic/actions
[test-image]: https://github.com/firefoxic/stylelint-config-firefoxic/actions/workflows/test.yml/badge.svg?branch=main

[npm-url]: https://npmjs.org/package/stylelint-config-firefoxic
[npm-image]: https://badge.fury.io/js/stylelint-config-firefoxic.svg

[license-url]: https://github.com/firefoxic/stylelint-config-firefoxic/blob/main/LICENSE
[license-image]: https://img.shields.io/badge/License-MIT-limegreen.svg

[vulnerabilities-url]: https://snyk.io/test/github/firefoxic/stylelint-config-firefoxic
[vulnerabilities-image]: https://snyk.io/test/github/firefoxic/stylelint-config-firefoxic/badge.svg
