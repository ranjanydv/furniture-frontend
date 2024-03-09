import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import url from '../../common/url.js'

function BiddingCard(props) {
    const [users, setUsers] = useState([])
    const bidder = props.user

    const getBidder = async () => {
        try {
            await axios
                .get(`${url.proxy_api}users/${bidder}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((res) => {
                    setUsers(res.data.user)
                })
        } catch (error) {
            console.error(error.response.data)
            console.error(error.response.data.msg)
        }
    }

    useEffect(() => {
        getBidder(bidder)
    }, [])

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    return (
        <>
            <li>
                <div className="row d-flex align-items-center">
                    <div className="col-7">
                        <div className="bidder-area">
                            <div className="bidder-img">
                                <img
                                    alt="images"
                                    src={`/images/bg/bidder${randomNumberInRange(0, 4)}.png`}
                                />
                            </div>
                            <div className="bidder-content">
                                <Link to={'#'}>
                                    {users._id &&
                                    users._id === props.user
                                        ? (<h6>{users.name}</h6>)
                                        : (<h6>Anonymous Bidder</h6>)}
                                    {/*{props.user === users._id && (<h6>{users.name}</h6>)}*/}
                                </Link>
                                <p>रु {props.amount}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 text-end">
                        <div className="bid-time">
                            <p>{props.time}</p>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default BiddingCard
