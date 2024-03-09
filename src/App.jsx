import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'
import AboutPage from './components/page/about/AboutPage'
import ContactPage from './components/page/contact/ContactPage'
import LiveAuctionPage from './components/page/liveAuction/LiveAuction'
import ProductsWrap from './components/page/products/ProductsWrap'
import AuctionDetailsWrap from './components/page/auctionDetails/AuctionDetailsWrap'
import Login from './components/page/login/Login'
import Dashboard from './components/page/admin/dashboard/Dashboard'
import SignUp from './components/page/signup/SignUp'
import NotFoundPage from './components/page/404/NotFoundPage'
import JoinMerchant from './components/page/profile/JoinMerchant'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes basename="/">
					<Route path="/" element={<MainLayout />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="contact" element={<ContactPage />} />
					<Route path="products" element={<ProductsWrap />} />
					<Route path="signUp" element={<SignUp />} />
					<Route path="login" element={<Login />} />

					<Route
						path="/auction-details/:id"
						exact
						element={<AuctionDetailsWrap />}
					/>

					<Route path="dashboard" element={<Dashboard />} />
					<Route path="live-auction" element={<LiveAuctionPage />} />
					<Route path="join-merchant" element={<JoinMerchant />} />
					{/* <Route path="how-works" element={<HowItWork/>}/> */}

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
