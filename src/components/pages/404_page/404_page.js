import React from 'react'
import style from './error_page.module.css'
import BackGround from '../../background'
import { Error } from '../../vectors/Vectors'


function PageNotFound() {
    return (
        <BackGround>
            <div className={style.error_page}>
                <div >
                    We’re sorry, it looks like the page you’re
                    looking for isn’t in our system.<br/> Head back 
                    &nbsp;<a href="/">home</a>
                 </div>
                <Error  />
            </div>
        </BackGround>
    )
}

export default PageNotFound
