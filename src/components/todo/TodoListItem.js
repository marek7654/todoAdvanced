import Checkbox from './Checkbox';
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
        <Checkbox id={id} done={done} />
      </div>
    </li>
  );
};

export default TodoListItem;
