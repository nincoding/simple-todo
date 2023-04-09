import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 50px;
  padding: 15px 15px;
  gap: 10px;
  background-color: ${({ theme }) => theme.headerBackground };
  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.textColor };
    @media screen and (max-width: 650px) {
      font-size: 18px;
    }
  }
`;

export default HeaderWrapper;