import { useState } from "react";
import ControlMenu from "../styles/ControlMenu";
import FilterMenu from "./FilterMenu";
import { filterList } from "../constants/stringValues";
import TodoItem from "./TodoItem";

const TodoItemList = ({ todoItemList, onTodoItemClick }) => {

  const [ activeFilter, setActiveFilter ] = useState("All");

  const todoList = todoItemList.map((todoItem, index) => {
    return (
      <TodoItem key={todoItem.id} todoItem={todoItem} index={index} onTodoItemClick={onTodoItemClick}/>
    );
  });

  const handleFilterClick = (text) => {
    setActiveFilter(text);
  };

  return (
    <div className="TodoItemList">
      <ControlMenu>
        { filterList.map((it) => {
          return <FilterMenu
            key={it}
            text={it}
            active={activeFilter === it} 
            onClick={() => handleFilterClick(it)}
          />
        })
      }
      </ControlMenu>
      {todoList}
    </div>
  )
}

export default TodoItemList;