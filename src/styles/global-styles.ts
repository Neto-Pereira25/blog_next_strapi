import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${() => theme.font.sizes.medium};
  }

  a {
    color: ${() => theme.colors.secondary};
    text-decoration: none;
    transition: opacity 300ms ease-in-out;
  }

  a:hover {
    opacity: 0.6;
  }
`;
