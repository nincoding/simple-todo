import styled from "styled-components";

const TodoInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.inputBackground };
  padding: 10px 30px;
`;

export default TodoInputWrapper;