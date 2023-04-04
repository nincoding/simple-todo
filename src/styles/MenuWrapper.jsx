import styled from "styled-components";

const MenuWrapper = styled.div`
  cursor: pointer;
  padding: 20px 35px;
  white-space: nowrap;
  color: ${(props) => (props.active ? "#ff5a5a" : "#898989")};
`;

export default MenuWrapper;