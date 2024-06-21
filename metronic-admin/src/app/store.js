import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter/counter-slice.js";
import { apiSlice } from "@/features/dogs/dogs-api-slice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }
});