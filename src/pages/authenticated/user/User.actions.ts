import { SET_EMAIL } from './User.types'

export const setEmail = (payload: string) => ({
	SET_EMAIL,
	payload,
})
