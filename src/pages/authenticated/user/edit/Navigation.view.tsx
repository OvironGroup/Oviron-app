import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = 'bg-blue_primary text-white rounded-3xl p-3'
const inactiveStyle = 'text-gray_500 p-3'

const Navigation = (): ReactElement => (
	<nav className="flex flex-col">
		<NavLink
			to="account"
			className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
			key={1}
		>
			Account
		</NavLink>
		<NavLink
			to="edit-profile"
			className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
			key={2}
		>
			Edit Profile
		</NavLink>
		<NavLink
			to="password"
			className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
			key={3}
		>
			Password
		</NavLink>
		<NavLink
			to="security"
			className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
			key={4}
		>
			Privacy & Security
		</NavLink>
		<NavLink
			to="blocked-user"
			className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
			key={5}
		>
			Blocked User
		</NavLink>
		<NavLink
			to="payment-history"
			className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
			key={6}
		>
			Payment & History
		</NavLink>
	</nav>
)

export default Navigation
