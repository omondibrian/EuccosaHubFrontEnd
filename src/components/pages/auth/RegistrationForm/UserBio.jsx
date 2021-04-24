import React  from "react";
import { InputBox } from "../../../inputBox";
import { useFormik } from "formik";
import { userBioData } from "./validation.schema";
function UserBio({ submit, state, reverse ,setState}) {
  const handleSub = () => {
    if (!formik.isValidating && formik.isValid) {
      formik.setSubmitting(true);
      console.log("submitted");
      console.log("submit: ", formik.values);
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
          {state.stage >1 && (
            <button
              onClick={(e) => {
                e.preventDefault();
                reverse(state.stage);
              }}
              disabled={formik.isSubmitting}
              className=" btn btn-primary"
            >
              Back
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

export default UserBio;
