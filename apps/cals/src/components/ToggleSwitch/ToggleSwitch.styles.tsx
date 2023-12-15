import { tv } from 'tailwind-variants'

export const toggleSwitch = tv({
	slots: {
		base: 'flex h-32 w-96 cursor-pointer justify-between rounded-full border border-red-500 px-2 py-3',
		step: 'w-28 rounded-full',
	},
	variants: {
		active: {
			true: {
				step: 'bg-green-500',
			},
		},
		// color: {
		// 	bluesky: {

		// 	},
		// 	light: {},
		// 	retro: {},
		// },
	},
})
