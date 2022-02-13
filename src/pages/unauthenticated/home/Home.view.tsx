import { ReactElement } from 'react'
import {
	Ovnet,
	Github,
	Ostudio,
	Orchives,
	OvironSpace,
	Discord,
	Ocademy,
} from '../../../icons/icons'
import Welcome from './Welcome.view'
import Roadmap from './Roadmap.view'
import styles from './Home.module.css'

const HomeView = (): ReactElement => (
	<div className="xl:mx-auto max-w-7xl p-6 lg:px-10">
		<Welcome />
		<section>
			<div>
				<div className="text-center mb-8">
					<h2 className="xl:text-5xl">
						POWER TO EVERYONE
						<span className="text-purple">.</span>
					</h2>
					<p className="text-xl xl:text-2xl">
						4 Web tools & 1 VR experience.
						<br />
						<br />
						Free to access and no required subscriptions.
						<br />
						<br />
						<span className="text-gray-light">
							Because everyone deserve affordable solutions.
						</span>
					</p>
				</div>
				<div className="mt-5 grid md:grid-cols-2 gap-10 sm:grid-cols-1">
					<div className="text-center p-3 bg-gray_800 shadow-lg shadow-gray_800">
						<h4 className="text-4xl flex justify-center leading-normal">
							<Ovnet className={`mr-4 ${styles.Ovnet} ${styles.ToolsIcon}`} />{' '}
							<span>Ovnet</span>
						</h4>
						<p className="my-5 text-xl leading-9">
							Build your spaces, showcase your work, meet with others, and get
							inspired. Ovnet, enhancing networking for digital creators and
							enthusiasts.
						</p>
						<a
							href="https://docs.oviron.io/oviron/the-platform-and-tools/ovnet"
							className="text-blue"
							target="_blank"
							rel="noreferrer"
						>
							Discover more
						</a>
					</div>
					<div className="text-center p-3 bg-gray_800 shadow-lg shadow-gray_800">
						<h4 className="text-4xl flex justify-center leading-normal">
							<Ostudio
								className={`mr-4 ${styles.Ostudio} ${styles.ToolsIcon}`}
							/>{' '}
							Ostudio
						</h4>
						<p className="my-5 text-xl leading-9">
							Paint, Create models, Design worlds, and compose animated scenes
							with OStudio, a compositing & 3D modeling web application.
						</p>
						<a
							href="https://docs.oviron.io/oviron/the-platform-and-tools/ostudio"
							target="_blank"
							className="text-blue"
							rel="noreferrer"
						>
							Discover more
						</a>
					</div>
					<div className="text-center p-3 bg-gray_800 shadow-lg shadow-gray_800">
						<h4 className="text-4xl flex justify-center leading-normal">
							<Orchives
								className={`mr-4 ${styles.Orchives} ${styles.ToolsIcon}`}
							/>{' '}
							Orchives
						</h4>
						<p className="my-5 text-xl leading-9">
							Discover and download affordable 3D assets or Register and sell
							your creations with Orchives, the library for 3D modelers, game
							devs, and more.
						</p>
						<a
							href="https://docs.oviron.io/oviron/the-platform-and-tools/orchives"
							target="_blank"
							className="text-blue"
							rel="noreferrer"
						>
							Discover more
						</a>
					</div>
					<div className="text-center p-3 bg-gray_800 shadow-lg shadow-gray_800">
						<h4 className="text-4xl flex justify-center leading-normal">
							<Ocademy
								className={`mr-4 ${styles.Ocademy} ${styles.ToolsIcon}`}
							/>{' '}
							Ocademy
						</h4>
						<p className="my-5 text-xl leading-9">
							The online academy to enroll into 3D modeling, game development,
							and VR related courses, or publishing your knowledge as an
							instructor.
						</p>
						<a
							href="https://docs.oviron.io/oviron/the-platform-and-tools/ocademy"
							target="_blank"
							className="text-blue"
							rel="noreferrer"
						>
							Discover more
						</a>
					</div>
					<div className="text-center p-3 bg-gray_800 shadow-lg shadow-gray_800">
						<h4 className="text-4xl flex justify-center leading-normal">
							<OvironSpace
								className={`mr-4 ${styles.OvironSpace} ${styles.ToolsIcon}`}
							/>{' '}
							Oviron Space
						</h4>
						<p className="my-5 text-xl leading-9">
							Combine the power of OVIRON tools into this gamified experience
							built for VR from the ground up. Oviron Space, the sandbox open
							verse where imagination is the limit. Create anything, own
							everything!
						</p>
						<a
							href="https://docs.oviron.io/oviron/the-platform-and-tools/oviron-space"
							target="_blank"
							className="text-blue"
							rel="noreferrer"
						>
							Discover more
						</a>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div className="flex">
				<div className="lg:w-1/2">
					<h2 className="xl:leading-tight xl:text-5xl">
						WHY WE BELIEVE IN OVIRON
						<span className="text-yellow">.</span>
					</h2>
					<p className="leading-9 xl:text-2xl xl:leading-10">
						OVIRON is an under-development project, aimed to build a
						community-driven platform with Free open-source solutions for
						digital & VR content. The sole goal of the project is to empower
						digital creators, game developers, and VR tech enthusiasts with
						affordable solutions that can bring them authority over the web,
						while also fostering collaboration and creativity.
						<br />
						<br />
						The methodology of the project will be based over an open ecosystem,
						where the community is the head of the project. Support will be
						provided by the OVIRON core team with transparency delivery and
						constant integration of new technologies, solutions, and external
						partnership to help assure the evolution of the platform.
						<br />
						<br />
						The <strong>mission</strong> is solely to empower digital & VR
						content creators to gain ownership of their content, privacy of
						their spaces, and creative encouragement for indie projects. We
						<strong>vision</strong> a growth of unity and collaboration between
						indie creators all around the globe within an open virtual space, to
						lessen the distance gap.
						<br />
						<br />
						Read more about OVIRON in our{' '}
						<a
							href="https://docs.oviron.io/oviron/"
							className="text-blue-light"
							target="_blank"
							rel="noreferrer"
						>
							Litepaper
						</a>
					</p>
				</div>
				<div className="hidden lg:flex lg:items-center lg:w-1/2">
					<img
						src={`${process.env.PUBLIC_URL}/ecosystem.png`}
						alt="ecosystem"
						srcSet={`${process.env.PUBLIC_URL}/ecosystem@2x.png 2x`}
					/>
				</div>
			</div>
		</section>
		<Roadmap />
		<section>
			<div className="flex">
				<div className="text-center lg:w-1/2">
					<h2 className="text-gray-light xl:leading-tight xl:text-5xl">
						LET&apos;S DIVE <span className="text-white">TOGETHER</span> INTO
						OVIRON
						<span className="text-purple">.</span>
					</h2>
					<p className="leading-9 xl:text-2xl xl:leading-10">
						Be part of growing community of creators and enthusiast to foster
						indie projects, and the virtual open space.
						<br />
						<br />
						Support us and Stay tuned on our Discord
					</p>
					<a
						href="https://discord.gg/SRwa2WvHKW"
						className={`my-10 mx-auto ${styles.BtnMain}`}
						role="button"
					>
						<span className="mr-3">Join us</span> <Discord />
					</a>
					<p className="text-gray-light text-lg">
						Are you a developer and want to support the dev team?
					</p>
					<a
						className="mt-4 flex align-center justify-center"
						href="https://github.com/OvironGroup"
						target="_blank"
						rel="noreferrer"
					>
						<span className="mr-3">Github</span> <Github />
					</a>
				</div>
				<div className="hidden md:block lg:w-1/2">
					<img
						src={`${process.env.PUBLIC_URL}/portal-guy.png`}
						alt="portal with guy"
						srcSet={`${process.env.PUBLIC_URL}/portal-guy@2x.png 2x`}
					/>
				</div>
			</div>
		</section>
	</div>
)

export default HomeView
