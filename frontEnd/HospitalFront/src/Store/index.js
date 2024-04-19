import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/sliceUser.js";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
