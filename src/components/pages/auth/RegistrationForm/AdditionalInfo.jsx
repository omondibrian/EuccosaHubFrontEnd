import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import en from "date-fns/locale/en-GB";
import styles from "./index.module.css";
import { InputBox } from "../../../inputBox";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import {
  getRegistrationState,
  forward,
  reverse,
  setUserAdditionalInfo
} from "../../../../state/slices/registration";
import { AdditionalInfo as addintionalInfoSchema } from "./validation.schema";
import { Button } from "../../../button/index"
import { CSSTransition } from "react-transition-group"

registerLocale("en", en);
function AdditionalInfo() {
  const state = useSelector(getRegistrationState);
  const dispatch = useDispatch();

  const handleSub = () => {
    if (!formik.isValidating && formik.isValid) {
      formik.setSubmitting(true);
      console.log("submitted");
      console.log("submit: ", formik.values);
      dispatch(
        setUserAdditionalInfo({
          regNumber: formik.values.regNumber,
          startDate: formik.values.startDate,
          completionDate: formik.values.completionDate,
          phoneNumber: formik.values.phoneNumber,
          password: formik.values.password,
          confirmPassword: formik.values.confirmPassword,
        })
      );
      dispatch(forward({ stage: 3 }));
      formik.setSubmitting(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      regNumber: state.regNumber,
      startDate: state.startDate,
      completionDate: state.completionDate,
      phoneNumber: state.phoneNumber,
      password: state.password,
      confirmPassword: state.confirmPassword,
    },
    onSubmit: handleSub,
    validationSchema: addintionalInfoSchema,
  });

  useEffect(() => {
    document.getElementById("root").scrollIntoView({ block: "start", behavior: "smooth" })
  }, [state.stage])

  return (
    <CSSTransition classNames="fade" in={state.stage === 2} unmountOnExit timeout={200}>
      <div >
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label style={{ display: "block" }} htmlFor="regNumber">
              Registration Number <sup className={styles.red}>*</sup>
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
          {/* startDate */}
          <div>
            <label style={{ display: "block" }} htmlFor="startDate">
              Registration Date <sup className={styles.red}>*</sup>
          </label>
            <DatePicker
              className={styles.formControl}
              locale="en"
              name="startDate"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/dd/yyyy"
              selected={formik.values.startDate}
              onChange={(val) => formik.setFieldValue("startDate", val)} //only when value has changed
            />
            {formik.touched.startDate && formik.errors.startDate ? (
              <small className="text-danger">{formik.errors.startDate}</small>
            ) : null}
          </div>
          {/* completionDate */}
          <div>
            <label style={{ display: "block" }} htmlFor="completionDate">
              Graduation Date <sup className={styles.red}>*</sup>
          </label>
            <DatePicker
              locale="en"
              className={styles.formControl}
              name="completionDate"
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/dd/yyyy"
              selected={formik.values.completionDate}
              onChange={(val) => formik.setFieldValue("completionDate", val)} //only when value has changed
            />
            {formik.touched.completionDate && formik.errors.completionDate ? (
              <small className="text-danger">
                {formik.errors.completionDate}
              </small>
            ) : null}
          </div>

          <div>
            <label style={{ display: "block" }} htmlFor="phoneNumber">
              phone Number <sup className={styles.red}>*</sup>
          </label>
            <InputBox
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              placeholder="phone number"
              name="phoneNumber"
              type="text"
            />

            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <small className="text-danger">{formik.errors.phoneNumber}</small>
            ) : null}
          </div>

          <div>
            <label style={{ display: "block" }} htmlFor="password">
              Password <sup className={styles.red}>*</sup>
          </label>
            <InputBox
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              placeholder="password"
              type="password"
            />

            {formik.touched.password && formik.errors.password ? (
              <small className="text-danger">{formik.errors.password}</small>
            ) : null}
          </div>

          <div>
            <label style={{ display: "block" }} htmlFor="password">
              Confirm Password <sup className={styles.red}>*</sup>
          </label>
            <InputBox
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              placeholder="confirm Password"
              name="confirmPassword"
              type="password"
            />

            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <small className="text-danger">
                {formik.errors.confirmPassword}
              </small>
            ) : null}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >



            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch(reverse({ stage:  1 }));
              }}
              className="btn_light"
            >
              Back
            </Button>

            <Button
              type="submit"
            >
              Next
          </Button>
          </div>
        </form>
      </div>
    </CSSTransition>
  );
}

export default AdditionalInfo;
