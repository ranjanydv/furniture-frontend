import React from 'react'
import { Link } from 'react-router-dom'
import Counter from '../../common/Counter.jsx'

function ProductsCard(props) {
	// const countdownDate = new Date("Jul 30, 2023, 01:00:00")
	return (
		<>
			<div
				data-wow-duration="1.5s"
				data-wow-delay="0.2s"
				className="eg-card auction-card1 wow fadeInDown"
			>
				<div className="auction-img">
					<img alt="images" src={props.image} />
					<div className="auction-timer">
						<div className="countdown" id="timer1">
							<h4>
								<Counter date={props.liveOn} />
							</h4>
						</div>
					</div>
				</div>
				<div className="auction-content">
					<h4>
						<Link
							to={`/auction-details`}
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						>
							{props.title}
						</Link>
					</h4>
					<p>
						Bidding Price : <span>रु {props.price}</span>
					</p>
					<div className="auction-card-bttm">
						<Link
							to={`/auction-details/${props.product}`}
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							className="eg-btn btn--primary btn--sm"
						>
							Place a Bid
						</Link>
						<div className="share-area">
							<ul className="social-icons d-flex">
								<li>
									<Link to={'#'}>
										<i className="bx bxl-facebook" />
									</Link>
								</li>
								<li>
									<Link to={'#'}>
										<i className="bx bxl-twitter" />
									</Link>
								</li>
								<li>
									<Link to={'#'}>
										<i className="bx bxl-pinterest" />
									</Link>
								</li>
								<li>
									<Link to={'#'}>
										<i className="bx bxl-instagram" />
									</Link>
								</li>
							</ul>
							<div>
								<Link to={'#'} className="share-btn">
									<i className="bx bxs-share-alt" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductsCard
