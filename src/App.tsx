import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './App.module.css'
import { SidebarNavView } from './components'
import { profile_url } from 'pages/authenticated/profile/Profile.routes'
import HeaderNavView from 'components/HeaderNav/HeaderNav.container'
import HomeView from 'pages/unauthenticated/home/Home.view'

const ProfileContainer = lazy(
	() => import('pages/authenticated/profile/Profile.container')
)

const makesPrivatePagesAvailable = () => (
	<Route path={profile_url} element={<ProfileContainer />} />
)

const App = () => {
	const { isAuthenticated } = useAuth0()

	return (
		<div className="text-white">
			<HeaderNavView />
			<SidebarNavView />
			<main className="lg:ml-24">
				<div className="py-6 lg:py-0 sm:px-0">
					<Routes>
						<Route path="/" element={<HomeView />} />
					</Routes>
					<section>
						<Suspense fallback={'...loading'}>
							<Routes>{isAuthenticated && makesPrivatePagesAvailable()}</Routes>
						</Suspense>
					</section>
				</div>
			</main>
			<footer>
				<div className="text-center p-5 pb-32 lg:pb-5">
					<p className="text-sm">
						All rights reserved - © {new Date().getFullYear()} OVIRON GROUP
					</p>
				</div>
			</footer>
		</div>
	)
}

export default App
