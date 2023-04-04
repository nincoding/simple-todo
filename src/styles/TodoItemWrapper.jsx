import styled from "styled-components";

const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: ${(props) => (props.even ? "#f2f2f2" : "white")};
  width: 100%;
  height: 80px;
  padding: 10px 30px;
  color: #5f3b3b;
  font-size: 20px;
  cursor: pointer;
`;

export default TodoItemWrapper;