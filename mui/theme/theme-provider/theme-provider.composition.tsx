import React from 'react';
import { createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { ThemeProvider } from './theme-provider';

const altTheme = createTheme({
  palette: {
    primary: {
      main: '#689f38',
    },
    secondary: {
      main: '#e65100',
    },
  },
});

export const BasicThemeProvider = () => (
  <>
    <ThemeProvider>
      <Button>Regular theme primary</Button>
      <Button color="secondary">Regular theme secondary</Button>
    </ThemeProvider>

    <br />
    <ThemeProvider theme={altTheme}>
      <Button>Alt theme primary</Button>
      <Button color="secondary">Alt theme Secondary</Button>
    </ThemeProvider>
  </>
);
