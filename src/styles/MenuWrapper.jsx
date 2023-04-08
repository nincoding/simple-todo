import styled, { css } from "styled-components";

const DarkStyle = css`
  color: ${(props) => (props.active ? "#3A5BAE" : "#898989")};
`

const LigthStyle = css`
  color: ${(props) => (props.active ? "#ff5a5a" : "#898989")};
`

const MenuWrapper = styled.div`
  cursor: pointer;
  padding: 20px 35px;
  white-space: nowrap;
  ${({ isDarkMode }) => isDarkMode ? DarkStyle : LigthStyle}
`;

export default MenuWrapper;