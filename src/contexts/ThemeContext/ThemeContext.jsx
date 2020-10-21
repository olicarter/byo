import React, { createContext, useContext } from 'react';
import {
  createGlobalStyle,
  ThemeProvider as SCThemeProvider,
} from 'styled-components';
import { useMediaLayout } from 'use-media';

const theme = {
  palette: {
    black: 'black',
    cream: '#ddd5c4',
    teal: '#1d7771',
    green: 'hsl(140, 66%, 47%)',
    grey: '#999',
    lightGrey: 'hsl(0, 0%, 95%)',
    red: 'hsl(350, 80%, 50%)',
    pink: '#f0bac7',
    primary: '#fdc022',
    yellow: '#f9e543',
    white: 'white',
  },
};

const Global = createGlobalStyle(({ theme: { palette: { white } } }) => ({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    background: white,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    margin: 0,
    mozOsxFontSmoothing: 'grayscale',
    webkitFontSmoothing: 'antialiased',
  },
}));

export const ThemeContext = createContext({});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const isDesktop = useMediaLayout({ minWidth: '600px' });

  return (
    <ThemeContext.Provider value={{ ...theme, isDesktop }}>
      <SCThemeProvider theme={theme}>
        <Global />
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};
