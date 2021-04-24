export default function sideBarItems() {
  return [
    {
      title: "Dashboard",
      to: "/dashboard",
      icon: "edit",
      htmlAfter: "",
    },
    {
      title: "Events",
      icon: "vertical_split",
      to: "/dashboard/Events",
    },
    {
      title: "Add New Event",
      icon: "note_add",
      to: "/dashboard/addNewEvent",
    },
    {
      title: "User Profile",
      icon: "person",
      to: "/dashboard/userProfile",
    },
    {
      title: "Modules",
      icon: "view_module",
      to: "/dashboard/modules",
    },
    {
      title: "Users",
      icon: "table_chart",
      to: "/dashboard/Users",
    },
    {
      title: "Transcations",
      icon: "error",
      to: "/dashboard/transcations",
    },
    {
      title: "Logout",
      icon: "logout",
      to: "/logout",
    },
  ];
}
