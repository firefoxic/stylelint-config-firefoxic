import test from "node:test"
import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
// import { join } from "../.stylelintrc"

import stylelint from "stylelint"
import path from "node:path"

/**
 * Test the specified rule with its configuration from the `.stylelintrc` file.
 *
 * @param {Object} test - Test run parameters.
 * @param {string} test.description - The description of the test.
 * @param {string} [test.rule] - The name of the rule under test. If not specified, stylelint will use all the rules in the `.stylelintrc` file.
 * @param {Object} [test.plugin] - The plugin required for the rule under test.
 * @param {string} test.code - The code for the rule under test.
 * @param {Array} test.expectedWarnings - Full data of the warnings expected in the test.
 * @returns {Promise} A promise that resolves when the test is complete.
 */
export async function testRule ({ description, rule, plugin, code, expectedWarnings }) {
	let ruleName = `${plugin?.prefix || ``}${rule}`
	let config = rule && {
		plugins: plugin?.name && [plugin.name],
		rules: {
			[ruleName]: await getRuleConfig(ruleName),
		},
	}

	test(description, async () => {
		let { results: [{ warnings }] } = await stylelint.lint({ code, config })
		assert.deepEqual(warnings, expectedWarnings)
	})
}

console.log(path.resolve(`./.stylelintrc`)) // eslint-disable-line

/**
 * Get the rule config from the `.stylelintrc` file.
 *
 * @param {string} ruleName - The name of the rule.
 * @returns {any} The config of the specified rule.
 */
async function getRuleConfig (ruleName) {
	let configObject = JSON.parse(await readFile(path.resolve(`./.stylelintrc`), { encoding: `utf8` }))
	return configObject.rules[ruleName]
}
