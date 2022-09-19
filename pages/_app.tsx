import type { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyles } from '../src/styles/globals.styles';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Ícone */}
        <link rel="icon" href="./assets/logo/512.png" />
        <link rel="apple-touch-icon" href="./assets/logo/192.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="author" content="Ranielli Montagna" />
        <meta name="copyright" content="© 2021 Ranielli Montagna" />

        <title>Ranielli Montagna</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
