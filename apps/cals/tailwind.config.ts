import { nextui } from '@nextui-org/theme'
import path from 'path'
import plugins from 'plugin-tailwind'
import { withTV } from 'tailwind-variants/dist/transformer'
import { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */

const config: Config = withTV({
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		path.join(path.dirname(require.resolve('@nextui-org/theme')), '**/*.{js,ts,jsx,tsx}'),
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [plugins.selector, plugins.animate, nextui()],
})

export default config
