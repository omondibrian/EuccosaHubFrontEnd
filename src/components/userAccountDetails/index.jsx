import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
} from "shards-react";
import { UserContext } from "../../state/context/userContext";
import "./userAccountDetails.css";
import "shards-react/components/datepicker/DatePicker.css";
import { useFormik } from "formik";
import DatePicker, { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-GB";
import "react-datepicker/dist/react-datepicker.css";
import { formValidationSchema } from "./validationSchema";
import { UPDATE_PROFILE } from "../../state/Actions";
registerLocale("en", en);

const UserAccountDetails = () => {
  const { state, dispatch } = useContext(UserContext);
  const {
    title,
    firstName,
    lastName,
    Email,
    Address,
    testimonial,
    phoneNumber,
    startDate,
    completionDate,
    countries,
  } = state;

  let initialState = {
    firstName: "",
    lastName: "",
    Email: "",
    street: "",
    city: "",
    country: "",
    testimonial: "",
    phoneNumber: "",
    startDate: "",
    completionDate: "",
  };

  initialState = {
    firstName,
    lastName,
    Email,
    street: Address.street,
    city: Address.city,
    country: Address.country,
    testimonial,
    phoneNumber,
    startDate,
    completionDate,
  };
  const handleSub =() => {
    if (!formik.isValidating && formik.isValid) {
     
      formik.setSubmitting(true);
      // make async call
      setTimeout(() => {
        console.log("submitted");
        console.log("submit: ", formik.values);
        dispatch({
          type: UPDATE_PROFILE,
          payload: { ...formik.values },
        });
        formik.setSubmitting(false);
      }, 5000);
    }
  }
  const formik = useFormik({
    initialValues: { ...initialState },
    onSubmit: handleSub,
    validationSchema: formValidationSchema,
  });

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form
               onSubmit={formik.handleSubmit}
              >
                <Row form>
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <FormInput
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
                  </Col>
                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <FormInput
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
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feEmail">Email</label>
                    <FormInput
                      type="email"
                      placeholder="Email Address"
                      id="Email"
                      name="Email"
                      value={formik.values.Email}
                      onChange={formik.handleChange}
                      autoComplete="email"
                    />
                    {formik.touched.Email && formik.errors.Email ? (
                      <small className="text-danger">
                        {formik.errors.Email}
                      </small>
                    ) : null}
                  </Col>

                  <Col md="6" className="form-group">
                    <label htmlFor="phoneNumber">PhoneNumber</label>
                    <FormInput
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
                  </Col>
                </Row>
                <Row form>
                  <Col md="6" lg="6" className="form-group">
                    <label style={{ display: "block" }} htmlFor="startDate">
                      Start Date
                    </label>
                    <DatePicker
                      className="form-control"
                      locale="en"
                      name="startDate"
                      dateFormat="MM/dd/yyyy"
                      selected={formik.values.startDate}
                      onSelect={() => console.log("day changed")} //when day is clicked
                      onChange={(val) => formik.setFieldValue("startDate", val)} //only when value has changed
                    />
                    {formik.touched.startDate && formik.errors.startDate ? (
                      <small className="text-danger">
                        {formik.errors.startDate}
                      </small>
                    ) : null}
                  </Col>

                  <Col md="6" lg="6" className="form-group">
                    <label
                      style={{ display: "block" }}
                      htmlFor="completionDate"
                    >
                      Completion Date
                    </label>
                    <DatePicker
                      className={"form-control "}
                      locale="en"
                      name="completionDate"
                      dateFormat="MM/dd/yyyy"
                      selected={formik.values.completionDate}
                      onSelect={() => console.log("day changed")} //when day is clicked
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
                  </Col>
                </Row>
                <Row form>
                  <Col md="2" className="form-group">
                    <label htmlFor="street">street</label>
                    <FormInput
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
                  </Col>
                  {/* City */}
                  <Col md="6" className="form-group">
                    <label htmlFor="city">City</label>
                    <FormInput
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
                  </Col>
                  {/* country */}
                  <Col md="4" className="form-group">
                    <label htmlFor="country">country</label>
                    <FormSelect
                      id="country"
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      defaultValue={formik.values.country}
                    >
                      <option>Choose...</option>
                      {countries.map((con) => {
                        return <option key={con.id}>{con.name}</option>;
                      })}
                      <option>...</option>
                    </FormSelect>
                    {formik.touched.country && formik.errors.country ? (
                      <small className="text-danger">
                        {formik.errors.country}
                      </small>
                    ) : null}
                  </Col>
                </Row>
                <Row form>
                  {/* Description */}
                  <Col md="12" className="form-group">
                    <label htmlFor="testimonial">Testimonial</label>
                    <FormTextarea
                      id="testimonial"
                      onChange={formik.handleChange}
                      rows="5"
                      value={formik.values.testimonial}
                    />
                    {formik.touched.testimonial && formik.errors.testimonial ? (
                      <small className="text-danger">
                        {formik.errors.testimonial}
                      </small>
                    ) : null}
                  </Col>
                </Row>
                <Button
                  disabled={formik.isSubmitting}
                  type="submit"
                  theme={formik.isSubmitting ? "btn btn-secondary" : "accent"}
                >
                  Update Account
                </Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default UserAccountDetails;
