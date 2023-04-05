import { MoonIcon, SunIcon } from "../styles/ModeIcons";
import ModeButtonWrapper from "../styles/ModeButtonWrapper";

const ModeButton = ({ isDarkMode, toggleDarkMode }) => {

  return (
    <ModeButtonWrapper
      onClick={toggleDarkMode}
    >
      {
        isDarkMode 
        ? <SunIcon />
        : <MoonIcon />
      }
      { console.log(isDarkMode) }
    </ModeButtonWrapper>
  )
}

export default ModeButton;