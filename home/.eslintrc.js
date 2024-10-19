module.exports = {
	root: true,
	extends: [
		"next/core-web-vitals",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	env: {
		node: true,
		es2021: true,
	},
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module'
	},
	"rules": {
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-explicit-any": "off"
	}
};