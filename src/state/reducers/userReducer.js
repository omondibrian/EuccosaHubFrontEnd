import { FETCH_PROFILE, UPDATE_PROFILE } from "../Actions";

export const userReducer = (state, Action) => {
  switch (Action.type) {
    case FETCH_PROFILE:
      return state;
    case UPDATE_PROFILE:
      return updateProfileData(Action, state);

    default:
      break;
  }
};





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

