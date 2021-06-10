import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addNewEvent } from "../../services/events.service";

export const addEvent = createAsyncThunk(
  "application/addEvent",
  async (event) => {
    const res = await addNewEvent(event);
    return res;
  }
);

export const getToken = () => {
  try {
    return localStorage.getItem("TOKEN");
  } catch (e) {
    return "";
  }
};
export const saveToLocalstorage = async (event) => {
  if (event.pictorials) {
    let files = await readFiles(event.pictorials);
    event.pictorials = files;
  }
  event.draft = true
  try {
    localStorage.setItem("event", JSON.stringify(event));
  } catch (e) { }
};
export const readFiles = (files) => {
  let fileArray = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        fileArray.push(reader.result);
        if (i === files.length - 1) {
          //resolve the promise after reading the last image
          resolve(fileArray);
        }
      };
    }
  });
};

export const readFilesFromLocalStorage = (files) => {
  let fileList = [];
  //fetch all files from local storage
  files.forEach((file) => {
    fileList.push(
      fetch(file).then(res => res.blob())
    )
  });
  return Promise.all(fileList)
};

export const getId = () => {
  try {
    return localStorage.getItem("ID");
  } catch (e) {
    return "";
  }
};
export const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (e) { }
};
const id = getId();
const token = getToken();
const Application = createSlice({
  name: "application",
  initialState: {
    isMenuOpen: false,
    isAuthenticated: token && id,
    flushMessage: false,
    userToken: token,
    userID: id,
    events: [],
    loading: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    loginUser: (state) => {
      state.isAuthenticated = true;
    },
    createFlushMessage: (state, actions) => {
      state.flushMessage = actions.payload;
    },
    Authenticate: (state, actions) => {
      state.userID = actions.payload.ID;
      state.userToken = actions.payload.TOKEN;
    },
    logOutUser: (state) => {
      state.isAuthenticated = false;
    },
    extraReducers: {
      [addEvent.pending]: (state, action) => {
        state.loading = true;
      },
      [addEvent.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.events = state.events.push(payload.events);
      },
    },
  },
});
export const getApplicationState = (state) => state;
export const {
  toggleMenu,
  loginUser,
  createFlushMessage,
  Authenticate,
  logOutUser,
} = Application.actions;

export default Application.reducer;
