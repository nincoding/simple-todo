import { useState } from "react";
import ControlMenu from "../styles/ControlMenu";
import FilterMenu from "./FilterMenu";
import { filterList } from "../constants/stringValues";
import TodoItem from "./TodoItem";

const TodoItemList = ({ todoItemList, onTodoItemClick }) => {

  const [ activeFilter, setActiveFilter ] = useState("All");

  const handleFilterClick = (text) => {
    setActiveFilter(text);
  };

  const filteredList = todoItemList.filter((todoItem) => {
    if (activeFilter === "Active") {
      return !todoItem.isFinished;
    }
    if (activeFilter === "Completed") {
      return todoItem.isFinished;
    }
    return true;
  });


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
      {filteredList.length > 0 &&
        filteredList.map((todoItem, index) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            index={index}
            onTodoItemClick={onTodoItemClick}
          />
        ))}
    </div>
  )
}

export default TodoItemList;