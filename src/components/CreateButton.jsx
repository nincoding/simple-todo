import { Button } from '@mui/material';
import createBtnTheme from '../styles/createBtnTheme';
import { ThemeProvider } from '@mui/material/styles';

const CreateButton = ({ onClick, disabled }) => {

  return (
    <ThemeProvider theme={createBtnTheme}>
      <Button 
        variant="outlined"
        theme={createBtnTheme}
        onClick={onClick}
        disabled={disabled}
      >
        ADD
      </Button>
    </ThemeProvider>
  )
}

export default CreateButton;