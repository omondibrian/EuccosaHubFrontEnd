import React, { useState, useEffect } from "react";
import styles from "./Auth.module.css";
import { InputBox } from "../../inputBox";
import { Button } from "../../button";
import BackGround from "../../background";
import { Github, Google } from "../../vectors/Vectors";
import Footer from "../../footer/Footer";
import { login } from "../../../services/auth.service";
import { useDispatch } from "react-redux";
import {
  setFlushMessage,
  toggleIsUserLoggedIn,
} from "../../../state/slices/Application";
import { useLocation } from "react-router-dom";

function Login(props) {
  const [state, setState] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  let error;
  const query = new URLSearchParams(useLocation().search);
  const handleClick = async () => {
    const result = await login(state);
    if (result.status === 200 && result.isLogedIn === true) {
      dispatch(toggleIsUserLoggedIn());
      dispatch(
        setFlushMessage({
          className: "alert-success",
          message: `Welcome  ${state.email}`,
        })
      );
      const next = query.get("next") || "/";
      props.history.push(next);
    } else {
      error = result.message;
    }
  };

  return (
    <BackGround>
      <div className={styles.auth}>
        <div className={styles.glass_form}>
          <h2 className={styles.header}>Login</h2>
          <form className={styles.auth__form} onSubmit={handleSubmit}>
            <InputBox
              onChange={handleChange}
              value={state.username}
              placeHolder="email"
              name="email"
            />
            <InputBox
              onChange={handleChange}
              value={state.password}
              placeHolder="password"
              name="password"
              type="password"
            />
            <Button onclick={handleClick} name="submit" />
          </form>
          <span className={styles.auth_alt}>Login With</span>
          <div className={styles.social_auth}>
            <a
              href="http://euccosabackend.ddns.net:3001/auth/google"
              className={styles.social_auth__icon}
              title="login with google"
            >
              <Google />
            </a>
            <a
              title="login with github"
              href="http://euccosabackend.ddns.net:3001/auth/github"
              className={styles.social_auth__icon}
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </BackGround>
  );
}

export default Login;
