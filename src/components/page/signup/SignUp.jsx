import React from 'react'

import Breadcrumb from '../../common/BreadCrumb.jsx'
import Header from '../../common/Header.jsx'
import Footer from '../../common/Footer.jsx'
import SignUpWrap from './SignUpWrap'

function SignUp() {
	return (
		<>
			<Header />
			<Breadcrumb pageName="Sign Up" pageTitle="Sign Up" />
			<SignUpWrap />
			<Footer />
		</>
	)
}

export default SignUp
