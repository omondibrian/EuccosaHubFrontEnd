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
  const { email, street, city, country } = Action.payload;
  let metaData = [];
  if (street && city && country) {
    metaData.push({
      metaTitle: "Address",
      metaValue: `${street} ${city} ,${country}`,
    });
  }
  if (email) {
    metaData.push({
      metaTitle: "email",
      metaValue: email,
    });
  }

  return {
    ...state,
    ...Action.payload,
    metaData,
  };
}

