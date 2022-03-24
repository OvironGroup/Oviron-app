import { FC, ReactElement, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

const PRIMARY = 'primary'
const OUTLINE = 'outline'
const DANGER_OUTLINE = 'danger_outline'
const DANGER = 'danger'

interface Props {
	type?: typeof PRIMARY | typeof OUTLINE | typeof DANGER_OUTLINE | typeof DANGER
	onClick: () => void
	children: ReactNode
	title?: string
	className?: string
	dataTestId?: string
}

const Button: FC<Props> = ({
	children,
	type = PRIMARY,
	onClick,
	title,
	className,
	dataTestId,
}: Props): ReactElement => {
	const BtnBackground = cn({
		BtnPrimary: type === PRIMARY,
		BtnOutline: type === OUTLINE,
		BtnDangerOutline: type === DANGER_OUTLINE,
		BtnDanger: type === DANGER,
	})

	return (
		<button
			data-testid={dataTestId}
			type="button"
			title={title}
			onClick={onClick}
			className={`${className} ${styles.Btn} ${styles[BtnBackground]}`}
		>
			{children}
		</button>
	)
}

export default Button
