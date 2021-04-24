import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerNewUser } from "../../services/auth.service";

export const RegisterNewUser = createAsyncThunk(
  "registration/RegisterNewUser",
  async (state) => {
    registerNewUser(state);
  }
);

const registration = createSlice({
  name: "registration",
  initialState: {
    firstName: "",
    lastName: "",
    Email: "",
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
    isRegistered:false,
    loading:false
  },
  reducers: {
    setBioData: (state, action) => {
      state.Email = action.payload.Email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.profilePic = action.payload.profilePic;
      state.google_id = action.payload.google_id;
    },
    forward: (state, action) => {
      state.stage = action.payload.stage;
    },
    reverse: (state, action) => {
      state.stage = action.payload.stage;
    },
    setUserAdditionalInfo: (state, action) => {
      state.regNumber = action.payload.regNumber;
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
    },
  },
  extraReducers: {
    [RegisterNewUser.pending]:(state,action)=>{
      state.loading = true
    },
    [RegisterNewUser.fulfilled]:(state,action)=>{
      state.loading =false
      state.isRegistered=true
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
