import { ReactElement } from 'react'
import { User } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Ocademy, Orchives, Home } from '../../icons/icons'
import styles from './SidebarNav.module.css'

import UserBadge from 'components/UserBadge/UserBadge.view'

interface Props {
	authenticated: boolean
	user: User | undefined
}

const SidebarNav = ({ authenticated, user }: Props): ReactElement => (
	<aside className={`${styles.Container}`}>
		<ul className="p-0 m-0 flex justify-evenly items-center lg:block">
			{authenticated && (
				<li>
					<UserBadge user={user} />
				</li>
			)}
			<li>
				<Link to="/">
					<div className={`${styles.Home} ${styles.ToolsIcon}`}>
						<Home />
					</div>
				</Link>
			</li>
			<li>
				<div className={`${styles.Ocademy} ${styles.ToolsIcon}`}>
					<Ocademy />
				</div>
			</li>
			<li>
				<div className={`${styles.Orchives} ${styles.ToolsIcon}`}>
					<Orchives />
				</div>
			</li>
		</ul>
	</aside>
)

export default SidebarNav
