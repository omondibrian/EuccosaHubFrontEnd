import { FETCH_PROFILE, UPDATE_PROFILE } from "../Actions";
import {createReducer} from '@reduxjs/toolkit'

const userReducer = createReducer([],(builder)=>{
  builder.addCase(FETCH_PROFILE,(state,action)=>{
    return state;
  })
  builder.addCase(UPDATE_PROFILE,(state,action)=>{
    return updateProfileData(action, state);
  })
})



export default userReducer;




function updateProfileData(Action, state) {
  const { Email, street, city, country } = Action.payload;
  let metaData = [];
  if (street && city && country) {
    metaData.push({
      metaTitle: "Address",
      metaValue: `${street} ${city} ,${country}`,
    });
  }
  if (Email) {
    metaData.push({
      metaTitle: "Email",
      metaValue: Email,
    });
  }

  return {
    ...state,
    ...Action.payload,
    metaData,
  };
}

