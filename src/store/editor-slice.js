import { createSlice } from '@reduxjs/toolkit';

const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    currentItem: false,
  },
  reducers: {
    setCurrentItem(state, action) {
      state.currentItem = action.payload;
    },
  },
});

export default editorSlice;

export const editorSliceActions = editorSlice.actions;
