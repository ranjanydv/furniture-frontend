import React, { useEffect, useState } from 'react'

import ProductCard from './ProductsCard.jsx'
import Pagination from '../../common/Pagination.jsx'
import Header from '../../common/Header.jsx'
import Footer from '../../common/Footer.jsx'
import Breadcrumb from '../../common/BreadCrumb.jsx'
import api from '../../common/api'
import useLocalState from '../../utils/LocalState'

function ProductsWrap() {
	const [products, setProducts] = useState([])
	const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState()
	useEffect(() => {
		getAllProducts()
	}, [])

	const getAllProducts = async () => {
		await api.products
			.getAllProduct()
			.then((res) => {
				console.log(res.data.products)
				const tempProducts = res.data.products
				setProducts(tempProducts)
				showAlert({
					text: `Products Fetched`,
					type: 'info',
				})
				setTimeout(() => {
					hideAlert()
				}, 1600)
			})
			.catch((err) => {
				console.log(err.response.data)
				setTimeout(() => {
					showAlert({
						text: `Could not fetch Products`,
						type: 'danger',
					})
				}, 1600)
			})
	}

	return (
		<>
			<Header />
			<Breadcrumb pageName={'All Products'} pageTitle={'products'} />
			<div className="live-auction-section pt-120 pb-120">
				<div className="container">
					{alert.show && (
						<div
							className={`alert alert-${alert.type} text-center`}
							style={{
								fontFamily: 'Saira',
								textTransform: 'capitalize',
							}}
						>
							{alert.text}
						</div>
					)}
					<div className="row gy-4 mb-60 d-flex justify-content-center">
						{products &&
							products.map((product, id) => {
								return (
									<div className="col-lg-4 col-md-6 col-sm-10" key={id}>
										<ProductCard
											image={product.image}
											price={product.price}
											title={product.name}
											product={product._id}
											liveOn={product.liveOn}
										/>
									</div>
								)
							})}
						{/*<div className="col-lg-4 col-md-6 col-sm-10">*/}
						{/*    <ProductCard*/}
						{/*        image="/images/bg/live-auc2.png"*/}
						{/*        price="85.99"*/}
						{/*        title="Wedding Special Exclusive Cupple Ring (S2022)"*/}
						{/*    />*/}
						{/*</div>*/}
						{/*<div className="col-lg-4 col-md-6 col-sm-10">*/}
						{/*    <ProductCard*/}
						{/*        image="/images/bg/live-auc3.png"*/}
						{/*        price="99.99"*/}
						{/*        title="Brand New Honda CBR 600 RR For Sale (2022)"*/}
						{/*    />*/}
						{/*</div>*/}
						{/*<div className="col-lg-4 col-md-6 col-sm-10">*/}
						{/*    <ProductCard*/}
						{/*        image="/images/bg/live-auc4.png"*/}
						{/*        price="35.99"*/}
						{/*        title="Toyota AIGID A Class Hatchback Sale (2017 - 2021)"*/}
						{/*    />*/}
						{/*</div>*/}
						{/*<div className="col-lg-4 col-md-6 col-sm-10">*/}
						{/*    <ProductCard*/}
						{/*        image="/images/bg/live-auc5.png"*/}
						{/*        price="45.99"*/}
						{/*        title="Havit HV-G61 USB Black Double Game Pad With Vibrat"*/}
						{/*    />*/}
						{/*</div>*/}
						{/*<div className="col-lg-4 col-md-6 col-sm-10">*/}
						{/*    <ProductCard*/}
						{/*        image="/images/bg/live-auc6.png"*/}
						{/*        price="35.99"*/}
						{/*        title="IPhone 11 Pro Max All Variants Available For Sale"*/}
						{/*    />*/}
						{/*</div>*/}
						{/*<div className="col-lg-4 col-md-6 col-sm-10">*/}
						{/*    <ProductCard*/}
						{/*        image="/images/bg/live-auc7.png"*/}
						{/*        price="41.99"*/}
						{/*        title="Blue ray filter All Variants Available For Sale"*/}
						{/*    />*/}
						{/*</div>*/}
						{/*<div className="col-lg-4 col-md-6 col-sm-10">*/}
						{/*    <ProductCard*/}
						{/*        image="/images/bg/live-auc8.png"*/}
						{/*        price="333.99"*/}
						{/*        title="Pure leather All Variants Available For Sale"*/}
						{/*    />*/}
						{/*</div>*/}
						{/*<div className="col-lg-4 col-md-6 col-sm-10">*/}
						{/*    <ProductCard*/}
						{/*        image="/images/bg/live-auc9.png"*/}
						{/*        price="83.99"*/}
						{/*        title="Water resist All Variants Available For Sale"*/}
						{/*    />*/}
						{/*</div>*/}
					</div>
					<Pagination />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default ProductsWrap
