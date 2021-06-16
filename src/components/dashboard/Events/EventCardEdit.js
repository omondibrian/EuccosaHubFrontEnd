import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { IP_ADDRESS } from "../../../utils/constants";
import AlertModal from "../alert/ActionAlert";
import { useDispatch } from "react-redux";
import { createFlushMessage } from "../../../state/slices/Application";
import { Request } from "../../../utils/Request";

function EventCardEdit({ event, fetchEvent }) {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    alertDisplay: "none",
  });
  const confirmFormSubmit = async () => {
    setState({
      ...state,
      alertDisplay: "none",
    });
    // send data to backend
    const { message, status } = await Request(
      `${IP_ADDRESS}/event/${event.id}`,
      "DELETE"
    );
    if (message || status !== 200) {
      dispatch(
        createFlushMessage({
          className: "alert-danger",
          message,
        })
      );
    } else {
      dispatch(
        createFlushMessage({
          className: "alert-success",
          message: "successfully deleted Event ",
        })
      );
      fetchEvent();
    }
  };

  const dismiss = () => {
    setState({ ...state, alertDisplay: "none" });
  };
  return (
    <div className="card mx-3" style={{ width: "18rem" }}>
      <div className="card-img-top d-flex flex-row card-images">
        {event.pictorials.map((img) => (
          <div className="grid">
            <img
              className="card-img"
              src={`${IP_ADDRESS}/event/uploads/${img.name}`}
              alt={img.name}
              key={img.name}
            />
          </div>
        ))}
      </div>
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p className="card-text">{event.description}</p>
        <Link
          to={{
            pathname: "/dashboard/add-new-event",
            state: { ...event, title: "Edit Event", subtitle: "Edit" },
          }}
          className="btn btn-primary"
        >
          <i className="material-icons ">edit</i>
          Edit
        </Link>
        <button
          className="btn btn-danger ml-4"
          onClick={() => setState({ alertDisplay: "block" })}
        >
          <i className="material-icons ">delete</i> delete
        </button>
      </div>
      <AlertModal
        title="confirm changes"
        confirm={confirmFormSubmit}
        description={`Do you want to delete the following event ${event.name}`}
        dismiss={dismiss}
        style={{ display: state.alertDisplay, zIndex: "10000" }}
      />
    </div>
  );
}
export default EventCardEdit;
