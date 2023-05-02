import { useSelector, useDispatch } from 'react-redux';

import { uiSliceActions } from '../../store/ui-slice';
import classes from './EditorBox.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Form from './Form';

const EditorBox = () => {
  const dispatch = useDispatch();
  const displayEditor = useSelector((state) => state.ui.displayEditor);

  const buttonClickHandler = () => {
    dispatch(uiSliceActions.showEditor(true));
  };

  return (
    <>
      <div className={classes.button_wrapper}>
        <Button onButtonClick={buttonClickHandler}>Add New</Button>
      </div>
      {displayEditor && (
        <div className={classes.form_wrapper}>
          <Card title='Add new item'>
            <Form />
          </Card>
        </div>
      )}
    </>
  );
};

export default EditorBox;
