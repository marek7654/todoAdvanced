import React from 'react';
import { useDispatch, connect } from 'react-redux';

import classes from './Header.module.css';
import Switch from '../UI/Switch';
import { uiSliceActions } from '../../store/ui-slice';

const Header = (props) => {
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
          value={props.darkModeStatus}
          name={'DarkMode'}
          onSwitchChange={switchHandler}
        />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  darkModeStatus: state.ui.darkTheme,
});

const MemomizedHeader = connect(mapStateToProps)(React.memo(Header));

export default MemomizedHeader;
