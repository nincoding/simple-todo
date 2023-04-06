import { useState } from "react";
import TodoItemWrapper from "../styles/TodoItemWrapper";
import { Checkbox } from "@mui/material";
import { checkboxTheme, removeBtnTheme } from "../styles/checkboxTheme"; 
import TodoItemModal from "./TodoItemModal";
import { Button } from '@mui/material';
import { RemoveIcon } from "../styles/ModeIcons";

const TodoItem = ({ todoItem, index, onTodoItemClick, onRemoveClick }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [isRemoveClicked, setIsRemoveClicked] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setIsRemoveClicked(false);
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
        sx={ removeBtnTheme }
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
        onRemoveClick={onRemoveClick}
      />
    </>
  )
}

export default TodoItem;