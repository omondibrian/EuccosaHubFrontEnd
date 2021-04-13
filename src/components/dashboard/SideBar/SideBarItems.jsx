import React from "react";
import SidebarNavItem from "./SidebarNavItem";
import { Nav } from "shards-react";

function SideBarItems(props) {
  const { navItems: items } = props;
  return (
    <div className="nav-wrapper">
      <Nav className="nav--no-borders flex-column">
        {items.map((item, idx) => (
          <SidebarNavItem key={idx} item={item} />
        ))}
      </Nav>
    </div>
  );
}

export default SideBarItems;
