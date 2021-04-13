import style from "./TestimonialCard.module.css";
import React from "react";

function TestimonialCard({ testimonial }) {
  return (
    <div className={`${style.testimonial_card} testimonial_card`}>
      <div className={style.testimonial_card__text}>
        <p>
          <q>
            {testimonial.message}
            <br />
          </q>
        </p>
      </div>
      <div className={style.testimonial_card__profile}>
        <div className={style.testimonial_card__profile__img}>
          <img
            src={testimonial.user.profile}
            alt={testimonial.user.profile}
            className={style.img_fluid}
          />
        </div>
        <div className={style.testimonial_card__profile__text}>
          {testimonial.user.fullName}
          <br />
          {testimonial.user.occupation}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
