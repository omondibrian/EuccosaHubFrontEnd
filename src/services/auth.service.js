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
    }
    else{
      
    }
  } else {
    console.log(result.status);
    //TODO:add display incase of server error or any other errors
    // console.log(result.statusText);
  }
};

export const FetchUser = async (id) => {
  console.log(id);
  const result = await fetch("http://192.168.43.154:3001/auth/profile/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  if (result.ok) {
    const data = await result.json();
    console.log(data);
    return data;
  } else {
    //TODO:add display incase of server error or any other errors
    console.log(result.statusText);
  }
};
