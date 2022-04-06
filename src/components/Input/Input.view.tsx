import Button from 'components/Button/Button.view'
import { Pen } from 'icons/icons'
import { ReactElement } from 'react'
import styles from './Input.module.css'

interface Props {
	type?: 'text' | 'password'
	required?: boolean
	disabled?: boolean
	withEdit?: boolean
	editOnClick?: () => void
	value: string
}

const Input = ({
	type = 'text',
	required,
	disabled,
	withEdit,
	editOnClick,
	value,
}: Props): ReactElement =>
	withEdit ? (
		<div className="relative">
			<input
				type={type}
				className={styles.Input}
				required={required}
				disabled={disabled}
				value={value}
			/>
			{withEdit && editOnClick && (
				<Button
					type="gray"
					onClick={editOnClick}
					className="absolute right-2 top-2 w-20 h-8"
				>
					<Pen /> <span className="ml-2">Edit</span>
				</Button>
			)}
		</div>
	) : (
		<input
			type={type}
			className={styles.Input}
			required={required}
			disabled={disabled}
			value={value}
		/>
	)

export default Input
