import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import formReducer from "../features/formSlice";

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
    form: formReducer,
  },
});
