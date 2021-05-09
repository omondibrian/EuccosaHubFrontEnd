import React from "react";

import NavLink from "../../navigation/NavLink";


const SidebarNavItem = ({ item }) => (
  <div className="nav-item">
    <NavLink
      title={item.title}
      icon={item.icon}
      after={item.htmlAfter}
      to={item.to}

    />
  </div>
);

export default SidebarNavItem;
