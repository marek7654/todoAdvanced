import { useSelector, useDispatch } from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';

import Card from '../UI/Card';
import Switch from '../UI/Switch';
import TodoList from './TodoList';

const ListAll = () => {
  const dispatch = useDispatch();
  const hideDone = useSelector((state) => state.ui.hideDone);

  let listAllTasks = useSelector((state) =>
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
  
  if (hideDone) {
    listAllTasks = listAllTasks.filter(item => !item.done);
  }

  const switchHandler = (event) => {
    dispatch(uiSliceActions.hideDoneTasks(event.target.checked));
  };

  return (
    <Card title='Your tasks'>
      <Switch
        labelLeft='Hide done'
        absolute={true}
        value={hideDone}
        name={'HideDone'}
        onSwitchChange={switchHandler}
      />
      <TodoList items={listAllTasks} />
    </Card>
  );
};

export default ListAll;
