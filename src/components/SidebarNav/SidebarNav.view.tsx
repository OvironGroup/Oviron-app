import { ReactElement } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Ocademy, Orchives, UserOutline, Home } from '../../icons/icons'
import { profile_url } from 'pages/authenticated/profile/Profile.routes'
import styles from './SidebarNav.module.css'

const SidebarNav = (): ReactElement => {
	const { isAuthenticated, user } = useAuth0()

	return (
		<aside className={`${styles.Container}`}>
			<ul className="p-0 m-0 flex justify-evenly items-center lg:block">
				{isAuthenticated && (
					<li>
						<Link to={profile_url} title={user?.name}>
							<div className={styles.UserLoggedIcon}>
								<UserOutline />
							</div>
						</Link>
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
}

export default SidebarNav
