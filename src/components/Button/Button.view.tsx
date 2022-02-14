import { FC, ReactElement, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

const PRIMARY = 'Primary'
const SECONDARY = 'Secondary'

interface Props {
	type?: typeof PRIMARY | typeof SECONDARY
	onClick: () => void
	children: ReactNode
	title?: string
	className?: string
	dataTestId?: string
}

const ButtonView: FC<Props> = ({
	children,
	type = PRIMARY,
	onClick,
	title,
	className,
	dataTestId,
}: Props): ReactElement => {
	const BtnBackground = cn({
		BtnPrimary: type === PRIMARY,
		BtnSecondary: type === SECONDARY,
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

export default ButtonView
