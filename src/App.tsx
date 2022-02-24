import { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './App.module.css'
import { LoaderView, SidebarNavView } from './components'
import HeaderNavView from 'components/HeaderNav/HeaderNav.container'
import { EDIT_PROFILE, HOME, routes, SUMMARY } from 'routes'
import HomeView from 'pages/unauthenticated/home/Home.view'

const ProfileContainer = lazy(
	() => import('pages/authenticated/profile/Profile.container')
)
const EditProfileContainer = lazy(
	() => import('pages/authenticated/profile/edit/Edit.container')
)

const protectPrivateUrl = (url: string, auth: boolean) => (auth ? url : '/')

const App = () => {
	const { isAuthenticated, isLoading, user } = useAuth0()

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
								{routes.map((el, index) => (
									<Route
										key={index}
										path={
											el.private
												? protectPrivateUrl(el.url, isAuthenticated)
												: '/'
										}
										element={
											el.name === HOME ? (
												<HomeView />
											) : (
												<Suspense fallback={<LoaderView />}>
													<section className="bg-gray_200 h-screen m-0">
														{el.name === SUMMARY && (
															<ProfileContainer user={user} />
														)}
														{el.name === EDIT_PROFILE && (
															<EditProfileContainer />
														)}
													</section>
												</Suspense>
											)
										}
									/>
								))}
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
