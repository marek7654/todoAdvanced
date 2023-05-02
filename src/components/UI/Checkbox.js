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
      />
      <label htmlFor={`checkbox-${props.id}`} className={classes.label}>
        <div className={classes.tick}></div>
      </label>
    </>
  );
};

export default Checkbox;
