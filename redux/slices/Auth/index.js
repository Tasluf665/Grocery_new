import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  initialState: 0,
  name: "auth",
  reducers: {
    loging: (state) => console.log("Auth reducer working"),
  },
});

export const { loging } = authSlice.actions;
export default authSlice.reducer;
