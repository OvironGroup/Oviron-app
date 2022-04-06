import { ReactElement } from 'react'
import ProfileServices from '../User.services'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IMetadata } from '../User.models'
import { User } from '@auth0/auth0-react'

interface Props {
	token: string | undefined
	user: User | undefined
}

interface IFormInput extends IMetadata {
	currentPassword: string
	newPassword: string
	retypePassword: string
}

const Password = ({ user, token }: Props): ReactElement => {
	const { register } = useForm<IFormInput>()

	const onSubmit: SubmitHandler<IFormInput> = async data => {
		const data_to_update = {
			user_metadata: {
				...data,
			},
		}

		await ProfileServices.updateUser(user, token, data_to_update)
	}
	return (
		<>
			<h1 className="text-gray_900 text-2xl mb-10">
				Change your account Password
			</h1>
			<form className="text-gray_900" onSubmit={() => onSubmit}>
				<div className="mb-4">
					<label>Current Password</label>
					<input {...register('currentPassword', { required: true })} />
				</div>
				<div className="mb-4">
					<label>New Password</label>
					<input {...register('newPassword', { required: true })} />
				</div>
				<div className="mb-4">
					<label>Retype Password</label>
					<input {...register('retypePassword', { required: true })} />
				</div>
			</form>
		</>
	)
}

export default Password
