import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      return action.payload;
    },
    deleteCart: (state, action) => {
      return state.filter((ele) => ele.id !== action.payload);
    },
    editCart: (state, action) => {
      return state.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
  },
});

export const { addCart, deleteCart, editCart } = cartSlice.actions;

export default cartSlice.reducer;
