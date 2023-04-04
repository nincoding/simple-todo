import styled from "styled-components";

const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  background-color: ${(props) => (props.even ? "#f2f2f2" : "white")};
  width: 100%;
  height: 80px;
  padding: 10px 30px;
  color: ${(props) => props.isFinished ? "#898989" : "#5f3b3b"};
  font-size: 20px;
  cursor: pointer;
  text-decoration: ${(props) => props.isFinished ? "line-through" : "none"};
  text-decoration-color: ${(props) => props.isFinished ? "#898989" : "#5f3b3b"};
  text-decoration-thickness: 3px;
  transition: all 0.3s ease-in-out;
`;

export default TodoItemWrapper;