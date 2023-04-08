import styled from "styled-components";

const TodayGraphWrapper = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  background-color: ${ (props) => props.isDarkMode ? '#181818' :'white'};
  @media screen and (max-width: 650px) {
    padding-left: 20px;
    transition: 300ms;
  }
  p {
    font-size: 20px;
    margin-right: 15px;
    color: ${ (props) => props.isDarkMode ? '#89aaff' :'#A65D50'};
  }
  p:first-child {
    font-size: 18px;
    position: absolute;
    top: 23%;
    @media screen and (max-width: 650px) {
      font-size: 18px;
    }
  }
  p:nth-child(2) {
    padding-top: 15px;
    color: ${ (props) => props.isDarkMode ? '#5A88FF' :'#FF5A5A'};
    font-size: 24px;
    @media screen and (max-width: 650px) {
      font-size: 18px;
    }
  }
  span {
    margin: 0px 5px;
  }
  span:first-child {
    margin-left: 0px;
  }
  span:nth-child(2) {
    color: ${ (props) => props.isDarkMode ? '#89aaff' :'#5f3b3b'};
  }
`;

export default TodayGraphWrapper;