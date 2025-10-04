import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducerCart";
import userSlice from "./reducerUser";
import shippingSlice from "./reducerShipping";

const store = configureStore({
  reducer: {
    cartStore: cartSlice,
    userStore: userSlice,
    shippingStore: shippingSlice,
  },
});

export default store;
