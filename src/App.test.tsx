import React from 'react'
import { screen, render } from '@testing-library/react'
import Welcome from './views/home/Welcome.view'

describe('<App />', () => {
	test('should have the right discord link in the button link', () => {
		render(<Welcome />)

		const joinBtn = screen.getByRole('button', { name: /join us/i })

		expect(joinBtn).toHaveAttribute('href', 'https://discord.gg/SRwa2WvHKW')
	})
})
