import React, { createContext } from "react";
import {
  addEvent,
  saveToLocalstorage,
  readFilesFromLocalStorage

} from "../../../state/slices/Application";
import { useDispatch } from "react-redux";
export const EventsContext = createContext();

export const EventsContextProvider = (props) => {
  const dispatch = useDispatch();
  const [newEvent, setEvent] = React.useState({});
  const [draft, setDraft] = React.useState(false);
  const [isVisible, setVisibility] = React.useState(false);
  React.useEffect(() => {
    //initialise events state with the stored event draft from localstorage if it exists
    const event = JSON.parse(localStorage.getItem("event"));
    if (event) {
      // event.pictorials = await readFilesFromLocalStorage(event.pictorials)
      const date = new Date(event["date"]);
      setEvent({
        name: event["name"],
        description: event["description"],
        host: event["host"],
        hostUrl: event["hostUrl"],
        pictorials: event.pictorials,
        category: event["category"],
        schedule: {
          venue: event["venue"],
          Date: date,
        },
      });

      setVisibility(event["isVisible"]);
      setDraft(event['draft']);
    }
  }, []);
  const handleChange = (e) => {
    setEvent({
      ...newEvent,
      [e.target.name]: e.target.value,
    });
  };
  const toggleDraft = () => {
    setDraft(!draft);
  };

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };
  //handle the selected file to be uploaded to the backend api
  const handleFileSelected = (event) => {
    setEvent({ ...newEvent, pictorials: event.target.files });
  };
  const handleSubmit = () => {
    const event = {
      name: newEvent.name,
      description: newEvent.description,
      date: newEvent.schedule.Date.toString(),
      host: newEvent.host,
      hostUrl: newEvent.hostUrl,
      venue: newEvent.schedule.venue,
      pictorials: newEvent.pictorials,
      category: newEvent.category,
      isVisible: isVisible,
    };
    if (!draft) {
      dispatch(addEvent(event));
      localStorage.removeItem("event");
      localStorage.removeItem("draft");
    } else {
      saveToLocalstorage(event);
    }
    console.log({ ...newEvent, draft, isVisible });
  };
  const updateSchedule = (schedule) => {
    setEvent({
      ...newEvent,
      schedule,
    });
  };

  const addCategory = (category) => {
    setEvent({
      ...newEvent,
      category,
    });
  };
  return (
    <EventsContext.Provider
      value={{
        newEvent,
        draft,
        isVisible,
        addCategory,
        updateSchedule,
        handleSubmit,
        handleFileSelected,
        toggleVisibility,
        toggleDraft,
        handleChange,
      }}
    >
      {props.children}
    </EventsContext.Provider>
  );

};
