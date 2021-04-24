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
import CreateDefaultProfile from "../CreateProfilePic";
import { useSelector, useDispatch } from "react-redux";
import style from "./index.module.css"

function UserBio() {
  const state = useSelector(getRegistrationState);
  const dispatch = useDispatch();

  const handleSub = () => {
    if (!formik.isValidating && formik.isValid) {
      formik.setSubmitting(true);
      console.log("submitted");
      console.log("submit: ", formik.values);
      const profile = CreateDefaultProfile(
        formik.values.firstName[0] + formik.values.lastName[0]
      );
      dispatch(
        setBioData({
          firstName: formik.values.firstName,
          lastName: formik.values.lastName,
          Email: formik.values.Email,
          profilePic: profile,
        })
      );
      dispatch(forward({ stage: state.stage + 1 }));
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
        <label htmlFor="fName">First Name</label>
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
        <label htmlFor="sName">Second Name</label>
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
        <label htmlFor="email">Email</label>
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

          <Button className=" btn_light invisible">
            Back
            </Button>

          <Button>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserBio;
