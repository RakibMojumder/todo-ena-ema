import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";
import todoSlice from "./features/todos/todos.slice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    todo: todoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
