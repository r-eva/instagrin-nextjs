import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from ".userSlice";

const reducers = combineReducers({
  auth: userSlice,
});

export const makeStore = configureStore({
  reducer: reducers,
});
