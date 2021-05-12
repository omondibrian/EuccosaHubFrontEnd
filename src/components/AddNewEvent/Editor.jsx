import React from "react";
// import FileUploader from ''
const Editor = () => (
  <div small className="card mb-3">
    <div className="card-body">
      <form className="add-new-event">
        <input
          className="form-control form-control mb-3"
          name="name"
          placeholder="Event Title"
        />
        <div className="form-row ">
          <div className="col">
            <input
              className="form-control form-control mb-3"
              name="name"
              placeholder="Host"
            />
          </div>

          <div className="col">
            <input
              className="form-control  form-control mb-3"
              name="name"
              placeholder="Host Url"
            />
          </div>
        </div>
        <textarea
          name="description"
          placeholder='Event description '
          className="form-control "
          rows="10"
          cols="80"
        />
        {/* <input
          type="file"
          className="form-control-file form-control-lg mb-3"
          placeholder="image"
        /> */}

        <FileUploader />
      </form>
    </div>
  </div>
);

export default Editor;
