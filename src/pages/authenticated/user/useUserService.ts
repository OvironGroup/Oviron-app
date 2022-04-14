import { useAuth0, User } from '@auth0/auth0-react'
import axios from 'axios'
import { config } from 'App.config'
import { IMetadata } from './User.models'

const useUserService = () => {
	const { getAccessTokenSilently } = useAuth0()

	const getToken = async () => {
		const result = await getAccessTokenSilently({
			audience: config.AUDIENCE,
			scope: config.SCOPES,
		})
		return result
	}

	const updateUser = async (user: User | undefined, data: unknown) => {
		const token = await getToken()
		try {
			const userDetails = `${config.BASE_API}/users/${user?.sub}`

			return await axios.patch(
				userDetails,
				{
					user_metadata: data,
				},
				{
					headers: {
						'content-type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			)
		} catch (err) {
			return err
		}
	}

	const setUserMetadata = async (user: User | undefined) => {
		const userMetadata = <IMetadata>{
			about: '',
			interests: [],
			location: '',
			nickname: '',
			skills: [],
			social: {
				behance: '',
				deviantart: '',
				dribbble: '',
				github: '',
				gumroad: '',
				instagram: '',
				twitch: '',
				twitter: '',
			},
			title: '',
			website: '',
		}
		return await updateUser(user, userMetadata)
	}

	const getUser = async (user: User | undefined) => {
		const token = await getToken()
		try {
			const { data } = await axios.get(
				`${config.BASE_API}/users/${user?.sub}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)

			if (Object.keys(data.user_metadata).length === 0) {
				await setUserMetadata(user)
			} else {
				return data
			}
		} catch (err) {
			return err
		}
	}

	const deleteUser = async (user: User | undefined) => {
		const token = await getToken()
		try {
			const userDetails = `${config.BASE_API}/users/${user?.sub}`

			return await axios.delete(userDetails, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
		} catch (err) {
			return err
		}
	}

	return {
		getUser,
		updateUser,
		deleteUser,
	}
}

export default useUserService
