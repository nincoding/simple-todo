import { createTheme } from '@mui/material/styles';

export const createBtnTheme = createTheme({
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

export const createBtnDarkTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#5a88ff',
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
            backgroundColor: '#3f88d7',
          },
        },
      },
    },
  },
});

export const removeModalBtnTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#ff5a5a',
          color: 'white',
          fontFamily: 'Jalnan',
          borderRadius: '25px',
          border: 'none',
          fontSize: '16px',
          padding: '5px 30px',
          '&:hover': {
            backgroundColor: '#ff5a5a',
            border:'none',
          },
          '&:active': {
            backgroundColor: '#bf0000',
          },
        },
      },
    },
  },
})

export const removeModalBtnDarkTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#5A88FF',
          color: 'white',
          fontFamily: 'Jalnan',
          borderRadius: '25px',
          border: 'none',
          fontSize: '16px',
          padding: '5px 30px',
          '&:hover': {
            backgroundColor: '#5A88FF',
            border:'none',
          },
          '&:active': {
            backgroundColor: '#bf0000',
          },
        },
      },
    },
  },
})

export const cancelModalBtnTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#5f3b3b',
          color: 'white',
          fontFamily: 'Jalnan',
          borderRadius: '25px',
          border: 'none',
          fontSize: '16px',
          padding: '5px 30px',
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
})