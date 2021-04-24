import "./button.css";
import React from "react";
import classNames from "classnames";
export const Button = (props) => {
  const buttonClasses = classNames(
    "btn_",
    props.className ? props.className : "btn_primary"
  );
  return (
    <button {...props} className={buttonClasses}>
      {props.children}
    </button>
  );
};
