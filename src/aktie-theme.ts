import { ThemeOptions } from '@mui/material/styles';

export const AktieTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#3E838D'
    },
    secondary: {
      main: '#00A7CC'
    },
    error: {
      main: '#F00000'
    },
    warning: {
      main: '#ED6C02'
    },
    info: {
      main: '#0288D1'
    }
  },
  typography: {
    fontFamily: 'Roboto'
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained'
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          textTransform: 'capitalize',
          ':focus': {
            outline: '2px solid #0000008F',
            outlineOffset: '3px'
          }
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: 'outlined'
      }
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined'
      }
    }
  }
};
