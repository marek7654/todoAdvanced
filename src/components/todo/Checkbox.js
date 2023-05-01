import { useDispatch } from 'react-redux';

import { todoSliceActions } from '../../store/todo-slice';
import classes from './Checkbox.module.css';

const Checkbox = (props) => {
  const { id, done } = props;
  const dispatch = useDispatch();

  const checkboxHandler = (event) => {
    dispatch(
      todoSliceActions.setStatus({
        id,
        done,
      })
    );
  };

  return (
    <>
      <input
        type='checkbox'
        id={`item-${id}`}
        className={classes.checkbox}
        checked={done}
        onChange={checkboxHandler}
      />
      <label htmlFor={`item-${id}`} className={classes.label}>
        <div className={classes.tick}></div>
      </label>
    </>
  );
};

export default Checkbox;
