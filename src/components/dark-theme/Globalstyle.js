import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    transition: all 0.30s linear;
    font-family: "Yanone Kaffeesatz", sans-serif;
  }
  .navbar-light .navbar-nav .nav-link {
    color:  ${({theme}) => theme.link};
  }
  h1,h1,h3,h4,h5,h6 {
    color: ${({theme}) => theme.text};
  }
  .contact-info {
    color:  ${({theme}) => theme.link};
  }
   `;
