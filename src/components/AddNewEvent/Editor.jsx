import React from "react";
import FileUploader from "../button/fileUploader";
const Editor = ({ handleChange, handleSubmit, handleFile }) => (
  <div className="card mb-3">
    <div className="card-body">
      <form className="add-new-event" onSubmit={handleSubmit}>
        <input
          className="form-control form-control mb-3"
          name="name"
          placeholder="Event Title"
          onChange={handleChange}
        />
        <div className="form-row ">
          <div className="col">
            <input
              className="form-control form-control mb-3"
              name="host"
              onChange={handleChange}
              placeholder="Host"
            />
          </div>

          <div className="col">
            <input
              className="form-control  form-control mb-3"
              name="hostUrl"
              onChange={handleChange}
              placeholder="Host Url"
            />
          </div>
        </div>
        <textarea
          name="description"
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
            onClick={console.log('clicked')}
            onChange={handleFile}
            type="file"
            accept="image/*"
            title="Upload Event Cover Photo "
            multiple
          />
        </div>
      </form>
    </div>
  </div>
);

export default Editor;
