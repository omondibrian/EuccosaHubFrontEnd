import React from "react";
import style from "./Cards.module.css";
import { Cal, Timer, Location } from "../../vectors/Vectors";

export const EventCard = ({ event = {} }) => {
  return (
    <div className={style.event_card} id={event.title || event.id}>
      <div className={style.event_card__burner}>
        <img
          src={event.img}
          alt={event.title}
          className={style.event_card__img}
        />
        <figcaption>
          <div className={style.card_details}>
            <Cal /> &nbsp;{event.date}
          </div>
          <div className={style.card_details}>
            <Timer /> &nbsp; {event.time}
          </div>
          <div className={style.card_details}>
            <Location />
            &nbsp; {event.location}
          </div>
        </figcaption>
      </div>
      <div className={style.event_card__description}>
        <h4 className={style.event_card__title}>{event.title}</h4>
        <svg
          width="73"
          height="5"
          viewBox="0 0 73 5"
          fill="none"
          className={style.line}
        >
          <rect width="73" height="5" rx="3" fill="var(--blue)" />
        </svg>
        <br />
        <p className={style.event_card__text}>{event.description}</p>
        <div className={style.mobile_details}>
          <span>{event.date}</span>
          <span>{event.time}</span>
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
