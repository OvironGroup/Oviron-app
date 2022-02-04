import { ReactElement } from 'react';
import styles from './SidebarNav.module.css'

const SidebarNav = (): ReactElement => (
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
);

export default SidebarNav;