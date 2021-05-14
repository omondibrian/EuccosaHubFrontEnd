import React from "react";
import "./index.css";


function FileUploader(props) {
  return (
    <div className="file file--upload">
      <label htmlFor="input-file">
        <i className="material-icons">cloud_upload</i> {props.title || `Upload Image`}
      </label>
      <input {...props} type='file' />
    </div>
  );
}

export default FileUploader;
