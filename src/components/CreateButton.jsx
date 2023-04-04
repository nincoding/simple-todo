import Button from '@mui/material/Button';
import createBtnTheme from '../styles/createBtnTheme';

const CreateButton = () => {
  return (
    <div>
      <Button 
        variant="outlined"
        theme={createBtnTheme}
      >
        ADD
      </Button>
    </div>
  )
}

export default CreateButton;