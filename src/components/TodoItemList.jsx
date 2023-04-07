import { useContext, useState } from "react";
import ControlMenu from "../styles/ControlMenu";
import FilterMenu from "./FilterMenu";
import { filterList } from "../constants/stringValues";
import TodoItem from "./TodoItem";
import EmptyItem from "./EmptyItem";
import Pagination from "./Pagination";
import { TodoDispatchContext } from "../contexts/TodoContext"; 

const PAGE_SIZE = 9;

const TodoItemList = ({ todoList }) => {

  const [ activeFilter, setActiveFilter ] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const { onRemove, onEdit, onFinish } = useContext(TodoDispatchContext);

  const handleFilterClick = (text) => {
    setActiveFilter(text);
    setCurrentPage(1);
  };

  const filteredList = todoList.filter((todoItem) => {
    if (activeFilter === "Active") {
      return !todoItem.finish;
    }
    if (activeFilter === "Completed") {
      return todoItem.finish;
    }
    return true;
  });

  const pageCount = Math.ceil(filteredList.length / PAGE_SIZE);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageStartIndex = (currentPage - 1) * PAGE_SIZE; // 현재 페이지에서 보여줄 할 일들의 시작 인덱스를 계산합니다.
  const pageEndIndex = pageStartIndex + PAGE_SIZE; // 현재 페이지에서 보여줄 할 일들의 마지막 인덱스를 계산합니다.
  const currentPageList = filteredList.slice(pageStartIndex, pageEndIndex); // 현재 페이지에서 보여줄 할 일들을 구합니다.

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
      { todoList.length > 0 && filteredList.length > 0 ? (
        <>
        {currentPageList.map((todoItem, index) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            index={index}
          />
        ))}
        {pageCount > 1 && (
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            onPageClick={handlePageClick}
          />
        )}
      </>
        ) : (
          <div>
            {
              filteredList.length === 0 && activeFilter === "All"
              ? <EmptyItem text={"오늘 할 일을 추가해주세요."} imgURL={"/assets/free-animated-icon-checklist-6416398.gif"}/>
              : activeFilter === "Active" && todoList.length === 0
              ? <EmptyItem text={"할 일 목록이 비어 있어요."} imgURL={"/assets/free-animated-icon-sad-7158908.gif"}/>
              : activeFilter === "Completed" && todoList.length === 0
              ? <EmptyItem text={"할 일 목록이 비어 있어요."} imgURL={"/assets/free-animated-icon-sad-7158908.gif"}/>
              : activeFilter === "Active"
              ? <EmptyItem text={"오늘 할 일을 모두 끝냈어요!"} imgURL={"/assets/free-animated-icon-party-7159012.gif"}/>
              : <EmptyItem text={"아직 완료한 일이 없어요!"} imgURL={"/assets/free-animated-icon-cry-7158919.gif"}/>
            }
          </div>
        )
      }
    </div>
  )
}

export default TodoItemList;