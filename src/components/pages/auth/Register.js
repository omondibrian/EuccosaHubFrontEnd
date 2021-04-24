import React, { useState } from "react";
import styles from "./Auth.module.css";
import BackGround from "../../background";
import { Github, Google } from "../../vectors/Vectors";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import createDefaultProfilePic from "./CreateProfilePic";
import UserBio from "./RegistrationForm/UserBio";
import AdditionalInfo from "./RegistrationForm/AdditionalInfo";
import AddressInfo from "./RegistrationForm/UserAddress";


function Register() {
  const [registrationState, setRegistrationState] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    street: "",
    city: "",
    country: "",
    regNumber: "",
    startDate: "",
    completionDate: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    google_id: "",
    profilePic: "",
    stage: 2,
  });

  const submit = (state) => {
    console.log(state)
    const img = createDefaultProfilePic(
      registrationState.firstName[0] + registrationState.lastName[0]
    )
    setRegistrationState({
      ...registrationState,
      ...state,
      profilePic: img
    });

    console.log(registrationState);
    forward(registrationState.stage);
    
  };
  const forward = (stage) => {
    setRegistrationState({
      ...registrationState,
      stage: stage + 1,
    });
  };

  const reverse = (stage) => {
    setRegistrationState({
      ...registrationState,
      stage: stage - 1,
    });
  };

  switch (registrationState.stage) {
    case 1:
      return (
        <RegistrationWrapper state={registrationState}>
          <UserBio
            submit={submit}
            state={registrationState}
            forward={forward}
            reverse={reverse}
            setState={setRegistrationState}
          />
        </RegistrationWrapper>
      );
    case 2:
      return (
        <RegistrationWrapper state={registrationState}>
          <AdditionalInfo
            submit={submit}
            state={registrationState}
            forward={forward}
            reverse={reverse}
            setState={setRegistrationState}
          />
        </RegistrationWrapper>
      );
    case 3:
      return (
        <RegistrationWrapper state={registrationState}>
          <AddressInfo
            submit={submit}
            forward={forward}
            reverse={reverse}
            state={registrationState}
            setState={setRegistrationState}
          />
        </RegistrationWrapper>
      );
    default:
      break;
  }
}

export default Register;

const RegistrationWrapper = ({ children,state }) => {
  return (
    <BackGround>
      <div className={styles.auth}>
        <div className={styles.glass_form}>
          <h2 className={styles.header}>Register</h2>
          <div className={styles.form_step}>
            <div className={styles.container}>
              <ul className={styles.progressbar}>
                <li className={state.stage>1? styles.active : ""}>Step 1</li>
                <li className={state.stage>2? styles.active : ""}>Step 2</li>
                <li >Step 3</li>
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
