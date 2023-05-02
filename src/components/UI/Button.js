import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onButtonClick}>
      {props.children}
    </button>
  );
};

export default Button;
