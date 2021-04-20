// import {useLocation} from "react"

export const login = async (credentials) => {
  console.log(credentials);
  const result = await fetch("http://192.168.43.154:3001/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(credentials),
  });
  if (result.ok) {
    const data = await result.json();
    if (data._id) {
      localStorage.setItem("ID", data._id);
      localStorage.setItem("TOKEN", data.token);
      return { message: "login successful", status: 200, isLogedIn: true };
    } else {
      return {
        message: "This account has not been activated",
        status: 200,
        isLogedIn: false,
      };
    }
  } else if (result.status === 401) {
    return {
      message: "Invalid credentials",
      status: 401,
      isLogedIn: false,
    };
  } else {
    return {
      message: "An error occured",
      status: result.status,
    };
  }
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
