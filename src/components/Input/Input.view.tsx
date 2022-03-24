import { ReactElement } from 'react'

interface Props {
	type?: 'text' | 'password'
}

const Input = ({ type = 'text' }: Props): ReactElement => (
	<input
		type={type}
		className="form-control block w-full px-3 py-1.5 border border-solid border-gray_300 rounded"
	/>
)
export default Input
