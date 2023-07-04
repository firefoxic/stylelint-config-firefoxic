<!-- markdownlint-disable MD024 -->
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- The `at-rule-empty-line-before` rule now disallows an empty line between the same-named blockless at-rules.

	```css
	/* The correct code */
	@charset "UTF-8";

	@import "a.css";
	@import "b.css";

	/* The incorrect code */
	@charset "UTF-8";

	@import "a.css";

	@import "b.css";
	```

- The `block-no-empty` rule now considers blocks containing only comments as empty.

	```css
	/* The correct code */
	a {
		/* comment */
		gap: 1em;
	}

	/* The incorrect code */
	a {
		/* comment */
	}
	```

- The `declaration-block-single-line-max-declarations` rule now disallows single-line blocks.

	```css
	/* The correct code */
	a {
		gap: 0;
	}

	/* The incorrect code */
	a { gap: 0; }
	```

- The `declaration-colon-newline-after` rule now requires a newline after a colon for multiline declarations.

	```css
	/* The correct code */
	a {
		background:
			url("foo.png"),
			url("bar.png");
	}
	a {
		transform:
			translate(
				1px,
				1px
			);
	}

	/* The incorrect code */
	a {
		background: url("foo.png"),
			url("bar.png");
	}
	a {
		transform: translate(
			1px,
			1px
		);
	}
	```

- The `font-family-name-quotes` rule now disallows quotes around the font name if it is a [valid CSS identifier](https://www.w3.org/TR/CSS22/syndata.html#value-def-identifier).

	```css
	/* The correct code */
	a {
		font-family: fira sans, sans-serif;
	}

	/* The incorrect code */
	a {
		font-family: "fira sans", sans-serif;
	}
	```

- The `font-family-no-duplicate-names` rule now allows duplication of the generic font family keyword `monospace`.

	```css
	/* The correct code */
	a {
		font-family: monospace, monospace;
	}

	/* The incorrect code */
	a {
		font: 1em system-ui, sans-serif, sans-serif;
	}

- The `import-notation` rule now disallows the `url()` function for the `@import` at-rule.

	```css
	/* The correct code */
	@import "foo.css";

	/* The incorrect code */
	@import url("foo.css");
	```

- The `number-max-precision` rule now allows values with precision 9 in the `oklch()` and `oklab()` functions, and with precision 3 in all other cases.

	```css
	/* The correct code */
	a {
		gap: 0.123em;
		color: oklch(69.83% 0.123456789 44);
		background: oklab(0.74, 0.123456789, 0.123456789);
	}

	/* The incorrect code */
	a {
		gap: 0.1234em;
		color: oklch(69.83% 0.1234567891 44);
		background: oklab(0.74, 0.1234567891, 0.1234567891);
	}

- The `property-no-unknown` rule now ignores descriptors in the `@font-feature-values` at-rule.

	```css
	/* The correct code */
	@font-feature-values my font {
		@swash {
			pretty: 1;
			cool: 2;
		}
	}

	a {
		--my-property: my-value;
		color: #000000;
	}

	/* The incorrect code */
	a {
		my-property: my-value;
		colour: #000000;
	}
	```

- The `value-keyword-case` rule now requires only lower case for all keywords.

	```css
	/* The correct code */
	a {
		color: currentcolor;
	}

	/* The incorrect code */
	a {
		color: currentColor;
	}
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
