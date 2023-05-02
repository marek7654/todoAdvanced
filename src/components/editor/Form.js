import { useDispatch } from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';

import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import classes from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  
  const cancelButtonHandler = (event) => {
    console.log(event)
    event.preventDefault();
    dispatch(uiSliceActions.showEditor(false));
  };

  return (
    <form className={classes.form}>
      <div className={classes.inputs_wrapper}>
        <Input placeholder='Your task' style={{ flex: 3 }} />
        <Input type='date' placeholder='Date' style={{ flex: 1 }} />
      </div>
      <div className={classes.checkbox_wrapper}>
        <Checkbox />
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
