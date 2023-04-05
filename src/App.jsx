import { useState, useRef } from "react";
import TodoItemInputField from "./components/TodoItemInputField";
import TodoItemList from "./components/TodoItemList";
import TodayGraph from "./components/TodayGraph";
import Header from "./components/Header";
import ModeButton from "./components/ModeButton";
import TodoItemModal from "./components/TodoItemModal";

function App() {

  const todoItemId = useRef(1);
  const [ todoItemList, setTodoItemList ] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
      <ModeButton toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
      <Header />
      <TodayGraph todoItemList={todoItemList}/>
      <TodoItemInputField onCreate={onCreate}/>
      <TodoItemList todoItemList={todoItemList} onTodoItemClick={onTodoItemClick} />
      <TodoItemModal />
    </div>
  )
}

export default App