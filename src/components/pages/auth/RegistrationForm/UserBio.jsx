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

  const handleSub =async () => {
    if (!formik.isValidating && formik.isValid) {
      formik.setSubmitting(true); 
      dispatch(
        setBioData({
          firstName: formik.values.firstName,
          lastName: formik.values.lastName,
          Email: formik.values.Email,
          
        })
      );
      dispatch(forward({ stage: 2 }));
      console.log(state);
      formik.setSubmitting(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      firstName: state.firstName,
      lastName: state.lastName,
      Email: state.Email,
    },
    onSubmit: handleSub,
    validationSchema: userBioData,
  });
  return (
    <CSSTransition classNames="fade" in={state.stage === 1} unmountOnExit timeout={200}>
      <div >
        <form onSubmit={formik.handleSubmit}>
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
          <div>
            <label htmlFor="sName">Second Name <sup className={style.red}>*</sup></label>
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
          <div>
            <label htmlFor="email">Email <sup className={style.red}>*</sup></label>
            <InputBox
              id="email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              placeholder="JohnDoe@test.com"
              name="Email"
              type="email"
            />
            {formik.touched.Email && formik.errors.Email ? (
              <small className={style.text_danger}>{formik.errors.Email}</small>
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
