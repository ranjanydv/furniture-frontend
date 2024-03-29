import React from 'react'
import {Link} from 'react-router-dom'

import Counter from "../common/Counter";


const products = [
    {
        id:1,
        title: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        price: 100,
        basePrice: 100,
        image:'/uploads/example.jpg'
    }
]

function AuctionCardList(props) {
    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'})
    return (
        <>
            <div
                className="eg-card auction-card3 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
            >
                {/* <div className="auction-timer">
                    <span className="timer-title">Time Remaining</span>
                    <div className="countdown" id="timer1">
                        <h4>
                             <Counter date={props.liveOn} />
                        </h4>
                    </div>
                </div> */}
                <div className="auction-img">
                    {/* <img alt={props.content} src={`${props.auctionImg}`}/> */}
                    <img alt="Hello" src="/uploads/example.jpg"/>
                </div>
                <div className="auction-content">
                    <h4>
                        {/* <Link to={`/auction-details`} onClick={scrollTop}>
                            {props.content}
                        </Link> */}
                        <Link to={`/auction-details`} onClick={scrollTop}>
                            Test 
                        </Link>
                    </h4>
                    <p>
                        {/* Price : <span>रु {props.price}</span> */}
                        Price : <span>रु 20</span>
                    </p>
                    <div className="auction-card-bttm">
                        <Link
                            to={`/auction-details/${props.product}`}
                            onClick={scrollTop}
                            className="eg-btn btn--primary3-outline btn--sm"
                        >
                            Add to Cart
                        </Link>
                        <div className="share-area">
                            <ul className="social-icons d-flex">
                                <li>
                                    <Link to={'#'}>
                                        <i className="bx bxl-facebook"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'#'}>
                                        <i className="bx bxl-twitter"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'#'}>
                                        <i className="bx bxl-pinterest"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'#'}>
                                        <i className="bx bxl-instagram"/>
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                <Link to={'#'} className="share-btn">
                                    <i className="bx bxs-share-alt"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuctionCardList
