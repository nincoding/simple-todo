import styled from "styled-components";

const TodoInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.inputBackground };
  padding: 10px 30px;
  @media screen and (max-width: 650px) {
    padding: 10px 15px;
    gap: 15px;
  }
`;

export default TodoInputWrapper;