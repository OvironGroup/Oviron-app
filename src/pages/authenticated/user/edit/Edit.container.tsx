import { ReactElement, useState } from 'react'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import Navigation from './Navigation.view'
import { useResolvedPath, useLocation } from 'react-router-dom'
import {
	account,
	blockedUser,
	fullProfilePath,
	password,
	paymentHistory,
	privacySecurity,
	profile,
} from 'routes'
import { Button } from 'components'
import Profile from './Profile.container'
import Account from './Account.view'
import { Route, Routes } from 'react-router-dom'
import Password from './Password.view'
import BlockedUser from './BlockedUser'
import PaymentHistory from './PaymentHistory'
import PrivacySecurity from './PrivacySecurity.view'
import { IUserData } from '../User.models'

interface Props {
	userData: IUserData
}

const EditUser = ({ userData }: Props): ReactElement => {
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
					<Route path={`/${account}`} element={<Account user={userData} />} />
					<Route
						path={`/${profile}`}
						element={
							<Profile
								userData={userData}
								updating={updateProfileData}
								updated={(value: boolean) => setUpdateProfileData(!value)}
							/>
						}
					/>
					<Route path={`/${password}`} element={<Password user={userData} />} />
					<Route
						path={`/${privacySecurity}`}
						element={<PrivacySecurity user={userData} />}
					/>
					<Route
						path={`/${blockedUser}`}
						element={<BlockedUser user={userData} />}
					/>
					<Route
						path={`/${paymentHistory}`}
						element={<PaymentHistory user={userData} />}
					/>
				</Routes>
			</div>
		</div>
	)
}

export default EditUser
