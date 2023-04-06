import styled from "styled-components";

const PaginationContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 80px;
  width: 100%;
  background-color: #fafafa;
  opacity: 0.8;
  > li {
    cursor: pointer;
    padding: 20px;
    &.active {
    color: #f14747;
   }
   :hover {
    color: #d83838;
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

  const startPage = Math.max(currentPage - 4, 1);
  const endPage = Math.min(startPage + 8, pageCount);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const handlePageClick = (page) => {
    onPageClick(page);
  };

  const filteredPage = pageNumbers.slice(0, 5);

  return (
    <PaginationContainer>
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