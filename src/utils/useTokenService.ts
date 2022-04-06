import { useAuth0 } from '@auth0/auth0-react'
import { config } from 'App.config'

const useTokenService = () => {
	const { getAccessTokenSilently } = useAuth0()

	const getToken = () => localStorage.getItem('tk') || ''

	const setToken = async () => {
		const accessToken = await getAccessTokenSilently({
			audience: config.AUDIENCE,
			scope: config.SCOPES,
		})
		localStorage.setItem('tk', accessToken)
	}

	return {
		getToken,
		setToken,
	}
}

export default useTokenService
