import React from "react";
import {Link} from "react-router-dom";

function TopbarHeader() {
    // const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            <div className="topbar">
                <div className="topbar-left d-flex flex-row align-items-center">
                    <h6>Follow Us</h6>
                    <ul className="topbar-social-list gap-2">
                        <li><a target={"_blank"}  href="https://www.facebook.com/theranzanydv"><i className="bx bxl-facebook"/></a></li>
                        <li><a target={"_blank"}  href="https://www.twitter.com/theranzanydv"><i className="bx bxl-twitter"/></a></li>
                        <li><a target={"_blank"}  href="https://www.instagram.com/theranzanydv"><i className="bx bxl-instagram"/></a></li>
                        <li><a target={"_blank"}  href="#"><i className="bx bxl-pinterest-alt"/></a></li>
                    </ul>
                </div>
                {/*<div className="email-area">*/}
                {/*    <h6>Email: <a href="mailto:theranzanydv@gmail.com">theranzanydv@gmail.com</a></h6>*/}
                {/*</div>*/}
                <div className="topbar-right">
                    <ul className="topbar-right-list">
                        <div className="email-area">
                            <h6>Email: <a href="mailto:theranzanydv@gmail.com">info@premiereauctioneers.com</a></h6>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default TopbarHeader;
