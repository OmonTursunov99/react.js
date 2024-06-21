import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    amountAdded(state, action) {
      state.value += action.payload;
    },
    // decrement() {
    //
    // },
    // reset() {
    //
    // },
  },
});

export const {
  increment,
  amountAdded
} = counterSlice.actions;
export default counterSlice.reducer;