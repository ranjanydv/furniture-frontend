import React from 'react'
import Breadcrumb from "../../common/BreadCrumb.jsx";
import Footer from "../../common/Footer.jsx";
import Header from "../../common/Header.jsx";
import WhoWeAre from "./WhoWeAre.jsx";
import WhyUs from "./WhyUs.jsx";


function AboutPage() {
    return (
        <>
            <Header/>
            <Breadcrumb pageName={"About Page"} pageTitle={"About"}/>
            <WhoWeAre/>
            <WhyUs/>
            <Footer/>
        </>
    )
}

export default AboutPage