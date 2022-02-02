import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Poppins, Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;
