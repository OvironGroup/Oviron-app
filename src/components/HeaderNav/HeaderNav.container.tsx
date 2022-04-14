import { ReactElement, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {
	CaretDown,
	CaretUp,
	FeatherEdit,
	FeatherLock,
	FeatherUser,
	HelpCircle,
	Logo,
	Logout,
	User,
} from 'icons/icons'
import { Button } from 'components'
import styles from './HeaderNav.module.css'
import ProfileNavigation from './ProfileNavigation.view'
import UserBadge from 'components/UserBadge/UserBadge.view'
import {
	fullAccountPath,
	fullPrivacySecurityPath,
	fullProfilePath,
	summary,
} from 'routes'
import { Link } from 'react-router-dom'

interface Props {
	authenticated: boolean
}

const HeaderNavContainer = ({ authenticated }: Props): ReactElement => {
	const { loginWithRedirect, logout, user } = useAuth0()
	const [open, setOpen] = useState(false)

	return (
		<nav className={styles.Container}>
			<div className="px-5 flex justify-between items-center w-screen relative">
				<div className="flex items-center">
					<Logo />
					{authenticated && <ProfileNavigation />}
				</div>
				{authenticated ? (
					<>
						<div
							className="bg-gray_200 flex items-center justify-center w-8 h-8 rounded-full p-2 cursor-pointer"
							onClick={() => setOpen(!open)}
							data-testid="user-dropdown-icon"
						>
							{open ? <CaretUp /> : <CaretDown />}
						</div>
						{open && (
							<div
								data-testid="user-dropdown"
								className="shadow-md shadow-inner rounded-2xl absolute bg-white right-5 w-96 top-12 text-gray_600"
							>
								<div className="flex p-5 border-b-2 border-gray_100">
									<UserBadge user={user} />
									<div className="flex flex-col ml-3 text-">
										<span className="text-gray_900 text-xl font-bold">
											{user?.nickname}
										</span>
										<Link
											to={summary}
											className="hover:underline text-blue_primary"
										>
											View Profile
										</Link>
									</div>
								</div>
								<ul className="p-5">
									<li>
										<Link to={fullAccountPath} className={styles.MenuItem}>
											<FeatherUser />{' '}
											<span className="ml-3">Account settings</span>
										</Link>
									</li>
									<li>
										<Link to={fullProfilePath} className={styles.MenuItem}>
											<FeatherEdit /> <span className="ml-3">Edit Profile</span>
										</Link>
									</li>
									<li>
										<Link
											to={fullPrivacySecurityPath}
											className={styles.MenuItem}
										>
											<FeatherLock />{' '}
											<span className="ml-3">Privacy & Security</span>
										</Link>
									</li>
								</ul>
								<ul className="border-y-2 p-5 border-gray_100">
									<li className={styles.MenuItem}>
										<HelpCircle /> <span className="ml-3">Help & Support</span>
									</li>
									<li className={styles.MenuItem}>
										<div
											data-testid="logout_icon"
											role="button"
											onClick={() => logout()}
											title="Logout"
											className="flex items-center"
										>
											<Logout /> <span className="ml-3">Logout</span>
										</div>
									</li>
								</ul>
								<ul className="flex p-5 justify-between">
									<li>Privacy & Cookies</li>
									<li>Terms</li>
									<li>Oviron {new Date().getFullYear()}</li>
								</ul>
							</div>
						)}
					</>
				) : (
					<Button
						dataTestId="login_btn"
						onClick={loginWithRedirect}
						className={styles.LoginBtn}
					>
						<User /> <span className="ml-2">Login</span>
					</Button>
				)}
			</div>
		</nav>
	)
}

export default HeaderNavContainer
