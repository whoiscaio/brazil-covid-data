import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../styles/GlobalStyle';
import { ThemeContext } from '../../contexts/ThemeContext';
import { dark, light } from '../../styles/themes';
import Header from '../Header';
import Router from '../Router';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const currentTheme = theme === 'dark' ? dark : light;

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
