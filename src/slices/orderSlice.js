import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    // Actions
    addToOrder: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { addToOrder } = orderSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectOrderItems = (state) => state.order.items;
 

export default orderSlice.reducer;
