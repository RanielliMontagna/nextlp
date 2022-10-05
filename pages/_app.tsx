import App, { AppContext, AppProps } from 'next/app';
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

        {/* SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ranielli Montagna" />
        <meta name="copyright" content="© 2021 Ranielli Montagna" />
        <meta
          name="description"
          content="Ranielli Montagna é um desenvolvedor de software apaixonado por tecnologia e inovação. Ele é um entusiasta de tecnologias web e mobile, e está sempre em busca de novos desafios."
        />

        {/* Robots */}
        <meta name="robots" content="all" />

        {/* Open Graph */}
        <meta property="og:title" content="Ranielli Montagna" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ranimontagna.com/" />
        <meta property="og:image" content="/assets/logo/512.png" />
        <meta
          property="og:description"
          content="Ranielli Montagna é um desenvolvedor de software apaixonado por tecnologia e inovação. Ele é um entusiasta de tecnologias web e mobile, e está sempre em busca de novos desafios."
        />
        <meta property="fb:app_id" content="3803398276428135" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://www.ranimontagna.com/" />
        <meta name="twitter:creator" content="@ranii_montagna" />
        <meta name="twitter:title" content="Ranielli Montagna" />
        <meta
          name="twitter:description"
          content="Ranielli Montagna é um desenvolvedor de software apaixonado por tecnologia e inovação. Ele é um entusiasta de tecnologias web e mobile, e está sempre em busca de novos desafios."
        />
        <meta name="twitter:image" content="./assets/logo/512.png" />

        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="O6z_RtoewTbcN7GDKr5fiw51wEtYjNAlNJyfcZdwFd8"
        />

        <title>Ranielli Portfólio</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
