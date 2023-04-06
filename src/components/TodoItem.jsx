import { useState } from "react";
import TodoItemWrapper from "../styles/TodoItemWrapper";
import { Checkbox } from "@mui/material";
import { checkboxTheme } from "../styles/checkboxTheme"; 
import TodoItemModal from "./TodoItemModal";

const TodoItem = ({ todoItem, index, onTodoItemClick }) => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const filteredContent = todoItem.todoItemContent.length >= 20
    ? todoItem.todoItemContent.slice(0, 20) + "..."
    : todoItem.todoItemContent;

  return (
    <>
    <TodoItemWrapper even={index % 2 === 0} isFinished={todoItem.isFinished}>
      <Checkbox 
        sx={ checkboxTheme }
        onClick={() => {
          onTodoItemClick(todoItem);
        }}
        checked={ !todoItem.isFinished ? false : true}
      />
      <span onClick={handleModalOpen}>{filteredContent}</span>
    </TodoItemWrapper>
      <TodoItemModal
        open={modalOpen}
        onClose={handleModalClose}
        todoItem={todoItem.todoItemContent}
      />
    </>
  )
}

export default TodoItem;