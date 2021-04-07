import style from "./TestimonialCard.module.css";
import React from "react";

function TestimonialCard({ message, user }) {
  return (
    <div className={style.testimonial_card}>
      <div className={style.testimonial_card__text}>
        <p>
          <q>
            {message}
            <br />
          </q>
        </p>
      </div>
      <div className={style.testimonial_card__profile}>
        <div className={style.testimonial_card__profile__img}>
          <img
            src={user.profile}
            alt={user.profile}
            className={style.img_fluid}
          />
        </div>
        <div className={style.testimonial_card__profile__text}>
          {user.fullName}
          <br />
          {user.occupation}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
