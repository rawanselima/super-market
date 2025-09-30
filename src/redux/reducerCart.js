import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      console.log([...state, action.payload]);
    },
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
