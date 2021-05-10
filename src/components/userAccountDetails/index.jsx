import React from "react";
import "./userAccountDetails.css";
import { useFormik } from "formik";
import DatePicker, { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-GB";
import "react-datepicker/dist/react-datepicker.css";
import { formValidationSchema } from "./validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { Ellipsis } from "../loader"
import { updateProfile } from "../../services/auth.service"
import { getState } from "../../state/slices/user";
import { createFlushMessage, getApplicationState } from "../../state/slices/Application";
registerLocale("en", en);

const UserAccountDetails = () => {
  const { user } = useSelector(getState);
  const { application } = useSelector(getApplicationState);
  const dispatch = useDispatch()
  const initialState = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    street: user.Address.street,
    city: user.Address.city,
    country: user.Address.country,
    testimonial: user.testimonial,
    phoneNumber: user.phoneNumber,
    startDate: user.startDate,
    completionDate: user.completionDate,
  };

  const handleSub = async () => {
    if (!formik.isValidating && formik.isValid) {
      formik.setSubmitting(true);
      let updatedFields = getUpdatedUserField(user, formik.values)
      updatedFields.id = application.userID
      const result = await updateProfile(updatedFields)
      dispatch(
        createFlushMessage({
          className: "alert-success",
          message: "Your profile has been updated",
        }))
      formik.isSubmitting(false)
    }
  };
  const formik = useFormik({
    initialValues: { ...initialState },
    onSubmit: handleSub,
    validationSchema: formValidationSchema,
  });

  return (
    <div className="card mb-4">
      <div className="card-header border-bottom">
        <h6 className="m-0">{user.title}</h6>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item p-3">
          <div className="row">
            <div className="col-12">
              <form onSubmit={formik.handleSubmit}>
                <div className="row form-group">
                  {/* First Name */}
                  <div className="col-md-6 form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <small className="text-danger">
                        {formik.errors.firstName}
                      </small>
                    ) : null}
                  </div>
                  {/* Last Name */}
                  <div className="col-md-6 form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      className="form-control"
                      placeholder="Last Name"
                      id="lastName"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <small className="text-danger">
                        {formik.errors.lastName}
                      </small>
                    ) : null}
                  </div>
                </div>
                <div className="row form-group">
                  {/* email */}
                  <div className="col-md-6 form-group">
                    <label htmlFor="feemail">email</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="email Address"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      autoComplete="email"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <small className="text-danger">
                        {formik.errors.email}
                      </small>
                    ) : null}
                  </div>

                  <div className="col-md-6 form-group">
                    <label htmlFor="phoneNumber">PhoneNumber</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="+2547123456"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      autoComplete="current-phoneNumber"
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                      <small className="text-danger">
                        {formik.errors.phoneNumber}
                      </small>
                    ) : null}
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-6 form-group">
                    <label style={{ display: "block" }} htmlFor="startDate">
                      Start Date
                    </label>
                    <DatePicker
                      className="form-control"
                      locale="en"
                      name="startDate"
                      dateFormat="MM/yyyy"
                      placeholderText="12/2020"
                      showMonthYearPicker
                      showFullMonthYearPicker
                      selected={formik.values.startDate}
                      onSelect={() => console.log("day changed")} //when day is clicked
                      onChange={(val) => formik.setFieldValue("startDate", val)} //only when value has changed
                    />
                    {formik.touched.startDate && formik.errors.startDate ? (
                      <small className="text-danger">
                        {formik.errors.startDate}
                      </small>
                    ) : null}
                  </div>

                  <div className="col-6 form-group">
                    <label
                      style={{ display: "block" }}
                      htmlFor="completionDate"
                    >
                      Completion Date
                    </label>
                    <DatePicker
                      className={"form-control "}
                      locale="en"
                      dateFormat="MM/yyyy"
                      placeholderText="12/2020"
                      showMonthYearPicker
                      showFullMonthYearPicker
                      selected={formik.values.completionDate}
                      onChange={(val) =>
                        formik.setFieldValue("completionDate", val)
                      } //only when value has changed
                    />
                    {formik.touched.completionDate &&
                      formik.errors.completionDate ? (
                      <small className="text-danger">
                        {formik.errors.completionDate}
                      </small>
                    ) : null}
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-4 form-group">
                    <label htmlFor="street">street</label>
                    <input
                      className="form-control"
                      id="street"
                      name="street"
                      value={formik.values.street}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.street && formik.errors.street ? (
                      <small className="text-danger">
                        {formik.errors.street}
                      </small>
                    ) : null}
                  </div>
                  {/* City */}
                  <div className="col-md-4 form-group">
                    <label htmlFor="city">City</label>
                    <input
                      className="form-control"
                      id="city"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.city && formik.errors.city ? (
                      <small className="text-danger">
                        {formik.errors.city}
                      </small>
                    ) : null}
                  </div>
                  {/* country */}
                  <div className="col-md-4 form-group">
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
                      <small className="text-danger">
                        {formik.errors.country}
                      </small>
                    ) : null}
                  </div>
                </div>
                <div className="form-group">
                  {/* Description */}
                  <div className="form-group">
                    <label htmlFor="testimonial">Testimonial</label>
                    <textarea
                      id="testimonial"
                      onChange={formik.handleChange}
                      rows="5"
                      value={formik.values.testimonial}
                      className="form-control"
                    />
                    {formik.touched.testimonial && formik.errors.testimonial ? (
                      <small className="text-danger">
                        {formik.errors.testimonial}
                      </small>
                    ) : null}
                  </div>
                </div>
                <button
                  // disabled={formik.isSubmitting}
                  type="submit"
                  className="btn btn-primary"

                >
                  {formik.isSubmitting ? <Ellipsis text="updating" />
                    : "Update Account"}
                </button>
              </form>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserAccountDetails;



const getUpdatedUserField = (initialState, state) => {
  let changedState = {
    id: "",
    token: "",
    payload: [],
  };
  const addressFields = ['city', 'country', 'street']
  let addressObj = {}

  for (const stateProp in state) {
    if (Object.hasOwnProperty.call(state, stateProp)) {
      const statePropValue = state[stateProp];
      if ((statePropValue !== initialState[stateProp]) && !addressFields.includes(stateProp)) {
        changedState.payload.push({
          field: stateProp,
          value: statePropValue.toString() || statePropValue,
        });
      } else if (addressFields.includes(stateProp)) {
        if (statePropValue !== initialState.Address[stateProp]) {
          addressObj[stateProp] = statePropValue
        }
      }
    }
  }
  if (Object.entries(addressObj).length > 0) {
    changedState.payload.push({
      field: 'Address', value: addressObj
    })
  }


  return changedState;
}
