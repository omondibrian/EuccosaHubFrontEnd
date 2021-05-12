import React, { useEffect, useRef } from "react";
import BackGround from "../../../background";
import Navbar from "../../../navigation/navbar";
import style from "../Home.module.css";
import { Link } from "react-router-dom";
import Tech from "../../../vectors/Tech";
import AnimationData from "../../../../data/clipPath.json";

const SiteHero = (props) => {
  return (
    <div className={style.site_hero__items} {...props}>
      <div>
        <Navbar />
        <div className={style.site_hero__content}>
          <div>
            <h4 className={style.site_hero__header}>Eucossa tech community</h4>
            <div className={style.site_hero__text}>
              Eucossa is a students organization under the computer science
              department at egerton university
            </div>
            <Link to="/register" className={style.site_hero__btn}>
              Join Us
            </Link>
          </div>

          <Tech />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 116.91"
        className={style.curve__bottom}
        preserveAspectRatio="none"
      >
        <path
          fill="var(--background)"
          fillRule="evenodd"
          d="M0 115.91c158.5 0 117.37-78.52 473.1-26.18C765.4 122.55 943 8.08 1067.2.69c156-9.28 188.5 75.15 372.8 75.22v41H0a6.68 6.68 0 0 1 0-1z"
        ></path>
      </svg>
    </div>
  );
};

export default function SiteHeroSection() {
  const width = window.innerWidth;
  const query = width < 500 ? "smallDevices" : "largeDevices";
  const clipPathPoints = AnimationData[query];
  const animate = () => {
    ref.current.animate(
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
    animate();
  });
  const ref = useRef();
  return (
    <section className={style.site_hero}>
      <SiteHero id="A_S" />
      <div className={style.site_hero__animate} ref={ref}>
        <BackGround>
          <SiteHero />
        </BackGround>
      </div>
    </section>
  );
}
