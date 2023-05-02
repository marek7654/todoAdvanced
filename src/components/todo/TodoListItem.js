import { useDispatch } from 'react-redux';

import { todoSliceActions } from '../../store/todo-slice';
import Checkbox from '../UI/Checkbox';
import classes from './TodoListItem.module.css';
import {
  isToday,
  isTomorrow,
  isPast,
  isYesterday,
} from '../../helpers/date-helper';
import { uiSliceActions } from '../../store/ui-slice';

const TodoListItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, date, important, done } = props.itemData;
  const { liteVersion } = props;

  let dateString;
  if (isToday(date)) {
    dateString = 'Today';
  } else if (isTomorrow(date)) {
    dateString = 'Tomorrow';
  } else if (isYesterday(date)) {
    dateString = 'Yesterday';
  } else {
    dateString = `${date.getDate()} ${date.toLocaleString('en', {
      month: 'short',
    })} ${date.getFullYear()}`;
  }

  const checkboxHandler = () => {
    dispatch(
      todoSliceActions.setStatus({
        id,
        done,
      })
    );
  };

  const editHandler = () => {
    dispatch(
      todoSliceActions.setCurrentItem({
        id,
        title,
        date: `${date.getFullYear()}-${date.toLocaleString('en', {
          month: '2-digit',
        })}-${date.toLocaleString('en', {
          day: '2-digit',
        })}`,
        important,
      })
    );
    dispatch(uiSliceActions.showEditor(true));
  };

  const removeHandler = () => {
    const proceed = window.confirm('Are you sure you want to remove it?');
    if (proceed) {
      dispatch(todoSliceActions.removeItem(id));
    }
  };

  return (
    <li
      className={`${classes.item} ${important ? 'bold' : ''} ${
        done ? classes.done : ''
      } ${isPast(date) ? classes.overdue : ''}`}
    >
      {important && <span className={classes.important}>!!!&nbsp;</span>}
      <span className={classes.title}>{title}</span>
      {!liteVersion && <button onClick={editHandler}>edit</button>}
      {!liteVersion && <button onClick={removeHandler}>remove</button>}
      <div className={classes.date_box}>
        {!liteVersion && <span className={classes.date}>{dateString}</span>}
        <Checkbox id={id} checked={done} onCheckboxChange={checkboxHandler} />
      </div>
    </li>
  );
};

export default TodoListItem;
