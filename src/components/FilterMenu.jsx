import { useContext } from "react";
import MenuWrapper from "../styles/MenuWrapper";
import { DarkModeContext } from "../contexts/TodoContext";

const FilterMenu = ({ text ,active, onClick }) => {

  const isDarkMode = useContext(DarkModeContext);

  return (
    <MenuWrapper active={active} onClick={onClick} isDarkMode={isDarkMode}>
      {text}
    </MenuWrapper>
  )
}

export default FilterMenu;