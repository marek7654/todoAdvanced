import classes from './Switch.module.css';

const Switch = () => {
  return (
    <div className={classes.switch_wrapper}>
      <span className={classes.span_light}>Light</span>
      <label className={classes.switch}>
        <input className={classes.checkbox} type='checkbox' />
        <span className={classes.slider}></span>
      </label>
      <span className={classes.span_dark}>Dark</span>
    </div>
  );
};

export default Switch;
