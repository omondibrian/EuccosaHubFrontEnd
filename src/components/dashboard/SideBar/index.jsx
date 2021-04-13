import React ,{useState}from "react";
import classNames from "classnames";
import { Col } from "shards-react";

import SidebarMainNavbar from "./sideBar";
import sideBarItems from '../../../data/sidebar'
import SidebarNavItems from "./SideBarItems";

export default function MainSidebar({hideLogoText}) {
    const [state, setState] = useState({
        menuVisible:false,
        sidebarNavItems:sideBarItems()
    })
   const onChange = () =>{
        setState({
          ...state,
          menuVisible: !state.menuVisible,
          sidebarNavItems: sideBarItems()
        });
      }

  const classes = classNames(
    "main-sidebar",
    "px-0",
    "col-12",
    state.menuVisible && "open"
  );

  return (
    <Col tag="aside" className={classes} lg={{ size: 2 }} md={{ size: 3 }}>
      <SidebarMainNavbar hideLogoText={hideLogoText} />
      <SidebarNavItems navItems={state.sidebarNavItems}/>
    </Col>
  );
}
