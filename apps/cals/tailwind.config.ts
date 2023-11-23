import { nextui } from '@nextui-org/theme'
import path from 'path'
import { withTV } from 'tailwind-variants/dist/transformer'

/** @type {import('tailwindcss').Config} */

module.exports = withTV({
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		path.join(path.dirname(require.resolve('@nextui-org/theme')), '**/*.{js,ts,jsx,tsx}'),
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		require(path.join(path.dirname(require.resolve('plugin-tailwind')), 'selector')),
		require(path.join(path.dirname(require.resolve('plugin-tailwind')), 'animate')),
		nextui(),
	],
})
