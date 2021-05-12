import React from "react";
import DefaultLayout from "./layout/default";
import UserProfile from "./userProfile";
import { Route } from "react-router-dom";
import DashboardStats from "./statsOverview";
import AddNewEvent from "./NewEvent";
import Users from "./Users";

const defaultLayoutProps = {
  noNavbar: false,
  noFooter: false,
};

export default function DashBoard() {
  return (
    <div className="dashboard">
      <DefaultLayout {...defaultLayoutProps}>
        <Route exact path="/dashboard" render={() => <DashboardStats />} />
        <Route path="/dashboard/user-profile" render={() => <UserProfile />} />
        <Route path="/dashboard/add-new-event" render={() => <AddNewEvent />} />
        <Route path="/dashboard/users" render={() => <Users />} />
      </DefaultLayout>
    </div>
  );
}
