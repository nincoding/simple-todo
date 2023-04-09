import styled from "styled-components";

export const PaginationContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 7%;
  width: 100%;
  background-color: ${({ theme }) => theme.paginationBackgroundColor };
  
  opacity: 0.8;
  > li {
    cursor: pointer;
    padding: 0px 15px 0px 15px;
    color: ${({ theme }) => theme.paginationListColor };
    &.active {
    color: ${({ theme }) => theme.paginationBtnColor };
   }
   :hover {
    color: ${({ theme }) => theme.paginationBtnColor };
   }
  }
  @media screen and (max-width: 650px) {
    width: 100vw;
    position: absolute;
    bottom: 5%;
    left: 0;
    width: 100%;
    height: 45px;
  }
  @media screen and (max-width: 412px) {
    position: absolute;
    bottom: 11%;
    left: 0;
    width: 100%;
  }
`;