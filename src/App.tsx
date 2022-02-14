import { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './App.module.css'
import { LoaderView, SidebarNavView } from './components'
import { profile_url } from 'pages/authenticated/profile/Profile.routes'
import HeaderNavView from 'components/HeaderNav/HeaderNav.container'
import HomeView from 'pages/unauthenticated/home/Home.view'

const ProfileContainer = lazy(
	() => import('pages/authenticated/profile/Profile.container')
)

const App = () => {
	const { isAuthenticated, isLoading, user } = useAuth0()

	const renderPrivatePages = () => (
		<Route
			path={profile_url}
			element={
				<Suspense fallback={<LoaderView />}>
					<section>
						<ProfileContainer user={user} />
					</section>
				</Suspense>
			}
		/>
	)

	return (
		<div className="text-white">
			{isLoading ? (
				<LoaderView />
			) : (
				<>
					<HeaderNavView authenticated={isAuthenticated} />
					<SidebarNavView authenticated={isAuthenticated} user={user} />
					<main className="lg:ml-24">
						<div className="py-6 lg:py-0 sm:px-0">
							<Routes>
								<Route path="/" element={<HomeView />} />
								{isAuthenticated && renderPrivatePages()}
								<Route path="*" element={<Navigate to={'/'} />} />
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
