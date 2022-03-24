import { User } from '@auth0/auth0-react'
import { ReactElement } from 'react'
import { MetadataType } from './User.types'
import styles from './User.module.css'
import {
	Behance,
	Deviantart,
	Dribbble,
	Github,
	Gumroad,
	Instagram,
	MapMarker,
	Twitch,
	Twitter,
} from 'icons/icons'

interface Props {
	user: User | undefined
	metadata: MetadataType
}

const ProfileSidebar = ({ user, metadata }: Props): ReactElement => {
	const {
		title,
		city,
		nation,
		website,
		about,
		interests,
		skills,
		audience: { followers, following, kudos },
		socials: {
			github,
			behance,
			instagram,
			twitch,
			deviantart,
			gumroad,
			twitter,
			dribbble,
		},
	} = metadata

	return (
		<div className={styles.Sidebar}>
			<div className="flex">
				<div className="rounded-full relative bottom-16 right-5 border-8 border-white">
					<img src={user?.picture} className="rounded-full" />
				</div>
				<div className="flex-1">
					<ul>
						<li className="text-xl text-gray_900">
							<strong>{user?.nickname}</strong>
						</li>
						<li className="text-base">{title}</li>
						<li className="text-base flex items-center">
							<MapMarker />
							<span className="ml-1">{`${city}, ${nation}`}</span>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<div className="mb-3">
					<p className="flex text-base">
						<span>
							<strong>{followers}</strong> Followers
						</span>
						<span>
							<strong>{following}</strong> Following
						</span>
						<span>
							<strong>{kudos}</strong> Kudos
						</span>
					</p>
				</div>
				<div className="mb-3">
					<h5 className="text-xl">Website</h5>
					<a
						href={website}
						className="underline"
						target="_blank"
						rel="noreferrer"
					>
						{website}
					</a>
				</div>
				<div className="mb-3">
					<h5 className="text-xl">About</h5>
					<p className="text-base">{about}</p>
				</div>
				<div className="mb-3">
					<h5 className="text-xl">Connect</h5>
					<ul className="flex my-2">
						{github && (
							<li className="cursor-pointer">
								<Github />
							</li>
						)}
						{behance && (
							<li className="cursor-pointer">
								<Behance />
							</li>
						)}
						{instagram && (
							<li className="cursor-pointer">
								<Instagram />
							</li>
						)}
						{twitch && (
							<li className="cursor-pointer">
								<Twitch />
							</li>
						)}
						{deviantart && (
							<li className="cursor-pointer">
								<Deviantart />
							</li>
						)}
						{twitch && (
							<li className="cursor-pointer">
								<Twitch />
							</li>
						)}
						{twitter && (
							<li className="cursor-pointer">
								<Twitter />
							</li>
						)}
						{gumroad && (
							<li className="cursor-pointer">
								<Gumroad />
							</li>
						)}
						{dribbble && (
							<li className="cursor-pointer">
								<Dribbble />
							</li>
						)}
					</ul>
				</div>
				<div className="mb-3">
					<h5 className="text-xl">Skills</h5>
					<ul className="flex">
						{skills.map((skill: string, index: number) => (
							<li key={index} className="bg-gray_200 rounded m-1 px-3 py-1">
								{skill}
							</li>
						))}
					</ul>
				</div>
				<div className="mb-3">
					<h5 className="text-xl">Interests</h5>
					<ul className="flex">
						{interests.map((interest: string, index: number) => (
							<li key={index} className="bg-gray_200 rounded m-1 px-3 py-1">
								{interest}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ProfileSidebar
