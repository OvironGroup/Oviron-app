import { useAuth0 } from '@auth0/auth0-react'
import { config } from 'App.config'
import { useEffect, useState } from 'react'

const useGetToken = () => {
	const [token, setToken] = useState<string>()
	const { getAccessTokenSilently } = useAuth0()

	const getAccessToken = async () => {
		const accessToken = await getAccessTokenSilently({
			audience: config.AUDIENCE,
			scope: config.SCOPES,
		})
		setToken(accessToken)
	}

	useEffect(() => {
		getAccessToken()
	}, [token, getAccessTokenSilently])

	return token
}

export default useGetToken
