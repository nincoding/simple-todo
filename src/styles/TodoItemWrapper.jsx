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
  height: 80px;
  padding: 10px 30px;
  font-size: 20px;
  cursor: pointer;
  ${({ isDarkMode }) => isDarkMode ? DarkStyle : LightStyle }
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
  }
`;

export default TodoItemWrapper;