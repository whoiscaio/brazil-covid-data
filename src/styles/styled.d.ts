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
        lowRisk: string,
        lowMidRisk: string,
        midRisk: string,
        highMidRisk: string,
        highRisk: string,
      },
    },
    measures: {
      borderRadius: string,
      boxShadow: string,
    }
  }
}
