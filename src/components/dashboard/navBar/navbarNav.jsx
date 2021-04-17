import React, { useState } from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./userActions";

export default function NavbarNav() {
  
  const [state, setState] = useState({
    isMenuVisible: false,
    isNotificationVisible: false,
  });
  const toggleUserActions = () => {
    setState({
        ...state,
        isMenuVisible: !state.isMenuVisible,
    });
  };

  const toggleNotification = () => {
    setState({
        ...state,
        isNotificationVisible: !state.isNotificationVisible,
    });
  };
  return (
    <Nav navbar className="border-left flex-row">
      <Notifications state={state} toggleNotification={toggleNotification} />
      <UserActions state={state} toggleUserActions={toggleUserActions} />
    </Nav>
  );
}
