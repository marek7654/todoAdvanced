import { useDispatch, useSelector } from 'react-redux';

import classes from './Header.module.css';
import Switch from '../UI/Switch';
import { uiSliceActions } from '../../store/ui-slice';

const Header = (props) => {
  const darkModeStatus = useSelector((state) => state.ui.darkMode);
  const dispatch = useDispatch();

  const switchHandler = () => {
    dispatch(uiSliceActions.toggleTheme());
  };

  return (
    <header className={classes.header}>
      <div className={`container ${classes.container}`}>
        <h1 className={classes.title}>ToDo Advanced</h1>
        <Switch
          labelLeft='Light'
          labelRight='Dark'
          value={darkModeStatus}
          name={'DarkMode'}
          onSwitchChange={switchHandler}
        />
      </div>
    </header>
  );
};

export default Header;
