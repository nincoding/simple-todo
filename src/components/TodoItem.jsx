import TodoItemWrapper from "../styles/TodoItemWrapper";

const TodoItem = ({ todoItem, index }) => {

  return (
    <TodoItemWrapper even={index % 2 === 0}>
      {todoItem.todoItemContent}
    </TodoItemWrapper>
  )
}

export default TodoItem;