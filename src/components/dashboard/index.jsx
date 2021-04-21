import React from "react";
import DefaultLayout from "./layout/default";
import UserProfile from "./userProfile";
import { Route } from "react-router-dom";
import DashboardStats from './statsOverview'
const defaultLayoutProps = {
  noNavbar: false,
  noFooter: false,
};

export default function DashBoard() {
  
  return (
    <div className="dashboard">
      <DefaultLayout {...defaultLayoutProps}>
        <Route path="/dashboard/userProfile" render={() => <UserProfile />} />

        <Route exact={true} path="/dashboard" render={() => <DashboardStats />} />
      </DefaultLayout>
    </div>
  );
}
