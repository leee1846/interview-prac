import React from 'react';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './styles/theme';
import RootPage from './pages/RootPage';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RootPage />
      </ThemeProvider>
    </Router>
  );
};

export default App;
