import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: true,
  popUpContent: "",
  confirmationMessage: "",
  confirmationFun: "",
  currentComponent: {},
};

export const styleReducer = createSlice({
  name: "style",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
    changePop: (state, action) => {
      state.popUpContent = action.payload;
    },
    changeComponent: (state, action) => {
      state.currentComponent = action.payload;
    },
    changeMessage: (state, action) => {
      state.confirmationMessage = action.payload;
    },
    changeConfirmationFun: (state, action) => {
      state.confirmationFun = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeMode,
  changePop,
  changeConfirmationFun,
  changeMessage,
  changeComponent,
} = styleReducer.actions;

export default styleReducer.reducer;
