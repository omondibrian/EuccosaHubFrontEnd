import React from "react";
import { InputBox } from "../../../inputBox";
import { useFormik } from "formik";
import { AdditionalInfo as addintionalInfoSchema } from "./validation.schema";
import DatePicker, { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-GB";
import "react-datepicker/dist/react-datepicker.css";
import styles from './index.module.css'
registerLocale("en", en);

function AdditionalInfo() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleSub = () => {
    if (!formik.isValidating && formik.isValid) {
      formik.setSubmitting(true);
      // make async call
      setTimeout(() => {
        console.log("submitted");
        console.log("submit: ", formik.values);
        // dispatch({
        //   type: UPDATE_PROFILE,
        //   payload: { ...formik.values },
        // });
        formik.setSubmitting(false);
      }, 5000);
    }
  };
  const formik = useFormik({
    initialValues: {
      regNumber: "",
      startDate: "",
      completionDate: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
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
            name="phoneNUmber"
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
           Confirm  Password
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
          <button disabled={formik.isSubmitting} className=" btn btn-primary">
            {formik.isSubmitting ? "updating..." : "Back"}
          </button>
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
