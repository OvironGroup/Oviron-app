import { User } from '@auth0/auth0-react'
import { ReactElement, useEffect, useState } from 'react'
import UserSidebar from './UserSidebar.view'
import ProfileServices from './User.services'
import styles from './User.module.css'
import { Button, Loader } from 'components'
import useSetToken from 'utils/useTokenService'
import { Upload } from 'icons/icons'
import { IUserData } from './User.models'

interface Props {
	user: User | undefined
}

const userDataInitialValues: IUserData = {
	created_at: '',
	email: '',
	email_verified: true,
	identities: {
		'0': {
			connection: '',
			isSocial: true,
			provider: '',
			user_id: '',
		},
	},
	last_ip: '',
	last_login: '',
	logins_count: 1,
	name: '',
	nickname: '',
	picture: '',
	updated_at: '',
	user_id: '',
	user_metadata: {
		about: '',
		audience: {
			followers: '',
			following: '',
			kudos: '',
		},
		city: '',
		interests: [''],
		nation: '',
		nickname: '',
		skills: [''],
		social: {
			behance: '',
			github: '',
			instagram: '',
			twitch: '',
			twitter: '',
			deviantart: '',
			gumroad: '',
			dribbble: '',
		},
		title: '',
		website: '',
	},
}

const UserContainer = ({ user }: Props): ReactElement => {
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

		getData()
	}, [])

	return (
		<div className="bg-gray_200 h-screen">
			{isFetching ? (
				<Loader />
			) : (
				<>
					<div className={styles.Cover}></div>
					<div className="xl:mx-auto max-w-7xl flex relative">
						<UserSidebar userData={userData} />
						<div className="flex flex-col w-3/4">
							<div className="bg-white rounded-2xl p-5 m-10 shadow-2xl h-fit">
								<h5 className="text-gray_900 text-2xl">Portfolio</h5>
							</div>
							{console.log(userData)}
							<div className="mx-auto">
								<Button onClick={() => null} className="bg-ochre_primary">
									<Upload />{' '}
									<span className="ml-2">Upload your first creation</span>
								</Button>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default UserContainer
