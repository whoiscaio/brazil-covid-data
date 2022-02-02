import { DefaultTheme } from 'styled-components';
import pattern from './pattern';

const light: DefaultTheme = {
  ...pattern,
  colors: {
    ...pattern.colors,
    background: '#F6EDD9',
    text: '#333333',
  },
};

export default light;
