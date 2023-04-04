import { useState } from "react";
import ControlMenu from "../styles/ControlMenu";
import FilterMenu from "./FilterMenu";
import { filterList } from "../constants/stringValues";

const TodoItemList = (props) => {

  const [ activeFilter, setActiveFilter ] = useState("All");

  const todoList = props.todoItemList.map((todoItem) => {
    return <li key={todoItem.id}>{todoItem.todoItemContent}</li>;
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