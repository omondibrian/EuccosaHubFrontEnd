import React from "react";
import { useDispatch } from "react-redux";
import {
  logOutUser,
  clearLocalStorage,
} from "../../../state/slices/Application";

/**
 * clear user local storage and logs out user and redirect him/her to home page
 */
function Logout(props) {
  const dispatch = useDispatch();
  dispatch(logOutUser());
  clearLocalStorage();
  props.history.push("/");

  return <div>You have been logged out</div>;
}

export default Logout;
