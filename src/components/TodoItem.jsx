import TodoItemWrapper from "../styles/TodoItemWrapper";
import { Checkbox } from "@mui/material";
import { checkboxTheme } from "../styles/checkboxTheme"; 

const TodoItem = ({ todoItem, index, onTodoItemClick }) => {

  return (
    <TodoItemWrapper even={index % 2 === 0} isFinished={todoItem.isFinished}>
      <Checkbox 
        sx={ checkboxTheme }
        onClick={() => {
          onTodoItemClick(todoItem); 
        }}
        checked={ !todoItem.isFinished ? false : true}
      />
      {todoItem.todoItemContent}
    </TodoItemWrapper>
  )
}

export default TodoItem;