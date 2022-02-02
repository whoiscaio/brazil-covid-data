import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      darkPrimary: string,
      contrast: string,
      background: string,
      text: string,
    },
  }
}
