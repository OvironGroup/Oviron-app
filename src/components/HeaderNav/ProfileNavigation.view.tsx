import { NavLink } from 'react-router-dom'
import { ReactElement } from 'react'
import styles from './HeaderNav.module.css'
import {
	editProfile,
	assets,
	classroom,
	kudos,
	moodboard,
	summary,
} from 'routes'

const ProfileNavigation = (): ReactElement => (
	<div className="ml-14 flex">
		<ul className={styles.ProfileNavigationWrapper}>
			<NavLink to={summary}>Summary</NavLink>
			<NavLink to={moodboard}>Moodboard</NavLink>
			<NavLink to={kudos}>Kudos</NavLink>
			<NavLink to={assets}>Assets</NavLink>
			<NavLink to={classroom}>Classroom</NavLink>
		</ul>
		<NavLink to={editProfile} className="bg-blue_primary rounded-md p-3">
			Edit Profile
		</NavLink>
	</div>
)

export default ProfileNavigation
