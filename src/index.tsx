import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { config } from 'App.config'

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain={config.DOMAIN}
			clientId={config.CLIENT_ID}
			redirectUri={window.location.origin}
			scope={config.SCOPES}
			audience={config.AUDIENCE}
			useRefreshTokens={true}
			cacheLocation="localstorage"
		>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<App />} />
				</Routes>
			</BrowserRouter>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
