import React, { ReactElement } from 'react'
import {
	ArrowLeft,
	ArrowRight,
	OrchivesWhite,
	OvnetWhite,
	OstudioWhite,
	OcademyWhite,
	OvironSpaceWhite,
} from '../../icons/icons'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from '../../App.module.css'

const Roadmap = (): ReactElement => (
	<section>
		<div>
			<div className="flex justify-between">
				<h2 className="xl:leading-tight xl:text-5xl">
					OVIRON ROADMAP
					<span className="text-green">.</span>
				</h2>
				<div className={`flex justify-around ${styles.NavigationArrows}`}>
					<ArrowLeft className="arrowLeft cursor-pointer" />
					<ArrowRight className="arrowRight cursor-pointer" />
				</div>
			</div>
			<div className={`${styles.Bar}`}>
				<div className={`${styles.Zero}`} />
			</div>
			<Swiper
				modules={[Navigation]}
				spaceBetween={50}
				slidesPerView={3}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: 2,
					},
				}}
				navigation={{
					nextEl: '.arrowRight',
					prevEl: '.arrowLeft',
				}}
			>
				<SwiperSlide>
					<div className="range range--step1">
						<div className="milestone">
							<h6 className="text-center text-gray_400 mb-5">
								Milestone <span className="text-blue_light">1</span>
							</h6>
							<ul className="leading-8">
								<li className="flex items-center my-5">
									<div
										className={`${styles.ToolsIcon} ${styles.Orchives} mr-5`}
									>
										<OrchivesWhite width={30} height={30} />
									</div>
									<h4 className="text-xl">
										Orchives
										<br />
										<span className="text-gray_400">
											(Desktop & Mobile launch)
										</span>
									</h4>
								</li>
								<li>
									- Search and acquire free & paid SDK, 3D & VR assets for
									download.
								</li>
								<li>- Publish Free & paid SDK, 3D & VR assets for download.</li>
								<li className="flex items-center my-5">
									<div className={`${styles.ToolsIcon} ${styles.Ocademy} mr-5`}>
										<OcademyWhite width={30} height={30} />
									</div>
									<h4 className="text-xl">
										Ocademy
										<br />
										<span className="text-gray_400">
											(Desktop & Mobile launch)
										</span>
									</h4>
								</li>
								<li>- Discover and enroll on free or paid courses</li>
								<li>
									- Instructors base features and dashboard for publishing.
								</li>
							</ul>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="range range--step2">
						<div className="milestone">
							<h6 className="text-center text-gray_400 mb-5">
								Milestone <span className="text-blue_primary">2</span>
							</h6>
							<ul className="leading-8">
								<li className="flex items-center my-5">
									<div className={`${styles.ToolsIcon} ${styles.Ovnet} mr-5`}>
										<OvnetWhite width={30} height={30} />
									</div>
									<h4 className="text-xl">
										Ovnet v.1
										<br />
										<span className="text-gray_400">
											(Desktop & Mobile launch)
										</span>
									</h4>
								</li>
								<li>- Main Discovery page.</li>
								<li>- User profile, Moodboards, and appreciations.</li>
								<li>
									- Basic features (User search, content based algorithm,
									follow, appreciate, comment interactions, posting).
								</li>
								<li>
									- <strong>Moonssenger BETA</strong> (Private & public chat,
									basic messaging).
								</li>
								<li className="flex items-center my-5">
									<div
										className={`${styles.ToolsIcon} ${styles.Orchives} mr-5`}
									>
										<OrchivesWhite width={30} height={30} />
									</div>
									<h4 className="text-xl">
										Orchives XR Update
										<br />
										<span className="text-gray_400">(VR / AR launch)</span>
									</h4>
								</li>
								<li className="flex items-center my-5">
									<div className={`${styles.ToolsIcon} ${styles.Ocademy} mr-5`}>
										<OcademyWhite width={30} height={30} />
									</div>
									<h4 className="text-xl">
										Ocademy XR Update
										<br />
										<span className="text-gray_400">(VR / AR launch)</span>
									</h4>
								</li>
							</ul>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="range range--step3 swiper-slide">
						<div className="milestone">
							<h6 className="text-center text-gray_400 mb-5">
								Milestone <span className="text-magenta_primary">3</span>
							</h6>
							<h3>Custom user dashboards</h3>
							<ul className="leading-8">
								<li className="flex items-center my-5">
									<div className={`${styles.ToolsIcon} ${styles.Ostudio} mr-5`}>
										<OstudioWhite width={30} height={30} />
									</div>
									<h4 className="text-xl">
										OStudio BETA
										<br />
										<span className="text-gray_400">
											(Desktop / Mobile Beta)
										</span>
									</h4>
								</li>
								<li>- Organizer dashboard.</li>
								<li>- Professional environment & tools.</li>
								<li>- Composite spaces (Paint, model, worlds, scenes)</li>
								<li>- Templates & connection with Orchives.</li>
								<li className="flex items-center my-5">
									<div className={`${styles.ToolsIcon} ${styles.Ovnet} mr-5`}>
										<OvnetWhite width={30} height={30} />
									</div>
									<h4 className="text-xl">
										Ovnet V.2
										<br />
										<span className="text-gray_400">
											(Desktop & mobile update)
										</span>
									</h4>
								</li>
								<li>- User Portfolios.</li>
								<li>- Share Orchives, Ocademy & OStudio posts.</li>
								<li>- Moonssenger full (Video & voice messaging)</li>
								<li>- Live streams.</li>
							</ul>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="range range--step4">
						<div className="milestone">
							<h6 className="text-center text-gray_400 mb-5">
								Milestone <span className="text-magenta_light">4</span>
							</h6>
							<h3>
								Plugins creations for Ovnet, Orchives, and Ocademy (OStudio in
								BETA)
							</h3>
							<ul className="leading-8">
								<li className="flex items-center my-5">
									<div className={`${styles.ToolsIcon} ${styles.Ostudio} mr-5`}>
										<OstudioWhite width={30} height={30} />
									</div>
									<h4 className="text-xl">
										OStudio
										<br />
										<span className="text-gray_400">Desktop/Mobile Launch</span>
									</h4>
								</li>
								<li>- Simplified environment & tools for beginners.</li>
								<li>- Test environment & VR testing.</li>
								<li>- AI troubleshooting.</li>
								<li>- Multi device performance tracker.</li>
								<li>- Publishing into Orchives.</li>
								<li>- Import external files.</li>
								<li>
									- Exporting to Unity, Blender, Zbrush, and VRchat ready.
								</li>
								<li>- Collab mode.</li>
								<li>- Moonssenger direct sharing & streaming.</li>
								<li>- Community plugins market.</li>
								<li className="flex items-center my-5">
									<div className={`${styles.ToolsIcon} ${styles.Ovnet} mr-5`}>
										<OvnetWhite width={30} height={30} />
									</div>
									<h4 className="text-xl">
										Ovnet XR Update
										<br />
										<span className="text-gray_400">(VR / AR launch)</span>
									</h4>
								</li>
							</ul>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="range range--step5">
						<div className="milestone">
							<h6 className="text-center text-gray_400 mb-5">
								Milestone <span className="text-ochre_primary">5</span>
							</h6>
							<ul className="leading-8">
								<li className="flex items-center my-5">
									<div
										className={`${styles.ToolsIcon} ${styles.OvironSpace} mr-5`}
									>
										<OvironSpaceWhite width={30} height={30} />
									</div>
									<h4 className="text-xl">
										Oviron Space BETA
										<br />
										<span className="text-gray_400">
											Desktop / Mobile Launch
										</span>
									</h4>
								</li>
								<li>- Basic features for navigation & world bridge.</li>
								<li>- BETA tools (OStudio, Orchives, Ovnet, & Ocademy)</li>
								<li>- Public world creation & Bone Test environments.</li>
								<li>
									- Basic avatar creation (simplified basic avatar, possibility
									to import VR ready ones for testing created ones from OS)
								</li>
								<li>
									- Basic recreation features (Backpack, Owatch, Selfie stick,
									Owallet, MyRoom, Browser)
								</li>
								<li>- Basic worlds (Arcade, Gym, OMovies, Casino, Mall)</li>
								<li className="flex items-center my-5">
									<div className={`${styles.ToolsIcon} ${styles.Ostudio} mr-5`}>
										<OstudioWhite width={30} height={30} />
									</div>
									<h4 className="text-xl">
										OStudio XR BETA
										<br />
										<span className="text-gray_400">(VR / AR Launch)</span>
									</h4>
								</li>
							</ul>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="range range--step6">
						<div className="milestone">
							<h6 className="text-center text-gray_400 mb-5">
								Milestone <span className="text-ochre_light">6</span>
							</h6>
							<ul className="leading-8">
								<li className="flex items-center my-5">
									<div
										className={`${styles.ToolsIcon} ${styles.OvironSpace} mr-5`}
									>
										<OvironSpaceWhite width={30} height={30} />
									</div>
									<h4 className="text-xl">
										Oviron Space OPEN!
										<br />
										<span className="text-gray_400">
											Desktop / Mobile Launch
										</span>
									</h4>
								</li>
								<li>- Metaverses navigation.</li>
								<li>
									- Full tool features (OStudio, Orchives, Ovnet, & Ocademy)
								</li>
								<li>- Private worlds available.</li>
								<li>
									- Extra accessibility (Color schemes, Sign language gestures,
									handless navigation, voice command)
								</li>
								<li>
									- XR features (pick up calls & video calls, room scan,
									transparency, notifications)
								</li>
								<li>- XR-commerce</li>
								<li>- Extra worlds (Ozoo, Oplaza, Omap)</li>
								<li className="flex items-center my-5">
									<div className={`${styles.ToolsIcon} ${styles.Ostudio} mr-5`}>
										<OstudioWhite width={30} height={30} />
									</div>
									<h4 className="text-xl">
										OStudio XR
										<br />
										<span className="text-gray_400">(VR / AR Launch)</span>
									</h4>
								</li>
							</ul>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
)

export default Roadmap
