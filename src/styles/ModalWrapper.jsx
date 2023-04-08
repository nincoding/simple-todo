import styled from "styled-components";

export const ModalBackGround = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`;

export const ModalWrapper = styled.div`
  display: ${(props) => props.open ? 'block' : 'none' };
  z-index: 9999;
  position: fixed;
  background-color: ${({ theme }) => theme.modalBackgroundColor };
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
    padding-top: 30px;
    margin: 30px 30px;
    max-width: 100%;
    font-size: 24px;
    word-break: keep-all;
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.modalTextColor };
    text-align: center;
  }
  .remove {
    padding-top: 100px;
    padding-left: 10px;
  }
  .removeModalBtn {
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 100px;
    gap: 100px;
  }
`;