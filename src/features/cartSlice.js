import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if the product is already in the cart
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1; // If found, increase the quantity
      } else {
        state.cart.push({ ...action.payload, quantity: 1 }); // Otherwise, add the product with quantity 1
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseFloat(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload);

      // If the item exists in the cart
      if (itemIndex >= 0) {
        const currentQuantity = state.cart[itemIndex].quantity;

        if (currentQuantity > 1) {
          // Decrease the quantity if it's greater than 1
          state.cart[itemIndex].quantity -= 1;
        } else {
          // Remove the item from the cart if quantity is 1
          state.cart.splice(itemIndex, 1);
        }
      }
    },
    // New action to clear the cart
    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart, // Export the new action
} = cartSlice.actions;

export default cartSlice.reducer;
