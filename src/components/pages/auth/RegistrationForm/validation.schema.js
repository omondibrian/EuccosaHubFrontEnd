import * as yup from "yup";

//creating the validation schema
export const userBioData = yup.object().shape({
  firstName: yup
    .string()
    .required("Your First Name is required")
    .min(2, "Name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Your Last Name is required")
    .min(2, "Name must be at least 2 characters"),

  email: yup.string().email().required("email is a required field"),
});

export const AdditionalInfo = yup.object().shape({
  regNumber: yup.string().required("Please supply your registration Number").min(10),
  phoneNumber: yup.number().required("Please supply your phoneNumber").min(10),
  startDate: yup.string().required("please add your date of admision"),
  completionDate: yup
    .string()
    .required("please add your ExpectedGraduationDate"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      new RegExp("^[a-zA-Z0-9]{3,30}$"),
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Password doesn't match"),
    }),
});


//creating the validation schema
export const AddressInfo = yup.object().shape({
    street: yup.string().nullable(),
    city: yup.string().nullable(),
    country: yup.string().nullable(),
  });