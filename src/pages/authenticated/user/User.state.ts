import { IUserData } from './User.models'

const initialState: IUserData = {
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

export default initialState
