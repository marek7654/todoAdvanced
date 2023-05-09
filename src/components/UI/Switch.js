import classes from './Switch.module.css';

const Switch = (props) => {
  const { labelLeft, labelRight, absolute, value, ariaLabel, onSwitchChange } = props;

  return (
    <div
      className={`${classes.switch_wrapper} ${absolute && classes.absolute}`}
    >
      {labelLeft && <span className={classes.span_left}>{labelLeft}</span>}
      <label className={classes.switch} aria-label={ariaLabel}>
        <input
          className={classes.checkbox}
          type='checkbox'
          checked={value}
          onChange={onSwitchChange}
          aria-label={ariaLabel}
        />
        <span className={classes.slider}></span>
      </label>
      {labelRight && <span className={classes.span_right}>{labelRight}</span>}
    </div>
  );
};

export default Switch;
