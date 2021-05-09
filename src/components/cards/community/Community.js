


import style from "./Community.module.css";
import React from "react";

function CommunityCard({ community }) {
  return (
    <div className={style.community}>
      <community.Icon />
      <h5 className={style.title}>{community.title}</h5>
      <div className={style.description}>{community.description}</div>
    </div>
  );
}

export default CommunityCard;
