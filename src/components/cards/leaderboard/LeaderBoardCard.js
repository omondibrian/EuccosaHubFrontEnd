import style from "./Profile.module.css";

import React from "react";

function LeaderBoardCard({ profile, index }) {
  return (
    <div className={`${style.profile} .splide__slide`} data-order={index + 1}>
      <div className={style.profile__top}>
        <img
          src={profile.img_src}
          alt={profile.fullNname}
          className={style.img_fluid}
        />
      </div>
      <div className={style.profile__bottom}>
        <svg
          width="229"
          height="86"
          viewBox="0 0 229 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1C10.4583 17.8993 14.5417 20.0504 24 28.5C52.375 53.8489 90.3285 51.2015 109.245 34.3022C123.433 21.6278 157.062 -3.72113 185.438 34.3022C204.354 59.6511 218.542 68.1007 228 59.6511V85H1"
            fill="white"
          />
        </svg>
        <div className={style.profile__text}>
          <span className={style.name}>{profile.fullName}</span>
          <br />
          &mdash;{profile.position}
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardCard;
