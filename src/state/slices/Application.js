import { createSlice } from "@reduxjs/toolkit";

const Application = createSlice({
  name: "application",
  initialState: { isMenuOpen: false },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});
export const getApplicationState = (state) => state;
export const { toggleMenu } = Application.actions;
export default Application.reducer;
