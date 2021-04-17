import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchUser } from "../../services/auth.service";
import countries from "../../data/countries";
import AvatorImg from "../../assets/images/avatar.png";
const today = new Date();

const State = {
  countries,
  title: "Account Details",
  firstName: "Brian",
  lastName: "Omondi",
  Email: "omondibrian392@gmail.com",
  Address: {
    city: "Malindi",
    street: "Jiwe Leupe",
    country: "Kenya",
  },
  role: "Vice chairman",
  testimonial: "test testimonial",
  avatar: AvatorImg,
  phoneNumber: "+2544567890",
  startDate: today.getDate(),
  completionDate: today.getDate(),
  loading: false,
  metaData: [
    {
      metaTitle: "Address",
      metaValue: `Jiwe Leupe Malindi,  Kenya `,
    },
    {
      metaTitle: "Email",
      metaValue: "omondibrian392@gmail.com ",
    },
  ],
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
      console.log('fetchProfile',payload);

      state.Email = payload.email;
      state.avatar = 'http://192.168.43.154:3001/auth/uploads/'+payload.profilePic;
      state.phoneNumber = payload.phoneNumber;
      state.loading = false;
    },
  },
});
export const isLoading = ({ user }) => user;
export const getState = (user) => user;

export default userSlice.reducer;