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
        root: {
          borderBottom: '4px solid',
          borderRadius: '4px',
          padding: '2px',
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
  },
});
