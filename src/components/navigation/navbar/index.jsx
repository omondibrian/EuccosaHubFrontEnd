import React, { useEffect } from 'react'
import style from './Navbar.module.css'
import { Link } from "react-router-dom"
import { scrollTo } from "../../../utils/scroll"
import DropDown from "./DropDown"



let windowHeight = window.innerHeight

const navScroll = () => {
    const navbar = document.querySelectorAll(`.${style.navbar}`)[1]
    if (navbar) {
        if (window.scrollY > windowHeight - 70) {
            navbar.classList.add(style.nav__scrolled)
        }
        else {
            navbar.classList.remove(style.nav__scrolled)
        }
    }
    requestAnimationFrame(navScroll)

}


export const MobileNavItems = ({ user }) => {
    const closeNav = () => {
        document.getElementById('mobile-nav').style.transform = "scaleY(0)"
    }
    return <div className={style.mobile_nav} id="mobile-nav">
        <div className={style.nav__toggler}>
            <button onClick={closeNav}>
                &times;
            </button>
        </div>
        <ul className={""}>
            <li className={style.nav_link}>
                <a href="#home">Home</a>
            </li>
            <li className={style.nav_link}>
                <a href="#about">About</a>
            </li>
            <li className={style.nav_link}>
                <a href="#contact">Contact</a>
            </li>
            <li className={style.nav_link}>
                <Link to="/shop">Shop</Link>
            </li>
            <li className={style.nav_link}>
                <Link to="/donate">Donate</Link>
            </li>
            {
                user ? <>
                    <li className={style.nav_link}>
                        <Link to="/dashboard">DashBoard</Link>
                    </li>
                    <li className={style.nav_link}>
                        <Link to="/logout">Logout</Link>
                    </li>
                </> : <li className={style.nav_link}>
                    <Link to="/login">Login</Link>
                </li>
            }
        </ul>
    </div>
}


function Navbar() {
    const openNav = () => {
        document.getElementById('mobile-nav').style.transform = "scaleY(1)"
    }
    useEffect(() => {
        requestAnimationFrame(navScroll)
        scrollTo()
    }, [])
    let user;
    try {
        user = localStorage.getItem("ID")
    }
    catch (e) {
    }
    console.log(user)
    return (
        <>
            <div className={style.navbar} >
                <div className={style.logo}>
                    Eucossa
            </div>
                <ul className={style.nav}>
                    <li className={style.nav_link}>
                        <a href="#home">Home</a>
                    </li>
                    <li className={style.nav_link}>
                        <a href="#about">About</a>
                    </li>
                    <li className={style.nav_link}>
                        <a href="#contact">Contact</a>
                    </li>
                    <li className={style.nav_link}>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li className={style.nav_link}>
                        <Link to="/donate">Donate</Link>
                    </li>
                    <li className={style.nav_link}>
                        <DropDown user={user}/>
                    </li>
                </ul>
                <div className={style.nav__toggler}>
                    <button onClick={openNav}>
                        <svg width="50" height="30" viewBox="0 0 73 30" fill="none" >
                            <rect width="50" height="5" rx="3" fill="var(--white)" />
                            <rect width="50" height="5" rx="3" y="12.5" fill="var(--white)" />
                            <rect width="50" height="5" rx="3" y="25" fill="var(--white)" />
                        </svg>
                    </button>
                </div>
            </div>
            <MobileNavItems user={user} />
        </>
    )
}

export default Navbar
