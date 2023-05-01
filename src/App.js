import { Provider, useSelector } from 'react-redux';

import store from './store';
import Header from './components/header/Header';
import Card from './components/UI/Card';

import classes from './App.module.css';
import ListAll from './components/todo/ListAll';

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
          <ListAll />
        </div>
      </main>
    </Provider>
  );
}

export default App;
