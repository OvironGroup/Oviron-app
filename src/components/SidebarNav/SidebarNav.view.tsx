import { ReactElement } from 'react';
import { Ocademy, Orchives } from '../../icons/icons';
import styles from './SidebarNav.module.css';

const SidebarNav = (): ReactElement => (
	<aside className={`${styles.Container} bottom-0 w-full top-auto lg:top-16 lg:h-full lg:w-auto`}>
		<ul className="p-0 m-0 flex justify-evenly lg:block">
			<li>
				<div className={`${styles.Home} ${styles.ToolsIcon}`}>
					<svg xmlns="http://www.w3.org/2000/svg" width="23.442" height="21.267" viewBox="0 0 23.442 21.267">
						<path id="Icon_metro-home" data-name="Icon metro-home" d="M26.012,15.669l-11.721-9.1-11.721,9.1V11.959l11.721-9.1,11.721,9.1Zm-2.93-.331v8.791h-5.86v-5.86h-5.86v5.86H5.5V15.338l8.791-6.593Z" transform="translate(-2.571 -2.861)" fill="#fff" />
					</svg>
				</div>
			</li>
			<li>
				<div className={`${styles.Ocademy} ${styles.ToolsIcon}`}>
					<Ocademy />
				</div>
			</li>
			<li>
				<div className={`${styles.Orchives} ${styles.ToolsIcon}`}>
					<Orchives />
				</div>
			</li>
		</ul>
	</aside>
);

export default SidebarNav;