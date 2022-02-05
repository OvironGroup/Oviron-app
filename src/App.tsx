import { ArrowLeft, ArrowRight, Discord, Github, Logo, Ocademy, OcademyWhite, Orchives, OrchivesWhite, Ostudio, OstudioWhite, OvironSpace, OvironSpaceWhite, Ovnet, OvnetWhite } from './icons/icons'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import styles from './App.module.css';
import SidebarNav from './components/SidebarNav/SidebarNav.view';

const App = () => {
	return (
		<div className={`${styles.Body} min-h-full text-white`}>
			<nav className="bg-white sticky top-0 z-10">
				<div className="px-3 flex items-center h-16">
					<Logo />
				</div>
			</nav>
			<SidebarNav />
			<main>
				<div className="max-w-7xl xl:mx-auto p-6 lg:px-8 lg:ml-24">
					<div className="px-4 py-6 sm:px-0">
						<section>
							<div className="flex bg-animated">
								<div className="lg:flex lg:justify-center lg:flex-col lg:w-1/2">
									<h1 className="text-4xl mb-10 leading-tight xl:text-6xl">EMPOWERING CREATORS <span className="text-gray-medium">&</span> MASSES<span className="text-blue-light">.</span></h1>
									<p className="leading-9 xl:text-2xl">OVRION, the platform that foster content ownership, creativity, and collaboration between creators and masses.
										<br />
										<br />
										Discover more about OVIRON
									</p>
									<div className="flex mt-10">
										<a href="https://docs.oviron.io/oviron/" className={`mr-5 ${styles.BtnSecondary}`} role="button" target="_blank" rel="noreferrer">Litepaper</a>
										<a href="https://discord.gg/SRwa2WvHKW" className={styles.BtnMain} role="button">Join us</a>
									</div>
								</div>
								<div className="hidden md:block">
									<img src={`${process.env.PUBLIC_URL}/portal.png`} alt="portal" srcSet={`${process.env.PUBLIC_URL}/portal@2x.png 2x`} />
								</div>
							</div>
						</section>
						<section>
							<div>
								<div className="text-center mb-8">
									<h2 className="xl:text-5xl">POWER TO EVERYONE<span className="text-purple">.</span></h2>
									<p className="text-xl xl:text-2xl">4 Web tools & 1 VR experience.<br /><br />
										Free to access and no required subscriptions.<br /><br />
										<span className="text-gray-light">Because everyone deserve affordable solutions.</span>
									</p>
								</div>
								<div className="mt-5 grid md:grid-cols-2 gap-10 sm:grid-cols-1">
									<div className="text-center p-3 bg-gray_800 shadow-lg shadow-gray_800">
										<h4 className="text-4xl flex justify-center leading-normal">
											<Ovnet className={`mr-4 ${styles.Ovnet} ${styles.ToolsIcon}`} /> <span>Ovnet</span>
										</h4>
										<p className="my-5 text-xl leading-9">Build your spaces, showcase your work, meet with others, and get inspired. Ovnet, enhancing networking for digital creators and enthusiasts.</p>
										<a href="https://docs.oviron.io/oviron/the-platform-and-tools/ovnet" className="text-blue" target="_blank" rel="noreferrer">Discover more</a>
									</div>
									<div className="text-center p-3 bg-gray_800 shadow-lg shadow-gray_800">
										<h4 className="text-4xl flex justify-center leading-normal"><Ostudio className={`mr-4 ${styles.Ostudio} ${styles.ToolsIcon}`} /> Ostudio</h4>
										<p className="my-5 text-xl leading-9">Paint, Create models, Design worlds, and compose animated scenes with OStudio, a compositing & 3D modeling web application.</p>
										<a href="https://docs.oviron.io/oviron/the-platform-and-tools/ostudio" target="_blank" className="text-blue" rel="noreferrer">Discover more</a>
									</div>
									<div className="text-center p-3 bg-gray_800 shadow-lg shadow-gray_800">
										<h4 className="text-4xl flex justify-center leading-normal"><Orchives className={`mr-4 ${styles.Orchives} ${styles.ToolsIcon}`} /> Orchives</h4>
										<p className="my-5 text-xl leading-9">Discover and download affordable 3D assets or Register and sell your creations with Orchives, the library for 3D modelers, game devs, and more.</p>
										<a href="https://docs.oviron.io/oviron/the-platform-and-tools/orchives" target="_blank" className="text-blue" rel="noreferrer">Discover more</a>
									</div>
									<div className="text-center p-3 bg-gray_800 shadow-lg shadow-gray_800">
										<h4 className="text-4xl flex justify-center leading-normal"><Ocademy className={`mr-4 ${styles.Ocademy} ${styles.ToolsIcon}`} /> Ocademy</h4>
										<p className="my-5 text-xl leading-9">The online academy to enroll into 3D modeling, game development, and VR related courses, or publishing your knowledge as an instructor.</p>
										<a href="https://docs.oviron.io/oviron/the-platform-and-tools/ocademy" target="_blank" className="text-blue" rel="noreferrer">Discover more</a>
									</div>
									<div className="text-center p-3 bg-gray_800 shadow-lg shadow-gray_800">
										<h4 className="text-4xl flex justify-center leading-normal"><OvironSpace className={`mr-4 ${styles.OvironSpace} ${styles.ToolsIcon}`} /> Oviron Space</h4>
										<p className="my-5 text-xl leading-9">Combine the power of OVIRON tools into this gamified experience built for VR from the ground up. Oviron Space, the sandbox open verse where imagination is the limit. Create anything, own everything!</p>
										<a href="https://docs.oviron.io/oviron/the-platform-and-tools/oviron-space" target="_blank" className="text-blue" rel="noreferrer">Discover more</a>
									</div>
								</div>
							</div>
						</section>
						<section>
							<div className="flex">
								<div className="lg:w-1/2">
									<h2 className="xl:leading-tight xl:text-5xl">WHY WE BELIEVE IN OVIRON<span className="text-yellow">.</span></h2>
									<p className="leading-9 xl:text-2xl xl:leading-10">OVIRON is an under-development project, aimed to build a community-driven platform with Free open-source solutions for digital & VR content. The sole goal of the project is to empower digital creators, game developers, and VR tech enthusiasts with affordable solutions that can bring them authority over the web, while also fostering collaboration and creativity.<br /><br />
										The methodology of the project will be based over an open ecosystem, where the community is the head of the project. Support will be provided by the OVIRON core team with transparency delivery and constant integration of new technologies, solutions, and external partnership to help assure the evolution of the platform.<br /><br />
										The <strong>mission</strong> is solely to empower digital & VR content creators to gain ownership of their content, privacy of their spaces, and creative encouragement for indie projects. We <strong>vision</strong> a growth of unity and collaboration between indie creators all around the globe within an open virtual space, to lessen the distance gap.<br /><br />
										Read more about OVIRON in our <a href="https://docs.oviron.io/oviron/" className="text-blue-light" target="_blank" rel="noreferrer">Litepaper</a></p>
								</div>
								<div className="hidden lg:block lg:w-1/2">
									<img src={`${process.env.PUBLIC_URL}/ecosystem.png`} alt="ecosystem" srcSet={`${process.env.PUBLIC_URL}/ecosystem@2x.png 2x`} />
								</div>
							</div>
						</section>
						<section>
							<div>
								<div className="flex justify-between">
									<h2 className="xl:leading-tight xl:text-5xl">OVIRON ROADMAP<span className="text-green">.</span></h2>
									<div className={`flex justify-around ${styles.NavigationArrows}`}>
										<ArrowLeft className="arrowLeft cursor-pointer" />
										<ArrowRight className="arrowRight cursor-pointer" />
									</div>
								</div>
								<div className={`${styles.Bar}`}>
									<div className={`${styles.Zero}`}></div>
								</div>
								<Swiper
									modules={[Navigation]}
									spaceBetween={50}
									slidesPerView={3}
									breakpoints={{
										320: {
											slidesPerView: 1
										},
										480: {
											slidesPerView: 2
										}
									}}
									navigation={{
										nextEl: '.arrowRight',
										prevEl: '.arrowLeft'
									}}
								>
									<SwiperSlide>
										<div className="range range--step1 swiper-slide">
											<div className="milestone">
												<h6 className="text-center text-gray-medium mb-5">Milestone <span className="text-blue-light">1</span></h6>
												<ul className="leading-8">
													<li className="flex items-center my-5">
														<div className={`${styles.ToolsIcon} ${styles.Orchives} mr-5`}>
															<OrchivesWhite width={30} height={30} />
														</div>
														<h4 className="text-xl">Orchives<br />
															<span className="text-gray-medium">(Desktop & Mobile launch)</span>
														</h4>
													</li>
													<li>
														- Search and acquire free & paid SDK, 3D & VR assets for download.
													</li>
													<li>
														- Publish Free & paid SDK, 3D & VR assets for download.
													</li>
													<li className="flex items-center my-5">
														<div className={`${styles.ToolsIcon} ${styles.Ocademy} mr-5`}>
															<OcademyWhite width={30} height={30} />
														</div>
														<h4 className="text-xl">Ocademy<br />
															<span className="text-gray-medium">(Desktop & Mobile launch)</span>
														</h4>
													</li>
													<li>
														- Discover and enroll on free or paid courses
													</li>
													<li>
														- Instructors base features and dashboard for publishing.
													</li>
												</ul>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="range range--step2 swiper-slide">
											<div className="milestone">
												<h6 className="text-center text-gray-medium mb-5">Milestone <span className="text-blue">2</span></h6>
												<ul className="leading-8">
													<li className="flex items-center my-5">
														<div className={`${styles.ToolsIcon} ${styles.Ovnet} mr-5`}>
															<OvnetWhite width={30} height={30} />
														</div>
														<h4 className="text-xl">Ovnet v.1<br />
															<span className="text-gray-medium">(Desktop & Mobile launch)</span>
														</h4>
													</li>
													<li>
														- Main Discovery page.
													</li>
													<li>
														- User profile, Moodboards, and appreciations.
													</li>
													<li>
														- Basic features (User search, content based algorithm, follow, appreciate, comment
														interactions, posting).
													</li>
													<li>
														- <strong>Moonssenger BETA</strong> (Private & public chat, basic messaging).
													</li>
													<li className="flex items-center my-5">
														<div className={`${styles.ToolsIcon} ${styles.Orchives} mr-5`}>
															<OrchivesWhite width={30} height={30} />
														</div>
														<h4 className="text-xl">Orchives XR Update<br />
															<span className="text-gray-medium">(VR / AR launch)</span>
														</h4>
													</li>
													<li className="flex items-center my-5">
														<div className={`${styles.ToolsIcon} ${styles.Ocademy} mr-5`}>
															<OcademyWhite width={30} height={30} />
														</div>
														<h4 className="text-xl">Ocademy XR Update<br />
															<span className="text-gray-medium">(VR / AR launch)</span>
														</h4>
													</li>
												</ul>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="range range--step3 swiper-slide">
											<div className="milestone">
												<h6 className="text-center text-gray-medium mb-5">Milestone <span className="text-purple">3</span></h6>
												<h3>Custom user dashboards</h3>
												<ul className="leading-8">
													<li className="flex items-center my-5">
														<div className={`${styles.ToolsIcon} ${styles.Ostudio} mr-5`}>
															<OstudioWhite width={30} height={30} />
														</div>
														<h4 className="text-xl">OStudio BETA<br />
															<span className="text-gray-medium">(Desktop / Mobile Beta)</span>
														</h4>
													</li>
													<li>
														- Organizer dashboard.
													</li>
													<li>
														- Professional environment & tools.
													</li>
													<li>
														- Composite spaces (Paint, model, worlds, scenes)
													</li>
													<li>
														- Templates & connection with Orchives.
													</li>
													<li className="flex items-center my-5">
														<div className={`${styles.ToolsIcon} ${styles.Ovnet} mr-5`}>
															<OvnetWhite width={30} height={30} />
														</div>
														<h4 className="text-xl">Ovnet V.2<br />
															<span className="text-gray-medium">(Desktop & mobile update)</span>
														</h4>
													</li>
													<li>
														- User Portfolios.
													</li>
													<li>
														- Share Orchives, Ocademy & OStudio posts.
													</li>
													<li>
														- Moonssenger full (Video & voice messaging)
													</li>
													<li>
														- Live streams.
													</li>
												</ul>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="range range--step4 swiper-slide">
											<div className="milestone">
												<h6 className="text-center text-gray-medium mb-5">Milestone <span className="text-purple">4</span></h6>
												<h3>Plugins creations for Ovnet, Orchives, and Ocademy (OStudio in BETA)</h3>
												<ul className="leading-8">
													<li className="flex items-center my-5">
														<div className={`${styles.ToolsIcon} ${styles.Ostudio} mr-5`}>
															<OstudioWhite width={30} height={30} />
														</div>
														<h4 className="text-xl">OStudio<br />
															<span className="text-gray-medium">Desktop/Mobile Launch</span>
														</h4>
													</li>
													<li>
														- Simplified environment & tools for beginners.
													</li>
													<li>
														- Test environment & VR testing.
													</li>
													<li>
														- AI troubleshooting.
													</li>
													<li>
														- Multi device performance tracker.
													</li>
													<li>
														- Publishing into Orchives.
													</li>
													<li>
														- Import external files.
													</li>
													<li>
														- Exporting to Unity, Blender, Zbrush, and VRchat ready.
													</li>
													<li>
														- Collab mode.
													</li>
													<li>
														- Moonssenger direct sharing & streaming.
													</li>
													<li>
														- Community plugins market.
													</li>
													<li className="flex items-center my-5">
														<div className={`${styles.ToolsIcon} ${styles.Ovnet} mr-5`}>
															<OvnetWhite width={30} height={30} />
														</div>
														<h4 className="text-xl">Ovnet XR Update<br />
															<span className="text-gray-medium">(VR / AR launch)</span>
														</h4>
													</li>
												</ul>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="range range--step5 swiper-slide">
											<div className="milestone">
												<h6 className="text-center text-gray-medium mb-5">Milestone <span className="text-orange">5</span></h6>
												<ul className="leading-8">
													<li className="flex items-center my-5">
														<div className={`${styles.ToolsIcon} ${styles.OvironSpace} mr-5`}>
															<OvironSpaceWhite width={30} height={30} />
														</div>
														<h4 className="text-xl">Oviron Space BETA<br />
															<span className="text-gray-medium">Desktop / Mobile Launch</span>
														</h4>
													</li>
													<li>
														- Basic features for navigation & world bridge.
													</li>
													<li>
														- BETA tools (OStudio, Orchives, Ovnet, & Ocademy)
													</li>
													<li>
														- Public world creation & Bone Test environments.
													</li>
													<li>
														- Basic avatar creation (simplified basic avatar, possibility to import VR ready ones
														for testing created ones from OS)
													</li>
													<li>
														- Basic recreation features (Backpack, Owatch, Selfie stick, Owallet, MyRoom, Browser)
													</li>
													<li>
														- Basic worlds (Arcade, Gym, OMovies, Casino, Mall)
													</li>
													<li className="flex items-center my-5">
														<div className={`${styles.ToolsIcon} ${styles.Ostudio} mr-5`}>
															<OstudioWhite width={30} height={30} />
														</div>
														<h4 className="text-xl">OStudio XR BETA<br />
															<span className="text-gray-medium">(VR / AR Launch)</span>
														</h4>
													</li>
												</ul>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="range range--step6 swiper-slide">
											<div className="milestone">
												<h6 className="text-center text-gray-medium mb-5">Milestone <span className="text-yellow">6</span></h6>
												<ul className="leading-8">
													<li className="flex items-center my-5">
														<div className={`${styles.ToolsIcon} ${styles.OvironSpace} mr-5`}>
															<OvironSpaceWhite width={30} height={30} />
														</div>
														<h4 className="text-xl">Oviron Space OPEN!<br />
															<span className="text-gray-medium">Desktop / Mobile Launch</span>
														</h4>
													</li>
													<li>
														- Metaverses navigation.
													</li>
													<li>
														- Full tool features (OStudio, Orchives, Ovnet, & Ocademy)
													</li>
													<li>
														- Private worlds available.
													</li>
													<li>
														- Extra accessibility (Color schemes, Sign language gestures, handless navigation,
														voice command)
													</li>
													<li>
														- XR features (pick up calls & video calls, room scan, transparency, notifications)
													</li>
													<li>
														- XR-commerce
													</li>
													<li>
														- Extra worlds (Ozoo, Oplaza, Omap)
													</li>
													<li className="flex items-center my-5">
														<div className={`${styles.ToolsIcon} ${styles.Ostudio} mr-5`}>
															<OstudioWhite width={30} height={30} />
														</div>
														<h4 className="text-xl">OStudio XR<br />
															<span className="text-gray-medium">(VR / AR Launch)</span>
														</h4>
													</li>
												</ul>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</section>
						<section>
							<div className="flex">
								<div className="text-center lg:w-1/2">
									<h2 className="text-gray-light xl:leading-tight xl:text-5xl">LET'S DIVE <span className="text-white">TOGETHER</span> INTO OVIRON<span className="text-purple">.</span></h2>
									<p className="leading-9 xl:text-2xl xl:leading-10">Be part of growing community of creators and enthusiast to foster indie projects, and the virtual open space.
										<br />
										<br />
										Support us and Stay tuned on our Discord</p>
									<a href="https://discord.gg/SRwa2WvHKW" className={`my-10 mx-auto ${styles.BtnMain}`} role="button"><span className="mr-3">Join us</span> <Discord /></a>
									<p className="text-gray-light text-lg">Are you a developer and want to support the dev team?</p>
									<a className="mt-4 flex align-center justify-center" href="https://github.com/OvironGroup" target="_blank" rel="noreferrer">
										<span className="mr-3">Github</span> <Github />
									</a>
								</div>
								<div className="hidden md:block lg:w-1/2">
									<img src={`${process.env.PUBLIC_URL}/portal-guy.png`} alt="portal with guy" srcSet={`${process.env.PUBLIC_URL}/portal-guy@2x.png 2x`} />
								</div>
							</div>
						</section>
					</div>
				</div >
			</main >
			<footer>
				<div className="text-center p-5">
					<p className="text-sm">All rights reserved - © 2022 OVIRON GROUP</p>
				</div>
			</footer>
		</div >
	);
}

export default App;
