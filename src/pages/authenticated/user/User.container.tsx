import { User } from '@auth0/auth0-react'
import { ReactElement, useEffect, useState } from 'react'
import ProfileSidebar from './UserSidebar.view'
import ProfileServices from './User.services'
import styles from './User.module.css'
import { MetadataType } from './User.types'
import { Button } from 'components'
import useGetToken from 'utils/useGetToken'
import { Upload } from 'icons/icons'

interface Props {
	user: User | undefined
}

const metadataInitialValues: MetadataType = {
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
	socials: {
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
}

const ProfileContainer = ({ user }: Props): ReactElement => {
	const [metadata, setMetadata] = useState<MetadataType>(metadataInitialValues)
	const token = useGetToken()

	const getData = async () => {
		const response: MetadataType = await ProfileServices.getUser(user, token)
		console.log(response)
		setMetadata(response)
	}

	useEffect(() => {
		if (token) getData()
	}, [token])

	return (
		<div className="bg-gray_200 h-screen">
			<div className={styles.Cover}></div>
			<div className="xl:mx-auto max-w-7xl flex relative">
				<ProfileSidebar metadata={metadata} user={user} />
				<div className="flex flex-col w-3/4">
					<div className="bg-white rounded-2xl p-5 m-10 shadow-2xl h-fit">
						<h5 className="text-gray_900 text-2xl">Portfolio</h5>
					</div>
					<div className="mx-auto">
						<Button onClick={() => null} className="bg-ochre_primary">
							<Upload />{' '}
							<span className="ml-2">Upload your first creation</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileContainer
