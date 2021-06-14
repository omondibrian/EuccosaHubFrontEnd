import React from "react";
import PageTitle from "../../dashboard/pageTitle";
import EventCard from "../../cards/event/EventCard";
import { fetchAllEvents } from "../../../services/events.service";
import { IP_ADDRESS } from "../../../utils/constants";
function Events() {
  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    async function fetchEvents() {
      const result = await fetchAllEvents();
      console.log(result.events);
      setEvents(result.events);
    }
    fetchEvents();
  }, []);
  return (
    <div className="main-content-container px-4 container-fluid">
      <div className="page-header py-4">
        <PageTitle
          title="Events"
          subtitle="Events list"
          className="ml-sm-auto mr-sm-auto col-12"
        />
      </div>
      
      <div className="row p-4 mb-3 ">
        {events.length > 0 &&
          events.map((myEvent, i) => (
            <div key={i}>
              <EventCard
                event={{
                  ...myEvent,
                  img:
                    IP_ADDRESS + "/event/uploads/" + myEvent.pictorials[0].name,
                  title: myEvent.name,
                  location: myEvent.venue,
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Events;
