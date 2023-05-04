import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchTasksFromLocalStorage,
  saveTasksInLocalStorage,
} from './store/todo-action';
import Header from './components/header/Header';
import classes from './App.module.css';
import MemomizedListAll from './components/todo/ListAll';
import MemomizedListByDate from './components/todo/ListByDate';
import EditorBox from './components/editor/EditorBox';

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTasksFromLocalStorage());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (todo.isChanged) {
      dispatch(saveTasksInLocalStorage(todo.items));
    }
  }, [todo, dispatch]);

  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <div className={classes.calendars_wrapper}>
            <MemomizedListByDate day='today' />
            <MemomizedListByDate day='tomorrow' />
          </div>
          <EditorBox />
          <MemomizedListAll />
        </div>
      </main>
    </>
  );
};

export default App;
