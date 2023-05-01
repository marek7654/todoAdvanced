import { Provider } from 'react-redux';

import store from './store';
import Header from './components/header/Header';

import classes from './App.module.css';
import ListAll from './components/todo/ListAll';
import ListByDate from './components/todo/ListByDate';

function App() {

  return (
    <Provider store={store}>
      <Header />
      <main>
        <div className='container'>
          <div className={classes.calendars_wrapper}>
            <ListByDate day="today" />
            <ListByDate day="tomorrow" />
          </div>
          <ListAll />
        </div>
      </main>
    </Provider>
  );
}

export default App;
