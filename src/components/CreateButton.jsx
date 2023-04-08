import { Button } from '@mui/material';
import { createBtnTheme, createBtnDarkTheme } from '../styles/createBtnTheme';
import { ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import { DarkModeContext } from '../contexts/TodoContext';

const CreateButton = ({ onCreateClick, disabled }) => {

  const isDarkMode = useContext(DarkModeContext);
  const theme = isDarkMode ? createBtnDarkTheme : createBtnTheme;

  return (
    <ThemeProvider theme={ theme }>
      <Button 
        variant="outlined"
        onClick={onCreateClick}
        disabled={disabled}
      >
        ADD
      </Button>
    </ThemeProvider>
  )
}

export default CreateButton;