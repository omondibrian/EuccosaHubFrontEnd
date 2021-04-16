import React from "react";
import { Link } from "react-router-dom";
function NavLink(props) {
  return (
    <Link className="nav-link" to={props.to}>
      <div className="d-inline-block item-icon-wrapper">
        <i className="material-icons">{props.icon}</i>
        {props.title}
      </div>
      <span>{props.after}</span>
    </Link>
  );
}

export default NavLink;
