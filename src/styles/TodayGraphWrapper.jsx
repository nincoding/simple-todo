import styled from "styled-components";

const TodayGraphWrapper = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  background-color: white;

  > p {
    font-size: 20px;
    margin-right: 15px;
    color: #A65D50;
  }
  > p:first-child {
    font-size: 18px;
    position: absolute;
    top: 23%;
  }
  > p:nth-child(2) {
    padding-top: 15px;
    color: #FF5A5A;
    font-size: 24px;
  }
`;

export default TodayGraphWrapper;