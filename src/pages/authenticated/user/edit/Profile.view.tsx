import { ReactElement, useState } from 'react'
import { Chips } from 'primereact/chips'
import ProfileServices from '../User.services'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { ISocialsType, MetadataType } from '../User.types'
import { User } from '@auth0/auth0-react'

interface Props {
	token: string | undefined
	user: User | undefined
}

interface IFormInput extends MetadataType {
	about: string
	interests: string[]
	location: string
	nickname: string
	skills: string[]
	socials: ISocialsType
	title: string
	websites: string
	audience: {
		followers: string
		following: string
		kudos: string
	}
}

const BEHANCE = 'behance'
const GITHUB = 'github'
const DEVIANTART = 'deviantart'
const DRIBBBLE = 'dribbble'
const GUMROAD = 'gumroad'
const INSTAGRAM = 'instagram'
const TWITCH = 'twitch'
const TWITTER = 'twitter'

const Profile = ({ user, token }: Props): ReactElement => {
	const { register, control } = useForm<IFormInput>()
	const [skills, setSkills] = useState<string[]>([])
	const [interests, setInterests] = useState<string[]>([])

	const onSubmit: SubmitHandler<IFormInput> = async data => {
		const data_to_update = {
			user_metadata: {
				...data,
				skills,
				interests,
				audience: {
					followers: '',
					following: '',
					kudos: '',
				},
				socials: {
					beheance: data.socials[BEHANCE],
					deviantart: data.socials[DEVIANTART],
					dribbble: data.socials[DRIBBBLE],
					github: data.socials[GITHUB],
					gumroad: data.socials[GUMROAD],
					instagram: data.socials[INSTAGRAM],
					twitch: data.socials[TWITCH],
					twitter: data.socials[TWITTER],
				},
			},
		}

		await ProfileServices.updateUser(user, token, data_to_update)
	}
	return (
		<>
			<h1 className="text-gray_900 text-2xl mb-10">Edit your Profile</h1>
			<form className="text-gray_900" onSubmit={() => onSubmit}>
				<div className="mb-4">
					<label>Nickname</label>
					<input {...register('nickname', { required: true })} />
				</div>
				<div className="mb-4">
					<label>Title</label>
					<input {...register('title', { required: true })} />
				</div>
				<div className="mb-4">
					<label>Location</label>
					<input {...register('location', { required: true })} />
				</div>
				<div className="mb-4">
					<label>Websites</label>
					<input {...register('websites', { required: true })} />
				</div>
				<div className="mb-4">
					<label>About</label>
					<textarea {...register('about', { required: true })} />
				</div>
				<div className="mb-4">
					<label>Social Profiles</label>
					<input
						{...register(`socials.${INSTAGRAM}`, { required: true })}
						placeholder="Instagram"
						className="mb-2"
					/>
					<input
						{...register(`socials.${BEHANCE}`, { required: true })}
						placeholder="Behance"
						className="my-2"
					/>
					<input
						{...register(`socials.${DEVIANTART}`, { required: true })}
						placeholder="Deviantart"
						className="my-2"
					/>
					<input
						{...register(`socials.${GITHUB}`, { required: true })}
						placeholder="Github"
						className="my-2"
					/>
					<input
						{...register(`socials.${TWITCH}`, { required: true })}
						placeholder="Twitch"
						className="my-2"
					/>
					<input
						{...register(`socials.${TWITTER}`, { required: true })}
						placeholder="Twitter"
						className="my-2"
					/>
					<input
						{...register(`socials.${GUMROAD}`, { required: true })}
						placeholder="Gumroad"
						className="my-2"
					/>
				</div>
				<div className="mb-4 flex flex-col">
					<label>Skills & Knowledges</label>
					<Controller
						name="skills"
						control={control}
						render={({ field }) => (
							<Chips
								{...field}
								value={skills}
								onChange={e => setSkills(e.value)}
								separator=","
								className="Chips"
							/>
						)}
					/>
				</div>
				<div className="mb-4 flex flex-col">
					<label>Interests</label>
					<Controller
						name="interests"
						control={control}
						render={({ field }) => (
							<Chips
								{...field}
								value={interests}
								onChange={e => setInterests(e.value)}
								separator=","
								className="Chips"
							/>
						)}
					/>
				</div>
			</form>
		</>
	)
}

export default Profile
