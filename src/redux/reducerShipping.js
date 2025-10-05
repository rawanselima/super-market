import governments from "@/components/shipping/governments";
import { createSlice } from "@reduxjs/toolkit";

const shippingSlice = createSlice({
  name: "shipping",
  initialState: governments,
  reducers: {
    addShipping: (state, action) => {
      return action.payload;
    },
    editShipping: (state, action) => {
      return action.payload;
    },
  },
});

export const { addShipping, editShipping } = shippingSlice.actions;
export default shippingSlice.reducer;
