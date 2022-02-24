export const editProfile = '/edit-profile'
export const summary = '/summary'
export const moodboard = '/moodboard'
export const kudos = '/kudos'
export const assets = '/assets'
export const classroom = '/classroom'

export const EDIT_PROFILE = 'EDIT_PROFILE'
export const HOME = 'HOME'
export const SUMMARY = 'SUMMARY'

export const routes = [
	{
		url: '/',
		private: false,
		name: HOME,
	},
	{
		url: summary,
		private: true,
		name: SUMMARY,
	},
	{
		url: editProfile,
		private: true,
		name: EDIT_PROFILE,
	},
]
