import { useDispatch } from 'react-redux';

import { todoSliceActions } from '../../store/todo-slice';
import Checkbox from '../UI/Checkbox';
import classes from './TodoListItem.module.css';
import { isToday, isTomorrow } from '../../helpers/script';

const TodoListItem = (props) => {
  const { id, title, date, important, done } = props.itemData;
  const { liteVersion } = props;

  let dateString = `${date.getDate()} ${date.toLocaleString('en', {
    month: 'short',
  })} ${date.getFullYear()}`;
  dateString = isToday(date) ? 'Today' : dateString;
  dateString = isTomorrow(date) ? 'Tomorrow' : dateString;

  const dispatch = useDispatch();

  const checkboxHandler = () => {
    dispatch(
      todoSliceActions.setStatus({
        id,
        done,
      })
    );
  };

  return (
    <li
      className={`${classes.item} ${important ? 'bold' : ''} ${
        done ? classes.done : ''
      }`}
    >
      {important && <span className={classes.important}>!!!&nbsp;</span>}
      <span className={classes.title}>{title}</span>
      <div className={classes.date_box}>
        {!liteVersion && <span className={classes.date}>{dateString}</span>}
        <Checkbox id={id} checked={done} onCheckboxChange={checkboxHandler} />
      </div>
    </li>
  );
};

export default TodoListItem;
