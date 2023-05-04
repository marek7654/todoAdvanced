import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    isChanged: false,
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    addItem(state, action) {
      state.items.push(action.payload);
      state.isChanged = true;
    },
    editItem(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      state.items[index] = action.payload;
      state.isChanged = true;
    },
    setImportantStatus(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[itemIndex].done = !action.payload.done;
      state.isChanged = true;
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.isChanged = true;
    },
    setIsChanged(state, action) {
      state.isChanged = action.payload;
    }
  },
});

export default todoSlice;

export const todoSliceActions = todoSlice.actions;
