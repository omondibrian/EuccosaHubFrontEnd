import React from 'react'
import style from "./Background.module.css";
import * as vectors from "../vectors/Vectors"
export default function BackGround({ children }) {
    return (
        <div className={style.Background}>
            <div className={style.planets}>
                <div className={style.planets_medium}><vectors.MediumPurplePlanet /></div>
                <div className={style.planets_small__blue}><vectors.SmallBluePlanet /></div>
                <div className={style.planets_large__purple}><vectors.BigPurplePlanet /></div>
                <div className={style.planets_small__purple}><vectors.SmallPurplePlanet /></div>
                <div className={style.planets_small}><vectors.SmallPurplePlanet /></div>
            </div>
            <div className={style.foreground}>
                {children}
            </div>


        </div>
    )
}
