import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './App.module.css';
import {
  fetchTasksFromLocalStorage,
  saveTasksInLocalStorage,
} from './store/todo-action';
import { fetchThemeSetting, saveThemeSetting } from './store/ui-action';
import { switchDarkMode } from './helpers/global-helper';
import MemomizedHeader from './components/layout/Header';
import MemomizedListAll from './components/todo/ListAll';
import MemomizedListByDate from './components/todo/ListByDate';
import EditorBox from './components/editor/EditorBox';
import Footer from './components/layout/Footer';

const App = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  const {darkTheme, isChanged: darkThemeIsChanged} = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(fetchTasksFromLocalStorage());
    dispatch(fetchThemeSetting());
  }, [dispatch]);

  useEffect(() => {
    switchDarkMode(darkTheme);
    if (darkThemeIsChanged) {
      saveThemeSetting(darkTheme);
    }
  }, [darkTheme, darkThemeIsChanged]);

  useEffect(() => {
    if (todo.isChanged) {
      dispatch(saveTasksInLocalStorage(todo.items));
    }
  }, [todo, dispatch]);

  return (
    <>
      <MemomizedHeader />
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
      <Footer />
    </>
  );
};

export default App;
