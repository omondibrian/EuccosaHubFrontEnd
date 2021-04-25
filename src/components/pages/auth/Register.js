import React, { useState } from "react";
import styles from "./Auth.module.css";
import BackGround from "../../background";
import { Github, Google } from "../../vectors/Vectors";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import "./transition.css";
import UserBio from "./RegistrationForm/UserBio";
import AdditionalInfo from "./RegistrationForm/AdditionalInfo";
import AddressInfo from "./RegistrationForm/UserAddress";
import { useSelector } from "react-redux";
import { getStage } from "../../../state/slices/registration";


const Register = () => {
  const stage = useSelector(getStage);

  return (
    <BackGround>
      <div className={styles.auth}>
        <div className={styles.glass_form}>
          <h2 className={styles.header}>Register</h2>
          <div className={styles.form_step} id="top">
            <div className={styles.container}>
              <ul className={styles.progressbar}>
                <li className={stage > 1 ? styles.active : ""}>Step 1</li>
                <li className={stage > 2 ? styles.active : ""}>Step 2</li>
                <li>Step 3</li>
              </ul>
            </div>
          </div>
        {/* multiple step  form  */}
          <div className={styles.multistep_form}>
            <UserBio />
            <AdditionalInfo />
            <AddressInfo />
          </div>

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
export default Register;
