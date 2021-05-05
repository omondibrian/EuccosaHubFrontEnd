import React from "react";

const SidebarActions = ({ title }) => (
  <div className="card mb-3">
    <div className="border-bottom card-header">
      <h6 className="m-0">{title}</h6>
    </div>

    <div className="card-body p-0">
      <ul className="list-group list-group-flush">
        <li className="list-group-item p-3">
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">flag</i>
            <strong className="mr-1">Status:</strong> Draft{" "}
            <a className="ml-auto" href="#">
              Edit
            </a>
          </span>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">visibility</i>
            <strong className="mr-1">Visibility:</strong>{" "}
            <strong className="text-success">Public</strong>{" "}
            {/* */}
            <a className="ml-auto" href="#">
              Edit
            </a>
          </span>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">calendar_today</i>
            <strong className="mr-1">Schedule:</strong> Now{" "}
            <a className="ml-auto" href="#">
              Edit
            </a>
          </span>
          <span className="d-flex">
            <i className="material-icons mr-1">score</i>
            <strong className="mr-1">Readability:</strong>{" "}
            <strong className="text-warning">Ok</strong>
          </span>
        </li>
        <li className="list-group-item d-flex px-3 border-0">
          <button className="btn btn-outline-primary accent" >
            <i className="material-icons">save</i> Save Draft
          </button>
          <button className="btn btn-primary ml-auto">
            <i className="material-icons">file_copy</i> Publish
          </button>
        </li>
      </ul>
    </div>
  </div>
);

export default SidebarActions;
