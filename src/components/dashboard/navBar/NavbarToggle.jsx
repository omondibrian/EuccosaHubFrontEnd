import React from "react";
import { useDispatch } from "react-redux"
import { toggleMenu } from "../../../state/slices/Application"

export default function NavbarToggle() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(toggleMenu())
  };
  return (
    <nav className="nav" style={{overflow:"hidden",maxHeight:'60px'}}>
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
