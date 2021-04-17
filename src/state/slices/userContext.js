import React, { createContext, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";
import countries from "../../data/countries";
import AvatorImg from "../../assets/images/avatar.png";
const today = new Date();

const State = {
  countries,
  title: "Account Details",
  firstName: "Brian",
  lastName: "Omondi",
  Email: "omondibrian392@gmail.com",
  Address: {
    city: "Malindi",
    street: "Jiwe Leupe",
    country: "Kenya",
  },
  role: "Vice chairman",
  testimonial: "test testimonial",
  avatar: AvatorImg,
  phoneNumber: "+2544567890",
  startDate: today,
  completionDate: today,
  metaData: [
    {
      metaTitle: "Address",
      metaValue: `Jiwe Leupe Malindi,  Kenya `,
    },
    {
      metaTitle: "Email",
      metaValue: "omondibrian392@gmail.com ",
    },
  ],
};
export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, State);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
