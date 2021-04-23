import React from "react";
import MainNavbar from "../navBar";
import MainSidebar from "../SideBar";

const navProps = {
  stickyTop: true,
};

const sidebarProps = {
  hideLogoText: false,
};
const DefaultLayout = ({ children, noNavbar }) => (
  <div className="container-fluid">
    <div className="row">
      <MainSidebar {...sidebarProps} />
      <div
        className="col-12 main-content p-0 col-md-9 offset-md-3 col-lg-10 offset-lg-2"

      >
        {!noNavbar && <MainNavbar {...navProps} />}
        {children}
      </div>
    </div>
  </div>
);

export default DefaultLayout;
