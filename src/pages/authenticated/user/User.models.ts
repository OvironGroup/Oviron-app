import { SET_EMAIL } from './User.types'

export type ISocials = {
	instagram?: string | null
	behance?: string | null
	twitter?: string | null
	twitch?: string | null
	github?: string | null
	deviantart?: string | null
	gumroad?: string | null
	dribbble?: string | null
}

export interface IMetadata {
	about: string
	interests: string[]
	nickname: string
	city: string
	audience: {
		following: string
		followers: string
		kudos: string
	}
	nation: string
	skills: string[]
	social: ISocials
	title: string
	website: string
}

export interface IIdentities {
	connection: string
	isSocial: boolean
	provider: string
	user_id: string
}

export interface IUserData {
	created_at: string
	email: string
	email_verified: boolean
	identities: {
		[0]: IIdentities
	}
	last_ip: string
	last_login: string
	logins_count: number
	name: string
	nickname: string
	picture: string
	updated_at: string
	user_id: string
	user_metadata: IMetadata
}

interface setEmailModel {
	type: typeof SET_EMAIL
	payload: string
}

export type ActionType = setEmailModel
