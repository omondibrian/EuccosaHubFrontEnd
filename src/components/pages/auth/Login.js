import React, { useState } from "react";
import styles from "./Auth.module.css";
import { InputBox } from "../../inputBox";
import { Button } from "../../button";
import BackGround from "../../background";
import Footer from "../../footer/Footer";
import { login } from "../../../services/auth.service";
import { useDispatch } from "react-redux";
import {
  createFlushMessage,
  Authenticate,
} from "../../../state/slices/Application";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

/**
 * user login page
 * @param {Object<string,any>} props - react-router dom prop
 * @returns {JSX.Element}
 */
function Login(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    errors: { email: "", password: "", validation: "" },
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const query = new URLSearchParams(useLocation().search);
  /**
   * submit user login details to api
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login({
      email: state.email.toLowerCase(),
      password: state.password,
    });
    if (result.status === 200 && result.isAuthenticated) {
      dispatch(
        createFlushMessage({
          className: "alert-success",
          message: `Welcome  ${state.email}`,
        })
      );
      /**set  isAuthenticated to true, update user Id and token in application state */
      dispatch(Authenticate({ ID: result.ID, TOKEN: result.TOKEN }));
      const next = query.get("next") || "/";
      props.history.push(next);
    } else {
      setState({
        ...state,
        errors: { ...state.errors, validation: result.message },
      });
    }
  };

  return (
    <BackGround>
      <div className={styles.auth}>
        <div className={styles.glass_form}>
          <h2 className={styles.header}>Login</h2>
          <form className={styles.auth__form} onSubmit={handleSubmit}>
            {state.errors.validation && (
              <small className={styles.errors}>{state.errors.validation}</small>
            )}
            <div>
              <InputBox
                onChange={handleChange}
                value={state.email}
                placeholder="email"
                name="email"
                required={true}
                type="email"
              />
              {state.errors.email && (
                <small className={styles.errors}>{state.errors.email}</small>
              )}
            </div>
            <div>
              <InputBox
                onChange={handleChange}
                value={state.password}
                placeholder="password"
                name="password"
                type="password"
                required={true}
              />
              {state.errors.password && (
                <small className={styles.errors}>{state.errors.password}</small>
              )}
            </div>

            <Button type="submit">LOGIN</Button>
          </form>

          <strong>
            Don't have an account? <Link to="/register">Register</Link>
          </strong>
        </div>
      </div>
      <Footer />
    </BackGround>
  );
}

export default Login;
