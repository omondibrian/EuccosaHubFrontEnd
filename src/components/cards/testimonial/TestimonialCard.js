import style from "./TestimonialCard.module.css";
import React from "react";

function TestimonialCard({ testimonial }) {
  const outline_color = testimonial.id % 2 === 0 ? "var(--dark-blue)" : "var(--purple)"
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
          <svg preserveAspectRatio="xMidYMid meet" className={style.profile_svg} viewBox="0 0 162 162" height="162" width="162" xmlns="http://www.w3.org/2000/svg" data-type="ugc" role="img" aria-labelledby="svgcid-mvr7jslnvcy1">
            <g fillRule="evenodd">
              <path stroke={outline_color} strokeWidth="2" fill="none" d="M161 81c0 44.183-35.817 80-80 80S1 125.183 1 81 36.817 1 81 1s80 35.817 80 80z">
              </path>
              <path strokeWidth="2" stroke="#FFFFFF" fill={outline_color} d="M139 22a8 8 0 1 1-16 0 8 8 0 0 1 16 0z">
              </path>
            </g>
          </svg>
          <div className={style.rounded}>
            <img
              src={testimonial.user.profile}
              alt={testimonial.user.profile}
              className={style.img_fluid}
            />
          </div>
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
