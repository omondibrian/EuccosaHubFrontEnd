import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { createFlushMessage } from "../../../state/slices/Application";

function Alert({ alert }) {
  const alertClasses = classNames("alert", alert.className);
  const ref = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    ref.current.classList.add("visible");
  }, []);
  const closeAlert = () => {
    dispatch(createFlushMessage(""));
  };
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
