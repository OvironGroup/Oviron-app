import { User } from '@auth0/auth0-react'
import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { summary } from 'routes'
import { UserOutline } from 'icons/icons'
import styles from './UserBadge.module.css'

interface Props {
	user: User | undefined
}

const UserBadge = ({ user }: Props): ReactElement => (
	<Link to={summary} title={user?.name}>
		<div data-testid="logged_icon" className={styles.Badge}>
			<UserOutline />
		</div>
	</Link>
)

export default UserBadge
