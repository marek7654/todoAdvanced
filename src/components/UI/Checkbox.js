import classes from './Checkbox.module.css';

const Checkbox = (props) => {
  return (
    <>
      <input
        type='checkbox'
        id={`checkbox-${props.id}`}
        name={props.name}
        className={classes.checkbox}
        checked={props.checked}
        onChange={props.onCheckboxChange}
        aria-label={props.ariaLabel}
      />
      <label
        htmlFor={`checkbox-${props.id}`}
        className={classes.label}
        aria-label={props.ariaLabel}
      >
        <div className={classes.tick}></div>
      </label>
    </>
  );
};

export default Checkbox;
