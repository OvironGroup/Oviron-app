import { SET_EMAIL } from './User.types'

export type ISocials = {
	instagram: string
	behance: string
	twitter: string
	twitch: string
	github: string
	deviantart: string
	gumroad: string
	dribbble: string
}

export interface IMetadata {
	about: string
	interests: string[]
	nickname: string
	location: string
	skills: string[]
	social: ISocials
	title: string
	website: string
}

export interface IUserSaveData {
	nickname: string
	user_metadata: IMetadata
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

export const userDataInitialValues: IUserData = {
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
		interests: [''],
		location: '',
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

interface setEmailModel {
	type: typeof SET_EMAIL
	payload: string
}

export type ActionType = setEmailModel
