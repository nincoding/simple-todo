import { useContext, useEffect, useState } from 'react';
import { TodoStateContext } from '../contexts/TodoContext';

import TodayGraph from "../components/TodayGraph";
import TodoItemInputField from "../components/TodoItemInputField";
import TodoItemList from "../components/TodoItemList";

const Home = () => {

  const todoList = useContext(TodoStateContext);

  return (
    <div>
      <TodayGraph todoList={ todoList } />
      <TodoItemInputField />
      <TodoItemList todoList={ todoList } />
    </div>
  )
};

export default Home;