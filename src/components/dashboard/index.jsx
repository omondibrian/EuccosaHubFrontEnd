import React from "react";
import DefaultLayout from "./layout/default";
import UserProfile from "./userProfile";

const defaultLayoutProps = {
  noNavbar: false,
  noFooter: false,
};

export default function DashBoard() {
  return (
    <div>
      <DefaultLayout {...defaultLayoutProps}>
        <UserProfile />
      </DefaultLayout>
    </div>
  );
}
