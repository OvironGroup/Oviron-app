import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
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
			cacheLocation="localstorage"
			audience={config.AUDIENCE}
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
