import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  //background-color: #f3f2f2;
  background-color: ${(props) => props.isDarkMode ? '#1e1f22' :'#f3f2f2'};

  padding: 25px 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  > h1 {
    font-size: 28px;
    color: ${(props) => props.isDarkMode ? '#D7D7D7' : '#5f3b3b'};
  }
`;

export default HeaderWrapper;