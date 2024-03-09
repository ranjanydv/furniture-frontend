import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import url from '../../../common/url'
import axios from 'axios'
import useLocalState from '../../../utils/LocalState'
import { toast } from 'react-toastify'

const AddProduct = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('userInfo')))
	const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState()

	const [productName, setProductName] = useState('')
	const [price, setPrice] = useState('')
	const [desc, setDesc] = useState('')
	const [image, setImage] = useState(null)
	const [category, setCategory] = useState('traditional')
	const [liveOn, setLiveOn] = useState('')
	const [showLink, setShowLink] = useState(false)
	const [prodId, setProdId] = useState('')

	useEffect(() => {
		const newUser = localStorage.getItem('userInfo')
		const uu = JSON.parse(newUser)
		setUser(uu.user)
	}, [])
	const active = 'show active'

	const checkFileSize = (file) => {
		const fileSize = file.size
		const maxSize = 1024 * 1024 * 2 // Maximum size in bytes (2MB)
		if (fileSize > maxSize) {
			showAlert({
				text: `Image size cannot be more than 2MB`,
				type: 'danger',
			})
			return false
		}
		return true
	}
	const handleImageUpload = async (e) => {
		let imageFile = e.target.files[0]
		if (checkFileSize(imageFile)) {
			const formData = new FormData()
			formData.append('image', imageFile)
			try {
				const {
					data: {
						image: { src },
					},
				} = await axios.post(`${url.proxy_api}products/uploadImg`, formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				// imageValue = src
				setImage(src)
			} catch (error) {
				setImage(null)
				console.log(error)
			}
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setShowLink(false)
		try {
			const product = {
				name: productName,
				price: price,
				image: image,
				description: desc,
				category: category,
				liveOn: liveOn,
			}
			await axios.post(`${url.proxy_api}products`, product).then((res) => {
				console.log(res.data.product._id)
				const pID = res.data.product
				setProdId(pID)
				setShowLink(true)
				hideAlert()
				toast.success('Product Added Successfully')
				showAlert({
					text: `Product Added Successfully`,
					type: 'success',
				})

				setProductName('')
				setPrice('')
				setImage('')
				setLiveOn('')
				setCategory('traditional')
				setDesc('')
			})
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<>
			<div
				className="tab-pane fade"
				id="v-pills-add-product"
				role="tabpanel"
				aria-labelledby="v-pills-add-product-tabs"
			>
				<div className="dashboard-profile">
					<div className="owner">
						<div className="content">
							<h3>Add Product: {productName}</h3>
						</div>
					</div>
					{alert.show && (
						<div
							className={`alert alert-${alert.type} text-center`}
							style={{
								margin: '0 2.6rem',
								fontFamily: 'Saira',
								textTransform: 'capitalize',
							}}
						>
							{alert.text}
						</div>
					)}
					<div className="form-wrapper">
						<form
							action="#"
							style={{ fontFamily: 'Saira' }}
							onSubmit={(e) => handleSubmit(e)}
						>
							<div className="row">
								<div className="col-xl-12 col-lg-12 col-md-6">
									<div className="form-inner">
										<label>Product Name *</label>
										<input
											type="text"
											placeholder="Product name"
											value={productName}
											onChange={(e) => setProductName(e.target.value)}
										/>
									</div>
								</div>
								<div className="col-xl-6 col-lg-12 col-md-6">
									<div className="form-inner">
										<label>Base Price *</label>
										<input
											type="text"
											placeholder={'रु 100'}
											value={price}
											onChange={(e) => setPrice(e.target.value)}
										/>
									</div>
								</div>
								<div className="col-xl-6 col-lg-12 col-md-6">
									<div className="form-inner">
										<label>Upload Image</label>
										<input
											style={{ fontSize: '14px' }}
											type="file"
											accept="image/*"
											onChange={(e) => handleImageUpload(e)}
										/>
									</div>
								</div>
								<div className="col-12">
									<div className="form-inner">
										<label>Description</label>
										{/*<input type="text" name="message" placeholder="Product Description"/>*/}
										<textarea
											name="message"
											placeholder="Product Description"
											value={desc}
											onChange={(e) => setDesc(e.target.value)}
										/>
									</div>
								</div>

								<div className="col-xl-6 col-lg-12 col-md-6">
									<div className="form-inner">
										<label>Category</label>
										<select
											name=""
											id=""
											className={'select style-2'}
											value={category}
											onChange={(e) => setCategory(e.target.value)}
										>
											<option className={'selectBtn'} value="traditional">
												Traditional
											</option>
											<option className={'select-option'} value="cultural">
												Cultural
											</option>
											<option className={'select-option'} value="others">
												Others
											</option>
										</select>
									</div>
								</div>

								<div className="col-xl-6 col-lg-12 col-md-6">
									<div className="form-inner">
										<label>Product Live On</label>
										<input
											type="date"
											value={liveOn}
											onChange={(e) => setLiveOn(e.target.value)}
										/>
									</div>
								</div>
								<div className="col-12">
									<div className="col-xl-6 col-lg-12 col-md-6">
										<div className="form-inner ">
											<label style={{ display: 'inline' }}>Owner{' : '}</label>
											<h5 style={{ display: 'inline', color: '#327c7d' }}>
												{user.name}
											</h5>
										</div>
									</div>
								</div>

								<div className="col-12">
									<div className="button-group">
										<button type="submit" className="eg-btn profile-btn">
											Add Product
										</button>
										<button
											className="eg-btn cancel-btn"
											type="button"
											onClick={(e) => handleCancel(e)}
										>
											Cancel
										</button>
									</div>
								</div>
								{showLink && (
									<div className="col-12 mt-4 mb-0">
										<div style={{ display: 'flex', gap: '5px' }}>
											<p>
												Product{' '}
												<span className={'text-green'}>{prodId.name}</span>{' '}
												Added:
											</p>
											<Link
												className={'text-green mx-2'}
												style={{
													color: '#327c7d',
													textDecoration: 'underline',
												}}
												to={`${url.home}auction-details/${prodId._id}`}
											>
												View Product
											</Link>
										</div>
									</div>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default AddProduct
