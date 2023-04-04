import { useState } from "react";
import ControlMenu from "../styles/ControlMenu";
import FilterMenu from "./FilterMenu";

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
        <FilterMenu text={"All"} active={activeFilter === "All"} onClick={() => handleFilterClick("All")} />
        <FilterMenu text={"Active"}  active={activeFilter === "Active"} onClick={() => handleFilterClick("Active")} />
        <FilterMenu text={"Completed"} active={activeFilter === "Completed"} onClick={() => handleFilterClick("Completed")} />
      </ControlMenu>
      {todoList}
    </div>
  )
}

export default TodoItemList;