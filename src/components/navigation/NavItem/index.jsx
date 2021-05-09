import React from "react";
import classNames from "classnames";

function NavItem(props) {
  const classes = classNames(
    props.className,
    "nav-item",
    props.active && "active",
    props.disabled && "disabled"
  );
  return <li className={classes}>{props.children}</li>;
}

export default NavItem;
