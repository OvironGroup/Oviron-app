import { ReactElement } from 'react'
import ProfileServices from '../User.services'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MetadataType } from '../User.types'
import { User } from '@auth0/auth0-react'
import { Button } from 'components'

interface Props {
	token: string | undefined
	user: User | undefined
}

interface IFormInput extends MetadataType {
	username: string
	password: string
	email: string
	recoverEmail: string
	dateBirth: string
}

const Account = ({ user, token }: Props): ReactElement => {
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
		<form className="text-gray_900" onSubmit={() => onSubmit}>
			<div className="mb-4">
				<label>Username</label>
				<input {...register('username', { required: true })} />
			</div>
			<div className="mb-4">
				<label>Password</label>
				<input {...register('password', { required: true })} />
			</div>
			<div className="mb-4">
				<label>Email</label>
				<input {...register('email', { required: true })} />
			</div>
			<div className="mb-4">
				<label>Recovery email</label>
				<input {...register('recoverEmail', { required: true })} />
			</div>
			<div className="mb-4">
				<label>Date of Birth</label>
				<textarea {...register('dateBirth', { required: true })} />
			</div>
			<Button
				onClick={() => null}
				className="bg-blue_primary text-white rounded-xl cursor-pointer"
			>
				Delete your account
			</Button>
		</form>
	)
}

export default Account
