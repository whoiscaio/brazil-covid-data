import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';

import { dark, light } from '../../styles/themes';
import Header from '../Header';
import Router from '../Router';

function App() {
  const [theme, setTheme] = useState<string>('light');

  const currentTheme = theme === 'dark' ? dark : light;

  function toggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <div className="App">
        <Header currentTheme={theme} toggleTheme={toggleTheme} />
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
