import { createContext, ReactNode, useState } from 'react';

type ThemeContextProviderProps = {
  children: ReactNode,
}

const initialState = {
  theme: 'light',
  toggleTheme: () => {},
};

const ThemeContext = createContext(initialState);

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<string>('light');

  function toggleTheme() {
    setTheme((prevState) => (
      prevState === 'light'
        ? 'dark'
        : 'light'
    ));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
export default ThemeContextProvider;
