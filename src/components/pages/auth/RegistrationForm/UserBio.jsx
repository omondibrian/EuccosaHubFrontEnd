import React  from "react";
import { InputBox } from "../../../inputBox";
import { useFormik } from "formik";
import { userBioData } from "./validation.schema";
import {Button} from "../../../button/index"
function UserBio({ submit, state, reverse ,setState}) {
  const handleSub = () => {
    if (!formik.isValidating && formik.isValid) {
      formik.setSubmitting(true);
      setState({
        
      })
      submit(formik.values);
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
          <InputBox
            value={formik.values.firstName}
            onChange={formik.handleChange}
            placeholder="First name"
            name="firstName"
            type="text"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <small className="text-danger">{formik.errors.firstName}</small>
          ) : null}
        </div>
        <div>
          <InputBox
            value={formik.values.lastName}
            onChange={formik.handleChange}
            placeholder="Last name"
            name="lastName"
            type="text"
          />

          {formik.touched.lastName && formik.errors.lastName ? (
            <small className="text-danger">{formik.errors.lastName}</small>
          ) : null}
        </div>
        <div>
          <InputBox
            value={formik.values.Email}
            onChange={formik.handleChange}
            placeholder="JohnDoe@test.com"
            name="Email"
            type="email"
          />
          {formik.touched.Email && formik.errors.Email ? (
            <small className="text-danger">{formik.errors.Email}</small>
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
              className=" btn_light invisible"
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

export default UserBio;
