import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import SidebarNavView from './SidebarNav.view'

const initialProps = {
	authenticated: false,
	user: undefined,
}

describe('<SidebarNav />', () => {
	test('should display user icon when authenticated', () => {
		const props = {
			...initialProps,
			authenticated: true,
			user: {
				name: 'User',
				email: 'user@email.com',
			},
		}

		render(
			<BrowserRouter>
				<SidebarNavView {...props} />
			</BrowserRouter>
		)

		const userLoggedIcon = screen.getByTestId('logged_icon')

		expect(userLoggedIcon).toBeInTheDocument()
	})
})
