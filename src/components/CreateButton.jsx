import { Button } from '@mui/material';
import createBtnTheme from '../styles/createBtnTheme';
import { ThemeProvider } from '@mui/material/styles';

const CreateButton = () => {
  return (
    <ThemeProvider theme={createBtnTheme}>
      <Button 
        variant="outlined"
        theme={createBtnTheme}
      >
        ADD
      </Button>
    </ThemeProvider>
  )
}

export default CreateButton;