import { ChangeEvent, ReactElement, useEffect, useState } from 'react'
import { Chips } from 'primereact/chips'
import useUserService from '../useUserService'
import { Controller, useForm } from 'react-hook-form'
import { IMetadata, IUserData, IUserSaveData } from '../User.models'
import Input from 'components/Input/Input.view'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
	userData: IUserData
	updating: boolean
	updated: (value: boolean) => void
}

const LOCATION = 'location'
const NICKNAME = 'nickname'
const TITLE = 'title'
const ABOUT = 'about'
const WEBSITE = 'website'
const BEHANCE = 'behance'
const GITHUB = 'github'
const DEVIANTART = 'deviantart'
const DRIBBBLE = 'dribbble'
const GUMROAD = 'gumroad'
const INSTAGRAM = 'instagram'
const TWITCH = 'twitch'
const TWITTER = 'twitter'

const Profile = ({ userData, updating, updated }: Props): ReactElement => {
	const { user } = useAuth0()
	const {
		user_metadata: {
			nickname,
			title,
			about,
			website,
			interests,
			skills,
			social: {
				behance,
				deviantart,
				dribbble,
				github,
				gumroad,
				instagram,
				twitch,
				twitter,
			},
			location,
		},
	} = userData

	const { register, control } = useForm<IUserSaveData>()
	const userService = useUserService()
	const [skillsData, setSkillsData] = useState<string[]>([''])
	const [interestsData, setInterestsData] = useState<string[]>([''])
	const [formValue, setFormValue] = useState<{ [x: string]: string }>({
		nickname,
		title,
		about,
		location,
		website,
		instagram,
		deviantart,
		dribbble,
		github,
		twitch,
		twitter,
		gumroad,
		behance,
	})

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		switch (e.target.name) {
			case NICKNAME:
				setFormValue({
					...formValue,
					nickname: e.target.value,
				})
				break
			case TITLE:
				setFormValue({
					...formValue,
					title: e.target.value,
				})
				break
			case ABOUT:
				setFormValue({
					...formValue,
					about: e.target.value,
				})
				break
			case LOCATION:
				setFormValue({
					...formValue,
					location: e.target.value,
				})
				break
			case WEBSITE:
				setFormValue({
					...formValue,
					website: e.target.value,
				})
				break
			case INSTAGRAM:
				setFormValue({
					...formValue,
					[INSTAGRAM]: e.target.value,
				})
				break
			case DEVIANTART:
				setFormValue({
					...formValue,
					[DEVIANTART]: e.target.value,
				})
				break
			case DRIBBBLE:
				setFormValue({
					...formValue,
					[DRIBBBLE]: e.target.value,
				})
				break
			case GITHUB:
				setFormValue({
					...formValue,
					[GITHUB]: e.target.value,
				})
				break
			case TWITCH:
				setFormValue({
					...formValue,
					[TWITCH]: e.target.value,
				})
				break
			case TWITTER:
				setFormValue({
					...formValue,
					[TWITTER]: e.target.value,
				})
				break
			case GUMROAD:
				setFormValue({
					...formValue,
					[GUMROAD]: e.target.value,
				})
				break
			case BEHANCE:
				setFormValue({
					...formValue,
					[BEHANCE]: e.target.value,
				})
				break
		}
	}

	useEffect(() => {
		setInterestsData(interests)
	}, [interests])

	useEffect(() => {
		setSkillsData(skills)
	}, [skills])

	useEffect(() => {
		setFormValue({
			nickname: nickname,
			title: title,
			about: about,
			location: location,
			website: website,
			instagram: instagram,
			deviantart: deviantart,
			dribbble: dribbble,
			github: github,
			twitch: twitch,
			twitter: twitter,
			gumroad: gumroad,
			behance: behance,
		})
	}, [
		nickname,
		title,
		location,
		website,
		instagram,
		deviantart,
		dribbble,
		github,
		instagram,
		twitch,
		twitter,
		gumroad,
		behance,
		about,
	])

	useEffect(() => {
		if (updating) {
			const data_to_update: IMetadata = {
				nickname: formValue?.nickname || nickname,
				title: formValue?.title || title,
				skills: skillsData || skills,
				interests: interestsData || interests,
				about: formValue?.about || about,
				location: formValue?.location || location,
				website: formValue?.website || website,
				social: {
					behance: formValue?.behance || behance,
					deviantart: formValue?.deviantart || deviantart,
					dribbble: formValue?.dribbble || dribbble,
					github: formValue?.github || github,
					gumroad: formValue?.gumroad || gumroad,
					instagram: formValue?.instagram || instagram,
					twitch: formValue?.twitch || twitch,
					twitter: formValue?.twitter || twitter,
				},
			}

			userService.updateUser(user, data_to_update).finally(() => {
				updated(true)
			})
		}
	}, [updating])

	return (
		<>
			<h1 className="text-gray_900 text-2xl mb-10">Edit your Profile</h1>
			<form className="text-gray_900">
				<div className="mb-4">
					<label>Nickname</label>
					<Input
						{...register('user_metadata.nickname', { required: true })}
						onChange={handleChange}
						name={NICKNAME}
						value={formValue?.nickname}
						disabled={updating}
					/>
				</div>
				<div className="mb-4">
					<label>Title</label>
					<Input
						{...register('user_metadata.title', { required: true })}
						onChange={handleChange}
						name={TITLE}
						value={formValue?.title}
						disabled={updating}
					/>
				</div>
				<div className="mb-4">
					<label>Location</label>
					<Input
						{...register('user_metadata.location', { required: true })}
						onChange={handleChange}
						name={LOCATION}
						value={formValue?.location}
						disabled={updating}
					/>
				</div>
				<div className="mb-4">
					<label>Website</label>
					<Input
						{...register('user_metadata.website', { required: true })}
						onChange={handleChange}
						name={WEBSITE}
						value={formValue?.website}
						disabled={updating}
					/>
				</div>
				<div className="mb-4">
					<label>About</label>
					<textarea
						{...register('user_metadata.about', { required: true })}
						value={formValue?.about}
						name={ABOUT}
						onChange={handleChange}
						disabled={updating}
					/>
				</div>
				<div className="mb-4">
					<label>Social Profiles</label>
					<Input
						{...register(`user_metadata.social.${INSTAGRAM}`, {
							required: true,
						})}
						placeholder="Instagram"
						className="mb-2"
						name={INSTAGRAM}
						onChange={handleChange}
						value={formValue?.instagram}
						disabled={updating}
					/>
					<Input
						{...register(`user_metadata.social.${DRIBBBLE}`, {
							required: true,
						})}
						placeholder="Dribbble"
						className="mb-2"
						name={DRIBBBLE}
						onChange={handleChange}
						value={formValue?.dribbble}
						disabled={updating}
					/>
					<Input
						{...register(`user_metadata.social.${BEHANCE}`, { required: true })}
						placeholder="Behance"
						className="my-2"
						name={BEHANCE}
						onChange={handleChange}
						value={formValue?.behance}
						disabled={updating}
					/>
					<Input
						{...register(`user_metadata.social.${DEVIANTART}`, {
							required: true,
						})}
						placeholder="Deviantart"
						className="my-2"
						name={DEVIANTART}
						onChange={handleChange}
						value={formValue?.deviantart}
						disabled={updating}
					/>
					<Input
						{...register(`user_metadata.social.${GITHUB}`, { required: true })}
						placeholder="Github"
						className="my-2"
						name={GITHUB}
						onChange={handleChange}
						value={formValue?.github}
						disabled={updating}
					/>
					<Input
						{...register(`user_metadata.social.${TWITCH}`, { required: true })}
						placeholder="Twitch"
						className="my-2"
						name={TWITCH}
						onChange={handleChange}
						value={formValue?.twitch}
						disabled={updating}
					/>
					<Input
						{...register(`user_metadata.social.${TWITTER}`, { required: true })}
						placeholder="Twitter"
						className="my-2"
						name={TWITTER}
						onChange={handleChange}
						value={formValue?.twitter}
						disabled={updating}
					/>
					<Input
						{...register(`user_metadata.social.${GUMROAD}`, { required: true })}
						placeholder="Gumroad"
						className="my-2"
						name={GUMROAD}
						onChange={handleChange}
						value={formValue?.gumroad}
						disabled={updating}
					/>
				</div>
				<div className="mb-4 flex flex-col">
					<label>Skills & Knowledges</label>
					<Controller
						name="user_metadata.skills"
						control={control}
						render={({ field }) => (
							<Chips
								{...field}
								value={skillsData}
								onChange={e => setSkillsData(e.value)}
								separator=","
								className="Chips"
								disabled={updating}
							/>
						)}
					/>
				</div>
				<div className="mb-4 flex flex-col">
					<label>Interests</label>
					<Controller
						name="user_metadata.interests"
						control={control}
						render={({ field }) =>
							field && (
								<Chips
									{...field}
									value={interestsData}
									onChange={e => setInterestsData(e.value)}
									separator=","
									className="Chips"
									disabled={updating}
								/>
							)
						}
					/>
				</div>
			</form>
		</>
	)
}

export default Profile
