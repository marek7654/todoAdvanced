import classes from './Header.module.css';
import Switch from '../UI/Switch';

const Header = (props) => {

  const switchHandler = () => {
    console.log('test');
  }

  return <header className={classes.header}>
    <div className={`container ${classes.container}`}>
      <h1 className={classes.title}>ToDo Advanced</h1>
      <Switch
        labelLeft="Light"
        labelRight="Dark"
        value={props.darkMode}
        name={'HideDone'}
        onSwitchChange={switchHandler}
      />
    </div>
  </header>
}

export default Header;