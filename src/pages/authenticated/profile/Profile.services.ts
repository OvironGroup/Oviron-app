import axios from 'axios'
import { User } from '@auth0/auth0-react'
import { config } from 'App.config'

export default {
	getUser: async (user: User | undefined, token: string | undefined) => {
		try {
			const userDetails = `${config.BASE_API}/users/${user?.sub}`

			const metadataResponse = await axios.get(userDetails, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})

			const { user_metadata } = await metadataResponse.data

			return user_metadata
		} catch (e) {
			return e
		}
	},

	updateUser: async (
		user: User | undefined,
		token: string | undefined,
		data: unknown
	) => {
		try {
			const userDetails = `${config.BASE_API}/users/${user?.sub}`

			return await axios.patch(userDetails, {
				headers: {
					'content-type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				data,
			})
		} catch (e) {
			console.log(e)
			return e
		}
	},
}
