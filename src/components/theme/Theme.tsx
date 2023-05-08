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

    MuiAccordion: {
      styleOverrides: {
        root: {
          ':before': {
            backgroundColor: 'transparent',
          },

          border: '0px',
          borderRadius: '8px',
          marginBottom: '12px',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.primary.main,
          color: '#FFFFFF',
          borderRadius: '8px',
        },
        expandIconWrapper: {
          color: '#FFFFFF',
        },
        disabled: {
          backgroundColor: COLORS.grey.light,
          color: COLORS.grey.main,
        },
      },
    },
  },
});
