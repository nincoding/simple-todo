import { createTheme } from '@mui/material/styles';

export const textFieldTheme = createTheme({
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
            fontFamily: 'Jalnan',
            fontWeight: '300',
            color: '#303030',
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

export const modalTextFieldTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff5a5a',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#ff5a5a',
            
          },
          '& .MuiOutlinedInput-root:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffcece',
          },
          '& .MuiOutlinedInput-input': {
            fontFamily: 'Jalnan',
            fontWeight: '300',
            color: '#303030',
          },
          '& .MuiInputLabel-root': {
            fontFamily: 'Jalnan',
            color: '#898989',
            fontWeight: 'normal',
            fontSize: '16px',
            marginTop: '30px',
          },
          '& .MuiInputBase-root': {
            marginTop: '30px',
            backgroundColor: 'white',
            borderRadius: '25px',
          }
        },
      },
    },
  },
});