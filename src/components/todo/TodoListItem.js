import Checkbox from './Checkbox';
import classes from './TodoListItem.module.css';

const TodoListItem = (props) => {
  const { id, title, date, important, done } = props.itemData;

  return (
    <li className={`${classes.item} ${important ? 'bold' : ''}`}>
      {important && <span className={classes.important}>!</span>}
      <span className={classes.title}>{title}</span>
      <div className={classes.date_box}>
        <span className={classes.date}>{date}</span>
        <Checkbox id={id} done={done} />
      </div>
    </li>
  );
};

export default TodoListItem;
