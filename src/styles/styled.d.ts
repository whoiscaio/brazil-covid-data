import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      darkPrimary: string,
      contrast: string,
      background: string,
      text: string,
      map: {
        fullGreen: string,
        midGreenYellow: string,
        fullYellow: string,
        midYellowRed: string,
        fullRed: string,
      },
    },
    measures: {
      borderRadius: string,
      boxShadow: string,
    }
  }
}
