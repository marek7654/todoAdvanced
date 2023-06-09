import { useDispatch } from 'react-redux';

import { todoSliceActions } from '../../store/todo-slice';
import { editorSliceActions } from '../../store/editor-slice';
import Checkbox from '../UI/Checkbox';
import classes from './TodoListItem.module.css';
import {
  isToday,
  isTomorrow,
  isPast,
  isYesterday,
} from '../../helpers/date-helper';
import { uiSliceActions } from '../../store/ui-slice';
import deleteIcon from '../../assets/images/delete.svg';
import editIcon from '../../assets/images/edit.svg';

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
      todoSliceActions.setImportantStatus({
        id,
        done,
      })
    );
  };

  const editHandler = () => {
    dispatch(
      editorSliceActions.setCurrentItem({
        id,
        title,
        date: `${date.getFullYear()}-${date.toLocaleString('en', {
          month: '2-digit',
        })}-${date.toLocaleString('en', {
          day: '2-digit',
        })}`,
        important,
        done,
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
      <div className={liteVersion ? classes.title_wrapper_lite : classes.title_wrapper}>
        {important && <span className={classes.important}>!!!&nbsp;</span>}
        <span className={classes.title}>{title}</span>
      </div>
      {!liteVersion && (
        <button className={classes.button} onClick={editHandler} aria-label='Edit task'>
          <img className={`${classes.icon} item_icons`} src={editIcon} alt="Edit icon" />
        </button>
      )}
      {!liteVersion && (
        <button className={classes.button} onClick={removeHandler} aria-label='Delete task'>
          <img className={`${classes.icon} item_icons`} src={deleteIcon} alt="Delete icon" />
        </button>
      )}
      <div className={classes.date_box}>
        {!liteVersion && <span className={classes.date}>{dateString}</span>}
        <Checkbox
          id={id}
          checked={done}
          onCheckboxChange={checkboxHandler}
          name={id}
          ariaLabel='Done'
        />
      </div>
    </li>
  );
};

export default TodoListItem;
