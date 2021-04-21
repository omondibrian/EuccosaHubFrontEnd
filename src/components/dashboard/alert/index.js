import React, { useEffect, useRef } from "react";
import classNames from "classnames";


function Alert({ alert }) {
  const alertClasses = classNames("alert", alert.className);
  const ref = useRef(null)
  useEffect(()=>{
  ref.current.classList.add("visible")
  },[])
  return (
    <div className={alertClasses} role="alert" ref={ref}>
      {alert.message}
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={()=>ref.current.classList.add("invisible")}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
