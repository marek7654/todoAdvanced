import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    hideDone: false,
    isChanged: false,
    currentItem: false,
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    addItem(state, action) {
      state.items.push(action.payload);
    },
    editItem(state, action) {
      const index = state.items.findIndex(item => item.id === state.currentItem.id);
      state.items[index] = state.currentItem;
    },
    setImportantStatus(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[itemIndex].done = !action.payload.done;
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    hideDoneTasks(state, action) {
      state.hideDone = action.payload;
    },
    setCurrentItem(state, action) {
      state.currentItem = action.payload;
    }
  },
});

export default todoSlice;

export const todoSliceActions = todoSlice.actions;
