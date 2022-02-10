import React, { ReactElement } from 'react'
import { Discord } from '../../icons/icons'
import styles from '../../App.module.css'

const Welcome = (): ReactElement => (
	<section>
		<div className="flex bg-animated">
			<div className="lg:flex lg:justify-center lg:flex-col lg:w-1/2">
				<h1 className="text-4xl mb-10 leading-tight xl:text-6xl">
					EMPOWERING CREATORS <span className="text-gray-medium">&</span> MASSES
					<span className="text-blue-light">.</span>
				</h1>
				<p className="leading-9 xl:text-2xl">
					OVIRON, the platform that foster content ownership, creativity, and
					collaboration between creators and masses.
					<br />
					<br />
					Discover more about OVIRON
				</p>
				<div className="flex flex-col lg:flex-row md:flex-row mt-10">
					<a
						href="https://docs.oviron.io/oviron/"
						className={`mb-5 lg:mr-5 lg:mb-0 md:mr-5 md:mb-0 ${styles.BtnSecondary}`}
						role="button"
						target="_blank"
						rel="noreferrer"
					>
						Litepaper
					</a>
					<a
						href="https://discord.gg/SRwa2WvHKW"
						className={styles.BtnMain}
						role="button"
					>
						<span className="mr-3">Join us</span> <Discord />
					</a>
				</div>
			</div>
			<div className="hidden md:block">
				<img
					src={`${process.env.PUBLIC_URL}/portal.png`}
					alt="portal"
					srcSet={`${process.env.PUBLIC_URL}/portal@2x.png 2x`}
				/>
			</div>
		</div>
	</section>
)

export default Welcome
