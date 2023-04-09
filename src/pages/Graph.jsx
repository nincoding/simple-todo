import styled from "styled-components";

const GraphWrapper = styled.div`
  background-color: ${({ theme }) => theme.appBackgroundColor };
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  > p:nth-child(1) {
    font-size: 24px;
    position: absolute;
    top: 15%;
    left: 28%;
    color: ${({ theme }) => theme.graphColor };
    @media screen and (max-width: 650px) {
      font-size: 20px;
      margin-left: -15px;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 412px) {
      justify-content: center;
      font-size: 18px;
      margin-left: -10px;
    }
  }
  p:last-child {
    font-size: 34px;
    color: ${({ theme }) => theme.graphColor };
    @media screen and (max-width: 650px) {
      margin-left: 0px;
      font-size: 28px;
      align-items: center;
    }
    @media screen and (max-width: 412px) {
      margin-left: 10px;
    }
  }
  svg {
    position: absolute;
    top: 28%;
    left: 35%;
    @media screen and (max-width: 650px) {
      top: 28%;
      justify-content: center;
      width: 150px; 
      height: 150px;
    }
    @media screen and (max-width: 412px) {
      top: 30%;
      justify-content: center;
      width: 140px; 
      height: 140px;
    }
  }
  path {
    fill: ${({ theme }) => theme.mainColor };
  }
`;

const Graph = () => {

  return (
    <GraphWrapper >
      <p>해당 서비스는 준비중입니다.</p>
      <svg width="180" height="180" viewBox="0 0 95 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M90.8333 78.645H77.7533L52.32 3.745C50.8667 -1.24833 43.6 -1.24833 42.1467 3.745L16.7133 78.645H3.63333C1.45333 78.645 0 80.0717 0 82.2117V89.345C0 91.485 1.45333 92.9117 3.63333 92.9117H90.8333C93.0133 92.9117 94.4667 91.485 94.4667 89.345V82.2117C94.4667 80.0717 93.0133 78.645 90.8333 78.645ZM43.6 21.5783H50.8667L55.9533 35.845H39.24L43.6 21.5783ZM34.1533 50.1117H60.3133L65.4 64.3783H29.0667L34.1533 50.1117Z"/>
      </svg>
      <p>버전 1.0.2 준비중</p>
    </GraphWrapper>
  )
};
  
export default Graph;
