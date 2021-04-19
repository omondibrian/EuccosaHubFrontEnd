import React from "react";

import NavLink from "../../NavLink";
import { NavItem } from "shards-react";

const SidebarNavItem = ({ item }) => (
  <NavItem>
    <NavLink
      title={item.title}
      icon={item.icon}
      after={item.htmlAfter}
      to={item.to}
      
    />
  </NavItem>
);

export default SidebarNavItem;
