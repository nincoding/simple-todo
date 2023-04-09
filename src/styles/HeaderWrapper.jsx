import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 80px;
  padding: 25px 30px;
  gap: 10px;
  background-color: ${({ theme }) => theme.headerBackground };
  @media screen and (max-width: 650px) {
    width: 100vw;
    height: 50px;
    padding: 15px 15px;
  }

  > h1 {
    font-size: 28px;
    color: ${({ theme }) => theme.textColor };
    @media screen and (max-width: 650px) {
      font-size: 18px;
    }
  }
`;

export default HeaderWrapper;