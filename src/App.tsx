import React from 'react';
import { Discord, Github, Logo, Ocademy, Orchives, Ostudio, OvironSpace, Ovnet } from './icons/icons'
import styles from './App.module.css';
import SidebarNav from './components/SidebarNav/SidebarNav.view';

const App = () => {
	return (
		<div className="min-h-full bg-gray_800 text-white">
			<nav className="bg-white sticky top-0">
				<div className="w-full px-3">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<Logo />
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-4 flex items-center md:ml-6">
								<button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
									<span className="sr-only">View notifications</span>
									<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
									</svg>
								</button>
								<div className="ml-3 relative">
									{/* Avatar */}
								</div>
							</div>
						</div>
						<div className="-mr-2 flex md:hidden">
							<button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
								<span className="sr-only">Open main menu</span>

								<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
								</svg>

								<svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div className="md:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

					</div>
					<div className="pt-4 pb-3 border-t border-gray-700">
						<div className="flex items-center px-5">
							<div className="flex-shrink-0">
								<img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
							</div>
							<div className="ml-3">
								<div className="text-base font-medium leading-none text-white">Tom Cook</div>
								<div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
							</div>
							<button type="button" className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
								<span className="sr-only">View notifications</span>
								<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</nav>
			<SidebarNav />
			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<div className="px-4 py-6 sm:px-0">
						<section>
							<div className="flex bg-animated">
								<div className="lg:w-1/2">
									<h1 className="text-6xl mb-10">EMPOWERING CREATORS & MASSES.</h1>
									<p>OVRION, the platform that foster content ownership, creativity, and collaboration between creators and masses.</p>
									<p>Discover more about OVIRON</p>
									<div className="flex mt-10">
										<a href="https://docs.oviron.io/oviron/" className={styles.BtnSecondary} role="button">Litepaper</a>
										<a href="https://discord.gg/SRwa2WvHKW" className={styles.BtnMain} role="button">Join us</a>
									</div>
								</div>
								<div>
									<img src={`${process.env.PUBLIC_URL}/portal.png`} alt="portal" srcSet={`${process.env.PUBLIC_URL}/portal@2x.png 2x`} />
								</div>
							</div>
						</section>
						<section>
							<div>
								<div className="text-center">
									<h2 className="text-5xl">POWER TO EVERYONE.</h2>
									<p>4 Web tools & 1 VR experience. Free to access and no required subscriptions. Because everyone deserve affordable solutions.</p>
								</div>
								<div className="mt-5 grid grid-cols-2 gap-10">
									<div className="text-center p-3 bg-gray_800 shadow-lg shadow-gray_800">
										<h4 className="text-4xl flex align-center justify-center">
											<Ovnet className={`mr-4 ${styles.Ovnet} ${styles.ToolsIcon}`} /> <span>Ovnet</span>
										</h4>
										<p className="my-5">Build your spaces, showcase your work, meet with others, and get inspired. Ovnet, enhancing networking for digital creators and enthusiasts.</p>
										<a href="/" className="text-blue">Discover more</a>
									</div>
									<div className="text-center">
										<h4 className="text-4xl flex align-middle justify-center"><Ostudio className={`mr-4 ${styles.Ostudio} ${styles.ToolsIcon}`} /> Ostudio</h4>
										<p className="my-5">Paint, Create models, Design worlds, and compose animated scenes with OStudio, a compositing & 3D modeling web application.</p>
										<a href="/" className="text-blue">Discover more</a>
									</div>
									<div className="text-center">
										<h4 className="text-4xl flex align-middle justify-center"><Orchives className={`mr-4 ${styles.Orchives} ${styles.ToolsIcon}`} /> Orchives</h4>
										<p className="my-5">Discover and download affordable 3D assets or Register and sell your creations with Orchives, the library for 3D modelers, game devs, and more.</p>
										<a href="/" className="text-blue">Discover more</a>
									</div>
									<div className="text-center">
										<h4 className="text-4xl flex align-middle justify-center"><Ocademy className={`mr-4 ${styles.Ocademy} ${styles.ToolsIcon}`} /> Ocademy</h4>
										<p className="my-5">The online academy to enroll into 3D modeling, game development, and VR related courses, or publishing your knowledge as an instructor.</p>
										<a href="/" className="text-blue">Discover more</a>
									</div>
									<div className="text-center">
										<h4 className="text-4xl flex align-middle justify-center"><OvironSpace className={`mr-4 ${styles.OvironSpace} ${styles.ToolsIcon}`} /> Oviron Space</h4>
										<p className="my-5">Combine the power of OVIRON tools into this gamified experience built for VR from the ground up. Oviron Space, the sandbox open verse where imagination is the limit. Create anything, own everything!</p>
										<a href="/" className="text-blue">Discover more</a>
									</div>
								</div>
							</div>
						</section>
						<section>
							<div className="flex">
								<div className="lg:w-1/2">
									<h2 className="text-5xl">WHY WE BELIEVE IN OVIRON.</h2>
									<p>OVIRON is an under-development project, aimed to build a community-driven platform with Free open-source solutions for digital & VR content. The sole goal of the project is to empower digital creators, game developers, and VR tech enthusiasts with affordable solutions that can bring them authority over the web, while also fostering collaboration and creativity. The methodology of the project will be based over an open ecosystem, where the community is the head of the project. Support will be provided by the OVIRON core team with transparency delivery and constant integration of new technologies, solutions, and external partnership to help assure the evolution of the platform. The mission is solely to empower digital & VR content creators to gain ownership of their content, privacy of their spaces, and creative encouragement for indie projects. We vision a growth of unity and collaboration between indie creators all around the globe within an open virtual space, to lessen the distance gap. Read more about OVIRON in our Litepaper</p>
								</div>
								<div className="lg:w-1/2">
									<img src={`${process.env.PUBLIC_URL}/ecosystem.png`} alt="ecosystem" srcSet={`${process.env.PUBLIC_URL}/ecosystem@2x.png 2x`} />
								</div>
							</div>
						</section>
						<section>
							<div>
								<h2 className="text-5xl">OVIRON ROADMAP.</h2>
								<div className="swiper-wrapper">
									<div className="range range--step1 swiper-slide">
										<div className="milestone">
											<h6>Milestone <span>1</span></h6>
											<ul>
												<li className="main">
													<div className="icons orchives">
														<img src="assets/img/orchives-white.svg" />
													</div>
													<h4>Orchives<br /><span>(Desktop & Mobile launch)</span></h4>
												</li>
												<li>
													Search and acquire free & paid SDK, 3D & VR assets for download.
												</li>
												<li>
													Publish Free & paid SDK, 3D & VR assets for download.
												</li>
												<li className="main">
													<div className="icons ocademy">
														<img src="assets/img/ocademy-white.svg" />
													</div>
													<h4>Ocademy<br /><span>(Desktop & Mobile launch)</span></h4>
												</li>
												<li>
													Discover and enroll on free or paid courses
												</li>
												<li>
													Instructors base features and dashboard for publishing.
												</li>
											</ul>
										</div>
									</div>
									<div className="range range--step2 swiper-slide">
										<div className="milestone">
											<h6>Milestone <span>2</span></h6>
											<ul>
												<li className="main">
													<div className="icons ovnet">
														<img src="assets/img/ovnet-white.svg" />
													</div>
													<h4>Ovnet v.1<br /><span>(Desktop & Mobile launch)</span></h4>
												</li>
												<li>
													Main Discovery page.
												</li>
												<li>
													User profile, Moodboards, and appreciations.
												</li>
												<li>
													Basic features (User search, content based algorithm, follow, appreciate, comment
													interactions, posting).
												</li>
												<li>
													<strong>Moonssenger BETA</strong> (Private & public chat, basic messaging).
												</li>
												<li className="main">
													<div className="icons orchives">
														<img src="assets/img/orchives-white.svg" />
													</div>
													<h4>Orchives XR Update<br /><span>(VR / AR launch)</span></h4>
												</li>
												<li className="main">
													<div className="icons ocademy">
														<img src="assets/img/ocademy-white.svg" />
													</div>
													<h4>Ocademy XR Update<br /><span>(VR / AR launch)</span></h4>
												</li>
											</ul>
										</div>
									</div>
									<div className="range range--step3 swiper-slide">
										<div className="milestone">
											<h6>Milestone <span>3</span></h6>
											<h3>Custom user dashboards</h3>
											<ul>
												<li className="main">
													<div className="icons ostudio">
														<img src="assets/img/ostudio-white.svg" />
													</div>
													<h4>OStudio BETA<br /><span>(Desktop / Mobile Beta)</span></h4>
												</li>
												<li>
													Organizer dashboard.
												</li>
												<li>
													Professional environment & tools.
												</li>
												<li>
													Composite spaces (Paint, model, worlds, scenes)
												</li>
												<li>
													Templates & connection with Orchives.
												</li>
												<li className="main">
													<div className="icons ovnet">
														<img src="assets/img/ovnet-white.svg" />
													</div>
													<h4>Ovnet V.2<br /><span>(Desktop & mobile update)</span></h4>
												</li>
												<li>
													User Portfolios.
												</li>
												<li>
													Share Orchives, Ocademy & OStudio posts.
												</li>
												<li>
													Moonssenger full (Video & voice messaging)
												</li>
												<li>
													Live streams.
												</li>
											</ul>
										</div>
									</div>
									<div className="range range--step4 swiper-slide">
										<div className="milestone">
											<h6>Milestone <span>4</span></h6>
											<h3>Plugins creations for Ovnet, Orchives, and Ocademy (OStudio in BETA)</h3>
											<ul>
												<li className="main">
													<div className="icons ostudio">
														<img src="assets/img/ostudio-white.svg" />
													</div>
													<h4>OStudio<br /><span>Desktop/Mobile Launch</span></h4>
												</li>
												<li>
													Simplified environment & tools for beginners.
												</li>
												<li>
													Test environment & VR testing.
												</li>
												<li>
													AI troubleshooting.
												</li>
												<li>
													Multi device performance tracker.
												</li>
												<li>
													Publishing into Orchives.
												</li>
												<li>
													Import external files.
												</li>
												<li>
													Exporting to Unity, Blender, Zbrush, and VRchat ready.
												</li>
												<li>
													Collab mode.
												</li>
												<li>
													Moonssenger direct sharing & streaming.
												</li>
												<li>
													Community plugins market.
												</li>
												<li className="main">
													<div className="icons ovnet">
														<img src="assets/img/ovnet-white.svg" />
													</div>
													<h4>Ovnet XR Update<br /><span>(VR / AR launch)</span></h4>
												</li>
											</ul>
										</div>
									</div>
									<div className="range range--step5 swiper-slide">
										<div className="milestone">
											<h6>Milestone <span>5</span></h6>
											<ul>
												<li className="main">
													<div className="icons oviron-space">
														<img src="assets/img/oviron-space-white.svg" />
													</div>
													<h4>Oviron Space BETA<br /><span>Desktop / Mobile Launch</span></h4>
												</li>
												<li>
													Basic features for navigation & world bridge.
												</li>
												<li>
													BETA tools (OStudio, Orchives, Ovnet, & Ocademy)
												</li>
												<li>
													Public world creation & Bone Test environments.
												</li>
												<li>
													Basic avatar creation (simplified basic avatar, possibility to import VR ready ones
													for testing created ones from OS)
												</li>
												<li>
													Basic recreation features (Backpack, Owatch, Selfie stick, Owallet, MyRoom, Browser)
												</li>
												<li>
													Basic worlds (Arcade, Gym, OMovies, Casino, Mall)
												</li>
												<li className="main">
													<div className="icons ostudio">
														<img src="assets/img/ostudio-white.svg" />
													</div>
													<h4>OStudio XR BETA<br /><span>(VR / AR Launch)</span></h4>
												</li>
											</ul>
										</div>
									</div>
									<div className="range range--step6 swiper-slide">
										<div className="milestone">
											<h6>Milestone <span>6</span></h6>
											<ul>
												<li className="main">
													<div className="icons oviron-space">
														<img src="assets/img/oviron-space-white.svg" />
													</div>
													<h4>Oviron Space OPEN!<br /><span>Desktop / Mobile Launch</span></h4>
												</li>
												<li>
													Metaverses navigation.
												</li>
												<li>
													Full tool features (OStudio, Orchives, Ovnet, & Ocademy)
												</li>
												<li>
													Private worlds available.
												</li>
												<li>
													Extra accessibility (Color schemes, Sign language gestures, handless navigation,
													voice command)
												</li>
												<li>
													XR features (pick up calls & video calls, room scan, transparency, notifications)
												</li>
												<li>
													XR-commerce
												</li>
												<li>
													Extra worlds (Ozoo, Oplaza, Omap)
												</li>
												<li className="main">
													<div className="icons ostudio">
														<img src="assets/img/ostudio-white.svg" />
													</div>
													<h4>OStudio XR<br /><span>(VR / AR Launch)</span></h4>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section>
							<div className="flex">
								<div className="text-center lg:w-1/2">
									<h2 className="text-5xl text-gray-light">LET'S DIVE <span className="text-white">TOGETHER</span> INTO OVIRON<span className="text-purple">.</span></h2>
									<p>Be part of growing community of creators and enthusiast to foster indie projects, and the virtual open space.
										<br />
										<br />
										Support us and Stay tuned on our Discord</p>
									<a href="https://discord.gg/SRwa2WvHKW" className={`my-10 mx-auto ${styles.BtnMain}`} role="button"><span className="mr-3">Join us</span> <Discord /></a>
									<p className="text-gray-light text-lg">Are you a developer and want to support the dev team?</p>
									<a className="mt-4 flex align-center justify-center" href="https://github.com/OvironGroup" target="_blank" rel="noreferrer">
										<span className="mr-3">Github</span> <Github />
									</a>
								</div>
								<div className="lg:w-1/2">
									<img src={`${process.env.PUBLIC_URL}/portal-guy.png`} alt="portal with guy" srcSet={`${process.env.PUBLIC_URL}/portal-guy@2x.png 2x`} />
								</div>
							</div>
						</section>
					</div>
				</div>
			</main>
			<footer>
				<div className="text-center p-5">
					<p className="text-sm">All rights reserved - © 2022 OVIRON GROUP</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
