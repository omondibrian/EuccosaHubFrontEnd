import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addNewEvent } from "../../services/events.service";

export const addEvent = createAsyncThunk(
  "application/addEvent",
  async (event) => {
    const res = await addNewEvent(event);
    return res;
  }
);

/**
 * retrive an item from local storage
 * @param {string} key - item to retrive from local storage 
 * @example
 * getItemFromLocalStorage(ID)
 */
export const getItemFromLocalStorage = (key) => {
  try {
    return localStorage.getItem(key)
  }
  catch (e) {
    return ""
  }
}

/**
 * store item to localstorage
 * @param {string} key  - key value for item 
 * @param {any} value - value to store 
 * @example
 * const user = {name:"ojay", id:"10"}
 * storeToLocalstorage("user",user)
 */
export const storeToLocalstorage = (key, value) => {
  try {
    return localStorage.setItem(key, value)
  }
  catch (e) {
  }
}

/**
 * stores an event to local stroge
 * @param {Object<string,any>} event - event to store to local storage
 */
export const saveToLocalstorage = async (event) => {
  if (event.pictorials) {
    let files = await readFiles(event.pictorials);
    event.pictorials = files;
  }
  event.draft = true
  storeToLocalstorage('event', JSON.stringify(event))
};
/**
 * Read  files to data: URL representing the file's data.
 * @param {FileList} files 
 * @returns {Promise<Array<sting>>} - resoves with array with data: URL representing the file's data.
 */
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

/**
 * reads file data from URL representing the file's data.
 * @param {Array<string>} files -  data: URL representing the file's data.
 * @returns {Promise<Array<Blob>>} - resolves with array of Blob objects
 */
export const fileBlobFromDataURL = (files) => {
  let fileList = [];
  files.forEach((file) => {
    fileList.push(
      fetch(file).then(res => res.blob())
    )
  });
  return Promise.all(fileList)
};


/**
 * clears local storage
 */
export const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (e) { }
};
const id = getItemFromLocalStorage("ID");
const token = getItemFromLocalStorage("TOKEN");


/**
 * react-redux slice that keeps application state
 */
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
    /**
     * 
     * @param {} state 
     * @param {Object<string,string>} actions.payload - 
     * @example
     * const dispatch = useDispatch()
     * const message = {message:"your account was created successfully",
     *                  className: "success"}
     * dispatch(createFlushMessage(message))
     */
    createFlushMessage: (state, actions) => {
      state.flushMessage = actions.payload;
    },
    Authenticate: (state, actions) => {
      state.userID = actions.payload.ID;
      state.userToken = actions.payload.TOKEN;
      state.isAuthenticated = true;
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
  createFlushMessage,
  Authenticate,
  logOutUser,
} = Application.actions;

export default Application.reducer;
