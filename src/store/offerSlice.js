// store/offerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const offerSlice = createSlice({
  name: 'offer',
  initialState: {
    activeImage: null, // State to hold the active offer image
  },
  reducers: {
    setActiveImage: (state, action) => {
      state.activeImage = action.payload; // Update active image
    },
  },
});

export const { setActiveImage } = offerSlice.actions;
export default offerSlice.reducer;
