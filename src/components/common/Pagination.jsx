import React from 'react'
import {Link} from 'react-router-dom'

function Pagination() {
    return (
        <>
            <div className="row">
                <nav className="pagination-wrap">
                    <ul className="pagination d-flex justify-content-center gap-md-3 gap-2">
                        <li className="page-item">
                            <Link className="page-link" to={"#"} tabIndex={-1}>Prev</Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to={"#"}>01</Link></li>
                        <li className="page-item active" aria-current="page">
                            <Link className="page-link" to={"#"}>02</Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to={"#"}>03</Link></li>
                        <li className="page-item">
                            <Link className="page-link" to={"#"}>Next</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Pagination