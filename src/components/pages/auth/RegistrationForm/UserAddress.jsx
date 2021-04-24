import React from "react";
import { InputBox } from "../../../inputBox";
import { useFormik } from "formik";
import { AddressInfo } from "./validation.schema";
import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.css";
import { getState } from "../../../../state/slices/user";
import {
  getRegistrationState,
  reverse,
  setAddressDetails,
  RegisterNewUser
} from "../../../../state/slices/registration";
import { Button } from "../../../button/index"

function UserAddress() {
  const state = useSelector(getRegistrationState);
  const { user } = useSelector(getState);
  const dispatch = useDispatch();

  const handleSub = () => {
    if (!formik.isValidating && formik.isValid) {
      formik.setSubmitting(true);
      console.log("submitted");
      console.log("submit: ", formik.values);
      dispatch(
        setAddressDetails({
          street: formik.values.street,
          city: formik.values.city,
          country: formik.values.country,
        })
      );
      dispatch(RegisterNewUser(state));
      // dispatch(forward({ stage: state.stage + 1 }));
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
            <small className={styles.text_danger}>{formik.errors.street}</small>
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
            <small className={styles.text_danger}>{formik.errors.city}</small>
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
            className={styles.formControl}
          >
            <option>Choose...</option>
            {user.countries.map((con) => {
              return <option key={con.id}>{con.name}</option>;
            })}
            <option>...</option>
          </select>
          {formik.touched.country && formik.errors.country ? (
            <small className={styles.text_danger}>{formik.errors.country}</small>
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
              dispatch(reverse({ stage: state.stage - 1 }));
            }}
            className=" btn_light"
          >
            Back
            </Button>

          <Button
            type="submit"
          >
            Finish
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserAddress;
