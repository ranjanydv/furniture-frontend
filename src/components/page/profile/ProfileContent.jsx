import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import url from '../../common/url'
import api from '../../common/api'

const ProfileContent = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('userInfo')))
	const [dbUser, setDbUser] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		// getDbUser()
		const newUser = localStorage.getItem('userInfo')
		const uu = JSON.parse(newUser)
		setUser(uu.user)
	}, [])

	const active = 'show active'

	const handleSubmit = (e) => {
		e.preventDefault()
		toast.info('Profile Updated Successfully')
		setTimeout(() => {
			navigate('/')
		}, 1200)
	}

	const getDbUser = async () => {
		const apple = localStorage.getItem('userInfo')
		const ball = JSON.parse(apple)
		console.log(ball)
		await axios
			.get(`${url.proxy_api}users/${ball.user.userId}`)
			.then((response) => {
				console.log(response.data.user)
				setDbUser(response.data.user)
			})
	}

	return (
		<>
			<div
				className={`tab-pane fade ${user.role !== 'admin' && active}`}
				id="v-pills-profile"
				role="tabpanel"
				aria-labelledby="v-pills-profile-tab"
			>
				<div className="dashboard-profile">
					<div className="owner">
						<div className="image">
							<img alt="images" src={'/images/bg/pro-pic.png'} />
						</div>
						<div className="content">
							<h3>{user.name}</h3>
							<p className="para">{user.role === 'owner' && 'Merchant'}</p>
						</div>
					</div>
					<div className="form-wrapper">
						<form action="#" onSubmit={(e) => handleSubmit(e)}>
							<div className="row">
								<div className="col-xl-6 col-lg-12 col-md-6">
									<div className="form-inner">
										<label>Contact Number *</label>
										<input type="text" placeholder={'+977'} />
									</div>
								</div>
								<div className="col-xl-6 col-lg-12 col-md-6">
									<div className="form-inner">
										<label>Email</label>
										<input
											type="text"
											placeholder="Your Email"
											// onChange={(e) => {}}
											// disabled
										/>
									</div>
								</div>
								<div className="col-12">
									<div className="form-inner">
										<label>Address</label>
										<input type="text" name="message" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-12 col-md-6">
									<div className="form-inner">
										<label>City</label>
										<input type="text" placeholder={'Kathmandu'} />
									</div>
								</div>
								<div className="col-xl-6 col-lg-12 col-md-6">
									<div className="form-inner">
										<label>State</label>
										<select name="" id="" className={'select style-2'}>
											<option className={'selectBtn'} value="Bagmati">
												Bagmati
											</option>
											<option className={'select-option'} value="Koshi">
												Koshi
											</option>
											<option className={'select-option'} value="Madhesh">
												Madhesh
											</option>
											<option className={'select-option'} value="Gandaki">
												Gandaki
											</option>
											<option className={'select-option'} value="Lumbini">
												Lumbini
											</option>
											<option className={'select-option'} value="Karnali">
												Karnali
											</option>
											<option className={'select-option'} value="Sudurpaschim">
												Sudurpaschim
											</option>
										</select>
									</div>
								</div>
								<div className="col-xl-6 col-lg-12 col-md-6">
									<div className="form-inner">
										<label>Zip Code</label>
										<input type="text" placeholder="45600" />
									</div>
								</div>
								<div className="col-xl-6 col-lg-12 col-md-6">
									<div className="form-inner">
										<label>Country</label>
										<select
											name=""
											id=""
											className="select style-2"
											placeholder="Bagmati"
										>
											<option className={'selectBtn'} value="Nepal">
												Nepal
											</option>
											<option className={'select-option'} value="Others">
												Others
											</option>
										</select>
									</div>
								</div>
								<div className="col-12">
									<div className="button-group">
										<button type="submit" className="eg-btn profile-btn">
											Update Profile
										</button>
										<button className="eg-btn cancel-btn">Cancel</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProfileContent
