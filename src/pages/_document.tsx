import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const url = '';
const title = '';
const description = '';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja-JP">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={url} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={title} />
          <meta property="og:image" content={`${url}/og_image.png`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
