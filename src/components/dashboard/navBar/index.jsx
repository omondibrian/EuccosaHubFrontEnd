import React from "react";

import classNames from "classnames";
import { Container, Navbar } from "shards-react";

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
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          <NavbarNav />
          <NavbarToggle />
        </Navbar>
      </Container>
    </div>
  );
}
