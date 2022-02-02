import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { dark, light } from '../../styles/themes';

function App() {
  const [theme] = useState<string>('dark');

  const currentTheme = theme === 'dark' ? dark : light;

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        Brazil Covid Data
      </div>
    </ThemeProvider>
  );
}

export default App;
