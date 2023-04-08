import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import TodoItemList from "../components/TodoItemList";
import { TodoStateContext } from "../contexts/TodoContext";
import TodoItemInputField from "../components/TodoItemInputField";

const CalendarWrapper = styled.div`
  margin: 12%;
`;

const CalendarPage = () => {

  const [ date, setDate ] = useState(new Date());
  const todoList = useContext(TodoStateContext);

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const filteredTodoList = todoList.filter((todo) => {
    const todoDate = new Date(todo.date);
    return (
      todoDate.getDate() === date.getDate() &&
      todoDate.getMonth() === date.getMonth() &&
      todoDate.getFullYear() === date.getFullYear()
    );
  });

  return (
    <>
    <CalendarWrapper>
      <Calendar onChange={onChange} value={date} />
    </CalendarWrapper>
    <TodoItemInputField date={date}/>
    <TodoItemList todoList={filteredTodoList}/>
    </>
  )
};
  
export default CalendarPage;