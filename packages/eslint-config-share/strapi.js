module.exports = {
	extends: ['eslint:recommended', 'turbo', 'prettier'],
	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: false,
		},
		sourceType: 'module',
	},
	env: {
		commonjs: true,
		es6: true,
		node: true,
		browser: false,
	},
	globals: {
		strapi: true,
	},
	rules: {
		'linebreak-style': ['error', 'unix'],
		'no-console': 0,
	},
}
