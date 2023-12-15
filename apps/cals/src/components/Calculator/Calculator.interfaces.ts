import { VariantProps } from 'tailwind-variants'
import { calculator } from './Calculator.styles'

export type CalculatorVariants = VariantProps<typeof calculator>

export interface CalculatorProps extends CalculatorVariants {}
