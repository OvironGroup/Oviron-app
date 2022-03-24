import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './App.module.css'
import { Loader, SidebarNavView } from './components'
import HeaderNav from 'components/HeaderNav/HeaderNav.container'
import Home from 'pages/unauthenticated/home/Home.view'
import EditProfile from 'pages/authenticated/user/edit/Edit.container'
import Profile from 'pages/authenticated/user/User.container'
import { editProfile, summary } from 'routes'

//const protectPrivateUrl = (url: string, auth: boolean) => (auth ? url : '/')

const App = () => {
	const { isAuthenticated, isLoading, user } = useAuth0()

	return (
		<div className="text-white">
			{isLoading ? (
				<Loader />
			) : (
				<>
					<HeaderNav authenticated={isAuthenticated} />
					<SidebarNavView authenticated={isAuthenticated} user={user} />
					<main className="lg:ml-24">
						<div className="py-6 lg:py-0 sm:px-0">
							<Routes>
								<Route path={`${editProfile}/*`} element={<EditProfile />} />
								<Route path={summary} element={<Profile user={user} />} />
								<Route path="*" element={<Home />} />
							</Routes>
						</div>
					</main>
					<footer>
						<div className="text-center p-5 pb-32 lg:pb-5">
							<p className="text-sm">
								All rights reserved - © {new Date().getFullYear()} OVIRON GROUP
							</p>
						</div>
					</footer>
				</>
			)}
		</div>
	)
}

export default App
