import styled from "styled-components";

const ModeButtonWrapper = styled.button`
  position: absolute;
  top: 10px;
  right: 30px;
  z-index: 2;
  width: 60px;
  height: 60px;
  border: none;
  background-color: ${({ theme }) => theme.modeBtnBackgroundColor };
  cursor: pointer;
  @media screen and (max-width: 650px) {
    top: 3px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
`;

export default ModeButtonWrapper;