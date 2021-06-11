import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import Application from "./slices/Application";
import registration from './slices/registration';

const store = configureStore({
  reducer: {
    user: userReducer,
    application:Application,
    registration
  },
  devTools:true,
});

export default store;
