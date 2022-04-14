import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import {
	account,
	blockedUser,
	password,
	paymentHistory,
	privacySecurity,
	profile,
} from 'routes'

const activeStyle = 'bg-blue_primary text-white rounded-3xl p-3'
const inactiveStyle = 'text-gray_500 p-3'

const Navigation = (): ReactElement => (
	<nav className="flex flex-col">
		<NavLink
			to={account}
			className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
			key={1}
		>
			Account
		</NavLink>
		<NavLink
			to={profile}
			className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
			key={2}
		>
			Profile
		</NavLink>
		<NavLink
			to={password}
			className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
			key={3}
		>
			Password
		</NavLink>
		<NavLink
			to={privacySecurity}
			className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
			key={4}
		>
			Privacy & Security
		</NavLink>
		<NavLink
			to={blockedUser}
			className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
			key={5}
		>
			Blocked User
		</NavLink>
		<NavLink
			to={paymentHistory}
			className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
			key={6}
		>
			Payment & History
		</NavLink>
	</nav>
)

export default Navigation
