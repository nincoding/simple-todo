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
      {filteredList.length > 0 ?
        filteredList.map((todoItem, index) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            index={index}
            onTodoItemClick={onTodoItemClick}
          />
        )) : (
          <div>
            {
              activeFilter === "All"
              ? "오늘 해야할 일을 추가해주세요."
              : activeFilter === "Active"
              ? "할 일 목록이 비어 있습니다."
              : "완료된 일이 없습니다."
            }
          </div>
        )
      }
    </div>
  )
}

export default TodoItemList;