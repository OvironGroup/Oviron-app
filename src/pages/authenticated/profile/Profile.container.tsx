import { useAuth0 } from '@auth0/auth0-react'
import { ReactElement } from 'react'
import styles from './Profile.module.css'

const ProfileContainer = (): ReactElement => {
	const { user } = useAuth0()
	return (
		<div>
			<div className={styles.Cover}></div>
			<div className="xl:mx-auto max-w-7xl flex relative">
				<div className="sidebar">
					<div className="photo and nick">
						{user?.name}
						<img src={user?.picture} />
					</div>
				</div>
				<div className="main"></div>
			</div>
		</div>
	)
}

export default ProfileContainer
