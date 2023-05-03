import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    displayEditor: false,
    darkTheme: false,
    hideDone: false,
  },
  reducers: {
    showEditor(state, action) {
      state.displayEditor = action.payload;
    },
    hideDoneTasks(state, action) {
      state.hideDone = action.payload;
    },
  }
});

export default uiSlice;

export const uiSliceActions = uiSlice.actions;