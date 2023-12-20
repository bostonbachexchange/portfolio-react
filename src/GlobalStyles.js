// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f8f8f8;
  }

  a {
    text-decoration: none;
    color: #61dafb;
    transition: color 0.3s ease;

    &:hover {
      color: #217ac0;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
    font-family: 'Arial', sans-serif;
  }
`;

export default GlobalStyles;
