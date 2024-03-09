import React from 'react'
import Counter from '../../common/Counter'
// import CreateBid from './CreateBid'

function AuctionInfo(props) {
	const countdownDate = Date.parse(props.product.liveOn)
	return (
		<>
			<div className="row g-4 mb-50">
				<div className="col-xl-6 col-lg-7 d-flex flex-row align-items-start justify-content-lg-start justify-content-center flex-md-nowrap flex-wrap gap-4">
					<div
						className="tab-content mb-4 d-flex justify-content-lg-start justify-content-center  wow fadeInUp"
						data-wow-duration="1.5s"
						data-wow-delay=".4s"
					>
						<div
							className="tab-pane big-image fade show active"
							id="gallery-img1"
						>
							<div className="auction-gallery-timer d-flex align-items-center justify-content-center flex-wrap">
								<h3 id="countdown-timer-1">
									<Counter date={countdownDate} />
								</h3>
							</div>
							<img
								alt="images"
								src={props.product.image}
								className="img-fluid ratio-image"
							/>
						</div>
					</div>
				</div>
				<div className="col-xl-6 col-lg-5">
					<div
						className="product-details-right  wow fadeInDown"
						data-wow-duration="1.5s"
						data-wow-delay=".2s"
					>
						<h3>{props.product.name}</h3>
						<p className="para">{props.product.description}</p>
						<h4>
							Base Price: <span> रु {props.product.price}</span>
						</h4>
						<div className="bid-form">
							<div className="form-title">
								<h5>Bid Now</h5>

								{props.product.lastBid === 0 ? (
									<p>Bid Amount : Minimum Bid रु {props.product.price + 1}</p>
								) : (
									<p>Bid Amount : Minimum Bid रु {props.product.lastBid + 1}</p>
								)}
							</div>
							{/* <CreateBid
								product={props.product.id}
								lastBid={props.product.lastBid}
								basePrice={props.product.price}
							/> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AuctionInfo
