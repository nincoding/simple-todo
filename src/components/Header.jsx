import HeaderWrapper from "../styles/HeaderWrapper";
import { TbChecklist } from "react-icons/tb";
import styled from "styled-components";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/TodoContext";

const LogoIcon = styled(TbChecklist)`
  width: 45px;
  height: 45px;
  color: ${(props) => props.isDarkMode ? '#5A88FF' : '#FF5A5A'};
`;

const Header = () => {

  const isDarkMode = useContext(DarkModeContext);

  return (
    <HeaderWrapper isDarkMode={isDarkMode} >
      <LogoIcon isDarkMode={isDarkMode}/>
      <h1>TODAY I DO</h1>
    </HeaderWrapper>
  )
}

export default Header;