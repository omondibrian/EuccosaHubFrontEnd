import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-GB";
import Switch from "../../AnimatedAction/switch";
import "react-datepicker/dist/react-datepicker.css";
import { EventsContext } from "../NewEvent/newEventProvider";
registerLocale("en", en);

const SidebarActions = ({ title }) => {
  const [showModal, toggleModal] = React.useState(false);
  const {

    toggleDraft,
    isVisible,
    draft,
    toggleVisibility,
    handleSubmit,
  } = React.useContext(EventsContext);
  console.log(`draft ${draft}`);
  return (
    <div className="card mb-3">
      <div className="border-bottom card-header">
        <h6 className="m-0">{title}</h6>
      </div>

      <div className="card-body p-0">
        <ul className="list-group list-group-flush">
          <li className="list-group-item p-3">
            <span className="d-flex mb-2">
              <i className="material-icons mr-1">flag</i>
              <strong className="mr-1">Status:</strong> Draft
              <div className="ml-auto">
                <Switch value={draft} onChange={toggleDraft} />
              </div>
            </span>
            <span className="d-flex mb-2">
              <i className="material-icons mr-1">
                {isVisible ? "visibility" : "visibility_off"}
              </i>
              <strong className="mr-1">
                Visibility<sup className="text-danger">*</sup>
              </strong>
              {isVisible ? (
                <strong className="text-success">Public</strong>
              ) : (
                <strong className="text-primary">Private</strong>
              )}
              <div className="ml-auto">
                <Switch value={isVisible} onChange={toggleVisibility} />
              </div>
            </span>
            <span className="d-flex mb-2">
              <i className="material-icons mr-1">calendar_today</i>
              <strong className="mr-1">
                Schedule<sup className="text-danger">*</sup>
              </strong>
              <Modal
                toggleModal={toggleModal}
                showModal={showModal}
               
              />
            </span>
          </li>
          <li className="list-group-item d-flex px-3 border-0">
            {/* <button className="btn btn-outline-primary accent">
              <i className="material-icons">save</i> Save  as Draft
            </button> */}
            <button
              className="btn btn-primary py-3 px-5 mr-auto"
              onClick={handleSubmit}
            >
              <i className="material-icons">file_copy</i> Save
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarActions;

function Modal({ toggleModal, showModal }) {
  const [schedule, SetSchedule] = React.useState({});
  const { newEvent,updateSchedule } = React.useContext(EventsContext);
  const handleSubmit = (schedule) => {
    updateSchedule(schedule);
  };
  React.useEffect(()=>{
    console.log(newEvent)
    SetSchedule({...newEvent.schedule})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const handleChange = (e) => {
    SetSchedule({
      ...schedule,
      [e.target.name]: e.target.value,
    });
    console.log(schedule);
  };
  return (
    <div className="ml-auto ">
      <button
        style={{
          color: "#007bff",
          background: "transparent",
          border: "none",
          fontSize: "1rem",
        }}
        type="button"
        className="btn btn-primary "
        data-toggle="modal"
        data-target="#schedule"
        onClick={() => toggleModal(!showModal)}
      >
        Edit
      </button>
      {
        <div
          className="modal "
          style={{
            display: showModal ? "block" : "none",
            backgroundColor: "rgba(0,0,0,0.5)",
            marginTop: "60px",
          }}
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="#schedule"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="schedule">
                  Event Schedule
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span
                    aria-hidden="true"
                    onClick={() => toggleModal(!showModal)}
                  >
                    ×
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <label htmlFor="venue">Venue</label>
                <input
                  className="form-control form-control mb-3"
                  name="venue"
                  value={schedule.venue}
                  placeholder="Event venue"
                  onChange={handleChange}
                />
                <label htmlFor="Date">Date </label>
                <DatePicker
                  className="form-control"
                  locale="en"
                  name="Date"
                  dateFormat="dd/mm/yyyy "
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  onChange={(val) => {
                    SetSchedule({ ...schedule, Date: val });
                  }}
                  selected={schedule.Date}
                  showTimeSelect
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => toggleModal(!showModal)}
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => handleSubmit(schedule)}
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
