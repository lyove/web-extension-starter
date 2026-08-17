import nodeConfig from './config/eslint/node.js';
import tsConfig from './config/eslint/typescript.js';
import reactConfig from './config/eslint/react.js';

export default [
	{
		ignores: [
			'node_modules/**',
			'extension/**',
			'config/**',
			'*.js',
			'*.mjs',
			'vite.config.ts',
		],
	},
	...nodeConfig({
		files: ['**/*.ts', '**/*.tsx'],
	}),
	...tsConfig({
		files: ['**/*.ts', '**/*.tsx'],
	}),
	...reactConfig({
		files: ['**/*.tsx'],
	}),
	{
		files: ['**/*.ts', '**/*.tsx'],
		rules: {
			'no-console': 'off',
			'@typescript-eslint/no-use-before-define': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			// Disable due to resolver issues in ESM
			'import-x/no-duplicates': 'off',
		},
	},
	{
		files: ['**/*.tsx'],
		rules: {
			'react/jsx-props-no-spreading': 'off',
			'react/react-in-jsx-scope': 'off',
			'jsx-a11y/label-has-associated-control': 'off',
		},
	},
];
