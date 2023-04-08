import { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../contexts/TodoContext";

const PaginationContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 80px;
  width: 100%;
  background-color: ${(props) => props.isDarkMode ? '#dddddd6' : '#fff' };
  opacity: 0.8;
  > li {
    cursor: pointer;
    padding: 20px;
    color: ${(props) => props.isDarkMode ? '#f1f1f1' : '#333' };
    &.active {
    color: ${(props) => props.isDarkMode ? '#5A88FF' : '#f14747' };
   }
   :hover {
    color: ${(props) => props.isDarkMode ? '#5A88FF' : '#f14747' };
   }
  }
  @media screen and (min-width: 650px) {
    width: 640px;
    }
  @media screen and (max-width: 650px) {
    width: 90vw;
  }
`;

const Pagination = ({ pageCount, currentPage, onPageClick }) => {

  const isDarkMode = useContext(DarkModeContext);

  const startPage = Math.max(currentPage - 4, 1);
  const endPage = Math.min(startPage + 8, pageCount);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const handlePageClick = (page) => {
    onPageClick(page);
  };

  const filteredPage = pageNumbers.slice(0, 5);

  return (
    <PaginationContainer isDarkMode={isDarkMode}>
     {pageCount > 5 && currentPage > 5 && (
        <li onClick={() => handlePageClick(currentPage - 1)}>
          &lt;
        </li>
      )}
      {pageCount <= 5 || currentPage <= 5 ? (
       filteredPage.map((page) => (
          <li
            key={page}
            onClick={() => handlePageClick(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </li>
        ))
      ) : null}
      {pageCount > 5 && currentPage < pageCount && (
        <li onClick={() => handlePageClick(currentPage + 1)}>
          &gt;
        </li>
      )}
    </PaginationContainer>
  );
};

export default Pagination;