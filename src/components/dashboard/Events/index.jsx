import React from "react";
import PageTitle from "../../dashboard/pageTitle";
import { fetchAllEvents } from "../../../services/events.service";
import EventCardEdit from "./EventCardEdit";
function Events() {
  const [events, setEvents] = React.useState([]);
  async function fetchEvents() {
    const result = await fetchAllEvents();
    setEvents(result.events);
  }
  React.useEffect(() => {
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
      
      <div className="row ">
        {events.length > 0 &&
          events.map(event_ => (
            <EventCardEdit event={event_} fetchEvent={fetchEvents}/>
          ))}
      </div>
    </div>
  );
}

export default Events;
