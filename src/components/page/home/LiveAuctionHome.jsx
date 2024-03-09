import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Link } from 'react-router-dom'

import api from '../../common/api.js'
import AuctionCardList from '../../layout/LiveAuctionCardList.jsx'

SwiperCore.use([Navigation, Autoplay, Pagination])

const productss = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 },
	{ id: 4 },
	{ id: 5 },
	{ id: 6 },
]

function LiveAuction() {
	const [loading, setLoading] = useState(false)
	const [products, setProducts] = useState([])

	useEffect(() => {
		getProducts()
	}, [])

	const getProducts = async () => {
		setLoading(true)
		await api.products.getAllProduct().then((r) => {
			console.log(r.data.products)
			setProducts(r.data.products)
		})
		setLoading(false)
	}

	const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
	const liveSlider = {
		slidesPerView: 1,
		speed: 1000,
		spaceBetween: 24,
		loop: true,
		roundLengths: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: 'true',
		},
		navigation: {
			nextEl: '.coming-prev3',
			prevEl: '.coming-next3',
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
				pagination: false,
			},
			480: {
				slidesPerView: 1,
				pagination: false,
			},
			768: {
				slidesPerView: 2,
				pagination: false,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	}
	return (
		<>
			<div className="upcoming-seciton pt-120 pb-120">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
							<div className="section-title4">
								<h2>Hot Products</h2>
								<p className="mb-0">
									Explore on the Nepal's best &amp; largest furniture marketplace
									with our beautiful products. We want to be a part of
									your smile, success and future growth.
								</p>
							</div>
						</div>
					</div>

					{loading ? (
						<div className="row d-flex justify-content-center">
							<h6 className="text-end">... Loading</h6>
						</div>
					) : (
						<div className="row d-flex justify-content-center">
							<Swiper
								{...liveSlider}
								className="swiper upcoming-slider swiper-fix"
							>
								<div className="swiper-wrapper">
									{/* {products &&
										products.map((product, id) => {
											return (
												<SwiperSlide className="swiper-slide" key={id}>
													<AuctionCardList
														auctionImg={product.image}
														content={product.name}
														price={product.price}
														product={product.id}
														liveOn={Date.parse(product.liveOn)}
													/>
												</SwiperSlide>
											)
										})} */}
										{productss &&
											productss.map((product, id) => {
												return (
													<SwiperSlide className="swiper-slide" key={id}>
														<AuctionCardList />
													</SwiperSlide>
												)
											})}

								</div>
							</Swiper>
							<div className="slider-bottom d-flex justify-content-between align-items-center">
								<Link
									to={`/products`}
									onClick={scrollTop}
									// className="eg-btn btn--primary3-outline btn--md"
									className="eg-btn btn--primary4 btn--md"
								>
									View ALL
								</Link>
								<div className="swiper-pagination style-3 d-lg-block d-none" />
								<div className="slider-arrows coming-arrow style-3 d-flex gap-3">
									<div
										className="coming-prev3 swiper-prev-arrow"
										tabIndex={0}
										role="button"
										aria-label="Previous slide"
									>
										<i className="bi bi-arrow-left" />
									</div>
									<div
										className="coming-next3 swiper-next-arrow"
										tabIndex={0}
										role="button"
										aria-label="Next slide"
									>
										<i className="bi bi-arrow-right" />
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default LiveAuction
