import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchUser } from "../../services/auth.service";
import countries from "../../data/countries";
import AvatorImg from "../../assets/images/avatar.svg";

const State = {
  countries,
  title: "Account Details",
  firstName: "",
  lastName: "",
  email: "",
  Address: {
    city: "",
    street: "",
    country: "",
  },
  role: "",
  testimonial: "",
  avatar: AvatorImg,
  phoneNumber: "",
  startDate: "",
  completionDate: "",
  loading: false,
  fetchStatus: {
    code: "",
    message: "",
  },
  metaData: [],
};

export const fetchUserProfile = createAsyncThunk(
  "User/fetchUserProfile",
  async ({ id }, { dispath }) => {
    console.log("loading ......");
    const response = await FetchUser(id);
    return response;
  }
);
const userSlice = createSlice({
  name: "User",
  initialState: { ...State },
  reducers: {
    loaded: (state) => {
      state.loaded = true;
    },
  },
  extraReducers: {
    [fetchUserProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUserProfile.fulfilled]: (state, { payload }) => {
      if (payload.status < 400) {
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
        state.email = payload.email;
        state.avatar =
          "http://192.168.43.154:3001/auth/uploads/" + payload.profilePic;
        state.phoneNumber = payload.phoneNumber;
        state.loading = false;
        state.startDate = new Date(payload.startDate);
        state.completionDate = new Date(payload.completionDate);
        state.Address = payload.Address;
        state.metaData.push({
          metaTitle: "Email",
          metaValue:state.email,
        })
        if (state.Address.city) {
          state.metaData.push({
            metaTitle: "Address",
            metaValue: `${state.Address.street} ${state.Address.city}, ${state.Address.country}`,
          });
        }
      }
      state.fetchStatus.code = payload.status;
      state.fetchStatus.message = payload.message;
    },
    [fetchUserProfile.rejected]: (state) => {
      state.fetchStatus.code = 500;
      state.fetchStatus.message =
        "An error occured, please check your internet connection";
      state.loading = false;
    },
  },
});
export const isLoading = ({ user }) => user;
export const getState = (user) => user;

export default userSlice.reducer;
