import { useContext, useState } from "react";
import TodoItemWrapper from "../styles/TodoItemWrapper";
import { Checkbox } from "@mui/material";
import { checkboxTheme, defaultBtnTheme } from "../styles/checkboxTheme"; 
import TodoItemModal from "./TodoItemModal";
import { Button } from '@mui/material';
import { RemoveIcon, EditIcon } from "../styles/ModeIcons";
import { TodoDispatchContext } from "../contexts/TodoContext";

const TodoItem = ({ todoItem, index }) => {

  const [ modalOpen, setModalOpen ] = useState(false);
  const [ isRemoveClicked, setIsRemoveClicked ] = useState(false);
  const [ isEditClicked, setIsEditClicked ] = useState(false);
  const { onFinish } = useContext(TodoDispatchContext);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setIsRemoveClicked(false);
    setIsEditClicked(false);
  };

  const filteredContent = todoItem.content.length >= 20
    ? todoItem.content.slice(0, 20) + "..."
    : todoItem.content;

  return (
    <>
    <TodoItemWrapper even={index % 2 === 0} isFinished={todoItem.finish}>
    <div>
      <Checkbox 
        sx={ checkboxTheme }
        onClick={() => {
          onFinish(todoItem.id, todoItem.finish);
        }}
        checked={ !todoItem.finish ? false : true}
      />
    </div>
    <span onClick={handleModalOpen}>{filteredContent}</span>
    <div>
      <Button 
        sx={ defaultBtnTheme }
        onClick={() => {
          setIsEditClicked(true);
          handleModalOpen();
        }}
      >
        <EditIcon />
      </Button>
      <Button 
        sx={ defaultBtnTheme }
        onClick={() => {
          setIsRemoveClicked(true);
          handleModalOpen();
        }}
      >
        <RemoveIcon />
      </Button>
    </div>
    </TodoItemWrapper>
      <TodoItemModal
        open={modalOpen}
        onClose={handleModalClose}
        todoItem={todoItem}
        isRemoveClicked={isRemoveClicked}
        isEditClicked={isEditClicked}
      />
    </>
  )
}

export default TodoItem;