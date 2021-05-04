import React from "react";
import style from "../Home.module.css";
import EventCard from "../../../cards/event/EventCard";

function EventSection({ events }) {
  return (
    <section className={style.events} id="events">
      
      <div>
      <h2 className={style.header} >
        <span className="letters">Events</span>
      </h2>
      <div className={style.events__timeline}>
        {events.map((myEvent, i) => (
          <div className={style.events__timeline__card} key={i}>
            <EventCard event={myEvent} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default EventSection;
