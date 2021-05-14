import React from "react";
import { InputBox } from "../../../inputBox";
import { useFormik } from "formik";
import { userBioData } from "./validation.schema";
import { Button } from "../../../button/index"
import {
  getRegistrationState,
  forward,
  setBioData,

} from "../../../../state/slices/registration";
import { useSelector, useDispatch } from "react-redux";
import style from "./index.module.css"
import { CSSTransition } from "react-transition-group"


function UserBio() {
  const state = useSelector(getRegistrationState);
  const dispatch = useDispatch();

  const handleSub = async () => {
    if (!formik.isValidating && formik.isValid) {
      formik.setSubmitting(true);
      dispatch(
        setBioData({
          firstName: formik.values.firstName,
          lastName: formik.values.lastName,
          email: formik.values.email,
          regNumber: formik.values.regNumber,

        })
      );
      dispatch(forward({ stage: 2 }));
      formik.setSubmitting(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      regNumber: state.regNumber,
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
    },
    onSubmit: handleSub,
    validationSchema: userBioData,
  });
  return (
    <CSSTransition classNames="fade" in={state.stage === 1} unmountOnExit timeout={200}>
      <div >
        <form onSubmit={formik.handleSubmit}>
          {/* first name */}
          <div>
            <label htmlFor="fName">First Name <sup className={style.red}>*</sup></label>
            <InputBox
              id="fName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder="First name"
              name="firstName"
              type="text"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <small className={style.text_danger}>{formik.errors.firstName}</small>
            ) : null}
          </div>
          {/* last name */}
          <div>
            <label htmlFor="sName">Last Name <sup className={style.red}>*</sup></label>
            <InputBox
              id="sName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="Last name"
              name="lastName"
              type="text"
            />

            {formik.touched.lastName && formik.errors.lastName ? (
              <small className={style.text_danger}>{formik.errors.lastName}</small>
            ) : null}
          </div>
          {/* email */}
          <div>
            <label htmlFor="email">email <sup className={style.red}>*</sup></label>
            <InputBox
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="JohnDoe@test.com"
              name="email"
              type="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <small className={style.text_danger}>{formik.errors.email}</small>
            ) : null}
          </div>
          {/* reg number */}
          <div>
            <label style={{ display: "block" }} htmlFor="regNumber">
              Registration Number <sup className={style.red}>*</sup>
            </label>
            <InputBox
              value={formik.values.regNumber}
              onChange={formik.handleChange}
              placeholder="Registration Number"
              name="regNumber"
              type="text"
            />

            {formik.touched.regNumber && formik.errors.regNumber ? (
              <small className="text-danger">{formik.errors.regNumber}</small>
            ) : null}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >

            <Button className="btn_light invisible">
              Back
            </Button>

            <Button type="submit">
              Next
          </Button>
          </div>
        </form>
      </div>
    </CSSTransition>
  );
}

export default UserBio;
