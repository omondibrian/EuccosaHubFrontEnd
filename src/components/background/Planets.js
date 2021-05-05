import React from 'react'
import { SmallBluePlanet, MediumPurplePlanet, BigPurplePlanet, SmallPurplePlanet} from "../vectors/Vectors"
import style from "./Background.module.css";

function Planets() {
    return (
        <div className={style.planets}>
                <div className={style.planets_medium}><MediumPurplePlanet /></div>
                <div className={style.planets_small__blue}><SmallBluePlanet /></div>
                <div className={style.planets_large__purple}><BigPurplePlanet /></div>
                <div className={style.planets_small__purple}><SmallPurplePlanet /></div>
                <div className={style.planets_small}><SmallPurplePlanet /></div>
            </div>
    )
}

export default Planets
