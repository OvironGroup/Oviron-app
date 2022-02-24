import { User } from '@auth0/auth0-react'
import { ReactElement } from 'react'
import { MetadataType } from './Profile.types'
import styles from './Profile.module.css'

interface Props {
	user: User | undefined
	metadata: MetadataType
}

const ProfileSidebar = ({ user, metadata }: Props): ReactElement => (
	<div className={styles.Sidebar}>
		<div className="flex">
			<div className="rounded-md w-32">
				<img src={user?.picture} className="rounded-full" />
			</div>
			<div className="ml-3">
				<ul>
					<li className="text-lg text-gray_900">{user?.name}</li>
					<li>{metadata?.title}</li>
					<li>{`${metadata?.city}, ${metadata?.nation}`}</li>
				</ul>
			</div>
		</div>
		<div className="mt-5">
			<div className="mb-3">
				<p className="flex text-base">
					<span>1.0k Followers</span>
					<span>1.0k Following</span>
					<span>500 Kudos</span>
				</p>
			</div>
			<div className="mb-3">
				<h5 className="text-xl">Website</h5>
				<a href="/">{metadata?.website}</a>
			</div>
			<div className="mb-3">
				<h5 className="text-xl">About</h5>
				<p>{metadata?.about}</p>
			</div>
			<div className="mb-3">
				<h5 className="text-xl">Connect</h5>
				<ul>{metadata?.socials.github ? <li>icon</li> : null}</ul>
			</div>
			<div className="mb-3">
				<h5 className="text-xl">Skills</h5>
				<ul>
					{metadata?.skills.map((skill: string, index: number) => (
						<li key={index}>{skill}</li>
					))}
				</ul>
			</div>
			<div className="mb-3">
				<h5 className="text-xl">Interests</h5>
				<ul>
					{metadata?.interests.map((interest: string, index: number) => (
						<li key={index}>{interest}</li>
					))}
				</ul>
			</div>
		</div>
	</div>
)

export default ProfileSidebar
