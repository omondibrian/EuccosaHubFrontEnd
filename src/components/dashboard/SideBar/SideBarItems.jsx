import React from "react";
import SidebarNavItem from "./SidebarNavItem";
import { Nav } from "shards-react";
import { useDispatch } from "react-redux"
import { toggleMenu } from "../../../state/slices/Application"

function SideBarItems(props) {
  const { navItems: items } = props;
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className="nav-wrapper">
      <Nav className="nav--no-borders flex-column">
        {items.map((item, idx) => (
          <div onClick={handleClick}> <SidebarNavItem key={idx} item={item} /></div>
        ))}
      </Nav>
    </div>
  );
}

export default SideBarItems;
