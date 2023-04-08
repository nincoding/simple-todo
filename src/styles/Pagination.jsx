import styled from "styled-components";

export const PaginationContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.paginationBackgroundColor };
  opacity: 0.8;
  > li {
    cursor: pointer;
    padding: 20px;
    color: ${({ theme }) => theme.paginationListColor };
    &.active {
    color: ${({ theme }) => theme.paginationBtnColor };
   }
   :hover {
    color: ${({ theme }) => theme.paginationBtnColor };
   }
  }
  @media screen and (min-width: 650px) {
    width: 640px;
    }
  @media screen and (max-width: 650px) {
    width: 90vw;
  }
`;