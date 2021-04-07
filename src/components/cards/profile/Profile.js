import style from "./Profile.module.css";

import React from "react";

function Profile({ profile, index }) {
  return (
    <div className={`${style.profile} .splide__slide`} data-order={index+1}>
      <div className={style.profile__top}>
        <img
          src={profile.img_src}
          alt={profile.fullNname}
          className={style.img_fluid}
        />
      </div>
      <div className={style.profile__bottom}>
        <span className={style.name}>{profile.fullName}</span>
        <br />
        &mdash;{profile.position}
      </div>
    </div>
  );
}

export default Profile;
