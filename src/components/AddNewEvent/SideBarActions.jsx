import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-GB";
import Switch from '../AnimatedAction/switch'
import "react-datepicker/dist/react-datepicker.css";
registerLocale("en", en);

const SidebarActions = ({ title }) => {
  const [showModal, toogleModal] = React.useState(false);
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
              <Switch />
              </div>
            </span>
            <span className="d-flex mb-2">
              <i className="material-icons mr-1">visibility</i>
              <strong className="mr-1">Visibility:</strong>{" "}
              <strong className="text-success">Public</strong>{" "}
              <div className="ml-auto">
              <Switch />
              </div>
            </span>
            <span className="d-flex mb-2">
              <i className="material-icons mr-1">calendar_today</i>
              <strong className="mr-1">Schedule:</strong> Now{" "}
              <div className="ml-auto">
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
                  onClick={() => toogleModal(!showModal)}
                >
                  Edit
                </button>
                {
                  <div
                    className="modal"
                    style={{
                      display: showModal ? "block" : "none",
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
                              onClick={() => toogleModal(!showModal)}
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
                            placeholder="Event venue"
                          />
                          <label htmlFor="Date">Date </label>
                          <DatePicker
                            className="form-control"
                            locale="en"
                            name="startDate"
                            dateFormat="dd/mm/yyyy"
                            placeholderText="12/12/2020"
                            showTimeInput
                            customTimeInput={<TimeInput />}
                            // selected={formik.values.startDate}
                            // onSelect={() => console.log("day changed")} //when day is clicked
                            // onChange={(val) => formik.setFieldValue("startDate", val)} //only when value has changed
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            onClick={() => toogleModal(!showModal)}
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </span>
          </li>
          <li className="list-group-item d-flex px-3 border-0">
            {/* <button className="btn btn-outline-primary accent">
              <i className="material-icons">save</i> Save  as Draft
            </button> */}
            <button className="btn btn-primary py-3 px-5 mr-auto">
              <i className="material-icons">file_copy</i> Save
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarActions;

const TimeInput = ({value, onChange }) => (
  <input
    className='form-control'
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);
