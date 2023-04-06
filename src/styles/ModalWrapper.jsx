import styled from "styled-components";

const ModalWrapper = styled.div`
  display: ${(props) => props.open ? 'block' : 'none' };
  z-index: 9999;
  position: fixed;
  background-color: #fff7da;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
  cursor: pointer;
  height: auto;
  min-height: 450px;
  max-height: 80vh;

  @media screen and (min-width: 650px) {
    width: 450px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    padding: 20px;
  }
  @media screen and (max-width: 650px) {
    width: 350px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    padding: 20px;
  }
  > p {
    margin: 50px 30px;
    max-width: 100%;
    font-size: 24px;
    word-break: keep-all;
    overflow-wrap: break-word;
    color: #303030;
  }
`;

export default ModalWrapper;