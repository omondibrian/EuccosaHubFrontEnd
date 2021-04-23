import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  NavItem,
  Collapse,
  NavLink,
} from "shards-react";
import DropdownItem from "./DropDownItem";
import { getState } from "../../../state/slices/user";
import { useSelector } from "react-redux"

export default function UserActions({ state, toggleUserActions }) {
  const { user } = useSelector(getState)


  return (
    <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
      <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
        <img
          className="user-avatar rounded-circle mr-2"
          src={user.avatar}
          alt="User Avatar"
        />
        <span className="d-none d-md-inline-block">{`${user.firstName} ${user.lastName}`}</span>
      </DropdownToggle>
      <Collapse tag={DropdownMenu} right small open={state.isMenuVisible}>
        <DropdownItem icon="&#xE7FD;" title="Profile" to="/userProfile" />

        <DropdownItem
          icon="&#xE8B8;"
          title="Edit Profile"
          to="/editUserProfile"
        />

        <DropdownItem icon="&#xE2C7;" title="Files" to="/fileManager" />

        <DropdownItem icon="&#xE896;" title="Transactions" to="/Transactions" />

        <DropdownItem
          icon="&#xE879;"
          title="Log out"
          to="/logout"
          className="text-danger"
        />
      </Collapse>
    </NavItem>
  );
}
