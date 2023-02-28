import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import orderReducer from "../slices/orderSlice";

export const rootReducer = combineReducers({
  basket: basketReducer,
  order: orderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
