import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { AppProvider } from './context'

import App from './App'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<AppProvider>
			<App />
			<ToastContainer newestOnTop={false} limit={3} />
		</AppProvider>
	</React.StrictMode>
)
