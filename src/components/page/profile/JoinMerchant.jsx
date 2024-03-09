import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Breadcrumb from '../../common/BreadCrumb.jsx'
import Header from '../../common/Header.jsx'
import Footer from '../../common/Footer.jsx'
import useLocalState from '../../utils/LocalState.jsx'
import api from '../../common/api.js'
import { toast } from 'react-toastify'

const JoinMerchant = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState()

	useEffect(() => {
		showMe()
	}, [])

	const showMe = async () => {
		await api.users.showMe().then((response) => {
			console.log(response.data.user)
			setName(response.data.user.name)
			setEmail(response.data.user.email)
		})
	}

	const handleJoinMerchant = async (e) => {
		e.preventDefault()
		setLoading(true)
		await api.users
			.joinMerchant()
			.then((response) => {
				console.log(response)
				console.log('upgraded to merchant')
				toast.success(`Account Upgraded To Merchant`)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<>
			<Header />
			<Breadcrumb pageName="Join Merchant" pageTitle="Join Merchant" />
			<div>
				<div className="signup-section pt-80 pb-120">
					<img
						alt="images"
						src={'/images/bg/section-bg.png'}
						className="section-bg-top"
					/>
					<img
						alt="images"
						src={'/images/bg/section-bg.png'}
						className="section-bg-bottom"
					/>
					<div className="container">
						<div className="row d-flex justify-content-center">
							<div className="col-xl-6 col-lg-8 col-md-10">
								<div
									className="form-wrapper wow fadeInUp"
									data-wow-duration="1.5s"
									data-wow-delay=".2s"
								>
									<div className="form-title">
										<h3>Join Merchant</h3>
									</div>
									{alert.show && (
										<div
											className={`alert alert-${alert.type} login-section text-center`}
											style={{
												fontFamily: 'Saira',
												textTransform: 'Uppercase',
											}}
										>
											{alert.text}
										</div>
									)}
									<form
										className="w-100 mb-5"
										method="POST"
										onSubmit={(e) => handleJoinMerchant(e)}
									>
										<div className="row">
											<div className="col-md-12">
												<div className="form-inner">
													<label>Name</label>
													<input
														type="text"
														placeholder="Name"
														disabled
														value={name}
														onChange={(r) => setName(r.target.value)}
													/>
												</div>
											</div>

											<div className="col-md-12">
												<div className="form-inner">
													<label>Your Email</label>
													<input
														type="email"
														placeholder="Enter Your Email"
														value={email}
														onChange={(r) => setEmail(r.target.value)}
														disabled
													/>
												</div>
											</div>

											<div className="col-md-12">
												<div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
													<div className="form-group user-select-none">
														<input type="checkbox" id="html" required={true} />
														<label htmlFor="html">
															I agree to the Terms &amp; Policy
														</label>
													</div>
												</div>
											</div>
										</div>
										<button className="account-btn">
											{loading ? 'Loading...' : 'Join Merchant'}
										</button>
									</form>
									<div className="form-poicy-area">
										<p>
											By clicking the "Join Merchant" button, you join the
											sellers club in the Premiere Auctioneers, and you agree to
											Premiere Auctioneers's{' '}
											<Link to={'#'}>Terms &amp; Conditions</Link> &amp;{' '}
											<Link to={'#'}>Privacy Policy.</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default JoinMerchant
