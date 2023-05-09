import classes from './Input.module.css';
import { iOS } from '../../helpers/global-helper';

const Input = (props) => {
  return (
    <input
      className={`${classes.input} ${iOS ? classes.input_ios : ''}`}
      style={props.style}
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      required={props.required || false}
    />
  );
};

export default Input;
