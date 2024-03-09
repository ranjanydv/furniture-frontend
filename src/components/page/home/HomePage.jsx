import React, { useEffect, useState } from 'react'

import LiveAuctionHome from './LiveAuctionHome'
import UpComing from './Upcoming'
import HeroBanner2 from './HeroBanner2'

function HomePage() {
	return (
		<>
			<HeroBanner2 />
			<LiveAuctionHome />
			{/* <UpComing /> */}
		</>
	)
}

export default HomePage
