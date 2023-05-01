import { useSelector } from 'react-redux';
import { isToday, isTomorrow} from '../../helpers/script';

import Card from '../UI/Card';
import TodoList from './TodoList';

const ListByDate = (props) => {
  const filterFn = props.day === 'today' ? isToday : isTomorrow;
  const TodayTasksList = useSelector((state) =>
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
      .filter(item => filterFn(item.date))
      .sort((a,b) => b.important - a.important)
  );

  return (
    <Card title={props.day.toUpperCase()}>
      <TodoList items={TodayTasksList} liteVersion={true} />
    </Card>
  );
};

export default ListByDate;
