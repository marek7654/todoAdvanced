import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import TodoList from './TodoList';

const ListAll = () => {
  const listAllTasks = useSelector((state) =>
    state.todo.items
      .map((item) => {
        return {
          id: item.id,
          title: item.title,
          important: item.important,
          date: new Date(item.date),
          done: item.done,
        };
      })
      .sort((a, b) => a.date - b.date)
  );

  return (
    <Card title='Your tasks'>
      <TodoList items={listAllTasks} />
    </Card>
  );
};

export default ListAll;
