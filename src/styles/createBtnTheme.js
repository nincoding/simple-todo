import { createTheme } from '@mui/material/styles';

const createBtnTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#ff5a5a',
          color: 'white',
          fontFamily: 'Jalnan',
          borderRadius: '25px',
          border: 'none',
          fontSize: '18px',
          padding: '5px 20px',
          '&:hover': {
            backgroundColor: '#5f3b3b',
            border:'none',
          },
          '&:active': {
            backgroundColor: '#bf0000',
          },
        },
      },
    },
  },
});

export default createBtnTheme;