import React from "react";
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
      dispatch(forward({ stage: state.stage + 1 }));
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

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label style={{ display: "block" }} htmlFor="regNumber">
            Registration Number
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
            Start Date
          </label>
          <DatePicker
            className={styles.formControl}
            locale="en"
            name="startDate"
            dateFormat="MM/dd/yyyy"
            placeholderText="MM/dd/yyyy"
            selected={formik.values.startDate}
            onSelect={() => console.log("day changed")} //when day is clicked
            onChange={(val) => formik.setFieldValue("startDate", val)} //only when value has changed
          />
          {formik.touched.startDate && formik.errors.startDate ? (
            <small className="text-danger">{formik.errors.startDate}</small>
          ) : null}
        </div>
        {/* completionDate */}
        <div>
          <label style={{ display: "block" }} htmlFor="completionDate">
            Completion Date
          </label>
          <DatePicker
            locale="en"
            className={styles.formControl}
            name="completionDate"
            dateFormat="MM/dd/yyyy"
            placeholderText="MM/dd/yyyy"
            selected={formik.values.completionDate}
            onSelect={() => console.log("day changed")} //when day is clicked
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
            phone Number
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
            Password
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
            Confirm Password
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
          {state.stage > 1 && (
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(reverse({ stage: state.stage - 1 }));
              }}
              disabled={formik.isSubmitting}
              className=" btn btn-primary"
            >
              {formik.isSubmitting ? "updating..." : "Back"}
            </button>
          )}
          <button
            disabled={formik.isSubmitting}
            type="submit"
            className="btn btn-primary"
          >
            {formik.isSubmitting ? "updating..." : "next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdditionalInfo;
