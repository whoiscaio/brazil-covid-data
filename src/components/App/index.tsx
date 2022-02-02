import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';

import { dark, light } from '../../styles/themes';
import Router from '../Router';

function App() {
  const [theme] = useState<string>('dark');

  const currentTheme = theme === 'dark' ? dark : light;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <div className="App">
        Brazil Covid Data
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
