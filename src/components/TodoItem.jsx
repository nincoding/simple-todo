import { useState } from "react";
import TodoItemWrapper from "../styles/TodoItemWrapper";
import { Checkbox } from "@mui/material";
import { checkboxTheme, defaultBtnTheme } from "../styles/checkboxTheme"; 
import TodoItemModal from "./TodoItemModal";
import { Button } from '@mui/material';
import { RemoveIcon, EditIcon } from "../styles/ModeIcons";

const TodoItem = ({ todoItem, index, onTodoItemClick, onRemoveClick, onEditClick }) => {

  const [ modalOpen, setModalOpen ] = useState(false);
  const [ isRemoveClicked, setIsRemoveClicked ] = useState(false);
  const [ isEditClicked, setIsEditClicked ] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setIsRemoveClicked(false);
    setIsEditClicked(false);
  };

  const filteredContent = todoItem.todoItemContent.length >= 20
    ? todoItem.todoItemContent.slice(0, 20) + "..."
    : todoItem.todoItemContent;

  return (
    <>
    <TodoItemWrapper even={index % 2 === 0} isFinished={todoItem.isFinished}>
    <div>
      <Checkbox 
        sx={ checkboxTheme }
        onClick={() => {
          onTodoItemClick(todoItem);
        }}
        checked={ !todoItem.isFinished ? false : true}
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
        onRemoveClick={onRemoveClick}
        onEditClick={onEditClick}
      />
    </>
  )
}

export default TodoItem;