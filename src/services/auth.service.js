import createDefaultProfilePic from "../components/pages/auth/CreateProfilePic";

export const login = async (credentials) => {
  const result = await fetch("http://192.168.43.154:3001/auth/login", {
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
      try {
        localStorage.setItem("ID", data._id);
        localStorage.setItem("TOKEN", data.token);
      } catch (e) {}
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
  console.log(data);
  return {
    message: data.message,
    status: result.status,
    isAuthenticated: false,
  };
};

export const FetchUser = async (id) => {
  const result = await fetch("http://192.168.43.154:3001/auth/profile/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  if (result.ok) {
    const data = await result.json();
    return data;
  } else {
    //TODO:add display incase of server error or any other errors
    console.log(result.statusText);
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
  request.open("POST", "http://192.168.43.154:3001/auth/register");
  request.send(formData);

  return new Promise((resolve, reject) => {
    request.onload = () => {
      result = request.response;
      resolve(result);
    };
    request.onerror = () => {
      reject({ message: "an error occured" });
    };
    request.ontimeout = () => {
      reject({ message: "an error occured" });
    };
  });
};
