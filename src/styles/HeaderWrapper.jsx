import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: #f3f2f2;
  padding: 25px 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  > h1 {
    font-size: 28px;
    color: #5f3b3b;
  }
`;

export default HeaderWrapper;