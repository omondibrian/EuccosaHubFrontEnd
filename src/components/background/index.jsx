import React, { Suspense } from 'react'
import style from "./Background.module.css";

const Planets = React.lazy(() => import("./Planets"))
const width = window.innerWidth

export default function BackGround({ children }) {
    return (
        <div className={style.Background}>
            {width > 768 && <Suspense fallback="">
                <Planets />
            </Suspense>}
            <div className={style.foreground}>
                {children}
            </div>


        </div>
    )
}
