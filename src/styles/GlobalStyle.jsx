import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
*,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .a11y-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    margin: -1px;
    clip-path: polygon(0 0, 0 0, 0 0);
  }
  html, body, #root {
    height: 100%;
  }
  
  html {
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    border: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ol,ul,li {
    list-style: none;
  }
  input, button, textarea {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    background-color: inherit;
  }
  textarea {
    resize: none;
  }
  
  button {
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
  }    
  
  input,textarea {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
