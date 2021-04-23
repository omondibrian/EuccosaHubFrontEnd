import React, { useState } from "react";
import classNames from "classnames";
import { Col } from "shards-react";
import SidebarMainNavbar from "./sideBar";
import sideBarItems from '../../../data/sidebar'
import SidebarNavItems from "./SideBarItems";
import { useSelector } from "react-redux"
import { getApplicationState } from "../../../state/slices/Application"

export default function MainSidebar({ hideLogoText }) {
  const { application } = useSelector(getApplicationState)
  const [state] = useState({
    sidebarNavItems: sideBarItems()
  })


  const classes = classNames(
    "main-sidebar",
    "px-0",
    "col-12",
    "col-lg-2",
    "col-md-3",
    application.isMenuOpen && "open"
  );

  return (
    <div className={classes}>
      <SidebarMainNavbar hideLogoText={hideLogoText} />
      <SidebarNavItems navItems={state.sidebarNavItems} />
    </div>
  );
}
