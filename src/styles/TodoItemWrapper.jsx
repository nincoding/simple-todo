import styled, { css } from "styled-components";

const DarkStyle = css`
  background-color: ${(props) => (props.even ? "#151515" : "#181818")};
  color: ${(props) => props.isFinished ? "#898989" : "#89aaff"};
`

const LightStyle = css`
  background-color: ${(props) => (props.even ? "#f2f2f2" : "white")};
  color: ${(props) => props.isFinished ? "#898989" : "#5f3b3b"};
`

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 60px;
  padding: 10px 30px;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  ${({ isDarkMode }) => isDarkMode ? DarkStyle : LightStyle }
  @media screen and (max-width: 650px) {
    padding: 10px 15px;
    font-size: 14px;
    gap: 15px;
  }
  > span {
    width: 60%;
    text-decoration: ${(props) => props.isFinished ? "line-through" : "none"};
    text-decoration-color: ${(props) => props.isFinished ? "#898989" : "none"};
    text-decoration-thickness: 3px;
    transition: all 0.3s ease-in-out;
    justify-content: flex-start;
  }
  div:first-child {
    width: 10%;
    display: flex;
    justify-content: left;
  }
  div:last-child {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    button:first-child {
      @media screen and (max-width: 650px) {
        margin: 0;
        padding: 0;
        left: 30px;
      }
    }
    button:last-child {
      @media screen and (max-width: 650px) {
        margin: 0;
        padding: 0;
        width: 18px;
        left: 15px;
      }
    }
  }
`;

export default TodoItemWrapper;