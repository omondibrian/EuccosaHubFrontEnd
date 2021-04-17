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
  const [state, setState] = useState({
    sidebarNavItems: sideBarItems()
  })


  const classes = classNames(
    "main-sidebar",
    "px-0",
    "col-12",
    application.isMenuOpen && "open"
  );

  return (
    <Col tag="aside" className={classes} lg={{ size: 2 }} md={{ size: 3 }}>
      <SidebarMainNavbar hideLogoText={hideLogoText} />
      <SidebarNavItems navItems={state.sidebarNavItems} />
    </Col>
  );
}
