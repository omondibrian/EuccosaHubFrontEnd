import { createSlice } from "@reduxjs/toolkit";

export const getToken = () => {
  return localStorage.getItem("TOKEN");
};

export const getId = () => {
  return localStorage.getItem("ID");
};

const Application = createSlice({
  name: "application",
  initialState: {
    isMenuOpen: false,
    isUserLoggedIn: getToken() && getId() ? true : false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleIsUserLoggedIn: (state) => {
      state.isUserLoggedIn = !state.isUserLoggedIn;
    },
  },
});
export const getApplicationState = (state) => state;
export const { toggleMenu, toggleIsUserLoggedIn } = Application.actions;

export default Application.reducer;
