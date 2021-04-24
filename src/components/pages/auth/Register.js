import React, { useEffect } from "react";
import styles from "./Auth.module.css";
import { InputBox } from "../../inputBox";
import { Button } from "../../button";
import BackGround from "../../background";
import { Github, Google } from "../../vectors/Vectors";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import createDefaultProfilePic from "./CreateProfilePic";

function Register() {
  const handleChange = () => {};
  const handleSubmit = () => {};
  // const url = createDefaultProfilePic("OJ")

  return (
    <BackGround>
      <div className={styles.auth}>
        <div className={styles.glass_form}>
          <h2 className={styles.header}>Register</h2>
          <div className={styles.form_step}>
            
          </div>
          <form className={styles.auth__form} onSubmit={handleSubmit}>
            <div>
              <InputBox
                onChange={handleChange}
                placeholder="first name"
                name="firstName"
                required={true}
                type="text"
              />
              {/* {state.errors.email && (
                <small className={styles.errors}>{state.errors.email}</small>
              )} */}
            </div>
            <div>
              <InputBox
                onChange={handleChange}
                placeholder="last name"
                name="lastName"
                required={true}
                type="text"
              />
              {/* {state.errors.email && (
                <small className={styles.errors}>{state.errors.email}</small>
              )} */}
            </div>
            <div>
              <InputBox
                onChange={handleChange}
                placeholder="email"
                name="email"
                required={true}
                type="email"
              />
              {/* {state.errors.email && (
                <small className={styles.errors}>{state.errors.email}</small>
              )} */}
            </div>
            <div>
              <InputBox
                onChange={handleChange}
                placeholder="phone number"
                name="phoneNumber"
                type="text"
                required={true}
              />
            </div>
            <div>
              <InputBox
                onChange={handleChange}
                placeholder="password"
                name="password"
                type="password"
                required={true}
              />
            </div>
            <div>
              <InputBox
                onChange={handleChange}
                placeholder="confirm password"
                name="passwordConfirm"
                type="password"
                required={true}
              />
            </div>
            <Button name="REGISTER" />
          </form>
          <span className={styles.auth_alt}>OR</span>
          <div className={styles.social_auth}>
            <a
              href="http://euccosabackend.ddns.net:3001/auth/google"
              className={styles.social_auth__icon}
              title="register with google"
            >
              Register with <Google />
            </a>
            <a
              title="Register with github"
              href="http://euccosabackend.ddns.net:3001/auth/github"
              className={styles.social_auth__icon}
            >
              Register with <Github />
            </a>
          </div>
          <strong>
            Have an account? <Link to="/login">Login</Link>
          </strong>
        </div>
      </div>
      <Footer />
    </BackGround>
  );
}

export default Register;
