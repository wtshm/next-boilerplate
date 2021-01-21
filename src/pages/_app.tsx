import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'sanitize.css';
import 'styles/globals.scss';
import { siteTitle } from 'shared/consts';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
