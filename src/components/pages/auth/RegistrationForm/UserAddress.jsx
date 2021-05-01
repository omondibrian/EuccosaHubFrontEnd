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
  RegisterNewUser,
  forward
} from "../../../../state/slices/registration";
import { Button } from "../../../button/index"
import { CSSTransition } from "react-transition-group"


function UserAddress() {
  const state = useSelector(getRegistrationState);
  const { user } = useSelector(getState);
  const dispatch = useDispatch();

  const handleSub = () => {
    if (!formik.isValidating && formik.isValid) {
      formik.setSubmitting(true);
      dispatch(
        setAddressDetails({
          street: formik.values.street,
          city: formik.values.city,
          country: formik.values.country,
        })
      );

      dispatch(RegisterNewUser(state));
      dispatch(forward({ stage: 4 }));
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
    <CSSTransition classNames="fade" in={state.stage === 3} unmountOnExit timeout={200}>
      <div >
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
                dispatch(reverse({ stage: 2 }));
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
    </CSSTransition>
  );
}

export default UserAddress;
