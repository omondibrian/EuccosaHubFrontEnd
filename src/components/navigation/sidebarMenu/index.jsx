import React from 'react'
import "./index.css"
import { Link } from "react-router-dom"

function Menu({ closeNav, isUserLoggedIn }) {
    return (
        <>
            <div className="global-menu" onClick={closeNav}>
                <div className="close">
                    <span className="global-menu__item global-menu__item" >
                        <span className="material-icons" style={{ fontSize: "2.5rem", cursor: "pointer" }}>close</span>
                    </span>
                </div>
                <div className="global-menu__wrap">
                    <a href="#home" className="global-menu__item global-menu__item">Home</a>
                    <a href="#about" className="global-menu__item global-menu__item">About</a>
                    <a href="#contact" className="global-menu__item global-menu__item">Contact</a>
                    <Link to="/shop" className="global-menu__item global-menu__item">Shop</Link>
                    {isUserLoggedIn ? <>
                        <Link to="/dashboard/user-profile" className="global-menu__item global-menu__item">Dashoard</Link>
                        <Link to="/logout" className="global-menu__item global-menu__item">Logout</Link>
                    </> :
                        <Link to="/login" className="global-menu__item global-menu__item">Login</Link>
                    }
                </div>
            </div>
        </>
    )
}

export default Menu
