import { ReactElement } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useLocation } from 'react-router-dom'
import { Logo, Logout, User } from 'icons/icons'
import { ButtonView } from 'components'
import styles from './HeaderNav.module.css'
import ProfileNavigation from './ProfileNavigation.view'
import { summary } from 'routes'

interface Props {
	authenticated: boolean
}

const HeaderNavContainer = ({ authenticated }: Props): ReactElement => {
	const { loginWithRedirect, logout } = useAuth0()
	const location = useLocation()

	return (
		<nav className={styles.Container}>
			<div className="px-5 flex justify-between items-center w-screen">
				<div className="flex items-center">
					<Logo />
					{authenticated && location.pathname === summary && (
						<ProfileNavigation />
					)}
				</div>
				{authenticated ? (
					<div
						data-testid="logout_icon"
						role="button"
						onClick={() => logout()}
						title="Logout"
					>
						<Logout />
					</div>
				) : (
					<ButtonView
						dataTestId="login_btn"
						onClick={loginWithRedirect}
						className={styles.LoginBtn}
					>
						<User /> <span className="ml-2">Login</span>
					</ButtonView>
				)}
			</div>
		</nav>
	)
}

export default HeaderNavContainer
