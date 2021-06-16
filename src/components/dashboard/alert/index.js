import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { createFlushMessage } from "../../../state/slices/Application";

function Alert({ alert }) {
  // receives object with message and bootrap css class 
  //ie {message:"your acount was created successfully",className:"alert-success"}

  const alertClasses = classNames("alert", alert.className);
  const ref = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    ref.current.classList.add("visible");
  }, []);
  const closeAlert = () => {
    dispatch(createFlushMessage(""));
  };
  setTimeout(() => dispatch(createFlushMessage("")), 5000)
  return (
    <div className={alertClasses} role="alert" ref={ref}>
      {alert.message}
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={closeAlert}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
