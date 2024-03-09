import React from 'react'

import gif from '../../../assets/gif/404.gif'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	return (
		<div
			style={{
				display: 'grid',
				placeItems: 'center',
				paddingTop: '6%',
			}}
		>
			<Link to={'/'}>
				<img src={gif} alt="Not Found" />
			</Link>
		</div>
	)
}

export default NotFoundPage
