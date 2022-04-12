import { ReactElement } from 'react'
import { IUserData } from './User.models'
import styles from './User.module.css'
import {
	Behance,
	Deviantart,
	Dribbble,
	Github,
	Gumroad,
	Instagram,
	MapMarker,
	Pen,
	Twitch,
	Twitter,
} from 'icons/icons'
import { Link } from 'react-router-dom'
import { editUser } from 'routes'

interface Props {
	userData: IUserData
}

const UserSidebar = ({ userData }: Props): ReactElement => {
	const {
		picture,
		user_metadata: {
			about,
			interests,
			location,
			nickname,
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
			title,
			website,
		},
	}: IUserData = userData

	return (
		<div className={styles.Sidebar}>
			<div className="flex">
				<div className="rounded-full relative bottom-16 right-5 border-8 border-white">
					<img src={picture} className="rounded-full" />
				</div>
				<div className="flex-1">
					<ul>
						<li className="text-xl text-gray_900">
							<strong>{nickname}</strong>
						</li>
						<li className="text-base">{title}</li>
						<li className="text-base flex items-center">
							<MapMarker />
							<span className="ml-1">{location}</span>
						</li>
					</ul>
				</div>
			</div>
			<div
				className="mb-3"
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gridGap: 20,
				}}
			>
				<div>
					<span>
						<strong>{0}</strong>
						<br /> Followers
					</span>
				</div>
				<div>
					<span>
						<strong>{0}</strong>
						<br /> Following
					</span>
				</div>
				<div>
					<span>
						<strong>{0}</strong>
						<br /> Kudos
					</span>
				</div>
			</div>
			<div>
				<div className="mb-3">
					<h5 className="text-base flex items-center">
						<span>Website</span>{' '}
						<Link to={`/${editUser}/profile`} className="ml-2">
							<Pen />
						</Link>
					</h5>
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
					<h5 className="text-base flex items-center">
						<span>About</span>
						<Link to={`/${editUser}/profile`} className="ml-2">
							<Pen />
						</Link>
					</h5>
					<p className="text-base">{about}</p>
				</div>
				{Object.keys(userData.user_metadata.social).length > 0 && (
					<div className="mb-3">
						<h5 className="text-xl">Connect</h5>
						<ul className="flex my-2">
							{github && (
								<li className={styles.SocialBadge}>
									<a href={github} target="_blank" rel="noreferrer">
										<Github width={18} />
									</a>
								</li>
							)}
							{behance && (
								<li className={styles.SocialBadge}>
									<a href={behance} target="_blank" rel="noreferrer">
										<Behance width={18} />
									</a>
								</li>
							)}
							{instagram && (
								<li className={styles.SocialBadge}>
									<a href={instagram} target="_blank" rel="noreferrer">
										<Instagram width={18} />
									</a>
								</li>
							)}
							{twitch && (
								<li className={styles.SocialBadge}>
									<a href={twitch} target="_blank" rel="noreferrer">
										<Twitch width={18} />
									</a>
								</li>
							)}
							{deviantart && (
								<li className={styles.SocialBadge}>
									<a href={deviantart} target="_blank" rel="noreferrer">
										<Deviantart width={18} />
									</a>
								</li>
							)}
							{twitch && (
								<li className={styles.SocialBadge}>
									<a href={twitch} target="_blank" rel="noreferrer">
										<Twitch width={18} />
									</a>
								</li>
							)}
							{twitter && (
								<li className={styles.SocialBadge}>
									<a href={twitter} target="_blank" rel="noreferrer">
										<Twitter width={18} />
									</a>
								</li>
							)}
							{gumroad && (
								<li className={styles.SocialBadge}>
									<a href={gumroad} target="_blank" rel="noreferrer">
										<Gumroad width={18} />
									</a>
								</li>
							)}
							{dribbble && (
								<li className={styles.SocialBadge}>
									<a href={dribbble} target="_blank" rel="noreferrer">
										<Dribbble width={18} />
									</a>
								</li>
							)}
						</ul>
					</div>
				)}

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

export default UserSidebar
