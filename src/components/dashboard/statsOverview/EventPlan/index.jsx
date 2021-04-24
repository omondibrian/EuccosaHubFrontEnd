import React from "react";
const EventsPlan = ({ title, referralData }) => (
  <div className="card">
    <div className="card-header border-bottom">
      <h6 className="m-0">{title}</h6>
      <div className="block-handle" />
    </div>

    <div className="card-body p-0">
      <ul className=" list-group list-group-flush list-group-small">
        {referralData.map((item, idx) => (
          <li key={idx} className="list-group-item d-flex px-3">
            <span className="text-semibold text-fiord-blue">{item.title}</span>
            <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <div className="card-footer border-top">
      <div className="row">
        {/* Time Span */}
        <div className="col-12">
          <select
           className="form-control"
            value="last-week"
            style={{ maxWidth: "130px" }}
            onChange={() => {}}
          >
            <option value="last-week">Last Week</option>
            <option value="today">Today</option>
            <option value="last-month">Last Month</option>
            <option value="last-year">Last Year</option>
          </select>
        </div>

        {/* View Full Report */}
        <div className="col-12 text-right view-report">
          {/* eslint-disable-next-line */}
          <a href="#">Full report &rarr;</a>
        </div>
      </div>
    </div>
  </div>
);


export default EventsPlan