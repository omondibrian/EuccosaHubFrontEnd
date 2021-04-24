import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import Application from "./slices/Application";
import registration from './slices/registration';
// import devToolsEnhancer from 'remote-redux-devtools'

const store = configureStore({
  reducer: {
    user: userReducer,
    application:Application,
    registration
  },
  devTools:true,
  // enhancers: [devToolsEnhancer({ realtime: true })],
});

export default store;
