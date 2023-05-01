import classes from './Header.module.css';
import Switch from './Switch';

const Header = () => {
  return <header className={classes.header}>
    <div className={`container ${classes.container}`}>
      <h1 className={classes.title}>ToDo Advanced</h1>
      <Switch />
    </div>
  </header>
}

export default Header;