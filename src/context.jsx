import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import url from './components/common/url'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [user, setUser] = useState(null)

	const saveUser = (user) => {
		setUser(user)
	}

	const removeUser = () => {
		setUser(null)
	}

	const fetchUser = async (data) => {
		try {
			const { data } = await axios.get(`${url.base_api}users/${data}`)
			saveUser(data.user)
			console.log(data)
		} catch (error) {
			removeUser()
		}
		setIsLoading(false)
	}
	// const fetchUser = async () => {
	// 	try {
	// 		const { data } = await axios.get(`${url.base_api}users/showMe`)
	// 		saveUser(data.user)
	// 		console.log(data)
	// 	} catch (error) {
	// 		removeUser()
	// 	}
	// 	setIsLoading(false)
	// }

	const logoutUser = async () => {
		try {
			await axios.get(`${url.base_api}auth/logout`)
			removeUser()
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<AppContext.Provider
			value={{
				isLoading,
				saveUser,
				user,
				logoutUser,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppProvider }
