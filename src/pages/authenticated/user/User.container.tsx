import { ReactElement } from 'react'
import UserSidebar from './UserSidebar.view'
import styles from './User.module.css'
import { Button, Loader } from 'components'
import { Upload } from 'icons/icons'
import { IUserData } from './User.models'

interface Props {
	userData: IUserData
	isFetching: boolean
}

const UserContainer = ({ isFetching, userData }: Props): ReactElement => {
	return (
		<div className="bg-gray_200 h-screen">
			{isFetching ? (
				<Loader />
			) : (
				<>
					<div className={styles.Cover}></div>
					<div className="xl:mx-auto max-w-7xl flex relative">
						<UserSidebar userData={userData} />
						<div className="flex flex-col w-3/4">
							<div className="bg-white rounded-2xl p-5 m-10 shadow-2xl h-fit">
								<h5 className="text-gray_900 text-2xl">Portfolio</h5>
							</div>
							<div className="mx-auto">
								<Button onClick={() => null} className="bg-ochre_primary">
									<Upload />{' '}
									<span className="ml-2">Upload your first creation</span>
								</Button>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default UserContainer
