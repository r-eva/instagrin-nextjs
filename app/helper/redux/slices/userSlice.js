/** @format */

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", String(action.payload.id));
      return (state = action.payload);
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state = initialState;
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
