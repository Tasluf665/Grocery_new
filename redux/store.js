import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/Auth";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
