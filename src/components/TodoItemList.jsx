const TodoItemList = (props) => {

  const todoList = props.todoItemList.map((todoItem) => {
    return <li key={todoItem.id}>{todoItem.todoItemContent}</li>;
  });

  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  )
}

export default TodoItemList;