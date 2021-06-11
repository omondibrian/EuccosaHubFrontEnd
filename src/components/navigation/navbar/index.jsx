import React, { useEffect, useRef } from 'react'
import style from './Navbar.module.css'
import { Link } from "react-router-dom"
import { smoothScroll } from "../../../utils/scroll"
import DropDown from "./DropDown"
import { Logo } from "../../vectors/Vectors"
import Menu from '../sidebarMenu'
import ShapeOverlays from "../../animations/shapeOverlays"
import classNames from 'classnames'
import { getItemFromLocalStorage } from '../../../state/slices/Application'


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

    let elementsRef = useRef({ gNavItems: null, elmOverlay: null, overlay: null })
    const elmHamburger = useRef()
    const openNav = () => {
        // open navigation menu on mobile devices
        if (elementsRef.current.overlay.isAnimating) {
            return false;
        }
        elementsRef.current.overlay.toggle();
        elementsRef.current.overlay.open()
        elmHamburger.current.classList.add('is-opened-navi');
        for (let i = 0; i < elementsRef.current.gNavItems.length; i++) {
            elementsRef.current.gNavItems[i].classList.add('is-opened');
        }

    }
    const closeNav = () => {
        //close navigation menu
        elementsRef.current.overlay.toggle()
        elmHamburger.current.classList.remove('is-opened-navi');
        for (let i = 0; i < elementsRef.current.gNavItems.length; i++) {
            elementsRef.current.gNavItems[i].classList.remove('is-opened');
        }
        elementsRef.current.overlay.close()
    }

    useEffect(() => {
        elementsRef.current.gNavItems = document.querySelectorAll('.global-menu__item');
        elementsRef.current.elmOverlay = document.querySelector('.shape-overlays');
        elementsRef.current.overlay = new ShapeOverlays(elementsRef.current.elmOverlay);
        requestAnimationFrame(navScroll)
        smoothScroll()
    }, [])
    const navbarClasses = classNames(style.navbar, props.className)
    const user = getItemFromLocalStorage("ID")
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
                    <button onClick={openNav} ref={elmHamburger}>
                        <svg width="50" height="30" viewBox="0 0 73 30" fill="currentColor" >
                            <rect width="50" height="5" rx="3" />
                            <rect width="50" height="5" rx="3" y="12.5" />
                            <rect width="50" height="5" rx="3" y="25" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* navifgation menu on small devices */}
            <Menu closeNav={closeNav} isUserLoggedIn={user} />
        </>
    )
}

export default Navbar
