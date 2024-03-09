import React from "react";
import {Link} from "react-router-dom";

function UpcomingAuctionCardList(props) {
    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'})
    return <>
    {/*<SwiperSlide className="swiper-slide">*/}
    <div
        className="eg-card auction-card3 style-2 wow fadeInDown"
        data-wow-duration="1.5s"
        data-wow-delay=".2s"
    >
        <div className="auction-timer">
            <span className="timer-title">Time Remaining</span>
            <div className="countdown" id="timer1">
                <h4>
                    <span id="days10">05</span>D :
                    <span id="hours10">05</span>H :{' '}
                    <span id="minutes10">52</span>M
                </h4>
            </div>
        </div>
        <div className="auction-img">
            <img
                alt="images"
                // src={'/images/bg/upcoming22.png'}
                src={props.image}
            />
        </div>
        <div className="auction-content">
            <h4>
                <Link to={`/auction-details`} onClick={scrollTop}>
                    {props.name}
                </Link>
            </h4>
            <p>
                Bidding Price : <span>रु {props.price}</span>
            </p>
            <div className="auction-card-bttm">
                <Link
                    to={`/auction-details`}
                    onClick={scrollTop}
                    className="eg-btn btn--primary3-outline btn--sm"
                >
                    Place a Bid
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
    {/*</SwiperSlide>*/}
</>
}

export default UpcomingAuctionCardList;