import { Global, css } from '@emotion/react'
import { theme } from './theme'

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          color: ${theme.colors.text};
        }

        body {
          background-color: ${theme.colors.background};
          overflow-x: hidden;
        }

        /* css scroll */
        ::-webkit-scrollbar {
          width: 5px;
        }

        ::-webkit-scrollbar-track {
          background: ${theme.colors.background};
        }

        ::-webkit-scrollbar-thumb {
          background: ${theme.colors.accent};
          border-radius: 5px;
        }
      `}
    />
  )
}
