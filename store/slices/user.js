import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { decrement, incrementByAmount } = userReducer.actions;

export default userReducer.reducer;
