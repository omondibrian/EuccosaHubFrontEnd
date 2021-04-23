import React from "react";
import { useDispatch } from "react-redux";
import {
  logOutUser,
  clearLocalStorage,
} from "../../../state/slices/Application";

function Logout(props) {
  const dispatch = useDispatch();
  dispatch(logOutUser());
  clearLocalStorage();
  props.history.push("/");
 
  return <div>You have been logged out</div>;
}

export default Logout;
