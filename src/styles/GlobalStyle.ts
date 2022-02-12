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

  html, body {
    background: ${({ theme }) => theme.colors.background};
    transition: background .14s ease-in;
  }

  a {
    text-decoration: none;
  }
  
  a, h1, h2, h3, h4, h5, p {
    transition: color .14s ease-in;
  }

  button {
    background: none;
    border: 0;
  }

  li {
    list-style: none;
  }
`;
