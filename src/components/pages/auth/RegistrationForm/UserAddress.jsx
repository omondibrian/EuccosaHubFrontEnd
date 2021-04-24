import React from "react";
import { InputBox } from "../../../inputBox";
import { useFormik } from "formik";
import { AddressInfo } from "./validation.schema";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import { getState } from "../../../../state/slices/user";
import { Button } from "../../../button/index"

import classNames from "classnames";

function UserAddress({ submit, state, reverse }) {
  const { user } = useSelector(getState);

  const handleSub = () => {
    if (!formik.isValidating && formik.isValid) {
      formik.setSubmitting(true);
      console.log("submitted");
      console.log("submit: ", formik.values);
      submit(formik.values);
      formik.setSubmitting(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      street: state.street,
      city: state.city,
      country: state.country,
    },
    onSubmit: handleSub,
    validationSchema: AddressInfo,
  });
  const prevBtnClass = classNames("btn_light",
    state.stage < 1 && "invisible")
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="street">street</label>
          <InputBox
            value={formik.values.street}
            onChange={formik.handleChange}
            placeholder="Street"
            name="street"
            type="text"
          />
          {formik.touched.street && formik.errors.street ? (
            <small className="text-danger">{formik.errors.street}</small>
          ) : null}
        </div>
        <div>
          <label htmlFor="city">city</label>
          <InputBox
            value={formik.values.city}
            onChange={formik.handleChange}
            placeholder="City"
            name="city"
            type="text"
          />

          {formik.touched.city && formik.errors.city ? (
            <small className="text-danger">{formik.errors.city}</small>
          ) : null}
        </div>
        {/* country */}
        <div className={styles.formGroup}>
          <label htmlFor="country">country</label>
          <select
            id="country"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            className="form-control"
          >
            <option>Choose...</option>
            {user.countries.map((con) => {
              return <option key={con.id}>{con.name}</option>;
            })}
            <option>...</option>
          </select>
          {formik.touched.country && formik.errors.country ? (
            <small className="text-danger">{formik.errors.country}</small>
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
              reverse(state.stage);
            }}
            disabled={formik.isSubmitting}
            className={prevBtnClass}
          >
            Back
            </Button>

          <Button
            disabled={formik.isSubmitting}
            type="submit"
          >
            {formik.isSubmitting ? "updating..." : "next"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserAddress;
