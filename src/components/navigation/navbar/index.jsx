import React, { useEffect } from 'react'
import style from './Navbar.module.css'
import { Link } from "react-router-dom"
import { scrollTo } from "../../../utils/scroll"
//import { Logo } from '../../vectors/Vectors'



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


export const MobileNav = () => {
    const closeNav = () => {
        document.getElementById('mobile-nav').style.transform = "scaleY(0)"
    }
    return <div className={style.mobile_nav} id="mobile-nav">
        <div className={style.nav__toggler}>
            <button onClick={closeNav}>
                &times;
            </button>
        </div>
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
    return (
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
            </ul>
            <div className={style.nav__toggler}>
                <button onClick={openNav}>
                    <svg width="50" height="30" viewBox="0 0 73 30" fill="none" >
                        <rect width="50" height="5" rx="3" fill="var(--dark-black)" />
                        <rect width="50" height="5" rx="3" y="12.5" fill="var(--dark-black)" />
                        <rect width="50" height="5" rx="3" y="25" fill="var(--dark-black)" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar
