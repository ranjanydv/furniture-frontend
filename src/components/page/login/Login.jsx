import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";

import LoginWrap from './LoginWrap.jsx'
import Header from '../../common/Header.jsx'
import Footer from '../../common/Footer.jsx'
import Breadcrumb from '../../common/BreadCrumb.jsx'
import ReactToast from "../../common/ReactToast";

function Login() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        try {
            const newUser = localStorage.getItem('userInfo')
            if (newUser) {
                const uu = JSON.parse(newUser)
                setUser(uu.user)
                console.log(`Logged in as ${uu.user.name}`)
                navigate('/dashboard', {replace: true});
            }
        } catch (e) {
            console.error(e)
        }
    }, [])

    return (
        <>
            <Header/>
            <Breadcrumb pageName="Log In" pageTitle="Log In"/>
            <LoginWrap/>
            <Footer/>
        </>
    )
}

export default Login
