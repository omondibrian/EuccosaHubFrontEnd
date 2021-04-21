import React, { useRef } from "react";
import classNames from "classnames";

function Alert({ alertClass, message }) {
  const alertClasses = classNames("alert", alertClass);
  const ref = useRef();
  return (
    <div className={alertClasses} role="alert" ref={ref}>
      {message}
      <button
        type="button"
        className="close"
        ariaLabel="Close"
        onClick={ref.classList.add("d-none")}
      >
        <span ariaHidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
