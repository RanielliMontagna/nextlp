import { Global, css } from '@emotion/react';
import { theme } from './theme';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;

          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, sans-serif;

          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
        }
      `}
    />
  );
};
