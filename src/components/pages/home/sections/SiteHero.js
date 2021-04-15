import React, { useEffect } from "react";
import BackGround from "../../../background";
import Navbar from "../../../navigation/navbar";
import style from "../Home.module.css";
import {
    createWaveAnimation,
  } from "../../../animations/Animations";

const SiteHero = () => {
  const clipPathPoints = createWaveAnimation();
  const animate = (clipPathPoints) => {
    document
      .querySelector("#site_hero_animate")
      .animate(
        [
          { clipPath: clipPathPoints["startPath"] },
          { clipPath: clipPathPoints["firstControlPath"] },
          { clipPath: clipPathPoints["secondControlPath"] },
          { clipPath: clipPathPoints["endPath"] },
        ],
        {
          duration: 2000,
        }
      );
  };

  useEffect(() => {
    animate(clipPathPoints);
  }, [clipPathPoints]);

  return (
    <div>
      <div className={style.site_hero__content} id="home">
        <Navbar />
        <h1 className={style.site_hero__header}>EUCCOSA COMMUNITY</h1>
        <div className={style.site_hero__text}>
          Egerton university computer science students association
        </div>
        <a href="/" className={style.site_hero__btn}>
          Join Us
        </a>
      </div>
    </div>
  );
};

export default function SiteHeroSection() {
  return (
    <section className={style.site_hero}>
      <SiteHero />
      <div className={style.site_hero__animate} id="site_hero_animate">
        <BackGround>
          <SiteHero />
        </BackGround>
      </div>
    </section>
  );
}
