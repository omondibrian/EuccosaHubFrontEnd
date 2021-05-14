import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerNewUser } from "../../services/auth.service";

export const RegisterNewUser = createAsyncThunk(
  "registration/RegisterNewUser",
  async (state) => {
    const startDate = state.startDate.toString();
    const completionDate = state.completionDate.toString();
    // console.log(state)
    const res = await registerNewUser({
      ...state,
      startDate,
      completionDate,
      email: state.email,
    });
    return res;
  }
);

const registration = createSlice({
  name: "registration",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    country: "",
    regNumber: "",
    startDate: "",
    completionDate: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    google_id: "",
    profilePic: "",
    stage: 1,
    isRegistered: false,
    loading: false,
    registrationReport: "",
    isFormFillComplete: false
  },
  reducers: {
    setBioData: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.profilePic = action.payload.profilePic;
      state.google_id = action.payload.google_id;
      state.regNumber = action.payload.regNumber;
    },
    forward: (state, action) => {
      state.stage = action.payload.stage;
    },
    reverse: (state, action) => {
      state.stage = action.payload.stage;
    },
    setUserAdditionalInfo: (state, action) => {
      state.startDate = action.payload.startDate;
      state.completionDate = action.payload.completionDate;
      state.phoneNumber = action.payload.phoneNumber;
      state.password = action.payload.password;
      state.confirmPassword = action.payload.confirmPassword;
    },
    setAddressDetails: (state, action) => {
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.country = action.payload.country;
      state.isFormFillComplete = true
    },
  },
  extraReducers: {
    [RegisterNewUser.pending]: (state, action) => {
      state.loading = true;
      state.registrationReport = { message: "We are processing your registration request, please wait" }
    },
    [RegisterNewUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isRegistered = true;
      state.registrationReport = payload;
    },
    [RegisterNewUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.registrationReport = payload;
    },
  },
});
export const getStage = ({ registration }) => registration.stage;
export const getRegistrationState = ({ registration }) => registration;
export const {
  forward,
  reverse,
  setBioData,
  setUserAdditionalInfo,
  setAddressDetails,
} = registration.actions;
export default registration.reducer;
