import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import SidebarNavView from './SidebarNav.view'
import { MemoryRouter } from 'react-router-dom'

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
			<MemoryRouter>
				<SidebarNavView {...props} />
			</MemoryRouter>
		)

		const userLoggedIcon = screen.getByTestId('logged_icon')

		expect(userLoggedIcon).toBeInTheDocument()
	})
})
