import React from 'react';
import { Github, Logo, Ocademy, Orchives, Ostudio, OvironSpace, Ovnet } from './icons/icons'
import styles from './App.module.css';

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

			<aside className="fixed top-16 bg-gray_900 left-0 h-full w-auto px-6 py-4">
				<ul className="p-0 m-0">
					<li>
						<div className={`${styles.Home} ${styles.ToolsIcon}`}>
							<svg xmlns="http://www.w3.org/2000/svg" width="23.442" height="21.267" viewBox="0 0 23.442 21.267">
								<path id="Icon_metro-home" data-name="Icon metro-home" d="M26.012,15.669l-11.721-9.1-11.721,9.1V11.959l11.721-9.1,11.721,9.1Zm-2.93-.331v8.791h-5.86v-5.86h-5.86v5.86H5.5V15.338l8.791-6.593Z" transform="translate(-2.571 -2.861)" fill="#fff" />
							</svg>
						</div>
					</li>
					<li>
						<div className={`${styles.Ocademy} ${styles.ToolsIcon}`}>
							<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="36.565" height="35" viewBox="0 0 36.565 35">
								<defs>
									<linearGradient id="linear-gradient" x1="0.365" y1="-2.661" x2="0.5" y2="1.795" gradientUnits="objectBoundingBox">
										<stop offset="0" stop-color="#00ffa8" />
										<stop offset="0.515" stop-color="#10db96" />
										<stop offset="1" stop-color="#067a55" />
									</linearGradient>
									<linearGradient id="linear-gradient-2" x1="0.5" y1="-1.166" x2="0.435" y2="1.053" xlinkHref="#linear-gradient" />
								</defs>
								<g id="Ocademy" transform="translate(0)">
									<path id="Path_11" data-name="Path 11" d="M514.5,43.759a4.812,4.812,0,0,0,4.813-4.813,4.745,4.745,0,0,0-1.4-3.337l-.03,0a33.838,33.838,0,0,1-3.384.168,33.883,33.883,0,0,1-3.385-.168l-.029,0a4.742,4.742,0,0,0-1.4,3.337,4.813,4.813,0,0,0,4.814,4.813m-1.768-7.624a1.818,1.818,0,1,1-1.818,1.818,1.817,1.817,0,0,1,1.818-1.818" transform="translate(-494.773 -15.034)" fill="url(#linear-gradient)" />
									<path id="Path_12" data-name="Path 12" d="M523.786,28.718l-.629-4.546-4.024,1.581-3.544.981a6.486,6.486,0,0,1-3.45,0l-3.484-.965-4.082-1.6-.647,4.669-.162,1.165c0,.8,1.033,1.522,2.707,2.065a20.578,20.578,0,0,0,4.194.815,32.477,32.477,0,0,0,6.4,0,20.45,20.45,0,0,0,4.277-.842c1.625-.54,2.624-1.253,2.624-2.038Z" transform="translate(-494.135 -13.803)" fill="url(#linear-gradient-2)" />
									<path id="Path_13" data-name="Path 13" d="M529.5,18.136a1.239,1.239,0,0,0-.89-.89H528.6l-14.672-4.508a4.206,4.206,0,0,0-2.461,0L496.8,17.245a1.239,1.239,0,0,0,0,2.4l2.416.742a4.153,4.153,0,0,0-1.137,1.4,1.624,1.624,0,0,0-1.507,1.732,1.643,1.643,0,0,0,.252.762l-3.681,4.977a.841.841,0,0,0,.177,1.177.82.82,0,0,0,.158.093l2.7,1.2a.842.842,0,0,0,1.111-.427.772.772,0,0,0,.056-.175l1.227-6.068a1.619,1.619,0,0,0,1.035-2.563,2.482,2.482,0,0,1,1.783-1.322l10.092,2.987a4.209,4.209,0,0,0,2.462,0l14.673-4.508a1.239,1.239,0,0,0,.89-1.509" transform="translate(-492.974 -12.553)" fill="url(#linear-gradient-2)" />
									<path id="Path_15" data-name="Path 15" d="M526.43,36.737a12.771,12.771,0,0,0-1.194-5.382,2.718,2.718,0,0,1-1.1,1.657,10.8,10.8,0,1,1-21.152.312,2.53,2.53,0,0,1-1.189-1.657,12.838,12.838,0,0,0,11.8,17.909c.023,0,.046,0,.069,0A12.837,12.837,0,0,0,526.43,36.737" transform="translate(-493.811 -14.576)" fill="url(#linear-gradient)" />
								</g>
							</svg>
						</div>
					</li>
					<li>
						<div className={`${styles.Olibrary} ${styles.ToolsIcon}`}>
							<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="37.055" height="27" viewBox="0 0 37.055 27">
								<defs>
									<linearGradient id="linear-gradient" x1="0.5" y1="0.005" x2="0.5" y2="0.959" gradientUnits="objectBoundingBox">
										<stop offset="0" stop-color="#f1d740" />
										<stop offset="0.45" stop-color="#f4883b" />
										<stop offset="1" stop-color="#db4220" />
									</linearGradient>
									<linearGradient id="linear-gradient-2" x1="0.502" y1="0.005" x2="0.502" y2="0.959" xlinkHref="#linear-gradient" />
								</defs>
								<g id="books_icon_gradient" data-name="books icon gradient" transform="translate(0.001)">
									<path id="Path_20" data-name="Path 20" d="M36.93,22.33h0L27.4,2.24A1,1,0,0,0,26,1.71h-.06l-5.68,3a1.11,1.11,0,0,0-.57,1V1.13A1.11,1.11,0,0,0,18.67,0H12.31a1.1,1.1,0,0,0-1.06,1.13V25.87A1.1,1.1,0,0,0,12.31,27h6.36a1.1,1.1,0,0,0,1.06-1.13v-20a1,1,0,0,0,.1.42l9.54,20.09a1.12,1.12,0,0,0,.16.22v.07a1.15,1.15,0,0,0,.26.19l.09.05a1.16,1.16,0,0,0,.31.07h.1a.66.66,0,0,0,.27-.06h.14l5.67-3a1.17,1.17,0,0,0,.56-1.59ZM13.37,6.76V4.5h4.24V6.76ZM23.58,8.9l-1-2,3.68-2.22,1.05,2Z" fill="url(#linear-gradient)" />
									<path id="Path_21" data-name="Path 21" d="M7.34,0H1.05A1.09,1.09,0,0,0,0,1.13V25.87A1.09,1.09,0,0,0,1.05,27H7.34a1.08,1.08,0,0,0,1-1.13V1.13A1.08,1.08,0,0,0,7.34,0ZM2.1,6.75V4.5H6.29V6.75Z" fill="url(#linear-gradient-2)" />
								</g>
							</svg>
						</div>
					</li>
				</ul>
			</aside>
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
										<h4 className="text-4xl flex align-middle justify-center"><Ovnet className="mr-4" /> Ovnet</h4>
										<p className="my-5">Build your spaces, showcase your work, meet with others, and get inspired. Ovnet, enhancing networking for digital creators and enthusiasts.</p>
										<a href="/" className="text-blue">Discover more</a>
									</div>
									<div className="text-center">
										<h4 className="text-4xl flex align-middle justify-center"><Ostudio className="mr-4" /> Ostudio</h4>
										<p className="my-5">Build your spaces, showcase your work, meet with others, and get inspired. Ovnet, enhancing networking for digital creators and enthusiasts.</p>
										<a href="/" className="text-blue">Discover more</a>
									</div>
									<div className="text-center">
										<h4 className="text-4xl flex align-middle justify-center"><Orchives className="mr-4" /> Orchives</h4>
										<p className="my-5">Build your spaces, showcase your work, meet with others, and get inspired. Ovnet, enhancing networking for digital creators and enthusiasts.</p>
										<a href="/" className="text-blue">Discover more</a>
									</div>
									<div className="text-center">
										<h4 className="text-4xl flex align-middle justify-center"><Ocademy className="mr-4" /> Ocademy</h4>
										<p className="my-5">Build your spaces, showcase your work, meet with others, and get inspired. Ovnet, enhancing networking for digital creators and enthusiasts.</p>
										<a href="/" className="text-blue">Discover more</a>
									</div>
									<div className="text-center">
										<h4 className="text-4xl flex align-middle justify-center"><OvironSpace className="mr-4" /> Oviron Space</h4>
										<p className="my-5">Build your spaces, showcase your work, meet with others, and get inspired. Ovnet, enhancing networking for digital creators and enthusiasts.</p>
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
									<h2 className="text-5xl">LET'S DIVE TOGETHER INTO OVIRON.</h2>
									<p>Be part of growing community of creators and enthusiast to foster indie projects, and the virtual open space. Support us and Stay tuned on our Discord</p>
									<a href="https://discord.gg/SRwa2WvHKW" className={styles.BtnMain} role="button">Join us</a>
									<p>Are you a developer and want to support the dev team?</p>
									<p className="mt-4 flex align-center justify-center"><span>Github</span> <Github /></p>
								</div>
								<div className="lg:w-1/2">
									<img src={`${process.env.PUBLIC_URL}/portal-guy.png`} alt="portal with guy" srcSet={`${process.env.PUBLIC_URL}/portal-guy@2x.png 2x`} />
								</div>
							</div>
						</section>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
