import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset margin and padding for all elements */
  body, h1, h2, h3, h4, h5, h6, p, ul, li {
    margin: 0;
    padding: 0;
  }

  /* Remove extra scrollbar */
  body {
    overflow: hidden;
  }
`;

export default GlobalStyles;