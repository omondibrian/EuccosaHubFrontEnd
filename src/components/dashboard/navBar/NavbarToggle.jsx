import React from "react";

export default function NavbarToggle() {
  const handleClick = () => {
    console.log("toggleNavbar clicked");
  };
  return (
    <nav className="nav">
      {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        onClick={handleClick}
        className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center"
      >
        <i className="material-icons">&#xE5D2;</i>
      </a>
    </nav>
  );
}
