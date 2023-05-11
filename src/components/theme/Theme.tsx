import { createTheme, ThemeProvider } from '../../';
import { ReactNode } from 'react';
import { COLORS } from '../../common/colors';

export const HUATheme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const theme = createTheme({
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
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '18.7px',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 'bold',
      fontSize: '13.3px',
    },
    h6: {
      fontSize: '10.7px',
      fontWeight: 'bold',
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
      variants: [
        {
          props: { color: 'primary' },
          style: {
            borderBottomColor: COLORS.primary.main,
          },
        },
        {
          props: { color: 'secondary' },
          style: { borderBottomColor: COLORS.secondary.main },
        },
        {
          props: { color: 'error' },
          style: { borderBottomColor: COLORS.error.main },
        },
        {
          props: { disabled: true },
          style: {
            borderBottomColor: COLORS.grey.dark,
            color: COLORS.grey.dark,
          },
        },
      ],
      styleOverrides: {
        input: {
          color: 'black',
        },
        root: {
          borderBottom: '4px solid',
          borderRadius: '8px',
          padding: '2px',
          paddingLeft: '4px',
          '&::before': {
            border: 0,
          },
          '&:hover': {
            '&::before': {
              border: '0 !important',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        variant: 'standard',
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            color: COLORS.primary.main,
          },
        },
        {
          props: { color: 'secondary' },
          style: { color: COLORS.secondary.main },
        },
        {
          props: { color: 'error' },
          style: { color: COLORS.error.main },
        },
        {
          props: { disabled: true },
          style: { color: COLORS.grey.dark },
        },
      ],
      styleOverrides: {
        root: {
          textAlign: 'start',
          fontWeight: 'bold',
          borderRadius: '8px',
          color: COLORS.primary.main,
          padding: '2px',
          paddingLeft: '8px',
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
      styleOverrides: {
        root: {
          height: '64px',
          boxShadow: 'none',
        },
      },
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
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          padding: '4px',
          color: COLORS.primary.main,
        },
        inputRoot: {
          color: COLORS.primary.main,
          borderTop: '0',
          borderRight: '0',
          borderLeft: '0',
          borderBottom: '4px solid',
          borderRadius: '8px',
          padding: '2px 2px 0px 2px',
          boxSizing: 'border-box',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: COLORS.primary.main,
        },
      },
    },
  },
});
