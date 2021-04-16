import React from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames'
function DropDownItem(props) {
    const classes = classNames(props.className,"dropdown-item" )
  return (
    <Link className={classes} to={props.to}>
      <i className="material-icons">{props.icon}</i> {props.title}
    </Link>
  );
}

export default DropDownItem;
