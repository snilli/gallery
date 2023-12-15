'use client'
import { useTheme } from 'next-themes'
import { FC, useState } from 'react'
import { ToggleSwitchProps } from './ToggleSwitch.interfaces'
import { toggleSwitch } from './ToggleSwitch.styles'

export const ToggleSwitch: FC<ToggleSwitchProps> = (props) => {
	const { base, step } = toggleSwitch()
	const [selected, setSelected] = useState(0)
	const { setTheme } = useTheme()
	const handleStep = () => {
		setTheme('soda')
		setSelected((prev) => (prev >= props.step - 1 ? 0 : prev + 1))
	}

	return (
		<div className={base()} onClick={handleStep}>
			{new Array(props.step).fill(null).map((_, i) => (
				<div key={i} className={step({ active: selected === i })} />
			))}
		</div>
	)
}
