import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import useLocalState from '../../utils/LocalState'
import api from '../../common/api'

function ContactWrapper() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [contact, setContact] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')

	const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState()

	useEffect(() => {
		showMe()
		hideAlert()
	}, [])

	useEffect(() => {}, [])

	const showMe = async () => {
		await api.users.showMe().then((response) => {
			console.log(response.data.user)
			setName(response.data.user.name)
			setEmail(response.data.user.email)
		})
	}

	const handleSend = async (e) => {
		e.preventDefault()
		hideAlert()
		setLoading(true)
		const contactUser = { name, email, contact, subject, message }
		try {
			await axios
				.post(
					`https://premiere-auctioneers-backend.vercel.app/api/v1/email`,
					contactUser
				)
				.then((response) => {
					console.log(response)
					setContact('')
					setSubject('')
					setMessage('')
					showAlert({
						text: `Thank you for contacting us. We will get back to you soon.`,
						type: 'success',
					})
					toast.success('Response Sent')
					setTimeout(() => {
						hideAlert()
					}, 5000)
					setLoading(false)
				})
				.catch((error) => {
					console.error(error.response)
					setLoading(false)
					showAlert({ text: error.response.data.msg })
					toast.error('Could not send response')
				})
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<div className="contact-section pt-120 pb-120">
				<img
					alt="images"
					src={'/images/bg/section-bg.png'}
					className="img-fluid section-bg-top"
				/>
				<img
					alt="images"
					src={'/images/bg/section-bg.png'}
					className="img-fluid section-bg-bottom"
				/>
				<div className="container">
					<div className="row pb-120 mb-70 g-4 d-flex justify-content-center">
						<div className="col-lg-4 col-md-6 col-sm-8">
							<div
								className="contact-signle hover-border1 d-flex flex-row align-items-center wow fadeInDown"
								data-wow-duration="1.5s"
								data-wow-delay=".2s"
							>
								<div className="icon">
									<i className="bi bi-geo-alt" />
								</div>
								<div className="text">
									<h4>Location</h4>
									<p>Kumari Galli -2, New Plaza, Kathmandu</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-8">
							<div
								className="contact-signle hover-border1 d-flex flex-row align-items-center wow fadeInDown"
								data-wow-duration="1.5s"
								data-wow-delay=".4s"
							>
								<div className="icon">
									<i className="bx bx-phone-call" />
								</div>
								<div className="text">
									<h4>Phone</h4>
									<a href="tel:+880171-770000">+977 9765355335</a>
									<a style={{ display: 'block' }} href="tel:+8801761111456">
										+977 9988776655
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-8">
							<div
								className="contact-signle hover-border1 d-flex flex-row align-items-center wow fadeInDown"
								data-wow-duration="1.5s"
								data-wow-delay=".6s"
							>
								<div className="icon">
									<i className="bx bx-envelope" />
								</div>
								<div className="text">
									<h4>Email</h4>
									<a
										style={{ display: 'block' }}
										href="mailto:info@premiereauctioneers.com"
									>
										info@premiereauctioneers.com
									</a>
									<a href="mailto:np01cp4s210026@islingtoncollege.edu.np">
										collegemail@islingtoncollege.edu.np
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="row g-4">
						<div className="col-lg-6">
							<div
								className="form-wrapper wow fadeInDown"
								data-wow-duration="1.5s"
								data-wow-delay=".2s"
							>
								<div className="form-title2">
									<h3>Get in Touch</h3>
									<p className="para">
										Feel free to ask me any question or let's do to talk about
										our future collaboration.
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
								<form action="#" onSubmit={(e) => handleSend(e)}>
									<div className="row">
										<div className="col-xl-6 col-lg-12 col-md-6">
											<div className="form-inner">
												<input
													type="text"
													placeholder="Your Name :"
													required={true}
													value={name}
													disabled
													onChange={(e) => setName(e.target.value)}
												/>
											</div>
										</div>
										<div className="col-xl-6 col-lg-12 col-md-6">
											<div className="form-inner">
												<input
													type="email"
													placeholder="Your Email :"
													required={true}
													value={email}
													disabled
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
										</div>
										<div className="col-xl-6 col-lg-12 col-md-6">
											<div className="form-inner">
												<input
													type="text"
													placeholder="Your Phone :"
													required={true}
													value={contact}
													onChange={(e) => setContact(e.target.value)}
												/>
											</div>
										</div>
										<div className="col-xl-6 col-lg-12 col-md-6">
											<div className="form-inner">
												<input
													type="text"
													placeholder="Subject :"
													required={true}
													value={subject}
													onChange={(e) => setSubject(e.target.value)}
												/>
											</div>
										</div>
										<div className="col-12">
											<textarea
												name="message"
												placeholder="Write Message :"
												rows={12}
												required={true}
												value={message}
												onChange={(e) => setMessage(e.target.value)}
											/>
										</div>
										<div className="col-12">
											<button
												type="submit"
												// className="eg-btn btn--primary btn--md form--btn"
												className="eg-btn btn--primary btn--md form--btn"
											>
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-6">
							<div
								className="map-area wow fadeInUp"
								data-wow-duration="1.5s"
								data-wow-delay=".4s"
							>
								<iframe
									title="google map"
									width="770"
									height="510"
									id="gmap_canvas"
									src="https://maps.google.com/maps?q=narayanhiti&t=&z=14&ie=UTF8&iwloc=&output=embed"
									// frameborder="0"
									// marginheight="0"
									// marginwidth="0"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ContactWrapper
