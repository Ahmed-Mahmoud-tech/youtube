import { configureStore } from "@reduxjs/toolkit";
import styleReducer from "./slices/style";
import userReducer from "./slices/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
    style: styleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: styleReducer,
      },
      serializableCheck: false,
    }),
});
