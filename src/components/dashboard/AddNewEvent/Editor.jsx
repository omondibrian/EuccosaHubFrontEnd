import React from "react";
import FileUploader from "../../button/fileUploader";
import { EventsContext } from "../NewEvent/newEventProvider";
const Editor = () => {
  const { newEvent, handleChange, handleSubmit, handleFileSelected } = React.useContext(
    EventsContext
  );
  console.log(newEvent);
  return (
    <div small className="card mb-3">
      <div className="card-body">
        <form className="add-new-event" onSubmit={handleSubmit}>
          <input
            className="form-control form-control mb-3"
            name="name"
            placeholder="Event Title"
            value={newEvent.name}
            onChange={handleChange}
          />
          <div className="form-row ">
            <div className="col">
              <input
                className="form-control form-control mb-3"
                name="host"
                value={newEvent.host}
                onChange={handleChange}
                placeholder="Host"
              />
            </div>

            <div className="col">
              <input
                className="form-control  form-control mb-3"
                name="hostUrl"
                value={newEvent.hostUrl}
                onChange={handleChange}
                placeholder="Host Url"
              />
            </div>
          </div>
          <textarea
            name="description"
            value={newEvent.description}
            onChange={handleChange}
            placeholder="Event description "
            className="form-control "
            rows="10"
            cols="80"
          />

          <div className="pt-3">
            <FileUploader
              name="pictorials"
              id="pictorials"
              onChange={handleFileSelected}
              type="file"
              accept="image/*"
              title="Upload Event Cover Photo "
              files={newEvent.pictorials}
              multiple
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editor;
