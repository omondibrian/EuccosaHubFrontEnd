import React, { useEffect, useRef } from 'react'
import style from "./index.module.css"
import classNames from "classnames"


function WaterFill() {
    const cnt = useRef()
    const water = useRef()
    useEffect(() => {
        let percent = cnt.current.innerText;
        let interval;
        interval = setInterval(function () {
            percent++;
            cnt.current.innerHTML = percent;
            {/*eslint-disable-next-line */}
            water.current.style.transform = `translate(0, ${(100 - percent)}%)`;
            if (percent === 100) {
                clearInterval(interval);
            }
        }, 60);
    }, [])
    const waterWaveClasses = classNames(style.water_wave, style.water_wave_back)
    const waterFrontClasses = classNames(style.water_wave, style.water_wave_front)
    return (
        <div className={style.container}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style={{ display: 'none' }}>
                <symbol id="wave">
                    <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z" />
                    <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z" />
                    <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z" />
                    <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z" />
                </symbol>
            </svg>
            <div className={style.box}>
                <div className={style.percent}>
                    <div className={style.percentNum} id="count" ref={cnt}>0</div>
                    <div className={style.percentB}>%</div>
                </div>
                <div id="water" className={style.water} ref={water}>
                    <svg viewBox="0 0 560 20" className={waterWaveClasses}>
                        <use xlinkHref="#wave" />
                    </svg>
                    <svg viewBox="0 0 560 20" className={waterFrontClasses}>
                        <use xlinkHref="#wave" />
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default WaterFill
