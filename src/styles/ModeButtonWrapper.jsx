import styled from "styled-components";

const ModeButtonWrapper = styled.button`
  position: absolute;
  top: 3px;
  right: 20px;
  z-index: 2;
  width: 45px;
  height: 45px;
  border: none;
  background-color: ${({ theme }) => theme.modeBtnBackgroundColor };
  cursor: pointer;
`;

export default ModeButtonWrapper;