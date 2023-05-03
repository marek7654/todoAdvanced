import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTasksFromLocalStorage, saveTasksInLocalStorage } from './store/todo-action';
import Header from './components/header/Header';
import classes from './App.module.css';
import ListAll from './components/todo/ListAll';
import ListByDate from './components/todo/ListByDate';
import EditorBox from './components/editor/EditorBox';

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todo);

  useEffect(() => {
    console.log('first use effect');
    dispatch(fetchTasksFromLocalStorage());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      console.log('is initail handler');
      return;
    }
    //if (todo.isChanged) {
      saveTasksInLocalStorage(todo.items);
    //}
  }, [todo]);

  console.log('APP', todo);
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <div className={classes.calendars_wrapper}>
            <ListByDate day="today" />
            <ListByDate day="tomorrow" />
          </div>
          <EditorBox />
          <ListAll />
        </div>
      </main>
    </>
  );
}

export default App;
