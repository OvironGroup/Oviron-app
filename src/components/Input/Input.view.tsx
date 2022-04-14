import Button from 'components/Button/Button.view'
import { Pen } from 'icons/icons'
import { ChangeEvent, forwardRef, LegacyRef, ReactElement } from 'react'
import styles from './Input.module.css'

interface Props {
	type?: 'text' | 'password'
	required?: boolean
	disabled?: boolean
	withEdit?: boolean
	name?: string
	editOnClick?: () => void
	value?: string
	placeholder?: string
	className?: string
	onChange?: (arg0: ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef(
	(
		{
			type = 'text',
			required,
			disabled,
			withEdit,
			editOnClick,
			value,
			placeholder,
			className,
			onChange,
			name,
		}: Props,
		ref: LegacyRef<HTMLInputElement> | undefined
	): ReactElement => {
		return withEdit ? (
			<div className="relative">
				<input
					ref={ref}
					name={name}
					type={type}
					className={`${className} ${styles.Input}`}
					required={required}
					disabled={disabled}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
				/>
				{withEdit && editOnClick && (
					<Button
						type="gray"
						onClick={editOnClick}
						className={`${className} absolute right-2 top-2 w-20 h-8`}
					>
						<Pen /> <span className="ml-2">Edit</span>
					</Button>
				)}
			</div>
		) : (
			<input
				ref={ref}
				type={type}
				name={name}
				className={`${className} ${styles.Input}`}
				required={required}
				disabled={disabled}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		)
	}
)

Input.displayName = 'Input'

export default Input
