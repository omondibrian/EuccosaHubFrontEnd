import { createSlice } from "@reduxjs/toolkit";

export const getToken = () => {
  try {
    return localStorage.getItem("TOKEN");
  } catch (e) {
    return "";
  }
};

export const getId = () => {
  try {
    return localStorage.getItem("ID");
  } catch (e) {
    return "";
  }
};
const id=getId()
const token = getToken()
const Application = createSlice({
  name: "application",
  initialState: {
    isMenuOpen: false,
    isAuthenticated:token  && id ? true : false,
    flushMessage: false,
    userToken: token,
    userID: id,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    loginUser: (state) => {
      state.isAuthenticated = true;
    },
    createFlushMessage: (state, actions) => {
      state.flushMessage = actions.payload;
    },
    Authenticate: (state, actions) => {
     
      state.userID = actions.payload.ID;
      state.userToken = actions.payload.TOKEN;
    }
  },
  
});
export const getApplicationState = (state) => state;
export const {
  toggleMenu,
  loginUser,
  createFlushMessage,
  Authenticate,
} = Application.actions;

export default Application.reducer;
