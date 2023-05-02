import classes from './Input.module.css';

const Input = (props) => {
  return (
    <input
      className={classes.input}
      style={props.style}
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default Input;
