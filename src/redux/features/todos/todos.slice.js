import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  priority: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export const { setSearchTerm, setPriority } = todoSlice.actions;

export default todoSlice.reducer;
