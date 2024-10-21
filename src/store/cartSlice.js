import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return { cart: [], totalQuantity: 0, totalPrice: 0 }; // Default state
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity = 1 } = action.payload; // Extract quantity or default to 1
      let find = state.cart.findIndex((item) => item.id === id);

      if (find >= 0) {
        // If the product is already in the cart, increase the quantity by the specified amount
        state.cart[find].quantity += quantity;
      } else {
        // If the product is not in the cart, add it with the specified quantity
        state.cart.push({ ...action.payload, quantity });
      }

      saveCartToLocalStorage(state); // Save updated cart to local storage
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

      saveCartToLocalStorage(state); // Save updated totals to local storage
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state); // Save updated cart to local storage
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      saveCartToLocalStorage(state); // Save updated cart to local storage
    },
    decreaseItemQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload);

      if (itemIndex >= 0) {
        const currentQuantity = state.cart[itemIndex].quantity;

        if (currentQuantity > 1) {
          state.cart[itemIndex].quantity -= 1;
        } else {
          state.cart.splice(itemIndex, 1);
        }
      }
      saveCartToLocalStorage(state); // Save updated cart to local storage
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveCartToLocalStorage(state); // Save updated cart to local storage
    },
  },
});

// Helper function to save cart to local storage
const saveCartToLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
