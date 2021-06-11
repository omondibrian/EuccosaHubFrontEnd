import createDefaultProfilePic from "../components/pages/auth/CreateProfilePic";
import { IP_ADDRESS } from "../utils/constants";

export const login = async (credentials) => {
  const result = await fetch(IP_ADDRESS + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(credentials),
  }).catch((e) => {
    return e;
  });
  const data = await result.json();
  if (result.ok) {
    if (data._id) {
      storeToLocalstorage("ID", data._id)
      storeToLocalstorage("TOKEN", data.token)
      return {
        message: data.message,
        status: 200,
        isAuthenticated: true,
        ID: data._id,
        TOKEN: data.token,
      };
    } else {
      return {
        message: data.message,
        status: 200,
        isAuthenticated: false,
      };
    }
  }
  return {
    message: data.message,
    status: result.status,
    isAuthenticated: false,
  };
};

export const FetchUser = async (id) => {
  const result = await fetch(IP_ADDRESS+ "/auth/profile/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  if (result.ok) {
    const data = await result.json();
    data["status"] = 200;
    return data;
  } else {
    return { message: result.message, status: result.status };
  }
};

export const FetchUsers = async () => {
  const result = await fetch(IP_ADDRESS+"/auth/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).catch(e => e);
  if (result.ok) {
    const data = await result.json();
    data["status"] = 200;
    return data;
  } else {
    //TODO:add display incase of server error or any other errors
    return { message: result.message, status: result.status };
  }
};

export const registerNewUser = async (user) => {
  const profile = await createDefaultProfilePic(user.firstName, user.lastName);
  const formData = new FormData();
  for (const field in user) {
    if (Object.hasOwnProperty.call(user, field)) {
      const value = user[field];
      if (field !== "profilePic") {
        formData.append(field, value);
      }
    }
  }
  formData.append("profilePic", profile, profile.name);

  let request = new XMLHttpRequest();
  let result;
  request.open("POST", IP_ADDRESS+"/auth/register");
  request.send(formData);

  return new Promise((resolve, reject) => {
    request.onload = () => {
      result = request.response;
      resolve(result);
    };
    request.onerror = () => {
      resolve({ message: "An error occured please check your internet connection", status: request.status });
    };
    request.ontimeout = () => {
      resolve({ message: "An error occured please check your internet connection", status: request.status });
    };
  });
};

/**
 * 
 * @param {Object.<string,any>} updates - user  profile fields to update 
 * @returns  
 */

export const updateProfile = async (updates) => {
  const result = await fetch(IP_ADDRESS+"/auth/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updates),
  }).catch((e) => {
    return e;
  });
  const data = await result.json();
  if (result.ok) {
    return data;
  } else {
    return {
      message: data.message || "Error updating profile please retry",
    };
  }
};
