import { ThemeOptions } from '@mui/material/styles';

export const AktieTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#E1008B',
    },
    secondary: {
      main: '#8D1097'
    },
    error: {
      main: '#F00000'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          textTransform: 'capitalize',
          ':focus': {
            outline: '2px solid #0000008F',
            outlineOffset: '3px',
          }
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      }
    }
  }
};
