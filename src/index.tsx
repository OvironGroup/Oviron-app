import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain="oviron.eu.auth0.com"
			clientId="5c0fjedvcbgRgUSxnY4C6njow7Ir5Vea"
			redirectUri={window.location.origin}
			scope="read:current_user update:current_user_metadata"
			cacheLocation="localstorage"
			useRefreshTokens={true}
		>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
