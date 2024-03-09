import React from 'react'

import Header from "../../../common/Header.jsx";
import Footer from "../../../common/Footer.jsx";
import Breadcrumb from "../../../common/BreadCrumb.jsx";
import DashboardWrap from "./DashboardWrap.jsx"

const Dashboard = () => {
    return <>
        <Header/>
        <Breadcrumb pageName="Dashboard" pageTitle="Dashboard"/>
        <DashboardWrap/>
        <Footer/>
    </>
}

export default Dashboard
