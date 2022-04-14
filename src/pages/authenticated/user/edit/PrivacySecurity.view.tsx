import { ReactElement } from 'react'
import useUserService from '../useUserService'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IMetadata } from '../User.models'
import { User } from '@auth0/auth0-react'

interface Props {
	user: User | undefined
}

interface IFormInput extends IMetadata {
	currentPassword: string
	newPassword: string
	retypePassword: string
}

const PrivacySecurity = ({ user }: Props): ReactElement => {
	const { register } = useForm<IFormInput>()
	const userService = useUserService()

	const onSubmit: SubmitHandler<IFormInput> = async data => {
		const data_to_update = {
			user_metadata: {
				...data,
			},
		}

		await userService.updateUser(user, data_to_update)
	}
	return (
		<>
			<h1 className="text-gray_900 text-2xl mb-10">
				Privacy & Security settings
			</h1>
			<form className="text-gray_900" onSubmit={() => onSubmit}>
				<div className="mb-4">
					<label>Username</label>
					<input {...register('currentPassword', { required: true })} />
				</div>
				<div className="mb-4">
					<label>Password</label>
					<input {...register('newPassword', { required: true })} />
				</div>
				<div className="mb-4">
					<label>Email</label>
					<input {...register('retypePassword', { required: true })} />
				</div>
			</form>
		</>
	)
}

export default PrivacySecurity
