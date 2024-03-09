import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

import Footer from '../common/Footer'
import Header from '../common/Header'
// import HomePageOne from "../page/home/HomePage.jsx"
import HomePage from '../page/home/HomePage.jsx'
import Preloader from './Preloader.jsx'

// import Preloader from "./Preloader.jsx";
function MainLayout() {
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1600)
	}, [])

	return (
		// <>
		//     {loading ? (
		//         <Preloader styles="preloader"/>
		//     ) : (
		<>
			<Header />
			<HomePage />
			<Footer />
		</>
		//     )}
		// </>
	)
}

export default MainLayout
