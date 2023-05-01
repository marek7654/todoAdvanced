import { Provider } from 'react-redux';

import store from './store';
import Header from './components/header/Header';
import Card from './components/UI/Card';

import classes from './App.module.css';
import TodoList from './components/todo/TodoList';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <div className='container'>
          <div className={classes.calendars_wrapper}>
            <Card title='To jest test'>
              <p>Lorem ipsum...</p>
              <p>
                Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum...
                Lorem ipsum... Lorem ipsum...{' '}
              </p>
            </Card>
            <Card title='To jest test'>
              <p>Lorem ipsum...</p>
              <p>
                Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum...
                Lorem ipsum... Lorem ipsum...{' '}
              </p>
            </Card>
          </div>
          <Card title='To jest test'>
            <TodoList />
          </Card>
        </div>
      </main>
    </Provider>
  );
}

export default App;
