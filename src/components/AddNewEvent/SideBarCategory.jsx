import React from "react";

const SidebarCategories = ({ title }) => (
  <div className="card mb-3">
    <div className="card-header border-bottom">
      <h6 className="m-0">{title}</h6>
    </div>
    <div className="card-body p-0">
      <ul className="list-group list-group-flush">
        <li className="list-group-item px-3 pb-2">
          <div className="mb-1">
            <input type="checkbox" id="uncategorized" value="uncategorized" checked={true} />
            <label htmlFor="uncategorized">Uncategorized</label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="Friday" value="Tech Friday" checked={true} />
            <label htmlFor="Friday">Tech Friday</label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="Open Day" value="Open Day" />
            <label htmlFor="Open Day">Open Day</label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="Hackathon" value="Hackathon" />
            <label htmlFor="Hackathon"> Hackathon</label>
          </div>
          <div className="mb-1">
            <input type="checkbox" id="talks" value="Talks" />
            <label htmlFor="talks">Talks</label>
          </div>
        </li>

        <li className="list-group-item d-flex px-3">
          <div className="input-group ml-auto">
            <input placeholder="New category" type="text" className="form-control" />
            <div className="input-group-append" >
              <button className="btn btn-white px-2">
                <i className="material-icons">add</i>
              </button>
            </div >
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default SidebarCategories