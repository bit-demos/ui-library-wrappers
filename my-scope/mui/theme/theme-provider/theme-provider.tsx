import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

export type ThemeProviderProps = {
  /**
   * a custom MUI theme object. If none is supplied, will use default theme objet
   */
  theme?: any,
  children: any
};

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#5c32a8',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

export function ThemeProvider({ theme = defaultTheme, children }: ThemeProviderProps) {
  return (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  );
}
