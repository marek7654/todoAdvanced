import { createSlice } from '@reduxjs/toolkit';

const DUMMY_todo = [
  {
    id: 1,
    title: 'Kup książki',
    date: '2023,05,04',
    important: false,
    done: false,
  },
  {
    id: 2,
    title: 'Umuj auto',
    date: '2023,05,03',
    important: true,
    done: true,
  },
  {
    id: 3,
    title: 'Napraw rower',
    date: '2023,05,02',
    important: false,
    done: false,
  },
  {
    id: 4,
    title: 'Zakupy w biedronce',
    date: '2023,05,01',
    important: false,
    done: false,
  },
  {
    id: 5,
    title: 'Podlej kwiatki w całym domu.',
    date: '2023,05,09',
    important: true,
    done: false,
  },
];

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: DUMMY_todo,
  },
  reducers: {
    setStatus(state, action) {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      state.items[itemIndex].done = !action.payload.done;
    }
  }
});

export default todoSlice;

export const todoSliceActions = todoSlice.actions;
