import React, {useEffect, useReducer, useState} from 'react'
import {Link} from 'react-router-dom'
import TopbarHeader from './TopbarHeader'

function Header() {
    const [search, setSearch] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    // Sticky Menu Area
    useEffect(() => {
        // const user = JSON.parse(localStorage.getItem('userInfo'));
        window.addEventListener('scroll', isSticky)
        return () => {
            window.removeEventListener('scroll', isSticky)
        }
    })

    /* Method that will fix header after a specific scrollable */
    const isSticky = () => {
        const header = document.querySelector('.header-area')
        const scrollTop = window.scrollY
        scrollTop >= 20
            ? header.classList.add('sticky')
            : header.classList
                ? header.classList.remove('sticky')
                : header.classList.add('sticky')
    }

    /*---------menu button event----------*/
    const handleSidbarMenu = () => {
        if (sidebar === false) {
            setSidebar(true)
        } else {
            setSidebar(false)
        }
    }

    /*---------add event scroll top----------*/
    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'})
    const searchFullScreen = () => {
        if (search === false) {
            setSearch(true)
            console.log(search)
        } else {
            setSearch(false)
        }
    }

    /*---------Using reducer mange the active or inactive menu----------*/
    const initialState = {activeMenu: ''}
    const [state, dispatch] = useReducer(reducer, initialState)

    function reducer(state, action) {
        switch (action.type) {
            case 'homeOne':
                return {activeMenu: 'homeOne'}
            case 'brows':
                return {activeMenu: 'brows'}
            case 'itwork':
                return {activeMenu: 'itwork'}
            case 'about':
                return {activeMenu: 'about'}
            case 'contact':
                return {activeMenu: 'contact'}
            case 'account':
                return {activeMenu: 'account'}
            default:
                return {activeMenu: ''}
        }
    }

    return (
        <>
            <TopbarHeader/>
            <div className={search ? 'mobile-search slide' : 'mobile-search'}>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-11">
                            <label>What are you looking for?</label>
                            <input
                                type="text"
                                placeholder="Search Products, Category, Brand"
                            />
                        </div>
                        <div className="col-1 d-flex justify-content-end align-items-center">
                            <div className="search-cross-btn " onClick={searchFullScreen}>
                                {/*<i className="bi bi-search me-4"></i>*/}
                                <i className="bi bi-x"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header-area style-1">
                <div className="header-logo">
                    <Link to={`/`} onClick={scrollTop}>
                        <img
                            alt="logo"
                            src={'/images/bg/hh.png'}
                        />
                    </Link>
                </div>
                <div className={sidebar ? 'main-menu show-menu' : 'main-menu'}>
                    <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
                        <div className="mobile-logo-wrap ">
                            <Link to={'/'}>
                                <img alt="logo" src={'/images/bg/hh.png'}/>
                            </Link>
                        </div>
                        <div className="menu-close-btn" onClick={handleSidbarMenu}>
                            <i className="bi bi-x-lg"/>
                        </div>
                    </div>
                    <ul className="menu-list">
                        <li onClick={() => dispatch({type: 'about'})}>
                            <Link
                                to={`/about`}
                                onClick={scrollTop}
                                className={`${state.activeMenu === 'about' ? 'active' : ''} `}
                            >
                                About Us
                            </Link>
                        </li>
                        <li onClick={() => dispatch({type: 'itwork'})}>
                            <Link
                                to={`/how-works`}
                                onClick={scrollTop}
                                className={`${state.activeMenu === 'itwork' ? 'active' : ''} `}
                            >
                                How It Works
                            </Link>
                        </li>
                        <li onClick={() => dispatch({type: 'brows'})}>
                            <Link
                                to={`/products`}
                                onClick={scrollTop}
                                className={`${state.activeMenu === 'brows' ? 'active' : ''} `}
                            >
                                Browse Products
                            </Link>
                        </li>


                        <li onClick={() => dispatch({type: 'contact'})}>
                            <Link
                                to={`/contact`}
                                onClick={scrollTop}
                                className={`${state.activeMenu === 'contact' ? 'active' : ''} `}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className={"mobile-menu-btn d-lg-none"} onClick={() => dispatch({type: 'account'})}>
                            <Link
                                to={`/login`}
                                onClick={scrollTop}
                                className={`${state.activeMenu === 'account' ? 'active' : ''} `}
                            >
                                Account
                            </Link>
                        </li>
                    </ul>
                    {/* mobile-search-area */}
                    <div className="d-lg-none d-block">
                        <form className="mobile-menu-form">
                            <div className="input-with-btn d-flex flex-column">
                                <input type="text" placeholder="Search here..."/>
                                <button type="submit" className="eg-btn btn--primary btn--sm">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="nav-right d-flex align-items-center">
                    <div className="hotline d-xxl-flex d-none">
                        <div className="hotline-icon">
                            <img
                                alt="images"
                                src={'/images/icons/header-phone.svg'}
                            />
                        </div>
                        <div className="hotline-info">
                            <span>Click To Call</span>
                            <h6>
                                <a href="tel:+9779817602260">+977 9817602260</a>
                            </h6>
                        </div>
                    </div>
                    <div className="search-btn" onClick={searchFullScreen}>
                        <i className="bi bi-search"/>
                    </div>
                    <div className="eg-btn btn--primary header-btn">
                        <Link to={`/login`} onClick={scrollTop}>
                            My Account
                        </Link>
                    </div>
                    <div
                        className="mobile-menu-btn d-lg-none d-block"
                        onClick={handleSidbarMenu}
                    >
                        <i className="bx bx-menu"/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
