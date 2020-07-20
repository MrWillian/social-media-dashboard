import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [theme, setTheme] = 
    usePersistedState<DefaultTheme>('@social-media/theme', dark);
  
  const toggleTheme = () => 
    setTheme(theme.title === 'light' ? dark : light);
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Dashboard toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
