import { ReactElement } from 'react'
import ProfileServices from '../User.services'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IMetadata } from '../User.models'
import { User } from '@auth0/auth0-react'
import { Button } from 'components'
import Input from 'components/Input/Input.view'
import { editUser } from 'routes'

interface Props {
	token: string | undefined
	user: User | undefined
}

interface IFormInput extends IMetadata {
	username: string
	email: string
	recoverEmail: string
	dateBirth: string
}

const Account = ({ user, token }: Props): ReactElement => {
	const { register } = useForm<IFormInput>()

	const navigate = useNavigate()

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
			<h1 className="text-gray_900 text-2xl mb-10">Account Details</h1>
			<form className="text-gray_900" onSubmit={() => onSubmit}>
				<div className="mb-4">
					<label>Username</label>
					<input {...register('username', { required: true })} />
				</div>
				<div className="mb-4">
					<label>Password</label>
					<Input
						value="something"
						disabled
						withEdit
						editOnClick={() => navigate(`/${editUser}/password`)}
					/>
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
				<Button onClick={() => null} type="danger_outline">
					Delete your account
				</Button>
			</form>
		</>
	)
}

export default Account
