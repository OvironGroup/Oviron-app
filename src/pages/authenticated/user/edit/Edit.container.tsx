import { ReactElement, useState } from 'react'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import Navigation from './Navigation.view'
import { useResolvedPath, useLocation } from 'react-router-dom'
import { fullProfilePath } from 'routes'
import { Button } from 'components'
import Profile from './Profile.container'
import Account from './Account.view'
import { Route, Routes } from 'react-router-dom'
import Password from './Password.view'
import BlockedUser from './BlockedUser'
import PaymentHistory from './PaymentHistory'
import PrivacySecurity from './PrivacySecurity.view'
import { IUserData } from '../User.models'
import { Loader } from 'components'

interface Props {
	isFetching: boolean
	userData: IUserData
}

const EditUser = ({ isFetching, userData }: Props): ReactElement => {
	const location = useLocation()
	const url = useResolvedPath({ pathname: location.pathname })
	const [updateProfileData, setUpdateProfileData] = useState(false)

	const checkSectionToSave = () => {
		if (url.pathname === fullProfilePath) {
			setUpdateProfileData(!updateProfileData)
		}
	}

	return (
		<div className="flex bg-white w-3/4 p-10 relative top-10 mx-auto rounded-2xl h-fit">
			<div className="w-1/3 sticky mr-5">
				<Navigation />
				<Button
					onClick={checkSectionToSave}
					type="primary"
					className="mt-10 w-full"
					loading={updateProfileData}
				>
					Save Changes
				</Button>
			</div>
			<div className="w-2/3">
				<Routes>
					<Route
						path="/account"
						element={
							isFetching ? (
								<Loader />
							) : (
								<Account
									token={String(localStorage.getItem('tk'))}
									user={userData}
								/>
							)
						}
					/>
					<Route
						path="/profile"
						element={
							<Profile
								token={String(localStorage.getItem('tk'))}
								userData={userData}
								updating={updateProfileData}
								updated={(value: boolean) => setUpdateProfileData(!value)}
							/>
						}
					/>
					<Route
						path="/password"
						element={
							<Password
								token={String(localStorage.getItem('tk'))}
								user={userData}
							/>
						}
					/>
					<Route
						path="/privacy-security"
						element={
							<PrivacySecurity
								token={String(localStorage.getItem('tk'))}
								user={userData}
							/>
						}
					/>
					<Route
						path="/blocked-user"
						element={
							<BlockedUser
								token={String(localStorage.getItem('tk'))}
								user={userData}
							/>
						}
					/>
					<Route
						path="/payment-history"
						element={
							<PaymentHistory
								token={String(localStorage.getItem('tk'))}
								user={userData}
							/>
						}
					/>
					<Route path="#edit" element={'something'} />
				</Routes>
			</div>
		</div>
	)
}

export default EditUser
