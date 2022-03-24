export type ISocialsType = {
	instagram?: string | null
	behance?: string | null
	twitter?: string | null
	twitch?: string | null
	github?: string | null
	deviantart?: string | null
	gumroad?: string | null
	dribbble?: string | null
}

export interface MetadataType {
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
	socials: ISocialsType
	title: string
	website: string
}
