import { createTheme } from '@mui/material/styles';

const textFieldTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff5a5a',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#ff5a5a',
            marginLeft: '0px',
          },
          '& .MuiOutlinedInput-root:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffcece',
          },
          '& .MuiOutlinedInput-input': {
            marginLeft: '25px',
            fontFamily: 'CookieRun',
            color: 'black',
          },
          '& .MuiInputLabel-root': {
            marginLeft: '25px',
            fontFamily: 'Jalnan',
            color: '#898989',
            fontWeight: 'normal',
            fontSize: '16px',
          },
          '& .MuiInputBase-root': {
            backgroundColor: 'white',
            borderRadius: '25px',
          }
        },
      },
    },
  },
});

export default textFieldTheme;