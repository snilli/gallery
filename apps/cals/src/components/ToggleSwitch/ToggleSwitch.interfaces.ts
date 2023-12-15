import { VariantProps } from 'tailwind-variants'
import { toggleSwitch } from './ToggleSwitch.styles'

export interface ToggleSwitchProps extends ToggleSwitchVariants {
	step: number
}
export type ToggleSwitchVariants = VariantProps<typeof toggleSwitch>
