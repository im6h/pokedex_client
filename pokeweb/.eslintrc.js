module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	plugins: ['@typescript-eslint'],
	ecmaFeatures: {
		jsx: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		'import/no-unresolved': 'off',
		'prettier/prettier': 'off',
		'react/jsx-fragments': 'off',
		'import/prefer-default-export': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
