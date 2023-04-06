import styled from "styled-components";

const ControlMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  > div:nth-child(1) {
    display: flex;
    width: 35%;
    justify-content: start;
    text-align: center;
    padding-left: 70px;
  }
  div:nth-child(2) {
    display: flex;
    width: 30%;
    justify-content: center;
    text-align: center;
    padding-left: 10px;
  }
  div:nth-child(3) {
    display: flex;
    width: 35%;
    justify-content: end;
    text-align: center;
    padding-right: 50px;
  }
`;

export default ControlMenu;