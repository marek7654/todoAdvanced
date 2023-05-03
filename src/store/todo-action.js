import { todoSliceActions } from './todo-slice';

const TASKS_LOCAL_STORAGE_KEY = 'todoAdvanced';

export const saveTasksInLocalStorage = (todo) => {
  console.log('SAVED');
  return (dispatch) => {
    localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(todo));
    dispatch(todoSliceActions.setIsChanged(false));
  }
};

export const fetchTasksFromLocalStorage = () => {
  console.log('FETCH');
  return (dispatch) => {
    let tasksJSON = localStorage.getItem(TASKS_LOCAL_STORAGE_KEY);
    if (!tasksJSON) {
      tasksJSON = '[]';
    }
    dispatch(todoSliceActions.setItems(JSON.parse(tasksJSON)));
  };
};
