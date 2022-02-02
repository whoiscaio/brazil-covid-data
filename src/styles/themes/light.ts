import { DefaultTheme } from 'styled-components';
import pattern from './pattern';

const light: DefaultTheme = {
  ...pattern,
  colors: {
    ...pattern.colors,
    background: '#F6EDD9',
    text: '#08080F',
  },
};

export default light;
