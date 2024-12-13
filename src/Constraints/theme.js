import React from 'react';
import { createTheme } from '@mui/material/styles';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#0060ef', // Primary color
    },
    secondary: {
      main: '#f50057', // Secondary color
    },
    text: {
      primary: '#000000', // Primary text color
      secondary: '#555555', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Rubik, sans-serif', // Base font family
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 300,
    },
    button: {
      textTransform: 'none', // Prevent buttons from being uppercase
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Customize button border radius
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          margin: '16px 0',
        },
        h2: {
          margin: '16px 0',
        },
        // Add more overrides as needed
      },
    },
  },
});

export default theme;