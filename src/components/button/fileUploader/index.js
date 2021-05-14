import React from "react";
import "./index.css";


function FileUploader(props) {
  return (
    <div className="file file--upload">
      <label htmlFor={props.id}>
        <i className="material-icons">cloud_upload</i> {props.title || `Upload Image`}
      </label>
      <input type='file'  {...props} />
    </div>
  ); 
}

export default FileUploader;
