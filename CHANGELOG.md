<!-- markdownlint-disable MD024 -->
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- The `import-notation` rule now disallows the `url()` function for the `@import` at-rule.

	```css
	/* The correct code */
	@import "foo.css";

	/* The incorrect code */
	@import url("foo.css");
	```

## [1.2.3] — 2023–05–22

### Changed

- Package converted to ESM.
- Reorganized `package.json`.

## [1.2.1] — 2023–03–28

### Added

- Badge for the vulnerabilities count.

## [1.2.0] — 2023–03–28

### Added

- The [`selector-anb-no-unmatchable`](https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable/) rule with the requirement **not** to use the unmatchable `An+B` selectors.

	```css
	/* The correct code */
	a:nth-child(1) {}
	a:nth-last-child(1n) {}
	a:nth-of-type(1n+0) {}
	a:nth-last-of-type(1 of a) {}

	/* The incorrect code */
	a:nth-child(0) {}
	a:nth-last-child(0n) {}
	a:nth-of-type(0n+0) {}
	a:nth-last-of-type(0 of a) {}
	```

### Replaced

- Deprecated rules with rules from the [stylelint-codeguide](https://github.com/firefoxic/stylelint-codeguide/) plugin. Now you can continue to use the deleted properties by adding the prefix `codeguide/` to them.

## [1.1.0] — 2023–03–24

### Added

- The [`declaration-property-value-no-unknown`](https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown/) rule with the requirement **not** to use unknown values for the properties within declarations.

	```css
	/* The correct code */
	a { top: 0; }
	a { top: var(--foo); }

	/* The incorrect code */
	a { top: red; }
	a { top: unknown; }
	```

## [1.0.0] — 2022–12–05

### Added

- Basic project configuration
- Basic config file for Stylelint

[Unreleased]: https://github.com/firefoxic/gulp-stacksvg/compare/v1.2.3...HEAD
[1.2.3]: https://github.com/firefoxic/gulp-stacksvg/compare/v1.2.1...v1.2.3
[1.2.1]: https://github.com/firefoxic/gulp-stacksvg/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/firefoxic/gulp-stacksvg/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/firefoxic/gulp-stacksvg/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/firefoxic/gulp-stacksvg/releases/tag/v1.0.0
