import React, { useState } from "react";
import styles from "./Auth.module.css";
import { InputBox } from "../../inputBox";
import { Button } from "../../button";
import BackGround from "../../background";
import { Github, Google } from "../../vectors/Vectors";
import Footer from "../../footer/Footer";
import { login } from "../../../services/auth.service";
import {useHistory} from "react-router-dom"

function Login(props) {
  const [state, setState] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    const data = login(state);
   
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
              href="http://localhost:3000/auth/google"
              className={styles.social_auth__icon}
              title="login with google"
            >
              <Google />
            </a>
            <a
              title="login with github"
              href="http://localhost:3000/auth/github"
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
