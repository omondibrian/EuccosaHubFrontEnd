import React from "react";

const NewDraft = ({ title }) => (
  <div className="card h-100">
    {/* Card Header */}
    <div className="card-header border-bottom">
      <h6 className="m-0">{title}</h6>
    </div>

    <div className="card-body d-flex flex-column">
      <form className="quick-post-form">
        {/* Title */}
        <div className="form-group">
          <input type="text" placeholder="Brave New World" className="form-control" />
        </div>

        {/* Body */}
        <div className="form-group">
          <textarea className="form-control" placeholder="Words can be like X-rays if you use them properly..." />
        </div>

        {/* Create Draft */}
        <div className="form-group mb-0">
          <button className="btn btn-primary" type="submit">
            Create Draft
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default NewDraft;