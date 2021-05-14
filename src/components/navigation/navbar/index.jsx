import React, { useEffect, useRef } from 'react'
import style from './Navbar.module.css'
import { Link } from "react-router-dom"
import { smoothScroll } from "../../../utils/scroll"
import DropDown from "./DropDown"
import { Logo } from "../../vectors/Vectors"
import Menu from '../sidebarMenu'
import ShapeOverlays from "../../animations/shapeOverlays"
import classNames from 'classnames'
import { getId } from '../../../state/slices/Application'


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



function Navbar(props) {
    let gNavItems, elmOverlay, overlay;
    const elmHamburger = useRef()
    const openSideNav = () => {
        if (overlay.isAnimating) {
            return false;
        }
        overlay.toggle();
        overlay.open()
        elmHamburger.current.classList.add('is-opened-navi');
        for (let i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.add('is-opened');
        }

    }
    const closeSideNav = () => {
        overlay.toggle()
        elmHamburger.current.classList.remove('is-opened-navi');
        for (let i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.remove('is-opened');
        }
        overlay.close()
    }

    useEffect(() => {
        gNavItems = document.querySelectorAll('.global-menu__item');
        elmOverlay = document.querySelector('.shape-overlays');
        // eslint-disable-next-line
        overlay = new ShapeOverlays(elmOverlay);
        requestAnimationFrame(navScroll)
        smoothScroll()
    }, [])
    const navbarClasses = classNames(style.navbar, props.className)
    const user = getId()
    return (
        <>
            <div className={navbarClasses} id="navbar">
                <div className={style.logo}>
                    <Logo />
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
                        <DropDown isUserLoggedIn={user} />
                    </li>
                </ul>
                <div className={style.nav__toggler}>
                    <button onClick={() => openSideNav(overlay)} ref={elmHamburger}>
                        <svg width="50" height="30" viewBox="0 0 73 30" fill="currentColor" >
                            <rect width="50" height="5" rx="3" />
                            <rect width="50" height="5" rx="3" y="12.5" />
                            <rect width="50" height="5" rx="3" y="25" />
                        </svg>
                    </button>
                </div>
            </div>
            <Menu closeNav={closeSideNav} isUserLoggedIn={user} />
        </>
    )
}

export default Navbar
