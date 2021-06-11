import React from "react";
import PageTitle from "../pageTitle";
import Editor from "../AddNewEvent/Editor";
import { EventsContextProvider } from "./newEventProvider";
import SidebarActions from "../AddNewEvent/SideBarActions";
import SidebarCategories from "../AddNewEvent/SideBarCategory";

const AddNewEvent = () => {
  return (
    <EventsContextProvider>
      <div className="container-fulid main-content-container px-3 pb-4">
        {/* Page Header */}
        <div className="row page-header py-4">
          <PageTitle
            sm="4"
            title="Add New Event"
            subtitle="New Event"
            className="text-sm-left"
          />
        </div>

        <div className="row">
          {/* Editor */}
          <div className="col-lg-9 col-md-12">
            <Editor />
          </div>

          {/* Sidebar Widgets */}
          <div className="col-lg-3 col-md-12">
            <SidebarCategories title="Category" />
            <SidebarActions />
          </div>
        </div>
      </div>
    </EventsContextProvider>
  );
};

export default AddNewEvent;
