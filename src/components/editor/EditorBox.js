import { useSelector, useDispatch } from 'react-redux';

import { uiSliceActions } from '../../store/ui-slice';
import { editorSliceActions } from '../../store/editor-slice';
import classes from './EditorBox.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Form from './Form';

const EditorBox = () => {
  const dispatch = useDispatch();
  const displayEditor = useSelector((state) => state.ui.displayEditor);
  const currentItem = useSelector((state) => state.editor.currentItem);

  const buttonClickHandler = () => {
    dispatch(uiSliceActions.showEditor(true));
    dispatch(editorSliceActions.setCurrentItem(false));
  };

  return (
    <>
      <div className={classes.button_wrapper}>
        <Button onButtonClick={buttonClickHandler}>Add New</Button>
      </div>
      {displayEditor && (
        <div className={classes.form_wrapper}>
          <Card title={currentItem ? 'Edit task' : 'Add new task'}>
            <Form />
          </Card>
        </div>
      )}
    </>
  );
};

export default EditorBox;
