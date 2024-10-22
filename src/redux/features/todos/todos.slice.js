import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  priority: "",
  deletedTodo: null,
  timer: false,
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

    setDeletedTodo: (state, action) => {
      state.deletedTodo = action.payload;
    },

    setTimer: (state, action) => {
      state.timer = action.payload;
    },
  },
});

export const { setSearchTerm, setPriority, setDeletedTodo, setTimer } =
  todoSlice.actions;

export default todoSlice.reducer;
