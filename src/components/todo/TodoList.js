import { useSelector } from 'react-redux';

import classes from './TodoList.module.css';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todo = useSelector((state) => state.todo);
  const { items } = todo;
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <TodoListItem key={item.id} itemData={item} />
      ))}
    </ul>
  );
};

export default TodoList;
