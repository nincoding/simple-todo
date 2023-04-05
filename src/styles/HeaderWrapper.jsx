import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: #f3f2f2;
  padding: 15px 30px;

  > p:first-child {
    color: #5f3b3b;
    font-size: 18px;
  }
  > p:nth-child(2) {
    padding-top: 5px;
    color: #FF5A5A;
    font-size: 21px;
  }
`;

export default HeaderWrapper;