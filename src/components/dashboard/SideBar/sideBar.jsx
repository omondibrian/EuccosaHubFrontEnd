import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../../state/slices/Application";

function SideBar(props) {
  const { hideLogoText } = props;
  const dispatch = useDispatch();
  const closeSideNav = (e) => {
    e.preventDefault()
    dispatch(toggleMenu())
  };
  return (
    <div className="main-navbar">
      <nav
        className="navbar align-items-stretch bg-white flex-md-nowrap border-bottom p-0"

      >
        <a
          className="w-100 mr-0 navbar-brand"
          href="/"
          style={{ lineHeight: "25px" }}
        >
          <div className="d-table m-auto">

            {!hideLogoText && (
              <span className="d-none d-md-inline ml-1">EuccosaHub </span>
            )}
          </div>
        </a>
        {/* eslint-disable-next-line */}
        <a
          className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
          onClick={closeSideNav}
        >
          <i className="material-icons">arrow_back</i>
        </a>
      </nav>
    </div>
  );
}

export default SideBar;
