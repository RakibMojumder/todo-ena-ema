import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  priority: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {},
  },
});

export const { setSearchTerm } = todoSlice.actions;

export default todoSlice.reducer;
