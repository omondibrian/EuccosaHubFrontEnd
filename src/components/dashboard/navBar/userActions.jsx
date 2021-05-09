import React from "react";
import DropdownItem from "./DropDownItem";
import { getState } from "../../../state/slices/user";
import { useSelector } from "react-redux"
import classNames from "classnames"

export default function UserActions({ state, toggleUserActions }) {
  const { user } = useSelector(getState)
  const menuClasses = classNames(
    state.isMenuVisible ? "visible bg-white" : "invisible")

  return (
    <div className="nav-item dropdown">
      {/* eslint-disable-next-line */}
      <a className="text-nowrap px-3 dropdown-toggle nav-link" onClick={toggleUserActions}>
        <img
          className="user-avatar rounded-circle mr-2"
          src={user.avatar}
          alt="User Avatar"
        />
        <span className="d-none d-md-inline-block">{`${user.firstName} ${user.lastName}`}</span>
      </a>
      <div className={menuClasses}>
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
      </div>
    </div>
  );
}
