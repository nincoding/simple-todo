import styled from "styled-components";

const TodayGraphWrapper = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: white;
  > h1 {
    font-size: 32px;
    color: #5f3b3b;
  }
  > p {
    font-size: 20px;
    margin-right: 15px;
    color: #A65D50;
  }
`;

export default TodayGraphWrapper;