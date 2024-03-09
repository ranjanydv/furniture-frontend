import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useGlobalContext } from '../../../context'
import useLocalState from '../../utils/LocalState'
import axios from 'axios'

function LoginWrap() {
	const [openEye, setOpenEye] = useState(true)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()
	const { saveUser } = useGlobalContext()
	const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState()

	const handleEyeIcon = () => {
		setOpenEye(!openEye)
	}

	const handleLogin = async (e) => {
		e.preventDefault()
		hideAlert()
		setLoading(true)
		const loginUser = { email, password }

		try {
			await axios
				.post(
					`http://localhost:5000/api/v1/auth/login`,
					loginUser
				)
				.then((response) => {
					console.log(response)
					setEmail('')
					setPassword('')
					localStorage.setItem('userInfo', JSON.stringify(response.data))

					showAlert({
						text: `Welcome, ${response.data.user.name}. Redirecting to dashboard...`,
						type: 'success',
					})
					toast.success(`Welcome ${response.data.user.name}`)
					setTimeout(() => {
						navigate('/dashboard')
					}, 1600)
					setLoading(false)
					saveUser(response.data.user)
				})
				.catch((error) => {
					console.error(error.response)
					setLoading(false)
					showAlert({ text: error.response.data.msg })
					toast.error(error.response.data.msg)
				})
		} catch (error) {
			console.error(error.response.data.msg)
			showAlert({ text: error.response.data.msg })
			setLoading(false)
		}
	}

	return (
		<>
			<div className="login-section pt-80 pb-120">
				<img
					alt="images"
					src="/images/bg/section-bg.png"
					className="img-fluid section-bg-top"
				/>
				<img
					alt="images"
					src="/images/bg/section-bg.png"
					className="img-fluid section-bg-bottom"
				/>
				<div className="container">
					<div className="row d-flex justify-content-center g-4">
						<div className="col-xl-6 col-lg-8 col-md-10">
							<div
								className="form-wrapper wow fadeInUp"
								data-wow-duration="1.5s"
								data-wow-delay=".2s"
							>
								<div className="form-title">
									<h3>Log In</h3>
									<p>
										New Member?{' '}
										<Link
											to={`/signup`}
											onClick={() =>
												window.scrollTo({ top: 0, behavior: 'smooth' })
											}
										>
											SignUp here
										</Link>
									</p>
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
								<form className="w-100 mb-4" method="POST">
									<div className="row">
										<div className="col-12">
											<div className="form-inner">
												<label htmlFor={'email'}>Enter Your Email *</label>
												<input
													type="email"
													id="email"
													placeholder="Enter Your Email"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
										</div>
										<div className="col-12">
											<div className="form-inner">
												<label htmlFor={'password'}>Password *</label>
												<input
													type={openEye ? 'password' : 'text'}
													name="password"
													id="password"
													placeholder="Password"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
												/>
												<i
													className={
														openEye
															? 'bi bi-eye-slash'
															: 'bi bi-eye-slash bi-eye'
													}
													id="togglePassword"
													onClick={handleEyeIcon}
												/>
											</div>
										</div>
										<div className="col-12">
											<div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
												<div className="form-group">
													{/* <input type="checkbox" id="html" /> */}
													<label htmlFor="html" style={{ color: 'white' }}>
														I agree to the{' '}
														<Link to={'#'}>Terms &amp; Policy</Link>
													</label>
												</div>
												<Link to={'#'} className="forgot-pass">
													Forgotten Password
												</Link>
											</div>
										</div>
									</div>
									<button
										className="account-btn"
										type={'submit'}
										onClick={(event) => {
											handleLogin(event)
										}}
									>
										{loading ? 'Loading...' : 'Log in'}
									</button>
								</form>
								{/* <div className="form-poicy-area">
									<p>
										By clicking the "signup" button, you create a Premiere
										Auctioneers account, and you agree to Premiere Auctioneers's{' '}
										<Link to={'#'}>Terms &amp; Conditions</Link> &amp;{' '}
										<Link to={'#'}>Privacy Policy.</Link>
									</p>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default LoginWrap
