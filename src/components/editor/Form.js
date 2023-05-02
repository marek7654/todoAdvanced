import { useDispatch, useSelector } from 'react-redux';
import { todoSliceActions } from '../../store/todo-slice';
import { uiSliceActions } from '../../store/ui-slice';

import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import classes from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const currentItem = useSelector((state) => state.todo.currentItem);
  
  let values;
  if (!currentItem) {
    values = {
      title: '',
      date: '',
      important: false,
    };
  } else {
    values = { ...currentItem };
  }

  const titleChangeHandler = (event) => {
    values.title = event.target.value;
    dispatch(
      todoSliceActions.setCurrentItem({
        ...values,
      })
    );
  };

  const dateChangeHandler = (event) => {
    values.date = event.target.value;
    dispatch(
      todoSliceActions.setCurrentItem({
        ...values,
      })
    );
  };

  const importantChangeHandler = (event) => {
    values.important = event.target.checked;
    dispatch(
      todoSliceActions.setCurrentItem({
        ...values,
      })
    );
  };

  const cancelButtonHandler = (event) => {
    event.preventDefault();
    dispatch(uiSliceActions.showEditor(false));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const item = {
      id: currentItem.id || `item-${Date.now()}`,
      title: event.target.elements.title.value,
      important: event.target.elements.important.checked,
      date: event.target.elements.date.value,
    };
    console.log('SUBMIT', item);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.inputs_wrapper}>
        <Input
          name='title'
          value={values.title}
          onChange={titleChangeHandler}
          placeholder='Your task'
          style={{ flex: 3 }}
        />
        <Input
          name='date'
          value={values.date}
          onChange={dateChangeHandler}
          type='date'
          placeholder='Date'
          style={{ flex: 1 }}
        />
      </div>
      <div className={classes.checkbox_wrapper}>
        <Checkbox
          id='editor'
          name='important'
          checked={values.important}
          onCheckboxChange={importantChangeHandler}
        />
        <h2>Important</h2>
      </div>
      <div className={classes.buttons_wrapper}>
        <Button
          style={{ background: 'var(--color-secondary)' }}
          onButtonClick={cancelButtonHandler}
        >
          Cancel
        </Button>
        <Button style={{ background: 'var(--color-accent-2)' }}>Add</Button>
      </div>
    </form>
  );
};

export default Form;
