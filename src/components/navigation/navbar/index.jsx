import React, { useEffect } from 'react'
import style from './Navbar.module.css'
//import { Logo } from '../../vectors/Vectors'



let windowHeight = window.innerHeight

const navScroll = () => {
    const navbar = document.querySelectorAll(`.${style.navbar}`)[1]
    if (window.scrollY > windowHeight - 70) {
        navbar.classList.add(style.nav__scrolled)
    }
    else {
        navbar.classList.remove(style.nav__scrolled)
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
    }, [])
    return (
        <div className={style.navbar} >
            <div className={style.logo}>
                Eucossa
            </div>
            <ul className={style.nav}>
                <li className={style.nav_link}>
                    Home
                </li>
                <li className={style.nav_link}>
                    About
                </li>
                <li className={style.nav_link}>
                    Contact
                </li>
                <li className={style.nav_link}>
                    Shop
                </li>
                <li className={style.nav_link}>
                    Donate
                </li>
            </ul>
            <div className={style.nav__toggler}>
                <button onClick={openNav}>
                    <svg width="50" height="30" viewBox="0 0 73 30" fill="none" >
                        <rect width="50" height="5" rx="3" fill="#0A73FA" />
                        <rect width="50" height="5" rx="3" y="12.5" fill="#0A73FA" />
                        <rect width="50" height="5" rx="3" y="25" fill="#0A73FA" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar
