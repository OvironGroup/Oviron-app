import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
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

		render(
			<Router>
				<HeaderNavContainer {...props} />
			</Router>
		)

		const logoutIcon = screen.getByTestId('logout_icon')

		expect(logoutIcon).toBeInTheDocument()
	})

	test('should display login button when not authenticated', () => {
		render(
			<Router>
				<HeaderNavContainer {...initialProps} />
			</Router>
		)

		const loginBtn = screen.getByTestId('login_btn')

		expect(loginBtn).toBeInTheDocument()
	})
})
