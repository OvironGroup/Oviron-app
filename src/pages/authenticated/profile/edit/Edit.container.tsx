import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ProfileServices from '../Profile.services'
import useGetToken from 'utils/useGetToken'
import { useAuth0 } from '@auth0/auth0-react'

//interface Props { }

const EditContainer = (): ReactElement => {
	const { user } = useAuth0()
	const { register, handleSubmit } = useForm()
	const token = useGetToken()
	const onSubmit = (data: unknown) => {
		ProfileServices.updateUser(user, token, data)
	}
	return (
		<div className="flex bg-white w-3/4 p-10 relative top-10 mx-auto rounded-2xl h-fit">
			<div className="w-1/3">
				<ul className="flex flex-col">
					<NavLink to="#account">Account</NavLink>
					<NavLink to="#edit">Edit Profile</NavLink>
					<NavLink to="#password">Password</NavLink>
					<NavLink to="#security">Security and login</NavLink>
					<NavLink to="#privacy">Privacy</NavLink>
					<NavLink to="#notification">Notification</NavLink>
					<NavLink to="#block">User blocking</NavLink>
					<NavLink to="#payments">Payment & history</NavLink>
				</ul>
			</div>
			<div className="w-2/3">
				<form className="text-gray_900" onSubmit={handleSubmit(onSubmit)}>
					<label>Nickname</label>
					<input
						type="text"
						placeholder="provfa"
						{...register('nickname', { required: true })}
					/>
					<input type="submit" />
				</form>
			</div>
		</div>
	)
}

export default EditContainer
