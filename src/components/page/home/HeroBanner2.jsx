import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HeroBanner2() {
	const [user, setUser] = useState(null)
	useEffect(() => {
		try {
			const newUser = localStorage.getItem('userInfo')
			if (newUser) {
				console.log(newUser)
				const uu = JSON.parse(newUser)
				setUser(uu.user)
			}
		} catch (e) {
			console.error(e)
		}
	}, [])
	const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
	return (
		<>
			<div className="hero-area hero-style-three">
				{user && user.role === 'user' && (
					<Link
						to={`/join-merchant`}
						onClick={scrollTop}
						className="join-merchant"
					>
						Join Merchant
					</Link>
				)}

				<img
					alt="bannerImage"
					src={'/images/bg/np.png'}
					className="img-fluid banner-ellips"
				/>
				<img
					alt="bannerImage"
					src={'/images/bg/home3-banner.png'}
					className="home3-banner img-fluid"
				/>
				<div className="container-lg container-fluid">
					<div className="row d-flex justify-content-start align-items-end">
						<div className="col-xl-7 col-lg-7 px-0">
							<div className="banner3-content">
								<span
									className="wow fadeInDown"
									data-wow-duration="1.5s"
									data-wow-delay="0.5s"
								>
									Welcome To Prime Aesthetics
								</span>
								<h1
									className="wow fadeInDown"
									data-wow-duration="1.5s"
									data-wow-delay="1s"
								>
									Build, Design &amp; Collect Arts.
								</h1>
								<p
									className="wow fadeInUp"
									data-wow-duration="1.5s"
									data-wow-delay="1s"
								>
									Welcome to Prime Aesthetics, where furniture meets finesse! Elevate your living spaces with our exquisite collection of handcrafted furnishings. Immerse yourself in a world of timeless design, premium quality, and unparalleled elegance. Redefine your home with Prime Aesthetics – where style and comfort converge effortlessly &hearts;.
								</p>
								<Link
									to={`/products`}
									onClick={() =>
										window.scrollTo({ top: 0, behavior: 'smooth' })
									}
									className="eg-btn btn--primary4 btn--lg wow fadeInUp"
									data-wow-duration="2s"
									data-wow-delay="0.8s"
								>
									Start Exploring
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HeroBanner2
