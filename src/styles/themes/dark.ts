import { DefaultTheme } from 'styled-components';
import pattern from './pattern';

const dark: DefaultTheme = {
  ...pattern,
  colors: {
    ...pattern.colors,
    background: '#08080f',
    text: '#F6EDD9',
  },
};

export default dark;
