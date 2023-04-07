import { Button } from '@mui/material';
import { createBtnTheme } from '../styles/createBtnTheme';
import { ThemeProvider } from '@mui/material/styles';

const CreateButton = ({ onCreateClick, disabled }) => {

  return (
    <ThemeProvider theme={createBtnTheme}>
      <Button 
        variant="outlined"
        theme={createBtnTheme}
        onClick={onCreateClick}
        disabled={disabled}
      >
        ADD
      </Button>
    </ThemeProvider>
  )
}

export default CreateButton;