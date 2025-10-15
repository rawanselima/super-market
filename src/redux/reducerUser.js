import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    logout: (state) => {
      return null;
    },
  },
});

export const { addUser , logout } = userSlice.actions;
export default userSlice.reducer;
