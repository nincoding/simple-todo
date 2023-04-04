import { useState, useRef } from "react";
import TodoItemInputField from "./components/TodoItemInputField";
import TodoItemList from "./components/TodoItemList";

function App() {

  const todoItemId = useRef(1);
  const [ todoItemList, setTodoItemList ] = useState([]);

  const onCreate = (newTodoItem) => {
    setTodoItemList([
      {
        id: todoItemId.current,
        todoItemContent: newTodoItem,
        inFinished: false,
      },
      ...todoItemList, 
    ]);

    todoItemId.current += 1;
  }

  const onTodoItemClick = (clickedTodoItem) => {
    setTodoItemList(
      todoItemList.map((todoItem) =>
        clickedTodoItem.id === todoItem.id
          ? {
              ...todoItem,
              isFinished: !todoItem.isFinished,
            }
          : todoItem
      )
    );
  };


  return (
    <div className="App">
      <TodoItemInputField onCreate={onCreate}/>
      <TodoItemList todoItemList={todoItemList} onTodoItemClick={onTodoItemClick} />
    </div>
  )
}

export default App