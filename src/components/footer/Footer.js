import React from 'react'
import style from './Footer.module.css'
import { Facebook, Twitter, Github, Whatsapp } from '../vectors/Vectors'

function Footer() {
    return (
        <div className={style.footer}>
            <h3>Contact Us On Socials</h3>
            <div>
                <a href="/" title="follow us on facebook" className={style.share_icon}><Facebook /></a>
                <a href="/" title="join us on whatsapp" className={style.share_icon}><Whatsapp /></a>
                <a href="/" title="follow as on twitter" className={style.share_icon}><Twitter /></a>
                <a href="/" title="follow as on github" className={style.share_icon}><Github /></a>
            </div>
        </div>
    )
}

export default Footer
