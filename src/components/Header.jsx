import HeaderWrapper from "../styles/HeaderWrapper";
import { TbChecklist } from "react-icons/tb";
import styled from "styled-components";

const LogoIcon = styled(TbChecklist)`
  width: 45px;
  height: 45px;
  color: #FF5A5A;
`;

const Header = () => {

  return (
    <HeaderWrapper>
      <LogoIcon />
      <h1>TODAY I DO</h1>
    </HeaderWrapper>
  )
}

export default Header;