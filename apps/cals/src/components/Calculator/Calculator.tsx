'use client'
import { FC } from 'react'
import { tv } from 'tailwind-variants'
import { CalculatorProps } from './Calculator.interfaces'
import { calculator } from './Calculator.styles'

export const Calculator: FC<CalculatorProps> = (props) => {
	const { base, main } = calculator()
	const a = tv({
		slots: {
			groupLabel: 'justify-between',
			groupStep: 'flex border rounded-full bg-slate-500',
			radio: 'peer hidden',
			session: 'flex',
			label: 'text-center flex-1',
			step: `relative h-10 
					after:content-["_"] 
					after:peer-checked:text-[#fff] 
					after:peer-checked:bg-red-900 
					after:absolute 
					after:rounded-full 
					after:w-10 
					after:h-10`,
		},
		compoundSlots: [
			{
				slots: ['groupLabel', 'groupStep'],
				class: 'flex',
			},
			{
				slots: ['step', 'label'],
				class: 'block cursor-pointer',
			},
		],
	})

	const { groupStep, radio, step, label, groupLabel, session } = a()
	return (
		<>
			<main className={main()}>
				<p>dfdf</p>
				<p>dfdf</p>
				<div className="flex-none">fefdfdsfsdfdfd</div>
				<div className="flex flex-auto flex-row-reverse items-center">
					{/* <ToggleSwitch step={3} /> */}
					<div className={main()}>fefd fdsfsdf sdsdsdfd</div>
				</div>
			</main>

			<div className="form-line">
				<div className={groupLabel()}>
					<label className={label()} htmlFor="night">
						1
					</label>
					<label className={label()} htmlFor="sunrise">
						2
					</label>
					<label className={label()} htmlFor="day">
						3
					</label>
					<label className={label()} htmlFor="sunset">
						4
					</label>
				</div>
				<div className={groupStep()}>
					<div className={session()}>
						<input className={radio()} type="radio" name="time_of_day" value="night" id="night" />
						<label className={step()} htmlFor="night" />
					</div>

					<div className={session()}>
						<input className={radio()} type="radio" name="time_of_day" value="sunrise" id="sunrise" />
						<label className={step()} htmlFor="sunrise"></label>
					</div>

					<div className={session()}>
						<input className={radio()} type="radio" name="time_of_day" value="day" id="day" />
						<label className={step()} htmlFor="day"></label>
					</div>
					<div className={session()}>
						<input className={radio()} type="radio" name="time_of_day" value="sunset" id="sunset" />
						<label className={step()} htmlFor="sunset"></label>
					</div>
				</div>
			</div>
			<div className="flex">
				<div className="">1</div>
				<div className="">2</div>
				<div className="">3</div>
				<div className="">4</div>
			</div>
		</>
	)
}
