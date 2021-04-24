import React from "react";
import ReactQuill from "react-quill";


import "react-quill/dist/quill.snow.css";
import "./quill.css";

const Editor = () => (
  <div small className="card mb-3">
    <div className="card-body">
      <form className="add-new-event">
        <input  className="form-control form-control-lg mb-3" placeholder="Your Post Title" />
        <ReactQuill className="add-new-event__editor mb-1" onChange={(value)=>{
          console.log(value)
        }} />
      </form>
    </div>
  </div>
);

export default Editor;