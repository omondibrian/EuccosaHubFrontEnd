import React from "react";
import { Collapse, DropdownItem } from "shards-react";
import NavItem from "../../../NavItem";
export default function Notifications({ state, toggleNotification }) {
  return (
    <NavItem className="border-right dropdown notifications">
      <Bell  notifications={2} toggleNotification={toggleNotification}/>
      <Collapse
        open={state.isNotificationVisible}
        className="dropdown-menu dropdown-menu-small"
      >
        <DropdownItem>
          <div className="notification__icon-wrapper">
            <div className="notification__icon">
              <i className="material-icons">&#xE6E1;</i>
            </div>
          </div>
          <div className="notification__content">
            <span className="notification__category">Analytics</span>
            <p>
              Your website’s active users count increased by{" "}
              <span className="text-success text-semibold">28%</span> in the
              last week. Great job!
            </p>
          </div>
        </DropdownItem>
        <DropdownItem>
          <div className="notification__icon-wrapper">
            <div className="notification__icon">
              <i className="material-icons">&#xE8D1;</i>
            </div>
          </div>
          <div className="notification__content">
            <span className="notification__category">Sales</span>
            <p>
              Last week your store’s sales count decreased by{" "}
              <span className="text-danger text-semibold">5.52%</span>. It could
              have been worse!
            </p>
          </div>
        </DropdownItem>
        <DropdownItem className="notification__all text-center">
          View all Notifications
        </DropdownItem>
      </Collapse>
    </NavItem>
  );
}

const Bell = ({ notifications,toggleNotification }) => {
  const handleClick = (e)=>{
    e.preventDefault()
    toggleNotification()
  }
  return (
    <a  href='/'onClick={handleClick}  className="nav-link-icon text-center nav-link">
      <div className="nav-link-icon__wrapper">
        <i className="material-icons">&#xE7F4;</i>
        <span className="badge badge-danger badge-pill">{notifications}</span>
      </div>
    </a>
  );
};
