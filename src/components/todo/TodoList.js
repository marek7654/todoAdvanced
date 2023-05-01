import classes from './TodoList.module.css';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <TodoListItem key={item.id} itemData={item} />
      ))}
    </ul>
  );
};

export default TodoList;
