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
    flushMessage: null,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleIsUserLoggedIn: (state) => {
      state.isUserLoggedIn = !state.isUserLoggedIn;
    },
    setFlushMessage: (state, flushMessage) => {
      state.flushMessage = flushMessage;
    },
  },
});
export const getApplicationState = (state) => state;
export const {
  toggleMenu,
  toggleIsUserLoggedIn,
  setFlushMessage,
} = Application.actions;

export default Application.reducer;
