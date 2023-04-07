import { useContext, useEffect, useState } from 'react';
import { TodoStateContext } from '../contexts/TodoContext';

import TodayGraph from "../components/TodayGraph";
import TodoItemInputField from "../components/TodoItemInputField";
import TodoItemList from "../components/TodoItemList";

const Home = () => {

  const [ date, setDate ] = useState(new Date());
  const todoList = useContext(TodoStateContext);

  const filteredTodoList = todoList.filter((todo) => {
    const todoDate = new Date(todo.date);
    return (
      todoDate.getDate() === date.getDate() &&
      todoDate.getMonth() === date.getMonth() &&
      todoDate.getFullYear() === date.getFullYear()
    );
  });

  return (
    <div>
      <TodayGraph todoList={ filteredTodoList } />
      <TodoItemInputField date={date} />
      <TodoItemList todoList={ filteredTodoList } />
    </div>
  )
};

export default Home;