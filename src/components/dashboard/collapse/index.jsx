import React from "react";

function Collapse() {
  return (
    <div className="dropdown-menu dropdown-menu-small collapse" style={{}}>
      <CollapseItem
        title="Analytics"
        icon="&#xE6E1;"
        body="Your website’s active users count increased by in the last week. Great job!"
      />

      <CollapseItem
        title="Sales"
        icon="&#xE8D1;"
        body=" Last week your store’s sales count decreased by It could have been worse!"
      />

      <button className="notification__all text-center dropdown-item">
        View all Notifications
      </button>
    </div>
  );
}

export default Collapse;

function CollapseItem({ Title, body, icon }) {
  return (
    <div>
      <button className="dropdown-item">
        <div className="notification__icon-wrapper">
          <div className="notification__icon">
            <i className="material-icons">{icon}</i>
          </div>
        </div>
        <div className="notification__content">
          <span className="notification__category">{Title}</span>
          <p>{body}</p>
        </div>
      </button>
    </div>
  );
}
