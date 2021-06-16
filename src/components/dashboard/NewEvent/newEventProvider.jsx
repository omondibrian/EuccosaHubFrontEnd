import React, { createContext } from "react";
import {
  addEvent,
  saveToLocalstorage,
  fileBlobFromDataURL,
  getItemFromLocalStorage,
  updateEvent,
  createFlushMessage
} from "../../../state/slices/Application";
import { useDispatch } from "react-redux";
export const EventsContext = createContext();

export const EventsContextProvider = (props) => {
  const dispatch = useDispatch();
  const [newEvent, setEvent] = React.useState({});
  const [draft, setDraft] = React.useState(false);
  const [isVisible, setVisibility] = React.useState(false);
  React.useEffect(() => {
    if (props.state) {
      setEvent({
        id:props.state.id,
        name: props.state["name"],
        description: props.state["description"],
        host: props.state["host"],
        hostUrl: props.state["hostUrl"],
        pictorials: [],
        category: props.state["category"],
        schedule: {
          venue: props.state["venue"],
          Date: new Date(`${props.state.date} ${props.state.time}`),
        },
      });
      setVisibility(props.state.isVisible);
    } else {
      //initialise events state with the stored event draft from localstorage if it exists
      const event = JSON.parse(getItemFromLocalStorage("event"));
      if (event) {
        /**
         * read images
         */
        async function loadEventFromLocalStorage() {
          let files = [];
          if (event.pictorials) {
            files = await fileBlobFromDataURL(event.pictorials);
          }
          const date = new Date(event["date"]);
          setEvent({
            name: event["name"],
            description: event["description"],
            host: event["host"],
            hostUrl: event["hostUrl"],
            pictorials: files,
            category: event["category"],
            schedule: {
              venue: event["venue"],
              Date: date,
            },
          });
        }
        loadEventFromLocalStorage();
        setVisibility(event["isVisible"]);
        setDraft(event["draft"]);
      }
    }
  }, [props]);

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
    console.log('files')
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
      dispatch(createFlushMessage({
        className:'alert-success',message:'successfully saved your changes'
      }))
      //  localStorage.removeItem("event");
    } else {
      saveToLocalstorage(event);
    }
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
  const handleUpdate = () => {
    const updateOptions = {
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
    dispatch(updateEvent({ id: newEvent.id, ...updateOptions }));
    dispatch(createFlushMessage({
      className:'alert-success',message:'successfully saved your changes'
    }))
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
        handleUpdate,
      }}
    >
      {props.children}
    </EventsContext.Provider>
  );
};
