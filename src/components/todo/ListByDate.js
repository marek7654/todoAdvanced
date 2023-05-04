import React from 'react';
import { connect } from 'react-redux';

import { isToday, isTomorrow } from '../../helpers/date-helper';
import Card from '../UI/Card';
import TodoList from './TodoList';

const ListByDate = (props) => {
  const filterFn = props.day === 'today' ? isToday : isTomorrow;

  const TodayTasksList = props.items
    .map((item) => {
      return {
        id: item.id,
        title: item.title,
        important: item.important,
        date: new Date(item.date),
        done: item.done,
      };
    })
    .filter((item) => filterFn(item.date))
    .sort((a, b) => b.important - a.important);

  return (
    <Card title={props.day.toUpperCase()}>
      <TodoList items={TodayTasksList} liteVersion={true} />
    </Card>
  );
};

const mapStateToProps = (state) => ({
  items: state.todo.items,
});

const MemomizedListByDate = connect(mapStateToProps)(React.memo(ListByDate));

export default MemomizedListByDate;
