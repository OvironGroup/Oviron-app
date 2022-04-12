import { Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import useSetToken from 'utils/useTokenService'
import ProfileServices from './pages/authenticated/user/User.services'
import './App.module.css'
import { Loader, SidebarNavView } from './components'
import HeaderNav from 'components/HeaderNav/HeaderNav.container'
import Home from 'pages/unauthenticated/home/Home.view'
import EditUser from 'pages/authenticated/user/edit/Edit.container'
import User from 'pages/authenticated/user/User.container'
import { editUser, summary } from 'routes'
import { useEffect, useState } from 'react'
import { userDataInitialValues } from 'pages/authenticated/user/User.models'

const App = () => {
	const { isAuthenticated, isLoading, user } = useAuth0()
	const serviceToken = useSetToken()
	serviceToken.setToken()
	const [userData, setUserData] = useState(userDataInitialValues)
	const [isFetching, setIsFetching] = useState(true)

	useEffect(() => {
		const getData = async () => {
			const result = await ProfileServices.getUser(
				user,
				serviceToken.getToken()
			)
			setUserData(result)
			setIsFetching(false)
		}

		if (isAuthenticated) {
			getData()
		}
	}, [isAuthenticated])

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
								<Route
									path={`${editUser}/*`}
									element={
										<EditUser isFetching={isFetching} userData={userData} />
									}
								/>
								<Route
									path={summary}
									element={<User isFetching={isFetching} userData={userData} />}
								/>
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
