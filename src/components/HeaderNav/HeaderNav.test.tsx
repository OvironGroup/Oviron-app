import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
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
			<MemoryRouter>
				<HeaderNavContainer {...props} />
			</MemoryRouter>
		)

		const logoutIcon = screen.getByTestId('logout_icon')

		expect(logoutIcon).toBeInTheDocument()
	})

	test('should display login button when not authenticated', () => {
		render(<HeaderNavContainer {...initialProps} />)

		const loginBtn = screen.getByTestId('login_btn')

		expect(loginBtn).toBeInTheDocument()
	})
})
