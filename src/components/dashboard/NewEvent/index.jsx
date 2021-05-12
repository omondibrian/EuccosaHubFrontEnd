import React from "react";
import PageTitle from "../../pageTitle";
import Editor from "../../AddNewEvent/Editor";
import SidebarActions from "../../AddNewEvent/SideBarActions";
import SidebarCategories from "../../AddNewEvent/SideBarCategory";

const AddNewEvent = () => {
  const [newEvent, setEvent] = React.useState({});
  const handleChange = (e) => {
    setEvent({
      ...newEvent,
      [e.target.name]: e.target.value,
    });
    console.log(newEvent);
  };
  //handle the selected file to be uploaded to the backend api
  const handleFileSelected = (event) => {
    setEvent({ ...newEvent, pictorials: event.target.files });
    console.log(newEvent);
  };
  const handleSubmit = () => {
    console.log(newEvent);
  };
  return (
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
          <Editor
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleFile={handleFileSelected}
          />
        </div>

        {/* Sidebar Widgets */}
        <div className="col-lg-3 col-md-12">
          <SidebarCategories />
          <SidebarActions />
        </div>
      </div>
    </div>
  );
};

export default AddNewEvent;
