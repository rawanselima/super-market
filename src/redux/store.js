import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducerCart";

const store = configureStore({
  reducer: {
    cartStore: cartSlice,
  },
});

export default store;
