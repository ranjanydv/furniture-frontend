import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useLocalState from '../../../utils/LocalState'
import api from '../../../common/api'
import { FiTrash } from 'react-icons/fi'
import { toast } from 'react-toastify'

function ProductsList() {
	const [products, setProducts] = useState([])
	const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState()
	useEffect(() => {
		setLoading(true)
		getAllProducts()
	}, [])

	const getAllProducts = async () => {
		await api.products
			.getAllProduct()
			.then((res) => {
				console.log(res.data.products)
				const tempProducts = res.data.products
				setProducts(tempProducts)
				setLoading(false)
			})
			.catch((err) => {
				console.log(err.response.data)
				toast.error('Could Not Fetch Products')
				showAlert({
					text: `Could Not Fetch Products`,
					type: 'danger',
				})
				setTimeout(() => {
					hideAlert()
				}, 1600)
			})
	}

	const handleDelete = async (product) => {
		console.log(product._id)
		await api.products.deleteProduct(product._id).then((res) => {
			console.log(res.data.msg)
			toast.danger(`Deleted Product ${product.name}`)
			showAlert({
				text: `Deleted Product ${product.name}`,
				type: 'danger',
			})
		})
		getAllProducts()
	}

	const customStyle = {
		control: (provided, state) => ({
			...provided,
			background: '#fff',
			borderColor: '#EEEEEE',
			padding: 0,
			'&:hover': { borderColor: '#32c36c' },
			boxShadow: state.isFocused ? null : null,
		}),
	}
	return (
		<>
			<div
				className="tab-pane fade"
				id="v-pills-order"
				role="tabpanel"
				aria-labelledby="v-pills-order-tab"
			>
				<div className="table-title-area">
					<h3>All Products</h3>
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
				</div>
				<div className="table-wrapper">
					{loading ? (
						<div className={'text-center'}>Loading...</div>
					) : (
						<table className="eg-table order-table table mb-0">
							<thead>
								<tr>
									<th>SN</th>
									<th>Image</th>
									<th>Product Name</th>
									<th>Product Price</th>
									<th>Highest Bid</th>
									{/* <th>Status</th> */}
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{products &&
									products.map((product, id) => {
										return (
											<tr key={id}>
												<td data-label="SN">{id + 1}</td>
												<td data-label="Image">
													<img
														alt={product.name}
														src={product.image}
														className="img-fluid boxy-image"
													/>
												</td>
												<td data-label="Product Name">{product.name}</td>
												<td data-label="Product Price">{product.price}</td>
												<td data-label="Highest Bid">रु {product.lastBid}</td>
												{/* <td data-label="Status">{product.status}</td> */}
												<td data-label="Action">
													<button
														className="btn btn-outline-danger"
														onClick={() => handleDelete(product)}
													>
														<FiTrash size={16} />
													</button>
												</td>
											</tr>
										)
									})}
							</tbody>
						</table>
					)}
				</div>
				{/* pagination area */}
				<div className="table-pagination">
					<p>
						Showing 1 to {products.length} of {products.length} entries
					</p>
					<nav className="pagination-wrap">
						<ul className="pagination style-two d-flex justify-content-center gap-md-3 gap-2">
							<li className="page-item">
								<Link className="page-link" to={'#'} tabIndex={-1}>
									Prev
								</Link>
							</li>
							<li className="page-item active" aria-current="page">
								<Link className="page-link" to={'#'}>
									01
								</Link>
							</li>
							<li className="page-item">
								<Link className="page-link" to={'#'}>
									02
								</Link>
							</li>
							<li className="page-item">
								<Link className="page-link" to={'#'}>
									03
								</Link>
							</li>
							<li className="page-item">
								<Link className="page-link" to={'#'}>
									Next
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	)
}

export default ProductsList
