import classes from './TodoList.module.css';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  return (
    <>
      {props.items.length === 0 && <p>You have no tasks</p>}
      <ul className={classes.list}>
        {props.items.map((item) => (
          <TodoListItem
            key={item.id}
            itemData={item}
            liteVersion={props.liteVersion}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
