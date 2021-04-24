import React, { useState } from "react";
import styles from "./Auth.module.css";

import BackGround from "../../background";
import { Github, Google } from "../../vectors/Vectors";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";

import UserBio from "./RegistrationForm/UserBio";
import AdditionalInfo from "./RegistrationForm/AdditionalInfo";
import AddressInfo from "./RegistrationForm/UserAddress";
import { useSelector } from "react-redux";
import { getStage } from "../../../state/slices/registration";
function Register() {
  const stage = useSelector(getStage);

   switch (stage) {
    case 1:
      return (
        <RegistrationWrapper stage={stage}>
          <UserBio />
        </RegistrationWrapper>
      );
    case 2:
      return (
        <RegistrationWrapper stage={stage}>
          <AdditionalInfo />
        </RegistrationWrapper>
      );
    case 3:
      return (
        <RegistrationWrapper stage={stage}>
          <AddressInfo />
        </RegistrationWrapper>
      );
    default:
      break;
  }
}

export default Register;

const RegistrationWrapper = ({ children, stage }) => {
  return (
    <BackGround>
      <div className={styles.auth}>
        <div className={styles.glass_form}>
          <h2 className={styles.header}>Register</h2>
          <div className={styles.form_step}>
            <div className={styles.container}>
              <ul className={styles.progressbar}>
                <li className={stage > 1 ? styles.active : ""}>Step 1</li>
                <li className={stage > 2 ? styles.active : ""}>Step 2</li>
                <li>Step 3</li>
              </ul>
            </div>
          </div>
          {children}

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
};
