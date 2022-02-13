import { ReactElement } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Logo, Logout, User } from 'icons/icons'
import styles from './HeaderNav.module.css'

const HeaderNavContainer = (): ReactElement => {
	const { loginWithRedirect, isAuthenticated, logout } = useAuth0()

	return (
		<nav className="bg-white sticky top-0 z-10 h-16 flex items-center">
			<div className="px-5 flex justify-between w-screen">
				<Logo />
				{isAuthenticated ? (
					<button onClick={() => logout()} title="Logout">
						<Logout />
					</button>
				) : (
					<button onClick={loginWithRedirect} className={styles.LoginBtn}>
						<User /> <span className="ml-2">Login</span>
					</button>
				)}
			</div>
		</nav>
	)
}

export default HeaderNavContainer
