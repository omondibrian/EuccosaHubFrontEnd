import React from "react";
import style from "../Home.module.css";
import EventCard from "../../../cards/event/EventCard";
import { IP_ADDRESS } from "../../../../utils/constants";
import EventSkeleton from "../../../skeletons/EventSkeleton";

function EventSection({ events }) {
  return (
    <section className={style.events} id="events">

      <div>
        <h2 className={style.header} >
          <span className="letters">Events</span>
        </h2>
        <div className={style.events__timeline}>
          {events.length > 0 ? events.map((myEvent, i) => (
            <div className={style.events__timeline__card} key={i}>
              <EventCard event={{
                ...myEvent,
                img: `${IP_ADDRESS}/event/uploads/${myEvent.pictorials[0].name}`,
                title: myEvent.name,
                location: myEvent.venue
              }} />

            </div>

          )) : 
          <div>
            <div className={style.events__timeline__card}>< EventSkeleton /></div>
            <div className={style.events__timeline__card}>< EventSkeleton /></div>
          </div>
          }
        </div>
      </div>
    </section>
  );
}

export default EventSection;
