import axios from 'axios'
import { User } from '@auth0/auth0-react'
import { config } from 'App.config'

export default {
	getUser: async (user: User | undefined, token: string) => {
		const userDetails = `${config.BASE_API}/users/${user?.sub}`

		try {
			const { data } = await axios.get(userDetails, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			return data
		} catch (error) {
			console.error(error)
		}
	},

	updateUser: async (
		user: User | undefined,
		token: string | undefined,
		data: unknown
	) => {
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
		} catch (e) {
			return e
		}
	},
}
