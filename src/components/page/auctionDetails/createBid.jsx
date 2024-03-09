import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useLocalState from '../../utils/LocalState'
import axios from 'axios'
import url from '../../common/url'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function CreateBid(props) {
	const [bid, setBid] = useState('')
	const [isDisabled, setIsDisabled] = useState(false)
	const id = useParams()

	const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState()

	const handleBid = async (e) => {
		e.preventDefault()
		if (bid === '' || bid < 100) {
			showAlert({
				text: `Bid should be greater than 100`,
				type: 'danger',
			})
			toast.error('Bid should be greater than 100')
			return
		}

		if (bid < props.basePrice) {
			showAlert({
				text: `Bid should be greater than ${props.basePrice}`,
				type: 'danger',
			})
			toast.error(`Bid should be greater than ${props.basePrice}`)
			return
		}
		if (bid < props.lastBid) {
			showAlert({
				text: `Bid should be greater than ${props.lastBid}`,
				type: 'danger',
			})
			toast.error(`Bid should be greater than ${props.lastBid}`)
			return
		}

		const bidDetails = {
			bidAmount: bid,
			product: id.id,
		}

		try {
			hideAlert()
			await axios
				.post(`${url.proxy_api}bids`, bidDetails)
				.then((response) => {
					console.log(response.data.bid)
					showAlert({
						text: `Bid of ${bid} accepted.`,
						type: 'success',
					})
					toast.success(`Bid of ${bid} accepted.`)
					setBid('')
					setIsDisabled(true)
					setTimeout(() => {
						hideAlert()
						setLoading(false)
						setIsDisabled(false)
						window.location.reload()
					}, 15000) // 15 seconds gap between each bid by a user
				})
				.catch((error) => {
					console.error(error.response)
					console.error(error.response.data.msg, error.response.status)
					setLoading(false)
					showAlert({ text: error.response.data.msg })
					// toast.error(error.response.data.msg)
				})
		} catch (error) {
			console.error(error)
			toast.error(error.response.data.msg)
			showAlert({ text: error.response.data.msg })
			setLoading(false)
		}
	}

	return (
		<>
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
			<form onSubmit={(e) => handleBid(e)}>
				<div className="form-inner gap-2">
					<input
						type="text"
						placeholder="रु 00.00"
						value={bid}
						onChange={(e) => setBid(e.target.value)}
					/>
					{isDisabled ? (
						<button
							className="eg-btn btn--primary btn--sm"
							type="submit"
							disabled
						>
							Place Bid
						</button>
					) : (
						<button className="eg-btn btn--primary btn--sm " type="submit">
							Place Bid
						</button>
					)}
				</div>
			</form>
		</>
	)
}

export default CreateBid
