import { MoonIcon, SunIcon } from "../styles/ModeIcons";
import ModeButtonWrapper from "../styles/ModeButtonWrapper";
import { useContext } from "react";
import { DarkModeContext } from "../contexts/TodoContext";

const ModeButton = ({ toggleDarkMode }) => {

  const isDarkMode = useContext(DarkModeContext);

  return (
    <ModeButtonWrapper
      onClick={toggleDarkMode}
    >
      {
        isDarkMode 
        ? <SunIcon />
        : <MoonIcon />
      }
    </ModeButtonWrapper>
  )
}

export default ModeButton;