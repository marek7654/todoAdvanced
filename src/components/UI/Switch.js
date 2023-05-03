import classes from './Switch.module.css';

const Switch = (props) => {
  const { labelLeft, labelRight, absolute, value } = props;

  return (
    <div
      className={`${classes.switch_wrapper} ${absolute && classes.absolute}`}
    >
      {labelLeft && <span className={classes.span_left}>{labelLeft}</span>}
      <label className={classes.switch}>
        <input
          className={classes.checkbox}
          type='checkbox'
          checked={value}
          onChange={props.onSwitchChange}
        />
        <span className={classes.slider}></span>
      </label>
      {labelRight && <span className={classes.span_right}>{labelRight}</span>}
    </div>
  );
};

export default Switch;
