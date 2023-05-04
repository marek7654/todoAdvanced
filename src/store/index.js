import { configureStore } from '@reduxjs/toolkit';

import todoSlice from './todo-slice';
import uiSlice from './ui-slice';
import editorSlice from './editor-slice';

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    ui: uiSlice.reducer,
    editor: editorSlice.reducer,
  },
});

export default store;
