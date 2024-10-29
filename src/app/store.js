import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";
import formReducer from "../store/formSlice";
import offerReducer from '../store/offerSlice';

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
    form: formReducer,

    offer: offerReducer,
  },


});
