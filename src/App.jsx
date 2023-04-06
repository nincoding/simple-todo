import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PATH_URL } from "./constants/stringValues";

import Home from "./pages/Home";
import Graph from "./pages/Graph";
import Calendar from "./pages/Calendar";

import TodoItemInputField from "./components/TodoItemInputField";
import TodoItemList from "./components/TodoItemList";
import TodayGraph from "./components/TodayGraph";
import Header from "./components/Header";
import ModeButton from "./components/ModeButton";
import Footer from "./components/Footer";

function App() {

  const todoItemId = useRef(1);
  const [ todoItemList, setTodoItemList ] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [clickedIcon, setClickedIcon] = useState('home');

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

  const onRemoveClick = (clickedTodoItem) => {
    setTodoItemList(todoItemList.filter((todoItem) => {
      return todoItem.id !== clickedTodoItem.id;
    }));
  }

  const onEditClick = (clickedTodoItem, newTodoItemContent) => {
    setTodoItemList(todoItemList.map((todoItem) => {
      return clickedTodoItem.id === todoItem.id 
        ? { ...todoItem, todoItemContent: newTodoItemContent }
        : todoItem;
    }));
  };

  return (
    <BrowserRouter>
    <div className="App">
      <ModeButton toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
      <Header />
      <TodayGraph todoItemList={todoItemList}/>
      <TodoItemInputField onCreate={onCreate}/>
      <TodoItemList 
        todoItemList={todoItemList} 
        onTodoItemClick={onTodoItemClick}
        onRemoveClick={onRemoveClick}
        onEditClick={onEditClick}
      />
      <Routes>
        <Route path={PATH_URL.HOME} element={<Home />} />
        <Route path={PATH_URL.CALENDAR} element={<Calendar />} />
        <Route path={PATH_URL.GRAPH} element={<Graph />} />
      </Routes>
      <Footer clickedIcon={clickedIcon} setClickedIcon={setClickedIcon}/>
    </div>
    </BrowserRouter>
  )
}

export default App