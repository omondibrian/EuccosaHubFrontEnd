import React from "react";
import PageTitle from "../pageTitle";
import Editor from "../AddNewEvent/Editor";
import { EventsContextProvider } from "./newEventProvider";
import SidebarActions from "../AddNewEvent/SideBarActions";
import SidebarCategories from "../AddNewEvent/SideBarCategory";

const AddNewEvent = (props) => {
  return (
    <EventsContextProvider state={{ ...props.location.state }}>
      <div className="container-fulid main-content-container px-3 pb-4">
        {/* Page Header */}
        <div className="row page-header py-4">
          <PageTitle
            sm="4"
            title={
              props.location.state ? props.location.state.title : props.title
            }
            subtitle={
              props.location.state
                ? props.location.state.subtitle
                : props.subtitle
            }
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
