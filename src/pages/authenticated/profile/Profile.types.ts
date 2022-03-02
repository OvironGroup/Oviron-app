type SocialsType = {
	facebook: string | null
	pinterest: string | null
	instragram: string | null
	beheance: string | null
	twitter: string | null
	twitch: string | null
	github: string | null
	linkedin: string | null
}

export type MetadataType = {
	picture: string
	about: string
	interests: string[]
	nickname: string
	city: string
	nation: string
	skills: string[]
	socials: SocialsType
	title: string
	website: string
} | null
