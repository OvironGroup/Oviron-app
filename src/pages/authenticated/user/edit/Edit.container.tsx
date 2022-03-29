import { ReactElement } from 'react'
import useGetToken from 'utils/useGetToken'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import { useAuth0 } from '@auth0/auth0-react'
import Navigation from './Navigation.view'
import Profile from './Profile.view'
import Account from './Account.view'
import { Route, Routes } from 'react-router-dom'
import Password from './Password.view'
import BlockedUser from './BlockedUser'
import PaymentHistory from './PaymentHistory'
import PrivacySecurity from './PrivacySecurity.view'

const EditContainer = (): ReactElement => {
	const { user } = useAuth0()
	const token = useGetToken()

	return (
		<div className="flex bg-white w-3/4 p-10 relative top-10 mx-auto rounded-2xl h-fit">
			<div className="w-1/3 sticky mr-5">
				<Navigation />
			</div>
			<div className="w-2/3">
				<Routes>
					<Route
						path="/account"
						element={<Account token={token} user={user} />}
					/>
					<Route
						path="/profile"
						element={<Profile token={token} user={user} />}
					/>
					<Route
						path="/password"
						element={<Password token={token} user={user} />}
					/>
					<Route
						path="/privacy-security"
						element={<PrivacySecurity token={token} user={user} />}
					/>
					<Route
						path="/blocked-user"
						element={<BlockedUser token={token} user={user} />}
					/>
					<Route
						path="/payment-history"
						element={<PaymentHistory token={token} user={user} />}
					/>
					<Route path="#edit" element={'something'} />
				</Routes>
			</div>
		</div>
	)
}

export default EditContainer
