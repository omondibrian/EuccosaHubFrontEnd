import React from "react";
import style from "./dropdown.module.css";
import { Link } from "react-router-dom";

function DropDown({ user }) {
  return (
    <div className={style.dropdown}>
      <button className={style.dropbtn}>
        Account
        <span
          className="material-icons"
          style={{ color: "inherit", fontSize: "inherit" }}
        >
          expand_more
        </span>
      </button>
      <div className={style.dropdown_content}>
        {user ? (
          <>
            <Link to="/dashboard/user-profile" className={style.dropdown__link}>
              <i className="material-icons">info_outline</i>
              Dashboard
            </Link>
            <Link to="/logout" className={style.dropdown__link}>
              <i className="material-icons">exit_to_app</i>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className={style.dropdown__link}>
              <i className="material-icons">login</i>
              Login
            </Link>
            <Link to="/register" className={style.dropdown__link}>
              <i className="material-icons">app_registration</i>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default DropDown;
