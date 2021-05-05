import React from "react";

import classNames from "classnames";
import NavbarNav from "./navbarNav";
import NavbarToggle from "./NavbarToggle";


export default function MainNavbar({ layout, stickyTop }) {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>
      <div className="container p-0">
        <nav className="navbar navbar-light align-items-stretch justify-content-end flex-md-nowrap p-0">
          <NavbarNav />

          <NavbarToggle />
        </nav>
      </div>
    </div>
  );
}
