import { User } from '@auth0/auth0-react'
import { ReactElement, useEffect, useState } from 'react'
import ProfileSidebar from './ProfileSidebar.view'
import ProfileServices from './Profile.services'
import styles from './Profile.module.css'
import { MetadataType } from './Profile.types'
import { ButtonView } from 'components'
import useGetToken from 'utils/useGetToken'

interface Props {
	user: User | undefined
}

const ProfileContainer = ({ user }: Props): ReactElement => {
	const [userMetadata, setUserMetadata] = useState<MetadataType>(null)
	const token = useGetToken()

	const getData = async () => {
		const response = await ProfileServices.getUser(user, token)

		setUserMetadata(response)
	}

	useEffect(() => {
		if (token) getData()
	}, [token])

	return (
		<div className="bg-gray_200 h-screen">
			<div className={styles.Cover}></div>
			<div className="xl:mx-auto max-w-7xl flex relative">
				<ProfileSidebar metadata={userMetadata} user={user} />
				<div className="flex flex-col w-3/4">
					<div className="bg-white rounded-2xl p-5 m-10 shadow-2xl h-fit">
						<h5 className="text-gray_900 text-2xl">Portfolio</h5>
					</div>
					<div className="mx-auto">
						<ButtonView
							onClick={() => null}
							className="bg-ochre_primary"
							type="Secondary"
						>
							Upload your first creation
						</ButtonView>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileContainer
