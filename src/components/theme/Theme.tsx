import { createTheme, ThemeProvider, Toolbar } from '../../';
import { ReactNode } from 'react';
import { COLORS } from '../../common/colors';

export const HUATheme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E3092',
      light: '#474ADE',
      dark: '#1E1F5E',
    },
    secondary: {
      main: '#50B848',
      light: '#8BC387',
      dark: '#283827',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#E03C39',
      light: '#E57472',
    },
    info: {
      main: '#D9D9D9',
      light: '#EDEDED',
    },
  },
  typography: {
    fontFamily: 'Gotham, sans-serif',
    h1: {
      fontSize: '32px',
    },
    h2: {
      fontSize: '24px',
    },
    h3: {
      fontSize: '18.7px',
    },
    h4: {
      fontSize: '16px',
    },
    h5: {
      fontSize: '13.3px',
    },
    h6: {
      fontSize: '10.7px',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          borderBottom: '4px solid',
          borderRadius: '4px',
        },
      },
    },
    MuiTableContainer: {
      defaultProps: {
        color: 'primary',
      },
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderLeft: '4px solid' + COLORS.primary.main,
          borderRadius: '8px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: 'left',
          fontWeight: 'normal',
          border: 'none',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid' + COLORS.primary.main,
          background: COLORS.grey.light,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        children: (props: any) => <Toolbar>{props.children}</Toolbar>,
      },
      styleOverrides: {},
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '8px',
          borderTop: '4px solid' + COLORS.primary.main,
          boxShadow: 'none',
          maxHeight: 'none',
          maxWidth: 'none',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          fontSize: '16px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          background: COLORS.grey.light,
        },
      },
    },
  },
});
