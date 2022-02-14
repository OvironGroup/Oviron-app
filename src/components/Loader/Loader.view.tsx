import { ReactElement } from 'react'
import styles from './Loader.module.css'

const LoaderView = (): ReactElement => (
	<div className="flex items-center h-screen justify-center space-x-2">
		<div className={styles.Loader}></div>
	</div>
)

export default LoaderView
