import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import Application from "./slices/Application";

const store = configureStore({
  reducer: {
    user: userReducer,
    application:Application,
  },
});

export default store;
