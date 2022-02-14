import { screen, render } from '@testing-library/react'
import HeaderNavContainer from './HeaderNav.container'

const initialProps = {
	authenticated: false,
}

describe('<HeaderNavContainer />', () => {
	test('should display logout icon when authenticated', () => {
		const props = {
			...initialProps,
			authenticated: true,
		}

		render(<HeaderNavContainer {...props} />)

		const logoutIcon = screen.getByTestId('logout_icon')

		expect(logoutIcon).toBeInTheDocument()
	})

	test('should display login button when not authenticated', () => {
		render(<HeaderNavContainer {...initialProps} />)

		const loginBtn = screen.getByTestId('login_btn')

		expect(loginBtn).toBeInTheDocument()
	})
})
